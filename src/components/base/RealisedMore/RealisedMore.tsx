import { Container } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { FC } from 'react';

import { Section } from '@components/grid/Section/Section';
import { Small } from '@components/ui/Small/Small';
import { Button } from '@components/ui/Button/Button';
import { FlexJustifyContent } from '@components/grid/Flex/enums/FlexJustifyContent';
import { Flex } from '@components/grid/Flex/Flex';
import { ScreenSize } from '@common/enums/ScreenSize';
import { Div } from '@components/grid/Div/Div';

interface IProps {
  showModalHandler(): void;
}

export const RealisedMore: FC<IProps> = ({ showModalHandler }) => (
  <Section top={40}>
    <Container>
      <Flex
        isWrap={true}
        justifyContent={FlexJustifyContent.FLEX_START}
        margin={10}
      >
        <Section bottom={40}>
          <SDiv width={310} padding={[0, 10]}>
            <SCard>
              <Section>
                <SCardName>Редактор для ваших социальных сетей</SCardName>
              </Section>
              <Section top={20}>
                <Small>
                  Хотите развивать соц. сети, но не знаете, как и о чём писать?
                  Наши специалисты возьмут всё на себя и донесут нужные вам
                  эмоции читателям. Стоимость 30 000 руб. в месяц.
                </Small>
              </Section>
              <Section top={50}>
                <Flex justifyContent={FlexJustifyContent.CENTER}>
                  <SButton buttonSize='sm' onClick={showModalHandler}>
                    Заказать
                  </SButton>
                </Flex>
              </Section>
            </SCard>
          </SDiv>
        </Section>
        <Section bottom={40}>
          <SDiv width={310} padding={[0, 10]}>
            <SCard>
              <Section>
                <SCardName>Фирменный стиль для YouTube</SCardName>
              </Section>
              <Section top={20}>
                <Small>
                  От внешней упаковки вашего канала напрямую зависит то, как вас
                  воспринимает аудитория. Логотип + &quot;Шапка&quot; для вашего
                  канала на YouTube от 3A Agency , поможет передать ваш месседж
                  аудитории. Стоимость от 10 000 руб.
                </Small>
              </Section>
              <Section top={50}>
                <Flex justifyContent={FlexJustifyContent.CENTER}>
                  <SButton buttonSize='sm' onClick={showModalHandler}>
                    Заказать
                  </SButton>
                </Flex>
              </Section>
            </SCard>
          </SDiv>
        </Section>
        <Section bottom={40}>
          <SDiv width={310} padding={[0, 10]}>
            <SCard>
              <Section>
                <SCardName>Фирменный стиль для Telegram</SCardName>
              </Section>
              <Section top={20}>
                <Small>
                  От внешней упаковки вашего канала напрямую зависит то, как вас
                  воспринимает аудитория. Логотип + Оформление постов для вашего
                  канала в ТГ от AA-Agency, поможет создать уникальный стиль
                  вашего сообщества, максимально передающий ваши ценности.
                </Small>
              </Section>
              <Section top={50}>
                <Flex justifyContent={FlexJustifyContent.CENTER}>
                  <SButton buttonSize='sm' onClick={showModalHandler}>
                    Заказать
                  </SButton>
                </Flex>
              </Section>
            </SCard>
          </SDiv>
        </Section>
        <Section bottom={40}>
          <SDiv width={310} padding={[0, 10]}>
            <SCard>
              <Section>
                <SCardName>Анимация для Telegram</SCardName>
              </Section>
              <Section top={20}>
                <Small>
                  Самая &quot;Фаст-фудная&quot; и прогрессивная социальная сеть,
                  требует современных и смелых решений в оформлении ваших
                  роликов. Переходы + Анимации от AA-Agency - отличная
                  возможность выделится среди остальных.
                </Small>
              </Section>
              <Section top={50} fluid={true}>
                <Flex justifyContent={FlexJustifyContent.CENTER}>
                  <SButton buttonSize='sm' onClick={showModalHandler}>
                    Заказать
                  </SButton>
                </Flex>
              </Section>
            </SCard>
          </SDiv>
        </Section>
      </Flex>
    </Container>
  </Section>
);

const SButton = styled(Button)`
  margin: 0 auto;
  background: transparent;
  border: 0;
  color: rgba(255, 255, 255, 0.6);
  width: 300px;

  &:hover {
    border: 0;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const SDiv = styled(Div)`
  @media (max-width: ${ScreenSize.DESKTOP}px) {
    max-width: initial;
    width: 546px;
  }

  @media (max-width: ${ScreenSize.TABLET}px) {
    max-width: initial;
    width: 456px;
  }

  @media (max-width: ${ScreenSize.BIG_PHONE}px) {
    max-width: initial;
    width: 336px;
  }

  @media (max-width: ${ScreenSize.PHONE}px) {
    max-width: initial;
    width: 100%;
  }
`;

const SCardName = styled.div`
  font-weight: 600;
`;

const SCard = styled.div<{ width?: string }>`
  padding: 30px 50px;
  background: #151515;
  box-shadow: 0 30px 60px rgb(0 0 0 / 52%);
  border-radius: 10px;
  height: 100%;

  ${({ width }) => css`
    width: ${width ?? 'auto'};
  `}
`;
