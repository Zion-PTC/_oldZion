import { Li } from '../Elementi/Li';

interface IcreateLiElements {
  dynamic: any;
  pars: (string | (string | string[])[])[] | undefined;
}

export let createLiElements = ({ dynamic, pars }: IcreateLiElements) => {
  let parsToList = pars === undefined ? [] : pars;
  let list: JSX.Element[] = [];
  let counter = 0;
  parsToList.forEach(element => {
    counter++;
    list.push(
      <Li key={counter} dynamic={dynamic}>
        {element}
      </Li>
    );
  });
  return list;
};
