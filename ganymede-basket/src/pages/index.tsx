import { Inter } from 'next/font/google'
import Shoplist from '@/components/shoplist/Shoplist'
import BottomNav from '@/components/footer/BottomNav';
import RecipeList from '@/components/recipes/RecipeList';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="mt-20 mb-20 container px-4">
        <div className='title mb-4 font-bold text-lg'>
          Home
        </div>
        <RecipeList></RecipeList>
      </div>

      <BottomNav activePage='home'></BottomNav>
    </main>
  )
}
