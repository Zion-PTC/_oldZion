interface IButtonObj {
  text: string;
  callback_data: string;
}

export class ButtonObj implements IButtonObj {
  text: string;
  callback_data: string;
  constructor(text: string, callback_data: string) {
    this.text = text;
    this.callback_data = callback_data;
  }
}
