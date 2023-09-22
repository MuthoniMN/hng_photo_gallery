import React from "react";
import Loading from "./Loading";

const Picture = ( {image, ...props}, ref ) => {

    return (
        <div ref={ref} className="max-w-sm overflow-hidden shadow-lg flex flex-col place-items-center">
            {<img src={image.src} alt={image.desc} className="mb-3 h-56" /> || <Loading />}
            {<span className="bg-teal-400 text-white rounded-full px-2 py-1 text-sm font-semibold w-fit-content m-4">{image.tag}</span> || <Loading />}
        </div>
    )
}

export default React.forwardRef(Picture);