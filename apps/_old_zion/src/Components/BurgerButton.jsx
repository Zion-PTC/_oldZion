import { useRef } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

const BurgerButtonArea = styled.div`
  grid-area: ${props=>props.gridArea};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .5s ease-in-out;
  #topBurger {
    transform: translateY(-9px);
  }
  #bottomBurger {
    transform: translateY(9px);
  }
  &[open]{
    #topBurger {
      transform: rotate(45deg);
    }
    #centerBurger {
      background: transparent;
      transform: translateX(151%);
    }
    #bottomBurger {
      transform: rotate(-45deg);
    }
  }
  `

const Burger = styled.div`
  position: absolute;
  width: 50%;
  height: 3px;
  background: #e7e7e7;
  border-radius: 5px;
  transition: all .3s ease-in-out;
`

export default function BurgerButton({gridArea}) {
  const topBurger = useRef()
  const bottomBurger = useRef()
  const burgerButton = useRef()
  useEffect(() => {
    let menuOpen = false
    burgerButton.current.addEventListener('click', () => {
      if (!menuOpen) {
        burgerButton.current.setAttribute('open', '')
        menuOpen = true
      } else {
        burgerButton.current.removeAttribute('open')
        menuOpen = false
      }
    })
  }, [])

  return (
    <BurgerButtonArea
    id='AccountButton'
    gridArea={gridArea}
    ref={burgerButton}
    open={false}
    >
      <Burger id='topBurger' ref={topBurger}></Burger>
      <Burger id='centerBurger'></Burger>
      <Burger id='bottomBurger' ref={bottomBurger}></Burger>
    </BurgerButtonArea>
  )
}
