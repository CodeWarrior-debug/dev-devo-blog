// import "tailwindcss/tailwind.css";

import "bootstrap/dist/css/bootstrap.min.css"; 
import "../styles/globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head"
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

config.autoAddCss = false;  // Tell Font Awesome to skip adding the CSS automatically since it's already imported above

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
  <RecoilRoot>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </RecoilRoot>
  )

}
