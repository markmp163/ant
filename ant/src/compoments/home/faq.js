import React from "react"
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

const AppFaq = () => {
    return (
        <div className="block faqBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Frequently Asked Questions</h2>
                    <p>Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam</p>
                </div>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="How to setup the theme?" key="1">
                        <p>Postea ceteros corrumpit ius te, eos epicuri intellegebat consequuntur et. Sint quot suscipiantur ea nam. Nam pericula evertitur ut, per et quod nostro, autem augue id has. Virtute epicurei quo te, pri et novum essent senserit.</p>
                    </Panel>
                    <Panel header="Can I change plan or cancel at any time?" key="2">
                        <p>Postea ceteros corrumpit ius te, eos epicuri intellegebat consequuntur et. Sint quot suscipiantur ea nam. Nam pericula evertitur ut, per et quod nostro, autem augue id has. Virtute epicurei quo te, pri et novum essent senserit.</p>
                    </Panel>
                    <Panel header="How to access through cloud?" key="3">
                        <p>Postea ceteros corrumpit ius te, eos epicuri intellegebat consequuntur et. Sint quot suscipiantur ea nam. Nam pericula evertitur ut, per et quod nostro, autem augue id has. Virtute epicurei quo te, pri et novum essent senserit.</p>
                    </Panel>
                    <Panel header="Can I manage multiple task?" key="4">
                        <p>Postea ceteros corrumpit ius te, eos epicuri intellegebat consequuntur et. Sint quot suscipiantur ea nam. Nam pericula evertitur ut, per et quod nostro, autem augue id has. Virtute epicurei quo te, pri et novum essent senserit.</p>
                    </Panel>
                    <Panel header="How can I change my password?" key="5">
                        <p>Postea ceteros corrumpit ius te, eos epicuri intellegebat consequuntur et. Sint quot suscipiantur ea nam. Nam pericula evertitur ut, per et quod nostro, autem augue id has. Virtute epicurei quo te, pri et novum essent senserit.</p>
                    </Panel>
                    <Panel header="How to manage my account?" key="6">
                        <p>Postea ceteros corrumpit ius te, eos epicuri intellegebat consequuntur et. Sint quot suscipiantur ea nam. Nam pericula evertitur ut, per et quod nostro, autem augue id has. Virtute epicurei quo te, pri et novum essent senserit.</p>
                    </Panel>
                </Collapse>
                <div className="quickSupport">
                    <h3>Want quick support?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur velit necessitatibus praesentium aliquid eos in neque recusandae, incidunt esse dolore voluptatum nesciunt quod soluta consequuntur voluptatibus ab excepturi nobis! Porro!</p>
                    <Button type="primary" size="large"><i className="fas fa-envelope atn-btn"></i>Email your question</Button>
                </div>
            </div>
        </div>
    )
}

export default AppFaq