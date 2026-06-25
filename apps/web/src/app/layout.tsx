import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../index.css";
import Header from "@/components/header";
import Providers from "@/components/providers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ronit Sarkar (@iamrony777)",
	description: "Ronit Sarkar — developer portfolio. Projects, stack and links.",
	metadataBase: new URL("https://ronit.is-a.dev"),
	openGraph: {
		title: "Ronit Sarkar (@iamrony777)",
		description: "Developer portfolio of Ronit Sarkar.",
		url: "https://ronit.is-a.dev",
		images: ["/pfp.jpg"],
		type: "profile",
	},
	icons: { icon: "/pfp.jpg" },
};

// viewport-fit:cover lets content extend under notches; safe-area insets
// (applied per-surface) keep it clear of them.
export const viewport: Viewport = {
	viewportFit: "cover",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "oklch(1 0 0)" },
		{ media: "(prefers-color-scheme: dark)", color: "oklch(0.145 0 0)" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers>
					<div className="grid min-h-svh grid-cols-1 grid-rows-[auto_1fr]">
						<Header />
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
