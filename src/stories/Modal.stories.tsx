import React, { useState } from 'react';

import { Button, Modal, Grid, Row, Cell, Paragraph } from '@components';

const ModalView = ({ withFooter }: { withFooter?: boolean }) => {
    const [showModal, setShowModal] = useState(false);

    const footer = withFooter
        ? [
              <Button
                  variant='destructive'
                  onClick={() => {
                      setShowModal(false);
                  }}
              >
                  Yes, discard project
              </Button>,
              <Button
                  variant='secondary'
                  onClick={() => {
                      setShowModal(false);
                  }}
              >
                  No, continue editing
              </Button>,
          ]
        : false;
    return (
        <div>
            <Button
                text='Open modal'
                onClick={() => {
                    setShowModal(true);
                }}
            />
            <Modal
                open={showModal}
                onCancel={() => {
                    setShowModal(false);
                }}
                title='Unsaved changes'
                width={400}
                footer={footer}
            >
                <Paragraph>Are you sure you want to discard your changes?</Paragraph>
            </Modal>
        </div>
    );
};

export default {
    title: 'Modal',
    component: Modal,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    <div>
                        {' '}
                        Basic modal dialogs with a footer <a href='https://ant.design/../components/modal/'>this link</a> for more information about the props{' '}
                    </div>
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <ModalView />
            </Cell>
        </Row>
    </Grid>
);

export const Footer = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic modal dialogs with a footer</Paragraph>
            </Cell>
            <Cell xs={12}>
                <ModalView withFooter />
            </Cell>
        </Row>
    </Grid>
);
