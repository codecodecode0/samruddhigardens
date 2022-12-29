import React from 'react';
import { DashboardCard } from '../dashboard-card/dashboard-card';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-right: 64px;
    margin-left: 64px;
    margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Dashboard: React.FunctionComponent = () => {
    return (
        <Container>
            <DashboardCard
                text='Experienced photographers to cover your wedding'
                title='Photographers'
                imagePath={require('../../images/photographer.jpg')}
                navPath='/photographers'
            />
            <DashboardCard
                text='Choose from the best decorators for your event'
                title='Decorators'
                imagePath={require('../../images/decorator.jpg')}
                navPath='/decorators'
            />
            <DashboardCard
                text='Select customized set for your stage'
                title='Sets'
                imagePath={require('../../images/sets.jpg')}
                navPath='/sets'
            />
            <DashboardCard
                text='Check out our photos'
                title='Photos'
                imagePath={require('../../images/lawns.jpg')}
                navPath='/photos'
            />
        </Container>
    );
}