import "./globals.css";
import type { Metadata } from "next";
import { primaryFont } from "../utils/fonts";
import { ThemeProvider } from "../components/theme-provider";

export const metadata: Metadata = {
  title: "Synth AI",
  description: "Synth AI is a unified platform that lets you ask any question and instantly receive responses from multiple top-tier AI models like **OpenAI GPT**, **Google Gemini**, **Anthropic Claude**, and others — all in one place.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${primaryFont.className} antialiased`}>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
