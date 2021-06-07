import { MongoClient } from "mongodb";

const DEFAULT_DB = process.env.DEFAULT_DB;
const DEFAULT_PASSWORD = process.env.DEFAULT_PASSWORD;

export const getMongoClient = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://admin:${DEFAULT_PASSWORD}@cluster0.8nwrn.mongodb.net/${DEFAULT_DB}?retryWrites=true&w=majority`,
    { useUnifiedTopology: true }
  );

  return client;
};
