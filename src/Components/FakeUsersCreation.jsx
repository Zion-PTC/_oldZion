import { useState } from 'react'
import styled from 'styled-components'
import database from '../Database/newDatas.json'

let getSection2Datas = (_accountId, _database) => {
  let _menusOfAccount = _database.menus.filter(element => element.accountId === _accountId)
  let _subMenusOfAccount = _database.subMenus.filter(element => element.accountId === _accountId)
  let _navPagesOfAccount = _database.navigationPages.filter(element => element.accountId === _accountId)

  let { accounts, ...rest } = _database
  let listOfMenus = Object.keys(rest)

  let section2Datas = _subMenusOfAccount.map(submenu => {
    return {
      menu: _menusOfAccount.filter(element => element.id === submenu.parentMenu).map(menuObj => menuObj.name)[0],
      subMenu: submenu.name,
      navigationPages: _navPagesOfAccount.filter(navpage => navpage.parentSubMenu === submenu.id).map(navepageObj => navepageObj.name)
    }
  });

  let returnOb = {
    headers: listOfMenus,
    datas: section2Datas
  }

  return returnOb
}

let DisplayUsers = () => {

  const UsersArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100vw;
    height: 100%;
    font-size: 70%;
  `

  const UsersList = styled.div`
    height: 100%;
    background-color: #9f9f9f;
    p {
      :hover{
        background-color: #7a7a7a;
        cursor: pointer;
      }
    }
  `

  const UsersDetails = styled.div`
    width: 100%;
    height: 100%;
    background-color: #7a7a7a;
    `

  const Table = styled.table`
    background-color: yellow;
    width: 100%;
    height: auto;
    `

  const TableBody = styled.tbody`
    `

  const Section1Row = styled.tr`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
  `

  const Section1th = styled.th`

  `

  const Section1td = styled.td`
    width: 200px;
    overflow-wrap: break-word;
  `

  const Section2 = styled.table`
    width: 100%;
  `

  const Section2Head = styled.thead`
    width: 100%;
  `

  const Section2HeadRow = styled.tr`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    `

  const Section2Body = styled.tbody`

  `

  const Section2Row = styled.tr`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `

  const Section2Data = styled.td`
    p {
      margin: 0;
    }
  `

  const [selectedAccount, setSelectedAccount] = useState()

  let handleClick = e => {
    console.log(e);
    setSelectedAccount(e)
  }

  let accountsRender = database.accounts.map(account => <p
    key={account.name}
    onClick={() => handleClick(account.id)}
  >
    {account.name}
  </p>)
  let { accounts, ...rest } = database
  let { menus: accountMenus, subMenus, navigationPages } = rest
  let nOfAccounts = accounts.length
  let nOfMenus = accountMenus.length
  let nOfSubMenus = subMenus.length
  let nOfNavigationPages = navigationPages.length
  let navBarMenus = subMenus.filter(element => element.parentMenu === 0)
  let subMenusNames = navBarMenus.map(
    i => {
      let playlistNavigationPages = navigationPages.filter(e => e.parentSubMenu === 0)
      let playlistNavigationPagesNames = playlistNavigationPages.map(i => i.name)
      return {
        name: i.name,
        subMenus: playlistNavigationPagesNames
      }
    }
  )

  // this function should be the response from the "server" on a get Account Query
  let createAccountObj = (i) => {
    let { id: accountId, name: accountName, logoURL, navbarColor, audiusLink, nftInviteAddr } = accounts[i]
    return {
      accountId,
      accountName,
      logoURL,
      navbarColor,
      audiusLink,
      nftInviteAddr,
      menus: [
        {
          name: accountMenus[0].name,
          submenus: subMenusNames
        },
        {
          name: accountMenus[1].name
        }
      ]
    }
  }
  let TNL = createAccountObj(0)
  let { accountId, accountName, logoURL, navbarColor, audiusLink, nftInviteAddr } = TNL
  let keyNames = Object.keys(TNL)
  let section1Datas = [
    { key: keyNames[0], value: accountId },
    { key: keyNames[1], value: accountName },
    { key: keyNames[2], value: logoURL },
    { key: keyNames[3], value: navbarColor },
    { key: keyNames[4], value: audiusLink },
    { key: keyNames[5], value: nftInviteAddr }
  ]

  let section2 = getSection2Datas(selectedAccount, database)

  return (
    <>
      <UsersArea>
        <UsersList id='usersList'>
          {accountsRender}
        </UsersList>
        <UsersDetails id='usersDetails'>
          <Table id='table'>
            <TableBody id='section1'>
              {section1Datas.map((section1Data) => {
                let { key, value } = section1Data;
                return (
                  <Section1Row id={value} key={value}>
                    <Section1th key={value + '/key'}>{key}</Section1th>
                    <Section1td key={value + '/value'}>{value}</Section1td>
                  </Section1Row>)
              })}
            </TableBody>
          </Table>
          <Section2>
            <Section2Head key={'section2Head'}>
              <Section2HeadRow>
                {section2.headers.map(header=><th key={header}>{header}</th>)}
              </Section2HeadRow>
            </Section2Head>
            <Section2Body>
              {section2.datas.map(submenu=>{
                return(
                  <Section2Row key={submenu.subMenu+'.section2'}>
                    <Section2Data key={submenu.menu}>
                      {submenu.menu}
                    </Section2Data>
                    <Section2Data key={submenu.subMenu}>
                      {submenu.subMenu}
                    </Section2Data>
                    <Section2Data key={submenu.subMenu+'navpages'}>
                      {submenu.navigationPages.map(navpage=><p key={navpage}>{navpage}</p>)}
                    </Section2Data>
                  </Section2Row>
                )
              })}
            </Section2Body>
          </Section2>
        </UsersDetails>
      </UsersArea>
    </>
  )
}

let Form = () => {
  const Form = styled.form`
    width: 70%;
    display: grid;
    place-self: center;
    font-size: 80%;
    div {
      display: grid;
      grid-template-columns: 1fr 2fr;
      label {
        place-self: end;
      }
    }
    input {
      font-size: 70%;
    }
  `

  const initialState = {
    id: '',
    name: '',
    logoUrl: '',
    navBarColor: '',
    nftInviteAddress: ''
  }
  const [values, setValues] = useState(initialState)
  const [formObj, setFormObj] = useState()
  let handleChange = e => {
    e.preventDefault()
    let { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    setFormObj(values)
    setValues(initialState)
  }

  let createInput = (prop) => {
    return (
      <div key={prop + '/div'}>
        <label
          type='text'
          key={prop}>
          {prop}
        </label>
        <input
          name={prop}
          value={values[prop]}
          type='input'
          key={prop + '/input'}
          onChange={handleChange} />
      </div>
    )
  }
  let id = createInput('id')
  let name = createInput('name')
  let logoUrl = createInput('logoUrl')
  let navBarColor = createInput('navbarColor')
  let nftInviteAddress = createInput('nftInviteAddress')

  let fields = [
    id, name, logoUrl, navBarColor, nftInviteAddress
  ]
  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {fields}
        <div />
        <input type='submit'></input>
      </Form>
    </>
  )
}

export default function FakeUsersCreation() {
  return (
    <>
      <Form></Form>
      <DisplayUsers></DisplayUsers>
    </>
  )
}
