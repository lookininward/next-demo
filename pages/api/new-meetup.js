import { getMongoClient } from "../../helpers/db";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;
    const client = await getMongoClient();
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    await meetupsCollection.insertOne({
      title,
      image,
      address,
      description,
    });

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
