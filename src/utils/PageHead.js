import React from 'react'
import { useLocation } from 'react-router-dom'

const PageHead = ({ title }) => {
  const location = useLocation()
  
  
  const splitSLug = location.pathname.split('/')
  
  
  return (
    <>
    {/* page title */}
      <div className='mt-[2rem] overflow-hidden'>
        <p
        className='text-[2.5rem] font-[700] ml-[25px] '>
          {title}
          </p>
      </div>

      {/* breadcrumbs */}
      <div className="flex items-center justify-start py-4 pl-4 pr-52 bg-white rounded w-[422px] h-[48px] ml-[0.56rem]">
        <div className="flex space-x-1.5 items-start justify-start">

          <p className="text-base font-medium leading-none text-purple-600 cursor-pointer">Home</p>
          {location.pathname === '/' ? (
             <div className={`flex gap-x-[6px]`}>
             <p className="text-base font-semibold leading-none text-gray-500">/</p>
             <p className="text-base font-medium leading-none text-purple-600 capitalize whitespace-nowrap cursor-pointer">Lists</p>
             <p className="text-base font-semibold leading-none text-gray-500">/</p>
             <p className="text-base font-medium leading-none  capitalize whitespace-nowrap text-gray-500 cursor-pointer">Translator</p>
           </div>
          ) : (
            splitSLug.map((item, index) => {
              if(item === '') return null
    
              return (
                <div key={index} className={`flex gap-x-[6px] ${index === splitSLug.length - 1 ? 'text-gray-500' : 'text-purple-600'}`}>
                  <p className="text-base font-semibold leading-none text-gray-500">/</p>
                  <p className="text-base font-medium leading-none  capitalize whitespace-nowrap cursor-pointer">{item}</p>
                </div>
              )
            })
          )}
         

        </div>
      </div>
    </>
  )
}

export default PageHead