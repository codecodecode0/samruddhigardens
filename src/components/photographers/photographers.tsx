import React from 'react';
import { CCardText } from '@coreui/react';

import styled from 'styled-components';
import { ContactCard } from '../contact-card/contact-card';


const Container = styled.div`
  text-align: center;
  margin-right: 64px;
    margin-left: 64px;
    margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;

const photographersList = [
    {
        name: 'Vedant Jadhav',
        contact: '+91 8623059399',
        email: 'email-id@gmail.com',
        imagePath: require('../../images/vedu.png'),
    },
    {
        name: 'Sairaj Jadhav',
        contact: '+91 0000000000',
        email: 'email-id@gmail.com',
        imagePath: require('../../images/sai.png'),
    },
    {
        name: 'Pushkaraj Jadhav',
        contact: '+91 0000000000',
        email: 'email-id@gmail.com',
        imagePath: require('../../images/pushkar.png'),
    }
];

const A = styled.a`
    color: #00649a;
`;

const textBody = (person: any) => (<>
    <CCardText style={{fontSize: '24px', fontFamily: 'monospace', color: 'InfoText'}}></CCardText>
    <CCardText>{person.name}</CCardText>
    <CCardText><small><A href={'tel:'+person.contact}>{person.contact}</A></small></CCardText>
    <CCardText><small><A href={'mailto:'+person.email}>{person.email}</A></small></CCardText>
</>);

export const Photographers: React.FunctionComponent = () => {
    return (
        <Container>
            <div style={{fontSize: '48px', marginBottom: '8px'}}>Photographers</div>
            {photographersList.map(person => 
                <ContactCard 
                    key = {person.name}
                    imagePath={person.imagePath}
                    textBody={textBody(person)}
                />
            )}
        </Container>
    );
}