import React from 'react'

import useDraggable from '../hooks/useDraggable'
import Resizer from './Resizer'

const EditableImage = ({ src, styles, setActive, updateElement }) => {
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
  
  return (
    <div draggable className="img-holder absolute w-max cursor-pointer" onClick={setActive} onDragStart={onDragStart} onDrag={onDrag} style={styles} >
      <Resizer updateElement={updateElement}>
        <img draggable={false} src={src} alt={src} /> 
      </Resizer>
    </div>
  )
}

export default EditableImage