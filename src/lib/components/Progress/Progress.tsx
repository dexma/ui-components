import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { StyledProgress, StyledMark } from '@styles/Progress/StyledProgress';

export type ProgressProps = {
    percent: number;
    marks?: Array<{
        value: number;
        color: string;
    }>;
    text?: string;
    isTransparent?: boolean;
    color: string;
    ariaLabel?: string;
};

export const Progress = ({ text, marks, percent, color = 'green', isTransparent, ariaLabel, ...props }: ProgressProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    return (
        <StyledProgress data-testid='progress' $color={color} $percent={percent} $isTransparent={isTransparent} theme={th} aria-label={!text ? ariaLabel : undefined} {...props}>
            <div className='outer'>
                <div className='inner'>
                    <div className='background' />
                    {marks && marks.length > 0 ? marks.map((mark) => <StyledMark key={mark.value} $color={mark.color} $value={mark.value} theme={th} />) : null}
                </div>
            </div>
            {text && <div className='text'>{text}</div>}
        </StyledProgress>
    );
};

export default Progress;
