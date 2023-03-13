import { useState } from 'react'

export const useModal = () => {
    const [open, setOpen] = useState(false)
    const [modalData, setModalData] = useState({})

    const handleOk = (e) => {
        setOpen(false);
    };

    const handleCancel = (e) => {
        setOpen(false);
    }

    const actionBtn = (record) => {
        setOpen(!open)
        setModalData(record)
    }

    return [open, handleOk, handleCancel, actionBtn, modalData]
    
}