import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Preloader from '../components/Miscellaneous/Preloader';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/PortfolioTwo';
import WorksShowcase from '../components/Portfolio/WorksShowcase';
import AboutSection from '../components/About/AboutSection';
import Experiences from '../components/Experiences/Experiences';
import AnimatedImage from '../components/AnimatedImage/AnimatedImage';
import Skills from '../components/Skills/Skills';
import FAQ from '../components/FAQ/FAQ';
import Process from '../components/Process/Process';
import Shape from '../components/Shape/Shape';
import AIWorkflowLoop from '../components/AITools/AIWorkflowLoop';
import AIToolStack from '../components/AITools/AIToolStack';
import Awards from '../components/Awards/AwardsOne';
import Form from '../components/Form/Form';
import CTA from '../components/CTA/CTAOne';
import Footer from '../components/Footer/Footer';
import SearchModal from '../components/Miscellaneous/SearchModal';
import OffcanvasMenu from '../components/Miscellaneous/OffcanvasMenu';
import MagicCursor from '../components/Miscellaneous/MagicCursor';
import LenisScroll from '../components/Header/LenisScroll';
import ScrollToTop from '../components/Miscellaneous/ScrollToTop';

// Header height (fixed nav) to keep anchored sections from landing under it.
const ANCHOR_OFFSET = -100;

/** Smooth-scrolls to the section named by the URL hash (e.g. "/#works"). */
const useScrollToHash = () => {
	const { hash } = useLocation();

	useEffect(() => {
		if (!hash) return;
		const target = document.querySelector(hash);
		if (!target) return;

		const timer = setTimeout(() => {
			if (window.lenis && typeof window.lenis.scrollTo === 'function') {
				window.lenis.scrollTo(target, { offset: ANCHOR_OFFSET });
			} else {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}, 100);

		return () => clearTimeout(timer);
	}, [hash]);
};

const ThemeOne = () => {
	useScrollToHash();

	return (
        <div>
			<ScrollToTop />
			<MagicCursor />
			<Preloader />
			<LenisScroll />
			<div className="main">
				<Header />
				<div id="main-wrapper" className="main-wrapper">
					<Hero />

					{/* Works */}
					<div id="works">
						<section className="works position-relative pb-0">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="intro d-flex justify-content-between align-items-center">
											<h3 className="title">Selected Works</h3>
										</div>
									</div>
								</div>
							</div>
						</section>
						<WorksShowcase />
						<Portfolio />
					</div>

					{/* About */}
					<div id="about">
						<AboutSection />
						<Experiences />
						<AnimatedImage imageSrc="/img/case-1.svg" altText="Project preview" />
						<Skills />
						<FAQ />
					</div>

					<Process />
					<Shape />

					{/* AI */}
					<div id="ai">
						<AIWorkflowLoop />
						<AIToolStack />
					</div>

					<Awards />

					{/* Contact */}
					<div id="contact">
						<Form />
					</div>

					<CTA />
					<Footer />
					<SearchModal />
					<OffcanvasMenu />
				</div>
			</div>
		</div>
    );
};

export default ThemeOne;
