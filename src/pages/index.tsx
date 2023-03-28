import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Poppins } from 'next/font/google';

import '../services/firebase';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className='text-2xl'>Hello World</h1>
  )
}