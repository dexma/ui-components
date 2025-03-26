import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import icon from '@config/icon';
import { Icon, Grid, Row, Cell, Paragraph, Input, IconProps } from '@components';

const StyledBoxSearch = styled.div`
    width: 100%;
    .search {
        padding: 13px 25px;
        border: 1px solid #d6d8db;
        border-radius: 4px;
        width: 100%;
        display: block;
        margin: 25px auto 50px auto;
    }
    .box-icon {
        text-align: center;
    }
`;

export default {
    title: 'Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {
                type: 'number',
            },
        },
    },
};

export const Sizes = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else you can set the size and color</Paragraph>
            </Cell>
            <Cell>
                <Icon size={70} ariaLabel='aria-label example' />
            </Cell>
            <Cell>
                <Icon size={60} color='red' ariaLabel='aria-label example' />
            </Cell>
            <Cell>
                <Icon size={50} ariaLabel='aria-label example' />
            </Cell>
            <Cell>
                <Icon size={40} ariaLabel='aria-label example' />
            </Cell>
            <Cell>
                <Icon size={30} ariaLabel='aria-label example' />
            </Cell>
            <Cell>
                <Icon size={20} ariaLabel='aria-label example' />
            </Cell>
        </Row>
    </Grid>
);

const SearchIcons = () => {
    const [value, setValue] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const getIcons = (searchValue: string) =>
        icon
            .filter((i: { name: string }) => i.name.includes(searchValue))
            .map((iconItem: { name: string }) => (
                <Cell key={iconItem.name} xs={2} className='box-icon'>
                    <Icon name={iconItem.name} size={40} ariaLabel={`${iconItem.name} icon`} />
                    <Paragraph margin='.6rem'>{iconItem.name}</Paragraph>
                </Cell>
            ));

    return (
        <StyledBoxSearch>
            <Row>
                <Cell xs={12} className='search'>
                    <Input type='text' placeholder='Search icon' onChange={handleChange} icon='search' label='Search' />
                </Cell>
                {getIcons(value)}
            </Row>
        </StyledBoxSearch>
    );
};

export const Icons = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else</Paragraph>
            </Cell>
            <SearchIcons />
        </Row>
    </Grid>
);

export const Playground = (args: IconProps) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else</Paragraph>
            </Cell>
            <Icon {...args} />
        </Row>
    </Grid>
);
