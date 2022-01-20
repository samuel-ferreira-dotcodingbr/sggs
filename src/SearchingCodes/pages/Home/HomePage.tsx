// libraries
import React from 'react';

// js
import { Container, HeaderHome } from './homeStyles';

const HomePage: React.FC = () => {
    const Signout = () => {
        window.location.replace('/');
    };

    return (
        <Container>
            <HeaderHome onClick={Signout}>SIGNOUT</HeaderHome>
        </Container>
    );
};

export default HomePage;