import React from 'react'
import Popup from 'reactjs-popup';
import { Baseline, Bold, Pencil, Trash2 } from 'lucide-react';

import Text from './Text';

const IconWrap = ({ children }) => {
  return (
    <div className="icon-holder hover:bg-gray-200 cursor-pointer p-1 rounded-sm">
      {children}
    </div>
  )
}

const EditableText = ({ textData }) => {
  // const openTooltip = () => toolTipRef.current.open();

  return (
    <>
      <Popup arrow={false} trigger={<div className="editable-text-wrapper">
        <Text styles={textData.styles} content={textData.content} />
        </div>} position="bottom center" closeOnDocumentClick
      >
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
      </Popup>
    </>
  )
}

export default EditableText