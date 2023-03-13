import React from 'react'
import { Input } from 'antd';

const InputField = ({ labelName, placeholder, value, onChange, type, margin, size }) => {
    return (
    <div className={`flex flex-col w-full `}>
      <label className="font-[500]" htmlFor={labelName}>{labelName}</label>
      <div className="border rounded-md mt-[6px]">
        <Input style={{height: '2.5rem'}} bordered={false} size={size} type={type} placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    </div>
  )
}

export default InputField