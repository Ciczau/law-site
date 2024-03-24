import Header from '../../components/Header';
import * as S from './index.styles';
import ContactSection from '../../containers/ContactSection';
import PropertiesSection from 'containers/PropertiesSection';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const PropertiesPage = () => {
    const [propertyQuery, setPropertyQuery] = useState<number | null>(null);
    const router = useRouter();
    useEffect(() => {
        const property = router?.query.property;
        if (typeof property === 'string') {
            const properties = document.getElementById('properties');
            if (properties) {
                setPropertyQuery(Number(property));
                properties.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [router, setPropertyQuery]);
    return (
        <S.Wrapper>
            <S.Content>
                <PropertiesSection openedProperty={propertyQuery} />
            </S.Content>
            <ContactSection />
        </S.Wrapper>
    );
};

export default PropertiesPage;
