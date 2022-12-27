import { SketchPicker } from 'react-color';
import styled from 'styled-components';
import Input from '../../components/Input';
import Spinner from '../../components/Spinner';

const StyledColorPickerLayout = styled.div`
  display: flex;
  align-items: center;
`;

const StyledColorPickerInput = styled(Input)`
  margin-left: 8px;
  width: 96px;
`;

const StyledSpinnerColorPicker = styled(Spinner)`
  position: absolute;
  margin-left: ${props => `${props.showInput ? '96px' : '40px'}`};
`;

const StyledColorPanel = styled.div`
  padding: 5px;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  display: inline-block;
  cursor: pointer;
  width: 22px;
  height: 22px;
  border-radius: 4.5px;
  background: ${props => `${props.color ? props.color : '#fff'}`};
`;

const StyledSketchPicker = styled(SketchPicker)`
  position: absolute;
  z-index: 1000;
`;

const StyledColorPickerSwatch = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const StyledColorPickerPopover = styled.div`
  z-index: 2;
  margin-top: 4px;
`;

export {
  StyledColorPickerLayout,
  StyledColorPickerInput,
  StyledSketchPicker,
  StyledSpinnerColorPicker,
  StyledColorPanel,
  StyledColorPickerPopover,
  StyledColorPickerSwatch,
};
