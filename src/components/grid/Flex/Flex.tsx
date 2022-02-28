import styled, { css } from 'styled-components';

import { FlexAlignItems } from '@components/grid/Flex/enums/FlexAlignItems';
import { FlexJustifyContent } from '@components/grid/Flex/enums/FlexJustifyContent';
import { FlexDirection } from '@components/grid/Flex/enums/FlexDirection';

interface IProps {
  alignItems?: FlexAlignItems;
  justifyContent?: FlexJustifyContent;
  direction?: FlexDirection;
  grow?: number;
  isInline?: boolean;
  isWrap?: boolean;
  margin?: number;
  fluid?: boolean;
  center?: boolean;
}

export const Flex = styled.div<IProps>(
  ({
    alignItems,
    justifyContent,
    direction,
    grow,
    isInline,
    isWrap,
    margin,
    fluid,
    center,
  }) => css`
    display: ${isInline ? 'inline-flex' : 'flex'};
    flex-wrap: ${isWrap ? 'wrap' : 'nowrap'};

    ${fluid &&
    css`
      width: 100%;
    `}
    ${alignItems &&
    css`
      align-items: ${alignItems};
    `}

    ${justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}

    ${direction &&
    css`
      flex-direction: ${direction};
    `}

    ${grow &&
    css`
      flex-grow: ${grow};
    `}

    ${margin &&
    css`
      & > *:not(:first-child) {
        margin-left: ${margin}px;
      }
    `}
    
    ${center &&
    css`
      margin: 0 auto;
    `}
  `,
);
