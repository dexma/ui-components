import { forwardRef } from 'react';
import { Carousel as AntdCarousel, type CarouselProps as AntdCarouselProps } from 'antd';
import { type CarouselRef } from 'antd/es/carousel';

export type CarouselProps = AntdCarouselProps;

/**
 * antd's Carousel does not spread unknown props onto the DOM, so a `data-testid` / `data-id` would be
 * silently dropped — select it by `.ant-carousel`, or pass `id` / `className`, which antd does forward.
 * The ref is forwarded because the imperative api (goTo / next / prev / autoPlay) is only reachable
 * through it.
 */
export const Carousel = forwardRef<CarouselRef, CarouselProps>((props, ref) => <AntdCarousel ref={ref} {...props} />);
