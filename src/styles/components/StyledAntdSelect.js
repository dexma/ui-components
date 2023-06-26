/* eslint-disable no-nested-ternary */
import styled, { createGlobalStyle, css } from 'styled-components';
import { get } from 'lodash';
import Button from '../../components/Button';
import Cell from '../../components/Cell';
import Icon from '../../components/Icon';
import Row from '../../components/Row';
import { color, primary } from '../theme';
import { primaryColor, white } from '../selectors';
import { StyledIcon } from './StyledIcon';

export const hexToRGBA = (hex, a) => {
  let hexTemp = hex;
  if (hex !== undefined && hex.startsWith('#')) {
    hexTemp = hex.slice(1);
  }

  // Handle shorthand hex notation (e.g., #abc)
  if (hex.length === 3) {
    hexTemp = hex
      .split('')
      .map(char => char + char)
      .join('');
  }

  const red = parseInt(hexTemp.slice(0, 2), 16);
  const green = parseInt(hexTemp.slice(2, 4), 16);
  const blue = parseInt(hexTemp.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${a})`;
};

const getColorHover = props => {
  return props.theme ? primaryColor : primary;
};

export const StyledPaginationPageWrapper = styled(Cell)`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  height: 32px !important;
  max-width: 32px;
  border: 1px solid #c9cccf;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-items: center;
  :hover {
    border: 1px solid
      ${props => (props.disabled ? '#c9cccf' : getColorHover(props))};
    svg {
      fill: ${props => (props.disabled ? '#c9cccf' : getColorHover(props))};
    }
  }
`;

export const StyledIconButtonPagination = styled(Icon)`
  display: block;
  margin: auto;
`;

export const StyledRowButtonPagination = styled(Row)`
  margin-right: 0px;
  margin-left: 0.5rem;
  margin-top: 10px;
`;

export const StyledButtonSelectAll = styled(Button)`
  width: 100%;
  font-size: 14px;
  display: block;
`;

export const StyledPaginationSelector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
`;

export const StyledAntdSelectDropdown = styled.div`
  .ant-select-item {
    min-height: auto;
  }
  .ant-select-item-option-state {
    display: flex;
    align-items: center;
    padding-right: 8px;
  }
`;

const getSpanColor = props => {
  const { theme, color } = props;
  return get(theme.color, color);
};

export const StyledSpanOptionSelected = styled.span`
  display: flex;
  align-items: center;
  padding: 2px 4px;
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;
  opacity: 1;
  border-radius: 4px;
  margin: 0px;
  font-size: 14px;
  line-height: 14px;
  background: ${props => props.color && getSpanColor(props)};
  color: ${white};
  ${StyledIcon} {
    ${props =>
      props.icon &&
      css`
        &.icon {
          margin-right: 3px;
          margin-left: -2px;
        }
      `};
    ${props =>
      props.closable &&
      css`
        &.icon-close {
          cursor: pointer;
          margin-right: -2px;
          margin-left: 3px;
          fill: ${white};
        }
      `};
  }
`;

export const StyledSpanOption = styled.span`
  align-items: center;
  padding: 2px 4px;
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;
  opacity: 1;
  border-radius: 4px;
  margin: 0px;
`;

const getSelectOptionStyle = css`
  .ant-select-item-option {
    background-clip: content-box;
    border-radius: 4px;
  }
  .ant-select-multiple.ant-select-allow-clear .ant-select-selector,
  .ant-select-multiple.ant-select-show-arrow .ant-select-selector {
    padding-right: 60px !important;
  }
  .ant-select-item,
  .ant-select-item-empty {
    padding: 3px 14px 3px 8px;
  }
  .ant-select {
    z-index: 1001;
  }

  .selectable-icon {
    pointer-events: all;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 4px;
  }
  .ant-select-selection-overflow-item > .ant-select-selection-item {
    border-radius: 100px;
  }
  .ant-select-dropdown {
    border-radius: 4px;
    padding: 8px 8px 8px 0px;
  }
  .rc-virtual-list-scrollbar.rc-virtual-list-scrollbar-show {
    width: 6px !important;
  }
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: ${props => (props.theme ? primaryColor : primary)} !important;
  }

  .ant-select-arrow {
    pointer-events: all;
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: ${props => (props.theme ? primaryColor : primary)} !important;
    box-shadow: ${props =>
      props.theme
        ? `0 0 0 2px ${hexToRGBA(primaryColor(props), 0.2)}`
        : `0 0 0 2px ${hexToRGBA(primary, 0.2)}`};
  }
  .ant-select-item-option-active:not(.ant-select-item-option-disabled):not(.ant-select-item-option-selected) {
    background-color: ${color.gray50} !important;
  }
  .ant-select-item-option-active:not(.ant-select-item-option-disabled).ant-select-item-option-selected {
    filter: brightness(0.95);
  }

  .option-select.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    > div > span {
      padding: 4px !important;
    }
  }
`;

export const SelectOptionStyle = createGlobalStyle`
  ${getSelectOptionStyle};
`;
