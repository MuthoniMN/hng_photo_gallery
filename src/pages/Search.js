import React from 'react';
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";
import "../App.css"

const Search = () => {
    const params = new URLSearchParams(window.location.search)
    const tag = params.get('tag')
    const images = [
        {
          src: "../img/womanintech1.jpg",
          desc: "A woman in tech",
          tag: "woman in tech"
        },
        {
          src: "../img/sky3.jpg",
          desc: "A sky",
          tag: "sky"
        },
        {
          src: "../img/womanintech2.jpg",
          desc: "A woman in tech",
          tag: "woman in tech"
        },
        {
          src: "../img/memes2.jpg",
          desc: "A meme",
          tag: "meme"
        },
        {
          src: "../img/memes3.jpg",
          desc: "A meme",
          tag: "meme"
        },
        {
          src: "../img/sky2.jpg",
          desc: "A sky",
          tag: "sky"
        },
        {
          src: "../img/womanintech3.jpg",
          desc: "A woman in tech",
          tag: "woman in tech"
        },
        {
          src: "../img/memes1.jpg",
          desc: "A meme",
          tag: "meme"
        },
        {
          src: "../img/sky1.jpg",
          desc: "A sky",
          tag: "sky"
        }
      ]
    let imgs = images.filter(img => img.tag === tag) || null
    return(
        <div className='container mx-auto'>
            <Navigation  />
            {<Gallery images={imgs}/>}
        </div>
    )
}

export default Search;