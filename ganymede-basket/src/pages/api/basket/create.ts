import { NextApiRequest, NextApiResponse } from "next";
import connect from "@/middleware/database";

interface CreateBasket {
    user?: 1;
    products: string[];
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const mongo = await connect();
    const baskets = mongo.db.collection("baskets")
    const basket = await req.body.json() as CreateBasket;
    const result = await baskets.insertOne({ ...basket, user: 1 })
    res.status(201).json({ id: result.insertedId })
}

export default handler;