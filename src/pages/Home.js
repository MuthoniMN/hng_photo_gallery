import React from 'react';
import Gallery from '../components/Gallery';
import Navigation from '../components/Navigation';
import "../App.css";

function Home() {
  const images = [
    {
      src: "./img/womanintech1.jpg",
      desc: "A woman in tech",
      tag: "woman in tech"
    },
    {
      src: "./img/sky3.jpg",
      desc: "A sky",
      tag: "sky"
    },
    {
      src: "./img/womanintech2.jpg",
      desc: "A woman in tech",
      tag: "woman in tech"
    },
    {
      src: "./img/memes2.jpg",
      desc: "A meme",
      tag: "meme"
    },
    {
      src: "./img/memes3.jpg",
      desc: "A meme",
      tag: "meme"
    },
    {
      src: "./img/sky2.jpg",
      desc: "A sky",
      tag: "sky"
    },
    {
      src: "./img/womanintech3.jpg",
      desc: "A woman in tech",
      tag: "woman in tech"
    },
    {
      src: "./img/memes1.jpg",
      desc: "A meme",
      tag: "meme"
    },
    {
      src: "./img/sky1.jpg",
      desc: "A sky",
      tag: "sky"
    }
  ]
  return (
    <div className='container mx-auto py-4'>
      <Navigation />
      <Gallery images={images}/>
    </div>
  );
}

export default Home;