import styled, { css } from 'styled-components';
import { FC } from 'react';

import { TGradientColor } from '@components/base/GradientCard/types/TGradientColor';
import { ScreenSize } from '@common/enums/ScreenSize';

interface IProps {
  color: TGradientColor;
  count: string;
}

export const GradientCard: FC<IProps> = ({ color, count, children }) => (
  <SGradientCard>
    <SCount color={color}>{count}</SCount>
    {children}
  </SGradientCard>
);

const SCount = styled.div<{
  color: TGradientColor;
}>`
  text-align: center;
  font-size: 2.5em;
  font-weight: 700;

  ${({ color }) =>
    color === 'pink' &&
    css`
      background: linear-gradient(45deg, #7928ca, #ff0080);
    `}

  ${({ color }) =>
    color === 'yellow' &&
    css`
      background: linear-gradient(45deg, #f5c148, #d47604);
    `}

  ${({ color }) =>
    color === 'blue' &&
    css`
      background: linear-gradient(45deg, #007cf0, #00dfd8);
    `}
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SGradientCard = styled.div`
  min-height: 200px;
  height: 100%;
  border-radius: 30px;
  padding: 30px 50px;
  text-align: center;
  background: rgba(36, 36, 36, 0.2);
  color: rgba(234, 238, 244, 0.8);

  @media (max-width: ${ScreenSize.TABLET}px) {
    margin-top: 30px;
  }
`;
