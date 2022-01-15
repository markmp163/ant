import React from "react";
import { Form, Input, InputNumber, Button } from "antd";

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
		number: "${label} is not a valid number!",
	},
	number: {
		range: "${label} must be between ${min} and ${max}",
	},
};

const AppContact = () => {
	const onFinish = (values) => {
		console.log(values);
	};

	return (
		<div className="block contactBlock" id="contact">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>Get in Touch</h2>
					<p>
						Dolore nam rerum obcaecati fugit odio nobis Molestiae
						rerum
					</p>
				</div>
				<Form
					{...layout}
					name="nest-messages"
					onFinish={onFinish}
					validateMessages={validateMessages}
					size="large"
					labelAlign="left"
				>
					<Form.Item
						name={["user", "name"]}
						label="Name"
						rules={[{ required: true }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name={["user", "email"]}
						label="Email"
						rules={([{ type: "email" }], [{ required: true }])}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name={["user", "age"]}
						label="Age"
						rules={
							([{ type: "number", min: 0, max: 99 }],
							[{ required: true }])
						}
					>
						<InputNumber />
					</Form.Item>
					<Form.Item
						name={["user", "website"]}
						label="Website"
						rules={[{ required: true }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name={["user", "introduction"]}
						label="Introduction"
						rules={[{ required: true }]}
					>
						<Input.TextArea />
					</Form.Item>
					<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default AppContact;
