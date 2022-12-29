import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";
import Footer from '../components/Footer';

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </SessionProvider>

  )
}
