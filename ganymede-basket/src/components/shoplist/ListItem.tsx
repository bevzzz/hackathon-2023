import { useState } from "react";

type TUnit = "stk" | "Kg" | "liter";

export default function ListItem(props: { name: string }): JSX.Element {
    const [count, setCount] = useState<number>(1);
    const [unit, setUnit] = useState<TUnit>("stk");

    return (
        <div className='shop-list-item'>
            <span><span>{count}x </span>{props.name}</span>
            <div className='flex justify-between w-24 text-gray-500'>
                <span className={`${unit === "stk" ? "text-black" : ""}`}>stk</span>
                <span className={`${unit === "Kg" ? "text-black" : ""}`}>Kg</span>
                <span className={`${unit === "liter" ? "text-black" : ""}`}>liter</span>
            </div>
            <div className='pr-2 flex justify-between w-12 text-gray-500'>
                <span onClick={() => { if (count > 1) setCount(count - 1) }}>-</span>
                <span>|</span>
                <span onClick={() => { setCount(count + 1) }}>+</span>
            </div>
        </div>
    )
}