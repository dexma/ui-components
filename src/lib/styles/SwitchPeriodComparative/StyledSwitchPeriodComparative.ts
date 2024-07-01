import styled from 'styled-components';

import { type Theme, color } from '@utils/theme';
import { backgroundColor, borderRadius, fontColor, fontSize, fontWeightSemiBold, primaryColor, primaryColorSvg, switchPeriodComparativeFontSize } from '@utils/selectors';
import { StyledFieldGroup } from '@styles/Fieldgroup/StyledFieldGroup';
import { StyledIcon } from '@styles/Icon/StyledIcon';

type StyledSwitchPeriodComparativeProps = {
    theme: Theme;
};
const StyledSwitchPeriodComparative = styled.div<StyledSwitchPeriodComparativeProps>`
    display: flex;
    .compare-period {
        position: relative;
        width: auto;

        .compare-period-item {
            .title {
                font-size: ${(props) => switchPeriodComparativeFontSize(props.theme)};
                line-height: 1.25rem;
                color: ${(props) => fontColor(props.theme)};
                font-weight: ${(props) => fontWeightSemiBold(props.theme)};
            }
            .dates {
                font-size: ${(props) => fontSize(props.theme)};
                line-height: 1.25rem;
                color: ${(props) => fontColor(props.theme)};
            }
        }

        ${StyledFieldGroup} {
            background: ${color.gray100};
            border-radius: ${(props) => borderRadius(props.theme)};
            label {
                background: ${color.gray100};
                height: auto;
                border: 1px solid ${color.gray100};

                z-index: 0;
                &:first-child {
                    margin-right: -3rem;
                    padding: 0.5rem 3.5rem 0.5rem 1.5rem;
                }
                &:last-child {
                    padding: 0.5rem 1.5rem 0.5rem 3.5rem;
                }
                &.active {
                    z-index: 99999;
                    background-color: ${(props) => backgroundColor(props.theme)};
                    background-image: ${(props) =>
                        `url(
                            "data:image/svg+xml,%3Csvg width='18' height='20' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 10H6V12H4V10ZM16 2H15V0H13V2H5V0H3V2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V8H16V18ZM16 6H2V4H16V6ZM12 10H14V12H12V10ZM8 10H10V12H8V10Z' fill='%23${primaryColorSvg(
                                props.theme
                            )}'/%3E%3Cpath d='M6 14H4V16H6V14Z' fill='%23${primaryColorSvg(props.theme)}'/%3E%3Cpath d='M14 14H12V16H14V14Z' fill='%23${primaryColorSvg(
                                props.theme
                            )}'/%3E%3Cpath d='M10 14H8V16H10V14Z' fill='%23${primaryColorSvg(props.theme)}'/%3E%3C/svg%3E%0A"
                        )`};
                    border: 1px solid ${color.gray200};
                    background-repeat: no-repeat;

                    &:first-child {
                        border-radius: ${(props) => borderRadius(props.theme)} 6rem 6rem ${(props) => borderRadius(props.theme)};
                        padding: 0.5rem 3.5rem 0.5rem 1.5rem;
                        background-position-y: center;
                        background-position-x: calc(100% - 1rem);
                        background-size: 1rem;
                        margin-right: -3rem;
                    }
                    &:last-child {
                        border-radius: 6rem ${(props) => borderRadius(props.theme)} ${(props) => borderRadius(props.theme)} 6rem;
                        padding: 0.5rem 1.5rem 0.5rem 3.5rem;
                        background-position-y: center;
                        background-position-x: calc(1rem - 1px);
                        background-size: 1rem;
                    }
                    .title {
                        font-weight: ${(props) => fontWeightSemiBold(props.theme)};
                        color: ${(props) => primaryColor(props.theme)};
                    }
                    .dates {
                        color: ${(props) => fontColor(props.theme)};
                    }
                }
            }
        }

        ${StyledIcon} {
            margin: 0 auto;
        }
    }
`;

export { StyledSwitchPeriodComparative };
