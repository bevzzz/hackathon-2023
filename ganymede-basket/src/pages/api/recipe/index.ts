import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import connect from "@/middleware/database";
import { MyRecipe } from "@/types"

const router = createRouter<NextApiRequest, NextApiResponse>()
    .post(async (req, res: NextApiResponse<{id: string}>) => {
        const mongo = await connect();
        const recipes = mongo.db.collection("recipes");

        const {body: recipe} = req;
        if (!recipe) {
            res.status(400).end();
            return;
        }
        const result = await recipes.insertOne(recipe);
        res.status(201).json({ id: result.insertedId.toString() });
    });

// export const config = {
//     runtime: "edge",
// };

export default router.handler({
    onError(error, _req, res) {
        console.log(error)
        res.status(500).end("Internal Server Error")
    },
});