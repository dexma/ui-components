import { Loading, Grid, Row, Cell, Paragraph, LoadingProps } from '@components';

export default {
    title: 'Loading',
    component: Loading,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Render loading spinner for the UI views.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <div
                    style={{
                        background: '#eee',
                        padding: '1.5em',
                        position: 'relative',
                        marginTop: '30px',
                    }}
                >
                    <Loading isLoading size={50} aria-label='Loading...' />
                </div>
            </Cell>
            <Cell xs={12}>
                <div
                    style={{
                        background: '#eee',
                        padding: '1.5em',
                        position: 'relative',
                        marginTop: '30px',
                    }}
                >
                    <Loading isLoading color='teal500' size={50} aria-label='Loading...' />
                </div>
            </Cell>
            <Cell xs={12}>
                <div
                    style={{
                        background: '#eee',
                        padding: '1.5em',
                        position: 'relative',
                        marginTop: '30px',
                    }}
                >
                    <Loading isLoading color='red' size={50} aria-label='Loading...' />
                </div>
            </Cell>
            <Cell xs={12}>
                <div
                    style={{
                        background: '#eee',
                        padding: '1.5em',
                        position: 'relative',
                        marginTop: '30px',
                    }}
                >
                    <Loading isLoading color='cyan' size={50} aria-label='Loading...' />
                </div>
            </Cell>
        </Row>
    </Grid>
);

export const Playground = (args: LoadingProps) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Loading.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <div
                    style={{
                        background: '#eee',
                        padding: '1.5em',
                        position: 'relative',
                        marginTop: '30px',
                    }}
                >
                    <Loading {...args}>
                        <div>LOADED</div>
                    </Loading>
                </div>
            </Cell>
        </Row>
    </Grid>
);
