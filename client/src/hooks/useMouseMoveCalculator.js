import { useRef } from 'react'

const useMouseMoveCalculator = () => {
  const mouseCoordinateRef = useRef(null)

  const dragStartHandler = (e) => {
    mouseCoordinateRef.current = {
      x: e.clientX,
      y: e.clientY
    }
  }

  const dragHandler = (e) => {
    const { x, y } = mouseCoordinateRef.current
    const mouseMovedX = (x - e.clientX) 
    const mouseMovedY = (y - e.clientY) 
    
    return [mouseMovedX, mouseMovedY]
  }

  return [dragStartHandler, dragHandler]
}

export default useMouseMoveCalculator