import React from 'react';

import Preloader from '../components/Miscellaneous/Preloader';
import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/BreadcrumbOne';
import Shape from '../components/Shape/Shape';
import Experiences from '../components/Experiences/Experiences';
import AnimatedImage from '../components/AnimatedImage/AnimatedImage';
import Skills from '../components/Skills/Skills';
import AITools from '../components/AITools/AITools';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTAOne';
import Footer from '../components/Footer/Footer';
import SearchModal from '../components/Miscellaneous/SearchModal';
import OffcanvasMenu from '../components/Miscellaneous/OffcanvasMenu';
import MagicCursor from '../components/Miscellaneous/MagicCursor';
import LenisScroll from '../components/Header/LenisScroll';
import ScrollToTop from '../components/Miscellaneous/ScrollToTop';

const About = () => {
    return (
        <div>
			<ScrollToTop />
			<MagicCursor />
			<Preloader />
			<LenisScroll />
			<div className="main">
				<Header />
				<div id="main-wrapper" className="main-wrapper">
					<Breadcrumb />
					<Shape />
					<Experiences />
					<AnimatedImage imageSrc="/img/case-1.jpg" altText="Project preview" />
					<Skills />
					<AITools />
					<FAQ />
					<CTA />
					<Footer />
					<SearchModal />
					<OffcanvasMenu />
				</div>
			</div>
		</div>
    );
};

export default About;
