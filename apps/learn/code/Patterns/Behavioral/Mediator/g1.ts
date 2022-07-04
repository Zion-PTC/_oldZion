// Refactorin dell'esempio
// /Users/WAW/Documents/Projects/ZION/apps/learn/code/Patterns/Behavioral/Mediator.js
// di DoFactory

export {};
class Participant {
  chatroom?: Chatroom;
  constructor(public name: string) {}
  send(message: string, to?: Participant) {
    if (this.chatroom && to) this.chatroom.send(message, this, to);
  }
  receive(message: string, from: Participant) {
    console.log(from.name + "to " + this.name + ": " + message);
  }
}

class Chatroom {
  participants: { [key: string]: Participant } = {};
  register(participant: Participant) {
    this.participants[participant.name] = participant;
    participant.chatroom = this;
  }
  send(message: string, from: Participant, to: Participant) {
    if (to) {
      to.receive(message, from);
    } else {
      for (let key in this.participants) {
        if (this.participants[key] !== from) {
          this.participants[key].receive(message, from);
        }
      }
    }
  }
}

let yoko = new Participant("Yoko");
let john = new Participant("John");
let paul = new Participant("Paul");
let ringo = new Participant("Ringo");

let chatroom = new Chatroom();
chatroom.register(yoko);
chatroom.register(john);
chatroom.register(paul);
chatroom.register(ringo);

yoko.send("All you need is love.");
yoko.send("I love you john");
john.send("Hey, no need to broadcast", yoko);
paul.send("ha, I heard that!");
ringo.send("Payl, what do you think");
