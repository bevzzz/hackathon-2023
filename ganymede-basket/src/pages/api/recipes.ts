import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import connect from "@/middleware/database";
import { MyRecipeDb, Menu, RecipeCalculated } from "@/types"
import { calculateRecipeCost } from "@/recipe";


const router = createRouter<NextApiRequest, NextApiResponse>()
    .get(async (req, res: NextApiResponse<Menu>) => {
        const mongo = await connect();
        const recipes = mongo.db.collection("recipes")

        const all = await recipes.find({}).toArray() as unknown as MyRecipeDb[];
        if (!all.length) {
            res.status(200).json([]);
            return;
        }

        const {store: storeQuery, servings: servingsQuery} = req.query;
        let store: string | undefined = Array.isArray(storeQuery) ? storeQuery[0] : storeQuery;

        let servings = 1;
        if (servingsQuery) {
            const servingsString = Array.isArray(servingsQuery) ? servingsQuery[0] : servingsQuery;
            servings = Number(servingsString);
        }

        const menu: Menu = await Promise.all(
            all.map(async (r: MyRecipeDb): Promise<RecipeCalculated> => {
                const result = await calculateRecipeCost(r, servings, store);
                return result;
            })
        );

        res.json(menu);
    });

export default router.handler({
    onError(error, _req, res) {
        console.log(error)
        res.status(500).end("Internal Server Error")
    },
});