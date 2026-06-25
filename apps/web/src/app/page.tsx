import { GridViewIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { ProfileHeader } from "@/components/profile-header";
import { ProjectGrid } from "@/components/project-grid";

export default function Home() {
	return (
		<main className="mx-auto w-full max-w-4xl py-6 pr-[max(1rem,env(safe-area-inset-right))] pb-[max(2rem,env(safe-area-inset-bottom))] pl-[max(1rem,env(safe-area-inset-left))] sm:py-10">
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
