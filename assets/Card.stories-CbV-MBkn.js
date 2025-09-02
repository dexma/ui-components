import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{a as E}from"./global-CSShRRib.js";import{W as r,X,R as i,C as a,P as o,B as g,G as O}from"./Breadcrumb-CkZbs_bz.js";import"./index-DRjF_FHU.js";import"./index-DqsfaJzi.js";const s=[{title:"Card title 1",image:"https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",icon:"solar",alt:"Image alt"},{title:"Card title 2",image:"https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",icon:"alert_nodata",alt:"Image alt"},{title:"Card title 3",image:"https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",icon:"savings",alt:"Image alt"},{title:"Card title 4",image:"https://images.unsplash.com/photo-1417144527634-653e3dec77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",icon:"solar",alt:"Image alt"},{title:"Card title 5",image:"https://images.unsplash.com/photo-1417144527634-653e3dec77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",icon:"gas",alt:"Image alt"},{title:"Card title 6",image:"https://images.unsplash.com/photo-1417144527634-653e3dec77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",icon:"alert",alt:"Image alt"}],$={title:"Card",component:r,tags:["autodocs"]},n=E(O)`
    ${X} {
        margin-bottom: 20px;
    }
`,l=()=>e.jsx(n,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"We present our simple and custom cards."})}),s.map(t=>e.jsx(a,{xs:4,children:e.jsx(r,{title:t.title,subtitle:"With supporting text below as a natural lead-in to additional content."})},t.title))]})}),d=()=>e.jsx(n,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"Here we have cards but we pass a image prop."})}),s.map(t=>e.jsx(a,{xs:4,children:e.jsx(r,{title:t.title,image:t.image,imageAlt:t.alt})},t.title))]})}),c=()=>e.jsx(n,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"Here we have cards but we pass a icon name."})}),s.map(t=>e.jsx(a,{xs:4,children:e.jsx(r,{title:t.title,icon:t.icon,subtitle:"With supporting text below as a natural lead-in to additional content."})},t.title))]})}),m=()=>e.jsx(n,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"Here we have cards and custom footer. You can pass JSX element to it to render a component inside the footer."})}),s.map(t=>e.jsx(a,{xs:4,children:e.jsx(r,{title:t.title,image:t.image,subtitle:"With supporting text below as a natural lead-in to additional content.",footer:e.jsxs(e.Fragment,{children:[e.jsx(g,{kind:"iconTextButton",iconBefore:"add",text:"Button"}),e.jsx(g,{kind:"iconButton",variant:"destructive",iconBefore:"delete",isCircle:!0,iconAriaLabel:"Delete"})," "]})})},t.title))]})}),u=()=>e.jsx(n,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"This is an example of the a link (image) with a card."})}),s.map(t=>e.jsx(a,{xs:4,children:e.jsx(r,{title:t.title,image:t.image,subtitle:"With supporting text below as a natural lead-in to additional content.",link:t.image,imageAlt:t.alt,linkTitle:"Click to open image in another tab"})},t.title))]})}),p=()=>e.jsx(n,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"Here we have horizontal cards."})}),s.map(t=>e.jsx(a,{xs:6,children:e.jsx(r,{title:t.title,image:t.image,subtitle:"With supporting text below as a natural lead-in to additional content.",isHorizontal:!0})},t.title))]})}),h=()=>e.jsx(n,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"Here we have horizontal cards and we can customize the footer, passing a JSX element to it."})}),s.map(t=>e.jsx(a,{xs:12,children:e.jsx(r,{title:t.title,image:t.image,subtitle:"With supporting text below as a natural lead-in to additional content.",isHorizontal:!0,footer:e.jsxs(e.Fragment,{children:[e.jsx(g,{kind:"iconTextButton",iconBefore:"add",text:"Button"}),e.jsx(g,{kind:"iconButton",variant:"destructive",iconBefore:"delete",isCircle:!0,iconAriaLabel:"Delete"})," "]})})},t.title))]})}),x=t=>e.jsx(n,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Card."})}),e.jsx(a,{xs:4,children:e.jsx(r,{...t})})]})});var C,j,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>We present our simple and custom cards.</Paragraph>
            </Cell>
            {mockCards.map(card => <Cell xs={4} key={card.title}>
                    <Card title={card.title} subtitle='With supporting text below as a natural lead-in to additional content.' />
                </Cell>)}
        </Row>
    </StyledCustomGrid>`,...(f=(j=l.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var w,b,y;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Here we have cards but we pass a image prop.</Paragraph>
            </Cell>
            {mockCards.map(card => <Cell xs={4} key={card.title}>
                    <Card title={card.title} image={card.image} imageAlt={card.alt} />
                </Cell>)}
        </Row>
    </StyledCustomGrid>`,...(y=(b=d.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var k,S,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Here we have cards but we pass a icon name.</Paragraph>
            </Cell>
            {mockCards.map(card => <Cell xs={4} key={card.title}>
                    <Card title={card.title} icon={card.icon} subtitle='With supporting text below as a natural lead-in to additional content.' />
                </Cell>)}
        </Row>
    </StyledCustomGrid>`,...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var H,P,v;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Here we have cards and custom footer. You can pass JSX element to it to render a component inside the footer.</Paragraph>
            </Cell>
            {mockCards.map(card => <Cell xs={4} key={card.title}>
                    <Card title={card.title} image={card.image} subtitle='With supporting text below as a natural lead-in to additional content.' footer={<>
                                <Button kind='iconTextButton' iconBefore='add' text='Button' />
                                <Button kind='iconButton' variant='destructive' iconBefore='delete' isCircle iconAriaLabel='Delete' />{' '}
                            </>} />
                </Cell>)}
        </Row>
    </StyledCustomGrid>`,...(v=(P=m.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var G,R,W;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`() => <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>This is an example of the a link (image) with a card.</Paragraph>
            </Cell>
            {mockCards.map(card => <Cell xs={4} key={card.title}>
                    <Card title={card.title} image={card.image} subtitle='With supporting text below as a natural lead-in to additional content.' link={card.image} imageAlt={card.alt} linkTitle='Click to open image in another tab' />
                </Cell>)}
        </Row>
    </StyledCustomGrid>`,...(W=(R=u.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var z,I,A;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`() => <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Here we have horizontal cards.</Paragraph>
            </Cell>
            {mockCards.map(card => <Cell xs={6} key={card.title}>
                    <Card title={card.title} image={card.image} subtitle='With supporting text below as a natural lead-in to additional content.' isHorizontal />
                </Cell>)}
        </Row>
    </StyledCustomGrid>`,...(A=(I=p.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var T,D,J;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`() => <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Here we have horizontal cards and we can customize the footer, passing a JSX element to it.</Paragraph>
            </Cell>
            {mockCards.map(card => <Cell xs={12} key={card.title}>
                    <Card title={card.title} image={card.image} subtitle='With supporting text below as a natural lead-in to additional content.' isHorizontal footer={<>
                                <Button kind='iconTextButton' iconBefore='add' text='Button' />
                                <Button kind='iconButton' variant='destructive' iconBefore='delete' isCircle iconAriaLabel='Delete' />{' '}
                            </>} />
                </Cell>)}
        </Row>
    </StyledCustomGrid>`,...(J=(D=h.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var q,F,L;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`(args: CardProps) => <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Card.</Paragraph>
            </Cell>
            <Cell xs={4}>
                <Card {...args} />
            </Cell>
        </Row>
    </StyledCustomGrid>`,...(L=(F=x.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const K=["Cards","Image","Icons","Footer","Link","Horizontal","HorizontalFooter","Playground"];export{l as Cards,m as Footer,p as Horizontal,h as HorizontalFooter,c as Icons,d as Image,u as Link,x as Playground,K as __namedExportsOrder,$ as default};
