import React from 'react'

const VisitingCard = ({ clickHandler, style, classes, children }) => {
  const onClickHandler = () => {
      if (clickHandler) {
        clickHandler()
      }
  }

  return (
    <div className={`visiting-card h-64 w-[480px] rounded-md shadow-xl overflow-hidden relative ${classes}`} onClick={onClickHandler} style={style} >
      { children }
    </div>
  )
}

export default VisitingCard