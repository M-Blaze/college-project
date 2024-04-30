import React, { useState, useRef } from 'react'

import ResizerControl from './components/ResizerControl'
import { useMemo } from 'react'

const Resizer = ({ children, autoHeight, updateElement }) => {
  const [isResizable, setIsResizable] = useState(false)
  const wrapperRef = useRef()

  const resizeControls = useMemo(() => {
    if (isResizable) {
      return (
        <>
          <div className="border-box border-2 border-purple-700 absolute top-0 left-0 right-0 bottom-0" />
          <ResizerControl type="top-left" parentRef={wrapperRef} updateElement={updateElement} />
          <ResizerControl type="top-right" parentRef={wrapperRef} updateElement={updateElement} />
          <ResizerControl type="bottom-left" parentRef={wrapperRef} updateElement={updateElement} />
          <ResizerControl type="bottom-right" parentRef={wrapperRef} updateElement={updateElement} />
        </>
      )
    }
    
    return null
    // eslint-disable-next-line
  }, [isResizable])

  return (
    <div tabIndex={1} onFocus={() => setIsResizable(true)} onBlur={() => setIsResizable(false)} ref={wrapperRef} className={`resize-container max-w-full max-h-full relative focus-visible:outline-none ${autoHeight && '!h-auto'}`}>
      {resizeControls}
      {children}
  </div>
  )
}

export default Resizer