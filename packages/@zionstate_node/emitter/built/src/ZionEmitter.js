import EventEmitter from 'events';
export class ZionEmitter extends EventEmitter {
    log(message) {
        console.log(message);
        let arg = 'azz';
        this.emit('messageLogged', arg, message);
    }
}
console.log(EventEmitter);
