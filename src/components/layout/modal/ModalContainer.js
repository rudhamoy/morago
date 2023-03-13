import { Modal } from 'antd';
import { useModal } from '../../../utils/hooks/useModal';

const ModalContainer = ({children }) => {
    const [open, handleOk, handleCancel, setOpen, openModal] = useModal();

    return (
        <>
            <Modal
                footer={null}
                title=""
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                width={860}
            >
                {children}
            </Modal>
        </>
    )
}

export default ModalContainer