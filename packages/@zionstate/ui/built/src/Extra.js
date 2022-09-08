export class Extra {
    parse_mode;
    entities;
    disable_web_page_preview;
    disable_notification;
    protect_content;
    reply_to_message_id;
    allow_sending_without_reply;
    reply_markup;
    constructor(parse_mode, entities, disable_web_page_preview, disable_notification, protect_content, reply_to_message_id, allow_sending_without_reply, reply_markup) {
        this.parse_mode = parse_mode;
        this.entities = entities;
        this.disable_web_page_preview = disable_web_page_preview;
        this.disable_notification = disable_notification;
        this.protect_content = protect_content;
        this.reply_to_message_id = reply_to_message_id;
        this.allow_sending_without_reply = allow_sending_without_reply;
        this.reply_markup = reply_markup;
    }
}
