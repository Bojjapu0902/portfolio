import React from 'react';

/**
 * Small, self-contained brand marks for the AI tool grid.
 * Simplified geometric approximations (not trademarked artwork), rendered
 * in a single ink tone — the design system treats brand marks the way its
 * "Publication Logo Card" does: grayscale, on a Vellum tile, no color.
 */
const ToolIcons = {
	claude: () => (
		<svg viewBox="0 0 24 24" width="28" height="28" fill="none">
			<g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
				<path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
				<path d="M5.3 5.3l4.2 4.2M14.5 14.5l4.2 4.2M18.7 5.3l-4.2 4.2M9.5 14.5l-4.2 4.2" />
			</g>
		</svg>
	),
	figma: () => (
		<svg viewBox="0 0 24 24" width="26" height="26" fill="none">
			<g fill="currentColor">
				<path d="M9 2h4v5H9a2.5 2.5 0 0 1 0-5z" />
				<path d="M4 9.5A2.5 2.5 0 0 1 6.5 7H9v5H6.5A2.5 2.5 0 0 1 4 9.5z" />
				<path d="M4 17a2.5 2.5 0 0 1 2.5-2.5H9V19a2.5 2.5 0 1 1-5 0z" />
				<path d="M9 7h2.5a2.5 2.5 0 1 1 0 5H9z" />
				<path d="M9 12h2.5a2.5 2.5 0 1 1-2.5 2.5z" />
			</g>
		</svg>
	),
	cursor: () => (
		<svg viewBox="0 0 24 24" width="26" height="26" fill="none">
			<path
				d="M12 2.5 20.5 7.5V16.5L12 21.5 3.5 16.5V7.5Z"
				stroke="currentColor"
				strokeWidth="1.4"
				strokeLinejoin="round"
			/>
			<path d="M3.5 7.5 12 12M12 12 20.5 7.5M12 12V21.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
		</svg>
	),
	supabase: () => (
		<svg viewBox="0 0 24 24" width="24" height="24" fill="none">
			<path
				d="M13.2 2 4.6 13.4a1 1 0 0 0 .8 1.6H11l-.4 7 8.8-11.4a1 1 0 0 0-.8-1.6H13z"
				fill="currentColor"
			/>
		</svg>
	),
	vercel: () => (
		<svg viewBox="0 0 24 24" width="24" height="24" fill="none">
			<path d="M12 3 21.5 20H2.5Z" fill="currentColor" />
		</svg>
	),
	openai: () => (
		<svg viewBox="0 0 24 24" width="24" height="24" fill="none">
			<circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.4" />
			<path
				d="M12 6.5v3.2M12 14.3v3.2M6.5 12h3.2M14.3 12h3.2M8.4 8.4l2.3 2.3M13.3 13.3l2.3 2.3M15.6 8.4l-2.3 2.3M10.7 13.3l-2.3 2.3"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="round"
			/>
		</svg>
	),
	meta: () => (
		<svg viewBox="0 0 24 24" width="26" height="26" fill="none">
			<circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
		</svg>
	),
	grok: () => (
		<svg viewBox="0 0 24 24" width="24" height="24" fill="none">
			<circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
			<path d="M6.5 17.5 17.5 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
		</svg>
	),
	github: () => (
		<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
			<path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.53.1.72-.23.72-.5v-1.95c-2.92.64-3.54-1.24-3.54-1.24-.48-1.22-1.17-1.55-1.17-1.55-.96-.66.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.62 2.46 1.15 3.06.88.1-.68.37-1.15.67-1.42-2.33-.27-4.78-1.17-4.78-5.19 0-1.15.4-2.08 1.06-2.82-.1-.27-.46-1.34.1-2.8 0 0 .87-.28 2.85 1.08a9.7 9.7 0 0 1 5.2 0c1.97-1.36 2.84-1.08 2.84-1.08.56 1.46.2 2.53.1 2.8.67.74 1.06 1.67 1.06 2.82 0 4.03-2.45 4.91-4.79 5.18.38.33.72.97.72 1.96v2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5z" />
		</svg>
	),
	tailwind: () => (
		<svg viewBox="0 0 24 24" width="26" height="26" fill="none">
			<g fill="currentColor">
				<path d="M7 9.6c.7-2.8 2.4-4.2 5-4.2 3.9 0 4.4 2.9 6.3 3.4-1.3 0-2.2.5-2.9 1.6-.7 2.8-2.4 4.2-5 4.2-3.9 0-4.4-2.9-6.3-3.4 1.3 0 2.2-.5 2.9-1.6z" />
				<path d="M2 15.2c.7-2.8 2.4-4.2 5-4.2 3.9 0 4.4 2.9 6.3 3.4-1.3 0-2.2.5-2.9 1.6-.7 2.8-2.4 4.2-5 4.2-3.9 0-4.4-2.9-6.3-3.4 1.3 0 2.2-.5 2.9-1.6z" />
			</g>
		</svg>
	),
};

export default ToolIcons;
