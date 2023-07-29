import { Inter } from 'next/font/google'
import Shoplist from '@/components/shoplist/Shoplist'
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='fixed top-0 bg-[#03C9A9] w-full h-12 text-white flex'>
        <div className='m-auto text-lg'>
          Ganymede
        </div>
      </div>
      <div className="mt-14 container px-4">
        <Shoplist></Shoplist>
      </div>
      <div className='fixed w-full bottom-4 flex justify-center'>
        <div className='bg-[#04fbd3] p-3 rounded-xl flex gap-4 drop-shadow-lg'>
          <HomeIcon htmlColor='white'></HomeIcon>
          <AddIcon htmlColor='grey'></AddIcon>
          <ListIcon htmlColor='grey'></ListIcon>
        </div>
      </div>
    </main>
  )
}
