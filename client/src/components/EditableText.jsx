import React from 'react'

import useDraggable from '../hooks/useDraggable'
import Resizer from './Resizer'

const EditableText = ({ textData, setActive, updateElement, removeElement }) => {
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

  const onClick = (e) => {
    e.stopPropagation()
    setActive()
  }

  const handleKeyDown = (e) => {
    const KEYS = ["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight", "Delete"]

    if (!KEYS.includes(e.key)) return

    if (e.key === "Delete") {
      return removeElement()
    }
    
    let newCoordinateX, newCoordinateY
    const x = e.target.style.left || '0px'
    const y = e.target.style.top || '0px'

    if (e.key === "ArrowUp") {
      newCoordinateY = `calc(${y} - 1px)`
    }
    
    if (e.key === "ArrowDown") {
      newCoordinateY = `calc(${y} + 1px)`
    }

    if (e.key === "ArrowLeft") {
      newCoordinateX = `calc(${x} - 1px)`
    }

    if (e.key === "ArrowRight") {
      newCoordinateX = `calc(${x} + 1px)`
    }

    e.target.style.left = newCoordinateX
    e.target.style.top = newCoordinateY
  }

  return (
    <div draggable onKeyDown={handleKeyDown} className="text absolute w-max cursor-pointer" onClick={onClick} onDragStart={onDragStart} onDrag={onDrag} style={textData.styles}>
      <Resizer autoHeight updateElement={updateElement}>
        <div className="text-content w-full h-full outline-none">{textData.content}</div>
      </Resizer>
    </div>
  )
}

export default EditableText