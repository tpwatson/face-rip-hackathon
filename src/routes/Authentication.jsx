import React from 'react'
import { ReactDOM } from 'react'

export default function Authentication() {

    return (
        <>
        <h1>Authentication</h1>
        {/* create a list with various authentication options (google, facebook, twitter, etc.) that will redirect to the respective authentication page*/}
        <ul>
            <li>Google</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Reddit</li>
            <li>Discord</li>
            <li>Steam</li>
            <li>Spotify</li>            
        </ul>
        </>
    )
}

/*
Shares from other sites needs to be able to have authentication
to verify if another person posted it originally, so they get credit.

A person can opt how much credit to take from the sharer

Log in with {Youtube/TikTok/Twitter/Insta} to share your already uploaded content
*/
