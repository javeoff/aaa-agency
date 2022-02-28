import { AppContext } from 'next/app';
import {
  NextComponentType,
  NextPageContext,
} from 'next/dist/next-server/lib/utils';

import { IPageProps } from '@common/types/next/IPageProps';

export interface IAppContext extends Omit<AppContext, 'Component'> {
  ctx: NextPageContext;
  Component: Omit<NextComponentType, 'getInitialProps'> & {
    getInitialProps?(
      context: NextPageContext,
    ): Promise<IPageProps> | IPageProps;
  };
}
