import React from 'react'

import { SketchPicker } from 'react-color'
import { usePopperTooltip } from 'react-popper-tooltip';
import { Baseline, Bold, Underline, Italic, Trash2 } from 'lucide-react';
import 'react-popper-tooltip/dist/styles.css';


const IconWrap = ({ children, clickHandler }) => {
  return (
    <div className="icon-holder border-2 hover:bg-gray-200 cursor-pointer p-3 rounded-md" onClick={clickHandler}>
      {children}
    </div>
  )
}

const EditorOptions = ({ addElement, editorType, updateCardStyle, backgroundColor, textData, updateElementStyle, deleteElement }) => {
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


  const updateBackgroundColor = (color) => {
    updateCardStyle({ backgroundColor: color.hex })
  }

  const fontSize = Number(textData?.styles?.fontSize?.split('px')[0])

  const inputChangeHandler = e => {
    updateElementStyle("content", e.target.value)
  }
  const fontSizeHandler = e => {
    updateElementStyle("fontSize", e.target.value + 'px')
  }
  const decreaseFontSize = e => {
    updateElementStyle("fontSize", (fontSize - 1) + 'px')
  }
  const increaseFontSize = e => {
    updateElementStyle("fontSize", (fontSize + 1) + 'px')
  }

  const handleColorChange = color => {
    updateElementStyle("color", color.hex)
  }

  const TextEditorOptions = (
    <>
      <li className='px-1'>
        <div className="font-select">
          <select name="font-style" id="font-style-input" className='outline-none p-2 border-2 rounded-md cursor-pointer'>
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
          <div className="button-group w-10 h-10 flex items-center justify-center border-r-2 cursor-pointer hover:bg-gray-200 select-none" onClick={decreaseFontSize}>-</div>
          <div className="input-group w-10 h-10 hover:bg-gray-200">
            <input type="number" className='h-full outline-none text-center' value={fontSize} onChange={fontSizeHandler} />
          </div>
          <div className="button-group w-10 h-10 flex items-center justify-center border-l-2 cursor-pointer hover:bg-gray-200 select-none" onClick={increaseFontSize}>+</div>
        </div>
      </li>
      <li className='px-1'>
        <div className="color-picker-trigger rounded-md cursor-pointer" ref={setTriggerRef}>
          <IconWrap>
            <Baseline className='h-4 w-4' />
          </IconWrap>
        </div>
        { 
          visible && (
          <div ref={setTooltipRef} {...getTooltipProps({ className: 'tooltip-container' })}>
            <div {...getArrowProps({ className: 'tooltip-arrow' })} />
            <SketchPicker onChangeComplete={ handleColorChange } />
          </div>)
        }
      </li>
      <li className='px-1'>
        <IconWrap clickHandler={() => updateElementStyle('bold')}>
          <Bold className='h-4 w-4' />
        </IconWrap>
      </li>
      <li className='px-1'>
        <IconWrap clickHandler={() => updateElementStyle('italic')}>
          <Italic className='h-4 w-4' />
        </IconWrap>
      </li>
      <li className='px-1'>
        <IconWrap clickHandler={() => updateElementStyle('underline')}>
          <Underline className='h-4 w-4' />
        </IconWrap>
      </li>
      <li className="px-1 w-64">
        <input className='w-full outline-none border-2 p-2 rounded-md' type="text" placeholder='Your text here...' value={textData?.content} onChange={inputChangeHandler} />
      </li>
    </>
  )

  return (
    <div className='editor-bar w-full mb-10'>
      <ul className="editor-options-list flex items-center border-b-2 -mx-1 py-2">
        <li className='flex items-center px-1'>
          <div className="color-picker-trigger w-11 h-11 rounded-md cursor-pointer border-2 shadow-md" style={{ backgroundColor }} ref={setTriggerRef}></div>
          { 
            visible && (
            <div ref={setTooltipRef} {...getTooltipProps({ className: 'tooltip-container' })}>
              <div {...getArrowProps({ className: 'tooltip-arrow' })} />
              <SketchPicker color={backgroundColor} onChangeComplete={ updateBackgroundColor } />
            </div>)
          }
        </li>
        <li className='px-1'>
          <button className='border-2 p-2 rounded-md hover:bg-gray-200' onClick={() => addElement('text')}>Add Text</button>
        </li>
        <li className='px-1'>
          <button className='border-2 p-2 rounded-md hover:bg-gray-200' onClick={() => addElement('image')}>Add Image</button>
        </li>
        {
          editorType === 'text' && <TextEditorOptions />
        }
        {
          editorType && (
            <li className='px-1'>
              <IconWrap clickHandler={deleteElement}>
                <Trash2 className='h-4 w-4' />
              </IconWrap>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default EditorOptions