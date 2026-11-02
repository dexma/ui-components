import React from 'react';
import { Tag, TagGroup, Grid, Row, Cell, Paragraph, ParagraphProps } from '@components';

export default {
    title: 'Tag',
    component: Tag,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Tag is used to label, categorise, or organise items using keywords that describe them.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <TagGroup>
                    <Tag
                        color='teal'
                        onClick={() => {
                            alert('Click');
                        }}
                    >
                        Tag click
                    </Tag>
                    <Tag color='blue'>Tag</Tag>
                    <Tag color='blueLight'>Tag</Tag>
                    <Tag color='red'>Tag</Tag>
                    <Tag color='amber'>Tag</Tag>
                    <Tag color='orange'>Tag</Tag>
                    <Tag color='brown'>Tag</Tag>
                    <Tag color='gray'>Tag</Tag>
                    <Tag color='green'>Tag</Tag>
                    <Tag color='magenta'>Tag</Tag>
                    <Tag color='pink'>Tag</Tag>
                </TagGroup>
            </Cell>
            <Cell xs={12}>
                <TagGroup>
                    <Tag color='teal' variant='outline'>
                        Tag
                    </Tag>
                    <Tag color='blue' variant='outline'>
                        Tag
                    </Tag>
                    <Tag color='blueLight' variant='outline'>
                        Tag
                    </Tag>
                    <Tag color='red' variant='outline'>
                        Tag
                    </Tag>
                    <Tag color='amber' variant='outline'>
                        Tag
                    </Tag>
                    <Tag color='orange' variant='outline'>
                        Tag
                    </Tag>
                    <Tag color='brown' variant='outline'>
                        Tag
                    </Tag>
                    <Tag color='gray' variant='outline'>
                        Tag
                    </Tag>
                    <Tag color='green' variant='outline'>
                        Tag
                    </Tag>
                    <Tag color='magenta' variant='outline'>
                        Tag
                    </Tag>
                    <Tag color='pink' variant='outline'>
                        Tag
                    </Tag>
                </TagGroup>
            </Cell>
        </Row>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Tags can also be used with hexadecimal colors.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <TagGroup>
                    <Tag color='#333444'>Tag with hex</Tag>
                    <Tag color='#888444'>Tag with hex</Tag>
                    <Tag color='#333444' variant='outline'>
                        Tag with hex and outline
                    </Tag>
                    <Tag color='#888444' variant='outline'>
                        Tag with hex and outline
                    </Tag>
                </TagGroup>
            </Cell>
        </Row>
    </Grid>
);

const tagColors = ['irisBlue', 'blue', 'blueLight', 'red', 'amber', 'orange', 'brown', 'violet', 'green', 'cyan', 'magenta', 'gray', 'success', 'warning', 'error'];
const tagVariants = ['primary', 'outline', 'filled'] as const;

export const AllColors = () => (
    <Grid fluid>
        {(['normal', 'rounded'] as const).map((type) => (
            <Row key={type}>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>{type === 'normal' ? 'Radius 4' : 'Radius 100'}: solid, outline and filled.</Paragraph>
                </Cell>
                {tagVariants.map((variant) => (
                    <Cell xs={12} key={variant}>
                        <TagGroup>
                            {tagColors.map((color) => (
                                <Tag key={color} color={color} variant={variant} type={type}>
                                    Tag
                                </Tag>
                            ))}
                        </TagGroup>
                    </Cell>
                ))}
            </Row>
        ))}
    </Grid>
);

export const Filled = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Filled tags have a tinted background and no border.</Paragraph>
                <TagGroup>
                    <Tag color='irisBlue' variant='filled'>
                        Global
                    </Tag>
                    <Tag color='irisBlue' variant='filled' type='rounded'>
                        Global
                    </Tag>
                    <Tag color='violet' variant='filled' icon='alert'>
                        Sublocation
                    </Tag>
                    <Tag color='#888444' variant='filled'>
                        Tag with hex
                    </Tag>
                </TagGroup>
            </Cell>
        </Row>
    </Grid>
);

export const Icons = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <TagGroup>
                    <Tag color='teal' type='rounded' icon='alert'>
                        Tag
                    </Tag>
                    <Tag color='blue' type='rounded' icon='alert'>
                        Tag
                    </Tag>
                    <Tag color='blueLight' type='rounded' icon='alert'>
                        Tag
                    </Tag>
                    <Tag color='red' type='rounded' icon='alert'>
                        Tag
                    </Tag>
                    <Tag color='amber' type='rounded' icon='alert'>
                        Tag
                    </Tag>
                    <Tag color='orange' type='rounded' icon='alert'>
                        Tag
                    </Tag>
                    <Tag color='brown' type='rounded' icon='alert'>
                        Tag
                    </Tag>
                </TagGroup>
            </Cell>
        </Row>
        <Row>
            <Cell xs={12}>
                <TagGroup>
                    <Tag color='teal' variant='outline' type='rounded' icon='alert'>
                        Tag
                    </Tag>
                    <Tag color='blue' variant='outline' type='rounded' icon='alert'>
                        Tag
                    </Tag>
                    <Tag color='blueLight' variant='outline' type='rounded' icon='alert'>
                        Tag
                    </Tag>
                    <Tag color='red' variant='outline' type='rounded' icon='alert'>
                        Tag
                    </Tag>
                    <Tag color='amber' variant='outline' type='rounded' icon='alert'>
                        Tag
                    </Tag>
                    <Tag color='orange' variant='outline' type='rounded' icon='alert'>
                        Tag
                    </Tag>
                    <Tag color='brown' variant='outline' type='rounded' icon='alert'>
                        Tag
                    </Tag>
                </TagGroup>
            </Cell>
        </Row>
    </Grid>
);

export const Closable = () => (
    <Grid fluid>
        <Row>
            <Cell>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Tags.</Paragraph>
            </Cell>
            <TagGroup>
                <Tag
                    color='blue'
                    icon='alert'
                    closable
                    onClose={() => {
                        alert('Close me!');
                    }}
                >
                    Tag icon closable
                </Tag>
                <Tag
                    color='red'
                    closable
                    onClose={() => {
                        alert('Close me!');
                    }}
                >
                    Tag closable
                </Tag>
            </TagGroup>
        </Row>
    </Grid>
);

export const Playground = (args: ParagraphProps) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Tag Group.</Paragraph>
                <TagGroup>
                    <Tag {...args}>Tag</Tag>
                    <Tag {...args}>Tag</Tag>
                </TagGroup>
            </Cell>
        </Row>
    </Grid>
);
