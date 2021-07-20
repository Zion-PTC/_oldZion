import styled from 'styled-components'
import { handlePlaylist } from '../../../../app/features/navBar/navBar';

const MENUAREA = styled.div`
  grid-area: menu;
  background-color: rgb(199, 48, 48);
  `

const MENUTITLE = styled.p`
  margin: 0;
  background-color: blueviolet;
  p {
    margin: 0;
    color: #f6f6f6;
  }
  :hover {
    background-color: burlywood;
    cursor: pointer;
  }
  .active {
    background-color: #7a1bd2;
  }
  `

export default function Menu({ playlistMenu }) {
  let active = true
  const playlistList = playlistMenu.map((list) =>
    <MENUTITLE
      onClick={() => handlePlaylist(list)}
      id={list}
      active={active}
      key={list}
    >
      <p>
        {list}
      </p>
    </MENUTITLE>
  );

  return (
    <MENUAREA id='menubar'>
      {playlistList}
    </MENUAREA>
  )
}
