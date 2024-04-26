import React from 'react'

import useDraggable from '../hooks/useDraggable'
import Resizer from './Resizer'

const EditableText = ({ textData, setActive }) => {
  const [dragStartHandler, dragHandler] = useDraggable()

  const onDragStart = (e) => {
    setActive()
    dragStartHandler(e)
  }

  return (
    <div draggable className="text absolute w-max" onClick={setActive} onDragStart={onDragStart} onDrag={dragHandler} style={textData.styles}>
      <Resizer>
        <div className="text-content w-full h-full outline-none">{textData.content}</div>
      </Resizer>
    </div>
  )
}

export default EditableText