import "./App.css";
import "antd/dist/antd.css";
import React from "react";

import { Layout } from "antd";

import AppHeader from "./compoments/common/header";
import AppHome from "./views/home";
import { Footer } from "antd/lib/layout/layout";
import AppFooter from "./compoments/common/footer";

const { Header, Content } = Layout;

function App() {
	return (
		<div>
			<Layout className="mainLayout">
				<Header>
					<AppHeader />
				</Header>
				<Content>
					<AppHome />
				</Content>
				<Footer>
					<AppFooter />
				</Footer>
			</Layout>
		</div>
	);
}

export default App;
