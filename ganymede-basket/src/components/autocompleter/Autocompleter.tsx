import { useState } from "react";

export default function Autocompleter(props: { addItem: Function }): JSX.Element {
    const [text, setText] = useState('');
    return (
        <div className='mt-2 mb-4 flex bg-slate-200 rounded-xl'>
            <input value={text} onKeyDown={(event: any) => { if (event.key === "Enter") props.addItem(text) }} onChange={e => setText(e.target.value)} type="text" placeholder='Name of Product...' className='autocomplete-input'></input>
            <button onClick={() => props.addItem(text)} className='m-auto pr-4 pl-2'>+</button>
        </div>
    )
}