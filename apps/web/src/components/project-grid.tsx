import { cn } from "@portfolio/ui/lib/utils";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/profile";

// gradient fallbacks for tiles without an image, cycled by index
const gradients = [
	"from-rose-400 to-orange-300",
	"from-violet-400 to-indigo-300",
	"from-emerald-400 to-teal-300",
	"from-sky-400 to-cyan-300",
	"from-fuchsia-400 to-pink-300",
	"from-amber-400 to-yellow-300",
];

export function ProjectGrid() {
	return (
		<div className="grid grid-cols-3 gap-1 sm:gap-2">
			{projects.map((p, i) => (
				<a
					key={p.title}
					href={p.href}
					target="_blank"
					rel="noopener noreferrer"
					className="group relative aspect-square overflow-hidden bg-muted outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				>
					{p.image ? (
						// biome-ignore lint/performance/noImgElement: static export — next/image optimization is unavailable on GitHub Pages
						<img
							src={p.image}
							alt={p.title}
							loading="lazy"
							className="size-full object-cover transition-transform duration-300 group-hover:scale-105 group-active:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
						/>
					) : (
						<div
							className={cn(
								"size-full bg-gradient-to-br transition-transform duration-300 group-hover:scale-105 group-active:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100",
								gradients[i % gradients.length],
							)}
						/>
					)}

					{/* persistent caption — readable on every device, no hover required */}
					<div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-2 pt-6">
						<span className="flex items-center gap-1 font-medium text-white text-xs drop-shadow-sm sm:text-sm">
							{p.title}
							<ArrowUpRight className="size-3.5 shrink-0 opacity-80" />
						</span>
					</div>

					{/* richer overlay — only on hover-capable pointers */}
					<div className="pointer-events-none absolute inset-0 hidden flex-col items-center justify-center gap-1 bg-black/55 p-3 text-center text-white opacity-0 transition-opacity duration-200 motion-reduce:transition-none [@media(hover:hover)]:flex [@media(hover:hover)]:group-hover:opacity-100">
						<ArrowUpRight className="size-5" />
						<span className="font-medium text-sm">{p.title}</span>
						<span className="line-clamp-2 text-white/85 text-xs">
							{p.blurb}
						</span>
					</div>
				</a>
			))}
		</div>
	);
}
