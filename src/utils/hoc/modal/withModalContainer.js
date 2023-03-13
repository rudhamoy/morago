import { useState } from 'react'
import { Checkbox } from 'antd';
import arrowPng from '../../../assets/icon/arrow-right.png'
import GearPng from '../../../assets/icon/Icon-GearSix.png'
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { client } from '../../..';

const withModalContainer = (Component) => {
    return (props) => {
        const navigate = useNavigate()

        // state variables
        const [selectedIndex, setSelectedIndex] = useState()
        const [checked, setChecked] = useState(false)
        const [showStatus, setShowStatus] = useState(false)
        const [statusList, setStatusList] = useState(() => [
            "Verified", "Unverified"
        ])
        const [activeStatus, setActiveStatus] = useState()

        const ref = useOutsideClick(() => setShowStatus(false))

        const { statusBtn, image, btnTitle, onEditClick } = props

        const Image = !image ? null : image

        const checkboxChangeHandler = (i, index) => {
            if(selectedIndex === index) {
                setChecked(false)
                setSelectedIndex()
                setActiveStatus()
            } else {
                setSelectedIndex(index)
                setActiveStatus(i)
                setChecked(true)
           }
        };


        // const [changeStatus, { loading: statusLoading}] = useMutation(props.statusAction?.statusMutation, {
        //     variables: {
        //         id: props.statusAction?.id,
        //         isActive: activeStatus === "Verified" ? true : false
        //     },
        //     onCompleted: () => {
        //         navigate(props.statusAction?.navigation)
        //     },
        //     refetchQueries: [{query: props.statusAction?.refetchQuery}]
        // });

        const changeStatus = async () => {
            await client.mutate({
                mutation: props.statusAction?.statusMutation,
                variables: {
                    id: props.statusAction?.id,
                    isActive: activeStatus === "Verified" ? true : false
                },
                refetchQueries: [{ query:props.statusAction?.refetchQuery }]
            })
        }


        const applyHandler = () => {
            changeStatus()
            setChecked(false)
            setSelectedIndex()
            setActiveStatus()
        }


        return (
            <div className="mx-[4.06rem] my-[3.31rem]">

                <div className="flex">

                    {/* icon || image */}
                    <div className="h-[12.9rem] w-[12.9rem] bg-[#ABB5BE] flex justify-center items-center overflow-hidden">
                        <img className='w-full h-full object-cover' src={Image} alt="" />
                    </div>

                    {/* buttons */}
                    <div className="h-[12.9rem] w-[32.9rem] bg-[#E9E9E9] relative">
                        <div className="absolute top-[25px] right-[22px]">
                            {/* Edit Buttons */}
                            <button
                                onClick={() => navigate(onEditClick)}
                                className="w-[15rem] h-[2.62rem] bg-white font-[500] flex justify-between items-center rounded-[0.4rem] px-[1rem]">
                                Edit {btnTitle}
                                <img src={arrowPng} alt="" width={32} />
                            </button>

                            {/* show status button by default */}
                            {/* if status btn props provided/passed - btn will be disabled/hidden */}
                            {!statusBtn && (
                                <button
                                    ref={ref}
                                    onClick={() => setShowStatus(!showStatus)}
                                    className="w-[15rem] h-[2.62rem] bg-white font-[500] flex justify-between items-center rounded-[0.4rem] px-[1rem] mt-[9px]">
                                    Status
                                    <img src={GearPng} alt="" width={32} />
                                </button>
                            )}


                            {/* show status dialog box - onClick */}
                            {showStatus && (
                                <div className="bg-white h-[13.62rem] w-[15rem] shadow-xl border rounded-[0.4rem] relative">
                                    <div className="border-b font-[500] px-[1rem] py-[0.5rem]">
                                        Status
                                    </div>

                                    <div onClick={e => e.stopPropagation()} className=' px-[1rem] py-[0.5rem]'>
                                        <ul>
                                            {statusList.map((i, index) => (
                                                <li key={index}>
                                                    <Checkbox
                                                        onChange={() => checkboxChangeHandler(i, index)}
                                                        disabled={checked && index !== selectedIndex}
                                                    >{i}</Checkbox>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className='border-t absolute bottom-0 right-0 w-full h-[3rem] flex justify-center items-center'>
                                        <div className="">
                                            <div className="absolute right-[0.5rem] bottom-[0.5rem] flex">
                                                <button className='border w-[4.5rem] h-[2rem] rounded-[4px]'>
                                                    Cancel
                                                </button>
                                                <button onClick={applyHandler} className='border ml-[0.5rem] w-[4.5rem] h-[2rem] rounded-[4px] text-white bg-[#0354A6]'>
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
                    {/* {statusLoading ? (<p>Loading...</p>): (
                        <Component
                        {...props}
                        />
                    )} */}
                    <Component
                        {...props}
                        />
                </div>
            </div>
        )
    }
}

export default withModalContainer