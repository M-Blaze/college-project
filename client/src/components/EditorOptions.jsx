import React from 'react'

const EditorOptions = ({addElement}) => {
  return (
    <div className='editor-options absolute right-full w-20'>
      <ul className="options-list capitalize">
        <li onClick={() => addElement("text")}>
          <button>Add text</button>
        </li>
        <li onClick={() => addElement("image")}>
          <button>Add image</button>
        </li>
      </ul>
    </div>
  )
}

export default EditorOptions