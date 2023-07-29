import Image from 'next/image'
import { Inter } from 'next/font/google'
import Shoplist from '@/components/shoplist/Shoplist'

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
    </main >
  )
}
