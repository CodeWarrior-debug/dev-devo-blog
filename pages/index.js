import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

// TODO change font
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>A Developer&apos;s Devotions and Doings</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className='text-black grid place-items-center min-h-screen bg-blue-600 p-[8em] border-slate-800 '>
        
          <div className=' bg-[#FFFEF2] min-h-[80vw] min-w-[60vw] flex flex-col items-center p-[2em] rounded-2xl'>
            Something in the way
          </div>
          </div>
              </main>
    </>
  )
}
