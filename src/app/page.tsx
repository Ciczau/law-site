'use client';
import LandingPage from 'containers/LandingPage';
import styled, { createGlobalStyle } from 'styled-components';
import { IBM_Plex_Sans } from 'next/font/google';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }
`;

export default function Page() {
    return (
        <body>
            <main>
                <GlobalStyle />
                <LandingPage />
            </main>
        </body>
    );
}
