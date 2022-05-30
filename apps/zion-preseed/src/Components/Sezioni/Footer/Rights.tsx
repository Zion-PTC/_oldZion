import React from 'react';
import styled from 'styled-components';
import { DARK } from '../../../js/colori';
import SocialIcons from './SocialIcons';

const FooterRights = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: 2fr 4fr auto;
  font-size: 10px;
  color: ${DARK};
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Copyright = styled.div`
  text-align: right;
  align-self: center;
`;

export default function Rights() {
  return (
    <FooterRights>
      <div>Made with ♥</div>
      <Copyright>© 2022 ZION Network</Copyright>
      <div>
        <SocialIcons></SocialIcons>
      </div>
    </FooterRights>
  );
}
