import { useState } from "react"
import styled from "styled-components"
import LabelledInput from "../Compositori/LabelledInput"
import { Button } from "../Elementi/Button"
import { Div, FormWrapper } from "../Elementi/Div"
import { Form } from "../Elementi/Form"
import { membershipPageObj } from "./MembershipData"

let ErrorMessage = styled(Div)``


export default function Membership() {
  const [recipient, setRecipient] = useState("")

  // let handleSubmit = () => {
  //   buyTokens(userAddress, amount)
  // }

  let handleChange = (e) => {
    setRecipient(e.target.value)
  }

  let handleClick = (e) => {
    e.preventDefault()
    console.log(recipient);
    setRecipient("")
  }

  let {
    formWrapper,
    form,
    labelledInput,
    button,
    errorMessage
  } = membershipPageObj

  labelledInput.input.value = recipient
  labelledInput.input.onChange = handleChange

  return (
    <FormWrapper {...formWrapper}>
      <Form {...form}>
        <LabelledInput {...labelledInput} />
        <Button
          onClick={handleClick}
          {...button}
          mid
        ></Button>
        <ErrorMessage {...errorMessage} yellow>Error Message</ErrorMessage>
      </Form>
    </FormWrapper>
  )
}
