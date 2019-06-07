import styled from 'styled-components';

const StyledSwitchPeriodComparative = styled.div`
  display: flex;
  .compare-period {
    position: relative;
    width: auto;
    .calendar-icon {
      position: absolute;
      top: 1px;
      left: calc(50% - 25px);
      z-index: 9999;
      background: #fff;
      width: 50px;
      text-align: center;
      height: calc(100% - 2px);
      border-radius: 50%;
      display: flex;
      align-items: center;
      align-content: center;
      i {
        margin: 0 auto;
      }
    }
    .StyledFieldGroup-bSrafc {
      label {
        background: #e2e2e2;
        &:first-child {
          padding-right: 30px;
        }
        &:last-child {
          padding-left: 30px;
        }
        &.active {
          background: #fff;
          border-color: #e2e2e2;
          .title {
            font-weight: 600;
            color: rgb(97, 137, 22);
          }
          .dates {
            color: #666;
          }
        }
      }
    }
    .compare-period-item {
      .title {
        font-size: 13px;
        width: 100%;
        padding: 6px 0px 0px 0px;
        color: #a2a2a2;
      }
      .dates {
        font-size: 11.5px;
        padding: 0px 0px 6px 0px;
        color: #a2a2a2;
      }
    }
  }
`;

export { StyledSwitchPeriodComparative };
