import { NextApiRequest, NextApiResponse } from "next";
import connect from "@/middleware/database";
import type { Products } from "@/client/hotprices";
import { getProducts } from "@/client/hotprices";

interface BasketPreferences {
    products: string[];
}

interface RecommendedBasket {
    products: Products;
    totalPrice: number;
}

export interface MyBasket {
    prefs: BasketPreferences,
    recommended: RecommendedBasket;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const mongo = await connect();
    const baskets = mongo.db.collection("baskets")

    const prefs = await baskets.findOne();
    if (!prefs) {
        return res.status(404);
    }

    let totalPrice = 0;
    let suggestedProducts: Products = []
    prefs.products.forEach(async (name: string) => {
        const products = await getProducts(name);
        if (!products || !products.length) {
            return;
        }
        const cheapest = products[0]
        totalPrice = totalPrice + cheapest.price
        suggestedProducts.push(cheapest)
    })

    return res.json({
        prefs,
        recommended: {
            products: suggestedProducts,
            totalPrice,
        }
    })
}