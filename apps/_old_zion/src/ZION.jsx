import styled from "styled-components";
import $ from 'jquery'
// CSS
import './App.css'
// COMPONENTS
import Nav from "./Components/Areas/Nav/Nav";
import Container from "./Components/Areas/Container/Container";
import Footer from "./Components/Areas/Footer/Footer";

import appLogic from "./app/appLogic";
$(appLogic())

const ZIONGRID = styled.div`
  display: grid;
  grid-template-rows: 55px calc(100vh - 110px) 55px;
  grid-template-areas: "nav" "container" "footer";
  `

// ========================= APPLICATION
export default function ZION() {
  return (
    <ZIONGRID className='Zion'>
      <Nav/>
      <Container/>
      <Footer/>
    </ZIONGRID>
  )
}

