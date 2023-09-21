import React from "react";

const Picture = ( {imgSource, altDesc, imgTag} ) => {
    return (
        <div className="max-w-sm overflow-hidden shadow-lg h-fit-content  flex flex-col place-items-center">
            <img src={imgSource} alt={altDesc} className="w-full mb-3" />
            <span className="bg-teal-400 text-white rounded-full px-2 py-1 text-sm font-semibold w-fit-content m-4">{imgTag}</span>
        </div>
    )
}

export default Picture;