import { GridViewIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { ProfileHeader } from "@/components/profile-header";
import { ProjectGrid } from "@/components/project-grid";
import { profile } from "@/data/profile";

// Person entity for Google Knowledge Graph + AI engines. Built from profile.ts
// so name/links stay in one place.
const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: profile.name,
	alternateName: profile.handle,
	url: profile.link.href,
	image: new URL(profile.avatar, profile.link.href).href,
	jobTitle: "Fullstack Developer",
	knowsAbout: [
		"TypeScript",
		"Python",
		"Web Scraping",
		"Full-stack Development",
	],
	sameAs: profile.links.map((l) => l.href),
};

export default function Home() {
	return (
		<main className="mx-auto w-full max-w-4xl py-6 pr-[max(1rem,env(safe-area-inset-right))] pb-[max(2rem,env(safe-area-inset-bottom))] pl-[max(1rem,env(safe-area-inset-left))] sm:py-10">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
			/>
			<ProfileHeader />

			<div className="mt-8 flex items-center justify-center border-border border-t">
				<span className="-mt-px flex items-center gap-1.5 border-foreground border-t-2 px-4 py-3 font-medium text-xs uppercase tracking-widest">
					<HugeiconsIcon icon={GridViewIcon} className="size-3.5" />
					Posts
				</span>
			</div>

			<ProjectGrid />
		</main>
	);
}
