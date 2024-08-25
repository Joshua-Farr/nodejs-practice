const { MongoClient } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

async function main() {
  const client = await MongoClient.connect(connectionURL);
  console.log("Connected successfully to server");

  const db = client.db(databaseName);

  db.collection("users").insertOne(
    {
      name: "Josh",
      age: 31,
    },
    (error, result) => {
      if (error) {
        return console.log("Unable to insert user");
      }
      console.log(result.insertedId);
    }
  );
}

main().catch(console.error);
//.finally(() => client.close());
