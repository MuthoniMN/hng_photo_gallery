import React from "react";
import Picture from "./Picture";

const Gallery = ( {images} ) => {
    return (
        <div className="container mx-auto">
           <div className="grid grid-cols-4 gap-4">
                {images.map(image => <Picture imgSource={image.src} imgTag={image.tag} altDesc={image.desc} />)}
           </div>
        </div>
    )
}

export default Gallery;