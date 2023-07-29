import { useState } from "react";
import Autocompleter from "../autocompleter/Autocompleter";
import ListItem from "./ListItem";

export default function Shoplist(): JSX.Element {
    const [items, setItems] = useState<Array<string>>([]);

    const handleRemoveItem = (idx: number) => {
        // assigning the list to temp variable
        const temp = [...items];

        // removing the element using splice
        temp.splice(idx, 1);

        // updating the list
        setItems(temp);
    };

    const addItem = (name: string) => {
        if (name.length < 2) return;
        const tempItems = [...items];
        tempItems.push(name);
        setItems(tempItems);
    }
    return (
        <div className='shop-list'>
            <div className='title font-bold text-lg'>
                Basket
            </div>
            <Autocompleter addItem={addItem}></Autocompleter>
            <div className='list-container pt-3'>
                {
                    items.map((item, index) =>
                        <div key={index} className="flex">
                            <ListItem name={item}></ListItem>
                            <span onClick={() => handleRemoveItem(index)} className="ml-2 px-2 text-white my-auto rounded-2xl bg-red-500">-</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}