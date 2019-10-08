import styled from 'styled-components';
import {
  borderRadius,
  backgroundColor,
  backgroundColorActive,
  backgroundColorSelected,
  iconColorActive,
} from 'styles/selectors';

const StyledCard = styled.div`
  max-width: 180px;
  border-radius: ${borderRadius};
  background: ${backgroundColorSelected};
  box-shadow: inset 0 1px 0 #f9f9f9, inset 0 0 2px #fff;
  border-bottom-color: #b3b3b3;
  &:hover {
    opacity: 0.8;
  }
  &.active {
    background-color: ${backgroundColorActive};
    border: 1px solid ${iconColorActive};
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    color: ${backgroundColor};
  }
  .card-body {
    margin: 1rem;
    background: ${backgroundColorSelected};
    text-align: center;
    width: 154px;
    height: 154px;
    .dexma-icon-device_wifi::before {
      padding-top: 0.2em;
    }
    i {
      color: ${iconColorActive};
      font-size: 8em;
    }
  }
  .card-title {
    padding-top: 0;
    text-align: center;
    text-shadow: 0 1px 0 hsla(0, 0%, 100%, 0.75);
  }
`;
export { StyledCard };
