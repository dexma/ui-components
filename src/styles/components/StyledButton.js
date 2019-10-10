import styled, { css } from 'styled-components';
import { button, active } from 'styles/mixins';
import { buttonSizes, buttonFontSize } from 'styles/selectors';

const getButtons = props => {
  const sizes = buttonSizes(props);
  const fontSizes = buttonFontSize(props);
  return sizes.map(size => {
    return css`
      &.${size} {
        font-size: ${fontSizes[size]};
      }
    `;
  });
};

const StyledButton = styled.button`
  ${button};
  &.active {
    ${active}
  }
  ${props => getButtons(props)}
  &.expanded {
    &.small,
    &.medium,
    &.large,
    &.xlarge {
      display: block;
      width: 100%;
    }
  }
  svg {
    width: 30px;
    height: 30px;
    margin: -10px 0px -10px -10px;
  }
`;
export { StyledButton };
