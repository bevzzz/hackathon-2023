import { Menu, MyRecipe, RecipeCalculated } from "@/types";

export async function createRecipe(r: MyRecipe): Promise<string> {
    const res = await fetch("/api/recipe", {
        method: "POST",
        body: JSON.stringify(r),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const recipe = await res.json();
    return recipe.id as string;
}

export async function getRecipe(id: string, store?: string, servings?: number): Promise<RecipeCalculated | null> {
    let search: Record<string, string> = {};
    if (store) {
        search = {...search, store};
    }
    if (servings) {
        search = {...search, servings: servings.toString() };
    }

    const res = await fetch(`/api/recipe/${id}?` + new URLSearchParams(search));
    if (!res || !res.ok) {
        return null;
    }
    return res.json().catch(() => (null));
}

export async function getMenu(store?: string, servings?: number): Promise<Menu> {
    let search: Record<string, string> = {};
    if (store) {
        search = {...search, store};
    }
    if (servings) {
        search = {...search, servings: servings.toString() };
    }

    const res = await fetch(`/api/recipes?` + new URLSearchParams(search));
    if (!res || !res.ok) {
        return [];
    }
    return res.json().catch(() => ([]));
}
