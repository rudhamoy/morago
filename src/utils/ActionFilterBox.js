import { Checkbox } from 'antd';
import { useState } from 'react';
import { usePageContainerContext } from '../components/layout/PageContainer';
import { motion, AnimatePresence } from 'framer-motion'

const ActionFilterBox = () => {
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [selectedAction, setSelectedAction] = useState()
    const [checked, setChecked] = useState(false)


    const { setActionType } = usePageContainerContext()

    const actionList = [
        {
            actionName: "Active"
        },
        {
            actionName: "Inactive"
        },
        {
            actionName: "Delete",
            style: 'text-[#B90000] font-[600]',
        }
    ]

    const checkboxChangeHandler = (i, index) => {
        if(selectedIndex === index) {
            setChecked(false)
            setSelectedIndex(null)
            setSelectedAction(null)
        } else {
            setSelectedIndex(index)
            setSelectedAction(i.actionName.toUpperCase())
            setChecked(true)
       }
    };

    const cancelHandler = () => {
        setActionType(null)
    }
    const applyHandler = () => {
        setActionType(selectedAction)
    }

    return (
        <>
            <motion.div
             initial={{y: "-5%", opacity: 0}}
             animate={{y: 0, opacity: 1}}
             exit={{opacity: 0, y: "-5%", }}
             transition={{duration: 0.25, ease: "easeOut"}}
            className="bg-white h-[13.62rem] w-[15rem] shadow-xl border rounded-[0.4rem] relative z-10 mt-1">
                <div className="border-b font-[500] px-[1rem] py-[0.5rem]">
                   Choose Action
                </div>

                <div onClick={e => e.stopPropagation()} className=' px-[1rem] py-[0.5rem]'>
                    <ul>
                        {actionList.map((i, index) => {
                            return (
                                <li key={index}>
                                    <Checkbox
                                    onChange={() => checkboxChangeHandler(i, index)}
                                    disabled={checked && index !== selectedIndex}
                                    className={i.style ? i.style : null}
                                    >{i.actionName}</Checkbox>
                                </li>
                            )
                        })}

                    </ul>
                </div>

                <div className='border-t absolute bottom-0 right-0 w-full h-[3rem] flex justify-center items-center'>
                    <div className="">
                        <div className="absolute right-[0.5rem] bottom-[0.5rem] flex">
                            <button onClick={cancelHandler} className='border w-[4.5rem] h-[2rem] rounded-[4px]'>
                                Cancel
                            </button>
                            <button onClick={applyHandler} className='border ml-[0.5rem] w-[4.5rem] h-[2rem] rounded-[4px] text-white bg-[#0354A6]'>
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ActionFilterBox