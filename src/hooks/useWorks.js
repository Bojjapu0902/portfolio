import { useEffect, useState } from 'react';

/**
 * Works data is fetched once from /public/data/works.json and cached for the
 * lifetime of the page, so navigating between the listing and a project
 * detail page does not re-request the file.
 */
const WORKS_URL = `${process.env.PUBLIC_URL || ''}/data/works.json`;

let cache = null;

export function fetchWorks() {
	if (!cache) {
		cache = fetch(WORKS_URL)
			.then((res) => {
				if (!res.ok) {
					throw new Error(`Could not load works data (HTTP ${res.status})`);
				}
				return res.json();
			})
			.catch((err) => {
				cache = null; // allow a retry on the next mount
				throw err;
			});
	}
	return cache;
}

export default function useWorks() {
	const [state, setState] = useState({
		works: [],
		filters: [],
		loading: true,
		error: null,
	});

	useEffect(() => {
		let active = true;

		fetchWorks()
			.then((data) => {
				if (!active) return;
				setState({
					works: data.works || [],
					filters: data.filters || [],
					loading: false,
					error: null,
				});
			})
			.catch((err) => {
				if (!active) return;
				setState({ works: [], filters: [], loading: false, error: err.message });
			});

		return () => {
			active = false;
		};
	}, []);

	return state;
}

/** Look up a single project by its slug. */
export function findWork(works, slug) {
	if (!slug) return works[0] || null;
	return works.find((w) => w.slug === slug) || null;
}

/** Previous / next project for the detail-page pager. */
export function getSiblings(works, slug) {
	const index = works.findIndex((w) => w.slug === slug);
	if (index === -1) return { prev: null, next: null };
	return {
		prev: index > 0 ? works[index - 1] : works[works.length - 1],
		next: index < works.length - 1 ? works[index + 1] : works[0],
	};
}
