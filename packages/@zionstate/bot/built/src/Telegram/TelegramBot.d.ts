import { Context, Middleware, MiddlewareFn } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
export declare class TelegramBot {
    #private;
    constructor(tokenID: string);
    action: (triggers: import("telegraf/typings/composer.js").Triggers<Context<Update>>, fns_0: Middleware<Context<Update.CallbackQueryUpdate> & Omit<Context<Update> & {
        match: RegExpExecArray;
    }, keyof Context<Update>>>, ...fns_1: Middleware<Context<Update.CallbackQueryUpdate> & Omit<Context<Update> & {
        match: RegExpExecArray;
    }, keyof Context<Update>>>[]) => import("telegraf").Telegraf<Context<Update>>;
    hears(trigger: string, middleware: MiddlewareFn<Context<Update>>): import("telegraf").Telegraf<Context<Update>>;
    on: <T extends "callback_query" | "channel_post" | "chat_member" | "chosen_inline_result" | "edited_channel_post" | "edited_message" | "inline_query" | "message" | "my_chat_member" | "pre_checkout_query" | "poll_answer" | "poll" | "shipping_query" | "chat_join_request" | "forward_date" | "channel_chat_created" | "connected_website" | "delete_chat_photo" | "group_chat_created" | "invoice" | "left_chat_member" | "message_auto_delete_timer_changed" | "migrate_from_chat_id" | "migrate_to_chat_id" | "new_chat_members" | "new_chat_photo" | "new_chat_title" | "passport_data" | "proximity_alert_triggered" | "pinned_message" | "successful_payment" | "supergroup_chat_created" | "video_chat_scheduled" | "video_chat_started" | "video_chat_ended" | "video_chat_participants_invited" | "web_app_data" | "animation" | "document" | "audio" | "contact" | "dice" | "game" | "location" | "photo" | "sticker" | "text" | "venue" | "video" | "video_note" | "voice">(updateType: import("telegraf/typings/composer.js").MaybeArray<T>, fns_0: Middleware<Context<import("telegraf/typings/telegram-types.js").MountMap[T]> & Omit<Context<Update>, keyof Context<Update>>>, ...fns_1: Middleware<Context<import("telegraf/typings/telegram-types.js").MountMap[T]> & Omit<Context<Update>, keyof Context<Update>>>[]) => import("telegraf").Telegraf<Context<Update>>;
    sendMediaGroup: (chatId: string | number, media: readonly ({
        type: "photo";
        media: string | import("telegraf/typings/core/types/typegram").InputFile;
        caption?: string | undefined;
        parse_mode?: import("typegram/message.js").ParseMode | undefined;
        caption_entities?: import("typegram/message.js").MessageEntity[] | undefined;
    } | {
        type: "video";
        media: string | import("telegraf/typings/core/types/typegram").InputFile;
        thumb?: import("telegraf/typings/core/types/typegram").InputFile | undefined;
        caption?: string | undefined;
        parse_mode?: import("typegram/message.js").ParseMode | undefined;
        caption_entities?: import("typegram/message.js").MessageEntity[] | undefined;
        width?: number | undefined;
        height?: number | undefined;
        duration?: number | undefined;
        supports_streaming?: boolean | undefined;
    })[] | readonly {
        type: "audio";
        media: string | import("telegraf/typings/core/types/typegram").InputFile;
        thumb?: import("telegraf/typings/core/types/typegram").InputFile | undefined;
        caption?: string | undefined;
        parse_mode?: import("typegram/message.js").ParseMode | undefined;
        caption_entities?: import("typegram/message.js").MessageEntity[] | undefined;
        duration?: number | undefined;
        performer?: string | undefined;
        title?: string | undefined;
    }[] | readonly {
        type: "document";
        media: string | import("telegraf/typings/core/types/typegram").InputFile;
        thumb?: import("telegraf/typings/core/types/typegram").InputFile | undefined;
        caption?: string | undefined;
        parse_mode?: import("typegram/message.js").ParseMode | undefined;
        caption_entities?: import("typegram/message.js").MessageEntity[] | undefined;
        disable_content_type_detection?: boolean | undefined;
    }[], extra?: import("telegraf/typings/telegram-types.js").ExtraMediaGroup | undefined) => Promise<(import("typegram/message.js").Message.DocumentMessage | import("typegram/message.js").Message.AudioMessage | import("typegram/message.js").Message.PhotoMessage | import("typegram/message.js").Message.VideoMessage)[]>;
    sendMessage: (chatId: string | number, text: string, extra?: import("telegraf/typings/telegram-types.js").ExtraReplyMessage | undefined) => Promise<import("typegram/message.js").Message.TextMessage>;
}
