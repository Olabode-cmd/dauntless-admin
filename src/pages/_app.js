// import Head from 'next/head';
import { SessionProvider } from "next-auth/react"
import 'tailwindcss/tailwind.css';
import NextNProgress from "nextjs-progressbar";
// import DashboardLayout from '../dashboard/AdminLayout';
import { ThemeProvider } from 'next-themes'
import Router from 'next/router'
import Head from 'next/head'
import './background.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import OneSignal from 'react-onesignal';

const signal = async() => {
  await OneSignal.init({
    appId: '7f189fd0-f26b-4a61-9a74-b43b014aa321', allowLocalhostAsSecureOrigin: true
  });
  OneSignal.showSlidedownPrompt();
}



// function MyApp({ Component, pageProps: { session, ...pageProps } }) {

function MyApp({ Component,  pageProps: { session, ...pageProps } }) {
  useEffect(()=> {
    AOS.init()
    AOS.refresh()
    signal()
  }, [])
  return (
    <SessionProvider session={session}>
    <NextNProgress
       color="#fba928"
       height={4}
    />
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  </SessionProvider>

  

  );
}

export default MyApp