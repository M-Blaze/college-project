import { useRef } from 'react'

const useDraggable = () => {
  const mouseCoordinateRef = useRef(null)
  const contentCoordinateRef = useRef(null)

  const dragStartHandler = (e) => {
    mouseCoordinateRef.current = {
      x: e.clientX,
      y: e.clientY
    }
    contentCoordinateRef.current = {
      x: e.target.style.left || '0px',
      y: e.target.style.top || '0px'
    }
  }

  const dragHandler = (e) => {
    const { x, y } = mouseCoordinateRef.current
    const { x: contentX, y: contentY } = contentCoordinateRef.current
    const mouseMovedX = (x - e.clientX) + 'px'
    const mouseMovedY = (y - e.clientY) + 'px'
    const newCoordinateX = `calc(${contentX} - ${mouseMovedX})`
    const newCoordinateY = `calc(${contentY} - ${mouseMovedY})`
    
    if (!e.clientX) return
    
    e.target.style.left = newCoordinateX
    e.target.style.top = newCoordinateY
  }

  const dragEndHandler = (e) => {
    return [e.target.style.left, e.target.style.top]
  }
  
  return [dragStartHandler, dragHandler, dragEndHandler]
}

export default useDraggable