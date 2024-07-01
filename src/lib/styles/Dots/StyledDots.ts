import { styled } from 'styled-components';
import { glow } from '@utils/animation';
import { Theme } from '@utils/theme';

const StyledDot = styled.div<{ theme: Theme; size: number }>`
    background: ${(props) => props.theme.iconColor};
    display: inline-block;
    vertical-align: top;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: 3em;
    margin: 0 ${(props) => props.size / 2}px;
    animation: ${glow} 1.5s ease-in-out infinite;
    &:nth-child(1) {
        animation-delay: 0s;
    }
    &:nth-child(2) {
        animation-delay: 0.3s;
    }
    &:nth-child(3) {
        animation-delay: 0.6s;
    }
    &:nth-child(4) {
        animation-delay: 0.9s;
    }
`;

const StyledDots = styled.div<{ size: number }>`
    display: inline-block;
    height: ${(props) => props.size}px;
`;

export { StyledDots, StyledDot };
