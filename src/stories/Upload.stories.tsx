import { Cell } from '@components/Cell';
import { Grid } from '@components/Grid';
import { Paragraph } from '@components/Paragraph';
import { Row } from '@components/Row';
import { Button, Upload as UploadComp } from '@components';

export default {
    title: 'Upload',
    component: UploadComp,
    tags: ['autodocs'],
};

export const Upload = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Upload is a straight port of Antd upload</Paragraph>
            </Cell>
            <Cell xs={12}>
                <UploadComp style={{ width: '100%' }}>
                    <Button text='Click to Upload' />
                </UploadComp>
            </Cell>
            <UploadComp.Dragger>
                <div style={{ padding: '12px' }}>This one you can drag files into </div>
            </UploadComp.Dragger>
        </Row>
    </Grid>
);
