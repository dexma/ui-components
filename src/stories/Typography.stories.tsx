import React from 'react';
import styled from 'styled-components';

import { Grid, Row, Cell, Typography } from '@components';
import defaultTheme, { type Theme } from '@utils/theme';
import { type TypographyVariant, type TypographyWeight } from '@styles/Typography/StyledTypography';

export default {
    title: 'Typography',
    tags: ['autodocs'],
    component: Typography,
};

const variants: TypographyVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'xlarge', 'large', 'medium', 'small'];
const weights: TypographyWeight[] = ['light', 'normal', 'medium', 'semiBold', 'bold'];

const StyledToken = styled.div<{ theme: Theme }>`
    padding: 8px 0;
    border-bottom: 1px solid ${(props) => props.theme.color.gray200};
    .meta {
        font-size: 0.75rem;
        color: ${(props) => props.theme.color.gray500};
    }
`;

export const Variants = {
    render: () => (
        <Grid>
            {variants.map((variant) => (
                <Row key={variant}>
                    <Cell>
                        <StyledToken theme={defaultTheme}>
                            <Typography variant={variant}>The quick brown fox jumps over the lazy dog</Typography>
                            <div className='meta'>variant=&quot;{variant}&quot;</div>
                        </StyledToken>
                    </Cell>
                </Row>
            ))}
        </Grid>
    ),
};

export const Weights = {
    render: () => (
        <Grid>
            {weights.map((weight) => (
                <Row key={weight}>
                    <Cell>
                        <StyledToken theme={defaultTheme}>
                            <Typography variant='large' weight={weight}>
                                The quick brown fox jumps over the lazy dog
                            </Typography>
                            <div className='meta'>weight=&quot;{weight}&quot;</div>
                        </StyledToken>
                    </Cell>
                </Row>
            ))}
        </Grid>
    ),
};

/**
 * Montserrat's default figures are proportional, so the library sets `font-feature-settings: 'tnum'`
 * globally. These columns must stay visually aligned — if they do not, tabular figures were lost.
 */
export const TabularFigures = {
    render: () => (
        <Grid>
            {['1111111111', '0000000000', '1234567890', '1010101010'].map((digits) => (
                <Row key={digits}>
                    <Cell>
                        <Typography variant='large'>{digits}</Typography>
                    </Cell>
                </Row>
            ))}
        </Grid>
    ),
};

/** Shipped subsets: latin, latin-ext (pl_PL), cyrillic (bg_BG). zh_CN falls back to a system CJK face. */
export const Subsets = {
    render: () => (
        <Grid>
            {[
                { label: 'latin', sample: 'Consumption, energía, français, português' },
                { label: 'latin-ext (pl_PL)', sample: 'Zużycie energii — łąka, ćma, źrebię, świeża' },
                { label: 'cyrillic (bg_BG)', sample: 'Потребление на енергия' },
                { label: 'CJK (zh_CN) — system fallback', sample: '能源消耗' },
            ].map(({ label, sample }) => (
                <Row key={label}>
                    <Cell>
                        <StyledToken theme={defaultTheme}>
                            <Typography variant='large'>{sample}</Typography>
                            <div className='meta'>{label}</div>
                        </StyledToken>
                    </Cell>
                </Row>
            ))}
        </Grid>
    ),
};
