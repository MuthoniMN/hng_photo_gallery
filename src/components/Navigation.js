import React from "react";
import Searchbar from "./Searchbar";
import Login from "./Login";

export default function Navigation( {loggedIn} ) {
    return (
        <nav className="flex justify-between flex-wrap py-8 px-12 w-full">
            <img src="./logo.png" alt="Michelle's Gallery" className="w-16 h-16 mx-auto md:mx-0"/>
            <Searchbar />
            {{loggedIn} ? 
                    null:  
                    <Login />}
        </nav>
    )
}