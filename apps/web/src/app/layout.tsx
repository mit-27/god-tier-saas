import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css";
import { Providers } from "@/providers/api-client-provider";
import SessionProvider from "@/providers/SessionProvider";
import { auth } from "@/lib/auth";
import { Toaster } from 'sonner';
import { ThemeProvider } from "@/providers/theme-provider";
import { defaultMetadata, ogMetadata, twitterMetadata } from "./shared-metadata";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  ...defaultMetadata,
  twitter: {
    ...twitterMetadata,
  },
  openGraph: {
    ...ogMetadata,
  },
  icons: {
    shortcut: "/images/gts.png"
  }
};

// export const metadata: Metadata = {
//   metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL || ""),
//   title: {
//     default: "God Tier SaaS",
//     template: "%s | God Tier SaaS",
//   },
//   keywords:["SaaS","god tier saas","godtiersaas","SaaS kit","Next.js","Nest.js","AuthJS","ts-rest","PostHog","PostgreSQL","Drizzle ORM"],
//   description: "Build the next Enterprise application",

//   openGraph: {
//     title: "God Tier SaaS",
//     description: "Build the next Enterprise application",
//     url: process.env.NEXT_PUBLIC_DOMAIN_URL || "https://godtiersaas.live",
//     siteName: "godtiersaas.live",
//     images: [
//       {
//         url: "/images/og-image.png",
//         width: 1200,
//         height: 675,
//       },
//     ],
//   },
//   twitter: {
//     title: "God Tier SaaS",
//     card: "summary_large_image",
//   },
//   icons: {
//     shortcut: "/images/gts.png",
//   },
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" content="notranslate" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans",
          fontSans.variable
        )}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        >
          <SessionProvider session={session}>
            <Providers>
                {children}
            </Providers>
          </SessionProvider>
        </ThemeProvider>
        
        <Toaster richColors/>
      </body>
    </html>
  );
}
