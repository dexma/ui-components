import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Card from 'components/Card';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';
import Button from 'components/Button';

storiesOf('Card', module)
  .addParameters({
    jest: ['Card'],
  })
  .add('with text', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic cards with icons:" line />
      </Cell>
      <Cell size="auto" medium={3}>
        <Card
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
          isActive
        />
      </Cell>
      <Cell size="auto" medium={3}>
        <Card
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
          isActive
        />{' '}
      </Cell>
      <Cell size="auto" medium={3}>
        <Card
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
          isActive
        />{' '}
      </Cell>
      <Cell size="auto" medium={3}>
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
      <Cell size="auto" medium={3}>
        <Card
          image="https://app.dexma.com/img/gateways/egauge.jpg"
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
        />
      </Cell>
      <Cell size="auto" medium={3}>
        <Card
          image="https://app.dexma.com/img/gateways/egauge.jpg"
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
        />
      </Cell>
      <Cell size="auto" medium={3}>
        <Card
          image="https://app.dexma.com/img/gateways/egauge.jpg"
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
        />
      </Cell>
      <Cell size="auto" medium={3}>
        <Card
          image="https://app.dexma.com/img/gateways/egauge.jpg"
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
        />
      </Cell>
    </Grid>
  ))
  .add('with image, text and footer', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic cards with footer buttons:" line />
      </Cell>
      <Cell size="auto" medium={3}>
        <Card
          image="https://app.dexma.com/img/gateways/egauge.jpg"
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
          footer={
            <Grid type="vertical">
              <Cell medium={12}>
                <Button text="Link" variant="primary" isExpanded />
              </Cell>
            </Grid>
          }
        />
      </Cell>
      <Cell size="auto" medium={3}>
        <Card
          image="https://app.dexma.com/img/gateways/egauge.jpg"
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
          footer={
            <Grid type="vertical">
              <Cell medium={12}>
                <Button text="Link" variant="primary" iconBefore="add" />
              </Cell>
            </Grid>
          }
        />
      </Cell>
      <Cell size="auto" medium={3}>
        <Card
          image="https://app.dexma.com/img/gateways/egauge.jpg"
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
          footer={
            <Grid type="vertical">
              <Cell medium={12}>
                <a href="/?path=/story/card--with-image-text-and-footer">
                  Link
                </a>
              </Cell>
            </Grid>
          }
        />
      </Cell>
    </Grid>
  ))
  .add('with image', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic cards with not text activated:" line />
      </Cell>
      <Cell size="auto" medium={3}>
        <Card image="https://app.dexma.com/img/gateways/egauge.jpg" />
      </Cell>
      <Cell size="auto" medium={3}>
        <Card image="https://app.dexma.com/img/gateways/egauge.jpg" />
      </Cell>
      <Cell size="auto" medium={3}>
        <Card image="https://app.dexma.com/img/gateways/egauge.jpg" />
      </Cell>
      <Cell size="auto" medium={3}>
        <Card image="https://app.dexma.com/img/gateways/egauge.jpg" />
      </Cell>
    </Grid>
  ))
  .add('with image and text horizontal', () => (
    <Fragment>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Cards image horizontal:" line />
        </Cell>
        <Cell size="auto" medium={6}>
          <Card
            image="https://app.dexma.com/img/gateways/egauge.jpg"
            title="The title"
            description="With supporting text below as a natural lead-in to additional content."
            isHorizontal
          />
        </Cell>
        <Cell size="auto" medium={6}>
          <Card
            image="https://app.dexma.com/img/gateways/egauge.jpg"
            title="The title"
            description="With supporting text below as a natural lead-in to additional content."
            isHorizontal
          />
        </Cell>
      </Grid>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Cards image horizontal:" line />
        </Cell>
        <Cell size="auto" medium={6}>
          <Card
            image="https://dexmatech.shinyapps.io/recommendations-catalog/_w_f2da4d48/img/retrofits/POWER_OPTIMISATION.jpg"
            title="Reactive power compensation"
            description="Optimise your capacity contract by balancing excessively high contract capacity and penalty charges."
            isHorizontal
          />
        </Cell>
        <Cell size="auto" medium={6}>
          <Card
            image="https://dexmatech.shinyapps.io/recommendations-catalog/_w_f2da4d48/img/retrofits/CHILLER_IMPROVEMENT_OF.jpg"
            title="The title"
            description="Optimise your capacity contract by balancing excessively high contract capacity and penalty charges."
            isHorizontal
          />
        </Cell>
      </Grid>
    </Fragment>
  ));
