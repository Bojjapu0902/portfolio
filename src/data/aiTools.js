/**
 * AI tools used day to day, grouped by where they sit in the workflow.
 */
export const aiTools = {
	title: "AI in My Workflow",
	subtitle:
		"AI is part of how I work, not a replacement for craft. I use it to move faster through research, exploration and boilerplate — so more time goes into the decisions that actually shape the experience.",
	groups: [
		{
			id: "01",
			title: "Conversational & Reasoning",
			description:
				"Research synthesis, content drafting, UX copy and reviewing technical decisions before committing to them.",
			tools: ["Claude", "ChatGPT"],
		},
		{
			id: "02",
			title: "Code & Development",
			description:
				"Component scaffolding, refactoring, test coverage and pair-programming inside the editor and the terminal.",
			tools: ["GitHub Copilot", "Cursor", "Claude Code", "v0"],
		},
		{
			id: "03",
			title: "Design & Prototyping",
			description:
				"Faster layout exploration, content fill and rapid clickable prototypes before a single line of code is written.",
			tools: ["Figma AI", "Uizard", "Framer AI"],
		},
		{
			id: "04",
			title: "Visual & Generative",
			description:
				"Concept imagery, mood boards, generative fill and asset clean-up for marketing and product visuals.",
			tools: ["Midjourney", "Adobe Firefly", "Photoshop AI"],
		},
	],
};
