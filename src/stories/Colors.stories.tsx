import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Grid, Row, Cell, Paragraph } from '@components';
import defaultTheme, { type Theme } from '@utils/theme';

export default {
    title: 'Colors',
    tags: ['autodocs'],
    component: <div />,
};

const StyledColor = styled.div<{ theme: Theme; color: string }>`
    width: 100%;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 20px 0px 20px 0px;
    .background {
        background: ${(props) => get(props.theme.color, props.color)};
        width: 60px;
        height: 60px;
        margin: 0 auto;
        display: block;
        word-wrap: break-word;
        background-clip: border-box;
        border-radius: 50%;
        overflow: hidden;
        &:hover {
            box-shadow: 1px 2px 7px 0 rgba(0, 0, 0, 0.5);
        }
    }
    .text {
        font-size: 0.75rem;
    }
`;

const Color = ({ theme, text, color }: { theme: Theme; text: string; color: string }) => (
    <CopyToClipboard
        text={text}
        onCopy={() => {
            alert(`Copied ${text} successfully!`);
        }}
    >
        <StyledColor color={color}>
            <span className='background' />
            <span className='text'>
                {text} - {get(theme.color, color)}
            </span>
        </StyledColor>
    </CopyToClipboard>
);

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Base color palette</Paragraph>
            </Cell>
            {Object.keys(defaultTheme.color).map((color) => (
                <Cell xs={2} key={color}>
                    <Color color={color} text={color} theme={defaultTheme} />{' '}
                </Cell>
            ))}
        </Row>
    </Grid>
);
