import React from 'react'

import { SketchPicker } from 'react-color'
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

const CardEditorOptions = ({ addElement, updateCardStyle, backgroundColor }) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = usePopperTooltip({
    placement: "top",
    trigger: "click",
    interactive: true,
    offset: [10, 20]
  })


  const handleColorChange = (color) => {
    updateCardStyle({ backgroundColor: color.hex })
  }

  return (
    <div className='editor-bar w-full mb-10'>
      <ul className="editor-options-list flex items-center border-b-2 -mx-1 py-2">
        <li className='flex items-center px-1'>
          <div className="color-picker-trigger w-11 h-11 rounded-md cursor-pointer border-2 shadow-md" style={{ backgroundColor }} ref={setTriggerRef}></div>
          { 
            visible && (
            <div ref={setTooltipRef} {...getTooltipProps({ className: 'tooltip-container' })}>
              <div {...getArrowProps({ className: 'tooltip-arrow' })} />
              <SketchPicker color={backgroundColor} onChangeComplete={ handleColorChange } />
            </div>)
          }
        </li>
        <li className='px-1'>
          <button className='border-2 p-2 rounded-md hover:bg-gray-200' onClick={() => addElement('text')}>Add Text</button>
        </li>
        <li className='px-1'>
          <button className='border-2 p-2 rounded-md hover:bg-gray-200' onClick={() => addElement('image')}>Add Image</button>
        </li>
        <li className='px-1'>
          <button className='border-2 p-2 rounded-md hover:bg-gray-200' onClick={() => addElement('image')}>Show QR</button>
        </li>
      </ul>
    </div>
  )
}

export default CardEditorOptions