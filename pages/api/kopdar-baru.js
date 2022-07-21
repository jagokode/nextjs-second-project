// url: /api/kopdar-baru

import { MongoClient } from "mongodb";

const handleTambahKopdar = async (req, res) => {
  if (req.method === "POST") {
    // const { address, description, image, title } = req.body;

    const client = await MongoClient.connect(
      "mongodb://localhost:27017/kopdar"
    );

    const db = client.db();

    const kopdarCollection = db.collection("kopdar");

    const result = await kopdarCollection.insertOne(req.body);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Kopdar berhasil ditambahkan" });
  }
};

export default handleTambahKopdar;
