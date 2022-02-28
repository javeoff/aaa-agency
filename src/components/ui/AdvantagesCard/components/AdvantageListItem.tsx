import { FC } from 'react';
import styled from 'styled-components';

import { Flex } from '@components/grid/Flex/Flex';
import { FlexAlignItems } from '@components/grid/Flex/enums/FlexAlignItems';

export const AdvantageListItem: FC = ({ children }) => (
  <SAdvantageListItem alignItems={FlexAlignItems.CENTER}>
    <SIcon src='check.svg' height={15} alt='check' />
    {children}
  </SAdvantageListItem>
);

const SIcon = styled.img`
  margin-right: 5px;
  color: #f5c148;
`;

const SAdvantageListItem = styled(Flex)`
  color: #000;
  background: #eaeaea;
  padding: 10px 20px;
  border-radius: 5px;
`;
