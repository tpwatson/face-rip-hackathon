import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './Navbar.css'
import Logo from '../../assets/logo4.png'

export default function Navbar() {
    
    return (
        <>
            <nav id="Navbar">
                <img id="logo" src={Logo} height="42" width="118" alt="" />                
                <input type="search" id="searchBar" name="searchBar" placeholder='Find Stuff'></input>
                <button id="searchButton">🔍</button>
                <button id="uploadButton">Upload</button>
                <button id="loginButton">Login</button>
            </nav>
        </>
    )
}