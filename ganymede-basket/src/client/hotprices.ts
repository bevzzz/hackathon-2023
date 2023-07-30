import connect from "@/middleware/database";

type Category =  "fruitsAndVegetables" |
    "backedGoods" | 
    "drinks" |
    "refrigerated" |
    "frozen" |
    "staple" |
    "sweetAndSalty" |
    "careProducts" |
    "household" |
    "other"

export type Unit = "g" |
    "stk" |
    "ml"

export interface Product {
    name: string;
    store: string;
    price: number;
    quantity: number;
    unit: string;
    url: string;
    category: Category;
}

export type Products = Product[];

export interface SearchOptions {
    category?: Category;
    store?: string;
    quantity: number;
    unit: string;
}

export const supermarketChains = [
    "billa", "dm", "lidl", "spar", "penny", 
    // "dmDe", "hofer", "mpreis", "sparSi", "unimarkt", "reweDe", "penny", "mueller", "muellerDe", "bipa",
];

export const getProducts = async (name: string, options?: SearchOptions): Promise<Products> => {
    const mongo = await connect();
    const products = mongo.db.collection("products")

    let filters: Record<string, any> = {
        name: { $regex: new RegExp(name) },
    };

    if (options?.unit) {
        filters = {
            ...filters,
            unit: options?.unit,
        };
    }

    if (options?.store) {
        filters = {
            ...filters,
            store: options?.store,
        };
    }

    const res = await products.find(filters)
    .project({ priceHistory: false, description: false })
    .toArray() as unknown as Products;
    
    if (!res.length) {
        return [];
    }
    return res;
}

// {
// "store": "unimarkt",
// "id": "116754",
// "name": "ültje Erdnüsse geröstet & gesalzen 180g Erdnüsse geröstet & gesalzen",
// "price": 3.19,
// "priceHistory": [
//     {
//     "date": "2023-06-22",
//     "price": 3.19
//     },
//     {
//     "date": "2023-05-29",
//     "price": 2.89
//     }
// ],
// "quantity": 180,
// "unit": "g",
// "bio": false,
// "url": "/ueltje-Erdnuesse-geroestet---gesalzen-180g-116754",
// "category": "03"
// }