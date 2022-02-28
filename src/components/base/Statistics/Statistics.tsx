import { FC } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { Flex } from '@components/grid/Flex/Flex';
import { Section } from '@components/grid/Section/Section';
import { FlexJustifyContent } from '@components/grid/Flex/enums/FlexJustifyContent';
import { FlexAlignItems } from '@components/grid/Flex/enums/FlexAlignItems';
import { ScreenSize } from '@common/enums/ScreenSize';

export const Statistics: FC = () => (
  <SStatistics>
    <Container>
      <Flex
        justifyContent={FlexJustifyContent.SPACE_AROUND}
        alignItems={FlexAlignItems.CENTER}
        isWrap={true}
      >
        <Section>
          <SIcon src='/audit.svg' height={180} width={240} />
        </Section>
        <Section>
          <Section>
            <Flex margin={10}>
              <img src='/check.svg' alt='check' />
              <div>
                Более <b>120 000</b> органических подписчиков на площадке
                YouTube.
              </div>
            </Flex>
          </Section>
          <Section top={20}>
            <Flex margin={10}>
              <img src='/check.svg' alt='check' />
              <div>
                Более <b>4 000 000</b> просмотров на канале.
              </div>
            </Flex>
          </Section>
          <Section top={20}>
            <Flex margin={10}>
              <img src='/check.svg' alt='check' />
              <div>
                Запуск вирусного ролика, набравшего более <b>1 300 000</b>{' '}
                просмотров
              </div>
            </Flex>
          </Section>
          <Section top={20}>
            <Flex margin={10}>
              <img src='/check.svg' alt='check' />
              <div>
                Более <b>14 000</b> подписчиков в Telegram, <b>60%</b> из
                которых просматривают каждый пост
              </div>
            </Flex>
          </Section>
        </Section>
      </Flex>
    </Container>
  </SStatistics>
);

const SIcon = styled.img`
  margin-left: 180px;

  @media (max-width: ${ScreenSize.TABLET}px) {
    margin: 0;
    margin-left: 0;
    margin-bottom: 50px;
  }
`;

const SStatistics = styled.div`
  background: rgba(36, 36, 36, 0.2);
  padding: 30px;
`;
