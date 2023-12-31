import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

type Props = {
    selected?: string;
    stores: string[];
    handleStoreChange: (s: string) => void;
}

const StoreSwitch = ({ selected, stores, handleStoreChange }: Props) => {
    return (
        <div className='flex justify-center'>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                {stores.map((name: string, idx: number) => {
                    const highlight = selected === name;
                    return <Button key={idx} className={highlight ? 'bg-teal-500 !border-white' : 'bg-teal-200 !border-white'} onClick={() => {
                        handleStoreChange(name)
                    }}>{name}</Button>
                })}
            </ButtonGroup>
        </div>
    )
}

export default StoreSwitch;     