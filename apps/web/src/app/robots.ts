import type { MetadataRoute } from "next";

// Required for metadata routes under output: "export".
export const dynamic = "force-static";

// Emitted as static /robots.txt by output: "export".
export default function robots(): MetadataRoute.Robots {
	return {
		rules: { userAgent: "*", allow: "/" },
		sitemap: "https://ronit.is-a.dev/sitemap.xml",
	};
}
