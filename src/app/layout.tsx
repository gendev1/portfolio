import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { BackgroundBeams } from '@/components/ui/background-beams';
import NavBar from '@/components/navbar';
import { ModeToggle } from '@/components/mode-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Generalist Dev',
    description: 'A Generalist Developer, who loves to build things',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <NavBar />
                    {children}
                    <BackgroundBeams />
                    <ModeToggle />
                </ThemeProvider>
            </body>
        </html>
    );
}
