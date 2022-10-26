import React from 'react'
import { ReactDOM } from 'react'
import { useState } from 'react';
import { Web3Storage } from 'web3.storage'

export default function Upload() {

    const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);
    // web3.storage state
    const [isStored, setIsStored] = useState(false);
    const [storageLocation, setStorageLocation] = useState();

    //console.log(process.env);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};
    function getAccessToken () {
        // If you're just testing, you can paste in a token
        // and uncomment the following line:
        // return 'paste-your-token-here'
      
        // In a real app, it's better to read an access token from an
        // environement variable or other configuration that's kept outside of
        // your code base. For this to work, you need to set the
        // WEB3STORAGE_TOKEN environment variable before you run your code.
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
                    <p>File got stored  
                        <a href={"https://"+storageLocation + ".ipfs.w3s.link/"+selectedFile.name} target="blank"> here</a>
                    </p>
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