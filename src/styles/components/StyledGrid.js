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
      max-width: ${gridContainerSm(props)};
    }

    @media only screen and (min-width: 64em) {
      max-width: ${gridContainerMd(props)};
    }

    @media only screen and (min-width: 75em) {
      max-width: ${gridContainerLg(props)};
    }
  `;
};

const StyledGrid = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  ${props =>
    props.fluid
      ? css`
          padding-right: ${gridOuterPadding};
          padding-left: ${gridOuterPadding};
        `
      : getWidthContainer(props)};
`;

export { StyledGrid };
