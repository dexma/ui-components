import { Input, Grid, Row, Cell, Paragraph } from '@components';

export default {
    title: 'Input',
    component: Input,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic input text</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Input type='text' placeholder='Input text' label='Basic input text' id='basic_input' />
            </Cell>
        </Row>
    </Grid>
);

export const Search = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Input search in two cell</Paragraph>
            </Cell>
            <Cell xs={6}>
                <Input type='text' placeholder='Search text' icon='search' label='Search text' ariaLabel='Search' isItToSearch id='search_input' />
            </Cell>
        </Row>
    </Grid>
);

export const Loading = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Input search with loading prop</Paragraph>
            </Cell>
            <Cell xs={8} xsOffset={2}>
                <Input type='text' placeholder='Search text' icon='search' isLoading label='Search text' id='loading_input' />
            </Cell>
        </Row>
    </Grid>
);

export const Disabled = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Disabled input, both placeholders and values</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Input type='text' value='Value Text' disabled label='Value' />
            </Cell>
            <Cell xs={12}>
                <Input type='text' placeholder='Placeholder text' disabled label='Disabled input' id='disabled_input' />
            </Cell>
        </Row>
    </Grid>
);

export const Types = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Input types must be &apos;text&apos;, &apos;email&apos;, &apos;number&apos;, &apos;tel&apos;, &apos;password&apos;, &apos;url&apos; or &apos;file&apos;
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Input type='text' value='Hi, I am Rob' label='Greeting' id='greeting_input' />
            </Cell>
            <Cell xs={12}>
                <Input type='email' value='user@inputtest.com' label='Email' autoComplete='email' id='email_input' />
            </Cell>
            <Cell xs={12}>
                <Input type='number' placeholder='Enter your number' label='Age' autoComplete='age' id='age_input' />
            </Cell>
            <Cell xs={12}>
                <Input type='password' placeholder='Enter your password' label='Password' autoComplete='password' id='password_input' />
            </Cell>
            <Cell xs={12}>
                <Input type='tel' placeholder='Phone number' label='Phone number' autoComplete='tel' id='phone_input' />
            </Cell>
            <Cell xs={12}>
                <Input type='url' placeholder='URL' label='URL' autoComplete='url' id='url_input' />
            </Cell>
            <Cell xs={12}>
                <Input type='file' placeholder='Choose a file' label='File' autoComplete='file' id='file_input' />
            </Cell>
        </Row>
    </Grid>
);
