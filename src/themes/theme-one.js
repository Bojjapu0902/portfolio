import React from 'react';

import Preloader from '../components/Miscellaneous/Preloader';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/PortfolioSection';
import AboutSection from '../components/About/AboutSection';
import Process from '../components/Process/Process';
import Shape from '../components/Shape/Shape';
import AITools from '../components/AITools/AITools';
import Awards from '../components/Awards/AwardsOne';
import CTA from '../components/CTA/CTAOne';
import Footer from '../components/Footer/Footer';
import SearchModal from '../components/Miscellaneous/SearchModal';
import OffcanvasMenu from '../components/Miscellaneous/OffcanvasMenu';
import MagicCursor from '../components/Miscellaneous/MagicCursor';
import LenisScroll from '../components/Header/LenisScroll';
import ScrollToTop from '../components/Miscellaneous/ScrollToTop';

const ThemeOne = () => {
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
					<Portfolio />
					<AboutSection />
					<Process />
					<Shape />
					<AITools />
					<Awards />
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
