// DOM Utils

// let getOffset = (element_) => {

//   let delay = 500
//   let elOffset
//   let LOADING = "loading"
//   let LOGMESS = "after "+(delay/1000)+" sec the dom is "

//   switch (document.readyState) {
//     case LOADING:
//       setTimeout(() => {
//         console.log(LOGMESS + domState());
//         elOffset = document.getElementById(element_).offsetHeight
//       }, delay);
//       break;

//     default:
//       break;
//   }

// }

// let domState = () => {
//   return document.readyState
// }

// export {
//   domState,
//   getOffset
// }

export const calculateDisplayRatio = () => {
  let windowInnerWidth = window.innerWidth
  let windwowInnerHeight = window.innerHeight
  let ratio = windowInnerWidth / windwowInnerHeight
  return ratio
}