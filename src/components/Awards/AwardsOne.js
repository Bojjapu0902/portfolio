import React from "react";
import { Link } from "react-router-dom";
import { milestones } from "../../data/awards";

const AwardsOne = () => {
	return (
		<section className="awards sticky primary-bg">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12 col-lg-3">
						{/* Intro */}
						<div className="intro">
							<h3 className="title">{milestones.title}</h3>
						</div>
					</div>

					<div className="col-12 col-lg-8">
						<ul className="list-group list-group-flush">
							{milestones.items.map((award, index) => (
								<li key={index} className="list-group-item">
									<div className="content">
										<h4 className="title mt-0 mb-3">{award.title}</h4>
										<span className="tags mt-3 mt-md-0">
											{award.year} — {award.award}
										</span>
									</div>
									{/* Award Button */}
									<Link className="award-btn rounded-pill" to={award.link}>
										<i className="icon rotate bi bi-arrow-right-short m-0"></i>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AwardsOne;
