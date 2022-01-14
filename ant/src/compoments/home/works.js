import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'antd'

const AppWorks = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className='block worksBlock'>
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                </div>
            </div>

            <div className='contentHolder'>
                <Button type="primary" onClick={showModal}>
                    <i className='fas fa-play' />
                </Button>
            </div>
            <Modal
                title="Woocommerce Tutorial"
                visible={isModalVisible}
                footer={null}
                onCancel={handleCancel}>
                <iframe width="468" height="346" src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Modal>
        </div>
    )
}

export default AppWorks