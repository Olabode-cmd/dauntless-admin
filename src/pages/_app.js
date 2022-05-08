// import Head from 'next/head';
// import { SessionProvider } from "next-auth/react"
import 'tailwindcss/tailwind.css';
// import DashboardLayout from '../dashboard/AdminLayout';
import { ThemeProvider } from 'next-themes'
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // <SessionProvider session={session}>
    <ThemeProvider attribute="class">
      <Head>
        Import CSS for nprogress
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
    // </SessionProvider>

  );
}

export default MyApp;
