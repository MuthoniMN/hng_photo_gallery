import React from "react";
import Searchbar from "./Searchbar";
import Avatar from "./Avatar";
import Login from "./Login";

export default function Navigation( {loggedIn} ) {
    return (
        <nav className="flex justify-between py-16 px-32">
            <img src="./logo.png" alt="Michelle's Gallery" className="w-16 h-16"/>
            <Searchbar />
            {loggedIn} ? 
                    <Avatar /> :  
                    <Login />
        </nav>
    )
}