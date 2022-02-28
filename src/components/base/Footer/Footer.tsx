import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { FC } from 'react';

import { Flex } from '@components/grid/Flex/Flex';
import { Label } from '@components/ui/Label/Label';
import { SmallLink } from '@components/ui/SmallLink/SmallLink';
import { Section } from '@components/grid/Section/Section';
import { FlexJustifyContent } from '@components/grid/Flex/enums/FlexJustifyContent';
import { Small } from '@components/ui/Small/Small';
import { ScreenSize } from '@common/enums/ScreenSize';

interface IProps {
  navigation: Array<{
    title: string;
    link: string;
  }>;
}

export const Footer: FC<IProps> = ({ navigation }) => (
  <SFooter>
    <Container>
      <SFlex justifyContent={FlexJustifyContent.SPACE_BETWEEN}>
        <SRow>
          <Label>Меню сайта</Label>
          <Section top={10}>
            <SmallLink href='/'>Главная</SmallLink>
          </Section>
          <Section top={10}>
            <SmallLink href='/tiktok'>TikTok</SmallLink>
          </Section>
          <Section top={10}>
            <SmallLink href='/youtube'>YouTube</SmallLink>
          </Section>
          <Section top={10}>
            <SmallLink href='/telegram'>Telegram</SmallLink>
          </Section>
          <Section top={10}>
            <SmallLink href='/contacts'>Контакты</SmallLink>
          </Section>
        </SRow>
        <SRow>
          <Label>Навигация</Label>
          {navigation &&
            navigation.map((item) => (
              <Section top={10}>
                <a href={`#${item.link}`}>
                  <SmallLink>{item.title}</SmallLink>
                </a>
              </Section>
            ))}
        </SRow>
        <SRow>
          <Label>Информация</Label>
          <Section top={10}>
            <SmallLink href='/contacts'>Форма обратной связи</SmallLink>
          </Section>
          <Section top={10}>
            <SmallLink href='/contacts'>Контактные данные</SmallLink>
          </Section>
        </SRow>
        <SRow>
          <Section top={10}>
            <Small>Контактный адрес</Small>
          </Section>
          <Section top={5}>
            <SSmallLink>support@3aagency.com</SSmallLink>
          </Section>
          <Section top={10}>
            <Small>Чат с руководителями проекта</Small>
          </Section>
          <Section top={5}>
            <SSmallLink>Обратная связь Telegram</SSmallLink>
          </Section>
        </SRow>
      </SFlex>
    </Container>
  </SFooter>
);

const SFlex = styled(Flex)`
  @media (max-width: ${ScreenSize.TABLET}px) {
    display: block;
  }
`;

const SRow = styled.div`
  @media (max-width: ${ScreenSize.TABLET}px) {
    margin-top: 40px;
    width: 100%;
    text-align: center;
  }
`;

const SSmallLink = styled(SmallLink)`
  text-decoration: underline;
`;

const SFooter = styled.div`
  box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 10%);
  background: rgba(36, 36, 36, 0.2);
  width: 100%;
  padding: 30px 0;
`;
