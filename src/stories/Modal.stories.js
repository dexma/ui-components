import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Grid from 'components/Grid';
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
            <Grid type="horizontal">
              <Cell size="full">
                <p className="confirm-uninstall">
                  Are you sure that want uninstall this market application?
                </p>
              </Cell>
              <Cell size="full">
                <button className="cancel" onClick={() => this.showModal()}>
                  cancel
                </button>
              </Cell>
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
    <Grid type="vertical" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic modal:" line />
      </Cell>
      <Cell size="full">
        <Theme>
          <ModalView />
        </Theme>
      </Cell>
    </Grid>
  ));
