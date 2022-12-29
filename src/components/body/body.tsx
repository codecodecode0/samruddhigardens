import React from 'react';
import styled from 'styled-components';

const Video = styled.video`
    text-align: center;
    margin-top: 16px;
    justify-content: center;
`;

const Source = styled.source`
    margin-top: 16px;
`;

export const Body: React.FunctionComponent = () => {

    return (
        <Video autoPlay muted loop id="myVideo">
            <Source src={require('../../images/video.mp4')} type="video/mp4" />
        </Video>
    );
}