import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import connect from "@/middleware/database";
import { ObjectId } from "mongodb";
import { MyRecipeDb, RecipeCalculated } from "@/types"
import { calculateRecipeCost } from "@/recipe";

const router = createRouter<NextApiRequest, NextApiResponse>()
    .get(async (req, res: NextApiResponse<RecipeCalculated>) => {
        const mongo = await connect();
        const recipes = mongo.db.collection("recipes")

        const { id: idQuery } = req.query;
        const id = Array.isArray(idQuery) ? idQuery[0] : idQuery
        if (!idQuery) {
            res.status(404);
        }
        
        const recipe = await recipes.findOne({_id: new ObjectId(id)}) as unknown as MyRecipeDb;
        if (!recipe) {
            res.status(404)
        }

        const {store: storeQuery, servings: servingsQuery} = req.query;
        let store: string | undefined = Array.isArray(storeQuery) ? storeQuery[0] : storeQuery;
        
        let servings = 1;
        if (servingsQuery) {
            const servingsString = Array.isArray(servingsQuery) ? servingsQuery[0] : servingsQuery;
            servings = Number(servingsString);
        }
        
        const result = await calculateRecipeCost(recipe, servings, store);
        res.json(result)
    });

export default router.handler({
    onError(error, _req, res) {
        console.log(error)
        res.status(500).end("Internal Server Error")
    },
});