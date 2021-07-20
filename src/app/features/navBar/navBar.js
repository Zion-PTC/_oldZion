import { store } from '../../store';
import $ from 'jquery'
import { setActiveSubMenu } from '../../../features/navBarMenu/navBarMenuSlice';

export function handlePlaylist(menu) {
  console.log('clicked a MenuItem '+ menu);
  store.dispatch(setActiveSubMenu(menu))
  let selectedMenu = document.getElementById(menu)
  selectedMenu.attributes('className', 'active')
  
  console.log(selectedMenu);
}

export function defineNavBarH(callback) {
  $(defineH)
  function defineH() {
    let menuBar = $('#menubar')
    let menuBarH = menuBar.outerHeight()
    console.log(menuBarH);
    callback(menuBarH)
  }
}