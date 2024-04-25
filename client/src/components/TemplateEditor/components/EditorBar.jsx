import React from 'react'

import { SketchPicker } from 'react-color'
import { Bold, Underline, Italic } from 'lucide-react';
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

const IconWrap = ({ children }) => {
  return (
    <div className="icon-holder border-2 hover:bg-gray-200 cursor-pointer p-3 rounded-md">
      {children}
    </div>
  )
}

const EditorBar = ({ addElement }) => {
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
    console.log(color)
  }

  return (
    <div className='editor-bar w-full mb-10'>
      <ul className="editor-options-list flex items-center border-b-2 -mx-1 py-2">
        <li className='flex items-center px-1'>
          <div className="color-picker-trigger w-10 h-10 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" ref={setTriggerRef}></div>
          { 
            visible && (
            <div ref={setTooltipRef} {...getTooltipProps({ className: 'tooltip-container' })}>
              <div {...getArrowProps({ className: 'tooltip-arrow' })} />
              <SketchPicker onChangeComplete={ handleColorChange } />
            </div>)
          }
        </li>
        <li className='px-1'>
          <div className="font-select">
            <select name="" id="" className='outline-none p-2 border-2 rounded-md cursor-pointer'>
              <option value="roboto">Roboto</option>
              <option value="montserrat">Montserrat</option>
              <option value="open sans">Open Sans</option>
              <option value="times new roman">Times new roman</option>
              <option value="arial">Arial</option>
              <option value="lato">Lato</option>
              <option value="poppins">Poppins</option>
            </select>
          </div>
        </li>
        <li>
          <div className="font-size border-2 flex flex-wrap rounded-md">
            <div className="button-group w-10 h-10 flex items-center justify-center border-r-2 cursor-pointer hover:bg-gray-200">-</div>
            <div className="input-group w-10 h-10 hover:bg-gray-200">
              <input type="number" className='h-full outline-none text-center' />
            </div>
            <div className="button-group w-10 h-10 flex items-center justify-center border-l-2 cursor-pointer hover:bg-gray-200">+</div>
          </div>
        </li>
        <li className='px-1'>
          <IconWrap>
            <Bold className='h-4 w-4' />
          </IconWrap>
        </li>
        <li className='px-1'>
          <IconWrap>
            <Italic className='h-4 w-4' />
          </IconWrap>
        </li>
        <li className='px-1'>
          <IconWrap>
            <Underline className='h-4 w-4' />
          </IconWrap>
        </li>
        <li className='px-1'>
          <button className='border-2 p-2 rounded-md hover:bg-gray-200' onClick={() => addElement('text')}>Add Text</button>
        </li>
        <li className='px-1'>
          <button className='border-2 p-2 rounded-md hover:bg-gray-200' onClick={() => addElement('image')}>Add Image</button>
        </li>
      </ul>
    </div>
  )
}

export default EditorBar