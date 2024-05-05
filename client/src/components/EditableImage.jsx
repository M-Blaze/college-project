import React from 'react'

import useDraggable from '../hooks/useDraggable'
import Resizer from './Resizer'

const EditableImage = ({ imageData, setActive, updateElement }) => {
  const [dragStartHandler, dragHandler] = useDraggable()
  
  const onDragStart = (e) => {
    e.stopPropagation()
    setActive()
    dragStartHandler(e)
  }

  const onDrag = (e) => {
    const styles = dragHandler(e)

    if (!styles) return

    updateElement(styles)
  }

  const Image = () => {
      if (imageData.isQr) {
        return (
          <img draggable={false} src={imageData.src} alt={imageData.src} /> 
        )
      }

      return (
        <Resizer updateElement={updateElement}>
          <img draggable={false} src={imageData.src} alt={imageData.src} /> 
        </Resizer>
      )
  }
  
  return (
    <div draggable className="img-holder absolute w-max cursor-pointer" onClick={setActive} onDragStart={onDragStart} onDrag={onDrag} style={imageData.styles} >
      <Image />
    </div>
  )
}

export default EditableImage