import styled from 'styled-components';
import { MIDHEIGHT, RADIUMMID } from '../../js/altezze';
import { BRIGHT, DARK, MID, MIDBRIGHT, MIDDARK } from '../../js/colori';
import { Button } from '../Elementi/Button';
import Display from './Display';
import { Input } from '../Elementi/Input';

export default function Web3Area() {
  let Area = styled.div`
    width: 20em;
    padding: 1em 1em 2em 1em;
    margin: 0 0 0 0;
    border-radius: 1em;
    background-color: ${MID};
    // https://www.w3schools.com/html/html_form_input_types.asp
    // https://www.codegrepper.com/code-examples/css/how+to+put+padding+to+a+placeholder+css
  `;

  let handleClick = () => {
    console.log('handleClick');
  };

  let handleChange = () => {
    console.log('handleChange');
  };

  let data = 'Display';

  let display = {
    color: MIDBRIGHT,
    height: MIDHEIGHT,
    bkgColor: BRIGHT,
    borderRadius: RADIUMMID,
  };

  return (
    <Area>
      <Display display={display}></Display>
      <Input
        borderColor={DARK}
        height={MIDHEIGHT}
        borderRadius={RADIUMMID}
        placeHolder='Insert a value...'
        onChange={handleChange}
      ></Input>
      <Button
        tipo={'small'}
        message='Click Me'
        onClick={handleClick}
        color={BRIGHT}
        height={MIDHEIGHT}
        borderRadius={RADIUMMID}
        bkgColor={MIDDARK}
        hoverColor={MID}
        activeColor={MIDBRIGHT}
      ></Button>
    </Area>
  );
}
