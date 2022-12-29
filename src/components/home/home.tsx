import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Body } from '../body/body';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Dashboard } from '../dashboard/dashboard';

const Container = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 64px;

  font-family: 'Brush Script MT', cursive;;
  color: #00649a;
`;

type IPage = 'home' | 'photographers' | 'sets' | 'contact' | 'photos' | 'decorators';

export const Home: React.FunctionComponent = () => {
    const [page, setPage] = useState<IPage>('home');

    return (
        <Container>
            <Header />
            <Body />
            <Dashboard />
            <Footer />
        </Container>
    );
}