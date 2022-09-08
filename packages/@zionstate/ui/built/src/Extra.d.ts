import Telegram from 'telegraf';
import { ForceReply, InlineKeyboardMarkup, MessageEntity, ParseMode, ReplyKeyboardMarkup, ReplyKeyboardRemove } from 'telegraf/typings/core/types/typegram';
declare type TGExtraReplyMessage = Telegram.Types.ExtraReplyMessage;
export declare class Extra implements TGExtraReplyMessage {
    parse_mode?: ParseMode | undefined;
    entities?: MessageEntity[] | undefined;
    disable_web_page_preview?: boolean | undefined;
    disable_notification?: boolean | undefined;
    protect_content?: boolean | undefined;
    reply_to_message_id?: number | undefined;
    allow_sending_without_reply?: boolean | undefined;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | undefined;
    constructor(parse_mode?: ParseMode | undefined, entities?: MessageEntity[] | undefined, disable_web_page_preview?: boolean | undefined, disable_notification?: boolean | undefined, protect_content?: boolean | undefined, reply_to_message_id?: number | undefined, allow_sending_without_reply?: boolean | undefined, reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | undefined);
}
export {};
