import { css } from "styled-components";
import { MIDHEIGHT, RADIUMMID } from "../../js/altezze";
import { BRIGHT, DARK, MID, RED } from "../../js/colori";
import { checkColor } from "../Styled/Utils";

export let membershipPageObj = {
  formWrapper: {
    id: "membership-form-wrapper"
  },
  form:{
    backgroundColor: MID
  },
  labelledInput : {
    label : {
      dynamic : css`
        color: ${BRIGHT};
        font-size: 80%;
        align-self: end;
      `,
      htmlFor : "indirizzo",
      children : "Indirizzo dell'invitato"
    },
    input : {
      type: "text",
      placeholder: "invia a..",
      name: "indirizzo",
      dynamic: css`
        border-color: ${DARK};
        height: ${MIDHEIGHT};
        border-radius: ${RADIUMMID};
      `,
    },
  },
  button: {
    type: "submit",
    children: "invia",
  },
  errorMessage : {
    dynamic:css`
    font-size: 70%;
    padding: 0.9em;
    color: ${RED};
    border-radius: 0.1em;
      ${checkColor}
    `
  }
}