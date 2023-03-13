import { createContext, useState, useEffect, useContext } from "react"
import { Checkbox } from "antd"
import { AiFillCaretDown } from "react-icons/ai"
import { useOutsideClick } from "../hooks/useOutsideClick"
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'

const CheckboxContext = createContext()

const CheckboxSelect = ({ children, label, options }) => {

    return (
        <CheckboxContext.Provider value={{ options, label }}>
            {children}
        </CheckboxContext.Provider>
    )
}

const CheckboxOptions = ({ onChange, optionLabel, defaultChecked }) => {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState([]);

    // custom hooks to disable the modal when click outside the modal box
    const ref = useOutsideClick(() => setShowOptions(false))

    const { label, options } = useContext(CheckboxContext)

    // if option already checked or in the list - wont be added
    // else it will be uncheck on click or select
    const handleOptionChange = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(o => o !== option));
            onChange(selectedOptions.filter(o => o !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
            onChange([...selectedOptions, option])
        }
    };

    // select all checkbox function
    const selectAllHandler = (options) => {
        let allOptions = []
        if(options.length == selectedOptions.length) {
            setSelectedOptions([])
            onChange([])
        } else {
            options.map(o => allOptions.push(o.name))
            setSelectedOptions(allOptions)
            onChange(allOptions)
        }
    }

    // if default props available 
    // populate the select options with checked
    useEffect(() => {
        if (defaultChecked?.length > 0) {
            let option = []
            defaultChecked.forEach(i => {
                option.push(i.name)
            })
            setSelectedOptions(option)
        }
    }, [defaultChecked])


    return (
        <>
            <div className={` flex flex-col w-full relative`}>
                <label className='font-[500]' htmlFor={label}>{label}</label>
                <div ref={ref} onClick={() => setShowOptions(!showOptions)} className="inline-flex items-center justify-center h-[2.5rem] bg-white border rounded-md border-gray-200 mt-[6px] px-3">
                    <div className="flex items-center justify-start flex-1">
                        <p className="text-sm leading-tight text-gray-500">{optionLabel}</p>
                    </div>
                    <div className="flex items-center justify-center h-full">
                        <AiFillCaretDown className='w-[16px] h-[16px]' />
                    </div>
                </div>
                <AnimatePresence key={optionLabel} mode="wait">
                    <div className=''>
                        {showOptions && (

                            <motion.ul
                                key={optionLabel}
                                initial={{ y: "-5%", opacity: 0, height: 0 }}
                                animate={{ y: 0, opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, y: "5%", height: 0, transition: { duration: 1, delay: 0.5 } }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                onClick={e => e.stopPropagation()}
                                className="bg-white shadow-xl border mt-1 rounded-[0.4rem] relative z-10 overflow-hidden"
                            >
                                <li onClick={() => selectAllHandler(Object.values(options))} className="border-b px-3 py-1">
                                    <Checkbox>Select all</Checkbox>
                                </li>
                                {options.map((i, index) => (
                                    <li key={index} className="px-3 py-1">
                                        <label>
                                            <Checkbox
                                                checked={selectedOptions?.includes(i.name)}
                                                onChange={() => handleOptionChange(i.name)}
                                            >
                                                {i.label}
                                            </Checkbox>
                                        </label>
                                    </li>
                                ))}
                            </motion.ul>

                        )}
                    </div>
                </AnimatePresence>
            </div>
        </>
    )
}

CheckboxSelect.CheckboxOptions = CheckboxOptions

export default CheckboxSelect