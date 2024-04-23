import React, { useState, useRef } from 'react'

import ResizerControl from './components/ResizerControl'
import { useMemo } from 'react'

const Resizer = ({ children }) => {
  const [isResizable, setIsResizable] = useState(false)
  const wrapperRef = useRef()

  const resizeControls = useMemo(() => {
    if (isResizable) {
      return (
        <>
          <div className="border-box border-2 border-purple-500 absolute top-0 left-0 right-0 bottom-0" />
          <ResizerControl type="top-left" parentRef={wrapperRef} />
          <ResizerControl type="top-right" parentRef={wrapperRef} />
          <ResizerControl type="bottom-left" parentRef={wrapperRef} />
          <ResizerControl type="bottom-right" parentRef={wrapperRef} />
        </>
      )
    }
    return null
  }, [isResizable])

  return (
    <div tabIndex={1} onFocus={() => setIsResizable(true)} onBlur={() => setIsResizable(false)} ref={wrapperRef} className="resize-container relative">
      {resizeControls}
      {children}
  </div>
  )
}

export default Resizer