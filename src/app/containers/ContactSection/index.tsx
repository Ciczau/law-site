import { useState } from 'react';
import * as S from './index.styles';
import { FaEnvelope, FaMailBulk, FaMailchimp, FaPhone } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const ContactSection = () => {
    const [email, setEmail] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const handleChange = (e, type: string) => {
        if (type === 'email') {
            setEmail(e.target.value);
        } else if (type === 'phone') {
            setPhone(e.target.value);
        } else {
            setText(e.target.value);
        }
    };
    const router = useRouter();
    const handleRedirect = () => {
        router.push('/policy');
    };
    return (
        <S.Wrapper id="contact">
            <div style={{ textAlign: 'center' }}>
                <S.Title>Skontaktuj się</S.Title>
                <S.Form>
                    <S.ContactInput
                        name="email"
                        placeholder="Adres email"
                        onChange={(e) => handleChange(e, 'email')}
                    />
                    <S.ContactInput
                        name="phone"
                        placeholder="Numer telefonu"
                        onChange={(e) => handleChange(e, 'phone')}
                    />
                    <S.ContactTextArea
                        name="text"
                        placeholder="Treść zapytania"
                        rows={4}
                        onChange={(e) => handleChange(e, 'text')}
                    />
                    <S.SubmitButton>Wyślij</S.SubmitButton>
                </S.Form>
            </div>
            <S.Footer>
                <S.ContactMedia>
                    <S.FooterLink href="tel:+48791771777">
                        <S.PhoneIcon size="100%" /> 791771777
                    </S.FooterLink>
                    <S.FooterLink href="mailto:kasia.szeller@outlook.com">
                        <S.MailIcon size="100%" /> kasia.szeller@outlook.com
                    </S.FooterLink>
                </S.ContactMedia>
                <S.Line />
                <S.LawSection>
                    <div onClick={handleRedirect}>Polityka prywatności</div>
                    <div>Copyright 2023</div>
                </S.LawSection>
            </S.Footer>
        </S.Wrapper>
    );
};

export default ContactSection;
