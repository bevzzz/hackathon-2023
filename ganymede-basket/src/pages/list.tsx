import { Inter } from 'next/font/google'
import Shoplist from '@/components/shoplist/Shoplist'
import BottomNav from '@/components/footer/BottomNav';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="mt-20 mb-20 container px-4">
        <Shoplist></Shoplist>
      </div>

      <BottomNav activePage='list'></BottomNav>
    </main>
  )
}
