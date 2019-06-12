import styled from 'styled-components';

const StyledModal = styled.div`
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
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
    border-radius: ${props => props.theme.globalRadius};
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transform: translate3d(0, 0, 0);
    transition: transform 500ms cubic-bezier(0, 0, 0.25, 1),
      opacity 500ms cubic-bezier(0, 0, 0.25, 1);
    width: ${props => props.width};
    height: ${props => props.height};
    padding: ${props => props.theme.globalPadding};
    margin: ${props => props.theme.globalPadding};
    z-index: 10002;
  }

  .panelHidden {
    opacity: 0;
    z-index: -1;
    height: 0;
    width: 0;
    overflow: hidden;
  }
`;

export { StyledModal };
