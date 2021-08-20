import styled from 'styled-components';

import {
  primaryColor,
  gray200,
  gray500,
  gray700,
  white,
  fontWeightNormal,
  fontWeightBold,
  tabFontSize,
} from '../selectors';

const StyledTabs = styled.div`
  height: ${props => (props.variant === 'scrollable' ? '100%' : 'auto')};

  .ant-tabs-bar {
    margin: ${props =>
      props.variant === 'scrollable' ? '0 !important' : null};
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-nav-container {
    height: 40px;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-ink-bar {
    visibility: hidden;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
    height: 40px;
    margin: 0;
    margin-right: 2px;
    padding: 0 16px;
    line-height: 38px;
    background: ${white};
    border: 1px solid ${gray200};
    border-radius: 4px 4px 0 0;
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
    height: 40px;
    color: ${primaryColor};
    background: ${white};
    border-color: ${gray200};
    border-bottom: 1px solid ${white};
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active::before {
    border-top: 2px solid transparent;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-disabled {
    color: ${primaryColor};
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-inactive {
    padding: 0;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-nav-wrap {
    margin-bottom: 0;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x {
    width: 16px;
    height: 16px;
    height: 14px;
    margin-right: -5px;
    margin-left: 3px;
    overflow: hidden;
    color: ${gray500};
    font-size: ${tabFontSize};
    vertical-align: middle;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .ant-tabs.ant-tabs-card
    .ant-tabs-card-bar
    .ant-tabs-tab
    .ant-tabs-close-x:hover {
    color: ${gray500};
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-content > .ant-tabs-tabpane,
  .ant-tabs.ant-tabs-editable-card .ant-tabs-card-content > .ant-tabs-tabpane {
    -webkit-transition: none !important;
    transition: none !important;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-content > .ant-tabs-tabpane-inactive,
  .ant-tabs.ant-tabs-editable-card
    .ant-tabs-card-content
    > .ant-tabs-tabpane-inactive {
    overflow: hidden;
  }
  .ant-tabs.ant-tabs-card
    .ant-tabs-card-bar
    .ant-tabs-tab:hover
    .anticon-close {
    opacity: 1;
  }
  .ant-tabs-extra-content {
    line-height: 45px;
  }
  .ant-tabs-extra-content .ant-tabs-new-tab {
    position: relative;
    width: 20px;
    height: 20px;
    color: ${gray500};
    font-size: ${tabFontSize};
    line-height: 20px;
    text-align: center;
    border: 1px solid ${gray200};
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .ant-tabs-extra-content .ant-tabs-new-tab:hover {
    color: ${primaryColor};
    border-color: ${primaryColor};
  }
  .ant-tabs-extra-content .ant-tabs-new-tab svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .ant-tabs.ant-tabs-large .ant-tabs-extra-content {
    line-height: 56px;
  }
  .ant-tabs.ant-tabs-small .ant-tabs-extra-content {
    line-height: 37px;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-extra-content {
    line-height: 40px;
  }
  .ant-tabs-vertical.ant-tabs-card
    .ant-tabs-card-bar.ant-tabs-left-bar
    .ant-tabs-nav-container,
  .ant-tabs-vertical.ant-tabs-card
    .ant-tabs-card-bar.ant-tabs-right-bar
    .ant-tabs-nav-container {
    height: 100%;
  }
  .ant-tabs-vertical.ant-tabs-card
    .ant-tabs-card-bar.ant-tabs-left-bar
    .ant-tabs-tab,
  .ant-tabs-vertical.ant-tabs-card
    .ant-tabs-card-bar.ant-tabs-right-bar
    .ant-tabs-tab {
    margin-bottom: 8px;
    border-bottom: 1px solid ${gray200};
  }
  .ant-tabs-vertical.ant-tabs-card
    .ant-tabs-card-bar.ant-tabs-left-bar
    .ant-tabs-tab-active,
  .ant-tabs-vertical.ant-tabs-card
    .ant-tabs-card-bar.ant-tabs-right-bar
    .ant-tabs-tab-active {
    padding-bottom: 4px;
  }
  .ant-tabs-vertical.ant-tabs-card
    .ant-tabs-card-bar.ant-tabs-left-bar
    .ant-tabs-tab:last-child,
  .ant-tabs-vertical.ant-tabs-card
    .ant-tabs-card-bar.ant-tabs-right-bar
    .ant-tabs-tab:last-child {
    margin-bottom: 8px;
  }
  .ant-tabs-vertical.ant-tabs-card
    .ant-tabs-card-bar.ant-tabs-left-bar
    .ant-tabs-new-tab,
  .ant-tabs-vertical.ant-tabs-card
    .ant-tabs-card-bar.ant-tabs-right-bar
    .ant-tabs-new-tab {
    width: 90%;
  }
  .ant-tabs-vertical.ant-tabs-card.ant-tabs-left
    .ant-tabs-card-bar.ant-tabs-left-bar
    .ant-tabs-nav-wrap {
    margin-right: 0;
  }
  .ant-tabs-vertical.ant-tabs-card.ant-tabs-left
    .ant-tabs-card-bar.ant-tabs-left-bar
    .ant-tabs-tab {
    margin-right: 1px;
    border-right: 0;
    border-radius: 4px 0 0 4px;
  }
  .ant-tabs-vertical.ant-tabs-card.ant-tabs-left
    .ant-tabs-card-bar.ant-tabs-left-bar
    .ant-tabs-tab-active {
    margin-right: -1px;
    padding-right: 18px;
  }
  .ant-tabs-vertical.ant-tabs-card.ant-tabs-right
    .ant-tabs-card-bar.ant-tabs-right-bar
    .ant-tabs-nav-wrap {
    margin-left: 0;
  }
  .ant-tabs-vertical.ant-tabs-card.ant-tabs-right
    .ant-tabs-card-bar.ant-tabs-right-bar
    .ant-tabs-tab {
    margin-left: 1px;
    border-left: 0;
    border-radius: 0 4px 4px 0;
  }
  .ant-tabs-vertical.ant-tabs-card.ant-tabs-right
    .ant-tabs-card-bar.ant-tabs-right-bar
    .ant-tabs-tab-active {
    margin-left: -1px;
    padding-left: 18px;
  }
  .ant-tabs .ant-tabs-card-bar.ant-tabs-bottom-bar .ant-tabs-tab {
    height: auto;
    border-top: 0;
    border-bottom: 1px solid ${gray200};
    border-radius: 0 0 4px 4px;
  }
  .ant-tabs .ant-tabs-card-bar.ant-tabs-bottom-bar .ant-tabs-tab-active {
    padding-top: 1px;
    padding-bottom: 0;
    color: ${primaryColor};
  }
  .ant-tabs {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${gray500};
    font-size: ${tabFontSize};
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    overflow: hidden;
    zoom: 1;
  }
  .ant-tabs::before,
  .ant-tabs::after {
    display: table;
    content: '';
  }
  .ant-tabs::after {
    clear: both;
  }
  .ant-tabs-ink-bar {
    position: absolute;
    bottom: 1px;
    left: 0;
    z-index: 1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 2px;
    background-color: ${primaryColor};
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  .ant-tabs-bar {
    margin: 0 0 16px 0;
    border-bottom: 1px solid ${gray200};
    outline: none;
    -webkit-transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-tabs-nav-container {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: -1px;
    overflow: hidden;
    font-size: ${tabFontSize};
    line-height: 1.5;
    white-space: nowrap;
    -webkit-transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    zoom: 1;
  }
  .ant-tabs-nav-container::before,
  .ant-tabs-nav-container::after {
    display: table;
    content: '';
  }
  .ant-tabs-nav-container::after {
    clear: both;
  }
  .ant-tabs-nav-container-scrolling {
    padding-right: 32px;
    padding-left: 32px;
  }
  .ant-tabs-bottom .ant-tabs-bottom-bar {
    margin-top: 16px;
    margin-bottom: 0;
    border-top: 1px solid ${gray200};
    border-bottom: none;
  }
  .ant-tabs-bottom .ant-tabs-bottom-bar .ant-tabs-ink-bar {
    top: 1px;
    bottom: auto;
  }
  .ant-tabs-bottom .ant-tabs-bottom-bar .ant-tabs-nav-container {
    margin-top: -1px;
    margin-bottom: 0;
  }
  .ant-tabs-tab-prev,
  .ant-tabs-tab-next {
    position: absolute;
    z-index: 2;
    width: 0;
    height: 100%;
    color: ${gray500};
    text-align: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    opacity: 0;
    -webkit-transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }
  .ant-tabs-tab-prev.ant-tabs-tab-arrow-show,
  .ant-tabs-tab-next.ant-tabs-tab-arrow-show {
    width: 32px;
    height: 100%;
    opacity: 1;
    pointer-events: auto;
  }
  .ant-tabs-tab-prev:hover,
  .ant-tabs-tab-next:hover {
    color: ${gray500};
  }
  .ant-tabs-tab-prev-icon,
  .ant-tabs-tab-next-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-weight: ${fontWeightBold};
    font-style: normal;
    font-variant: normal;
    line-height: inherit;
    text-align: center;
    text-transform: none;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .ant-tabs-tab-prev-icon-target,
  .ant-tabs-tab-next-icon-target {
    display: block;
    display: inline-block;
    font-size: ${tabFontSize};
    font-size: 10px \\9;
    -webkit-transform: scale(0.83333333) rotate(0deg);
    -ms-transform: scale(0.83333333) rotate(0deg);
    transform: scale(0.83333333) rotate(0deg);
  }
  :root .ant-tabs-tab-prev-icon-target,
  :root .ant-tabs-tab-next-icon-target {
    font-size: ${tabFontSize};
  }
  .ant-tabs-tab-btn-disabled {
    cursor: not-allowed;
  }
  .ant-tabs-tab-btn-disabled,
  .ant-tabs-tab-btn-disabled:hover {
    color: ${gray500};
  }
  .ant-tabs-tab-next {
    right: 2px;
  }
  .ant-tabs-tab-prev {
    left: 0;
  }
  :root .ant-tabs-tab-prev {
    -webkit-filter: none;
    filter: none;
  }
  .ant-tabs-nav-wrap {
    margin-bottom: -1px;
    overflow: hidden;
  }
  .ant-tabs-nav-scroll {
    overflow: hidden;
    white-space: nowrap;
  }
  .ant-tabs-nav {
    position: relative;
    display: inline-block;
    -webkit-box-sizing: border-box;
    width: ${props => (props.variant === 'scrollable' ? '100%' : 'auto')};
    box-sizing: border-box;
    margin: 0;
    padding-left: 0;
    list-style: none;
    -webkit-transition: -webkit-transform 0.3s
      cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .ant-tabs-nav::before,
  .ant-tabs-nav::after {
    display: table;
    content: ' ';
  }
  .ant-tabs-nav::after {
    clear: both;
  }

  .ant-tabs-tab {
    flex: ${props => (props.variant === 'scrollable' ? '1 1 auto' : null)};
    margin: ${props =>
      props.variant === 'scrollable' ? '0 !important' : null};
    text-align: ${props => (props.variant === 'scrollable' ? 'center' : null)};
    font-size: ${props => (props.variant === 'scrollable' ? '14px' : null)};
  }

  .ant-tabs-nav div:first-of-type {
    display: ${props => (props.variant === 'scrollable' ? 'flex' : null)};

    div {
      display: ${props => (props.variant === 'scrollable' ? 'inline' : null)};
    }
  }
  .ant-tabs-nav .ant-tabs-tab {
    position: relative;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
    margin: 0 32px 0 0;
    padding: 12px 16px;
    text-decoration: none;
    cursor: pointer;
    -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-tabs-nav .ant-tabs-tab::before {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    border-top: 2px solid transparent;
    border-radius: 4px 4px 0 0;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    content: '';
    pointer-events: none;
  }
  .ant-tabs-nav .ant-tabs-tab:last-child {
    margin-right: 0;
  }
  .ant-tabs-nav .ant-tabs-tab:hover {
    color: ${props =>
      props.variant === 'scrollable' ? gray700 : primaryColor};
  }
  .ant-tabs-nav .ant-tabs-tab:active {
    color: ${primaryColor};
  }
  .ant-tabs-nav .ant-tabs-tab .anticon {
    margin-right: 8px;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: ${props =>
      props.variant === 'scrollable' ? gray700 : primaryColor};
    font-weight: ${props =>
      props.variant === 'scrollable' ? fontWeightBold : fontWeightNormal};
  }
  .ant-tabs-nav .ant-tabs-tab-disabled,
  .ant-tabs-nav .ant-tabs-tab-disabled:hover {
    color: ${gray500};
    cursor: not-allowed;
  }
  .ant-tabs .ant-tabs-large-bar .ant-tabs-nav-container {
    font-size: ${tabFontSize};
  }
  .ant-tabs .ant-tabs-large-bar .ant-tabs-tab {
    padding: 16px;
  }
  .ant-tabs .ant-tabs-small-bar .ant-tabs-nav-container {
    font-size: ${tabFontSize};
  }
  .ant-tabs .ant-tabs-small-bar .ant-tabs-tab {
    padding: 8px 16px;
  }
  .ant-tabs-content::before {
    display: block;
    overflow: hidden;
    content: '';
  }

  .ant-tabs .ant-tabs-top-content,
  .ant-tabs .ant-tabs-bottom-content {
    width: 100%;
  }
  .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane,
  .ant-tabs .ant-tabs-bottom-content > .ant-tabs-tabpane {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    opacity: 1;
    -webkit-transition: opacity 0.45s;
    transition: opacity 0.45s;
  }
  .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane-inactive,
  .ant-tabs .ant-tabs-bottom-content > .ant-tabs-tabpane-inactive {
    height: 0;
    padding: 0 !important;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }
  .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane-inactive input,
  .ant-tabs .ant-tabs-bottom-content > .ant-tabs-tabpane-inactive input {
    visibility: hidden;
  }
  .ant-tabs .ant-tabs-top-content.ant-tabs-content-animated,
  .ant-tabs .ant-tabs-bottom-content.ant-tabs-content-animated {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    will-change: margin-left;
  }
  .ant-tabs .ant-tabs-left-bar,
  .ant-tabs .ant-tabs-right-bar {
    height: 100%;
    border-bottom: 0;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-tab-arrow-show,
  .ant-tabs .ant-tabs-right-bar .ant-tabs-tab-arrow-show {
    width: 100%;
    height: 32px;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-tab,
  .ant-tabs .ant-tabs-right-bar .ant-tabs-tab {
    display: block;
    float: none;
    margin: 0 0 16px 0;
    padding: 8px 24px;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-tab:last-child,
  .ant-tabs .ant-tabs-right-bar .ant-tabs-tab:last-child {
    margin-bottom: 0;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-extra-content,
  .ant-tabs .ant-tabs-right-bar .ant-tabs-extra-content {
    text-align: center;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-nav-scroll,
  .ant-tabs .ant-tabs-right-bar .ant-tabs-nav-scroll {
    width: auto;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-nav-container,
  .ant-tabs .ant-tabs-right-bar .ant-tabs-nav-container,
  .ant-tabs .ant-tabs-left-bar .ant-tabs-nav-wrap,
  .ant-tabs .ant-tabs-right-bar .ant-tabs-nav-wrap {
    height: 100%;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-nav-container,
  .ant-tabs .ant-tabs-right-bar .ant-tabs-nav-container {
    margin-bottom: 0;
  }
  .ant-tabs
    .ant-tabs-left-bar
    .ant-tabs-nav-container.ant-tabs-nav-container-scrolling,
  .ant-tabs
    .ant-tabs-right-bar
    .ant-tabs-nav-container.ant-tabs-nav-container-scrolling {
    padding: 32px 0;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-nav-wrap,
  .ant-tabs .ant-tabs-right-bar .ant-tabs-nav-wrap {
    margin-bottom: 0;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-nav,
  .ant-tabs .ant-tabs-right-bar .ant-tabs-nav {
    width: 100%;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-ink-bar,
  .ant-tabs .ant-tabs-right-bar .ant-tabs-ink-bar {
    top: 0;
    bottom: auto;
    left: auto;
    width: 2px;
    height: auto;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-tab-next,
  .ant-tabs .ant-tabs-right-bar .ant-tabs-tab-next {
    right: 0;
    bottom: 0;
    width: 100%;
    height: 32px;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-tab-prev,
  .ant-tabs .ant-tabs-right-bar .ant-tabs-tab-prev {
    top: 0;
    width: 100%;
    height: 32px;
  }
  .ant-tabs .ant-tabs-left-content,
  .ant-tabs .ant-tabs-right-content {
    width: auto;
    margin-top: 0 !important;
    overflow: hidden;
  }
  .ant-tabs .ant-tabs-left-bar {
    float: left;
    margin-right: -1px;
    margin-bottom: 0;
    border-right: 1px solid ${gray200};
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-tab {
    text-align: right;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-nav-container {
    margin-right: -1px;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-nav-wrap {
    margin-right: -1px;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-ink-bar {
    right: 1px;
  }
  .ant-tabs .ant-tabs-left-content {
    padding-left: 24px;
    border-left: 1px solid ${gray200};
  }
  .ant-tabs .ant-tabs-right-bar {
    float: right;
    margin-bottom: 0;
    margin-left: -1px;
    border-left: 1px solid ${gray200};
  }
  .ant-tabs .ant-tabs-right-bar .ant-tabs-nav-container {
    margin-left: -1px;
  }
  .ant-tabs .ant-tabs-right-bar .ant-tabs-nav-wrap {
    margin-left: -1px;
  }
  .ant-tabs .ant-tabs-right-bar .ant-tabs-ink-bar {
    left: 1px;
  }
  .ant-tabs .ant-tabs-right-content {
    padding-right: 24px;
    border-right: 1px solid ${gray200};
  }
  .ant-tabs-top .ant-tabs-ink-bar-animated,
  .ant-tabs-bottom .ant-tabs-ink-bar-animated {
    -webkit-transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-tabs-left .ant-tabs-ink-bar-animated,
  .ant-tabs-right .ant-tabs-ink-bar-animated {
    -webkit-transition: height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .no-flex > .ant-tabs-content > .ant-tabs-content-animated,
  .ant-tabs-no-animation > .ant-tabs-content > .ant-tabs-content-animated {
    margin-left: 0 !important;
    -webkit-transform: none !important;
    -ms-transform: none !important;
    transform: none !important;
  }
  .no-flex > .ant-tabs-content > .ant-tabs-tabpane-inactive,
  .ant-tabs-no-animation > .ant-tabs-content > .ant-tabs-tabpane-inactive {
    height: 0;
    padding: 0 !important;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }

  .ant-tabs {
    height: ${props => (props.variant === 'scrollable' ? '100%' : 'auto')};
    display: ${props => (props.variant === 'scrollable' ? 'flex' : null)};
    flex-direction: ${props =>
      props.variant === 'scrollable' ? 'column' : null};
  }

  .ant-tabs-content {
    flex: ${props => (props.variant === 'scrollable' ? '1 1 auto' : null)};
    overflow: ${props => (props.variant === 'scrollable' ? 'auto' : null)};
  }
  .no-flex > .ant-tabs-content > .ant-tabs-tabpane-inactive input,
  .ant-tabs-no-animation
    > .ant-tabs-content
    > .ant-tabs-tabpane-inactive
    input {
    visibility: hidden;
  }
  .ant-tabs-left-content > .ant-tabs-content-animated,
  .ant-tabs-right-content > .ant-tabs-content-animated {
    margin-left: 0 !important;
    -webkit-transform: none !important;
    -ms-transform: none !important;
    transform: none !important;
  }
  .ant-tabs-left-content > .ant-tabs-tabpane-inactive,
  .ant-tabs-right-content > .ant-tabs-tabpane-inactive {
    height: 0;
    padding: 0 !important;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }
  .ant-tabs-left-content > .ant-tabs-tabpane-inactive input,
  .ant-tabs-right-content > .ant-tabs-tabpane-inactive input {
    visibility: hidden;
  }
`;

export { StyledTabs };
