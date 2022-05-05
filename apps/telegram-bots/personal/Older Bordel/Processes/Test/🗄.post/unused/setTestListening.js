import { Test } from "../../../../Models/Testing.js";

export let setTestListening = async ({ _id }, is_listening) => {
  console.log(_id);
  let test = await Test
    .where("_id")
    .equals(_id)
  test[0].status.is_listening = is_listening
  await test[0].save()
}