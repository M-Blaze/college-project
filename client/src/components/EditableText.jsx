import React from 'react'

import useDraggable from '../hooks/useDraggable'
import Resizer from './Resizer'

const EditableText = ({ textData, setActive }) => {
  const [dragStartHandler, dragHandler] = useDraggable()

  const onDragStart = (e) => {
    e.stopPropagation()
    setActive()
    dragStartHandler(e)
  }

  const onClick = (e) => {
    e.stopPropagation()
    setActive()
  }

  return (
    <div draggable className="text absolute w-max" onClick={onClick} onDragStart={onDragStart} onDrag={dragHandler} style={textData.styles}>
      <Resizer autoHeight>
        <div className="text-content w-full h-full outline-none">{textData.content}</div>
      </Resizer>
    </div>
  )
}

export default EditableText