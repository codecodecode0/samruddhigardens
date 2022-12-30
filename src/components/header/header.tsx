import React, { useState, useEffect } from 'react';
import CIcon from '@coreui/icons-react';
import { cilMenu } from '@coreui/icons';
import { isMobile } from 'react-device-detect';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  height: 188px;
`;

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    background: white;
`;

const Nav = styled.div`
    align-items: center;
    text-align: center;
    display: flex;
    a {
        padding: 0 30px;

        &:hover {
        text-decoration: underline;
        }
    }
    margin-top: 16px;
    margin-botton: 16px;
    justify-content: center;
`;

const MobileNav = styled.div`
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    a {
        padding: 0 30px;

        &:hover {
        text-decoration: underline;
        }
    }
    margin-top: 16px;
    margin-botton: 16px;
    justify-content: center;
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    animation: grow 0.6s ease-in, fadeIn 1.6s ease-in-out both;
    height: 188px;
`;

const MobileNavDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const DesktopNavLink = styled.div`
    margin-top: 82px;
    vertical-align: middle;
    color: #00649a;
    text-decoration: none;
    margin-right: 32px;
    margin-left: 32px;
    cursor: pointer;
`;

const MobileNavLink = styled.div`
    margin-top: 8px;
    vertical-align: middle;
    color: #00649a;
    text-decoration: none;
    margin-right: 32px;
    margin-left: 32px;
    cursor: pointer;
`;

const Img = styled.img`
    height: 180px;
    margin-bottom: 16px;
`;

const MobileImg = styled.img`
    height: 120px;
    margin-bottom: 16px;
`;

export interface IHeaderProps {
    setPage: any,
    isMobile: boolean
}

export const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    const { setPage, isMobile } = props;
    const [hide, setHide] = useState(true);

    // const adjustToWindowSize = () => window.innerWidth <= 800 ? setHide(true) : setHide(false);

    // useEffect(() => {
    //     window.addEventListener('resize', adjustToWindowSize);
    //     adjustToWindowSize();
    // });

    const onSetPage = React.useCallback((page: string) => {
        setPage(page);
        setHide(true);
    },[setPage]);

    return (
        <Container>
            <StyledHeader>
                    {isMobile&& 
                    <MobileNav>
                        <div style={{marginLeft: '32px', marginRight: '32px'}} onClick={() => setPage('home')}>
                                <MobileImg src={require('../../images/logo.png')} alt='Samruddhi Gardens' />
                            </div>
                        <MobileNavDiv onClick={() => setHide(!hide)}>
                        <CIcon width={30} icon={cilMenu} size="xl"/>
                        </MobileNavDiv>
                        {!hide && <><MobileNavLink onClick={() => onSetPage('home')}>
                                Home
                            </MobileNavLink>
                            <MobileNavLink onClick={() => onSetPage('photographers')}>
                                Photographers
                            </MobileNavLink>
                            <MobileNavLink onClick={() => onSetPage('decorators')}>
                                Decorators
                            </MobileNavLink>
                            <MobileNavLink onClick={() => onSetPage('photos')}>
                                Photo Gallery
                            </MobileNavLink>
                            <MobileNavLink onClick={() => onSetPage('sets')}>
                                Sets
                            </MobileNavLink>
                            <MobileNavLink onClick={() => onSetPage('contact')}>
                                Contact Us
                            </MobileNavLink>
                            </>
                            }
                    </MobileNav>
                    }
                    {!isMobile &&
                    <Nav>
                        <Div>
                            <DesktopNavLink onClick={() => setPage('home')}>
                                Home
                            </DesktopNavLink>
                            <DesktopNavLink onClick={() => setPage('photographers')}>
                                Photographers
                            </DesktopNavLink>
                            <DesktopNavLink onClick={() => setPage('decorators')}>
                                Decorators
                            </DesktopNavLink>
                            <div style={{marginLeft: '32px', marginRight: '32px'}} onClick={() => setPage('home')}>
                                <Img src={require('../../images/logo.png')} alt='Samruddhi Gardens' />
                            </div>
                            <DesktopNavLink onClick={() => setPage('photos')}>
                                Photo Gallery
                            </DesktopNavLink>
                            <DesktopNavLink onClick={() => setPage('sets')}>
                                Sets
                            </DesktopNavLink>
                            <DesktopNavLink onClick={() => setPage('contact')}>
                                Contact Us
                            </DesktopNavLink>
                        </Div>
                        </Nav>
                    }
                
            </StyledHeader>
        </Container>
    );
}