import React from "react";

const Picture = ( {imgSource, altDesc, imgTag} ) => {
    return (
        <div className="max-w-sm overflow-hidden shadow-lg">
            <img src={imgSource} alt={altDesc} className="w-full" />
            <p className="bg-green-400 rounded-full px-2 text-sm font-semibold">{imgTag}</p>
        </div>
    )
}

export default Picture;