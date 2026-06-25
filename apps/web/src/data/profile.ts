import {
	File01Icon,
	Layers01Icon,
	Mail01Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

// Single source of content for the Instagram-style profile.
// Real name/handle/links are baked in; bio, numbers and projects are
// placeholders — edit the strings below.
export const profile = {
	name: "Ronit Sarkar",
	handle: "iamrony777",
	avatar: "/pfp.jpg",
	// each string renders as its own bio line
	bio: ["Fullstack and Beyond", "Typescript · Python", "Mini IT Department"],
	link: { label: "ronit.is-a.dev", href: "https://ronit.is-a.dev" },
	github: "https://github.com/iamrony777",
	email: "iamrony777@pm.me",
	// extra links surfaced in the "more" dropdown beside the action buttons
	links: [
		{ label: "GitHub", href: "https://github.com/iamrony777" },
		{ label: "Website", href: "https://ronit.is-a.dev" },
	],
} as const;

export type Highlight = {
	label: string;
	icon: IconSvgElement;
	href: string;
	disabled?: boolean;
};

// Story-highlight circles. Placeholder hrefs ("#") until those pages exist.
export const highlights: Highlight[] = [
	{ label: "Stack", icon: Layers01Icon, href: "#" },
	{ label: "Resume", icon: File01Icon, href: "#", disabled: true }, // no resume yet
	{ label: "Contact", icon: Mail01Icon, href: "mailto:iamrony777@pm.me" },
];

export type Project = {
	title: string;
	blurb: string;
	href: string;
	// optional thumbnail; falls back to a gradient tile when omitted
	image?: string;
	// optional client country (ISO 3166-1 alpha-2, lowercase, e.g. "il") —
	// renders a flag in the tile's top-right corner. use "global" for a globe icon.
	country?: string;
};

// Real projects. NDA ones have no public link (href "#"); javinfo last
// is the only one with a live link. The grid + "posts" count read this array.
export const projects: Project[] = [
	{
		title: "screenapi",
		blurb: "Scraper for 20+ social and e-commerce sites. (NDA)",
		href: "#",
		country: "in",
	},
	{
		title: "yad2",
		blurb: "Real estate management panel. (NDA)",
		href: "#",
		country: "il",
	},
	{
		title: "contentscore",
		blurb: "AI content analysis and scoring. (NDA)",
		href: "#",
		country: "au",
	},
	{
		title: "report generator",
		blurb: "Internal tool: gather data points, generate client reports. (NDA)",
		href: "#",
		country: "au",
	},
	{
		title: "captcha solver",
		blurb: "TensorFlow captcha solver. (BSc SEM 5 project)",
		href: "#",
		country: "in",
	},
	{
		title: "javinfo",
		blurb: "Movie metadata API and search.",
		href: "https://javinfo.eu.org",
		country: "global",
	},
];
