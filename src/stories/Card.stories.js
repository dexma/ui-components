import React from 'react';
import Grid from '../components/Grid';
import Cell from '../components/Cell';
import Button from '../components/Button';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';

import { mockCards } from '../../test/mock/Card';

import { Card } from '../components/Card';

export default {
  title: 'Card',
  component: Card,
};

export const cards = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          We present our simple and custom cards
        </Paragraph>
      </Cell>
      {mockCards.map(card => (
        <Cell xs={4}>
          <Card
            title={card.title}
            subtitle="With supporting text below as a natural lead-in to additional content."
          />
        </Cell>
      ))}
    </Row>
  </Grid>
);

export const image = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have cards but we pass a image prop
        </Paragraph>
      </Cell>
      {mockCards.map(card => (
        <Cell xs={4}>
          <Card title={card.title} image={card.image} />
        </Cell>
      ))}
    </Row>
  </Grid>
);

export const icons = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have cards but we pass a icon name
        </Paragraph>
      </Cell>
      {mockCards.map(card => (
        <Cell xs={4}>
          <Card
            title={card.title}
            icon={card.icon}
            subtitle="With supporting text below as a natural lead-in to additional content."
          />
        </Cell>
      ))}
    </Row>
  </Grid>
);

export const footer = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have cards and custom footer
        </Paragraph>
      </Cell>
      {mockCards.map(card => (
        <Cell xs={4}>
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
  </Grid>
);

export const link = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          This is an example of the a link (image) with a card
        </Paragraph>
      </Cell>
      {mockCards.map(card => (
        <Cell xs={4}>
          <Card
            title={card.title}
            image={card.image}
            subtitle="With supporting text below as a natural lead-in to additional content."
            link={card.image}
          />
        </Cell>
      ))}
    </Row>
  </Grid>
);

export const horizontal = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">Here we have horizontal cards</Paragraph>
      </Cell>
      {mockCards.map(card => (
        <Cell xs={6}>
          <Card
            title={card.title}
            image={card.image}
            subtitle="With supporting text below as a natural lead-in to additional content."
            isHorizontal
          />
        </Cell>
      ))}
    </Row>
  </Grid>
);

export const horizontalFooter = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have horizontal cards and we can customize the footer
        </Paragraph>
      </Cell>
      {mockCards.map(card => (
        <Cell xs={12}>
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
  </Grid>
);
