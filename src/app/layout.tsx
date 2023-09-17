import StyledComponentsRegistry from 'components/StyledComponentsRegistry';
import { Metadata } from 'next';

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
export const metadata: Metadata = {
    title: 'Katarzyna Scheller',
    description: '',
};
