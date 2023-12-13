import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Pizza swift',
    description: 'Generated by create next app',
};

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;
export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {' '}
                {children}
                <Toaster />
            </body>
        </html>
    );
}