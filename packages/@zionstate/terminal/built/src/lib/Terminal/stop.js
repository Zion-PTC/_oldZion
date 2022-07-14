export function stop(input) {
    const cond1 = input === this.config.stopcommand;
    if (cond1)
        this.interface.close();
}
