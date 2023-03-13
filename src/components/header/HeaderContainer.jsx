import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion as m } from 'framer-motion'

import Avatar from '../../assets/icon/AvatarHeader.png'
import { useOutsideClick } from '../../utils/hooks/useOutsideClick'
import { AUTH_TOKEN } from '../../constants'
import './header.css'

const HeaderContainer = () => {
  const navigate = useNavigate()
  const [shouldShow, setShouldShow] = useState(false)
  const ref = useOutsideClick(() => setShouldShow(false))

  return (
    <>
      <div className={container}>
        <div className='w-[100%] relative'>
          <div className='absolute right-[38px] '>

            <m.button
            //  whileTap={{ scale: .99, backgroundColor: "lightgrey", }}
            //  transition={{type: "spring", duration: 0.1}}
             ref={ref} 
             onClick={() => setShouldShow(!shouldShow)} 
             className={buttonClass}>
              <img height={40} width={40} src={Avatar} alt="icon" />
              <span className=''>Admin</span>
            </m.button>
            {/* show pop up - admin menu */}
            <AnimatePresence>
            {
              shouldShow && (
                <m.div
                  initial={{ y: "-90%", opacity: 0, scale: 0.1 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: "-90%", scale: 0.1 }}
                  transition={{ type: "just", duration: 0.2, ease: "easeOut" }}
                  className="headerPopup shadow-xl border rounded-[4px] -mt-[1.43rem] z-10" onClick={() => setShouldShow(false)}>
                  <ul className='flex flex-col justify-evenly divide-y-2 h-full'>
                    <li className="px-[1rem] py-[0.5rem]">
                      <button onClick={() => navigate('/change_password')}>Change Password</button>
                    </li>
                    <li className="px-[1rem] py-[0.5rem]">
                      <button
                        onClick={() => {
                          localStorage.removeItem(AUTH_TOKEN);
                          navigate(`/login`);
                        }}
                        className='text-red-500'>Log out</button>
                    </li>
                  </ul>
                </m.div>
              )
            }
            </AnimatePresence>
          </div>
        </div>

      </div>
    </>
  )
}

// styles
const container = "bg-[#066278] h-[6.31rem] w-full"
const buttonClass = 'w-[13.19rem] h-[3.43rem] rounded-[4px] bg-[#FEFEFE] flex justify-center items-center gap-x-4  my-[1.43rem]'

export default HeaderContainer