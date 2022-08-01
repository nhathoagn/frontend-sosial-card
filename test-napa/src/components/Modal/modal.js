import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import trash_can from "../../access/trash-can-regular.svg"
import './modal.css'
const AppDelete = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div className="modal-delete-container">
                <div className="modal-delete">
                    <div className="modal-delete-title">
                        <div>Your about to delete a item</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppDelete;