import { useState } from "react";

export default function Autocompleter(props: { addItem: Function }): JSX.Element {
    const [text, setText] = useState('');
    const handleAdd = () => {
        props.addItem(text);
        setText("");
    }
    return (
        <div className='mt-2 mb-4 flex bg-slate-200 rounded-xl'>
            <input
                value={text}
                onKeyDown={(event: any) => {
                    if (event.key === "Enter") handleAdd()
                }}
                onChange={e => setText(e.target.value)}
                type="text"
                placeholder='Name of Product...'
                className='autocomplete-input' />
            <button
                onClick={() => handleAdd()}
                className='m-auto pr-4 pl-2'
            >
                +
            </button>
        </div>
    )
}