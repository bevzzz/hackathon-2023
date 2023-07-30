import { useState } from "react";

type Props = {
    handleAddIngredient: (name: string) => void
}

export default function Autocompleter({ handleAddIngredient }: Props): JSX.Element {
    const [text, setText] = useState<string>('');

    const handleAdd = () => {
        handleAddIngredient(text);
        setText("");
    }
    return (
        <div className='mt-2 mb-4 flex bg-slate-200 rounded-xl'>
            <input
                value={text}
                onKeyDown={(event: any) => {
                    if (event.key === "Enter") {
                        handleAdd()
                    }
                }}
                onChange={e => setText(e.target.value)}
                type="text"
                placeholder='Product search string'
                className='autocomplete-input' />
            <button
                onClick={handleAdd}
                className='m-auto pr-4 pl-2'
            >
                +
            </button>
        </div>
    )
}