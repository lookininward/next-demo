import { MongoClient } from "mongodb";

const DEFAULT_DB = "nextDemo";
const DEFAULT_PASSWORD = "MmeLP8WFQ4jfWIJE";

export const getMongoClient = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://admin:${DEFAULT_PASSWORD}@cluster0.8nwrn.mongodb.net/${DEFAULT_DB}?retryWrites=true&w=majority`,
    { useUnifiedTopology: true }
  );

  return client;
};
