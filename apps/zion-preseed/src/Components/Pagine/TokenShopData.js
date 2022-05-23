import { css } from "styled-components";
import { MIDHEIGHT, RADIUMMID } from "../../js/altezze";
import { BRIGHT, DARK, MID, MIDDARK } from "../../js/colori";

export let tokenShopPageObj = {
  formWrapper: {
    id: "token-shop-form-wrapper",
    dynamic:css`
      grid-template-columns: 1fr 1.5fr 1fr;
      grid-template-rows: 1fr 1.5fr 1fr;
      grid-template-areas: ". . ." ". a ." ". . .";
    `
  },
  form: {
    backgroundColor: MID,
    dynamic:css`
      grid-area: a;
    `
  },
  labelledInput:{
    label:{
      dynamic : css`
        color: ${BRIGHT};
      `,
      htmlFor:"amount",
      children: "Amount of Tokens"
    },
    input:{
      type: "text",
      placeholder: "insert amount here....",
      name: "amount",
      dynamic: css`
        border-color: ${DARK};
        height: ${MIDHEIGHT};
        border-radius: ${RADIUMMID};
      `,
    },
  },
  display : {
    data : "1",
    type : "text",
    name : "token-price",
    color : BRIGHT,
    height: MIDHEIGHT,
    bkgColor : MIDDARK,
    borderRadius : RADIUMMID,
    label : {
      color : BRIGHT,
      htmlFor : "token-price",
      children : "Token Price"
    }
  },
  button: {
    type: "submit",
    children: "acquista ZION tokens",
  },
}