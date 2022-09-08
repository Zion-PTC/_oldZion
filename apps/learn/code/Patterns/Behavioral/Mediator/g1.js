export {};

class Participant {
  chatroom;
  constructor(name) {
    this.name = name;
  }
  send(message, to) {
    if (this.chatroom) this.chatroom.send(message, this, to);
  }
  receive(message, from) {
    console.log(from.name + " to " + this.name + ": " + message);
  }
}

class Chatroom {
  participants = {};
  register(participant) {
    this.participants[participant.name] = participant;
    participant.chatroom = this;
  }
  send(message, from, to) {
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

let yoko = new Participant("yoko");
let john = new Participant("john");
let paul = new Participant("paul");
let ringo = new Participant("ringo");

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
