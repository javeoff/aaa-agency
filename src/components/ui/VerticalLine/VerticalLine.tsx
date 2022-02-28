import { FC } from 'react';
import styled, { css } from 'styled-components';

export const VerticalLine: FC = () => (
  <>
    <SVerticalLine>
      {/* #7928ca, #ff0080 */}
      <SRound percentPosition={0} gradient={['#b6b6b6', '#f384b8']}>
        1
      </SRound>
      <SRound percentPosition={50} gradient={['#ff0080', '#7928ca']}>
        2
      </SRound>
      <SRound percentPosition={100} gradient={['#7928ca', '#ff0080']}>
        3
      </SRound>
    </SVerticalLine>
  </>
);

const SVerticalLine = styled.div`
  position: relative;
  height: 100%;
  width: 1px;
  background: linear-gradient(180deg, #d7d7d7, #7928ca);
  z-index: 1;
`;

const SRound = styled.div<{
  percentPosition: number;
  gradient?: [string, string];
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  ${({ percentPosition, gradient }) =>
    css`
      top: ${percentPosition}%;
      background: linear-gradient(
        90deg,
        ${gradient ? gradient[0] : '#f5c148'},
        ${gradient ? gradient[1] : '#d47604'}
      );
    `}
`;
