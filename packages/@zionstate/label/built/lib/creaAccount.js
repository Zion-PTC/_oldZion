import { Account } from "../src/class/Account.js";
export function creaAccount(account) {
    return new Account(account.name, account.paths);
}
