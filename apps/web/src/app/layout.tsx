import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css";
import { Providers } from "@/providers/api-client-provider";
import SessionProvider from "@/providers/SessionProvider";
import { auth } from "@/lib/auth";
import { Toaster } from 'sonner';
import { ThemeProvider } from "@/providers/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
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
