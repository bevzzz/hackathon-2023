import { ChangeEvent, useState } from "react";
import Autocompleter from "../autocompleter/Autocompleter";
import ListItem from "./ListItem";
import CheckIcon from '@mui/icons-material/Check';
import { useRouter } from "next/router";
import { createRecipe } from "@/client/cookbook";
import { Ingredient } from "@/types";

export default function Shoplist(): JSX.Element {
    const router = useRouter();

    const [title, setTitle] = useState<string>("");
    const [servings, setServings] = useState<number>(1);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    const handleAddIngredient = (name: string) => {
        setIngredients([...ingredients, {
            searchTerm: name,
            quantity: 1,
            unit: "stk",
        }])
    };

    const handleEditIngredient = (idx: number, ingr: Ingredient) => {
        const temp = [...ingredients];
        temp.splice(idx, 1, ingr);
        setIngredients(temp);
    };

    const handleDeleteIngredient = (idx: number) => {
        const temp = [...ingredients];
        temp.splice(idx, 1);
        setIngredients(temp);
    };

    const handleCreateRecipe = async () => {
        if (!ingredients.length) {
            return;
        }

        await createRecipe({
            name: title,
            ingredients,
            servings: servings,
        });
        router.replace("/");
    };

    const [items, setItems] = useState<Array<string>>([]);
    const addItem = (name: string) => {
        if (name.length < 2) return;
        const tempItems = [...items];
        tempItems.push(name);
        setItems(tempItems);
    }
    return (
        <div className='shop-list'>
            <input placeholder="Title" type="text" value={title} className="autocomplete-input mt-2 mb-6" onChange={(e) => {
                setTitle(e.target.value);
            }}></input>
            <div className="flex">
                <span className="flex">
                    Number of servings:
                    <span className="px-2"> {servings} </span>
                    <div className='pl-4 pr-2 flex gap-4 justify-between w-12 text-gray-500'>
                        <span onClick={() => { setServings(Math.max(1, servings - 1)) }}>-</span>
                        <span>|</span>
                        <span onClick={() => { setServings(servings + 1) }}>+</span>
                    </div>
                </span>
            </div>
            <Autocompleter handleAddIngredient={handleAddIngredient}></Autocompleter>
            <div className='list-container pt-3'>
                {
                    ingredients.map((ingr, idx) =>
                        <div key={idx} className="flex">
                            <ListItem ingredient={ingr} handleEdit={(i: Ingredient) => {
                                handleEditIngredient(idx, i);
                            }} />
                            <span onClick={() => handleDeleteIngredient(idx)} className="ml-2 px-2 text-white my-auto rounded-2xl bg-red-500">-</span>
                        </div>
                    )
                }
            </div>
            <div className="fixed bottom-20 left-0 justify-center w-full flex">
                <span className="px-6 py-2 rounded-2xl bg-[#027e6a]" onClick={handleCreateRecipe}><CheckIcon htmlColor="white"></CheckIcon></span>
            </div>
        </div>
    )
}