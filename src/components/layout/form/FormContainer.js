import React from 'react'

const FormContainer = ({children}) => {
    return (
        <>
            <div className='border rounded-[12px] w-[53.75rem] p-[4.06rem]'>
                {children}
            </div>
            <div>
                <button className='rounded-[4px] w-[13.19rem] h-[55px] bg-[#F5F5F5]'>Cancel</button>
                <button className='rounded-[4px] w-[13.19rem] h-[55px] bg-[##222222] text-gray-100'>Save</button>
            </div>
        </>
    )
}

export default FormContainer