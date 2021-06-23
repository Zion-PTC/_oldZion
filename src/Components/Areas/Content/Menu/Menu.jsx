import { useEffect, useState } from 'react';
import styled from 'styled-components'
import MenuOkWeb3 from './Content/MenuOkWeb3';

const MENUAREA = styled.div`
  grid-area: menu;
  background: rgb(199, 48, 48);
  `

const MENUTITLE = styled.p`
  `

function Ok(params) {

}

// al posto di playlilst menu qui dovrebbe arrivar eun contenuto che si basa
// sulla selezione fatta dall'utente nel navbar

export default function Menu({ playlistMenu, eth }) {
  var [selectedMenu, setSelectedMenu] = useState([])
  var [menuArea, setMenuArea] = useState()
  var [menuHidden, setMenuHidden] = useState()
  
  
  
  useEffect(() => {
    if (eth === undefined) { setMenuHidden(true) }
    if (eth !== undefined) { setMenuHidden(false) }
  }, [])
  
  const playlistList = playlistMenu.map((list) =>
  <MENUTITLE key={list}>{list}</MENUTITLE>
  );
  
  console.log(menuHidden);

  return (
    <MENUAREA id='menubar'>
      {playlistList}
    </MENUAREA>
  )

}
