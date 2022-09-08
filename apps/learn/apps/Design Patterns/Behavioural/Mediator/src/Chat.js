export class Participant {
  chatroom;
  constructor(name) {
    this.name = name;
  }
  send(message, to) {
    if (this.chatroom) this.chatroom.send(message, this, to);
  }
  receive(message, from) {
    console.log(message);
  }
}

export class Chatroom {
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
