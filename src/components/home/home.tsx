import React, { useState, useEffect } from 'react';
import {isMobile} from 'react-device-detect';
import styled from 'styled-components';
import { Body } from '../body/body';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Dashboard } from '../dashboard/dashboard';
import { ContactUs } from '../contact-us/contact-us';
import { Photographers } from '../photographers/photographers';
import { Decorators } from '../decorators/decorators';
import { Sets } from '../sets/sets';
import { Photos } from '../photo-gallery/photo-gallery';

const Container = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 64px;

  font-family: 'Brush Script MT', cursive;;
  color: #00649a;
  maxWidth: 100vw;
`;

type IPage = 'home' | 'photographers' | 'sets' | 'contact' | 'photos' | 'decorators';

export const Home: React.FunctionComponent = () => {
    const [page, setPage] = useState<IPage>('home');

    // Todo: Use switch for below logic

    return (
        <Container>
            <Header setPage={setPage} isMobile={isMobile}/>
            {page === 'home' &&
                <>
                    <Body />
                    <Dashboard setPage={setPage} isMobile={isMobile} />
                </>
            }
            {page === 'contact' &&
                <ContactUs />
            }
            {page === 'photographers' &&
                <Photographers />
            }
            {page === 'decorators' &&
                <Decorators />
            }
            {page === 'sets' &&
                <Sets />
            }
            {page === 'photos' &&
                <Photos />
            }
            <Footer isMobile={isMobile} />
        </Container>
    );
}