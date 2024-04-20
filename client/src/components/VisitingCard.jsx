import React from 'react'

const VisitingCard = ({ clickHandler, style, classes, children }) => {
  const onClickHandler = () => {
      if (clickHandler) {
        clickHandler()
      }
  }

  return (
    <div className={`visiting-card h-52 w-96 rounded-md shadow-lg cursor-pointer overflow-hidden relative ${classes}`} onClick={onClickHandler} style={style} >
      { children }
    </div>
  )
}

export default VisitingCard