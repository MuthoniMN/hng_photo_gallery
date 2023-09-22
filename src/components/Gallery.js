import React from "react";
import Picture from "./Picture";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"

class Gallery extends React.Component {
    render() {
      const { provided, innerRef, children } = this.props;
      return (
        <div {...provided.droppableProps} ref={innerRef} className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 justify-center">
          {children}
        </div>
      );
    }
  }

  class Image extends React.Component {
    render() {
      const { provided, innerRef, imgSource,  imgTag, altDesc} = this.props;
      return (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={innerRef}
        >
          <Picture imgSource={imgSource} imgTag={imgTag} altDesc={altDesc} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} provided={provided}/>
        </div>
      );
    }
  }

const Gallery = ({ images }) => {
    return (
            <DragDropContext onDragEnd={() => console.log("dragggged")}>
            <Droppable droppableId="photos" type="group"> 
                {(provided ) => {
                <Gallery ref={provided.innerRef} provided={provided}>
                    {images.map((image, index) => {
                        let id = "draggable-" + index
                        return(
                            <Draggable key={index} draggableId={id} index={index}> 
                            {(provided, snapshot ) => {
                                <Image ref={provided.innerRef} provided={provided} imgSource={image.src} imgTag={image.tag} altDesc={image.desc} />
                            }}
                        </Draggable>
                        );
                    })}
                    {provided.placeholder}
                </Gallery>
            }}
            </Droppable>
        </DragDropContext>
    )
}

export default Gallery;