import React from 'react'
import { ReactDOM } from 'react'

/*
Log in users by having them connect their wallet to the app using Xumm SDK.
Get User Token
Display wallet connection status top right of page
*/

export default function Login() {

    return (
        <>
        <h1>Login</h1>
        <input type="text" placeholder="Email" /> 
        <input type="text" placeholder="Password" /> 
        <button>Submit</button> 
        <button>Sign Up</button> 

        </>
    )
}
