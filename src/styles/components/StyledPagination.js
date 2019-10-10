import styled from 'styled-components';
import { button, active } from 'styles/mixins';

const StyledPagination = styled.div`
  ul {
    list-style: none;
    margin: 0px;
    li {
      display: inline-block;
      &.disabled {
        a {
          opacity: 0.5;
        }
      }
      &:first-child,
      &:last-child {
        a {
          font-size: 0.8em;
        }
      }
      &:first-child {
        margin-right: 10px;
      }
      &:last-child {
        margin-left: 10px;
      }
      &.active {
        a {
          ${active};
        }
      }
      a {
        ${button};
      }
    }
  }
`;

export { StyledPagination };
