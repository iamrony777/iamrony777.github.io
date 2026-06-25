import type { MetadataRoute } from "next";

// Required for metadata routes under output: "export".
export const dynamic = "force-static";

// Emitted as static /sitemap.xml by output: "export".
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://ronit.is-a.dev/",
			changeFrequency: "monthly",
			priority: 1,
		},
	];
}
