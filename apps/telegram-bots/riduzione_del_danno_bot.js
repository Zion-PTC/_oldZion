const Parser = require("rss-parser")

let linkUtili = {
  NEWS_GENERALI_DAL_MONDO_RDD: [
    "https://itanpud.org/blog/", /// yes rss
    "https://www.emcdda.europa.eu/", /// yes rss https://www.emcdda.europa.eu/news/home/rss.xml
    "https://www.fuoriluogo.it", /// yes
    "https://megliolegale.it/blog/", /// yes
    "https://volteface.me/news/", // yes
    "https://www.facebook.com/itarrd/",
    "https://www.facebook.com/groups/euronpud/",
    "https://www.facebook.com/profilo.danno.ch/",
    "https://www.facebook.com/Crew2000/",
    "https://www.facebook.com/freenarcanresourcesnationwide/",
    "https://www.facebook.com/energycontrol/"
  ],
  TORINO: [
    "https://www.facebook.com/chemicalsisters420/",
    "https://www.facebook.com/Neutravel/",
    "https://www.facebook.com/dropin.torino/",
    "https://www.facebook.com/servizioPIN/",
    "https://www.facebook.com/Onda-1-Asl-Citt%C3%A0-di-Torino-1072437619451225/",
    "https://www.facebook.com/dropin.alessandria.3"
  ],
  NEWS_POLITICHE_IMPORTANTI_su_Torino_sgomberi: ["https://www.facebook.com/macerie.torino/"],
  CENTRO: [
    "https://www.facebook.com/Progetto-Nautilus-117153161644251/",
    "https://www.facebook.com/ProgettoAltrestrade/",
    "https://www.facebook.com/flashoperatoridistrada/",
  ],
  Cultura_e_info_generali: [
    "https://www.facebook.com/nottitossiche/",
    "https://microsphera.webnode.it/blog/", /// no rss
    "http://www.kainowska.com/sito/news/" /// rss really old
  ],
  schizzi_di_inchiostro: ["https://www.facebook.com/FollowTheDuckbill/"],
  milano: [
    "https://www.facebook.com/WelchomeContattaeInclude/",
    "https://www.facebook.com/insostanza2020/"
  ]
}

let rssFeeds = [
  "https://itanpud.org/blog/feed/",
  "https://www.emcdda.europa.eu/news/home/rss.xml",
  "https://www.fuoriluogo.it/feed/",
  "https://megliolegale.it/blog/feed/",
  "https://volteface.me/feed/",
  // "https://microsphera.webnode.it/blog/feed"
]

const main = async (url) => {
  const parser = new Parser
  const feed = await parser.parseURL(url)
  let { creator , title, link, pubDate, contentSnippet } = feed.items[0]
  let tgFeedObj = {
    creator,
    title,
    link,
    pubDate,
    contentSnippet
  }
  console.log(tgFeedObj);
}
rssFeeds.forEach(item => main(item))

