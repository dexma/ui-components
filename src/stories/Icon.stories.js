import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from '../components/Icon';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';
import icon from '../config/icon';

const StyledBoxSearch = styled.div`
  width: 100%;
  .search {
    padding: 13px 25px;
    border: 1px solid #d6d8db;
    border-radius: 4px;
    width: 100%;
    display: block;
    margin: 25px auto 50px auto;
  }
  .box-icon {
    text-align: center;
  }
`;

export default {
  title: 'Icon',
  component: Icon,
};

export const sizes = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          An icon is a svg used to represent something else you can set the size
          and color
        </Paragraph>
      </Cell>
      <Cell>
        <Icon size={70} color="iconColor" />
      </Cell>
      <Cell>
        <Icon size={60} color="iconColor" />
      </Cell>
      <Cell>
        <Icon size={50} color="iconColor" />
      </Cell>
      <Cell>
        <Icon size={40} color="iconColor" />
      </Cell>
      <Cell>
        <Icon size={30} color="iconColor" />
      </Cell>
      <Cell>
        <Icon size={20} color="iconColor" />
      </Cell>
    </Row>
  </Grid>
);

export const icons = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          An icon is a svg used to represent something else
        </Paragraph>
      </Cell>
      <SearchIcons />
    </Row>
  </Grid>
);

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
    return iconsFilter.map((iconItem, i) => (
      <Cell key={i} xs={2} className="box-icon">
        <Icon name={iconItem.name} size={40} color="iconColor" />
        <Paragraph size=".6rem">{iconItem.name}</Paragraph>
      </Cell>
    ));
  };

  render() {
    const { value } = this.state;
    return (
      <StyledBoxSearch>
        <Row>
          <Cell xs={12}>
            <input
              className="search"
              type="text"
              placeholder="Search icon"
              onChange={this.handleChange}
            />
          </Cell>
          {this.getIcons(value)}
        </Row>
      </StyledBoxSearch>
    );
  }
}
