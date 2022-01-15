import React from "react";

import AppHero from "../compoments/home/hero";
import AppAbout from "../compoments/home/about";
import AppFeature from "../compoments/home/feature";
import AppWorks from "../compoments/home/works";
import AppFaq from "../compoments/home/faq";
import AppPricing from "../compoments/home/pricing";
import AppContact from "../compoments/home/contact";

const AppHome = () => {
	return (
		<div className="main">
			<AppHero />
			<AppAbout />
			<AppFeature />
			<AppWorks />
			<AppFaq />
			<AppPricing />
			<AppContact />
		</div>
	);
};

export default AppHome;
