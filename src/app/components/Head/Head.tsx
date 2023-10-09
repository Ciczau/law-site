import Head from 'next/head';

const CustomHead = () => {
    return (
        <Head>
            <title>Scheller Law</title>
            <meta
                name="description"
                content="Katarzyna Szeller, prawo, nieruchomości, Zduńska Wola, Łask, Sieradz."
            />
            <meta name="robots" content="all" />
            <link rel="icon" href="favicon.ico" sizes="any" />
        </Head>
    );
};
export default CustomHead;
