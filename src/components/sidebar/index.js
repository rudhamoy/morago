import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Logo from '../../assets/svg/svgLogo.svg'
import Avatar from '../../assets/icon/AvatarSidebar.png'
import Setting from '../../assets/icon/Icon-GearSix.png'
import SideNav from './SideNav'
import AddPopupModal from './AddPopupModal'
import { useOutsideClick } from '../../utils/hooks/useOutsideClick'

const Sidebar = () => {
    const [shouldShow, setShouldShow] = useState(false)

    const outsideClick = () => {
        setShouldShow(false)
    }
    const ref = useOutsideClick(outsideClick)

    return (
        <div className=''>
            {/* logo */}
            <div className={logoContainer}>
                <img src={Logo} alt="logo" />
            </div>
            {/* sidebar menu */}
            <div>
                <SideNav />
            </div>

            {/* action */}
            <div className="absolute bottom-0 right-0 left-0 overflow-hidden">
                <AnimatePresence>
                    {shouldShow && (
                        <AddPopupModal setShouldShow={setShouldShow} />
                    )}
                </AnimatePresence>
                <div className="flex gap-x-2 h-[100px] justify-center items-center border-t-[1px] border-t-[#A3A3A3]">
                    <motion.button
                        whileTap={{ scale: .95, backgroundColor: "#3a3b3c", }}
                        transition={{type: "spring", duration: 0.2}}
                        ref={ref}
                        className={buttonClass}
                        onClick={() => setShouldShow(!shouldShow)}>
                        <img width={40} height={40} src={Avatar} alt="icon" />
                        <span className="text-[#fff]">Add</span>
                    </motion.button>
                    <button className='h-[55px]'>
                        <img width={32} height={32} src={Setting} alt="settings" />
                    </button>
                </div>
            </div>
        </div>
    )
}

// styles
const logoContainer = "flex justify-center items-center h-[101px]"
const buttonClass = 'w-[12rem] h-[3.4rem] rounded-[4px] bg-[#1A1A1A] flex justify-center items-center  gap-x-4 '

export default Sidebar