import { useRef } from 'react'
import useMouseMoveCalculator from './useMouseMoveCalculator'


const useDraggable = () => {
  const [mouseMoveOnDragStart, mouseMoveonDrag] = useMouseMoveCalculator()
  const contentCoordinateRef = useRef(null)

  const dragStartHandler = (e) => {
    mouseMoveOnDragStart(e)
    contentCoordinateRef.current = {
      x: e.target.style.left || '0px',
      y: e.target.style.top || '0px'
    }
  }

  const dragHandler = (e) => {
    if (!e.clientX) return

    const [mouseMovedX, mouseMovedY] = mouseMoveonDrag(e)
    const { x: contentX, y: contentY } = contentCoordinateRef.current
    const newCoordinateX = `calc(${contentX} - ${mouseMovedX}px)`
    const newCoordinateY = `calc(${contentY} - ${mouseMovedY}px)`
    
    e.target.style.left = newCoordinateX
    e.target.style.top = newCoordinateY
  }

  
  return [dragStartHandler, dragHandler]
}

export default useDraggable