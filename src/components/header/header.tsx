import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    background: white;
`;

const Nav = styled.nav`
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

const Div = styled.div`
    display: flex;
    flex-direction: row;
    animation: grow 0.6s ease-in, fadeIn 1.6s ease-in-out both;
    height: 188px;
`;

const MobileNavDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const DesktopNavLink = styled(NavLink)`
    margin-top: 82px;
    vertical-align: middle;
    color: #00649a;
    text-decoration: none;
`;

const NavBarButton = styled.button`
    border: 0;
    background: transparent;
`;

const IconBar = styled.span`
    display: block;
    width: 22px;
    height: 2px;
    margin-bottom: 4px;
    border-radius: 1px;
    background: #4a4a4a;
`;

const Img = styled.img`
    height: 180px;
    margin-bottom: 16px;
`;

export const Header: React.FunctionComponent = () => {
    const [hide, setHide] = useState(false);

    const adjustToWindowSize = () => window.innerWidth <= 800 ? setHide(true) : setHide(false);

    useEffect(() => {
        window.addEventListener('resize', adjustToWindowSize);
        adjustToWindowSize();
    });

    return (
        <Container>
            <StyledHeader>
                <Nav>
                    {/* <NavLink to='/wed-lawns' className='mobile-nav'>
                        <Img src={require('../../images/logo.png')} alt='SL' />
                    </NavLink> */}
                    {hide && <MobileNavDiv onClick={() => setHide(!hide)}>
                        <NavBarButton>
                            <IconBar>One</IconBar>
                            <IconBar>Two</IconBar>
                            <IconBar>Three</IconBar>
                        </NavBarButton>
                    </MobileNavDiv>}
                    {!hide &&
                        <Div>
                            <DesktopNavLink to='/wed-lawns' >
                                Home
                            </DesktopNavLink>
                            <DesktopNavLink to='/photographers'>
                                Photographers
                            </DesktopNavLink>
                            <DesktopNavLink to='/decorators'>
                                Decorators
                            </DesktopNavLink>
                            <NavLink to='/wed-lawns'>
                                <Img src={require('../../images/logo.png')} alt='Samruddhi Lawns' />
                            </NavLink>
                            <DesktopNavLink to='/photos'>
                                Photo Gallery
                            </DesktopNavLink>
                            <DesktopNavLink to='/sets'>
                                Sets
                            </DesktopNavLink>
                            <DesktopNavLink to='/contact-us'>
                                Contact Us
                            </DesktopNavLink>
                        </Div>
                    }
                </Nav>
            </StyledHeader>
        </Container>
    );
}