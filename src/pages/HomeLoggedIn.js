import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import "../App.css";
import {
  DndContext,
  closestCenter,
  DragOverlay,
  KeyboardSensor, MouseSensor, useSensor, useSensors
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { SortablePicture } from '../components/SortablePicture';
import Picture from '../components/Picture';

function HomeLoggedIn() {
  const mouseSensor = useSensor(MouseSensor)
  const keyboardSensor = useSensor(KeyboardSensor)
  const sensors = useSensors(mouseSensor, keyboardSensor)
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

  function dragStart(event) {
    setActiveId(event.active.id);
  }

  function dragEnd(event) {
    const { active, over } = event;
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

  return (
    <div className='container mx-auto py-4'>
      <Navigation />
      <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 justify-center">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={dragEnd}
          onDragStart={dragStart}
          onDragCancel={dragCancel}
        >
          <SortableContext items={photos} strategy={rectSortingStrategy} id='image-gallery'>
            {photos.map((image, index) => <SortablePicture image={image} key={image.src} index={index} />)}
          </SortableContext>
        </DndContext>
        <DragOverlay adjustScale={true}>
        {activeId ? (
          <Picture image={photos.filter(img => img.src === activeId)} index={photos.indexOf(activeId)} />
        ) : null}
      </DragOverlay>
      </div>
    </div>
  );
}

export default HomeLoggedIn;