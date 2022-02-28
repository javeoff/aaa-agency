import { FC } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import { AdvantagesCard } from '@components/ui/AdvantagesCard/AdvantagesCard';
import { FlexJustifyContent } from '@components/grid/Flex/enums/FlexJustifyContent';
import { Flex } from '@components/grid/Flex/Flex';
import { Section } from '@components/grid/Section/Section';
import { VerticalLine } from '@components/ui/VerticalLine/VerticalLine';
import { Small } from '@components/ui/Small/Small';
import { Button } from '@components/ui/Button/Button';

interface IProps {
  showModalHandler(): void;
}

export const AdvantageSection: FC<IProps> = ({ showModalHandler }) => (
  <Container>
    <Flex justifyContent={FlexJustifyContent.SPACE_AROUND}>
      <Section>
        <Section>
          <AdvantagesCard imageProps={{ url: 'youtube.svg' }}>
            <div>
              Продвижение <b>YouTube</b>
            </div>
            <Section top={15}>
              <Small>
                Мы разрабатываем стратегии и креатив, реализуем их в масштабные
                проекты и каждый раз ставим новые планки на YouTube.
              </Small>
            </Section>
            <Section top={25}>
              <Button onClick={showModalHandler} buttonSize='sm'>
                Заказать
              </Button>
            </Section>
          </AdvantagesCard>
        </Section>
        <Section top={250}>
          <AdvantagesCard imageProps={{ url: 'telegram.svg' }}>
            <div>
              Продвижение <b>Telegram</b>
            </div>
            <Section top={15}>
              <Small>
                Тесный контакт с аудиторией, поможем клиентам прочувствовать
                вас, а вам — их.
              </Small>
            </Section>
            <Section top={25}>
              <Button buttonSize='sm' onClick={showModalHandler}>
                Заказать
              </Button>
            </Section>
          </AdvantagesCard>
        </Section>
      </Section>

      <Section>
        <VerticalLine />
      </Section>
      <Section top={250}>
        <Section>
          <AdvantagesCard imageProps={{ url: 'tiktok.svg' }}>
            <div>
              Продвижение <b>TikTok</b>
            </div>
            <Section top={15}>
              <Small>
                Приведем клиентов в ваш бизнес из самой перспективной соцсети.
              </Small>
            </Section>
            <Section top={25}>
              <Button buttonSize='sm' onClick={showModalHandler}>
                Заказать
              </Button>
            </Section>
          </AdvantagesCard>
        </Section>
      </Section>
    </Flex>
  </Container>
);

export const SAdvantagesCard = styled(AdvantagesCard)``;
