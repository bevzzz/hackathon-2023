export default function Autocompleter(): JSX.Element {

    return (
        <div className='mt-6 flex bg-slate-200 rounded-xl'>
            <input type="text" placeholder='Name of Product...' className='autocomplete-input'></input>
            <button className='m-auto pr-4 pl-2'>+</button>
        </div>
    )
}