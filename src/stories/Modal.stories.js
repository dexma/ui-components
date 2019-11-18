import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Grid from 'components/Grid';
import Row from 'components/Row';
import Cell from 'components/Cell';
import Button from 'components/Button';
import Modal from 'components/Modal';
import Title from 'components/Title';
import Theme from 'components/Theme';

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
                  <p className="confirm-uninstall">
                    Are you sure that want uninstall this market application?
                  </p>
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

storiesOf('Modal', module)
  .addParameters({
    jest: ['Modal'],
  })
  .add('basic', () => (
    <Theme>
      <Grid type="vertical" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Basic modal:" line />
        </Cell>
        <Cell size="full">
          <ModalView />
        </Cell>
      </Grid>
    </Theme>
  ));
