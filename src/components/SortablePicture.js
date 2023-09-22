import React from 'react';
import {CSS} from '@dnd-kit/utilities';
import Picture from './Picture';
import { useSortable } from '@dnd-kit/sortable';


export const SortablePicture = ({image, ...props}) => {
  const sortable = useSortable({id: image.src});
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = sortable;


  const style = {
    transition,
    transform: CSS.Translate.toString(transform)
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
    >
        <Picture image={image} />
    </div>
  );
};
