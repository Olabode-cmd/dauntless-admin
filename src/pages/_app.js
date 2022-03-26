import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import DashboardLayout from '../dashboard/AdminLayout';
import { ThemeProvider } from 'next-themes'
// import 'flowbite';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
