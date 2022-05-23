import { Li } from "../Elementi/Li";

export let createLiElements = ({
  dynamic,
  pars
}) => {
  let parsToList = pars === undefined ? [] : pars
  let list = []
  let counter = 0
  parsToList.forEach(element => {
    counter++
    list.push(<Li key={counter} dynamic={dynamic}>{element}</Li>)
  });
  return list
}