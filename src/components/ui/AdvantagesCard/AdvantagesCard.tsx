import { FC } from 'react';
import styled, { css } from 'styled-components';

import { ScreenSize } from '@common/enums/ScreenSize';
import { Div } from '@components/grid/Div/Div';

interface IProps {
  className?: string;
  imageProps: {
    url: string;
    top?: number;
    right?: number;
  };
}

export const AdvantagesCard: FC<IProps> = ({
  className,
  imageProps: { url, top = 40, right = -80 },
  children,
}) => (
  <SAdvantageCard className={className} background={url}>
    <SIcon src={url} top={top} right={right} />
    <Div padding={[30, 50]}>{children}</Div>
  </SAdvantageCard>
);

const SIcon = styled.img<{
  top: number;
  right: number;
}>(
  ({ top, right }) => css`
    position: absolute;
    height: 150%;
    width: 50%;
    top: ${top}px;
    right: ${right}px;

    @media (max-width: ${ScreenSize.TABLET}px) {
      right: ${right + 30}px;
      top: ${top - 5}px;
    }
  `,
);

const SAdvantageCard = styled.div<{ background: string }>`
  position: relative;
  background: #151515;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.52);
  border-radius: 15px;
  overflow: hidden;
  max-width: 500px;
  min-height: 240px;
  z-index: 0;
`;
