import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AnimatePresence, motion as m } from 'framer-motion';

import Sidebar from '../sidebar'
import HeaderContainer from '../header/HeaderContainer'

const Layout = () => {


  return (
    <div className='relative overflow-hidden'>
      <m.div
      initial={{x: 0}}
      animate={{x: "100%" }}
      transition={{duration: 0.35, ease:"easeOut"}}
      className="bg-[#066278] z-10 absolute h-[100vh] w-[100vw] "
      >

      </m.div>
      <div className="flex relative dark:bg-main-dark-bg">
        
        <m.div 
        initial={{x: "-100", opacity: 0}} 
        animate={{x: 0, opacity: 1}} 
        transition={{duration: 0.53, ease:"easeOut"}}
        className={`w-[20%] fixed h-[100%] border-r-[1px] border-l-[#A3A3A3]`}>
          <Sidebar />
        </m.div>
        {/* navbar and the and ui component */}
        <m.div 
         initial={{x: "-100", opacity: 0}} 
         animate={{x: 0, opacity: 1}} 
         transition={{duration: 0.54, ease:"easeOut"}}
        className={`ml-[20%] w-[80%]  min-h-screen`}>
          <div className="w-full">
            <HeaderContainer />
          </div>
          <Outlet />
        </m.div>
      </div>

    </div>
  )
}

export default Layout