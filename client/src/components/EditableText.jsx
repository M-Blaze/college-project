import React, { useState } from 'react'
import { Baseline, Bold, Pencil, Trash2 } from 'lucide-react';
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

import Text from './Text';

const IconWrap = ({ children }) => {
  return (
    <div className="icon-holder hover:bg-gray-200 cursor-pointer p-1 rounded-sm">
      {children}
    </div>
  )
}

const EditableText = ({ textData }) => {
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
  });

  return (
    <>
      <Text ref={setTriggerRef} styles={textData.styles} content={textData.content} />
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: 'tooltip-container' })}
        >
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
          <div className="edit-options bg-white shadow-lg rounded-md p-2">
            <ul className="options-list flex">
              <li>
                <IconWrap>
                  <Baseline className='h-4 w-4'/>
                </IconWrap>
              </li>
              <li>
                <IconWrap>
                  <Bold className='h-4 w-4' />
                </IconWrap>
              </li>
              <li>
                <IconWrap>
                  <Pencil className='h-4 w-4' />
                </IconWrap>
              </li>
              <li>
                <IconWrap>
                  <Trash2 className='h-4 w-4' />
                </IconWrap>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default EditableText