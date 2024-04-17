import React from 'react'
import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Banner from "../assets/banner.png"

const HomePage = () => {
  return (
    <div className='homepage'>
      <Navbar />
      <div className="container mx-auto">
        <div className="content-wrapper text-center py-10">
          <div className="banner flex items-center">
            <div className="image-holder w-1/2">
              <img src={Banner} alt="Digi card" />
            </div>
            <div className="text-wrap w-1/2">
              <h1 className='text-7xl mb-10'>Transforming Tradition <br /> Digitizing Innovation.</h1>
              <Link to="/create-card">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-500/80"
              >
                Go Digital Now!
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage