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
        cid: storageLocation,
        filename: '',
        filetype: '',
        timestamp: ''
    });

    function handleFormDataUpdate(event) {
        setUploadFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
                
            }
        })
    }
    
    function publishToDb(){
        createContent({...setUploadFormData});
    }
    

      function createContent(uploadFormData) {
        console.log(typeof uploadFormData);
        
        fetch('http://localhost:3001/content', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({uploadFormData}),
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
 
          })
          .catch(err => {
            console.log(err);
        })
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
                    <div>
				        <button onClick={getFiles}>Upload</button>
			        </div>
				</div>
			) : (
				<p></p>
			)}
            {isStored ? (
                <div>
                    <p>File uploaded to IPFS @
                        <a href={"https://"+storageLocation + ".ipfs.w3s.link/"+selectedFile.name} target="blank"> {storageLocation}</a>
                    </p>
                    <input type="text" name="title" onChange={handleFormDataUpdate} placeholder="Title (stored on FaceRip)" />
                    <input type="text" name="description" onChange={handleFormDataUpdate} placeholder="Description (stored on FaceRip)" />
                    <input type="text" name="filename" onChange={handleFormDataUpdate} placeholder="Filename (stored on IPFS)" defaultValue={selectedFile.filename} />
                    <input type="text" name="filetype" placeholder="File Type" defaultValue={selectedFile.type} />
                    <input type="text" name="cid" placeholder="ipfsCID" defaultValue={storageLocation}/>
                    <input type="text" name="timestamp" placeholder="Date & Time Uploaded" defaultValue={Date.now()/1000} />
                    <button onClick={publishToDb}>Publish</button>
                    <img src={"https://"+storageLocation + ".ipfs.w3s.link/"+selectedFile.name} width="250" alt="" />
                </div>

                ) : (
            <p></p>
            )}

        </>
    )
}



/*

1) Add way to upload a piece of content (ipfs) using web3.storage for 
simplicity

Upload would put data into our DB
Upload would put data onto IPFS or via web3.storage

*/