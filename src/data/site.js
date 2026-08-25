/**
 * Central site configuration.
 * Update personal details, contact info and social links here only.
 */

export const site = {
	name: "B Srinivas",
	brand: "Srinivas.",
	role: "UI/UX Designer & Front-End Developer",
	location: "Hyderabad, Telangana, India",
	yearsOfExperience: "14+",
	since: 2012,

	// TODO: confirm which address should be public
	email: "bojjapu.09@gmail.com",
	phone: "+91 97033 06497",
	address: "KPHB, Kukatpally, Hyderabad, Telangana 500072, India",

	availability: "Open to full-time, contract and remote roles",

	intro: "Hello! I’m B Srinivas.",
	shortBio:
		"A professional Front-End Developer and UI/UX Designer with 14+ years of experience building enterprise research platforms, SaaS dashboards and responsive web applications. I turn user research and wireframes into accessible, high-performance interfaces.",
};

/* TODO: replace the "#" placeholders with real profile URLs */
export const socialLinks = [
	{ label: "LinkedIn", href: "#" },
	{ label: "GitHub", href: "#" },
	{ label: "Behance", href: "#" },
];

export const menuItems = [
	{ label: "Home", href: "/" },
	{ label: "Works", href: "/portfolio" },
	{ label: "About", href: "/about" },
	{ label: "AI", href: "/ai" },
	{ label: "Contact", href: "/contact" },
];

export const cta = {
	sub_title: "Open to new opportunities",
	title: "Let’s Work",
	highlight: "Together",
	button: {
		text: "Get In Touch!",
		link: "/contact",
		icon: "bi bi-arrow-right",
	},
	socials: socialLinks.map((s) => ({ name: s.label, link: s.href })),
};
