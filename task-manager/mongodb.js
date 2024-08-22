const { MongoClient } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

async function main() {
  const client = await MongoClient.connect(connectionURL);
  console.log("Connected successfully to server");

  const db = client.db(databaseName);

  db.collection("users").insertOne({
    name: "Josh",
    age: 31,
  });
}

main().catch(console.error);
//.finally(() => client.close());
