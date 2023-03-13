import { useQuery } from '@apollo/client';
import { Checkbox } from 'antd';
import { ALL_CATEGORY } from './api/categoryApi';
import { usePageContainerContext } from '../components/layout/PageContainer';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

const FilterBox = () => {

    const [checkSelect, setCheckSelect] = useState([])

   
    // *fetch category data 
    // *add to the filter list
    const { data, loading } = useQuery(ALL_CATEGORY, {
        variables: { pageNo: 0, pageSize: 5}
    });
   

    const { setActionType } = usePageContainerContext()


    const applyHandler = () => {
        setActionType(checkSelect)
    }

    return (
        <>
            <motion.div
             initial={{y: "-5%", opacity: 0}}
             animate={{y: 0, opacity: 1}}
             exit={{opacity: 0, y: "-5%"}}
             transition={{duration: 0.25, ease: "easeOut"}}
            className="bg-white h-[13.62rem] w-[14rem] shadow-xl border mt-1 rounded-[0.4rem] relative z-10">
                <div className="border-b font-[500] px-[1rem] py-[0.5rem]">
                    Filter
                </div>
                {/* <div className="border-b font-[500] px-[1rem] py-[0.5rem]">
                    Categories
                </div>
                <div onClick={e => e.stopPropagation()} className=' px-[1rem] py-[0.5rem]  scrol h-[9.5rem] overflow-y-scroll'>
                    <ul className='space-y-2'>
                        {data.categories.objectList.map(c => (
                            <li key={c.name}>
                                <Checkbox
                                    onChange={() => setCheckSelect([...checkSelect, c])}
                                >
                                    {c.name}
                                </Checkbox>
                            </li>
                        ))}
                    </ul>
                </div> */}
                <div className="border-y font-[500] px-[1rem] py-[0.5rem]">
                    Profile status
                </div>

                <div onClick={e => e.stopPropagation()} className=' px-[1rem] py-[0.5rem]'>
                    <ul>
                        <li><Checkbox>Verifed</Checkbox></li>
                        <li><Checkbox>Unverifed</Checkbox></li>
                    </ul>
                </div>

                <div className='border-t absolute bottom-0 right-0 w-full h-[3rem] flex justify-center items-center'>
                    <div className="">
                        <div className="absolute right-[0.5rem] bottom-[0.5rem] flex">
                            <button className='border w-[4.5rem] h-[2rem] rounded-[4px]'>
                                Cancel
                            </button>
                            <button
                            onClick={applyHandler} 
                            className='border ml-[0.5rem] w-[4.5rem] h-[2rem] rounded-[4px] text-white bg-[#0354A6]'>
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default FilterBox