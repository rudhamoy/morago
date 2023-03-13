import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import Styles from './Modal.module.css'

export const Modal = ({ children }) => {
    const [shouldShow, setShouldShow] = useState(false)

    return (
        <>
            <button className="bg-gray-700 rounded-md text-white p-2" onClick={() => setShouldShow(true)}>Show Modal</button>
            {shouldShow && (
                <div className={Styles.modalBackground} onClick={() => setShouldShow(false)}>
                    <div className={Styles.modalBody} onClick={e => e.stopPropagation()}>
                        <button className='absolute right-[20px] top-[20px]' onClick={() => setShouldShow(false)}>
                            <AiOutlineClose />
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>

    )
}