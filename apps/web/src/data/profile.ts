import type { LucideIcon } from "lucide-react";
import { FileText, Layers, Mail, PenLine } from "lucide-react";

// Single source of content for the Instagram-style profile.
// Real name/handle/links are baked in; bio, numbers and projects are
// placeholders — edit the strings below.
export const profile = {
	name: "Ronit Sarkar",
	handle: "iamrony777",
	avatar: "/pfp.jpg",
	// each string renders as its own bio line
	bio: [
		"Backend & infra — TypeScript · Python · Rust", // ponytail: placeholder, edit me
		"Building small useful things on the internet",
	],
	link: { label: "ronit.is-a.dev", href: "https://ronit.is-a.dev" },
	// static counts (no server); "posts" is derived from projects.length
	followers: "1.2k", // ponytail: placeholder, edit me
	following: "180", // ponytail: placeholder, edit me
	github: "https://github.com/iamrony777",
	email: "iamrony777@pm.me",
	// extra links surfaced in the "more" dropdown beside the action buttons
	links: [
		{ label: "GitHub", href: "https://github.com/iamrony777" },
		{ label: "Website", href: "https://ronit.is-a.dev" },
	],
} as const;

export type Highlight = { label: string; icon: LucideIcon; href: string };

// Story-highlight circles. Placeholder hrefs ("#") until those pages exist.
export const highlights: Highlight[] = [
	{ label: "Stack", icon: Layers, href: "#" },
	{ label: "Resume", icon: FileText, href: "/resume.pdf" },
	{ label: "Blog", icon: PenLine, href: "#" },
	{ label: "Contact", icon: Mail, href: "mailto:iamrony777@pm.me" },
];

export type Project = {
	title: string;
	blurb: string;
	href: string;
	// optional thumbnail; falls back to a gradient tile when omitted
	image?: string;
};

// 6 placeholder projects (one real). Edit freely — the grid + "posts"
// count both read from this array.
export const projects: Project[] = [
	{
		title: "javinfo",
		blurb: "Movie metadata API and search.",
		href: "https://javinfo.eu.org",
	},
	{
		title: "project-two",
		blurb: "Placeholder — swap with a real project.",
		href: "https://github.com/iamrony777",
	},
	{
		title: "project-three",
		blurb: "Placeholder — swap with a real project.",
		href: "https://github.com/iamrony777",
	},
	{
		title: "project-four",
		blurb: "Placeholder — swap with a real project.",
		href: "https://github.com/iamrony777",
	},
	{
		title: "project-five",
		blurb: "Placeholder — swap with a real project.",
		href: "https://github.com/iamrony777",
	},
	{
		title: "project-six",
		blurb: "Placeholder — swap with a real project.",
		href: "https://github.com/iamrony777",
	},
];
