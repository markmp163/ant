import React from 'react'
import { List, Card, Button } from 'antd';

const data = [
    {
        title: 'BASIC',
        price: '29.99',
        memory: 1,
        user: 1,
        support: '24/7 support',
        feature: 'Safe, reliable backup',
        access: 'Access from anywhere'

    },
    {
        title: 'PREMIUM',
        price: '59.99',
        memory: 5,
        user: 5,
        support: '24/7 support',
        feature: 'Safe, reliable backup',
        access: 'Access from anywhere'
    },
    {
        title: 'ENTERPRISE',
        price: '99.99',
        memory: 'Unlimited space',
        user: 15,
        support: '24/7 support',
        feature: 'Safe, reliable backup',
        access: 'Access from anywhere'
    },
];

const AppPricing = () => {
    return (
        <div className='block pricingBlock bgGray' id='pricing'>
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Choose a plan to fit your needs</h2>
                    <p>Debitis itaque minima dolorum fuga aperiam inventore, quidem enim</p>
                </div>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                    }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.title}>
                                <h2>${item.price}</h2>
                                <p>{item.memory} GB of space</p>
                                <p>{item.user} user</p>
                                <p>{item.support}</p>
                                <p>{item.feature}</p>
                                <p>{item.access}</p>
                                {
                                    item.title === 'PREMIUM' ?
                                        <Button type='primary' size='large'>
                                            <i className='fab fa-telegram-plane' />
                                            Get Started
                                        </Button> :
                                        <Button type='primary'>
                                            <i className='fab fa-telegram-plane' />
                                            Get Started
                                        </Button>

                                }
                            </Card>
                        </List.Item>
                    )}
                />
            </div>

        </div>
    )
}

export default AppPricing