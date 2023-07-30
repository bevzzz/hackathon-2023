import { Unit } from "@/client/hotprices";
import { Ingredient } from "@/types";

type Props = {
    ingredient: Ingredient;
    handleEdit: (ingr: Ingredient) => void;
}

export default function ListItem({ ingredient, handleEdit }: Props): JSX.Element {
    const handleCountChange = (n: number) => {
        handleEdit({ ...ingredient, quantity: Math.max(1, n) });
    };
    
    const handleUnitChange = (u: Unit) => {
        handleEdit({ ...ingredient, unit: u });
    };

    return (
        <div className='shop-list-item'>
            <span className="max-w-[50px]"><span>{ingredient.quantity}x </span>{ingredient.searchTerm}</span>
            <div className='flex justify-between w-36 text-gray-500'>
                <span className={`${ingredient.unit === "stk" ? "text-black" : ""}`} onClick={() => handleUnitChange("stk")}>Stk</span>
                <span className={`${ingredient.unit === "g" ? "text-black" : ""}`} onClick={() => handleUnitChange("g")}>Gr</span>
                <span className={`${ingredient.unit === "kg" ? "text-black" : ""}`} onClick={() => handleUnitChange("kg")}>Kg</span>
                <span className={`${ingredient.unit === "L" ? "text-black" : ""}`} onClick={() => handleUnitChange("L")}>Liter</span>
            </div>
            <div className='pr-2 flex justify-between w-36 text-gray-500'>
                <input type="number" className="mr-6 max-w-[60px] max-h-[25px]" value={ingredient.quantity} onChange={(e) => {
                    handleCountChange(Number(e.target.value))
                }}></input>
                <div className='pr-2 flex justify-between w-24 text-gray-500'>
                    <span onClick={() => { handleCountChange(ingredient.quantity - 1) }}>-</span>
                    <span>|</span>
                    <span onClick={() => { handleCountChange(ingredient.quantity + 1) }}>+</span>
                </div>
            </div>
        </div>
    )
}