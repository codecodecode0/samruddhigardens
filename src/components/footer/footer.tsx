import React from 'react';
import styled from 'styled-components';

const DivC = styled.div`
    background-image: url(${require('../../images/footer.jpg')});
`;

const FooterDiv = styled.footer`
    margin-right: 64px;
    margin-left: 64px;
    margin-bottom: 16px;
    margin-top: 16px;
    justify-content: center;
    flex-wrap: wrap;
    font-family: Lato, sans-serif;
    word-break: break-word;
    border-top: 1px solid $color-gray-1;

    li {
    padding: 0 10px;
    &:nth-child(5) {
        flex-grow: 1;
    }
    }

    .ico {
    width: 123px;
    height: 40px;
    background-size: cover;
    background-position: 100% 0;
    }
`;

const Ul = styled.div`
    display: flex;
    flex-direction: row;
    color: #00649a;
    vertical-align: middle;
    justify-content: space-between;
`;

const A = styled.a`
    color: #00649a;
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 16px;
`;

export const Footer: React.FunctionComponent<{
    isMobile: boolean
}> = (props) => {
    const { isMobile } = props;
    return (
        <DivC>
        <FooterDiv>
            <Ul>
                <div>
                    <img src={require('../../images/logo5.png')} alt='Cocos' height='64px' />
                </div>
                <Div style={{gap: isMobile ? '8px' : '64px', flexDirection: isMobile ? 'column' : 'row', marginTop: isMobile ? '0' : '28px'}}>
                    <div>
                        <A href='mailto:samruddhi.gardens.bhokardan@gmail.com' className='dark-blue' color='#00649a'>samruddhi.gardens.bhokardan@gmail.com</A>
                    </div>
                    <div>
                    Contact No.: <A href='tel:+91 7507325654' className='dark-blue' color='#00649a'>+91 7507325654</A>
                         
                    </div>
                </Div>
                </Ul>
        </FooterDiv>
        </DivC>
    );
}