import styled from 'styled-components';
import { margin, borderRadius, boxShadow } from 'styles/selectors';

const StyledModal = styled.div`
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 10001;
  }

  .maskHidden {
    display: none;
  }

  .container {
    position: fixed;
    top: 120px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    z-index: 10000;
  }

  .containerHidden {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
  }

  .panel {
    background-color: #fff;
    border-radius: ${borderRadius};
    box-sizing: border-box;
    box-shadow: ${boxShadow};
    transform: translate3d(0, 0, 0);
    transition: transform 500ms cubic-bezier(0, 0, 0.25, 1),
      opacity 500ms cubic-bezier(0, 0, 0.25, 1);
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 1.25rem 0 0.5rem 0;
    margin: ${margin};
    z-index: 10002;
  }

  .panelHidden {
    opacity: 0;
    z-index: -1;
    height: 0;
    width: 0;
    overflow: hidden;
  }

  .close-icon {
    border: 0px;
    float: right;
    position: absolute;
    top: 10px;
    right: 5px;
  }
`;

export { StyledModal };
