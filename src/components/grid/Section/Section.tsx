import styled, { css } from 'styled-components';

import { SectionTextAlign } from '@components/grid/Section/enums/SectionTextAlign';

interface IProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  fluid?: boolean;
  half?: boolean;
  topIn?: number;
  align?: SectionTextAlign;
}

export const Section = styled.div<IProps>`
  ${({ top, bottom, fluid, half, left, right, topIn, align }) => css`
    ${top &&
    css`
      margin-top: ${top}px;
    `}
    ${topIn &&
    css`
      & > *:not(:first-child) {
        margin-top: ${topIn}px;
      }
    `}
    ${bottom &&
    css`
      margin-bottom: ${bottom}px;
    `}
    ${left &&
    css`
      margin-left: ${left}px;
    `}
    ${right &&
    css`
      margin-right ${right}px;
    `}
    ${fluid &&
    css`
      width: 100%;
    `}
    ${half &&
    css`
      width: 50%;
    `}
    ${align === SectionTextAlign.CENTER &&
    css`
      text-align: center;
    `}
    ${align === SectionTextAlign.LEFT &&
    css`
      text-align: left;
    `}
    ${align === SectionTextAlign.RIGHT &&
    css`
      text-align: right;
    `}
  `}
`;
