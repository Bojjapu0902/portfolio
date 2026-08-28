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

	// Served as-is from /public — no PDF converter was available in this
	// environment, so this is the source .docx. Swap in a PDF export here
	// if/when one exists; the filename is what the browser saves it as.
	cv: "/files/B-Srinivas-CV.docx",
	cvFileName: "B-Srinivas-CV.docx",

	intro: "Hello! I’m B Srinivas.",
	shortBio:
		"I’m a UI/UX Designer and Front-End Developer who combines design thinking with front-end expertise to create intuitive, responsive, and high-performance web applications. From user flows and design systems to production-ready interfaces, I bring ideas to life through thoughtful design and clean development.",
};

/* TODO: replace the "#" placeholders with real profile URLs */
export const socialLinks = [
	{ label: "LinkedIn", href: "#" },
	{ label: "GitHub", href: "#" },
	{ label: "Behance", href: "#" },
];

// Home is now a single page — Works/About/AI/Contact are sections on it,
// linked to by hash so they work both from "/" and from other routes
// (e.g. a project detail page navigates to "/" and scrolls into place).
export const menuItems = [
	{ label: "Home", href: "/" },
	{ label: "Works", href: "/#works" },
	{ label: "About", href: "/#about" },
	{ label: "AI", href: "/#ai" },
	{ label: "Contact", href: "/#contact" },
];

export const cta = {
	sub_title: "Open to new opportunities",
	title: "Let’s Work",
	highlight: "Together",
	button: {
		text: "Get In Touch!",
		link: "/#contact",
		icon: "bi bi-arrow-right",
	},
	socials: socialLinks.map((s) => ({ name: s.label, link: s.href })),
};
