import { Product, SearchOptions, getProducts } from "./client/hotprices";
import { Ingredient, IngredientCalculated, MyRecipeDb, RecipeCalculated } from "@/types"


const asyncEvery = async (arr: Array<any>, predicate: (x: any) => Promise<boolean>) => {
	for (let e of arr) {
		if (!await predicate(e)) return false;
	}
	return true;
};


/** adjustPriceToServings returns the number of items required for the recipe and the total cost of their purchase */
function adjustPriceToServings(p: Product, ingr: Ingredient, r: MyRecipeDb, wantServings: number): IngredientCalculated {
    const sizeFactor = wantServings / r.servings;
    const wantQuantity = ingr.quantity * sizeFactor;
    const items = Math.ceil(wantQuantity / p.quantity);
    return {
        product: p,
        items,
        price: p.price * items,
    }
};

/** calculateRecipeCosts calculates the total cost of the recipe based on the current price levels,
 * product preferences and their availability. */
export async function calculateRecipeCost(r: MyRecipeDb, wantServings: number, store?: string): Promise<RecipeCalculated> {
    let ingredients: IngredientCalculated[] = [];
    let totalPrice = 0;

    const complete = await asyncEvery(r.ingredients, async (ingr: Ingredient): Promise<boolean> => {
        let search = ingr.searchTerm;
        let options: SearchOptions = {
            quantity: ingr.quantity,
            unit: ingr.unit,
        };
        if (store) {
            const pref = ingr.prefs?.[store];
            if (pref) {
                search = pref.name
                options = {...pref}
            }
        }

        const products = await getProducts(search, options)
        if (!products || !products.length) {
            console.log("incomplete")
            return false;
        }
        const product = products[0];
        const ingrAdjusted = adjustPriceToServings(product, ingr, r, wantServings);

        ingredients.push(ingrAdjusted);
        totalPrice = totalPrice + ingrAdjusted.price
        return true;
    });

    if (!complete) {
        return {
            ...r,
            id: r._id.toString(),
            servings: wantServings,
            ingredients: [],
            complete: false,
            saved: r,
        }
    }
    
    return {
        ...r,
        id: r._id.toString(),
        servings: wantServings,
        ingredients,
        totalPrice,
        complete: true,
        saved: r,
    }
}
