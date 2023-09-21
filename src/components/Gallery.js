import React from "react";
import Picture from "./Picture";

const Gallery = ({ images }) => {
    return (
        <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 justify-center">
            {images.map(image => <Picture imgSource={image.src} imgTag={image.tag} altDesc={image.desc} />)}
        </div>
    )
}

export default Gallery;