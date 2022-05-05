// nft Tech
let db = {
  nftTech: {
    ERC20: "erc20",
    ERC721: "erc721",
    ERC115: "erc1155",
    zNFT: "zNFT"
  },
  nftType: {
    PROFILE: "profile",
    DIGITAL: "digital",
    PHYSICAL: "physical",
    SERVICE: "service",
    NODE: "node",
    APPLICATON: "application"
  },
  district: {
    SOCIAL: "social",
    COPYRIGHT: "copyright",
    ADMIN: "administration",
    DIGITALDISTRIB: "digital distribution",
    MERCHANDISE: "merchandise",
    PERF: "performance",
    TUTORIALS: "tutorials",
    INVENTORY: "inventory",
    EQUIPMENT: "equipment",
    STUDIO: "studio",
    ENTERTAINMENT: "entertainment",
    EDUCATION: "education",
    VENUES: "venues",
    DISTRIBCHAIN: "distribution chain",
    SUPPLYCHAIN: "supply chain",
    PROMOTION: "promotion",
    MARKETING: "marketing",
    GOVERNANCE: "governance",
    FINANCE: "finance"
  },
  category: {
    CONCEPTION: "conception",
    CREATION: "creation",
    PRODUCTION: "production",
    SALE: "sale"
  },
  subCategory: {
    AUDIO: "audio",
    VIDEO: "video",
    VISUAL: "visual"
  },
  fields: {
    WRITING: "writing",
    SONGWRITING: "song writing",
    SOUNDRECORDING: "sound recording",
    SOUNDDESIGN: "sound design",
    SOUNDPOSTPROD: "sound post-prod",
    SOUNDPERF: "sound performance",
    SOUNDSTREAM: "sound streaming",
    VISUALARTDESIGN: "visual art design",
    VISUALARTPERF: "visual art performance",
    MANAGEMENT: "management",
    SOFTWAREDEV: "software development",
    VINYLPROD: "vinyl production",
    BRANDING: "branding",
    TICKETING: "ticketing",
    CONTENTGATING: "content gating",
    CROWDFUNDIN: "crowdfunding",
    GAMIN: "gaming",
    SOUNDSYSTEM: "sound system",
    LEGAL: "legal",
    DELIVERY: "delivery",
    FABRICATION: "fabrication",
    STORAGE: "storage",
    INTERACTVITY: "interactivity",
    TUTORING: "tutoring",
    ONRAMP: "on-ramping",
    OFFRAMP: "off-ramping",
    REFERRAL: "referral",
    MUSICPRODUCTION: "music production"
  }
}

let createArrayOfObjWithIndex = (data) => {
  let list = []
  let id = 0
  let creatObj = (name) => {
    id++
    return {
      id, name
    }
  }
  data.map(el => {
    let techObj = creatObj(el)
    return list.push(techObj)
  })
  return list
}

let tokensList = []
let createTokenGroup = (
  [
    nftTech,
    nftType,
    tokenDistrict,
    tokenCategory,
    tokenField
  ], group, code, tokens) => {
  let ID = 0
  // nftTech
  let retrievedNftTech
  if (nftTech.length === undefined) {
    if (nftTech === 0) { retrievedNftTech = "no nftTech defined" }
    else { retrievedNftTech = nftTechs[nftTech - 1].name }
  } else {
    retrievedNftTech = nftTech.map(el => {
      let retrieved = nftTechs[el - 1].name
      return retrieved
    })
  }
  // nftType
  let retrievedNftType
  if (nftType.length === undefined) {
    if (nftType === 0) { retrievedNftType = "no nftType defined" }
    else { retrievedNftType = nftTypes[nftType - 1].name }
  } else {
    retrievedNftType = nftType.map(el => {
      let retrieved = nftTypes[el - 1].name
      return retrieved
    })
  }
  // tokenDistrict
  let retrievedTokenDistrict
  if (tokenDistrict.length === undefined) {
    if (tokenDistrict === 0) { retrievedTokenDistrict = "no District defined" }
    else { retrievedTokenDistrict = tokenDistricts[tokenDistrict - 1].name }
  } else {
    retrievedTokenDistrict = nftTech.map(el => {
      let retrieved = tokenDistricts[el - 1].name
      return retrieved
    })
  }
  // tokenCategory
  let retrievedTokenCategory
  if (tokenCategory.length === undefined) {
    if (tokenCategory === 0) { retrievedTokenCategory = "no Category defined" }
    else { retrievedTokenCategory = tokenCategories[tokenCategory - 1].name }
  } else {
    retrievedTokenCategory = tokenCategory.map(el => {
      let retrieved = tokenCategories[el - 1].name
      return retrieved
    })
  }
  // tokenField
  let retrievedTokenField
  if (tokenField.length === undefined) {
    if (tokenField === 0) { retrievedTokenField = "no Field defined" }
    else { retrievedTokenField = tokenFields[tokenField - 1].name }
  } else {
    retrievedTokenField = tokenField.map(el => {
      let retrieved = tokenFields[el - 1].name
      return retrieved
    })
  }
  let createTokenObj = (name) => {
    return {
      id: code + ID,
      name,
      district: retrievedTokenDistrict,
      nftTech: retrievedNftTech,
      nftType: retrievedNftType,
      category: retrievedTokenCategory,
      field: retrievedTokenField,
      group
    }
  }
  tokens.forEach(token => {
    ID++
    let tokenObj = createTokenObj(token)
    tokensList.push(tokenObj)
  })
  return tokensList
}

let nftTechs = createArrayOfObjWithIndex([
  db.nftTech.ERC20, db.nftTech.ERC721, db.nftTech.ERC115, db.nftTech.zNFT
])

let nftTypes = createArrayOfObjWithIndex([
  db.nftType.PROFILE, db.nftType.DIGITAL, db.nftType.PHYSICAL, db.nftType.SERVICE, db.nftType.NODE, db.nftType.APPLICATON
])

let tokenDistricts = createArrayOfObjWithIndex([
  db.district.SOCIAL, db.district.COPYRIGHT, db.district.ADMIN, db.district.DIGITALDISTRIB, db.district.MERCHANDISE,
  db.district.PERF, db.district.TUTORIALS, db.district.INVENTORY, db.district.EQUIPMENT, db.district.ENTERTAINMENT,
  db.district.STUDIO, db.district.EDUCATION, db.district.VENUES, db.district.DISTRIBCHAIN, db.district.SUPPLYCHAIN,
  db.district.PROMOTION, db.district.MARKETING, db.district.GOVERNANCE, db.district.FINANCE
])

let tokenCategories = createArrayOfObjWithIndex([
  db.category.CONCEPTION, db.category.CREATION, db.category.PRODUCTION, db.category.SALE
])

let tokenFields = createArrayOfObjWithIndex([
  db.fields.WRITING, db.fields.SONGWRITING, db.fields.SOUNDRECORDING, db.fields.SOUNDDESIGN,
  db.fields.SOUNDPOSTPROD, db.fields.SOUNDPERF, db.fields.SOUNDSTREAM,
  db.fields.VISUALARTDESIGN, db.fields.VISUALARTPERF, db.fields.MANAGEMENT, db.fields.SOFTWAREDEV,
  db.fields.VINYLPROD, db.fields.BRANDING, db.fields.TICKETING, db.fields.CONTENTGATING, db.fields.CROWDFUNDIN,
  db.fields.GAMIN, db.fields.SOUNDSYSTEM, db.fields.LEGAL, db.fields.DELIVERY, db.fields.FABRICATION,
  db.fields.STORAGE, db.fields.INTERACTVITY, db.fields.TUTORING, db.fields.ONRAMP, db.fields.OFFRAMP,
  db.fields.REFERRAL, db.fields.MUSICPRODUCTION
])
console.log(nftTechs, nftTypes, tokenCategories, tokenDistricts, tokenFields);


let MOLDS = "molds"

let PROF = "PROF"
let INV = "inv"
let VOU = "vou"
let LIT = "lit"
let SW = "SW"
let SR = "SR"
let SD = "SD"
let VIS = "VIS"
let COD = "COD"
let LOCK = "LOCK"
let REL = "REL"
let MOL = "MOL"
let COPY = "COPY"
let EVE = "EVE"
let TIK = "TIK"
let EQP = "EQP"
let STU = "STU"
let VEN = "VEN"
let PERF = "PERF"

// Tokens
let tokens
let USER = "user"
let CREATOR = "creator"
let COMPANY = "copmany"
let PROJECT = "project"
let PRODUCT = "product"
//
let INVITATION = "invitation"
let STANDARD = "standard invitation token"
let LIMITED = "limited number tooken"
let VOUCHER = "voucer"
let SPLITVOUCHER = "share voucher"
//
let LYRICS = "lyrics"
let LITERATURE = "literature"
let POEM = "poem"
let EBOOK = "ebook"
let COMPOSITION = "composition"
let ARRANGEMENT = "arrangement"
let SAMPLE = "sample"
let VSTPRESET = "vstPreset"
let VSTREC = "virtual instrument recording"
let INSTRUMENTREC = "instrument recording"
let VOICERECORDING = "voice recording"
let STEMSRECORDING = "stems recording"
let MASTERRECORDING = "master recording"
let TWODVISUAL = "2D visual art"
let THREEDVISUAL = "3D visual art"
let LOCKEDCONTENT = "locked content"
let MUSICPRODUCT = "music product"
let TRACKRELEASE = "single track release"
let EPRELEASE = "ep track release"
let LPRELEASE = "lp track release"
let CODE = "code"
let ZIONAPP = "zion application"
let TICKET = "ticket"
// enteretainment
let EVENT = "event"
let PARTY = "party"
let CONCERT = "concert"
// governance
let PROPOSAL = "proposal"
let TASK = "task"
// merchandise
let LACQUER = "lacquer"
let VINYLMOLD = "vinyl mold"
let VINYLSTAMPER = "vinyl stamper"
let PRINTMOLD = "print mold"
let VINYLLABELPRINTMOLD = "vinyl label print mold"
let VINYLCOVERMOLD = "vinyl cover mold"
let COPIES = "copies"
let VINYLCOPY = "vinyl copy"
let VINYLLABELCOPY = "vinyl label copy"
let INNERSLEEVE = "innersleeve"
let VINYLCOVER = "vinyl cover"
let TSHIRT = "t-shirt"
let HOODIE = "hoodie"
let STICKERS = "stickers"
let HATS = "hats"
// equipment
let EQUIPMENT = "equipment"
let SOUNDEQUIP = "speaker equipment"
let LIGHTEQUIP = "lights equipment"
let STUDIOEQUIP = "studio equipment"
let CLUBEQUIP = "club equipment"
// studio
let STUDIO = "studio"
let RECSTUDIO = "recording studio"
let DESIGNSTUDIO = "design studio"
let RENDERINGSTUDIO = "rendering studio"
// venues
let VENUES = "venues"
let CLUB = "club"
let WAREHOUSE = "warehouse"
let CONCERTHALL = "concert hall"
// performers
let PERFORMERS = "performers"
let SINGER = "singer"
let INSTRUMENTALIST = "instrumentalist"
let SOUNDENGINEER = "sound engineer"
let BEATMAKER = "beatmaker"
let PRODUCER = "producer"
//admin
let MANAGER = "manager"
let DJ = "dj"
let LIVEACT = "liveact"
// copyright
let AUTHOR = "author"
let COMPOSER = "composer"
let TWODDESIGNER = "2D designer"
let THREEDDESIGNER = "3D designer"
let DEVELOPER = "developer"
let SOFTWAREDESIGNER = "software designer"
// tutorials
let AUDIOCLASS = "audio related courses"
// distribution chain
let COMMUNITYCOURIER = "community courier"
let COURIER = "courier"
// supply chain
let COMMUNITYTEXTILESUPPLIER = "community textile supplier"
let COMMUNITYPRINTSUPPLIER = "community print supplier"
let COMMUNITYVINYLPRESS = "community vinyl press"
let PRINTSUPPLIER = "print supplier"
let VINYLPRESS = "vinyl press"
// nodes get rewarded in platform tokens
let HOMENODE = "home node"
let STOCKNODE = "stock node"
let FULLSTACKNODE = "full stack node"
let USERDEVICE = "user device"
let PRIVATEIPFSNODE = "private IPFS node"
let PUBLICIPFSNODE = "public IPFS node"
let THIRDPARTYIPFSNODE = "third party IPFS node"
let COLDIPFSSTORAGE = "cold IPFS storage"
// applications
let NFCTAGSAPP = "nfc tagging applications"
let BRANDABLEAPP = "brandable items applications"
let VINYLAPP = "vinyl prod applications"
let DIGITALDISTRIBAPP = "digital distribution applications"
let FRACTIONALIZEAPP = "fractionalise applications"
let TICKETINGAPP = "ticketing applications"
let BOOKINGAPP = "booking applications"
let TASKMGMTAPP = "task management applications"
let GOVERNANCEAPP = "governance applications"
let AUDIUSAPP = "audius applications"
let QUESTSAPP = "quests applications"
let CROWDFUNDINAPP = "crowdfundin applications"
let BINANCECONNETAPP = "binance connection application"


// [nftTech, nftType, tokenDistrict, tokenCategory, tokenField], group, code, [tokens]

let profileTokens = [createTokenGroup([[2, 4], 1, 1, 0, 0],
  db.nftType.PROFILE, PROF, [
  USER, CREATOR, PROJECT, PRODUCT, COMPANY
]), {
  json: {
    firstName: "",
    lastName: "",
    addresse: "",
    ID: "",
    birtdate: "",
    country: "",
    pfp: "",
    profileBackground: ""
  }
}, {
  specificDataFields: {
    company: {
      VATn: "",
      statut: ""
    },
    project: {
      expirationDate: ""
    }
  }
}]

let invitationTokens = [createTokenGroup([2, 2, 16, 2, 27],
  INVITATION, INV, [
  STANDARD, LIMITED
]), {
  json: {
    title: "",
    image: ""
  },
}]

let voucherTokens = [createTokenGroup([2, 2, 17, 2, 15],
  VOUCHER, VOU, [
  SPLITVOUCHER
]), {
  json: {
    title: "",
    assetList: "",
    image: ""
  }
}]

let literatureTokens = [createTokenGroup([[2, 4], [2, 4], 2, 3, 1],
  LITERATURE, LIT, [
  POEM, EBOOK
]), {
  json: {
    title: "",
    year: "",
    file: ""
  }
}]

let songwritingTokens = [createTokenGroup([[2, 4], [2, 4], 2, 2, 2],
  db.fields.SONGWRITING, SW, [
  LYRICS, COMPOSITION, ARRANGEMENT
]), {
  json: {
    date: "",
    file: ""
  }
}]

let soundRecordingTokens = [createTokenGroup([[2, 4], [2, 4], 2, 3, 3],
  db.fields.SOUNDRECORDING, SR, [
  VOICERECORDING, STEMSRECORDING, VSTREC, INSTRUMENTREC, MASTERRECORDING
]), {
  json: {
    date: "",
    files: ""
  }
}]

let soundDesignTokens = [createTokenGroup([[2, 4], [2, 4], 2, 1, 4],
  db.fields.SOUNDDESIGN, SD, [
  SAMPLE, VSTPRESET
]), {
  json: {
    date: "",
    file: ""
  }, specificDataFields: {
    sample: {
      category: "",
      style: ""
    },
    vstPreset: {
      vst: "",
      vstVersion: "",
      style: ""
    }
  }
}]

let visualArtTokens = createTokenGroup([[2, 4], [2, 4], 2, 1, 8],
  db.subCategory.VISUAL, VIS, [
  TWODVISUAL, THREEDVISUAL
])

let musicDigitalProductTokens = createTokenGroup([[2, 4], 2, 2, 4, 15],
  MUSICPRODUCT, REL, [
  TRACKRELEASE, EPRELEASE, LPRELEASE
])

let musicPhysicalProductTokens = createTokenGroup([[2, 4], 4, 2, 4, 28],
  MUSICPRODUCT, REL, [
  TRACKRELEASE, EPRELEASE, LPRELEASE, db.fields.VINYLPROD
])

let softwareTokens = createTokenGroup([[2, 4], [2, 4], 2, 2, 11],
  CODE, COD, [
  ZIONAPP
])

let moldVinylTokens = createTokenGroup([[2, 4], 3, 2, 3, 12],
  MOLDS, MOL, [
  LACQUER, VINYLMOLD, VINYLSTAMPER
])

let moldPrintTokens = createTokenGroup([[2, 4], 3, 2, 3, 8],
  MOLDS, MOL, [
  PRINTMOLD, VINYLLABELPRINTMOLD, VINYLCOVERMOLD
])

let copyVinylTokens = createTokenGroup([[3], [3], 5, 4, 12],
  COPIES, COPY, [
  VINYLCOPY, VINYLLABELCOPY, INNERSLEEVE, VINYLCOVER
])

let copyBrandTokens = createTokenGroup([[3], [3], 5, 4, 13],
  COPIES, COPY, [
  TSHIRT, HOODIE, HATS, STICKERS
])

let eventTokens = createTokenGroup([[2, 4], [3, 4], 10, 3, 10],
  EVENT, EVE, [
  PARTY, CONCERT
])

let ticketsTokens = createTokenGroup([[2, 4], [2, 4], 2, 4, 14],
  TICKET, TIK, [
  PARTY, CONCERT
])

let equipmentTokens = [createTokenGroup([[2, 4], [2, 4], 9, [2, 3, 4], [18, 28, 6]],
  EQUIPMENT, EQP,
  [
    SOUNDEQUIP, LIGHTEQUIP, STUDIOEQUIP, CLUBEQUIP
  ]), {
  json: {
    category: "",
    type: "",
    brand: "",
    model: "",
    year: "",
    status: "",
    _3dModel: "",
    pictures: "",
    dimensions: "",
    specitications: "",
    manuals: "",
  }
}]

let studioTokens = [createTokenGroup([[2, 4], [3, 4], 11, [3, 4], [2, 3, 4, 5, 10]],
  STUDIO, STU, [
  RECSTUDIO, DESIGNSTUDIO, RENDERINGSTUDIO
]), {
  json: {
    name: "",
    address: "",
    VATn: "",
    studios: "",
    team: ""
  }
}]

let venuesTokens = [createTokenGroup([[2, 4], [3, 4], 13, [3, 4], [6, 9, 14]],
  VENUES, VEN,
  [
    CLUB, WAREHOUSE, CONCERTHALL
  ],
  {
    json:
    {
      name: "",
      address: "",
      VATn: "",
      type: "",
      team: ""
    }
  }
)]

// let performanceTokens = [createTokenGroup([[3], [3, 4], 2, [3, 4], [6, 9, 14]],
//   PERFORMERS, PERF,
//   [
//     SINGER, INSTRUMENTALIST, SOUNDENGINEER, BEATMAKER, PRODUCER
//   ],
//   {
//     json:
//     {
//       date:"",
//       floorPrice:"",
//       isRecordable:""
//     }
//   }
// )]

console.log(ticketsTokens);

export let dbb = tokensList