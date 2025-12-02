const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(express.json());

app.use(express.static('public'));

// Local MongoDB connection
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    await client.connect();
    const db = client.db("sit725_4_2P");
    const species = db.collection("speciesRecords");

    // CREATE
    app.post("/species", async (req, res) => {
        const result = await species.insertOne(req.body);
        res.json(result);
    });

    // READ
    app.get("/species", async (req, res) => {
        const data = await species.find().toArray();
        res.json(data);
    });

    // UPDATE
    app.put("/species/:id", async (req, res) => {
        const result = await species.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
        res.json(result);
    });

    // DELETE
    app.delete("/species/:id", async (req, res) => {
        const result = await species.deleteOne({ _id: new ObjectId(req.params.id) });
        res.json(result);
    });

    app.listen(3000, () => console.log("✔ Server running on http://localhost:3000"));
}

run();
