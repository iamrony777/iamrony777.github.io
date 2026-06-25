"use client";

import { profile } from "@/data/profile";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
	return (
		<header className="sticky top-0 z-40 border-border border-b bg-background/80 pt-[env(safe-area-inset-top)] backdrop-blur">
			<div className="mx-auto flex w-full max-w-4xl items-center justify-between py-2 pr-[max(1rem,env(safe-area-inset-right))] pl-[max(1rem,env(safe-area-inset-left))]">
				<a
					href={profile.github}
					target="_blank"
					rel="noopener noreferrer"
					className="-mx-2 rounded-md px-2 py-1 font-semibold text-lg tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ring"
				>
					@{profile.handle}
				</a>
				<ModeToggle />
			</div>
		</header>
	);
}
