import mongoose from "mongoose";
import { Database, Strategies } from "../DataBase.js";

export type Collection = mongoose.Collection;
export type Connection = mongoose.Connection;
export type SchemaType = mongoose.Schema;
export type Model<T> = mongoose.Model<T>;

const Schema = mongoose.Schema;
const Model = mongoose.Model;
const ObjectId = mongoose.Types.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date,
});

const User = new Schema({
  name: String,
  surname: String,
  telegram_id: String,
});

const UserModel = mongoose.model("User", User);
const BlogModel = mongoose.model("BlogPost", BlogPost);

export class MongoDb extends Database {
  User = UserModel;
  Blog = BlogModel;
  static Schema = Schema;
  static Model = Model;
  db: Connection | undefined = undefined;
  models: { [key: string]: Model<any> } = {};
  collections: { [key: string]: Collection } = {};
  constructor(
    name: string,
    public uri: string,
    public user: string,
    public pass: string,
    strategy: Strategies = "mongo-db"
  ) {
    super(name, strategy);
  }
  async connect(): Promise<void> {
    await mongoose.connect(this.uri, { user: this.user, pass: this.pass });

    this.db = mongoose.connection;
    this.models = this.db.models;
    this.collections = this.db.collections;
    this.db.on("error", (error) => {
      console.log("connection error: ", error);
    });
    // this.db.once("open", () => {
    //   console.log("Connected successfully");
    // });
    return;
  }
  addSchema() {}
  addModel() {}
  createDocument() {}
  clearAllDocInCollection() {}
  test() {
    return this.db?.name;
  }
}
