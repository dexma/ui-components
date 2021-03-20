import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';

import Cell from '../Cell';
import Heading from '../Heading';
import Button from '../Button';
import Chart from '../Chart';
import Table from '../Table';

import theme from '../../styles/theme';

import { StyledSectionData } from '../../styles/components/Section/StyledSectionData';

const propTypes = {
  /**
   * Type of layout
   */
  type: PropTypes.oneOf(['chart', 'table']).isRequired,
  /**
   * Title of the layout
   */
  title: PropTypes.string,
  /**
   * Status of chart | table
   */
  isLoading: PropTypes.bool,
  /**
   * Event called on export excel
   */
  onExportExcel: PropTypes.func,
  /**
   * Event called on export image
   */
  onExportImage: PropTypes.func,
  /**
   * Event called on add report
   */
  onAddReport: PropTypes.func,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  type: 'chart',
  theme: theme,
};

export const SectionData = forwardRef((props, ref) => {
  const {
    type,
    title,
    isLoading,
    onExportExcel,
    onExportImage,
    onAddReport,
    theme,
  } = props;
  const hasExportExcel = typeof onExportExcel === 'function';
  const hasExportImage = typeof onExportImage === 'function';
  const hasAddReport = typeof onAddReport === 'function';
  const hasButtons = hasExportExcel || hasExportImage || hasAddReport;
  const LayoutMainComponent = type === 'chart' ? Chart : Table;
  const layoutMainComponentProps = omit(props, [
    'type',
    'title',
    'onExportExcel',
    'onExportImage',
    'onAddReport',
  ]);
  return (
    <StyledSectionData
      theme={theme}
      data-testid={`section-data-${type}`}
      title={title}
      hasButtons={hasButtons}
    >
      <div className="section-top">
        {title && (
          <Cell className="section-title">
            <Heading type="h4" text={title} />
          </Cell>
        )}
        {hasButtons && (
          <Cell className="section-buttons">
            {hasExportExcel && (
              <Button
                variant="icon-secondary"
                iconBefore="export_file"
                onClick={onExportExcel}
                isCircle
                data-testid="excel"
                isDisabled={isLoading}
              />
            )}
            {hasExportImage && (
              <Button
                variant="icon-secondary"
                iconBefore="image"
                onClick={onExportImage}
                isCircle
                data-testid="image"
                isDisabled={isLoading}
              />
            )}
            {hasAddReport && (
              <Button
                variant="icon-secondary"
                iconBefore="report_add"
                onClick={onAddReport}
                isCircle
                data-testid="report"
                isDisabled={isLoading}
              />
            )}
          </Cell>
        )}
      </div>
      <Cell xs={12}>
        <LayoutMainComponent ref={ref} {...layoutMainComponentProps} />
      </Cell>
    </StyledSectionData>
  );
});

StyledSectionData.displayName = 'StyledSectionData';

SectionData.propTypes = propTypes;
SectionData.defaultProps = defaultProps;

export default withTheme(SectionData);
