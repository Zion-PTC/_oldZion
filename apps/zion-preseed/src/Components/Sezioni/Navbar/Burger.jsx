import React from 'react'
import styled from 'styled-components'
import { BRIGHT, MIDBRIGHT } from '../../../js/colori'
import { breakPoints } from '../../../js/responsiveness';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    top: 2rem;
    display: none;
    margin-right: 10px;
    grid-area: burger;
    place-self: center;
    a {
        color: black;
    }

    @media (max-width: ${breakPoints.tabletPortrait+"px"}) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        background-color: ${BRIGHT};
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? BRIGHT : MIDBRIGHT};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }

    }
`;

const Burger = ({
    open,
    onClick
}) => {
    return (
        <>
        <StyledBurger open={open} onClick={onClick}>
            <div />
            <div />
            <div />
        </StyledBurger>
        </>
    )
}

export default Burger