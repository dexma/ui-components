import styled, { css } from 'styled-components';
import {
  red,
  gray200,
  gray300,
  gray600,
  formControlMessageFontSize,
} from '../selectors';
import { error, success } from '../theme';

const StyledFormControl = styled.div`
  .form-control-textarea,
  .form-control-input {
    color: ${gray600};
  }
  .form-control-textarea {
    width: 100%;
    font-size: 1rem;
    display: inline-flex;
    border-width: 1px;
    border-style: solid;
    border-color: ${gray200};
    border-image: initial;
    border-radius: 4px;
    padding: 0.75rem;
    flex: 1 1 auto;
  }
  ${props =>
    props.error &&
    css`
      .DateRangePickerInput,
      .select-styled__control,
      .form-control-input,
      .form-control-textarea {
        border-color: ${error}!important;
      }
    `}
  ${props =>
    props.success &&
    css`
      .DateRangePickerInput,
      .select-styled__control,
      .form-control-input,
      .form-control-textarea {
        border-color: ${success}!important;
      }
    `}
  .form-error-message {
    color: ${red};
    text-align: left;
  }
  .select-styled__menu-list {
    max-height: 192px;
  }
  .select-styled__option {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .select-styled__placeholder,
  textarea::placeholder,
  input::placeholder {
    color: ${gray300};
  }
  .form-control-message {
    font-size: ${formControlMessageFontSize};
    color: ${props => {
      let colorMessage = gray300;
      props.disabled && (colorMessage = gray200);
      props.error && (colorMessage = error);
      return colorMessage;
    }};
  }
`;

export { StyledFormControl };
