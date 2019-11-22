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
    return (
      <div>
        <Button text="Open modal" onClick={() => this.showModal()} />
        <Modal
          visible={this.state.showModal}
          width="440px"
          onClickAway={() => this.hideModal()}
        >
          <div className="modal-uninstall">
            <Grid fluid>
              <Row>
                <Cell xs={12}>
                  <Heading text="Basic modal" />
                  <Paragraph>The body of the basic modal</Paragraph>
                </Cell>
                <Cell xs>
                  <Button
                    variant="destructive"
                    onClick={() => this.hideModal()}
                  >
                    Yes, delete project
                  </Button>
                  <Button variant="secondary" onClick={() => this.hideModal()}>
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
        <Paragraph m="1rem 0 1rem 0">
          Basic modal dialogs see
          <a href="https://ant.design/components/modal/">this link</a>
          for more information about the props
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <ModalView />
      </Cell>
    </Row>
  </Grid>
);
