import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { css } from 'styled-components'
import {  MIDBRIGHT } from '../../js/colori'
import { Button } from '../Elementi/Button'

const button = {
    id: 'scroll-button',
    dynamic: css`
        position: fixed;
        top: 70vh;
        right: 0;
        cursor: pointer;
        color: ${MIDBRIGHT};
        width: auto;
        height: auto;
        background-color: transparent;
        z-index: 3;
    `
}

export default function ScrollButton() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button small {...button}>
            <FontAwesomeIcon
                icon={faAngleDoubleUp}
                onClick={scrollToTop}
                style={{
                    display: visible ? 'inline' : 'none',
                    height: '25px',
                    width: '25px',
                    marginRight:'25px'
                }} />
        </Button>
    )
}
