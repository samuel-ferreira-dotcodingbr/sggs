// libraries
import React, { useEffect, useState } from 'react';

// js
import {
    Container,
    ContainerOver,
    ContainerFirst,
    ContainerSecond,
    TextHard,
    Button,
    TextIzi,
    TextClone,
    InputIzi,
    ButtonIzi,
} from './loginStyles';

const LoginPage: React.FC = () => {
    // useState
    const [idScreen, setIdScreen] = useState('Login');
    const [widthActual, setWidthActual] = useState(window.innerWidth);

    // useEffect
    useEffect(() => {
        const AdjustSize = window.addEventListener('resize', () => {
            setWidthActual(window.innerWidth);
        });

        return AdjustSize;
    }, []);

    // methods
    const GoToRegister = () => {
        setIdScreen('Register');
    };

    const GoToRecoverPassword = () => {
        setIdScreen('RecoverPassword');
    };

    const GoToLogin = () => {
        setIdScreen('Login');
    };

    // renders
    const RenderComponents = () => {
        if (idScreen === 'Login') {
            return (
                <>
                    <ContainerFirst>
                        <TextHard>Welcome Back!</TextHard>
                        <Button onClick={GoToRegister}>Crie sua conta</Button>
                    </ContainerFirst>
                    <ContainerSecond>
                        <TextIzi>Entrar</TextIzi>
                        <InputIzi type="text" placeholder="Email" />
                        <InputIzi type="password" placeholder="Senha" />
                        <TextClone onClick={GoToRecoverPassword}>Esqueci senha</TextClone>
                        <ButtonIzi>Entrar</ButtonIzi>
                        {widthActual <= 600 ? (
                            <Button onClick={GoToRegister}>Crie sua conta</Button>
                        ) : null}
                    </ContainerSecond>
                </>
            );
        }

        if (idScreen === 'Register') {
            return (
                <>
                    <ContainerFirst>
                        <TextHard>Welcome Back!</TextHard>
                        <Button onClick={GoToLogin}>Acesse sua conta</Button>
                    </ContainerFirst>
                    <ContainerSecond>
                        <TextIzi>Crie sua conta</TextIzi>
                        <InputIzi type="text" placeholder="Nome" />
                        <InputIzi type="text" placeholder="Email" />
                        <InputIzi type="password" placeholder="Senha" />
                        <InputIzi type="password" placeholder="Confirma senha" />
                        <ButtonIzi>Cadastra-se</ButtonIzi>
                        {widthActual <= 600 ? (
                            <Button onClick={GoToLogin}>Acesse sua conta</Button>
                        ) : null}
                    </ContainerSecond>
                </>
            );
        }

        if (idScreen === 'RecoverPassword') {
            return (
                <>
                    <ContainerFirst>
                        <TextHard>Welcome Back!</TextHard>
                        <Button onClick={GoToLogin}>Acesse sua conta</Button>
                    </ContainerFirst>
                    <ContainerSecond>
                        <TextIzi>Esqueci a senha</TextIzi>
                        <InputIzi type="text" placeholder="Email" />
                        <ButtonIzi>Recuperar senha</ButtonIzi>
                        {widthActual <= 600 ? (
                            <Button onClick={GoToLogin}>Acesse sua conta</Button>
                        ) : null}
                    </ContainerSecond>
                </>
            );
        }

        return null;
    };

    return (
        <Container>
            <ContainerOver>
                {RenderComponents()}
            </ContainerOver>
        </Container>
    );
};

export default LoginPage;
