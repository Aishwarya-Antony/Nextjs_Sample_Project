import React, {useEffect} from 'react';
import '../styles/globals.css'
import LoginLayout from "../layouts/LoginLayout";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const Layout = Component.Layout || LoginLayout
  return (   
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
