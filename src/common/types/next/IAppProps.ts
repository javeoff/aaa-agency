import { AppProps } from 'next/app';

import { IAppInitialProps } from '@common/types/next/IAppInitialProps';
import { IPageProps } from '@common/types/next/IPageProps';

export type IAppProps = Omit<AppProps<IPageProps>, 'pageProps'> &
  IAppInitialProps;
