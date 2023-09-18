import React from "react";
import Searchbar from "./Searchbar";
import Avatar from "./Avatar";

export default function Navigation() {
    return (
        <nav className="flex justify-between py-16 px-32">
            <img src="./logo.png" />
            <Searchbar />
            <Avatar />
        </nav>
    )
}