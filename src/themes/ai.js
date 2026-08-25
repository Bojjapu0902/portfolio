import React from 'react';

import Preloader from '../components/Miscellaneous/Preloader';
import Header from '../components/Header/Header';
import BreadcrumbAI from '../components/Breadcrumb/BreadcrumbAI';
import Shape from '../components/Shape/Shape';
import AIWorkflowLoop from '../components/AITools/AIWorkflowLoop';
import AIToolStack from '../components/AITools/AIToolStack';
import CTA from '../components/CTA/CTAOne';
import Footer from '../components/Footer/Footer';
import SearchModal from '../components/Miscellaneous/SearchModal';
import OffcanvasMenu from '../components/Miscellaneous/OffcanvasMenu';
import MagicCursor from '../components/Miscellaneous/MagicCursor';
import LenisScroll from '../components/Header/LenisScroll';
import ScrollToTop from '../components/Miscellaneous/ScrollToTop';

const Ai = () => {
    return (
        <div>
			<ScrollToTop />
			<MagicCursor />
			<Preloader />
			<LenisScroll />
			<div className="main">
				<Header />
				<div id="main-wrapper" className="main-wrapper">
					<BreadcrumbAI />
					<AIWorkflowLoop />
					<Shape />
					<AIToolStack />
					<CTA />
					<Footer />
					<SearchModal />
					<OffcanvasMenu />
				</div>
			</div>
		</div>
    );
};

export default Ai;
