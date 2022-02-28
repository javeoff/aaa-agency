import { FC } from 'react';

import { IAppProps } from '@common/types/next/IAppProps';
import { IAppContext } from '@common/types/next/IAppContext';
import { IAppInitialProps } from '@common/types/next/IAppInitialProps';

export type INextApp = FC<IAppProps> & {
  getInitialProps?(
    ctx: IAppContext,
  ): Promise<IAppInitialProps> | IAppInitialProps;
};
