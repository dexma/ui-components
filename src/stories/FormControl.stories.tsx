import React from 'react';
import { Cell, FormControl, Grid, Paragraph, Row } from '@components';

const options = [
    { value: '1', label: '1st Floor [01. Luxemburg Building]' },
    { value: '2', label: '1st Floor [02. Luxemburg Building]' },
    { value: '3', label: '1st Floor [03. Luxemburg Building]' },
    { value: '4', label: '1st Floor [04. Luxemburg Building]' },
    { value: '5', label: '1st Floor [05. Luxemburg Building]' },
    { value: '6', label: '1st Floor [06. Luxemburg Building]' },
];

export default {
    title: 'FormControl',
    component: FormControl,
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Form Control</Paragraph>
            </Cell>
            <Cell xs={12}>
                <div
                    style={{
                        background: '#f5f5f5',
                        padding: '1.5em',
                        position: 'relative',
                        marginTop: '30px',
                    }}
                >
                    <FormControl control='Input' inputLabel='Input' />
                    <br />
                    <FormControl control='Checkbox' success message='Text info caption'>
                        Checkbox
                    </FormControl>
                    <br />
                    <FormControl control='Input' message='Text info caption' error />
                    <br />
                    <FormControl
                        control='Select'
                        options={options}
                        message='Text info caption'
                        success
                        showSelectOptionsAriaLabel='Show options'
                        hideSelectOptionsAriaLabel='Hide options' />
                    <br />
                    <FormControl
                        control='DatePicker'
                        message='Text info caption'
                        calendarIconAriaLabel='Calendar icon'
                        superPrevPageIconAriaLabel='Prev year'
                        prevPageIconAriaLabel='Prev month'
                        nextPageIconAriaLabel='Next mont'
                        superNextPageIconAriaLabel='Next year' />
                </div>
            </Cell>
        </Row>
    </Grid>
);

export const Input = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Form Control can be rendered as an Input.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <div
                    style={{
                        background: '#f5f5f5',
                        padding: '1.5em',
                        position: 'relative',
                        marginTop: '30px',
                    }}
                >
                    <FormControl control='Input' />
                    <br />
                    <FormControl control='Input' message='Text info caption' />
                    <br />
                    <FormControl control='Input' message='Text info caption' error />
                    <br />
                    <FormControl control='Input' message='Text info caption' success />
                    <br />
                    <FormControl control='Input' message='Text info caption' disabled />
                    <br />
                    <FormControl control='Input' message='Text info caption' isLoading />
                </div>
            </Cell>
        </Row>
    </Grid>
);

export const Checkbox = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Form Control can be rendered as an Checkbox.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <div
                    style={{
                        background: '#f5f5f5',
                        padding: '1.5em',
                        position: 'relative',
                        marginTop: '30px',
                    }}
                >
                    <FormControl checked control='Checkbox'>
                        Checkbox
                    </FormControl>
                    <br />
                    <FormControl control='Checkbox' success message='Text info caption'>
                        Checkbox
                    </FormControl>
                    <br />
                    <FormControl control='Checkbox' error message='Text error caption'>
                        Checkbox
                    </FormControl>
                </div>
            </Cell>
        </Row>
    </Grid>
);

export const Select = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Form Control can be rendered as an Select.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <div
                    style={{
                        background: '#f5f5f5',
                        padding: '1.5em',
                        position: 'relative',
                        marginTop: '30px',
                    }}
                >
                    <FormControl control='Select' options={options} showSelectOptionsAriaLabel='Show options' hideSelectOptionsAriaLabel='Hide options' />
                    <br />
                    <FormControl control='Select' options={options} message='Text info caption' showSelectOptionsAriaLabel='Show options' hideSelectOptionsAriaLabel='Hide options' />
                    <br />
                    <FormControl control='Select' options={options} message='Text info caption' error showSelectOptionsAriaLabel='Show options' hideSelectOptionsAriaLabel='Hide options' />
                    <br />
                    <FormControl control='Select' options={options} message='Text info caption' success showSelectOptionsAriaLabel='Show options' hideSelectOptionsAriaLabel='Hide options' />
                </div>
            </Cell>
        </Row>
    </Grid>
);

export const DatePicker = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>There are 2 options of controls for DatePickers.</Paragraph>
                <Paragraph margin='1rem 0 1rem 0'>
                    Due to the upgrade of DatePicker component, by default, the value &apos;DatePicker&apos; on control property will render the new DatePicker component.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <div
                    style={{
                        background: '#f5f5f5',
                        padding: '1.5em',
                        position: 'relative',
                        marginTop: '30px',
                    }}
                >
                    <FormControl
                        control='DatePicker'
                        calendarIconAriaLabel='Calendar icon'
                        superPrevPageIconAriaLabel='Prev year'
                        prevPageIconAriaLabel='Prev month'
                        nextPageIconAriaLabel='Next mont'
                        superNextPageIconAriaLabel='Next year'
                    />
                    <br />
                    <FormControl
                        control='DatePicker'
                        type='range'
                        calendarIconAriaLabel='Calendar icon'
                        superPrevPageIconAriaLabel='Prev year'
                        prevPageIconAriaLabel='Prev month'
                        nextPageIconAriaLabel='Next mont'
                        superNextPageIconAriaLabel='Next year'
                        toDateIconAriaLabel='To date' />
                </div>
            </Cell>
        </Row>
    </Grid>
);
