import '@/styles/globals.css'

import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react' ;
import {SessionProvider} from "next-auth/react"

export default function App({ Component , pageProps} : AppProps){
  return (
  <>
  <SessionProvider session={pageProps.session}>
    <Component { ...pageProps}/>
  </SessionProvider>

    <Analytics/>
  </>
  )
}