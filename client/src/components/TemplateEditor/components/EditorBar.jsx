import React from 'react'

import { SketchPicker } from 'react-color'
import { Baseline, Bold, Pencil } from 'lucide-react';
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

const IconWrap = ({ children }) => {
  return (
    <div className="icon-holder hover:bg-gray-200 cursor-pointer p-1 rounded-sm">
      {children}
    </div>
  )
}

const EditorBar = () => {
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
          <div className="color-picker-trigger inline-block w-5 h-5 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" ref={setTriggerRef}></div>
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
            <select name="" id="">
            </select>
          </div>
        </li>
        <li>
          <div className="font-size border-2 flex flex-wrap rounded-sm">
            <div className="button-group w-8 h-8 flex items-center justify-center border-r-2 cursor-pointer hover:bg-gray-200">-</div>
            <div className="input-group w-8 h-8 hover:bg-gray-200">
              <input type="number" className='h-full outline-none text-center' />
            </div>
            <div className="button-group w-8 h-8 flex items-center justify-center border-l-2 cursor-pointer hover:bg-gray-200">+</div>
          </div>
        </li>
        <li className='px-1'>
          <IconWrap>
            <Baseline className='h-4 w-4'/>
          </IconWrap>
        </li>
        <li className='px-1'>
          <IconWrap>
            <Bold className='h-4 w-4' />
          </IconWrap>
        </li>
        <li className='px-1'>
          <IconWrap>
            <Pencil className='h-4 w-4' />
          </IconWrap>
        </li>
      </ul>
    </div>
  )
}

export default EditorBar