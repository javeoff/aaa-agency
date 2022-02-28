import { INextApp } from '../common/types/next/INextApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

const App: INextApp = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
