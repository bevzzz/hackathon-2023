import { Product } from "@/client/hotprices";
import { ObjectId } from "mongodb";

/** Ingredient describes the amount of certain product that's needed for a recipe */
export interface Ingredient {
    searchTerm: string;
    quantity: number;
    unit: string;
    prefs?: Record<string, Product>
}

/** 
 * MyRecipe lists the ingredients necessary for making a number of servings.
 * Ingredients may be specific products or generic search terms.
*/
export interface MyRecipe {
    name: string;
    ingredients: Ingredient[];
    servings: number;
}

/** MyRecipeDb represents a unique recipe stored in the database. */
export interface MyRecipeDb extends MyRecipe {
    _id: ObjectId;
}

/** IngredientCalculated stores the exact product that should be purchased, its quantity, and total price. */
export interface IngredientCalculated {
    product: Product;
    items: number;
    price: number;
};

/** 
 * RecipeCalculated lists suggested ingridients that are required to prepare a recipe for the given number of servings,
 * their respective amounts and the total price of the recipe.
*/
export interface RecipeCalculated {
    id: string;
    name: string;
    servings: number;
    ingredients: IngredientCalculated[];
    totalPrice?: number;
    complete: boolean;
    saved: MyRecipe;
};

/** Menu is a list of all recipes created by the user. */
export type Menu = RecipeCalculated[];