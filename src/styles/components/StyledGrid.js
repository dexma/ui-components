import styled, { css } from 'styled-components';

import {
  gridOuterPadding,
  gridContainerSm,
  gridContainerMd,
  gridContainerLg,
} from 'styles/selectors';

const getWidthContainer = props => {
  return css`
    @media only screen and (min-width: 48em) {
      width: ${gridContainerSm(props)};
    }

    @media only screen and (min-width: 64em) {
      width: ${gridContainerMd(props)};
    }

    @media only screen and (min-width: 75em) {
      width: ${gridContainerLg(props)};
    }
  `;
};

const StyledGrid = styled.div`
  margin-right: auto;
  margin-left: auto;
  ${props =>
    props.fluid
      ? css`
          padding-right: ${gridOuterPadding};
          padding-left: ${gridOuterPadding};
        `
      : getWidthContainer(props)};
`;

export { StyledGrid };
