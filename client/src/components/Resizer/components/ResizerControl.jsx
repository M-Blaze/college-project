import React, { useMemo, useRef } from 'react'

import useMouseMoveCalculator from '../../../hooks/useMouseMoveCalculator'

const DEFAULT_CLASSNAMES = "resize-control border border-gray-400 inline-block w-3 h-3 absolute rounded-full bg-white  hover:bg-purple-500"

const ResizerControl = ({ type, parentRef }) => {
  const contentDimensionsRef = useRef()
  const [dragStart, dragHandler] = useMouseMoveCalculator()

  const topLeftResizeHandler = ({ currentWidth, widthToChange, currentHeight, heightToChange }) => {
    parentRef.current.style.width = `calc(${currentWidth} + ${widthToChange}px)`
    parentRef.current.style.height = `calc(${currentHeight} + ${heightToChange}px)`
  }
  const topRightResizeHandler = ({ currentWidth, widthToChange, currentHeight, heightToChange }) => {
    parentRef.current.style.width = `calc(${currentWidth} - ${widthToChange}px)`
    parentRef.current.style.height = `calc(${currentHeight} + ${heightToChange}px)`
  }
  const bottomLeftResizeHandler = ({ currentWidth, widthToChange, currentHeight, heightToChange }) => {
    parentRef.current.style.width = `calc(${currentWidth} + ${widthToChange}px)`
    parentRef.current.style.height = `calc(${currentHeight} - ${heightToChange}px)`
  }
  const bottomRightResizeHandler = ({ currentWidth, widthToChange, currentHeight, heightToChange }) => {
    parentRef.current.style.width = `calc(${currentWidth} - ${widthToChange}px)`
    parentRef.current.style.height = `calc(${currentHeight} - ${heightToChange}px)`
  }
  
  const resizeTypeAndHandler = useMemo(() => {
    return {
      'top-left': {
        classes: `${DEFAULT_CLASSNAMES} -top-1.5 -left-1.5 cursor-nw-resize`,
        resizeHandler: topLeftResizeHandler
      },
      'top-right': {
        classes: `${DEFAULT_CLASSNAMES} -top-1.5 -right-1.5 cursor-ne-resize`,
        resizeHandler: topRightResizeHandler
      },
      'bottom-left': {
        classes: `${DEFAULT_CLASSNAMES} -bottom-1.5 -left-1.5 cursor-ne-resize`,
        resizeHandler: bottomLeftResizeHandler
      },
      'bottom-right': {
        classes: `${DEFAULT_CLASSNAMES} -bottom-1.5 -right-1.5 cursor-nw-resize`,
        resizeHandler: bottomRightResizeHandler
      }
    }
    // eslint-disable-next-line
  }, [])

  const resizeStart = (e)  => {
    dragStart(e)
    const { width, height } = parentRef.current.style
    const currentWidth = width || `${parentRef.current.offsetWidth}px`
    const currentHeight = height || `${parentRef.current.offsetHeight}px`

    contentDimensionsRef.current = { width: currentWidth, height: currentHeight }
  }

  const resizeHandler = useMemo(() => {
    return resizeTypeAndHandler[type].resizeHandler
  }, [type, resizeTypeAndHandler])

  const classes = useMemo(() => {
    return resizeTypeAndHandler[type].classes
  }, [type, resizeTypeAndHandler])

  const resize = e => {
    e.stopPropagation()
    if (!e.clientX) return

    const [widthToChange, heightToChange] = dragHandler(e)
    const { width: currentWidth, height: currentHeight } = contentDimensionsRef.current

    resizeHandler({ widthToChange, heightToChange, currentWidth, currentHeight })
  }

  return (
    <span draggable onDragStart={resizeStart} onDrag={resize} className={classes}></span>
  )
}

export default ResizerControl