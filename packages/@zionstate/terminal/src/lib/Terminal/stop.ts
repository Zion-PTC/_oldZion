import { Terminal } from "../../Terminal";

export function stop(this: Terminal, input: string) {
  const cond1 = input === this.config.stopcommand;
  if (cond1) this.interface.close();
}
