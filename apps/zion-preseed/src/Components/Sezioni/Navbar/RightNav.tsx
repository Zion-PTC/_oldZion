import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BRIGHT, DARK, MIDBRIGHT, MIDDARK } from '../../../js/colori';
import { breakPoints } from '../../../js/responsiveness';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${BRIGHT};
`;

const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: nowrap;
  grid-area: nav;
  z-index: 2;
  margin: 0;
  font-size: 14.5px;
  text-shadow: transparent;

  li {
    list-style: none;
    padding: 0 10px;
    display: grid;
    place-items: center;
    text-align: center;
    text-shadow: 1px 1px 2px ${DARK};
    :hover {
      background-color: ${MIDBRIGHT};
      border-radius: 20px;
      border: 1px solid ${BRIGHT};
    }
    :active {
      background-color: ${BRIGHT};
      color: ${BRIGHT};
      border-radius: 20px;
      border: 1px solid ${BRIGHT};
    }
  }

  @media (max-width: ${breakPoints.tabletPortrait + 'px'}) {
    flex-flow: column nowrap;
    background-color: ${MIDDARK};
    position: fixed;
    /* transform: translateX(-100%); */
    /* transform: ${({ open }) =>
      open ? 'translateX(0)' : 'translateX(100%)'}; */
    right: -100%;
    transform: ${({ open }) => (open ? 'translateX(-100%)' : '')};
    top: 55px;
    height: ${window.innerHeight - 55 + 'px'};
    width: 100%;
    transition: transform 0.3s ease-in-out;
    display: grid;
    padding: 0px;
  }
`;

let RightNav = ({ open, onClick }: { open: boolean; onClick: any }) => {
  return (
    <Ul id='right-bar' open={open}>
      <li>
        <StyledLink to='/' onClick={onClick}>
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink to='/membership' onClick={onClick}>
          Membership
        </StyledLink>
      </li>
      <li>
        <StyledLink to='/token_shop' onClick={onClick}>
          Token Shop
        </StyledLink>
      </li>
      <li>
        <StyledLink to='/tutti_gli_elementi' onClick={onClick}>
          Tutti gli Elementi
        </StyledLink>
      </li>
      <li>
        <StyledLink to='/background' onClick={onClick}>
          Background
        </StyledLink>
      </li>
    </Ul>
  );
};

export default RightNav;
