let createMediaString = (value:number) => {
  return "@media(min-width: " + value + "px)"
}

export let breakPoints = {
  hi_res: 1281,
  desktop: 1025,
  tabletLandscape: 961,
  tabletPortrait: 641,
  phone: 481,
  watch: 320
}

export const media = { // source https://stackoverflow.com/questions/6370690/media-queries-how-to-target-desktop-tablet-and-mobile
  hi_res: createMediaString(breakPoints.hi_res), // hi-res laptops and desktops
  desktop: createMediaString(breakPoints.desktop), // big landscape tablets, laptops, and desktops
  tabletLandscape: createMediaString(breakPoints.tabletLandscape), // tablet, landscape iPad, lo-res laptops ands desktops
  tabletPortrait: createMediaString(breakPoints.tabletPortrait), // portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones
  phone: createMediaString(breakPoints.phone), // portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide.
  watch: createMediaString(breakPoints.watch) // smartphones, iPhone, portrait 480x320 phones
}

let generatePhoneObj = (brand:string, model:string, width:number, height:number) => {

  let deviceObj = {
    brand,
    model,
    size: {
      width,
      height
    },
    ratio: (width / height).toFixed(4)
  }

  return deviceObj
}

let APPLE = "Apple"
let ANDROID = "Android"

let iP13Max = generatePhoneObj(APPLE, "iPhone 13 Max", 428, 926)
let iP7P = generatePhoneObj(APPLE, "iPhone 7 Plus", 414, 736)
let android = generatePhoneObj(ANDROID, "Android Base", 360, 640)

let generateTabletObj = (brand:string, model:string, width:number, height:number) => {

  let deviceObj = {
    brand,
    model,
    size: {
      width,
      height
    },
    ratio: (width / height).toFixed(4)
  }

  return deviceObj
}

let iPadMini = generateTabletObj(APPLE, "iPad mini", 768, 1024)
let iPadPro12 = generateTabletObj(APPLE, "iPad Pro 12.9'", 1024, 1366)

export let objsToTest = [
  iP13Max, iP7P, android, iPadMini, iPadPro12
]

export let calculateYouTubeResponsiveValues = (h:number) => {
  let YTW = 560
  let YTH = 315
  let YouTubeVideoProportions = YTW / YTH
  let youTubeFrameResponsiveValues = {
    mobile : {width: h * YouTubeVideoProportions, height : h },
    portrait : {width: h * YouTubeVideoProportions * 1.775 ,height: 1.775 * h},
    desktop : {width : 2.7 * h * YouTubeVideoProportions ,height: 2.7 * h}
  }
  return youTubeFrameResponsiveValues
}

// objsToTest.forEach(e=>{
//   console.log(e.ratio);
// })