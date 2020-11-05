import React from 'react';
import styled from 'styled-components';
import Grid from '../components/Grid';
import Cell from '../components/Cell';
import Button from '../components/Button';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';

import { mockCards } from '../../test/mock/Card';

import { Card } from '../components/Card';
import { StyledCell } from '../styles/components/StyledCell';

export default {
  title: 'Card',
  component: Card,
};

const StyledCustomGrid = styled(Grid)`
  ${StyledCell} {
    margin-bottom: 20px;
  }
`;

export const cards = () => (
  <StyledCustomGrid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          We present our simple and custom cards
        </Paragraph>
      </Cell>
      {mockCards.map((card, i) => (
        <Cell xs={4} key={i}>
          <Card
            isLoading
            title={card.title}
            subtitle="With supporting text below as a natural lead-in to additional content."
          />
        </Cell>
      ))}
    </Row>
  </StyledCustomGrid>
);

export const image = () => (
  <StyledCustomGrid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have cards but we pass a image prop
        </Paragraph>
      </Cell>
      {mockCards.map((card, i) => (
        <Cell xs={4} key={i}>
          <Card title={card.title} image={card.image} />
        </Cell>
      ))}
    </Row>
  </StyledCustomGrid>
);

export const icons = () => (
  <StyledCustomGrid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have cards but we pass a icon name
        </Paragraph>
      </Cell>
      {mockCards.map((card, i) => (
        <Cell xs={4} key={i}>
          <Card
            title={card.title}
            icon={card.icon}
            subtitle="With supporting text below as a natural lead-in to additional content."
          />
        </Cell>
      ))}
    </Row>
  </StyledCustomGrid>
);

export const footer = () => (
  <StyledCustomGrid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have cards and custom footer
        </Paragraph>
      </Cell>
      {mockCards.map((card, i) => (
        <Cell xs={4} key={i}>
          <Card
            title={card.title}
            image={card.image}
            subtitle="With supporting text below as a natural lead-in to additional content."
            footer={
              <>
                <Button iconBefore="add" text="Button" />{' '}
                <Button variant="destructive" iconBefore="delete" isCircle />{' '}
              </>
            }
          />
        </Cell>
      ))}
    </Row>
  </StyledCustomGrid>
);

export const link = () => (
  <StyledCustomGrid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          This is an example of the a link (image) with a card
        </Paragraph>
      </Cell>
      {mockCards.map((card, i) => (
        <Cell xs={4} key={i}>
          <Card
            title={card.title}
            image={card.image}
            subtitle="With supporting text below as a natural lead-in to additional content."
            link={card.image}
          />
        </Cell>
      ))}
    </Row>
  </StyledCustomGrid>
);

export const horizontal = () => (
  <StyledCustomGrid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">Here we have horizontal cards</Paragraph>
      </Cell>
      {mockCards.map((card, i) => (
        <Cell xs={6} key={i}>
          <Card
            title={card.title}
            image={card.image}
            subtitle="With supporting text below as a natural lead-in to additional content."
            isHorizontal
          />
        </Cell>
      ))}
    </Row>
  </StyledCustomGrid>
);

export const horizontalFooter = () => (
  <StyledCustomGrid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have horizontal cards and we can customize the footer
        </Paragraph>
      </Cell>
      {mockCards.map((card, i) => (
        <Cell xs={12} key={i}>
          <Card
            title={card.title}
            image={card.image}
            subtitle="With supporting text below as a natural lead-in to additional content."
            isHorizontal
            footer={
              <>
                <Button iconBefore="add" text="Button" />{' '}
                <Button variant="destructive" iconBefore="delete" isCircle />{' '}
              </>
            }
          />
        </Cell>
      ))}
    </Row>
  </StyledCustomGrid>
);
