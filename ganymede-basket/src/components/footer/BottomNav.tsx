import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';

type TPage = "home" | "add" | "list";

export default function BottomNav(props: { activePage: TPage }): JSX.Element {
    return (
        <div className='fixed w-full bottom-4 flex justify-center'>
            <div className='bg-[#04fbd3] p-3 rounded-xl flex gap-4 drop-shadow-lg'>
                <HomeIcon htmlColor={props.activePage === "home" ? 'white' : 'grey'}></HomeIcon>
                <AddIcon htmlColor={props.activePage === "add" ? 'white' : 'grey'}></AddIcon>
                <ListIcon htmlColor={props.activePage === "list" ? 'white' : 'grey'}></ListIcon>
            </div>
        </div>
    )
}