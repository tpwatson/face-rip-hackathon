import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './Links.css'
import Homepage from '../routes/Homepage'
import Authentication from '../routes/Authentication'
import Feed from '../routes/Feed'
import Profile from '../routes/Profile'
import Upload from '../routes/Upload'
import ContentSingle from '../routes/ContentSingle';
import DatabaseTest from '../routes/DatabaseTest';
import Register from '../routes/Register';
import Login from '../routes/Login';

export default function Links() {
    return (
        <>
        <BrowserRouter>
            <ul>
                <li>
                    <NavLink to="/">
                        Homepage
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Authentication">
                        Authentication
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Feed">
                        Feed
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Profile">
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Upload">
                        Upload
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ContentSingle">
                        ContentSingle
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/DatabaseTest">
                        Database Test
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Register">
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Login">
                        Login
                    </NavLink>
                </li>
            </ul>
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/authentication" element={<Authentication />} />
            <Route exact path="/feed" element={<Feed />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/upload" element={<Upload />} />
            <Route exact path="/contentSingle" element={<ContentSingle />} />
            <Route exact path="/databaseTest" element={<DatabaseTest />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}