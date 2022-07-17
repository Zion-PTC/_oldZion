import Telegram from 'telegraf';
import {
  ForceReply,
  InlineKeyboardMarkup,
  MessageEntity,
  ParseMode,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
} from 'telegraf/typings/core/types/typegram';

type TGExtraReplyMessage = Telegram.Types.ExtraReplyMessage;
export class Extra implements TGExtraReplyMessage {
  constructor(
    public parse_mode?: ParseMode,
    public entities?: MessageEntity[],
    public disable_web_page_preview?: boolean,
    public disable_notification?: boolean,
    public protect_content?: boolean,
    public reply_to_message_id?: number,
    public allow_sending_without_reply?: boolean,
    public reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply
  ) {}
}
