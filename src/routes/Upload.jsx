import React, {useState, useEffect} from 'react'
import { ReactDOM } from 'react'
import { Web3Storage } from 'web3.storage'


export default function Upload() {
    const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);
    // web3.storage state
    const [isStored, setIsStored] = useState(false);
    const [storageLocation, setStorageLocation] = useState();

    // store content metadata in db
    const [uploadFormData, setUploadFormData] = useState({
        title: '',
        description: '',
        tags: '',
        cid: '',
        filename: '',
        filetype: '',
        timestamp: ''
    });
        
    // const [title, setTitle] = useState();
    // const [description, setDescription] = useState();
    // const [cid, setCid] = useState();
    // const [filname, setFilename] = useState();
    // const [filetype, setFiletype] = useState();
    // const [filetype, setFiletype] = useState();
    // const [timestamp, setTimestamp] = useState();


    function publishToDb(){
        // use on change to set the state per character
        setTitle(document.getElementById("title").value)
        const description = document.getElementById("description").value
        const cid = document.getElementById("cid").value
        const filename = document.getElementById("filename").value
        setFiletype(document.getElementById("filetype").value)
        setTimestamp(Date.now()/1000)
        createContent(title, description, cid, filename, filetype, timestamp);
    }

      function createContent(title, description, cid, filename, filetype, timestamp) {
        
        fetch('http://localhost:3001/content', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title, description, cid, filename, filetype, timestamp}),
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            getContent();
          });
      }
    //console.log(process.env);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};
    function getAccessToken () {
        return import.meta.env.VITE_WEB3STORAGE_TOKEN
      }
    function makeStorageClient () {
    return new Web3Storage({ token: getAccessToken() })
    }
    function getFiles () {
        const fileInput = document.querySelector('input[type="file"]')
        console.log(fileInput.files);
        storeFiles(fileInput.files)
      }
	
    async function storeFiles (files) {
        const client = makeStorageClient()
        const cid = await client.put(files)
        console.log('stored files with cid:', cid)
        setIsStored(true);
        setStorageLocation(cid)
        return cid
    }
	
    return (
        <>
        <h1>Upload Funny Stuff</h1>
        <input type="file" name="file" onChange={changeHandler} />
        {isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
            {isStored ? (
                <div>
                    <p>File uploaded to IPFS @
                        <a href={"https://"+storageLocation + ".ipfs.w3s.link/"+selectedFile.name} target="blank"> {storageLocation}</a>
                    </p>
                    <input type="text" id="title" onChange={setTitle} placeholder="Title (stored on FaceRip)" />
                    <input type="text" id="description" placeholder="Description (stored on FaceRip)" />
                    <input type="text" id="filename" placeholder="Filename (stored on IPFS)" defaultValue={selectedFile.filename} />
                    <input type="text" id="filetype" placeholder="File Type" defaultValue={selectedFile.type} />
                    <input type="text" id="cid" placeholder="ipfsCID" defaultValue={storageLocation}/>
                    <input type="text" id="timestamp" placeholder="Date & Time Uploaded" defaultValue={Date.now()/1000} />
                    <button onClick={publishToDb}>Publish</button>
                    <img src={"https://"+storageLocation + ".ipfs.w3s.link/"+selectedFile.name} width="250" alt="" />
                </div>

                ) : (
            <p>File Did Not Get Stored</p>
            )}

			<div>
				<button onClick={getFiles}>Upload</button>
			</div>
        </>
    )
}



/*

1) Add way to upload a piece of content (ipfs) using web3.storage for 
simplicity

Upload would put data into our DB
Upload would put data onto IPFS or via web3.storage

*/