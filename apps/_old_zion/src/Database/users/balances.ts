import newData from '../../Database/newDatas.json'

export const database = {
  accounts: [
    {
      name: newData.accounts[0].name,
      logoUrl: newData.accounts[0].logoURL,
      navbarColor: newData.accounts[0].navbarColor,
      nftInviteAddr: newData.accounts[0].nftInviteAddr,
      menus: [
        {name:newData.menus[0].name, subMenus:[
          {name:newData.submenus[0].name, subMenus:[
            newData.navigationPages[0].name,
            newData.navigationPages[1].name
          ]},
          {name:newData.submenus[1].name},
          {name:newData.submenus[2].name},
          {name:newData.submenus[3].name}
        ]},
        {name:newData.menus[1].name},
        {name:newData.menus[2].name},
        {name:newData.menus[3].name}
      ]
    },
    {
      name: newData.accounts[1].name,
      logoUrl: newData.accounts[1].logoURL
    }
  ],
}