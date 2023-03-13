import React from 'react'
import { Spin } from 'antd'
import { MotionConfig, motion, AnimatePresence } from 'framer-motion'

import ImageInput from './ImageInput'
import InputField from './InputField'
import CheckboxSelect from './CheckboxSelect'
import CheckIcon from '../icon/CheckIcon'

const Button = ({ title, bg, onClick, disable }) => {

    return (
        <button onClick={onClick} disabled={disable} className={`w-[13.19rem] h-[3.43rem] rounded-[4px] py-[0.5rem] px-[1rem] ${bg ? `bg-[#222] text-gray-100` : 'bg-[#F5F5F5] text-black'}`}>
            {title}
        </button>
    )
}

const FormContainer = ({
    formList,
    setFormState,
    btnTitle,
    cancelBtnTitle,
    onSubmits,
    cancelBtn,
    disable,
    showImageInput,
    setImage,
    errorMsg,
    loading,
    update
}) => {

    const onChangeHandler = (label, event) => {
        setFormState([...formList.map((item, i) => {
            if(label === item.labelName) {
                return { ...item, fieldValue: event }
            }
            return item
            // return label === item.labelName ? { ...item, fieldValue: event } : item
        })]);
    }

    // const onMultiInputChangeHandler = (label, event) => {
    //     setFormState([...formList.map((item, i) => {
    //             if (typeof item.fieldValue === 'object') {
    //                  item.fieldValue.map((f, i) => {
    //                     return label === f.labelName ? { ...item, fieldValue: event } : item
    //                  })
    //         }
    //     })]);
    // }


    return (
        <>
            <div
                className="w-[53.75rem] rounded-[12px] border-[1px] border-[#A2A2A2] py-[3.31rem] px-[4.06rem] mx-auto relative">

                {/* show check icon when the update is completed */}
                {update === true && (
                    <div className="absolute top-0 right-0 left-0 bottom-0 z-20 flex justify-center items-center">
                        <CheckIcon />
                    </div>
                )}

                {/* 
                    *show image input component by default
                    *if showImageInput props passed - hide this component
                 */}
                {!showImageInput && <ImageInput setImage={setImage} />}

                {errorMsg && (<> <p className="p-2 bg-gray-200 rounded-md w-full text-red-400">{errorMsg}</p>
                </>)}

                {/* form fields */}
                <form className="w-[25rem] flex flex-col gap-y-[20px] relative">

                    {/* show loading while submitting || button click */}
                    {loading && (<div className="flex justify-center items-center absolute left-0 right-0 bottom-0 top-0 z-30"> <Spin size="large" />
                    </div>)}

                    {formList.map((item, index) => {

                        {/* SELECT
                        display select field if fieldType is select */}
                        if (item.fieldType === 'select' && item.options) {
                            return (
                                <CheckboxSelect
                                    key={index}
                                    label={item.labelName}
                                    options={item.options}
                                >
                                    <CheckboxSelect.CheckboxOptions
                                        onChange={(e) => onChangeHandler(item.labelName, e)}
                                        optionLabel={item.labelName}
                                        defaultChecked={item.defaultValue}
                                    />
                                </CheckboxSelect>
                            )
                        }

                        // Input
                        // display multi input when typeof field is an array
                        if (typeof item.fieldValue === 'object') {
                            return (
                                <div className='' key={index}>
                                    <label className='font-[500]' htmlFor={item.labelName}>{item.labelName}</label>
                                    <div className='flex gap-x-[1rem]'>
                                        {item?.fieldValue?.map((f, i) => (
                                            <InputField
                                                key={i}
                                                placeholder={f.labelName}
                                                onChange={(e) => f.action(e.target.value)}
                                                value={f.fieldValue}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )
                        }

                        // INPUT
                        //  display input field when field type is input
                        if (item.fieldType === 'input') {
                            return <InputField
                                key={index}
                                type={item.inputType ? item.inputType : 'text'}
                                labelName={item.labelName} placeholder={item.labelName}
                                onChange={(e) => onChangeHandler(item.labelName, e.target.value)
                                }
                                value={item.fieldValue}
                            />
                        }
                        if (item === "undefined") {
                            return null
                        }

                    })}
                </form>
            </div>
            {/* actiom button field */}
            <div className="flex justify-center gap-x-[1.12rem] mt-[2.12rem] mb-[4.25rem]">
                <Button onClick={cancelBtn} title={cancelBtnTitle ? cancelBtnTitle : "Cancel"} />
                <Button
                    title={btnTitle ? btnTitle : "Save"}
                    bg
                    onClick={onSubmits}
                    disable={disable}
                />
            </div>
        </>

    )
}

export default FormContainer