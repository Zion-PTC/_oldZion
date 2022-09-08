import bcrypt from "bcrypt";
export async function genBcryptHash(string) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(string, salt);
    return hash;
}
export async function bcryptCompare(req_pass, db_pass) {
    if (await bcrypt.compare(req_pass, db_pass))
        return "Success";
    else
        return "Wrong Password";
}