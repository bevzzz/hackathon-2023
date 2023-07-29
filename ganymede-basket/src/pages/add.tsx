import { Inter } from 'next/font/google'
import Shoplist from '@/components/shoplist/Shoplist'
import BottomNav from '@/components/footer/BottomNav';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='fixed top-0 bg-[#03C9A9]/75 w-full h-14 text-white flex backdrop-blur-md'>
        <div className='m-auto text-2xl'>
          Ganymede
        </div>
      </div>
      <div className="mt-20 mb-20 container px-4">
        <Shoplist></Shoplist>
      </div>

      <BottomNav activePage='add'></BottomNav>
    </main>
  )
}
