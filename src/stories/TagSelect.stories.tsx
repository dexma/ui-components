import { Cell } from '@components/Cell';
import { Grid } from '@components/Grid';
import { Paragraph } from '@components/Paragraph';
import { Row } from '@components/Row';
import { TagSelect as TagSelectComp } from '@components/TagSelect';

export default {
    title: 'TagSelect',
    component: TagSelectComp,
    tags: ['autodocs'],
};

export const TagSelect = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>TagSelect allows to type in tags by the user</Paragraph>
            </Cell>
            <Cell xs={12}>
                <TagSelectComp
                    style={{ width: '100%' }}
                    onChange={(newValues) => {
                        console.log(newValues);
                    }}
                />
            </Cell>
        </Row>
    </Grid>
);
