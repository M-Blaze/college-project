import React from 'react'
import VisitingCard from './VisitingCard'

const TemplatePicker = ({ goNext }) => {
  return (
    <div className='container'>
      <div className="block-header pt-5">
        <h2>Choose your template</h2>
      </div>
      <ul className="cards-list flex justify-center flex-wrap -mx-5">
        <li className='px-5 mb-10'>
          <VisitingCard classes="hover:scale-105 hover:-rotate-2 duration-150" style={{ backgroundColor: '#000' }} clickHandler={goNext} />
        </li>
        <li className='px-5 mb-10'>
          <VisitingCard classes="hover:scale-105 hover:-rotate-2 duration-150" clickHandler={goNext} />
        </li>
        <li className='px-5 mb-10'>
          <VisitingCard classes="hover:scale-105 hover:-rotate-2 duration-150"  style={{ backgroundColor: '#f2f2f2' }} clickHandler={goNext} />
        </li>
        <li className='px-5 mb-10'>
          <VisitingCard classes="hover:scale-105 hover:-rotate-2 duration-150" style={{ backgroundColor: '#f00' }} clickHandler={goNext} />
        </li>
        <li className='px-5 mb-10'>
          <VisitingCard classes="hover:scale-105 hover:-rotate-2 duration-150" style={{ backgroundColor: '#ccc' }} clickHandler={goNext} />
        </li>
      </ul>
    </div>
  )
}

export default TemplatePicker