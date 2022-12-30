import React from 'react';
import { useNavigate } from "react-router-dom";
import { CCard, CCardBody, CCardText, CCardImage, CCardTitle } from '@coreui/react';
import styled from 'styled-components';

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
    margin: auto;
`;

export interface ICardProps {
    textBody?: JSX.Element,
    imagePath: any,
    onClick?: () => void,
}

export const ContactCard: React.FunctionComponent<ICardProps> = (props) => {
    return (
        <Div>
        <StyledCard style={{maxWidth: '36rem'}}>
            <div style={{display: 'flex'}}>
            <CCardImage src={props.imagePath} style={{ width: '20rem' }} />
            { props.textBody && (
                <div style={{marginTop: '32px', marginLeft: '8px', marginRight: '8px', textAlign: 'center', verticalAlign: 'middle'}}>
                <CCardBody>
                    {props.textBody}
                </CCardBody>
                </div>)
            }
            </div>
  
</StyledCard>
</Div>
    );
}