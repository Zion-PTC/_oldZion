import { createContractTypeObj } from "../factory/token_contractType";

let erc20 = createContractTypeObj(
  0, 20, 0, ''
)

let erc720 = createContractTypeObj(
  1, 720, 1, ''
)

let erc1155 = createContractTypeObj(
  2, 1155, [0,1], ''
)

export let contractTypes = [
  erc20,
  erc720,
  erc1155
]