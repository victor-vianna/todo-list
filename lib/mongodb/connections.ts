import { Db } from "mongodb";
import clientPromise from "./client";

let cachedb: Db | null;

async function connectToDatabase() {
  if (cachedb) {
    return cachedb;
  }

  const client = await clientPromise;
  const db = client.db("DB - list - tasks");
  cachedb = db;
  return db;
}

export default connectToDatabase;
