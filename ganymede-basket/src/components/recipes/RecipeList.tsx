export default function RecipeList(): JSX.Element {
    return (
        <div className='drop-shadow-md p-4 bg-white rounded-md'>
            <div className='font-bold mb-2'>
                Recipe one
            </div>
            <div>
                <div className='flex justify-between'>
                    <span>nöm vollmilch</span>
                    <span>1,79€</span>
                </div>
                <div className='flex justify-between'>
                    <span>6x Eier</span>
                    <span>3,19€</span>
                </div>
                <div className='flex justify-between'>
                    <span>Gouda</span>
                    <span>2,79€</span>
                </div>
            </div>
            <div className='flex justify-end gap-4 font-bold'>
                <span>Summe: </span><span>8,29€</span>
            </div>
        </div>
    )
}