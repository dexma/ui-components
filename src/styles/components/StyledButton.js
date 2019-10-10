import styled from 'styled-components';
import { button, active } from 'styles/utils/mixins';
import {
  buttonFontSizeSmall,
  buttonFontSizeMedium,
  buttonFontSizeLarge,
  buttonFontSizeXLarge,
} from 'styles/selectors';

const StyledButton = styled.button`
  ${button};
  &.active {
    ${active}
  }
  &.small {
    font-size: ${buttonFontSizeSmall};
  }
  &.medium {
    font-size: ${buttonFontSizeMedium};
  }
  &.large {
    font-size: ${buttonFontSizeLarge};
  }
  &.xlarge {
    font-size: ${buttonFontSizeXLarge};
  }
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
