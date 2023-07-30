import { Inter } from 'next/font/google'
import BottomNav from '@/components/footer/BottomNav';
import StoreSwitch from '@/components/shoplist/StoreSwitch';
import { useEffect, useState } from 'react';
import { Menu } from '@/types';
import { getMenu } from '@/client/cookbook';
import RecipeCard from '@/components/shoplist/RecipeCard';

const inter = Inter({ subsets: ['latin'] })

export const supermarketChains = [
  "billa", "dm", "lidl", "spar", "penny", 
];

export default function Home() {
  const [store, setStore] = useState<string | undefined>();
  const [menu, setMenu] = useState<Menu>([]);

  const fetchMenu = async () => setMenu(await getMenu(store));
  useEffect(() => {
    fetchMenu();
  }, [store]);

  return (
    <main>
      <div className="mt-20 mb-20 container px-4">
        <div className='title mb-4 font-bold text-lg'>
          Home
        </div>
      </div>
      <StoreSwitch selected={store} stores={supermarketChains} handleStoreChange={(s: string) => setStore(s)} />
      <div className='grid-cols-2'>
        {menu.map((recipe, idx) => {
          return <RecipeCard key={idx} recipe={recipe} />
        })}
      </div>
      <BottomNav activePage='home'></BottomNav>
    </main>
  )
}
