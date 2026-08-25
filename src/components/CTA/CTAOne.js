import React from "react";
import { cta } from "../../data/site";
import MagneticButton from '../Miscellaneous/MagneticButton';

const CTAOne = () => {
	return (
		<section className="cta border-top border-light-subtle">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-12 col-md-10 col-lg-7">
						{cta.sub_title && (
							<span className="cta-availability">{cta.sub_title}</span>
						)}
						<h2 className="title mb-0 mb-md-2">{cta.title}</h2>
						<div className="cta-text">
							<span className="line-item">{cta.highlight}</span>
							<span className="line"></span>
							<MagneticButton href={cta.button.link}>
								{cta.button.text}
							</MagneticButton>
						</div>

						{/* Socials */}
						<div className="socials mt-5">
							<nav className="nav justify-content-center">
								{cta.socials.map((social, index) => (
									<a
										key={index}
										className="nav-link swap-icon"
										href={social.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										{social.name} <i className="icon rotate bi bi-arrow-right-short"></i>
									</a>
								))}
							</nav>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTAOne;
