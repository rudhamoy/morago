import { useState } from 'react'
import { Checkbox } from 'antd';
import arrowPng from '../../../assets/icon/arrow-right.png'
import GearPng from '../../../assets/icon/Icon-GearSix.png'
import { useOutsideClick } from '../../hooks/useOutsideClick';

const withModalHeader = (Component) => {
    return (props) => {

        const [showStatus, setShowStatus] = useState(false)
        const ref = useOutsideClick(() => setShowStatus(false))

        const { statusBtn, image, btnTitle } = props

        const Image = !image ? '' : image.path

        return (
            <div className="mx-[4.06rem] my-[3.31rem]">

                <div className="flex">

                    {/* icon || image */}
                    <div className="h-[12.9rem] w-[12.9rem] bg-[#ABB5BE] flex justify-center items-center">
                        <img width={35} src={Image} alt="" />
                    </div>

                    {/* buttons */}
                    <div className="h-[12.9rem] w-[32.9rem] bg-[#E9E9E9] relative">
                        <div className="absolute top-[25px] right-[22px]">
                            <button className="w-[15rem] h-[2.62rem] bg-white font-[500] flex justify-between items-center rounded-[0.4rem] px-[1rem]">
                                Edit {btnTitle}
                                <img src={arrowPng} alt="" width={32} />
                            </button>

                            { !statusBtn && (
                                <button
                                    ref={ref}
                                    onClick={() => setShowStatus(!showStatus)}
                                    className="w-[15rem] h-[2.62rem] bg-white font-[500] flex justify-between items-center rounded-[0.4rem] px-[1rem] mt-[9px]">
                                    Status
                                    <img src={GearPng} alt="" width={32} />
                                </button>
                            )}

                            {showStatus && (
                                <div className="bg-white h-[13.62rem] w-[15rem] shadow-xl border rounded-[0.4rem] relative">
                                    <div className="border-b font-[500] px-[1rem] py-[0.5rem]">
                                        Status
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
                                                <button className='border ml-[0.5rem] w-[4.5rem] h-[2rem] rounded-[4px] text-white bg-[#0354A6]'>
                                                    Apply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex mt-[1.6rem] px-[1rem]">
                    <Component
                        {...props}
                    />
                </div>
            </div>
        )
    }
}

export default withModalHeader