import { AiFillCaretDown } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

export const SideNavList = ({ navs }) => {

    // get the active page url
    // this url will define the navbar active color

    const { title, toggleAction, toggleState, subMenu } = navs


    const sideNav__button = "flex items-center gap-x-[8px] w-[17rem] h-[40px] px-[16px] py-[8px] "
    let activeClassName = "bg-[#F0F5FF] h-[40px] px-[16px] py-[8px] hover:bg-[#F0F5FF]";

    return (
        <>
            <div className="py-4">
                <button onClick={toggleAction} className={sideNav__button}>
                    <AiFillCaretDown className='w-[16px] h-[16px]' />
                    <span className='font-[700] text-[16px] '>{title}</span>
                </button>
                <AnimatePresence>
                    {toggleState && (
                        <motion.nav
                            key={title}
                            initial={{ opacity: 0, y: "-5%", height: 0 }}
                            animate={{ opacity: 1,y: "5%", height: "auto" }}
                            transition={{ duration: 0.15, ease: 'easeOut', layout: { duration: 1 } }}
                            exit={{ opacity: 0, y: "-5%" }}
                            className='flex flex-col  w-[15.5rem] ml-[24px]'>
                            {subMenu.map(sub => {
                                return (
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? activeClassName : "h-[40px] px-[16px] py-[8px] hover:bg-[#F0F5FF]"
                                        }
                                        key={sub.name}
                                        to={sub.path}>
                                        {sub.name}
                                    </NavLink>
                                )
                            })}
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}