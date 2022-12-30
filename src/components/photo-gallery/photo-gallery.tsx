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

const setsList = [
    {
        name: 'One',
        imagePath: require('../../images/lawns.jpg'),
    },
    {
        name: 'Two',
        imagePath: require('../../images/lawns2.jpg'),
    }
];

export const Photos: React.FunctionComponent = () => {
    return (
        <Container>
            <div style={{fontSize: '48px', marginBottom: '8px'}}>Photos</div>
            {setsList.map(set => 
                <ContactCard 
                    key = {set.name}
                    imagePath={set.imagePath}
                />
            )}
        </Container>
    );
}