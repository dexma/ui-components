import React, { Component } from 'react';

import { Modal } from '../components/Modal';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  showModal = () => {
    this.setState({
      showModal: true,
    });
  };

  hideModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { withFooter } = this.props;
    const footer = withFooter
      ? [
          <Button variant="destructive" onClick={this.hideModal}>
            Yes, discard project
          </Button>,
          <Button variant="secondary" onClick={this.hideModal}>
            No, continue editing
          </Button>,
        ]
      : false;
    return (
      <div>
        <Button text="Open modal" onClick={() => this.showModal()} />
        <Modal
          visible={this.state.showModal}
          onCancel={() => this.hideModal()}
          title="Unsaved changes"
          width={400}
          footer={footer}
        >
          <Paragraph>Are you sure you want to discard your changes?</Paragraph>
        </Modal>
      </div>
    );
  }
}

export default {
  title: 'Modal',
  component: Modal,
};

export const modals = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Basic modal dialogs with a footer{' '}
          <a href="https://ant.design/../components/modal/">this link</a> for
          more information about the props
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <ModalView />
      </Cell>
    </Row>
  </Grid>
);

export const footer = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Basic modal dialogs with a footer
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <ModalView withFooter />
      </Cell>
    </Row>
  </Grid>
);
