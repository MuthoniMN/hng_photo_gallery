import React from "react";

export default function Avatar( fileSource ){
    return (
        <img src={fileSource} className="w-64 h-64 rounded-full" alt="profile picture"/>
    )
}