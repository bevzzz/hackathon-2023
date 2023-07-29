import Image from 'next/image'
import { Inter } from 'next/font/google'

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
        <div className='shop-list'>
          <div className='title font-bold text-lg'>
            Shoplist
          </div>
          <div className='list-container pt-3'>
            <div className='shop-list-item'>
              <span><span>1x </span>Brot</span>
              <div className='flex justify-between w-24 text-gray-500'>
                <span className='text-black'>stk</span>
                <span>Kg</span>
                <span>liter</span>
              </div>
              <div className='pr-2 flex justify-between w-12 text-gray-500'>
                <span>-</span>
                <span>|</span>
                <span>+</span>
              </div>
            </div>
            <div className='shop-list-item'>
              Eier
            </div>
            <div className='shop-list-item'>
              Milch
            </div>
          </div>
          <div className='mt-6 flex bg-slate-200 rounded-xl'>
            <input type="text" placeholder='Name of Product...' className='autocomplete-input'></input>
            <button className='m-auto pr-4 pl-2'>+</button>
          </div>
        </div>
      </div>
    </main >
  )
}
