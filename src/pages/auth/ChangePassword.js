import { useMutation } from '@apollo/client';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CHANGE_PASSWORD_MUTATION } from '../../utils/api/userApi';
import Eye from '../../assets/icon/Eye.png'

const ChangePassword = () => {
    const navigate = useNavigate()
    const [originalPassword, setOriginalPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [viewOldPassword, setViewOldPassword] = useState(false)
    const [viewNewPassword, setViewNewPassword] = useState(false)

    const [changePassword] = useMutation(CHANGE_PASSWORD_MUTATION, {
        variables: {
            originalPassword, newPassword
        },
        onCompleted: () => {
            //   localStorage.setItem(AUTH_TOKEN, login.token);
            navigate('/');
        }
    });

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col gap-y-[0.93rem] w-[24.6rem]">
                <p className="text-[2.5rem] font-[700] text-center mb-[40px]">Change Password</p>
                {/* phone */}
                <div className="flex items-center px-1 rounded-[10px] border-[1px] outline-none w-[24.6rem]">
                    <input
                        onChange={e => setOriginalPassword(e.target.value)}
                        value={originalPassword}
                        type={viewOldPassword === true ? "text" : "password"}
                        placeholder='Original Password'
                        className="rounded-[10px] px-2 py-[1rem] outline-none w-[24.2rem]"
                    />
                    <img className="w-[22px] h-[17px] mr-1 cursor-pointer" onClick={() => setViewOldPassword(!viewOldPassword)} src={Eye} alt="view" />
                </div>
                {/* password */}
                <div className="flex items-center px-1 rounded-[10px] border-[1px] outline-none w-[24.6rem]">
                    <input
                        onChange={e => setNewPassword(e.target.value)}
                        value={newPassword}
                        type={viewNewPassword === true ? "text" : "password"}
                        placeholder='New Password'
                        className="rounded-[10px] px-2 py-[1rem] outline-none w-[24.2rem]"
                    />
                    <img className="w-[22px] h-[17px] mr-1 cursor-pointer" onClick={() => setViewNewPassword(!viewNewPassword)} src={Eye} alt="view" />
                </div>

                <button className="bg-[#171717] text-white py-[1rem] rounded-[10px] " onClick={changePassword}>Save</button>
            </div>
        </div>
    )
}

export default ChangePassword