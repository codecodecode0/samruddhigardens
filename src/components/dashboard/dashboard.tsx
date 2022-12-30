import React from 'react';
import { DashboardCard } from '../dashboard-card/dashboard-card';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-right: 64px;
    margin-left: 64px;
    margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

export const Dashboard: React.FunctionComponent<{
    setPage: any,
    isMobile: boolean
}> = (props) => {
    const { setPage, isMobile } = props
    return (
        <Container style={{flexDirection: isMobile ? 'column' : 'row'}}>
            <DashboardCard
                text='Experienced photographers to cover your wedding'
                title='Photographers'
                imagePath={require('../../images/photographer.jpg')}
                onClick={() => setPage('photographers')}
            />
            <DashboardCard
                text='Choose from the best decorators for your event'
                title='Decorators'
                imagePath={require('../../images/decorator.jpg')}
                onClick={() => setPage('decorators')}
            />
            <DashboardCard
                text='Select customized set for your stage'
                title='Sets'
                imagePath={require('../../images/sets.jpg')}
                onClick={() => setPage('sets')}
            />
            <DashboardCard
                text='Check out our photos'
                title='Photos'
                imagePath={require('../../images/lawns.jpg')}
                onClick={() => setPage('photos')}
            />
        </Container>
    );
}