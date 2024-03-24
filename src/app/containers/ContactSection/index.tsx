import { useForm } from 'react-hook-form';
import { instance } from 'utils/instance';
import { useState } from 'react';

import * as S from './index.styles';
import axios from 'axios';
import { useRouter } from 'next/router';

const ContactSection = () => {
    const [success, setSuccess] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const router = useRouter();
    const handleRedirect = () => {
        router.push('/policy');
    };

    const sendQuestion = async (data) => {
        try {
            await axios.post('api/question', {
                email: data.email,
                phone: data.phone,
                text: data.text,
            });
            setSuccess(true);
            setTimeout(() => {
                router.reload();
            }, 3000);
        } catch (err) {}
    };
    return (
        <S.Wrapper id="contact">
            {success ? (
                <S.Information>Zapytanie wysłane!</S.Information>
            ) : (
                <S.Form onSubmit={handleSubmit(sendQuestion)}>
                    <S.Title>Skontaktuj się</S.Title>
                    <S.ContactInput
                        placeholder="Adres email"
                        {...register('email', {
                            required: 'Pole wymagane',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Zły adres email',
                            },
                            minLength: {
                                value: 4,
                                message: 'Zły adres email',
                            },
                            maxLength: {
                                value: 50,
                                message: 'Zły adres email',
                            },
                        })}
                    />
                    {errors.email && <div>{(errors.email as any).message}</div>}
                    <S.ContactInput
                        placeholder="Numer telefonu"
                        type="number"
                        {...register('phone', {
                            required: 'Pole wymagane',

                            minLength: {
                                value: 9,
                                message: 'Zły numer telefonu',
                            },
                            maxLength: {
                                value: 9,
                                message: 'Zły numer telefonu',
                            },
                        })}
                    />
                    {errors.phone && <div>{(errors.phone as any).message}</div>}
                    <S.ContactTextArea
                        placeholder="Treść zapytania"
                        rows={4}
                        {...register('text', {
                            required: 'Nie można wysłać pustego zapytania',
                            maxLength: {
                                value: 255,
                                message: 'Zapytanie jest za długie',
                            },
                        })}
                    />
                    {errors.text && <div>{(errors.text as any).message}</div>}

                    <S.SubmitButton type="submit" value="Wyślij" />
                </S.Form>
            )}
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
                <S.AuthorWrapper>
                    <div>Made by</div>
                    <S.AuthorLink
                        href="https://wiktor-michalski.vercel.app"
                        target="_blank"
                    >
                        Ciczau
                    </S.AuthorLink>
                </S.AuthorWrapper>
            </S.Footer>
        </S.Wrapper>
    );
};

export default ContactSection;
