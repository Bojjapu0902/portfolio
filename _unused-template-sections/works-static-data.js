/**
 * Portfolio / Works data.
 * TODO: replace /img/case-*.jpg with real project screenshots.
 */

export const works = [
	{
		id: 1,
		slug: "strategyr",
		title: "StrategyR",
		image: "/img/case-1.jpg",
		categories: ["UI/UX", "Front-End"],
		groups: ["ui-ux", "front-end"],
		projectLink: "/portfolio-single",
	},
	{
		id: 2,
		slug: "marketglass",
		title: "MarketGlass Platform",
		image: "/img/case-2.jpg",
		categories: ["UI/UX", "Product Design"],
		groups: ["ui-ux", "product"],
		projectLink: "/portfolio-single",
	},
	{
		id: 3,
		slug: "evolv",
		title: "Evolv",
		image: "/img/case-3.jpg",
		categories: ["UI/UX", "Front-End"],
		groups: ["ui-ux", "front-end"],
		projectLink: "/portfolio-single",
	},
	{
		id: 4,
		slug: "esmart-permit",
		title: "eSmart Permit",
		image: "/img/case-4.jpg",
		categories: ["Enterprise", "UI/UX"],
		groups: ["enterprise", "ui-ux"],
		projectLink: "/portfolio-single",
	},
	{
		id: 5,
		slug: "ispatialtech",
		title: "iSpatial Techno Solutions",
		image: "/img/case-5.jpg",
		categories: ["Enterprise", "Front-End"],
		groups: ["enterprise", "front-end"],
		projectLink: "/portfolio-single",
	},
];

export const workFilters = [
	{ id: "all", label: "All" },
	{ id: "ui-ux", label: "UI/UX" },
	{ id: "front-end", label: "Front-End" },
	{ id: "enterprise", label: "Enterprise" },
];

export const singleWork = {
	id: 1,
	title: "StrategyR — Market Research Platform for Global Industry Analysts",
	date: "Dec 2020 – Present",
	categories: ["UI/UX", "Front-End"],
	description:
		"Global Industry Analysts, Inc. (GIA), operating under the StrategyR brand, is a leading publisher of off-the-shelf market research with 34 years of forecasting experience. I lead the interface design and front-end build for the platform — turning dense, analyst-driven research into a clear, browsable experience across every key geography.",
	task:
		"Design and build a research platform that makes thousands of data-heavy reports discoverable, comparable and readable — on any device, for a global audience.",
	role: ["UX Design", "UI Design", "Front-End Development"],
	client: "Global Industry Analysts, Inc. (StrategyR)",
	categoryYear: "Enterprise Platform ©2026",
	liveSite: "https://www.strategyr.com",
	gallery: ["/img/case-1.jpg", "/img/case-2.jpg", "/img/case-3.jpg"],
};
