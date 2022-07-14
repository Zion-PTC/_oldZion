import mongoose from "mongoose";
/**
 * @param message It's the name which appear in the console log
 * @param name It's the name which appear in the console log
 * @param args Object containing the called parameters
 */
export class ZionError extends Error {
    args;
    constructor(message, name, args) {
        super(message);
        this.args = args;
        if (name)
            this.name = name;
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
export let ZionErrorDoc = mongoose.model("Error", zionErrorSchema);
