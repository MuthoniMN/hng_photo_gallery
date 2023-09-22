import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Picture = ( {imgSource, altDesc, imgTag, ...props}, ref ) => {
    return (
        <div ref={ref} className="max-w-sm overflow-hidden shadow-lg h-fit-content  flex flex-col place-items-center">
            {<img src={imgSource} alt={altDesc} className="w-full mb-3" /> || <Skeleton count={5} />}
            {<span className="bg-teal-400 text-white rounded-full px-2 py-1 text-sm font-semibold w-fit-content m-4">{imgTag}</span> || <Skeleton />}
        </div>
    )
}

export default React.forwardRef(Picture);