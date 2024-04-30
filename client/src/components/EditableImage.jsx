import React from 'react'

import useDraggable from '../hooks/useDraggable'
import Resizer from './Resizer'

const EditableImage = ({ src, styles, setActive }) => {
  const [dragStartHandler, dragHandler] = useDraggable()
  
  const onDragStart = (e) => {
    setActive()
    dragStartHandler(e)
  }
  
  return (
    <div draggable className="img-holder absolute w-max cursor-pointer" onClick={setActive} onDragStart={onDragStart} onDrag={dragHandler} style={styles} >
      <Resizer>
        <img draggable={false} src={src} alt={src} /> 
      </Resizer>
    </div>
  )
}

export default EditableImage