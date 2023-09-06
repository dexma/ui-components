import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Cascader as CascaderAntd, ConfigProvider } from 'antd';
import theme from '../styles/theme';
import {
  CascaderOptionStyle,
  StyledTagSelected,
} from '../styles/components/StyledCascader';
import Icon from './Icon';

const propTypes = {
  /**
   * Starts the cascader with the dropdown opened.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * Whether support multiple or not.
   * @default false
   */
  multiple: PropTypes.bool,
  /**
   * The options data of cascader.
   * @default []
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.arrayOf(PropTypes.shape({})),
      disableCheckbox: PropTypes.bool,
      disabled: PropTypes.bool,
      isLeaf: PropTypes.bool,
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  /**
   * Callback executed when the user selects a value.
   * @param {string} value - The value of the selected option.
   * @returns {void}
   */
  onChange: PropTypes.func,
  /**
   * The theme to use for the cascader.
   * @default theme
   * @see See [ThemeProvider](/apiReference/ThemeProvider) for more information.
   */
  theme: PropTypes.shape({}),
};

export const tagRenderCascader = (props, theme) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <StyledTagSelected
      onMouseDown={onPreventMouseDown}
      onClose={onClose}
      style={{ marginRight: 4 }}
      data-testid={`tag-option-selected-${value}`}
      theme={theme}
    >
      {label}
      {closable && (
        <Icon
          className="icon-close"
          name="close"
          size="small"
          onClick={onClose}
          fillColor={theme.color.white}
        />
      )}
    </StyledTagSelected>
  );
};

const Cascader = props => {
  const { multiple, options, onChange, theme, open, ...rest } = props;
  const [currentOpen, setCurrentOpen] = useState(open || false);
  const ref = useRef(null);

  const handleOnChange = value => {
    onChange && onChange(value);
    if (!multiple) ref.current.blur() && setCurrentOpen(false);
  };

  return (
    <>
      <CascaderOptionStyle theme={theme} />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: theme.primary,
          },
        }}
      >
        <CascaderAntd
          data-testid="cascader"
          multiple={multiple}
          options={options}
          onChange={handleOnChange}
          maxTagCount="responsive"
          ref={r => {
            ref.current = r;
          }}
          onDropdownVisibleChange={e => {
            if (e !== currentOpen) {
              setCurrentOpen(e);
            }
          }}
          onFocus={() => {
            setCurrentOpen(true);
          }}
          tagRender={props => tagRenderCascader(props, theme)}
          maxTagPlaceholder={values => `+${values.length}`}
          open={currentOpen}
          {...rest}
        />
      </ConfigProvider>
    </>
  );
};

const defaultProps = {
  open: false,
  multiple: false,
  options: [],
  theme: theme,
};

Cascader.propTypes = propTypes;
Cascader.defaultProps = defaultProps;

export default Cascader;
