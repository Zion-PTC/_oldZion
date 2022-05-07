import mongoose from 'mongoose';
/**
 * @param message It's the name which appear in the console log
 * @param name It's the name which appear in the console log
 * @param cause It's the error coming from the callee function
 * @param args Object containing the called parameters
 * @method justLove this is a really cool method
 **/
export class ZionError extends Error {
    cause;
    args;
    constructor(message, name, cause, args) {
        super(message);
        this.name = name;
        this.cause = cause ? cause : undefined;
        this.args = args;
    }
    log() {
        console.log(this);
    }
}
let zionErrorSchema = new mongoose.Schema({
    message: String,
    name: String,
    cause: Object,
    args: Object,
});
zionErrorSchema.loadClass(ZionError);
export let ZionErrorDoc = mongoose.model('Error', zionErrorSchema);
