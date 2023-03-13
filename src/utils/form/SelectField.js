import React from 'react'
import { Select } from 'antd'

const SelectField = ({ placeholder, labelName, defaultValue, children, options, onChange, size, my, mode, optionLabelProp, maxTagCount }) => {
  // const onSearch = (value) => {
  // };
  return (
    <div className={`my-${my ? my : "6"} flex flex-col w-full h-[4.37rem]`}>
      <label className='font-[500]' htmlFor={labelName}>{labelName}</label>
      <div className="border rounded-md mt-[6px]">
        <Select
          style={{ height: '2.5rem' }}
          className="w-full"
          dropdownStyle={{ borderRadius: "8px", padding: "5px", border: "0.5px solid lightgrey" }}
          bordered={false}
          defaultValue={defaultValue}
          // showSearch
          placeholder={placeholder}
          optionFilterProp="children"
          onChange={onChange}
          // onSearch={onSearch}
          // filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
          size={size}
          mode={mode}
          optionLabelProp={optionLabelProp}
          maxTagCount={maxTagCount}
          options={options}
        />
          {/* {children} */}
        {/* </Select> */}
      </div>
    </div>
  )
}

export default SelectField