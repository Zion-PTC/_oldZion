import React from 'react';
import styled from 'styled-components';
import { DARK } from '../../../js/colori';
import { LOGOZION } from '../../../js/loghi';
import { media } from '../../../js/responsiveness';
import { links } from '../../Pagine/LandingPageData';

const Infos = styled.div`
  display: grid;
  color: ${DARK};
  grid-template-columns: 1fr;
  ${media.tabletPortrait} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  ul {
    display: grid;
    place-items: center;
    padding: 0px;
    margin: 0px;
    font-family: Epilogue;
    font-style: normal;
    line-height: 34px;
    ${media.tabletPortrait} {
      place-items: start;
    }
    li {
      list-style: none;
      a {
        text-decoration: none;
      }
    }
  }

  img {
    width: 160px;
    height: auto;
    place-self: center;
  }
`;

export default function Informations() {
  let { ul1, ul2 } = links;
  let ul1contents: any[] = [];
  let ul1counter = 0;
  let ul2contents: any[] = [];
  let ul2counter = 0;

  ul1.forEach(obj => {
    let { title, url } = obj;
    let linkUrl;
    let disabled = false;
    if (url) {
      linkUrl = url;
    } else {
      disabled = true;
    }
    ul1counter++;
    ul1contents.push(
      // TODO correggere errore TS
      //@ts-expect-error
      <li disabled={disabled} key={ul1counter}>
        <a href={linkUrl}>{title}</a>
      </li>
    );
  });

  ul2.forEach(link => {
    ul2counter++;
    ul2contents.push(<li key={ul2counter}>{link}</li>);
  });

  return (
    <Infos id='infos'>
      <img className='logo' src={LOGOZION} alt='' />
      <ul>{ul1contents}</ul>
      <ul>{ul2contents}</ul>
    </Infos>
  );
}
