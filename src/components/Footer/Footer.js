import React from 'react';
import { site } from '../../data/site';

const Footer = ({
	className = "footer-area",
	copyrightText = `©${new Date().getFullYear()} ${site.name}. All rights reserved.`,
	scrollToTopText = "Scroll to Top",
	scrollToTopTarget = "#header"
}) => {
	return (
		<footer className={`${className}`}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="footer-content d-flex flex-wrap justify-content-center justify-content-md-between align-items-center py-4">
							{/* Copyright */}
							<div className="copyright">
								{copyrightText}
							</div>
							{/* Scroll To Top */}
							<div id="scroll-to-top" className="scroll-to-top mt-3 mt-sm-0">
								<a href={scrollToTopTarget} className="smooth-anchor">{scrollToTopText}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
