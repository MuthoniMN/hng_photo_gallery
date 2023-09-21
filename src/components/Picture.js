import React from "react";

const Picture = ( {imgSource, altDesc, imgTag} ) => {
    return (
        <div className="max-w-sm overflow-hidden shadow-lg">
            <img src={imgSource} alt={altDesc} className="w-full" />
            <span className="bg-green-400 rounded-full px-2 py-1 text-sm font-semibold w-fit-content">{imgTag}</span>
        </div>
    )
}

export default Picture;