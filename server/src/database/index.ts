import { MongoClient, Db } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "todo_app";

let dbConnection: Db;

export const ConnectToDb = (cb: (err?: Error) => void) => {
  MongoClient.connect(url)
    .then((client) => {
      dbConnection = client.db(dbName);
      return cb();
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    });
};

export const GetDb = () => dbConnection;
