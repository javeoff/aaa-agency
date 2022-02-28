import { FC } from 'react';
import styled, { css } from 'styled-components';

import { TButtonType } from '@components/ui/Button/types/TButtonType';
import { TButtonSize } from '@components/ui/Button/types/TButtonSize';

interface IProps {
  buttonType?: TButtonType;
  buttonSize?: TButtonSize;
  className?: string;
  fluid?: boolean;
  onClick?(): void;
}

export const Button: FC<IProps> = ({
  buttonType = 'default',
  buttonSize = 'md',
  className,
  fluid,
  onClick,
  children,
}) => (
  <SButton
    className={className}
    buttonType={buttonType}
    buttonSize={buttonSize}
    fluid={fluid}
    onClick={onClick}
  >
    {children}
  </SButton>
);

const SButton = styled.button<{
  buttonType?: TButtonType;
  buttonSize?: TButtonSize;
  fluid?: boolean;
}>(
  ({ buttonType, buttonSize, fluid }) => css`
    ${buttonType === 'default' &&
    css`
      background: #fff;
      border: 1px solid transparent;
      padding: 8px 40px;
      font-size: 1.1em;
      border-radius: 5px;
      transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;

      &:hover {
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
      }
    `}

    ${buttonType === 'outline' &&
    css`
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: rgba(255, 255, 255, 0.5);
      padding: 8px 40px;
      font-size: 1.1em;
      border-radius: 5px;
      transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;

      &:hover {
        border: 1px solid #fff;
        color: #fff;
      }
    `}

    ${buttonSize === 'sm' &&
    css`
      padding: 8px 20px;
      font-size: 0.9em;
    `}
    
    ${fluid &&
    css`
      max-width: 100%;
      width: 100%;
    `}
  `,
);
