import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Carousel } from '@components';
import { type CarouselRef } from 'antd/es/carousel';

// Not a fragment: antd/slick maps over the children, so a single fragment would render one slide.
const slides = [<div key='1'>Slide 1</div>, <div key='2'>Slide 2</div>, <div key='3'>Slide 3</div>];

describe('<Carousel>', () => {
    it('Should render the carousel with its slides', () => {
        const { container } = render(<Carousel>{slides}</Carousel>);
        expect(container.querySelector('.ant-carousel')).toBeTruthy();
        // Infinite mode clones the edge slides, so only the real ones are counted.
        expect(container.querySelectorAll('.slick-slide:not(.slick-cloned)').length).toEqual(3);
    });

    it('Should render the content of each slide', () => {
        render(<Carousel>{slides}</Carousel>);
        expect(screen.getAllByText('Slide 1').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Slide 2').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Slide 3').length).toBeGreaterThan(0);
    });

    it('Should render one dot per slide by default', () => {
        const { container } = render(<Carousel>{slides}</Carousel>);
        expect(container.querySelectorAll('.slick-dots li').length).toEqual(3);
    });

    it('Should not render the dots when dots is false', () => {
        const { container } = render(<Carousel dots={false}>{slides}</Carousel>);
        expect(container.querySelector('.slick-dots')).toBeNull();
    });

    it('Should place the dots on the given dotPosition', () => {
        const { container } = render(<Carousel dotPosition='left'>{slides}</Carousel>);
        expect(container.querySelector('.slick-dots-left')).toBeTruthy();
    });

    it('Should forward the className', () => {
        const { container } = render(<Carousel className='custom-carousel'>{slides}</Carousel>);
        expect(container.querySelector('.custom-carousel')).toBeTruthy();
    });

    it('Should render the fade effect', () => {
        const { container } = render(
            <Carousel effect='fade' dots={false}>
                {slides}
            </Carousel>
        );
        expect(container.querySelector('.ant-carousel')).toBeTruthy();
        expect(container.querySelectorAll('.slick-slide:not(.slick-cloned)').length).toEqual(3);
    });

    // The imperative api is the one thing a non-forwarding wrapper would drop, so it is asserted
    // here. Actually advancing a slide is not: slick measures a zero-width list under jsdom and
    // never runs the transition.
    it('Should expose the imperative api through the ref', () => {
        const ref = createRef<CarouselRef>();
        render(<Carousel ref={ref}>{slides}</Carousel>);
        expect(typeof ref.current?.goTo).toBe('function');
        expect(typeof ref.current?.next).toBe('function');
        expect(typeof ref.current?.prev).toBe('function');
        expect(typeof ref.current?.autoPlay).toBe('function');
    });
});
