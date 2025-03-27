import { Tabs, Grid, Row, Cell, Paragraph, Button, TabsVariant } from '@components';

export default {
    title: 'Tabs',
    component: Tabs,
    tags: ['autodocs'],
};

const callback = (key: string) => {
    console.log(key);
};

const items = [
    {
        key: '1',
        label: 'Tab 1',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Tab 2',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Tab 3',
        children: 'Content of Tab Pane 3',
    },
];

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Tabs make it easy to explore and switch between different views.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Tabs defaultActiveKey='1' onChange={callback} items={items} />
            </Cell>
        </Row>
    </Grid>
);

const operations = (
    <>
        <Button iconBefore='add' isCircle aria-label='Add user' />
        <Button iconBefore='add' isCircle aria-label='Add rol' />
    </>
);

export const ExtraAction = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>You can add extra actions to the right of Tabs</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Tabs tabBarExtraContent={operations} items={items} />
            </Cell>
        </Row>
    </Grid>
);

const scrollableItems = [
    {
        key: '1',
        label: 'Tab 1',
        children: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et malesuada justo. Etiam sed urna sit amet eros sagittis laoreet id ultrices libero. Proin
        quis condimentum metus. Pellentesque in elementum ante, ac volutpat lacus. Vivamus viverra luctus tempus. Aenean non ligula id augue pulvinar fringilla a
        vitae ipsum. Cras tempor porttitor mauris ut laoreet. Praesent ultricies tortor in luctus vulputate. Maecenas lacinia magna nec velit tempor, non rhoncus
        urna varius. Integer in sollicitudin justo. Nullam convallis lacus tincidunt eleifend tincidunt. In tincidunt erat id tellus mattis, eget fringilla felis
        porttitor. Mauris et neque eu arcu posuere egestas. Phasellus turpis urna, placerat et aliquam sit amet, porta vitae velit. Curabitur interdum, mi ut auctor
        cursus, tellus leo blandit libero, eu interdum augue eros non ex. Morbi id venenatis orci. Sed luctus erat leo, ut vehicula velit tempus eget. Nunc eleifend
        efficitur placerat. Nam a orci quis quam hendrerit dignissim at ut erat. Fusce interdum porttitor sodales. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Curabitur convallis rutrum magna, at efficitur dolor posuere id. Nullam egestas fringilla mi, ut bibendum libero
        imperdiet sed. Curabitur facilisis facilisis sem vel eleifend. Etiam justo lorem, lobortis non auctor ut, efficitur quis metus. Duis orci sem, mollis a
        suscipit vel, interdum ac dolor. Duis ullamcorper sapien sed ligula sollicitudin cursus. Morbi vel quam maximus, elementum lectus ac, dignissim massa. Nulla
        facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante diam, volutpat vel pretium sit amet, porta sed erat. Donec condimentum
        imperdiet vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur nisi mauris, porta id eros et,
        dignissim eleifend metus. Mauris ullamcorper non elit at suscipit. Sed ornare neque suscipit est rutrum, nec consequat felis suscipit. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec et malesuada justo. Etiam sed urna sit amet eros sagittis laoreet id ultrices libero. Proin quis condimentum metus.
        Pellentesque in elementum ante, ac volutpat lacus. Vivamus viverra luctus tempus. Aenean non ligula id augue pulvinar fringilla a vitae ipsum. Cras tempor
        porttitor mauris ut laoreet. Praesent ultricies tortor in luctus vulputate. Maecenas lacinia magna nec velit tempor, non rhoncus urna varius. Integer in
        sollicitudin justo. Nullam convallis lacus tincidunt eleifend tincidunt. In tincidunt erat id tellus mattis, eget fringilla felis porttitor. Mauris et neque
        eu arcu posuere egestas. Phasellus turpis urna, placerat et aliquam sit amet, porta vitae velit. Curabitur interdum, mi ut auctor cursus, tellus leo blandit
        libero, eu interdum augue eros non ex. Morbi id venenatis orci. Sed luctus erat leo, ut vehicula velit tempus eget. Nunc eleifend efficitur placerat. Nam a
        orci quis quam hendrerit dignissim at ut erat. Fusce interdum porttitor sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Curabitur convallis rutrum magna, at efficitur dolor posuere id. Nullam egestas fringilla mi, ut bibendum libero imperdiet sed. Curabitur
        facilisis facilisis sem vel eleifend. Etiam justo lorem, lobortis non auctor ut, efficitur quis metus. Duis orci sem, mollis a suscipit vel, interdum ac
        dolor. Duis ullamcorper sapien sed ligula sollicitudin cursus. Morbi vel quam maximus, elementum lectus ac, dignissim massa. Nulla facilisi. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nullam ante diam, volutpat vel pretium sit amet, porta sed erat. Donec condimentum imperdiet vulputate. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur nisi mauris, porta id eros et, dignissim eleifend metus.
        Mauris ullamcorper non elit at suscipit. Sed ornare neque suscipit est rutrum, nec consequat felis suscipit.`,
    },
    {
        key: '2',
        label: 'Tab 2',
        children: `Nunc eleifend efficitur placerat. Nam a orci quis quam hendrerit dignissim at ut erat. Fusce interdum porttitor sodales. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Curabitur convallis rutrum magna, at efficitur dolor posuere id. Nullam egestas fringilla mi, ut
        bibendum libero imperdiet sed. Curabitur facilisis facilisis sem vel eleifend. Etiam justo lorem, lobortis non auctor ut, efficitur quis metus. Duis orci
        sem, mollis a suscipit vel, interdum ac dolor. Duis ullamcorper sapien sed ligula sollicitudin cursus. Morbi vel quam maximus, elementum lectus ac,
        dignissim massa. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante diam, volutpat vel pretium sit amet, porta sed erat.
        Donec condimentum imperdiet vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur nisi mauris,
        porta id eros et, dignissim eleifend metus. Mauris ullamcorper non elit at suscipit. Sed ornare neque suscipit est rutrum, nec consequat felis suscipit.`,
    },
    {
        key: '3',
        label: 'Tab 3',
        children: 'Content of Tab Pane 3',
    },
];

export const ScrollableVariant = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    You can have a scrollable bar passing scrollable as prop of type variant. Of course, in order to have a workable scroll the Tabs must live inside an element
                    with a fixed height.
                </Paragraph>
            </Cell>
            <div style={{ height: '200px' }}>
                <Tabs variant={TabsVariant.SCROLLABLE} items={scrollableItems} />
            </div>
        </Row>
    </Grid>
);
