import styled from 'styled-components';

const StyledToast = styled.div`
    position: fixed;
    z-index: 100000;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;

    /* Undo the user agent popover defaults, which centre the element and draw a box around it */
    &[popover] {
        inset: 0 0 auto auto;
        margin: 0;
        padding: 0;
        border: 0;
        overflow: visible;
        color: inherit;
        background: transparent;
    }
`;

export { StyledToast };
