import Head from 'next/head';

const CustomHead = () => {
    return (
        <Head>
            <title>Scheller Law</title>
            <meta
                name="description"
                content="Katarzyna Szeller, prawo, nieruchomości, Zduńska Wola, Łask, Sieradz."
            />
            <link rel="icon" href="icon.ico" sizes="any" />
        </Head>
    );
};
export default CustomHead;