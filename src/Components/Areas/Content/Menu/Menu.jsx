import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMenuBarH } from '../../../../features/navBarMenu/navBarMenuSlice';
import styled from 'styled-components'

const MENUAREA = styled.div`
  grid-area: menu;
  background: rgb(199, 48, 48);
  `

const MENUTITLE = styled.p`
  `


// al posto di playlilst menu qui dovrebbe arrivar eun contenuto che si basa
// sulla selezione fatta dall'utente nel navbar

export default function Menu({ playlistMenu, eth }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setMenuBarH())
  })

  const playlistList = playlistMenu.map((list) =>
    <MENUTITLE key={list}>{list}</MENUTITLE>
  );

  return (
    <MENUAREA id='menubar'>
      {playlistList}
    </MENUAREA>
  )
}
