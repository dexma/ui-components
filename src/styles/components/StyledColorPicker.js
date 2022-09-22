import styled from 'styled-components';
import Input from '../../components/Input';

const StyledColorPickerLayout = styled.div`
  display: flex;
  align-items: center;
`;

const StyledColorPickerInput = styled(Input)`
  margin-left: 8px;
  width: 96px;
  height: 22px;
`;

const StyledColorPanel = styled.div`
  padding: 5px;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  display: inline-block;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border-radius: 4.5px;
  background: ${props => `${props.color ? props.color : '#fff'}`};
`;

const StyledColorPickerSwatch = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const StyledColorPickerPopover = styled.div`
  position: absolute;
  z-index: 2;
  margin-top: 4px;
`;

export {
  StyledColorPickerLayout,
  StyledColorPickerInput,
  StyledColorPanel,
  StyledColorPickerPopover,
  StyledColorPickerSwatch,
};
