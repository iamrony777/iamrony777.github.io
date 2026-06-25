import "@portfolio/env/web";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typedRoutes: true,
	reactCompiler: true,
	output: "export",
	trailingSlash: true,
};

export default nextConfig;
