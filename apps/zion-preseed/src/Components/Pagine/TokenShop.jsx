import { useState } from "react"
import LabelledInput from "../Compositori/LabelledInput"
import { Button } from "../Elementi/Button"
import Display from "../Compositori/Display"
import { tokenShopPageObj } from "./TokenShopData"
import { FormWrapper } from "../Elementi/Div"
import { Form } from "../Elementi/Form"

export default function TokenShop(
  userAddress,
  buyTokens
) {
  const [amount, setAmount] = useState("")

  let handleSubmit = () => {
    buyTokens(userAddress, amount)
  }

  let handleChange = (e) => {
    setAmount(e.target.value)
  }

  let handleClick = (e) => {
    e.preventDefault()
    setAmount("")
  }

  let {
    formWrapper,
    form,
    labelledInput,
    display,
    button,
  } = tokenShopPageObj

  form.onSubmit= handleSubmit
  labelledInput.input.value = amount
  labelledInput.input.onChange = handleChange

  return (
      <FormWrapper {...formWrapper}>
        <Form {...form}>
          <LabelledInput {...labelledInput}/>
          <Display display={display}/>
          <Button
            onClick={handleClick}
            {...button}
            mid
          ></Button>
        </Form>
      </FormWrapper>
  )
}
