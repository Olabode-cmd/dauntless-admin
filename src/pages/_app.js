import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import DashboardLayout from '../dashboard/layout';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default MyApp;
