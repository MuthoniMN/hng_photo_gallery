import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import Picture from './Picture';


export const SortablePicture = (props) => {
  const sortable = useSortable({id: props.imgSource});
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
    <Picture
      ref={setNodeRef}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};
