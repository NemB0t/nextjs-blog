// `pages/_app.js`
import '../../nextjs-blog/styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}