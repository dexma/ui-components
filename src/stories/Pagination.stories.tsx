import { Pagination, Grid, Row, Cell, Paragraph, PaginationProps } from '@components';

export default {
    title: 'Pagination',
    component: Pagination,
    tags: ['autodocs'],
    argTypes: {
        total: { control: 'number' },
        pageSize: { control: 'number' },
        defaultCurrent: { control: 'number' },
    },
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Pagination is used for splitting up content or data into several pages, with a control for navigating to the next or previous page. Depending on the parents
                    component width and / or number of available provided pages, the pagination component will automatically scale if required, some pages at the beginning / at the
                    end of the list will be hidden with … symbol. You can check also Ant Design documentation for further details.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Pagination total={100} pageSize={10} defaultCurrent={6} previosPageAriaLabel='Previous page' nextPageAriaLabel='Next page' prevDotsPageAriaLabel='Jumpt previous 5 pages' nextDotsPageAriaLabel='Jumpt next 5 pages' />
            </Cell>
        </Row>
    </Grid>
);

export const Playground = (args: PaginationProps) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Pagination.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Pagination {...args} />
            </Cell>
        </Row>
    </Grid>
);
