import "@/styles/globals.css";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontBody } from "@/config/fonts";
import Footer from '@/components/Footer';
import Navigation from '../components/Navigation';

export const metadata = {
	title: {
			default: 'Zombies-R-Us | ' + siteConfig.name,
			template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
	metadataBase: new URL("https://blueprintwebdev.com"), 
	openGraph: {
		title: siteConfig.name,
		description: siteConfig.description,
		url: "https://blueprintwebdev.com",
		siteName: 'Blueprint Web Dev',
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
	},
	keywords: [
		"web design Albany GA",
		"website design for bakeries",
		"small business websites",
		"responsive web design",
		"custom websites Albany Georgia",
		"Blueprint Web Dev",
		"Bivens Blueprint",
		"affordable web design Georgia",
		"web development services",
		"professional web design",
		"web agency",
		"Georgia web designers",
	],
};

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth">
      <head />

      <body
        className={clsx(
          "min-h-screen text-foreground",
          fontBody,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative antialiased bg-[url('/bloodvector.png')] bg-cover bg-center bg-fixed">
            <Navigation />

            <main className="">
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
