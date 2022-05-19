import * as readline from 'node:readline';
let obj;
//@ts-expect-error
export class Terminal {
    name;
    answer;
    interface;
    line;
    constructor(name, line) {
        this.name = name;
        this.answer = 'No question was passed';
        this.interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.line = line;
    }
    async makeQuestion(question) {
        this.answer = '';
        let terminalInterface = async (question) => {
            return new Promise(async (res, rej) => {
                this.interface.question(question, answer => {
                    res(answer);
                });
            });
        };
        this.answer = await terminalInterface(question);
        console.log(`Hi ${this.answer}!`);
        return this;
    }
    async listenForAnswer() {
        this.line;
        let terminalInterface = async () => {
            return new Promise(async (res, rej) => {
                this.interface.on('line', (line) => {
                    res(line);
                });
            });
        };
        this.line = await terminalInterface();
        return this;
    }
    sendMessage(data, key) {
        this.interface.write(data, key);
        return this;
    }
    close() {
        this.interface.close();
        return this;
    }
}