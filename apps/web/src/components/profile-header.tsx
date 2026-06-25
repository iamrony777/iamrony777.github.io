"use client";

import { ArrowDown01Icon, Link01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@portfolio/ui/components/avatar";
import { Button, buttonVariants } from "@portfolio/ui/components/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@portfolio/ui/components/dropdown-menu";
import { cn } from "@portfolio/ui/lib/utils";

import { highlights, profile } from "@/data/profile";

const stats = [
	{ value: "20+", label: "projects" },
	{ value: "10+", label: "clients" },
	{ value: "3+", label: "years experience" },
];

export function ProfileHeader() {
	// Action buttons live in two spots: desktop handle row (clustered right
	// after the username, IG-style) and a mobile full-width row below the bio.
	// Same markup, responsive widths — flex-1 on mobile, fixed on desktop.
	const actions = (
		<>
			<a
				href={profile.github}
				target="_blank"
				rel="noopener noreferrer"
				className={cn(
					buttonVariants({ variant: "default", size: "lg" }),
					"pointer-coarse:min-h-11 flex-1 rounded-md sm:max-w-40 sm:flex-none sm:px-6",
				)}
			>
				Follow
			</a>
			<a
				href={`mailto:${profile.email}`}
				className={cn(
					buttonVariants({ variant: "outline", size: "lg" }),
					"pointer-coarse:min-h-11 flex-1 rounded-md sm:max-w-40 sm:flex-none sm:px-6",
				)}
			>
				Email
			</a>
			<DropdownMenu>
				<DropdownMenuTrigger
					render={
						<Button
							variant="outline"
							size="icon-lg"
							className="pointer-coarse:size-11"
						/>
					}
				>
					<HugeiconsIcon icon={ArrowDown01Icon} />
					<span className="sr-only">More links</span>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{profile.links.map((l) => (
						<DropdownMenuItem
							key={l.href}
							render={
								<a href={l.href} target="_blank" rel="noopener noreferrer">
									{l.label}
								</a>
							}
						/>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);

	// Name + bio + link block — shared by both breakpoints (desktop: right
	// column under the stats; mobile: full width under the avatar row).
	const nameBio = (
		<div className="flex flex-col gap-0.5">
			<h1 className="font-semibold text-base">{profile.name}</h1>
			{profile.bio.map((line) => (
				<p key={line} className="text-sm leading-snug">
					{line}
				</p>
			))}
			<a
				href={profile.link.href}
				target="_blank"
				rel="noopener noreferrer"
				className="mt-0.5 inline-flex w-fit items-center gap-1 font-medium text-primary text-sm hover:underline"
			>
				<HugeiconsIcon icon={Link01Icon} className="size-3.5" />
				{profile.link.label}
			</a>
		</div>
	);

	return (
		// IG-faithful header. Mobile: avatar+stats row, name/bio, full-width
		// actions, highlights. Desktop: avatar spans left; right column stacks
		// handle+actions → stats → name/bio (Instagram's exact order).
		<section className="grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-4 [grid-template-areas:'avatar_stats''info_info''actions_actions''highlights_highlights'] sm:grid-cols-[1fr_2fr] sm:items-start sm:gap-x-8 sm:[grid-template-areas:'avatar_handle''avatar_stats''avatar_info''highlights_highlights']">
			<Avatar className="size-20 shrink-0 [grid-area:avatar] sm:size-36 sm:self-center sm:justify-self-center">
				<AvatarImage src={profile.avatar} alt={profile.name} />
				<AvatarFallback className="font-medium text-xl">RS</AvatarFallback>
			</Avatar>

			{/* desktop-only handle row: username + clustered action buttons */}
			<div className="hidden items-center gap-5 [grid-area:handle] sm:flex">
				<span className="truncate text-xl">{profile.handle}</span>
				<div className="flex gap-2">{actions}</div>
			</div>

			<dl className="flex justify-around gap-2 text-center [grid-area:stats] sm:justify-start sm:gap-10 sm:text-left">
				{stats.map((s) => (
					<div
						key={s.label}
						className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1"
					>
						<dd className="font-semibold text-base sm:text-lg">{s.value}</dd>
						<dt className="text-muted-foreground text-sm">{s.label}</dt>
					</div>
				))}
			</dl>

			<div className="[grid-area:info]">{nameBio}</div>

			{/* mobile-only actions row (desktop shows them in the handle row) */}
			<div className="flex gap-2 [grid-area:actions] sm:hidden">{actions}</div>

			<ul className="flex gap-4 overflow-x-auto pb-1 [grid-area:highlights] sm:gap-6">
				{highlights.map((h) => (
					<li key={h.label} className="shrink-0">
						<a
							href={h.disabled ? undefined : h.href}
							aria-disabled={h.disabled}
							className={cn(
								"group/hl flex flex-col items-center gap-1.5 text-xs outline-none",
								h.disabled && "pointer-events-none opacity-50",
							)}
						>
							<span className="flex size-16 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-colors hover:bg-accent group-focus-visible/hl:ring-2 group-focus-visible/hl:ring-ring group-focus-visible/hl:ring-offset-2 group-focus-visible/hl:ring-offset-background group-active/hl:bg-accent motion-reduce:transition-none sm:size-20">
								<HugeiconsIcon icon={h.icon} className="size-6" />
							</span>
							{h.label}
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}
