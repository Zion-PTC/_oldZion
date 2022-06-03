// CONVERSION UTILS

// da px a em e viceversa
// 1em=16px

export let convertPx2Em = (value:number) => {
  let em = value/16
  return em.toFixed(2)+"em"
}

export let convertEm2Px = (value:number) => {
  let px = 16*value
  return px+"px"
}