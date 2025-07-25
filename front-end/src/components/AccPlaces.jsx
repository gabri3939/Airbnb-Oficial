import React from 'react'
import { Link, useParams } from 'react-router-dom'
import NewPlace from './NewPlace'

const AccPlaces = () => {
  const { action } = useParams()

  return (
    <div className="w-full max-w-7xl px-4 flex flex-col items-center">
      {action !== "new" ? (
        <div className="flex justify-center mt-6">
          <Link 
            to="/account/places/new"
           className="hover:bg-primary-500 gap-2 flex bg-primary-400  min-w-44 cursor-pointer  rounded-full px-4 py-2 text-white transition "
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Adicionar novo lugar
          </Link>
        </div>
      ) : (
        <NewPlace />
      )}
    </div>
  )
}

export default AccPlaces
