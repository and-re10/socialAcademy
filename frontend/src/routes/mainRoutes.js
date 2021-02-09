import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/homaPage/index";
import UserProfile from "../components/userProfile/index";

function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/:id" element={<UserProfile/>}/>
        </Routes>
    )
}

export default MainRoutes;