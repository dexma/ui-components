import { Breadcrumb, Cell, Grid, Paragraph, Row } from 'lib';
import { HomeOutlined } from '@ant-design/icons';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};

const onClick = (e: any, label: string) => {
  e.preventDefault();
  console.log(`Click in ${label}`);
}

const items = [
  {
    title: (
      <>
        <HomeOutlined />
        <span>Home</span>
      </>
    ),
  },
  { title: <a href="#" onClick={(e) => onClick(e, 'Application Center')}>Application Center</a> },
  { title: <a href="#" onClick={(e) => onClick(e, 'Application List')}>Application List</a> },
  { title: 'An Application' },
];

export const Basic = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin='1rem 0 1rem 0'>
          A simple breadcrumb display the current location within a hierarchy. And allow going back to states higher up in the hierarchy.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Breadcrumb items={items} />
      </Cell>
    </Row>
  </Grid>
);

export const WithParams = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin='1rem 0 1rem 0'>
          A breadcrumb with param to allow manage parameters about main location.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Breadcrumb
            items={[
            {
              title: 'Groups',
            },
            {
              title: ':id',
              onClick: () => {console.log('Click in Group #1')}
            },
          ]}
            params={{ id: 1 }}
        />
      </Cell>
    </Row>
  </Grid>
);

const menuItems = [
  {
    key: '1',
    label: 'General'
  },
  {
    key: '2',
    label: 'Edit',
  },
  {
    key: '3',
    label: 'Duplicate',
  },
];

export const WithDropdownMenu = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin='1rem 0 1rem 0'>
          A breadcrumb with menu display current location within hierarchy and allow choose menu option.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Breadcrumb
            items={[
            {
              title: 'Users',
            },
            {
              title: <a href="#" onClick={(e) => onClick(e, 'Application Profile')}>Profile</a>,
            },
            {
              title: <a href="#" onClick={(e) => onClick(e, 'General')}>General</a>,
              menu: { items: menuItems },
            },
            {
              title: 'Permissions',
            }
          ]}
        />
      </Cell>
    </Row>
  </Grid>
);
