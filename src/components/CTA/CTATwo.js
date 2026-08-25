import React from "react";
import { cta } from "../../data/site";
import MagneticButton from '../Miscellaneous/MagneticButton';

const CTATwo = () => {
	return (
		<section className="cta layout-2 primary-bg">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12 col-md-8 col-lg-7">
						<div className="cta-text">
							<span className="sub-title">{cta.sub_title}</span>
							<h2 className="title mt-3 mb-0">
								{cta.title} <span>{cta.highlight}</span>
							</h2>
						</div>
					</div>
					<div className="col-12 col-md-4 col-lg-5 text-md-end mt-3 mt-md-0">
						<MagneticButton href={cta.button.link}>
							{cta.button.text}
						</MagneticButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTATwo;
