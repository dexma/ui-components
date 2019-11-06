import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Card, {
  CardLayoutEquals,
  CardLayoutTruncate,
  CardLayoutHorizontal,
} from 'components/Card';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';
import Button from 'components/Button';

const IMAGES = [
  'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1417144527634-653e3dec77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
];

storiesOf('Card', module)
  .addParameters({
    jest: ['Card'],
  })
  .add('with text', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic cards with icons:" line />
      </Cell>
      <Cell size="auto" medium={6}>
        <Card
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
          isActive
        />
      </Cell>
      <Cell size="auto" medium={6}>
        <Card
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
          isActive
        />{' '}
      </Cell>
      <Cell size="auto" medium={6}>
        <Card
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
          isActive
        />{' '}
      </Cell>
      <Cell size="auto" medium={6}>
        <Card
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
          isActive
        />
      </Cell>
    </Grid>
  ))
  .add('with icon and text', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic cards with icons:" line />
      </Cell>
      <Cell size="auto" medium={3}>
        <Card
          icon="r2d2"
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
          isActive
        />
      </Cell>
      <Cell size="auto" medium={3}>
        <Card
          icon="vader"
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
          isActive
        />{' '}
      </Cell>
      <Cell size="auto" medium={3}>
        <Card
          icon="dexma_detect"
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
          isActive
        />{' '}
      </Cell>
      <Cell size="auto" medium={3}>
        <Card
          icon="advanced_analytics"
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
          isActive
        />
      </Cell>
    </Grid>
  ))
  .add('with image and text', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic cards with not text activated:" line />
      </Cell>
      <Cell size="auto" medium={6}>
        <Card
          image={IMAGES[0]}
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
        />
      </Cell>
      <Cell size="auto" medium={6}>
        <Card
          image={IMAGES[1]}
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
        />
      </Cell>
      <Cell size="auto" medium={6}>
        <Card
          image={IMAGES[2]}
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
        />
      </Cell>
      <Cell size="auto" medium={6}>
        <Card
          image={IMAGES[3]}
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
        />
      </Cell>
    </Grid>
  ))
  .add('with image, text and footer', () => (
    <Fragment>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Cards image horizontal:" line />
        </Cell>
      </Grid>
      <CardLayoutEquals>
        <Card
          image={IMAGES[0]}
          title="Reactive power compensation"
          description="Optimise your capacity contract by balancing excessively high contract capacity and penalty charges."
          footer={<Button text="Link" variant="primary" />}
        />
        <Card
          image={IMAGES[1]}
          title="The title"
          description="Optimise your capacity contract by balancing excessively high contract capacity and penalty charges."
          footer={<Button text="Link" variant="secondary" />}
        />
        <Card
          image={IMAGES[2]}
          title="The title"
          description="Optimise your capacity contract by balancing excessively high contract capacity and penalty charges."
          footer={<Button text="Link" variant="primary" isExpanded />}
        />

        <Card
          image={IMAGES[3]}
          title="The title"
          description="Optimise your capacity contract by balancing excessively high contract capacity and penalty charges."
          footer={<Button text="Link" variant="secondary" isExpanded />}
        />
      </CardLayoutEquals>
    </Fragment>
  ))
  .add('with image', () => (
    <Fragment>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Basic cards with not text activated:" line />
        </Cell>
      </Grid>
      <CardLayoutEquals>
        <Card image={IMAGES[0]} />
        <Card image={IMAGES[1]} />
        <Card image={IMAGES[2]} />
        <Card image={IMAGES[3]} />
      </CardLayoutEquals>
    </Fragment>
  ))
  .add('with layout horizontal', () => (
    <Fragment>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Cards image horizontal:" line />
        </Cell>
      </Grid>
      <CardLayoutHorizontal>
        <Card
          image={IMAGES[0]}
          title="Reactive power compensation"
          description="Optimise your capacity contract by balancing excessively high contract capacity and penalty charges."
          isHorizontal
        />
        <Card
          image={IMAGES[1]}
          title="The title"
          description="Optimise your capacity contract by balancing excessively high contract capacity and penalty charges."
          isHorizontal
        />
        <Card
          image={IMAGES[2]}
          title="The title"
          description="Optimise your capacity contract by balancing excessively high contract capacity and penalty charges."
          isHorizontal
        />

        <Card
          image={IMAGES[3]}
          title="The title"
          description="Optimise your capacity contract by balancing excessively high contract capacity and penalty charges."
          isHorizontal
        />
      </CardLayoutHorizontal>
    </Fragment>
  ))
  .add('with layout equals', () => (
    <CardLayoutEquals>
      <Card
        image={IMAGES[0]}
        title="The title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
      <Card
        image={IMAGES[1]}
        title="The title long long long long long"
        description="Optimise your capacity contract capacity and penalty charges."
      />
      <Card
        image={IMAGES[2]}
        title="The title long long long long long"
        description="Optimise your capacity contract capacity and penalty charges."
      />
      <Card
        image={IMAGES[3]}
        title="The title long long long long long"
        description="Optimise your capacity contract capacity and penalty charges."
      />
    </CardLayoutEquals>
  ))
  .add('with layout title truncated', () => (
    <CardLayoutTruncate>
      <Card
        image={IMAGES[0]}
        title="The title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
      <Card
        image={IMAGES[1]}
        title="The title long long long long long"
        description="Optimise your capacity contract capacity and penalty charges."
      />
      <Card
        image={IMAGES[2]}
        title="The title long long long long long"
        description="Optimise your capacity contract capacity and penalty charges."
      />
      <Card
        image={IMAGES[3]}
        title="The title long long long long long"
        description="Optimise your capacity contract capacity and penalty charges."
      />
    </CardLayoutTruncate>
  ))
  .add('with card loading', () => (
    <CardLayoutTruncate>
      <Card
        image={IMAGES[0]}
        title="The title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
      <Card
        image={IMAGES[1]}
        title="The title long long long long long"
        description="Optimise your capacity contract capacity and penalty charges."
      />
    </CardLayoutTruncate>
  ));
