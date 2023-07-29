import Autocompleter from "../autocompleter/Autocompleter";
import ListItem from "./ListItem";

export default function Shoplist(): JSX.Element {
    return (
        <div className='shop-list'>
            <div className='title font-bold text-lg'>
                Shoplist
            </div>
            <div className='list-container pt-3'>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
            </div>
            <Autocompleter></Autocompleter>
        </div>
    )
}