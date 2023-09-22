import React, {useState} from 'react';
import Picture from '../components/Picture';
import Navigation from '../components/Navigation';
import "../App.css";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { SortablePicture } from '../components/SortablePicture';

function HomeLoggedIn() {
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
  ];
  const [photos, setPhoto] = useState(images);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  return (
    <div className='container mx-auto'>
      <Navigation />
      <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onDragCancel={dragCancel}
    >
      <SortableContext items={photos} strategy={rectSortingStrategy} id='image-gallery'>
      <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 justify-center">
            {photos.map((image, index) => <SortablePicture imgSource={image.src} imgTag={image.tag} altDesc={image.desc} key={image.src} index={index} />)}
        </div>
      </SortableContext>
      <DragOverlay adjustScale={true}>
        {activeId ? (
          <Picture imgSource={activeId} index={photos.indexOf(activeId)} />
        ) : null}
      </DragOverlay>
    </DndContext>
    </div>
  );
  function dragStart(event) {
    setActiveId(event.active.id);
  }

  function dragEnd(event) {
    const {active, over} = event;

    console.log(event);
    if (active.id !== over.id) {
      setPhoto((photos) => {
        const oldPosition = photos.indexOf(active.id);
        const newPosition = photos.indexOf(over.id);

        return arrayMove(photos, oldPosition, newPosition);
      });
    }

    setActiveId(null);
  }

  function dragCancel() {
    setActiveId(null);
  }
}

export default HomeLoggedIn;