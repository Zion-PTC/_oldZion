import styled from 'styled-components';
import { MIDDARK } from '../../js/colori';
import { LOGOZIONSHA } from '../../js/loghi';
// import { useEffect, useState } from "react"

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 55px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: ${MIDDARK};
  display: grid;
  grid-template-columns: auto 12fr auto;
  grid-template-areas: 'logo nav burger';
  z-index: 2;
  transition: ease 0.5s;
  img {
    grid-area: logo;
    height: inherit;
  }
`;

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  let navbar: HTMLElement | null = document.getElementById('navbar');
  if (navbar)
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = '-55px';
    }
  prevScrollpos = currentScrollPos;
};

export default function Header() {
  // const [open, setOpen] = useState(false)

  // let handleClick = () => {
  //   setOpen(!open)
  // }

  // let handeLinkClick = () => {
  //   setOpen(!open)
  // }

  // useEffect(() => {
  //   if (open) {
  //     document.body.classList.add("stop-scrolling")
  //   } else {
  //     document.body.classList.remove("stop-scrolling")

  //   }
  // }, [open])

  return (
    <Nav id='navbar'>
      <img className='logo' src={LOGOZIONSHA} alt='' />
      {/* <Burger open={open} onClick={handleClick} /> */}
      {/* <RightNav open={open} onClick={handeLinkClick}></RightNav> */}
    </Nav>
  );
}
