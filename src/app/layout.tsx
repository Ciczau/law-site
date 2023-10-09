import StyledComponentsRegistry from 'components/StyledComponentsRegistry';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Scheller Law',
    description:
        'Katarzyna Szeller, prawo, nieruchomości, Zduńska Wola, Łask, Sieradz.',
    robots: 'index, follow',
    generator: 'Next.js',
    applicationName: 'Scheller Law',
    keywords: [
        'prawnik',
        'zduńska',
        'wola',
        'nieruchomości',
        'katarzyna',
        'szeller',
        'scheller',
        'łask',
        'sieradz',
        'łódzkie',
        'prawo',
    ],
    authors: { name: 'Ciczau', url: 'https://wiktor-michalski.vercel.app' },
    colorScheme: 'dark',
    creator: 'Katarzyna Szeller',
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
