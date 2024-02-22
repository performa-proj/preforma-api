import { Db, MongoClient, ServerApiVersion } from "mongodb";

let _CLIENT: MongoClient | undefined = undefined;

const DB_NAME = "clst-01";

export const resolveDBClient = async (): Promise<MongoClient> => {
  if (_CLIENT === undefined) {
    const pwd = "vQqYMywhrMzKZLnW"
    const uri = `mongodb+srv://app-usr:${pwd}@clst-01.sdffi5s.mongodb.net/?retryWrites=true&w=majority`;

    const client: MongoClient = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();

    _CLIENT = client;
  }

  return _CLIENT;
};

export const resolveDatabase = async (): Promise<Db> => {
  const dbClient = await resolveDBClient();

  return dbClient.db(DB_NAME);
};
