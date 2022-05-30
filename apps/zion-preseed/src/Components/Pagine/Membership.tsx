import { useState } from 'react';
import styled from 'styled-components';
import LabelledInput from '../Compositori/LabelledInput';
import { Button } from '../Elementi/Button';
import { Div, FormWrapper } from '../Elementi/Div';
import { Form } from '../Elementi/Form';
import { membershipPageObj } from './MembershipData';

let ErrorMessage = styled(Div)<{ yellow: boolean; dynamic: any }>``;

export default function Membership() {
  const [recipient, setRecipient] = useState('');

  // let handleSubmit = () => {
  //   buyTokens(userAddress, amount)
  // }

  let handleChange = (e: any) => {
    setRecipient(e.target.value);
  };

  let handleClick = (e: any) => {
    e.preventDefault();
    console.log(recipient);
    setRecipient('');
  };

  let { formWrapper, form, labelledInput, button, errorMessage } =
    membershipPageObj;

  // TODO correggere errore TS
  //@ts-expect-error
  labelledInput.input.value = recipient;
  // TODO correggere errore TS
  //@ts-expect-error
  labelledInput.input.onChange = handleChange;

  // TODO correggere errore TS
  return (
    <FormWrapper {...formWrapper}>
      <Form {...form}>
        <LabelledInput {...labelledInput} />
        <Button onClick={handleClick} {...button} mid></Button>
        <ErrorMessage {...errorMessage} yellow>
          Error Message
        </ErrorMessage>
      </Form>
    </FormWrapper>
  );
}
