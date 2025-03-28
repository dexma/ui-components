import React from 'react';
import styled from 'styled-components';

import { Grid, Cell, Button, Row, Paragraph, Card, CardProps } from '@components';
import { StyledCell } from '@styles/Cell/StyledCell';
import { mockCards } from '../../tests/mock/Card';

export default {
    title: 'Card',
    component: Card,
    tags: ['autodocs'],
};

const StyledCustomGrid = styled(Grid)`
    ${StyledCell} {
        margin-bottom: 20px;
    }
`;

export const Cards = () => (
    <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>We present our simple and custom cards.</Paragraph>
            </Cell>
            {mockCards.map((card) => (
                <Cell xs={4} key={card.title}>
                    <Card title={card.title} subtitle='With supporting text below as a natural lead-in to additional content.' />
                </Cell>
            ))}
        </Row>
    </StyledCustomGrid>
);

export const Image = () => (
    <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Here we have cards but we pass a image prop.</Paragraph>
            </Cell>
            {mockCards.map((card) => (
                <Cell xs={4} key={card.title}>
                    <Card title={card.title} image={card.image} imageAlt={card.alt} />
                </Cell>
            ))}
        </Row>
    </StyledCustomGrid>
);

export const Icons = () => (
    <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Here we have cards but we pass a icon name.</Paragraph>
            </Cell>
            {mockCards.map((card) => (
                <Cell xs={4} key={card.title}>
                    <Card title={card.title} icon={card.icon} subtitle='With supporting text below as a natural lead-in to additional content.' />
                </Cell>
            ))}
        </Row>
    </StyledCustomGrid>
);

export const Footer = () => (
    <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Here we have cards and custom footer. You can pass JSX element to it to render a component inside the footer.</Paragraph>
            </Cell>
            {mockCards.map((card) => (
                <Cell xs={4} key={card.title}>
                    <Card
                        title={card.title}
                        image={card.image}
                        subtitle='With supporting text below as a natural lead-in to additional content.'
                        footer={
                            <>
                                <Button iconBefore='add' text='Button' /> <Button variant='destructive' iconBefore='delete' isCircle />{' '}
                            </>
                        }
                    />
                </Cell>
            ))}
        </Row>
    </StyledCustomGrid>
);

export const Link = () => (
    <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>This is an example of the a link (image) with a card.</Paragraph>
            </Cell>
            {mockCards.map((card) => (
                <Cell xs={4} key={card.title}>
                    <Card title={card.title} image={card.image} subtitle='With supporting text below as a natural lead-in to additional content.' link={card.image} imageAlt={card.alt} linkTitle='Click to open image in another tab' />
                </Cell>
            ))}
        </Row>
    </StyledCustomGrid>
);

export const Horizontal = () => (
    <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Here we have horizontal cards.</Paragraph>
            </Cell>
            {mockCards.map((card) => (
                <Cell xs={6} key={card.title}>
                    <Card title={card.title} image={card.image} subtitle='With supporting text below as a natural lead-in to additional content.' isHorizontal />
                </Cell>
            ))}
        </Row>
    </StyledCustomGrid>
);

export const HorizontalFooter = () => (
    <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Here we have horizontal cards and we can customize the footer, passing a JSX element to it.</Paragraph>
            </Cell>
            {mockCards.map((card) => (
                <Cell xs={12} key={card.title}>
                    <Card
                        title={card.title}
                        image={card.image}
                        subtitle='With supporting text below as a natural lead-in to additional content.'
                        isHorizontal
                        footer={
                            <>
                                <Button iconBefore='add' text='Button' /> <Button variant='destructive' iconBefore='delete' isCircle />{' '}
                            </>
                        }
                    />
                </Cell>
            ))}
        </Row>
    </StyledCustomGrid>
);

export const Playground = (args: CardProps) => (
    <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Card.</Paragraph>
            </Cell>
            <Cell xs={4}>
                <Card {...args} />
            </Cell>
        </Row>
    </StyledCustomGrid>
);
