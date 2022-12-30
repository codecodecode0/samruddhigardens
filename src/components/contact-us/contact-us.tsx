import React, { useState, useEffect } from 'react';
import { CCard, CCardText } from '@coreui/react';

import styled from 'styled-components';
import { ContactCard } from '../contact-card/contact-card';

const A = styled.a`
    color: #00649a;
`;

export const ContactUs: React.FunctionComponent = () => {
    const textBody = (<>
        <CCardText style={{fontSize: '24px', fontFamily: 'monospace', color: 'InfoText'}}>Visit us</CCardText>
        <CCardText>Sillod Road, Bhokardan, Dist. Jalna </CCardText>
        <CCardText><small><A href='tel:+91 7507325654'>+91 7507325654</A></small></CCardText>
        <CCardText><small>TODO: Add Google Map here</small></CCardText>
    </>);
    return (
        <ContactCard textBody={textBody} imagePath={require('../../images/abhi.png')} />
    );
}