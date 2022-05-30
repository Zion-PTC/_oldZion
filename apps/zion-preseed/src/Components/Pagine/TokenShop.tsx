import { useState } from 'react';
import LabelledInput from '../Compositori/LabelledInput';
import { Button } from '../Elementi/Button';
import Display from '../Compositori/Display';
import { tokenShopPageObj } from './TokenShopData';
import { FormWrapper } from '../Elementi/Div';
import { Form } from '../Elementi/Form';

interface ITokenShop {
  userAddress?: any;
  buyTokens?: any;
}

export default function TokenShop({ userAddress, buyTokens }: ITokenShop) {
  const [amount, setAmount] = useState('');

  let handleSubmit = () => {
    buyTokens(userAddress, amount);
  };

  let handleChange = (e: any) => {
    setAmount(e.target.value);
  };

  let handleClick = (e: any) => {
    e.preventDefault();
    setAmount('');
  };

  let { formWrapper, form, labelledInput, display, button } = tokenShopPageObj;

  // TODO correggere errore TS
  //@ts-expect-error
  form.onSubmit = handleSubmit;
  // TODO correggere errore TS
  //@ts-expect-error
  labelledInput.input.value = amount;
  // TODO correggere errore TS
  //@ts-expect-error
  labelledInput.input.onChange = handleChange;

  return (
    <FormWrapper {...formWrapper}>
      <Form {...form}>
        <LabelledInput {...labelledInput} />
        <Display display={display} />
        <Button onClick={handleClick} {...button} mid></Button>
      </Form>
    </FormWrapper>
  );
}
