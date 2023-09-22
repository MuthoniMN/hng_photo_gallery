import React from "react";
import Searchbar from "./Searchbar";
import Login from "./Login";
import Search from "../pages/Search";
import LogoutButton from "./Logout";
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
    const navigate = useNavigate()

    return (
        <nav className="flex justify-between flex-wrap py-8 px-12 w-full mb-4">
            <img src="./logo.png" alt="Michelle's Gallery" className="w-16 h-16" onClick={() => navigate(`/`)} />
            <Searchbar searchText={(x) => <Search tag={x}/>} />
            <Login />
            <LogoutButton />
        </nav>
    )
}