import CustomHead from 'components/Head/Head';
import Header from 'components/Header';
import { GlobalStyle } from 'containers/LandingPage/index.styles';
import { AppProps } from 'next/app';
import { Lora, Quicksand } from 'next/font/google';
import { useRouter } from 'next/router';

const font = Lora({ weight: '400', subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <div className={font.className}>
            <CustomHead />
            <GlobalStyle />
            <Header path={router.asPath} />
            <Component {...pageProps} key={router.asPath} />
        </div>
    );
}

export default MyApp;
