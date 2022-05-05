let domains = [
  "digital",
  "vinyls",
  "merchandise",
  "booking",
  "ticket"
]

let types = [
  "creator",
  "label",
  "brand",
  "developer",
  "musicGig",
  "studio",
  "soundService",
  "club"
]

let categories = [
  "home",
  "small",
  "medium",
  "big"
]

let suppliers = [
  "merchandise",
  "vinylPressingPlant",
]

let nodes = [
  "phisical",
  "IPFS"
]

let merchandise = [
  "t-shirt",
  "hoodie",
  "hat",
]

let nftAccounts = [
  "track",
  "vinyl",
  "merchandise",
  "code",
  "performance",
  "session",
  "gig",
  "event",
  "venue"
]

let applications = [
  "audiusPlaylist",
  "audiusTagPlaylist",
  "marketplace",
  "artificilaIntelligence",
  "binanceConnection"
]

let nft721types = [      //assets
  "invitation",
  "jpg",
  "mp4",
  "mp3",
  "blog",
  "tweet",
  "post",
  "lyrics",
  "composition",
  "recordings",
  "mastering",
  "3dObjects",
  "Code",
  "booking",
  "ticketing"
]

let nft1155types = [
  "vinylCopies",
  "merchCopies"
]

let nftAccount = [
  "share",
  "loot",
  "proposals",
  "tasks",
  "erc20Factory",
  "erc721Factory",
  "erc1155Factory",
  "wallet",
  "agents"
]

let marketplace = [
  "limitSale",
  "auction",
  "automaticMarketMaker",
  "bondingCurve",
]

let userDashBoard = [
  "wallet",
  "bridger",
  "swap",
  "stake",
  "claim"
]

let v = 'ciao'

let obj = {
  [v]: "baby"
}

let fields = [
  { slug: "name", name: 'Name' },
  { slug: "domain", name: 'Domain' },
  { slug: "type", name: 'Type' },
  { slug: "category", name: 'Category' },
  { slug: "base", name: 'Base' },
  { slug: "users", name: 'Users' },
  { slug: "userMarketCap", name: 'User MarketCap $USD' },
  { slug: "usersMarketCap", name: 'Users MarketCap $USD' },
  { slug: "yearVel", name: 'Yearly Velocity' },
  { slug: "yearTx", name: 'Yearly Transactions $USD' },
  { slug: "txFees", name: 'Tx Fees $USD' },
  { slug: "zionDrop", name: 'Zion Airdop $ZION' },
  { slug: "userDrop", name: 'Aidrop/User $ZION' },
  { slug: "userDropUSD", name: 'Aidrop/User $' },
]

let txFeeRate = 0.2
let numberOfBigClubs = 10
let dropMultiplier = 10
let zionTokenPrice = 0.1

let handleInputChange = (e) => {
}

let handleFormSubmit = (event) => {
  event.preventDefault()
}

let fieldCreator = (field) => {
  return (
    <th
      key={"th" + field.slug}
      className='form-header'
    >
      {field.name}
    </th>
  )
}

let inputCreator = (field) => {
  return (
    <td key={'td' + field.slug}>
      <input
        key={"input" + field.slug}
        id={field.slug}
        type='text'
        name={fields.name}
        onChange={e => handleInputChange(e)}
      />
      <button
        key={"btn" + field.slug}
      ></button>
    </td>
  )
}

let createContent = (user) => {
  let tdCounter = -1
  let content = fields.map(field => {
    tdCounter++
    return (
      <td
        key={user[fields[0].slug].value + user[fields[tdCounter].slug].keyname}
      >
        {user[fields[tdCounter].slug].value}
      </td>
    )
  })

  return (
    <tr key={"tr" + user[fields[0].slug].value}>
      {content}
    </tr>
  )

}

let createUser = (
  _name,
  _domain,
  _type,
  _category,
  _base,
  _userMarketCap,
  _yearVel
) => {
  let _users = _base * numberOfBigClubs
  let _usersMarketCap = _userMarketCap * _users
  let _yearTx = _userMarketCap * _yearVel * _users
  let _txFees = _yearTx * txFeeRate
  let _zionDrop = _txFees * dropMultiplier
  let _dropUser = _zionDrop / _users
  let _dropUserUSD = _dropUser * zionTokenPrice

  let userObj2 = {}
  fields.map(field => {
    userObj2[field.slug] = {
      keyname: field.slug, value: 'dd'
    }
  })

  let userObj = {
    [fields[0].slug]: { keyname: fields[0].slug, value: _name },
    [fields[1].slug]: { keyname: fields[1].slug, value: domains[_domain] },
    [fields[2].slug]: { keyname: fields[2].slug, value: types[_type] },
    [fields[3].slug]: { keyname: fields[3].slug, value: categories[_category] },
    [fields[4].slug]: { keyname: fields[4].slug, value: formatNumber(_base) },
    [fields[5].slug]: { keyname: fields[5].slug, value: formatNumber(_users) },
    [fields[6].slug]: { keyname: fields[6].slug, value: formatNumber(_userMarketCap) },
    [fields[7].slug]: { keyname: fields[7].slug, value: formatNumber(_usersMarketCap) },
    [fields[8].slug]: { keyname: fields[8].slug, value: formatNumber(_yearVel) },
    [fields[9].slug]: { keyname: fields[9].slug, value: formatNumber(_yearTx) },
    [fields[10].slug]: { keyname: fields[10].slug, value: formatNumber(_txFees) },
    [fields[11].slug]: { keyname: fields[11].slug, value: formatNumber(_zionDrop) },
    [fields[12].slug]: { keyname: fields[12].slug, value: formatNumber(_dropUser) },
    [fields[13].slug]: { keyname: fields[13].slug, value: formatNumber(_dropUserUSD) },
  }

  // check if the number of fields is the same as the number of keys in the obj
  let nOfKeys = Object.keys(userObj).length
  if (fields.length !== nOfKeys) { console.error('number of keys is not equal to number of fields') }

  return userObj
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export {
  fields,
  fieldCreator,
  inputCreator,
  createContent,
  createUser,
  handleFormSubmit
}