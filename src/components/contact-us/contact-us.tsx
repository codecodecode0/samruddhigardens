import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardText, CCardImage, CCardTitle, CRow, CCol } from '@coreui/react';

import styled from 'styled-components';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';

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

const StyledCard = styled(CCard)`
border-radius: var(--cui-card-border-radius);
box-shadow: 0 1px 1px 0 rgba(var(--cui-elevation-base-color,60,75,100),.14),0 2px 1px -1px rgba(var(--cui-elevation-base-color,60,75,100),.12),0 1px 3px 0 rgba(var(--cui-elevation-base-color,60,75,100),.2);
background-clip: border-box;
background-color: var(--cui-card-bg);
--cui-card-spacer-y: 1rem;
--cui-card-spacer-x: 1rem;
--cui-card-title-spacer-y: 0.5rem;
--cui-card-border-width: 1px;
--cui-card-border-color: var(--cui-border-color-translucent);
--cui-card-border-radius: 0.375rem;
--cui-card-box-shadow: ;
--cui-card-inner-border-radius: calc(0.375rem - 1px);
--cui-card-cap-padding-y: 0.5rem;
--cui-card-cap-padding-x: 1rem;
--cui-card-cap-bg: rgba(0,0,21,.03);
--cui-card-cap-color: unset;
--cui-card-height: ;
--cui-card-color: unset;
--cui-card-bg: #fff;
--cui-card-img-overlay-padding: 1rem;
--cui-card-group-margin: 0.75rem;
word-wrap: break-word;
margin-bottom: 1rem!important;
`;

const Div = styled.div`
    text-align: center;
    margin-top: 16px;
    margin: auto;
`;

export const ContactUs: React.FunctionComponent = () => {
    return (
        <Container>
            <Header />
            <Div>
            <StyledCard style={{maxWidth: '36rem'}}>
                <div style={{display: 'flex'}}>
                <CCardImage src={require('../../images/lawns.jpg')} style={{ width: '24rem' }} />
                <div style={{marginTop: '160px', textAlign: 'center', verticalAlign: 'middle'}}>
                <CCardBody>
                    <CCardText>Sillod Road, Bhokardan, Dist. Jalna </CCardText>
                    <CCardText><small>TODO: Add Google Map here</small></CCardText>
                </CCardBody>
                </div>
                </div>
      
  </StyledCard>
  </Div>
            <Footer />
        </Container>
    );
}