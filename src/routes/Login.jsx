import React from 'react'
import { ReactDOM } from 'react'
import {XummSdk} from 'xumm-sdk'
const Sdk = new XummSdk(import.meta.env.VITE_XUMM_APIKEY, import.meta.env.VITE_XUMM_APISECRET)
/*
Log in users by having them connect their wallet to the app using Xumm SDK.
Get User Token
Display wallet connection status top right of page
*/
const auth = new XummPkce(import.meta.env.VITE_XUMM_APIKEY)

auth.authorize().then(authorized => {
    const {sdk, me} = authorized
    console.log('User info', me)
    sdk.ping().then(pong => console.log({pong}))
  })
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
