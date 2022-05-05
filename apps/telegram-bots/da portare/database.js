// import { fields } from "./calculations"

// fare accenno all'inteligenza articifiale

// TEAM Members
let team = {
  g: "giacomo",
  ed: "edouard",
  ryan: "ryan",
  aurel: "aurelien",
  talent: "talent"
}

let roles = {  // based on https://www.indeed.com/career-advice/starting-new-job/business-roles
  CEO: "ceo",
  CFO: "cfo",
  Controller: "controller",
  CMO: "cmo",
  CTO: "cto",
  marketingMGMT: "marketingManager",
  productMGMT: "marketingManager",
  projectMGMT: "marketingManager",
  finaceMGMT: "marketingManager",
  humanresourcesMGMT: "marketingManager",
  marketingSpecialist: "marketingSpeacialist",
  businessAnalist: "businessAnalyst",
  humanResourcesPersonell: "humanResourcePersonell",
  accountant: "accountant",
  salesRepresentative: "salesRepresentative",
  customerServiceRepresetative: "customerServiceRepresentative",
  administrativeAssistant: "administrativeAssistant",
  advisor: "advisor",
  ambassador: "ambassador",
}

let devLanguages = {
  javascript: "javaScript",
  solidity: "solidity",
  rust: "rust",
  motoko: "motoko",
  java: "java",
  python: "python",
  cPlus: "c++",
}

let devRoles = {
  projectManager: "projectManager",
  technicalArchitect: "technicalArchitect",
  designer: "designer",
  teamLead: "teamLead",
}

let devPlatform = {
  web: "web",
  iOS: "iOS",
  android: "android"
}

let devDomain = {
  frontEnd: "frontEnd",
  backEnd: "backEnd",
  blockchain: "blockchain",
  fullStack: "fullStack"
}

let devLevels = {
  junior: "junior",
  senior: "seniot"
}

let devFrameworks = {
  react: "react",
  redux: "redux",
  saga: "saga",
  three: "three",
  openLaw: "openLaw",
  IPFS: "IPFS",
  web3: "web3",
  ethers: "ethers"
}

let blockchainTypes = {
  layer1: "layer1",
  layer2: "layer2",
  layer3: "layer3",
  sidechain: "sidechain"
}

let fundingRounds = {
  seed: {
    slug: "seed",
    amount: 250000
  },
  strategic: {
    slug: "strategic",
    amount: 450000
  },
  private: {
    slug: "private",
    amount: 630000
  },
  public: {
    slug: "publicIDO",
    amount: 600000
  }
}

let ambassadors = {
  labels: { tnl: "tnl", psychoquake: "psychoquake", astro: "astrofonik" },
  artists: { gotek: "gotek", alborosie: "alborosie", omi: "omi", busta: "bustaRhymes", snoop: "snoopDogg" },
  studio: { plumStudio: "plumStudio", geeJam: "geeJamStudio" }
}

let recurrecyType = {
  monthly: "monthly",
  yearly: "yearly",
  unaTantum: "unaTantum"
}

let tokenTypes = {
  erc20: {
    slug: "erc20",
    name: "ERC 20",
  },
  erc721: {
    slug: "erc721",
    name: "ERC 721"
  },
  erc1155: {
    slug: "erc115",
    name: "ERC 1155"
  },
  zNFT: {
    slug: "znft",
    name: "zNFT"
  }
}

let districts = {       // only one district per zionTokens
  social: "social",
  admin: "administration",
  copyright: "copyright",
  digitalDistrib: "digital distribution",
  merchandise: "merchandise",
  perf: "concerts,performances,tour",
  tutorials: "courses,classes,services",
  inventory: "inventory",
  equipment: "equipment",
  studio: "studio",
  entertainment: "entertainment",
  education: "education",
  venues: {
    slub: "venues",
    name: "Venues",
    club: { slug: "club", name: "Club" },
    warehouse: { slug: "warehouse", name: "Warehouse" },
    conertHall: { slug: "concertHall", name: "Concert Hall" },
    bar: { slug: "bar", name: "Bar" },
    digitalVenues: {
      slug: "digitalVenues",
      name: "Digital Venues",
      youtube: { slug: "youtube", name: "You Tube" },
      twitch: { slug: "twitch", name: "Twitch" }
    }
  },
  distribChain: "distribution chain",
  supplyChain: {
    slug: "supplyChain",
    name: "Supply Chain",
    textile: { slug: "textile", name: "Textile Supplier" },
    print: { slug: "print", name: "Print Plant" },
    vinyl: { slug: "vinylPressPlant", name: "Vinyl Pressing Plant" },
    courier: { slug: "courier", name: "Courier" }
  },
  promotion: "promotion",
  marketing: "marketing",
  governance: "governance",
  finance: "finance",
}

let fields = {      // actions, a ZION token can have more than one
  // writing: {
  //   slug: "writing",
  //   name: "Writing",
  //   poetry: { slug: "Peotry", name: "Poetry" },
  //   lyrics: { slug: "lyrics", name: "Lyrics" },
  //   composition: { slug: "composition", name: "Composition" },
  //   script: { slug: "script", name: "Script" },
  // },
  // copy: "copyrighting",
  // soundRecording: "sound recording",
  // soundDesign: "sound design",
  // soundPostProd: "sound post-production",
  // soundPerf: "sound performance",
  soundStreaming: "soundStreaming",
  // visualArtsProd: "visual arts",
  // visualArtPerf: "visual arts perfomance",
  management: "management",
  softwareDev: "software development",
  vinylProd: "vinyls production",
  branding: "branding",
  contentGating: "contentGating",
  crowdFunding: "crowd fudning",
  gaming: "gaming",


  soundSystem: "sound system",
  legal: "legal",
  delivery: "delivery",
  fabrication: "fabrication",
  storage: "storage",
  interactivity: "interactvivity",
  tutoring: "tutoring",
  onramping: "on-ramping",
  offramping: "off-ramping",
  referral: "referral"
}

let artisticFields = {

}

// let nftTypes = {
//   profile: "profile",
//   digital: "digital",
//   physical: "physical",
//   service: "service",
//   node: "node",
//   application: "application",
// }

// let domains = {
//   vinyls: {
//     slug: "vinyls",
//     type: nftTypes.physical,
//   },
//   merchandise: {
//     slug: "merchandise",
//     type: nftTypes.physical
//   },
//   booking: {
//     slug: "booking",
//     type: nftTypes.service
//   },
//   ticketing: {
//     slug: "ticketing",
//     type: nftTypes.service
//   },
// }


let actions = {
  create: "create",
  replace: "replace",
  update: "update",
  delete: "delete",
  declare: "declare",

  buy: "buy",
  sell: "sell",
  fractionalize: "fractionalize",

  stake: "stake",
  lend: "lend",
  borrow: "borrow",
  book: "book",

  deliver: "deliver",
}

let zNFTBagdes = {
  user: "user",
  creator: "creator",
  project: "project",
  product: "product",
  launchpad: "launchpad",
  label: "label",
  brand: "brand",
  developer: "developer",
  musicGig: "musicGig",
  studio: "studio",
  soundService: "sound service",
  soundSystem: "sound system",
  club: "club",
  singer: "singer",
  instrmentalist: "instrumentalist",
  soundEngineer: "sound engineer",
  producer: "producer",
  manager: "manager",
  dj: "dj",
  liveAct: "live act",
  livePerformer: "live performer",
  recodingArtist: "recording artist",
  songWriter: "song writer",
  beatMaker: "beat maker",
  author: "author",
  composer: "composer",
  soundDesigner: "sound designer", // meglio fare sound designer, o mettere un campo designer e mettere i vari tipi
  visualArtist: "visual artist",
  _2dDesigner: "2d designer",
  _3dDesigner: "3d designer",
  sofDev: "software developer",
  sofDes: "software designer",
  tutor: "tutor",
  streamer: "streamer",
  preformer: "performer",
  comCourier: "community courier",
  commTextSup: "community textile supplier",
  commPrinSup: "community print supplier",
  commVinylSup: "community vinyl press plant",
  gamer: "gamer",
  activist: "activist",
  recorderMusic: "recorded music",
  textileManif: "textile manifacturer",
  printHouse: "printHouse",
  pressingPlant: "pressingPlant",
  courier: "courier",
  stockNode: "stock node",
  homeNode: "home node",
  clubNode: "club node",
  studioNode: "studio node",
  soundSystemNode: "sound system node",
  fullStackNode: "full stack node",
  promoter: "promoter",
  booking: { bookingAgent: "booking agent", bookingAgenct: "booking agency" },
  tastManager: "task manager",
  serviceProvider: "service provide",
  DAO: "DAO",
  zProducer: "zNFT Producer",
  artist: "artist",
  curator: "curator",
  startup: "start-up"

}

let projectPhasese = {
  startup: "startup",
}

let userCategories = {
  home: "home",
  small: "small",
  medium: "medium",
  big: "big"
}

let fileTypes = {
  jpg: ".jpg",
  gif: ".gif"
}

let nft721types = [      //assets
  "invitation",
  "shares",
  ["2d visual", [
    "jpg",
  ]
  ],
  ["3d visual", [
    "model",
    "character",
    "pfp",
  ]
  ],
  ["animated visual", [
    "gifs",
    ""
  ]
  ],
  "mp4",
  "mp3",
  "blog",
  "tweet",
  "post",
  "composition",
  "lyrics",
  ["sound recordings", [
    "virual instrument",
    "instrument",
    "voice recording",
    "stems recording",
    "master recording",
    "locked content",
  ]
  ],
  ["locked content", [
    "sound recording",
    "project file",
  ]
  ],
  "vinyl mastering",
  "print master",
  "3dObjects",
  "Code",
]

let studioTypes = {
  sound: "sound recording",
  _2d: "2d design",
  _3d: "3d rendering",
}

let soundSystem = {
  light: "light service",
  sound: "sound service",
}


let znftContent = {
  rootNFT: "rootNFT",
  derivedNFTs: "derivedNFTs",
  share: {
    slug: "share",
    name: "Share Token",
    tokenTypes: [tokenTypes.erc20]
  },
  loot: "loot",
  proposal: "proposals",
  task: "tasks",
  erc20Factory: "erc20Factory",
  erc721Factory: "erc721Factory",
  erc1155: "erc1155Factory",
  vault: "vault",
  agents: "agents",
  localisationToken: "localisationToken"
}

// let marketplaceSaleTypes = {
//   limit: "limitSale",
//   auction: "auction",
//   automaticMarketMaker: "automaticMarketMaker",
//   otc: "otc",
//   bondingCurbe: "bondingCurve",
// }

// let userDashBoard = {
//   wallet: "wallet",
//   bridger: "bridger",
//   swap: "swap",
//   stale: "stake",
//   claim: "claim"
// }

// create functions //////////////
let createBlockchain = (slug, name, ticker, languages, type, hasSmartContracts) => {
  return {
    [slug]: {
      slug,
      name,
      ticker,
      languages,
      type: blockchainTypes[type],
      hasSmartContracts
    }
  }
}

let createZionMilestone = (
  slug,
  name,
  description,
  date
) => {
  return {
    [slug]: {
      slug,
      name,
      description,
      date
    }
  }
}

let createTeamDevPosition = (
  slug,
  name,
  roles,
  devDomain,
  languages,
  frameworks,
  blockchains,
  salary
) => {
  return {
    slug,
    name,
    roles,
    devDomain,
    languages,
    frameworks,
    blockchains,
    salary
  }
}

let createDevDedicatedTeam = (
  slug,
  name,
  members) => {
  return {
    slug,
    name,
    members
  }
}

let createZionTarget = (
  slug,
  name,
  description,
  marketVolume,
  recurrency,
  targets
) => {
  return {
    [slug]: {
      slug,
      name,
      description,
      marketVolume,
      recurrency,
      targets
    }
  }
}

let createZionToken = (
  slug,
  district,
  fields,
  types,
  tokenTypes,
  licenseable,
  bookable,
  inBeta,
  app,
  commCreable,
  redeem
) => {
  let token = {
    slug,
    district
  }

  return token

  // return {
  //   [slug]: {
  //     slug: slug,
  //     district,
  //     fields,
  //     types,
  //     tokenTypes,
  //     licenseable: licenseable,
  //     bookable: bookable,
  //     inBeta: inBeta,
  //     requiresApp: app,
  //     communityCreable: commCreable,
  //     redeemable: redeem
  //   }
  // }
}
// blockchain
let bitcoin = createBlockchain(
  "bitcoin",
  "Bitcoin",
  "BTC",
  "",
  "layer1",
  false
)
let ethereum = createBlockchain(
  "ethereum",
  "Ethereum",
  "ETH",
  "Solidity",
  "layer1",
  true
)
let solana = createBlockchain(
  "solana",
  "Solana",
  "SOL",
  "Rust",
  "layer1",
  true
)
let iota = createBlockchain(
  "iota",
  "Iota",
  "IOTA",
  [
    "javascript",
    "rust",
    "python"
  ],
  "layer1",
  true
)
let blockchains = {
  bitcoin, ethereum, solana, iota
}
// developer positions
let productManager = createTeamDevPosition(
  "productManager",
  "Product Manager",
  devRoles.projectManager,
  devDomain.blockchain,
  [
    devLanguages.solidity,
    devLanguages.rust,
    devLanguages.javascript,
    devLanguages.python
  ],
  [
    devFrameworks.IPFS,
    devFrameworks.react,
    devFrameworks.web3,
    devFrameworks.ethers
  ],
  [blockchains.ethereum, blockchains.solana],
  100000
)
let solidityDev1 = createTeamDevPosition(
  "solidtyDev2",
  "Solidity Dev 1",
  devRoles.blockchain,
  devDomain.blockchain,
  [
    devLanguages.javascript,
    devLanguages.solidity
  ],
  [
    devFrameworks.react,
    devFrameworks.redux]
  ,
  blockchains.ethereum, 100000
)
let solidityDev2 = createTeamDevPosition(
  "solidtyDev2",
  "Solidity Dev 2",
  devRoles.blockchain,
  devDomain.blockchain,
  [
    devLanguages.javascript,
    devLanguages.solidity
  ],
  [
    devFrameworks.react,
    devFrameworks.redux
  ],
  blockchains.ethereum, 100000
)
let solidityDev3 = createTeamDevPosition(
  "solidtyDev2",
  "Solidity Dev 3",
  devRoles.blockchain,
  devDomain.blockchain,
  [
    devLanguages.javascript,
    devLanguages.solidity
  ],
  [
    devFrameworks.react,
    devFrameworks.redux
  ],
  blockchains.ethereum,
  100000
)
let IPFSdev1 = createTeamDevPosition(
  "IPFSdev1",
  "IPFS Dev 1",
  devRoles.blockchain,
  devDomain.blockchain,
  [
    devLanguages.javascript,
    devLanguages.solidity
  ],
  [
    devFrameworks.IPFS,
    devFrameworks.react,
    devFrameworks.redux
  ],
  blockchains.ethereum,
  100000
)
let IPFSdev2 = createTeamDevPosition(
  "IPFSdev2",
  "IPFS Dev 2",
  devRoles.blockchain,
  devDomain.blockchain,
  [
    devLanguages.javascript,
    devLanguages.solidity
  ],
  [
    devFrameworks.IPFS,
    devFrameworks.react,
    devFrameworks.redux
  ],
  blockchains.ethereum,
  100000
)
let solanaDev1 = createTeamDevPosition(
  "solanaDev1", "Solana Dev 1",
  devRoles.blockchain,
  devDomain.blockchain,
  [
    devLanguages.javascript,
    devLanguages.rust
  ],
  [
    devFrameworks.react,
    devFrameworks.react,
    devFrameworks.redux
  ],
  blockchains.solana, 100000
)
let solanaDev2 = createTeamDevPosition(
  "solanaDev2",
  "Solana Dev 2",
  devRoles.blockchain,
  devDomain.blockchain,
  [
    devLanguages.javascript,
    devLanguages.rust
  ],
  [
    devFrameworks.react,
    devFrameworks.react,
    devFrameworks.redux
  ],
  blockchains.solana,
  100000
)
let dfinityDev2 = createTeamDevPosition(
  "dfinityDev1",
  "dFinity Dev 2",
  devRoles.blockchain,
  devDomain.blockchain,
  [
    devLanguages.javascript,
    devLanguages.motoko,
    devLanguages.solidity
  ],
  [
    devFrameworks.react,
    devFrameworks.react,
    devFrameworks.redux]
  ,
  blockchains.bitcoin,
  100000
)
let iotaDev2 = createTeamDevPosition(
  "iotaDev1",
  "IOTA Dev 2",
  devRoles.blockchain,
  devDomain.blockchain,
  [
    devLanguages.javascript,
    devLanguages.motoko,
    devLanguages.solidity
  ],
  [
    devFrameworks.react,
    devFrameworks.react,
    devFrameworks.redux
  ],
  blockchains.bitcoin,
  100000
)
let frontDev1 = createTeamDevPosition(
  "frontDev1",
  "Front Dev 2",
  devRoles.teamLead,
  devDomain.frontEnd,
  [
    devLanguages.javascript,
    devLanguages.motoko,
    devLanguages.solidity
  ],
  [
    devFrameworks.react,
    devFrameworks.react,
    devFrameworks.redux
  ],
  blockchains.bitcoin,
  100000
)
// Targets
let _3labels = createZionTarget(
  "3labels",
  "3 Labels",
  "3 Labels are trading on our platform",
  30000,
  recurrecyType.monthly,
  [
    ambassadors.labels.astro,
    ambassadors.labels.tnl,
    ambassadors.labels.psychoquake
  ]
)
let _20labels = createZionTarget(
  "20labels",
  "20 Labels",
  "20 Labels are trading on our platform",
  30000,
  recurrecyType.monthly,
  []
)
let PlumRelease1 = createZionTarget(
  "PlumRelease1",
  "Plum Music First Release",
  "",
  100000,
  recurrecyType.monthly,
  ambassadors.artists.alborosie
)
let PlumRelease2 = createZionTarget(
  "PlumRelease2",
  "Plum Music Second Release",
  "",
  300000,
  recurrecyType.monthly,
  ambassadors.artists.omi
)
let _100Labels = createZionTarget(
  "100labels",
  "100 Labels are trading on our platform",
  "",
  1000000,
  recurrecyType.monthly,
  []
)
let _1stBigStudio = createZionTarget(
  "1stbigStudio",
  "First Big Studio Joins the platform",
  "",
  80000,
  recurrecyType.monthly,
  ambassadors.studio.geeJam
)
let _1stBigCLub = createZionTarget(
  "1stbigClub",
  "First Big Club Joins the platform",
  "",
  300000,
  recurrecyType.monthly,
  []
)
let Zion1stRelease = createZionTarget(
  "ZionFirstRelease",
  "ZION First Release, it is meant to reach a big artist and have him release a product on the platform, part of the income of the selling of the product will be directed to the vault of ZION, funds that will be used to support up'n'coming artists",
  "",
  300000,
  recurrecyType.monthly,
  ambassadors.artists.busta
)
let Zion2ndRelease = createZionTarget(
  "ZionSecondRelease",
  "ZION First Release, it is meant to reach a big artist and have him release a product on the platform, part of the income of the selling of the product will be directed to the vault of ZION, funds that will be used to support up'n'coming artists",
  "",
  300000,
  recurrecyType.monthly,
  ambassadors.artists.snoop
)
let _1MoreBigCLub = createZionTarget(
  "1MorebigClub",
  "1 Big Club More Joins the platform",
  "",
  300000,
  recurrecyType.monthly,
  []
)
let _2MoreBigCLub = createZionTarget(
  "2MorebigClub",
  "2 Big Club More Joins the platform",
  "",
  200000,
  recurrecyType.monthly,
  []
)
let festival = createZionTarget(
  "festival",
  "Festival Using our Payment System",
  "", 5000000,
  recurrecyType.monthly,
  []
)
let bigHit = createZionTarget(
  "bigHit",
  "A song released on ZION goes to the stars",
  "",
  5000000,
  recurrecyType.monthly,
  []
)
let relProto = createZionMilestone(
  "relProto",
  "Release Prototype",
  "",
  ""
)
// Milestones
let relProtoTestNet = createZionMilestone(
  "relProtoTestNet",
  "Release Prototype on Testnet",
  "",
  ""
)
let relPrivBeta = createZionMilestone(
  "relPrivBeta",
  "Release Private Beta",
  "",
  ""
)
let relPubBeta = createZionMilestone(
  "relPubBeta",
  "Release Public Beta",
  "",
  ""
)
let relEth2 = createZionMilestone(
  "relEth2",
  "Release Eth 2",
  "",
  ""
)
let relAlpha = createZionMilestone(
  "relAlpha",
  "Release Alpha v1.0",
  "",
  ""
)
let _1stDeliveryToNode = createZionMilestone(
  "1stdelivery2nodes",
  "First delivery to Stock Nodes",
  "The first release is delivered to Nodes",
  ""
)
// NFTs
// profiles
let user = createZionToken(
  "user",
  districts.social,
  [""],
  nftTypes.profile,
  [
    tokenTypes.erc721,
    tokenTypes.zNFT
  ],
  true, false, true, false
)
let creator = createZionToken(
  "creator",
  districts.social,
  [""],
  nftTypes.profile,
  [
    tokenTypes.erc721,
    tokenTypes.zNFT
  ],
  true, false, true, false
)
let project = createZionToken(
  "project",
  districts.social,
  [""],
  nftTypes.profile,
  [
    tokenTypes.erc721,
    tokenTypes.zNFT
  ],
  true, false, true, false
)
// promotion
let invitation = createZionToken(
  "invitation",
  districts.promotion,
  fields.referral,
  nftTypes.digital,
  tokenTypes.erc721,
  false, false, false, false
)
let shareVoucher = createZionToken(
  "shareVoucher",
  districts.promotion,
  [""],
  nftTypes.digital,
  tokenTypes.erc721,
  false, false, false, false
)
// copyright
let composition = createZionToken(
  "composition",
  districts.copyright,
  [""],
  [
    nftTypes.digital,
    nftTypes.service
  ],
  [
    tokenTypes.erc721,
    tokenTypes.zNFT
  ],
  true, true, true, false
)
let lyrics = createZionToken(
  "lyrics",
  districts.copyright,
  [""],
  [
    nftTypes.digital,
    nftTypes.service
  ],
  [
    tokenTypes.erc721,
    tokenTypes.zNFT
  ],
  true, true, false, false
)
let sample = createZionToken(
  "sound",
  districts.copyright,
  [fields.soundRecording],
  [
    nftTypes.digital,
    nftTypes.service
  ],
  [
    tokenTypes.erc721,
    tokenTypes.zNFT
  ],
  true, true, false, false
)
let vstPreset = createZionToken(
  "vstPreset",
  districts.copyright,
  fields.soundDesign,
  [
    nftTypes.digital,
    nftTypes.service
  ],
  [
    tokenTypes.erc721,
    tokenTypes.zNFT
  ],
  true, true, false, false
)
let virtualInstrumentRecording = createZionToken(
  "virtualInstrumentRecording",
  districts.copyright,
  fields.soundRecording,
  [
    nftTypes.digital,
    nftTypes.service
  ],
  [
    tokenTypes.erc721,
    tokenTypes.zNFT
  ],
  true, true, false, false
)
let instrumentRecording = createZionToken(
  "instrumentRecording",
  districts.copyright,
  fields.soundRecording,
  [
    nftTypes.digital,
    nftTypes.service
  ],
  [
    tokenTypes.erc721,
    tokenTypes.zNFT
  ],
  true, true, false, false
)
let voiceRecording = createZionToken(
  "voiceRecording",
  districts.copyright,
  fields.soundRecording,
  [
    nftTypes.digital,
    nftTypes.service
  ],
  [
    tokenTypes.erc721,
    tokenTypes.zNFT
  ],
  true, true, false, false
)
let stemsRecording = createZionToken(
  "stemsRecording",
  districts.copyright,
  fields.soundRecording,
  [
    nftTypes.digital,
    nftTypes.service
  ],
  [
    tokenTypes.erc721,
    tokenTypes.zNFT
  ],
  true, true, true, false
)
let masterRecording = createZionToken(
  "masterRecording",
  districts.copyright,
  fields.soundRecording,
  [nftTypes.digital, nftTypes.service],
  [tokenTypes.erc721, tokenTypes.zNFT],
  true, true, true, false
)
let lockedContent = createZionToken(
  "lockedContent",
  districts.copyright,
  fields.contentGating,
  nftTypes.digital,
  [tokenTypes.erc721, tokenTypes.erc1155],
  true, true, true, false
)
let _2dVisuals = createZionToken(
  "_2dVisuals",
  districts.copyright,
  fields.visualArtsProd,
  nftTypes.digital,
  [tokenTypes.erc721, tokenTypes.erc1155, tokenTypes.zNFT],
  true, true, false, false
)
let _3dVisuals = createZionToken(
  "_3dVisuals",
  districts.copyright,
  fields.visualArtsProd,
  nftTypes.digital,
  [tokenTypes.erc721, tokenTypes.erc1155, tokenTypes.zNFT],
  true, true, false, false
)
let code = createZionToken(
  "code",
  districts.copyright,
  fields.softwareDev,
  nftTypes.digital, [
  tokenTypes.erc721,
  tokenTypes.erc1155,
  tokenTypes.zNFT
],
  true, true, true, false
)
let ticket = createZionToken(
  "ticket",
  districts.copyright,
  fields.contentGating,
  nftTypes.digital,
  tokenTypes.erc1155,
  false, false, true, true
)
// entertainment
let party = createZionToken(
  "party",
  districts.entertainment,
  [fields.soundPerf, fields.visualArtsProd],
  [nftTypes.physical, nftTypes.digital],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, true, true, true
)
// governance
let proposal = createZionToken(
  "proposal",
  districts.governance, [
  fields.branding,
  fields.copy,
  fields.crowdFunding,
  fields.delivery,
  fields.fabrication,
  fields.gaming,
  fields.interactivity,
  fields.legal,
  fields.management,
  fields.offramping,
  fields.onramping,
  fields.softwareDev,
  fields.soundDesign,
  fields.soundPerf,
  fields.soundPostProd,
  fields.soundRecording,
  fields.soundStreaming,
  fields.soundSystem,
  fields.storage,
  fields.tutoring,
  fields.vinylProd,
  fields.visualArtPerf,
  fields.visualArtsProd
],
  nftTypes.digital, [
  tokenTypes.erc721,
  tokenTypes.zNFT
],
  false, false, true, false
)
let task = createZionToken(
  "task",
  districts.governance, [
  fields.branding,
  fields.copy,
  fields.crowdFunding,
  fields.delivery,
  fields.fabrication,
  fields.gaming,
  fields.interactivity,
  fields.legal,
  fields.management,
  fields.offramping,
  fields.onramping,
  fields.softwareDev,
  fields.soundDesign,
  fields.soundPerf,
  fields.soundPostProd,
  fields.soundRecording,
  fields.soundStreaming,
  fields.soundSystem,
  fields.storage,
  fields.tutoring,
  fields.vinylProd,
  fields.visualArtPerf,
  fields.visualArtsProd
],
  nftTypes.digital,
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, false
)
// merchandise
let lacquer = createZionToken(
  "lacquer",
  districts.merchandise,
  fields.vinylProd,
  nftTypes.physical,
  [tokenTypes.erc721, tokenTypes.zNFT],
  true, false, true, true
)
let vinylMother = createZionToken(
  "vinylMother",
  districts.merchandise,
  fields.vinylProd,
  nftTypes.physical,
  [tokenTypes.erc721, tokenTypes.zNFT],
  true, false, true, true
)
let vinylStamper = createZionToken(
  "vinylStamper",
  districts.merchandise,
  fields.vinylProd,
  nftTypes.physical,
  [tokenTypes.erc1155, tokenTypes.zNFT],
  true, false, true, true
)
let printMold = createZionToken(
  "printMold",
  districts.merchandise,
  fields.branding,
  nftTypes.physical,
  [tokenTypes.erc721, tokenTypes.zNFT],
  true, false, true, true
)
let vinylCopy = createZionToken(
  "vinylCopy",
  districts.merchandise,
  fields.vinylProd,
  nftTypes.physical,
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, false, true, true
)
let tShirt = createZionToken(
  "tShirt",
  districts.merchandise,
  fields.branding,
  nftTypes.physical,
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, false, true, true
)
let hoodie = createZionToken(
  "hoodie",
  districts.merchandise,
  fields.branding,
  nftTypes.physical,
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, false, true, true
)
let stickers = createZionToken(
  "stickers",
  districts.merchandise,
  [fields.branding],
  [nftTypes.physical],
  [tokenTypes.erc1155,
  tokenTypes.zNFT],
  false, false, true, true
)
let hats = createZionToken(
  "hats",
  districts.merchandise,
  [fields.branding],
  [nftTypes.physical],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, false, true, true
)
//equipment
let speaker = createZionToken(
  "speaker",
  districts.equipment,
  fields.soundSystem,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, true, false, true
)
let lights = createZionToken(
  "lights",
  districts.equipment,
  fields.soundSystem,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, true, false, true
)
// studio
let recStudio = createZionToken(
  "recStudio",
  districts.studio,
  [fields.soundRecording],
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, true, false, true
)
let designStudio = createZionToken(
  "designStudio",
  districts.studio,
  fields.visualArtsProd,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, true, false, true
)
let renderingStudio = createZionToken(
  "renderingStudio",
  districts.studio,
  fields.visualArtsProd,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, true, false, true
)
// venues
let club = createZionToken(
  "club",
  districts.venues,
  fields.soundPerf,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, true, false, true
)
let warehouse = createZionToken(
  "warehouse",
  districts.venues,
  fields.soundPerf,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, true, false, true
)
let concertHall = createZionToken(
  "concertHall",
  districts.venues,
  fields.soundPerf,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, true, false, true
)
// performers
let singer = createZionToken(
  "singer",
  districts.perf,
  [fields.soundRecording, fields.soundPerf],
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let instrumentalist = createZionToken(
  "instrumentalist",
  districts.perf,
  [fields.soundRecording, fields.soundPerf],
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let soundEngineer = createZionToken(
  "soundEngineer",
  districts.perf, [
  fields.soundRecording,
  fields.soundPostProd,
  fields.soundDesign,
  fields.soundPerf
],
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let beatMaker = createZionToken(
  "beatMaker",
  districts.perf,
  fields.soundRecording,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let producer = createZionToken(
  "soundEngineer",
  districts.perf, [
  fields.soundRecording,
  fields.soundPostProd,
  fields.soundPerf,
  fields.management
],
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
// admin
let manager = createZionToken(
  "manager",
  districts.admin, [
  fields.soundRecording,
  fields.soundPostProd,
  fields.soundPerf,
  fields.management
],
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let dj = createZionToken(
  "dj",
  districts.admin,
  [fields.soundPerf],
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let liveAct = createZionToken(
  "liveAct",
  districts.admin,
  fields.soundPerf,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
// copyright
let author = createZionToken(
  "author",
  districts.copyright,
  fields.writing,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let composer = createZionToken(
  "composer",
  districts.copyright,
  fields.writing,
  nftTypes.service,
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let _2dDesigner = createZionToken(
  "_2dDesigner",
  districts.copyright,
  fields.visualArtsProd,
  nftTypes.service,
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let _3dDesigner = createZionToken(
  "_3dDesigner",
  districts.copyright,
  [fields.visualArtsProd],
  nftTypes.service,
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let developer = createZionToken(
  "developer",
  districts.copyright,
  fields.softwareDev,
  nftTypes.service,
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let softwareDesigner = createZionToken(
  "softwareDesigner",
  districts.copyright,
  fields.softwareDev,
  nftTypes.service,
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
// tutorials
let tutorials = createZionToken(
  "tutorials",
  districts.education,
  fields.tutoring,
  nftTypes.service,
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
// distribchain
let communityCourier = createZionToken(
  "communityCourier",
  districts.distribChain,
  fields.delivery,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
// supplychain
let communityTextileSupplier = createZionToken(
  "communityTextileSupplier",
  districts.supplyChain,
  fields.fabrication,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let communityPrintSupplier = createZionToken(
  "communityPrintSupplier",
  districts.supplyChain,
  fields.fabrication,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let communityVinylPressPlant = createZionToken(
  "communityVinylPressPlant",
  districts.supplyChain,
  fields.fabrication,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let textileSupplier = createZionToken(
  "textileSupplier",
  districts.supplyChain,
  fields.fabrication,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let printSupplier = createZionToken(
  "printSupplier",
  districts.supplyChain,
  fields.fabrication,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT], false, true, false, true
)
let vinylPress = createZionToken(
  "vinylPress",
  districts.supplyChain,
  [fields.fabrication],
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
let courier = createZionToken(
  "courier",
  districts.supplyChain,
  fields.fabrication,
  [nftTypes.physical, nftTypes.service],
  [tokenTypes.erc1155, tokenTypes.zNFT],
  false, true, false, true
)
// nodes get rewarded by the protocol with platfrom tokens. 
let homeNode = createZionToken(
  "homeNode",
  districts.distribChain,
  [fields.delivery, fields.storage],
  [nftTypes.node, nftTypes.physical],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let stockNode = createZionToken(
  "stockNode",
  districts.distribChain,
  [fields.delivery, fields.storage],
  [nftTypes.node, nftTypes.physical],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let clubNode = createZionToken(
  "clubNode",
  districts.distribChain,
  [fields.delivery, fields.storage],
  [nftTypes.node, nftTypes.physical],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let studioNode = createZionToken(
  "studioNode",
  districts.distribChain,
  [fields.delivery, fields.storage],
  [nftTypes.node, nftTypes.physical],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let fullStackNode = createZionToken(
  "fullStackNode",
  districts.distribChain,
  [fields.delivery, fields.storage],
  [nftTypes.node, nftTypes.physical],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let userDeviceNode = createZionToken(
  "userDeviceNode",
  districts.digitalDistrib,
  [fields.delivery, fields.storage],
  [nftTypes.node, nftTypes.digital],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let privateIPFSNode = createZionToken(
  "privateIPFS",
  districts.digitalDistrib,
  [fields.delivery, fields.storage],
  [nftTypes.node, nftTypes.digital],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let publicIPFSNode = createZionToken(
  "publicIPFSNode",
  districts.digitalDistrib,
  [fields.delivery, fields.storage],
  [nftTypes.node, nftTypes.digital],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let thirdPartyIPFSNode = createZionToken(
  "thirdPartyIPFSNode",
  districts.digitalDistrib,
  [fields.delivery, fields.storage],
  [nftTypes.node, nftTypes.digital],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let coldIPFSStorageNode = createZionToken(
  "coldIPFSStorageNode",
  districts.digitalDistrib,
  [fields.delivery, fields.storage],
  [nftTypes.node, nftTypes.digital],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
// applications needs a stake to be installed, platform charges 100% on network fee which go in developers wallet
let nfcTags = createZionToken(
  "nfcTags",
  districts.distribChain,
  [
    fields.management,
    fields.vinylProd,
    fields.branding,
    fields.soundSystem,
    fields.delivery,
    fields.fabrication,
    fields.storage
  ],
  [nftTypes.application, nftTypes.digital, nftTypes.physical],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let brandable = createZionToken(
  "brandable",
  districts.merchandise,
  fields.branding,
  [nftTypes.application, nftTypes.digital, nftTypes.physical],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let vinyl = createZionToken(
  "vinyl",
  districts.merchandise,
  fields.vinylProd,
  [nftTypes.application, nftTypes.digital, nftTypes.physical],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let digitalDistribution = createZionToken(
  "digitalDistribution",
  districts.digitalDistrib,
  fields.soundStreaming,
  [nftTypes.application, nftTypes.digital],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let fractionalise = createZionToken(
  "fractionalise",
  districts.digitalDistrib,
  fields.soundStreaming,
  [nftTypes.application, nftTypes.digital],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let ticketing = createZionToken(
  "tickecting",
  districts.marketing, [
  fields.soundStreaming,
  fields.contentGating,
  fields.soundPerf
],
  [nftTypes.application, nftTypes.digital],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let booking = createZionToken(
  "booking",
  districts.marketing, [
  fields.writing,
  fields.copy,
  fields.soundRecording,
  fields.soundDesign,
  fields.soundPostProd,
  fields.soundPerf,
  fields.soundStreaming,
  fields.visualArtsProd,
  fields.management,
  fields.softwareDev,
  fields.vinylProd,
  fields.branding,
  fields.soundSystem,
  fields.legal,
  fields.delivery,
  fields.fabrication,
  fields.interactivity
], [
  nftTypes.application,
  nftTypes.digital,
  nftTypes.physical,
  nftTypes.service],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
) // calendar
let taskManagementApp = createZionToken(
  "taskManagementApp",
  districts.admin,
  [
    fields.writing,
    fields.copy,
    fields.soundRecording,
    fields.soundDesign,
    fields.soundPostProd,
    fields.soundPerf,
    fields.soundStreaming,
    fields.visualArtsProd,
    fields.management,
    fields.softwareDev,
    fields.vinylProd,
    fields.branding,
    fields.contentGating,
    fields.soundSystem,
    fields.legal,
    fields.delivery,
    fields.fabrication,
    fields.storage,
    fields.interactivity
  ],
  [
    nftTypes.digital,
    nftTypes.physical,
    nftTypes.service,
    nftTypes.application
  ], [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let governanceApp = createZionToken(
  "governanceApp",
  districts.governance,
  fields.management,
  nftTypes.digital,
  [
    tokenTypes.erc721,
    tokenTypes.zNFT
  ],
  false, false, true, true
)
let audiusApp = createZionToken(
  "audiusApp",
  districts.digitalDistrib,
  fields.soundStreaming,
  nftTypes.digital,
  [
    tokenTypes.erc721,
    tokenTypes.zNFT
  ],
  false, false, true, true
)
// quests app lets users install an app and create quests for their communities
let questsApp = createZionToken(
  nftTypes.digital,
  [
    tokenTypes.erc721,
    tokenTypes.zNFT,
    nftTypes.application
  ],
  false, false, true, true
)
let genArtApp = createZionToken(
  "genApp",
  districts.copyright,
  fields.visualArtsProd,
  [
    nftTypes.digital,
    nftTypes.application
  ],
  [
    tokenTypes.erc721,
    tokenTypes.zNFT
  ],
  false, false, true, true
)
let crowdFundingNodeApp = createZionToken(
  "crowdFundingNodeApp",
  districts.finance,
  fields.crowdFunding,
  [nftTypes.digital, nftTypes.application],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, true, true
)
let binanceConnectApp = createZionToken(
  "binanceConnetApp",
  districts.finance,
  [fields.onramping, fields.offramping],
  [nftTypes.application],
  [tokenTypes.erc721, tokenTypes.zNFT],
  false, false, false, true
)

let zionDevPositionsList = {
  productManager
}

let zionTokens = [
  user,
  creator,
  project,
  invitation,
  shareVoucher,
  composition,
  lyrics,
  sample,
  vstPreset,
  virtualInstrumentRecording,
  instrumentRecording,
  voiceRecording,
  stemsRecording,
  masterRecording,
  lockedContent,
  _2dVisuals,
  _3dVisuals,
  code,
  task,
  proposal,
  lacquer,
  vinylMother,
  vinylStamper,
  vinylCopy,
  printMold,
  tShirt,
  hoodie,
  stickers,
  hats,
  speaker,
  lights,
  recStudio,
  designStudio,
  renderingStudio,
  club,
  warehouse,
  concertHall,
  singer,
  instrumentalist,
  soundEngineer,
  beatMaker,
  producer,
  manager,
  dj,
  liveAct,
  author,
  composer,
  _2dDesigner,
  _3dDesigner,
  developer,
  softwareDesigner,
  tutorials,
  communityCourier,
  communityTextileSupplier,
  communityPrintSupplier,
  communityVinylPressPlant,
  textileSupplier,
  printSupplier,
  vinylPress,
  courier,
  homeNode,
  stockNode,
  clubNode,
  studioNode,
  fullStackNode,
  userDeviceNode,
  privateIPFSNode,
  publicIPFSNode,
  thirdPartyIPFSNode,
  coldIPFSStorageNode,
  nfcTags,
  brandable,
  vinyl,
  digitalDistribution,
  fractionalise,
  ticketing,
  booking,
  taskManagementApp, governanceApp, audiusApp
]

let nuda = zionTokens.forEach(el=>console.log(el.vinyl))

console.log(zionTokens);

export let database = user

export default [
  nftTypes,
  domains,
  zionTokens,
  creator,
  districts,
  nft721types,
  studioTypes,
  soundSystem,
  znftContent,
  marketplaceSaleTypes,
  userDashBoard,
]