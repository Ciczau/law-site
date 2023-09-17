'use client';
import LandingPage from 'containers/LandingPage';
import styled, { createGlobalStyle } from 'styled-components';
import { IBM_Plex_Sans } from 'next/font/google';
import Head from 'next/head';
import { Metadata } from 'next';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        &::-webkit-scrollbar{
            width: 0;
        }
    }
`;

export default function Page() {
    return (
        <div>
            <GlobalStyle />
            <LandingPage />
        </div>
    );
}
