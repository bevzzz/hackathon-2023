import { Inter } from 'next/font/google'
import Shoplist from '@/components/shoplist/Shoplist'
import BottomNav from '@/components/footer/BottomNav';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="mt-20 mb-44 container px-4">
        <div className='font-bold text-lg'>
          New recipe
        </div>
        <Shoplist></Shoplist>
      </div>

      <BottomNav activePage='add'></BottomNav>
    </main>
  )
}
