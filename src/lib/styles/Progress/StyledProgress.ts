import get from 'lodash/get';
import styled from 'styled-components';
import { transparentize } from 'polished';

import { type Theme } from '@utils/theme';
import { progressHeight, progressFontSize, progressBackgroundColor } from '@utils/selectors';

const TRANSPARENT = '0.4';

const StyledProgress = styled.div<{ theme: Theme; $percent: number; $color: string; $isTransparent?: boolean }>`
    display: flex;
    align-items: center;
    min-width: 2.857rem;
    .outer {
        flex: 1 1 0px;
        width: auto;
        .inner {
            position: relative;
            display: inline-block;
            width: 100%;
            vertical-align: middle;
            background-color: ${(props) => progressBackgroundColor(props.theme)};
            border-radius: 0;
            border-bottom: 1px solid ${(props) => get(props.theme.color, props.$color)};
            height: 8px;
            .background {
                position: relative;
                background-color: ${(props) => {
                    const bgColor = get(props.theme.color, props.$color);
                    if (props.$isTransparent) {
                        return `${transparentize(TRANSPARENT, bgColor)}`;
                    }
                    return bgColor;
                }};
                border-radius: 0;
                transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
                height: ${(props) => progressHeight(props.theme)};
                width: ${(props) => props.$percent}%;
                margin-left: 0;
            }
        }
    }
    .text {
        margin-left: 8px;
        font-size: ${(props) => progressFontSize(props.theme)};
        line-height: 1;
        white-space: nowrap;
        text-align: right;
        vertical-align: middle;
        word-break: normal;
        flex: 0 0 auto;
        width: auto;
    }
`;

const StyledMark = styled.div<{ theme: Theme; $color: string; $value: number }>`
    position: absolute;
    width: 1px;
    height: 18px;
    background: ${(props) => get(props.theme.color, props.$color)};
    top: -4px;
    left: ${(props) => props.$value}%;
`;

export { StyledProgress, StyledMark };
