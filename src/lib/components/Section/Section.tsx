import React from 'react';

import defaultTheme from '@utils/theme';
import { Cell, Heading, Button } from '@components';
import { withDataId } from '@components/DataId/withDataId';
import { StyledSection } from '@styles/Section/StyledSection';

type SectionProps = {
    dataId?: string;
    children: JSX.Element;
    title?: string;
    isLoading?: boolean;
    onExportExcel?: () => void;
    onExportImage?: () => void;
    onAddReport?: () => void;
};

export const Section = withDataId((props: SectionProps) => {
    const { title, isLoading, onExportExcel, onExportImage, onAddReport, children, dataId } = props;
    const hasExportExcel = !!onExportExcel;
    const hasExportImage = !!onExportImage;
    const hasAddReport = !!onAddReport;
    const hasButtons = hasExportExcel || hasExportImage || hasAddReport;
    return (
        <StyledSection theme={defaultTheme} $title={!!title} $hasButtons={!!hasButtons}>
            <div className='section-top' data-testid='section-data' data-id={dataId}>
                {title && (
                    <Cell className='section-title'>
                        <Heading type='h4' text={title} />
                    </Cell>
                )}
                {hasButtons && (
                    <Cell className='section-buttons'>
                        <>
                            {hasExportExcel && (
                                <Button variant='icon-secondary' iconBefore='export_file' onClick={onExportExcel} isCircle data-testid='excel' isDisabled={isLoading} />
                            )}
                            {hasExportImage && <Button variant='icon-secondary' iconBefore='image' onClick={onExportImage} isCircle data-testid='image' isDisabled={isLoading} />}
                            {hasAddReport && <Button variant='icon-secondary' iconBefore='report_add' onClick={onAddReport} isCircle data-testid='report' isDisabled={isLoading} />}
                        </>
                    </Cell>
                )}
            </div>
            <Cell xs={12}>{children && children}</Cell>
        </StyledSection>
    );
}, 'section-data');

StyledSection.displayName = 'StyledSectionData';
