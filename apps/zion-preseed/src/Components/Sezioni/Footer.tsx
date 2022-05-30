import React from 'react'
import styled from 'styled-components';
import { DARK,} from "../../js/colori"
import Informations from './Footer/Informations';
import Rights from './Footer/Rights';

const Footerbar = styled.footer`
  width: 100%;
  height: auto;
  bottom: 0;
  background: rgba(229, 229, 229, 0.2);
  border: 1px solid rgba(229, 229, 229, 0.2);
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-rows: auto;

  hr {
    width: 96%;
    border: 1px solid ${DARK};
  }
`
export default function Footer() {
  return (
    <Footerbar>
      <Informations></Informations>
      <hr/>
      <Rights></Rights>
    </Footerbar>
  )
}
