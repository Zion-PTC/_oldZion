import { createZionTokenType } from "../factory/token_zionTokenType";

let invitationTokenType = createZionTokenType(
  'invitationTokenType',
  'Invitation Token',
  '',
  'This type of token is necessary to manage the referral tree and to grant access to users via a word-to-mouth mechanism'
)

let accountTokenType = createZionTokenType(
  'accountTokenType',
  'Share Token',
  'This type of token is'
)

export let zionTokenTypes =
[
  invitationTokenType,
  accountTokenType
]