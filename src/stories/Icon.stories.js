import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import icon from 'config/icon';
import styled from 'styled-components';

import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';

const StyledFragment = styled.div`
  .search {
    padding: 13px 25px;
    border: 1px solid grey;
    border-radius: 4px;
    width: 400px;
    display: block;
    margin: 25px auto 50px auto;
  }
`;

class SearchIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  getIcons = searchValue => {
    const iconsFilter = icon.filter(i => i.name.includes(searchValue));
    return iconsFilter.map(iconItem => (
      <Cell medium={3}>
        <Icon name={iconItem.name} size="large" color="gray500" />
        {iconItem.name}
      </Cell>
    ));
  };

  render() {
    const { value } = this.state;
    return (
      <Fragment>
        <Grid type="container">
          <Cell size="full">
            <input
              className="search"
              type="text"
              onChange={this.handleChange}
            />
          </Cell>
          <Cell size="full">
            <Grid type="horizontal">{this.getIcons(value)}</Grid>
          </Cell>
        </Grid>
      </Fragment>
    );
  }
}

storiesOf('Icon', module)
  .addParameters({
    jest: ['Icon'],
  })
  .add('basic', () => (
    <StyledFragment>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Icons" line={false} type="h4" />
          <Paragraph>Icons with svg</Paragraph>
        </Cell>
        <SearchIcons />
      </Grid>
    </StyledFragment>
  ));
