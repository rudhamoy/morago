import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './sidebar.css'

const AddPopupModal = ({ setShouldShow }) => {

    return (
        <motion.div 
        initial={{y: "60%", opacity: 0, scale: 0.1}}
        animate={{y: 0, opacity: 1, scale: 1}}
        exit={{opacity: 0, y: "60%", scale: 0.1}}
        transition={{ type: "just", duration: 0.3, ease: "easeOut"}}
        className="popupBody shadow-xl border rounded-[4px]" onClick={() => setShouldShow(false)}>
            <ul className='flex flex-col justify-evenly divide-y-2 h-full'>
                <Link to="/lists/user/add_user">
                    <li className="px-[1rem] py-[0.5rem]">
                        User
                    </li>
                </Link>
                <Link to="/lists/translator/add_translator">
                    <li className="px-[1rem] py-[0.5rem]">
                        Translator
                    </li>
                </Link>
                <Link to="/translation_topics/themes/add_theme">
                    <li className="px-[1rem] py-[0.5rem]">
                        Theme
                    </li>
                </Link>
                <Link to="/translation_topics/categories/add_category">
                    <li className="px-[1rem] py-[0.5rem]">
                        Category
                    </li>
                </Link>
            </ul>
        </motion.div>
    )
}

export default AddPopupModal