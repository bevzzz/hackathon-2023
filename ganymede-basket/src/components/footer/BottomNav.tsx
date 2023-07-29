import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import Link from 'next/link';

type TPage = "home" | "add" | "list";

export default function BottomNav(props: { activePage: TPage }): JSX.Element {
    return (
        <div className='fixed w-full bottom-4 flex justify-center'>
            <div className='bg-[#04fbd3] p-3 rounded-xl flex gap-4 drop-shadow-lg'>
                <Link href="/"><HomeIcon htmlColor={props.activePage === "home" ? 'white' : 'grey'}></HomeIcon></Link>
                <Link href="/add"><AddIcon htmlColor={props.activePage === "add" ? 'white' : 'grey'}></AddIcon></Link>
                <Link href="/list"><ListIcon htmlColor={props.activePage === "list" ? 'white' : 'grey'}></ListIcon></Link>
            </div>
        </div>
    )
}