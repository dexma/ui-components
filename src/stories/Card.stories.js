import React from 'react';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Button from 'components/Button';
import Row from 'components/Row';
import Paragraph from 'components/Paragraph';

import { mockCards } from 'test/mock/Card';

import { Card } from 'components/Card';

export default {
  title: 'Card',
  component: Card,
};

export const cards = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          We present our simple and custom cards
        </Paragraph>
      </Cell>
      {mockCards.map(card => (
        <Cell xs={4}>
          <Card
            title={card.title}
            subtitle="With supporting text below as a natural lead-in to additional content."
          />
        </Cell>
      ))}
    </Row>
  </Grid>
);

export const image = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have cards but we pass a image prop
        </Paragraph>
      </Cell>
      {mockCards.map(card => (
        <Cell xs={4}>
          <Card title={card.title} image={card.image} />
        </Cell>
      ))}
    </Row>
  </Grid>
);

export const icons = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have cards but we pass a icon name
        </Paragraph>
      </Cell>
      {mockCards.map(card => (
        <Cell xs={4}>
          <Card
            title={card.title}
            icon={card.icon}
            subtitle="With supporting text below as a natural lead-in to additional content."
          />
        </Cell>
      ))}
    </Row>
  </Grid>
);

export const footer = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have cards and custom footer
        </Paragraph>
      </Cell>
      {mockCards.map(card => (
        <Cell xs={4}>
          <Card
            title={card.title}
            image={card.image}
            subtitle="With supporting text below as a natural lead-in to additional content."
            footer={
              <>
                <Button iconBefore="add" text="Button" />{' '}
                <Button variant="destructive" iconBefore="delete" isCircle />{' '}
              </>
            }
          />
        </Cell>
      ))}
    </Row>
  </Grid>
);

export const link = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          This is an example of the a link (image) with a card
        </Paragraph>
      </Cell>
      {mockCards.map(card => (
        <Cell xs={4}>
          <Card
            title={card.title}
            image={card.image}
            subtitle="With supporting text below as a natural lead-in to additional content."
            link={card.image}
          />
        </Cell>
      ))}
    </Row>
  </Grid>
);

export const horizontal = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">Here we have horizontal cards</Paragraph>
      </Cell>
      {mockCards.map(card => (
        <Cell xs={6}>
          <Card
            title={card.title}
            image={card.image}
            subtitle="With supporting text below as a natural lead-in to additional content."
            isHorizontal
          />
        </Cell>
      ))}
    </Row>
  </Grid>
);

export const horizontalFooter = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have horizontal cards and we can customize the footer
        </Paragraph>
      </Cell>
      {mockCards.map(card => (
        <Cell xs={12}>
          <Card
            title={card.title}
            image={card.image}
            subtitle="With supporting text below as a natural lead-in to additional content."
            isHorizontal
            footer={
              <>
                <Button iconBefore="add" text="Button" />{' '}
                <Button variant="destructive" iconBefore="delete" isCircle />{' '}
              </>
            }
          />
        </Cell>
      ))}
    </Row>
  </Grid>
);

/*
storiesOf('Card', module)
  .addParameters({
    jest: ['Card'],
  })
  .add('with text', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full"></Cell>
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
      <Cell size="full"></Cell>
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
  .add('with link, image and text', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full"></Cell>
      <Cell size="auto" medium={6}>
        <Card
          image={IMAGES[0]}
          link={IMAGES[0]}
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
        />
      </Cell>
      <Cell size="auto" medium={6}>
        <Card
          image={IMAGES[1]}
          link={IMAGES[1]}
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
        />
      </Cell>
      <Cell size="auto" medium={6}>
        <Card
          image={IMAGES[2]}
          link={IMAGES[2]}
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
        />
      </Cell>
      <Cell size="auto" medium={6}>
        <Card
          image={IMAGES[3]}
          link={IMAGES[3]}
          title="The title"
          subtitle="With supporting text below as a natural lead-in to additional content."
        />
      </Cell>
    </Grid>
  ))
  .add('with image, text and footer', () => (
    <Fragment>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full"></Cell>
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
        <Cell size="full"></Cell>
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
        <Cell size="full"></Cell>
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
*/
