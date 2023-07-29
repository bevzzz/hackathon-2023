const getQuery = (search: string): string => {
    return `https://heisse-preise.io/?f=-;-;-;-;-;-;-;-;-;-;-;-;-;-;100;0;-;2023-07-29;.;.;.;${search}&l=-;.;price-asc;-&c=2023-07-29;-;-;2017-01-01;-;-&d=`
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
// },

export interface Product {
    name: string;
    store: string;
    price: number;
    quantity: number;
    unit: string;
    url: string;
}

export type Products = Product[];

export const getProducts = async (name: string): Promise<Products> => {
    const query = getQuery(name)
    const res = await fetch(query)
    const products: Products = await res.json();
    return products;
}