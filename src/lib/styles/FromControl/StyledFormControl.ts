import styled, { css } from 'styled-components';
import { error, success } from '@utils/theme';
import { formControlMessageFontSize, gray200, gray300, gray600, red } from '@utils/selectors';

const StyledFormControl = styled.div<{ $error?: boolean; $success?: boolean }>`
    .form-control-textarea,
    .form-control-input {
        color: ${(props) => gray600(props.theme)};
    }
    .form-control-textarea {
        width: 100%;
        font-size: 1rem;
        display: inline-flex;
        border-width: 1px;
        border-style: solid;
        border-color: ${(props) => gray200(props.theme)};
        border-image: initial;
        border-radius: 4px;
        padding: 0.75rem;
        flex: 1 1 auto;
    }
    ${(props) =>
        props.$error &&
        css`
            .DateRangePickerInput,
            .select-styled__control,
            .form-control-input,
            .form-control-textarea {
                border-color: ${error}!important;
            }
        `}
    ${(props) =>
        props.$success &&
        css`
            .DateRangePickerInput,
            .select-styled__control,
            .form-control-input,
            .form-control-textarea {
                border-color: ${success}!important;
            }
        `}
  .form-error-message {
        color: ${(props) => red(props.theme)};
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
        color: ${(props) => gray300(props.theme)};
    }
    .form-control-message {
        font-size: ${(props) => formControlMessageFontSize(props.theme)};
        color: ${(props) => {
            let colorMessage = gray300(props.theme);
            if (props.$error) colorMessage = error;
            return colorMessage;
        }};
    }
`;

export { StyledFormControl };
