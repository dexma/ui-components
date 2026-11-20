import { type CSSProperties, useRef } from 'react';

import { Button, Carousel, type CarouselProps, Cell, Grid, Paragraph, Row } from '@components';
import { type CarouselRef } from 'antd/es/carousel';
import { color } from '@utils/theme';

export default {
    title: 'Carousel',
    component: Carousel,
    tags: ['autodocs'],
};

// The carousel takes the height of its slides, so the stories give them one.
const slideStyle: CSSProperties = {
    height: '180px',
    lineHeight: '180px',
    textAlign: 'center',
    color: color.white,
    background: color.irisBlue,
};

const slides = ['Slide 1', 'Slide 2', 'Slide 3'].map((text) => (
    <div key={text}>
        <div style={slideStyle}>{text}</div>
    </div>
));

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    A carousel cycles through a set of slides. Component is a 1:1 port from the AntD Component, so check their documentation for the full list of props.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Carousel>{slides}</Carousel>
            </Cell>
        </Row>
    </Grid>
);

export const Effect = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Slides scroll horizontally by default. Set effect=&apos;fade&apos; to cross-fade between them instead.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Carousel effect='fade'>{slides}</Carousel>
            </Cell>
        </Row>
    </Grid>
);

export const DotPosition = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>The dots can be moved to any side with dotPosition, or hidden altogether with dots=&#123;false&#125;.</Paragraph>
            </Cell>
            <Cell xs={12} style={{ marginBottom: '20px' }}>
                <Carousel dotPosition='left'>{slides}</Carousel>
            </Cell>
            <Cell xs={12}>
                <Carousel dots={false}>{slides}</Carousel>
            </Cell>
        </Row>
    </Grid>
);

export const Autoplay = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>With autoplay the carousel advances on its own, every autoplaySpeed milliseconds.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Carousel autoplay autoplaySpeed={2000}>
                    {slides}
                </Carousel>
            </Cell>
        </Row>
    </Grid>
);

export const ImperativeApi = () => {
    const ref = useRef<CarouselRef>(null);
    return (
        <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>
                        The ref exposes goTo, next, prev and autoPlay, so the carousel can be driven from outside — useful when the controls live elsewhere in the layout.
                    </Paragraph>
                </Cell>
                <Cell xs={12}>
                    <Carousel ref={ref}>{slides}</Carousel>
                </Cell>
                <Cell xs={12} style={{ marginTop: '20px' }}>
                    <Button
                        kind='iconTextButton'
                        variant='secondary'
                        iconBefore='chevron_left_l'
                        text='Previous'
                        onClick={() => {
                            ref.current?.prev();
                        }}
                    />
                    <Button
                        kind='iconTextButton'
                        variant='secondary'
                        iconAfter='chevron_right_l'
                        text='Next'
                        onClick={() => {
                            ref.current?.next();
                        }}
                    />
                    <Button
                        text='Go to last'
                        onClick={() => {
                            ref.current?.goTo(slides.length - 1);
                        }}
                    />
                </Cell>
            </Row>
        </Grid>
    );
};

export const Playground = (args: CarouselProps) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Carousel.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Carousel {...args}>{slides}</Carousel>
            </Cell>
        </Row>
    </Grid>
);
