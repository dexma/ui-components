import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import {
  StyledColorPanel,
  StyledColorPickerInput,
  StyledColorPickerLayout,
  StyledColorPickerPopover,
  StyledColorPickerSwatch,
  StyledSketchPicker,
  StyledSpinnerColorPicker,
} from '../styles/components/StyledColorPicker';
import withDataId from './DataId/withDataId';
import theme from '../styles/theme';

const ColorPicker = forwardRef((props, ref) => {
  const {
    dataId,
    initialColor,
    isLoading,
    placeholder,
    presetColors,
    onChangePicker,
    onChangeInput,
    showInput,
    value,
  } = props;
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    setColor(value);
  }, [value]);

  const handleClick = () => {
    setShowColorPicker(status => !status);
  };
  const handleClose = () => {
    setShowColorPicker(false);
  };

  const handleChangePicker = color => {
    setColor(color.hex);
    onChangePicker && onChangePicker(color);
  };
  const handleChangeInput = e => {
    setColor(e.target.value);
    onChangeInput && onChangeInput(e);
  };
  return (
    <>
      <StyledColorPickerLayout>
        <StyledColorPanel
          data-testid="color-picker"
          data-id={dataId}
          color={color}
          onClick={handleClick}
        />
        {showInput && (
          <StyledColorPickerInput
            data-testid="input-color-picker"
            value={!isLoading ? color : ''}
            ref={ref}
            placeholder={!isLoading ? placeholder : ''}
            onChange={handleChangeInput}
          />
        )}
        {isLoading && (
          <StyledSpinnerColorPicker showInput={showInput} size={20} />
        )}
      </StyledColorPickerLayout>
      {showColorPicker && (
        <StyledColorPickerPopover data-testid="popover-color-picker">
          <StyledColorPickerSwatch onClick={handleClose} />
          <StyledSketchPicker
            color={color}
            onChangeComplete={handleChangePicker}
            presetColors={presetColors}
            disableAlpha
          />
        </StyledColorPickerPopover>
      )}
    </>
  );
});

ColorPicker.propTypes = {
  /**
   *  data-id attribute to identfy the element in DOM
   */
  dataId: PropTypes.string,
  /**
   *  Initial color for the ColorPicker
   */
  initialColor: PropTypes.string,
  /**
   *  Boolean to identify if the ColorPicker is loading its value
   */
  isLoading: PropTypes.bool,
  /**
   *  Callback onChange when value changes through ColorPicker Popup
   */
  onChangePicker: PropTypes.func,
  /**
   *  Callback onChange when value changes through Input
   */
  onChangeInput: PropTypes.func,
  /**
   *  Extra properties for SketchPicker from http://casesandberg.github.io/react-color/#api-individual
   */
  options: PropTypes.shape({}),
  /**
   *  Placeholder input
   */
  placeholder: PropTypes.string,
  /**
   *  Array of colors to be suggested on the ColorPicker
   */
  presetColors: PropTypes.oneOfType([
    PropTypes.arrayOf({ color: PropTypes.string, title: PropTypes.string }),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /**
   *  Boolean to show or not the ancillary Input of ColorPicker
   */
  showInput: PropTypes.bool,
  /**
   * JSON object that applies styles to the component
   */
  theme: PropTypes.shape({}),
  /**
   * Current color for the ColorPicker
   */
  value: PropTypes.string,
};

ColorPicker.defaultProps = {
  dataId: 'colorpicker',
  initialColor: '#000000',
  placeholder: '#FFFFFF',
  presetColors: [],
  theme: theme,
};

export default withTheme(withDataId(ColorPicker));
