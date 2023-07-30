import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

type Props = {
    selected?: string;
    stores: string[];
    handleStoreChange: (s: string) => void;
}

const StoreSwitch = ({selected, stores, handleStoreChange}: Props) => {
    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            {stores.map((name: string, idx: number) => {
            const highlight = selected === name;
                return <Button key={idx} className={highlight ? 'bg-teal-500' : 'bg-teal-200'} onClick={() => {
                    handleStoreChange(name)
                }}>{name}</Button>
            })}
        </ButtonGroup>
    )
}

export default StoreSwitch;     