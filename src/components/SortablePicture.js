import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities   ';
import Picture from './Picture';


export const SortablePicture = ({image}) => {
  const sortable = useSortable({id: image.src});
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = sortable;


  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
    >
        <Picture imgSource={image.src} imgTag={image.tag} altDesc={image.desc} />
    </div>
  );
};
