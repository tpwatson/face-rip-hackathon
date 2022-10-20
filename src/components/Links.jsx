import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './Links.css'
import Homepage from './Homepage'
import Authentication from './Authentication'
import Feed from './Feed'
import Profile from './Profile'

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
            </ul>
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/authentication" element={<Authentication />} />
            <Route exact path="/feed" element={<Feed />} />
            <Route exact path="/profile" element={<Profile />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}