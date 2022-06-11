// import Head from 'next/head';
import { SessionProvider } from "next-auth/react"
import 'tailwindcss/tailwind.css';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

// import DashboardLayout from '../dashboard/AdminLayout';
import { ThemeProvider } from 'next-themes'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import './background.css';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// function MyApp({ Component, pageProps: { session, ...pageProps } }) {

function MyApp({ Component,  pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
    <ThemeProvider attribute="class">
      <Head>
        Import CSS for nprogress
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>

      <TawkMessengerReact
        propertyId="62a3f92c7b967b117993f16e"
        widgetId="1g588alp4" />
  </SessionProvider>

  

  );
}

export default MyApp