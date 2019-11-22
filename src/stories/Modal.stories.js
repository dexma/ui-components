import React, { Component } from 'react';

import { Modal } from 'components/Modal';
import Grid from 'components/Grid';
import Row from 'components/Row';
import Cell from 'components/Cell';
import Button from 'components/Button';
import Paragraph from 'components/Paragraph';
import Heading from 'components/Heading';

class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  showModal = () => {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal,
    });
  };

  render() {
    return (
      <div>
        <Button text="Open modal" onClick={() => this.showModal()} />
        <Modal
          visible={this.state.showModal}
          width="700px"
          onClickAway={() => this.showModal()}
        >
          <div className="modal-uninstall">
            <Grid fluid>
              <Row>
                <Cell xs={12}>
                  <Heading text="Basic modal" />
                  <Paragraph>The body of the basic modal</Paragraph>
                </Cell>
                <Cell xs={12}>
                  <Button variant="primary" onClick={() => this.showModal()}>
                    Ok
                  </Button>{' '}
                  <Button
                    variant="destructive"
                    onClick={() => this.showModal()}
                  >
                    Cancel
                  </Button>
                </Cell>
              </Row>
            </Grid>
          </div>
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
        <Paragraph m="1rem 0 1rem 0">Basic pagination</Paragraph>
      </Cell>
      <Cell xs={12}>
        <ModalView />
      </Cell>
    </Row>
  </Grid>
);
