import mongoose from "mongoose";

const Model = mongoose.Model;

export async function createOne(model: typeof Model, object: Object) {
  let comment;
  try {
    comment = await model.create(object);
  } catch (error) {
    console.log(error);
  }
  return comment;
}

export async function readOne(model: typeof Model, object: Object) {
  let blogpost;
  try {
    blogpost = await model.find(object);
  } catch (error) {
    console.log(error);
  }
  if (!blogpost) return 0;
  return blogpost[0];
}

export async function updateOne(model: typeof Model, object: Object) {
  let blogpost, result;
  try {
    blogpost = await model.find(object);
    result = blogpost[0];
    if (!blogpost) return 0;
    result.body = "provo ad aggiungere un testo";
    result.save((err: Error) => {
      if (err) console.log(err);
    });
  } catch (error) {
    console.log(error);
  }
  return result;
}

export async function deleteOne(model: typeof Model, object: Object) {
  let blogposts, result;
  try {
    blogposts = await model.find(object);
    result = blogposts[0];
    await result.deleteOne();
  } catch (error) {
    if (error) console.log(error);
  }
  result;
}
