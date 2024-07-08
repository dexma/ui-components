import{j as e}from"./polished.esm-BTw9q-eL.js";import{p as D}from"./global-DpqdS--E.js";import{K as r,N as M,R as i,C as a,P as o,B as g,G as Q}from"./DatePicker-DtFoBb26.js";import"./index-uubelm5h.js";import"./get-B2oUPAyW.js";import"./_commonjs-dynamic-modules-S1e38TyK.js";import"./_baseIteratee-JV0s3RFV.js";import"./index-DfsGIHLO.js";import"./debounce-BJI3GnSe.js";import"./index-Bd6JW1JU.js";const n=[{title:"Card title 1",image:"https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",icon:"solar"},{title:"Card title 2",image:"https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",icon:"alert_nodata"},{title:"Card title 3",image:"https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",icon:"savings"},{title:"Card title 4",image:"https://images.unsplash.com/photo-1417144527634-653e3dec77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",icon:"solar"},{title:"Card title 5",image:"https://images.unsplash.com/photo-1417144527634-653e3dec77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",icon:"gas"},{title:"Card title 6",image:"https://images.unsplash.com/photo-1417144527634-653e3dec77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",icon:"alert"}],ee={title:"Card",component:r,tags:["autodocs"]},s=D(Q)`
    ${M} {
        margin-bottom: 20px;
    }
`,l=()=>e.jsx(s,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"We present our simple and custom cards."})}),n.map(t=>e.jsx(a,{xs:4,children:e.jsx(r,{title:t.title,subtitle:"With supporting text below as a natural lead-in to additional content."})},t.title))]})}),d=()=>e.jsx(s,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"Here we have cards but we pass a image prop."})}),n.map(t=>e.jsx(a,{xs:4,children:e.jsx(r,{title:t.title,image:t.image})},t.title))]})}),c=()=>e.jsx(s,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"Here we have cards but we pass a icon name."})}),n.map(t=>e.jsx(a,{xs:4,children:e.jsx(r,{title:t.title,icon:t.icon,subtitle:"With supporting text below as a natural lead-in to additional content."})},t.title))]})}),m=()=>e.jsx(s,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"Here we have cards and custom footer. You can pass JSX element to it to render a component inside the footer."})}),n.map(t=>e.jsx(a,{xs:4,children:e.jsx(r,{title:t.title,image:t.image,subtitle:"With supporting text below as a natural lead-in to additional content.",footer:e.jsxs(e.Fragment,{children:[e.jsx(g,{iconBefore:"add",text:"Button"})," ",e.jsx(g,{variant:"destructive",iconBefore:"delete",isCircle:!0})," "]})})},t.title))]})}),p=()=>e.jsx(s,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"This is an example of the a link (image) with a card."})}),n.map(t=>e.jsx(a,{xs:4,children:e.jsx(r,{title:t.title,image:t.image,subtitle:"With supporting text below as a natural lead-in to additional content.",link:t.image})},t.title))]})}),u=()=>e.jsx(s,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"Here we have horizontal cards."})}),n.map(t=>e.jsx(a,{xs:6,children:e.jsx(r,{title:t.title,image:t.image,subtitle:"With supporting text below as a natural lead-in to additional content.",isHorizontal:!0})},t.title))]})}),h=()=>e.jsx(s,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"Here we have horizontal cards and we can customize the footer, passing a JSX element to it."})}),n.map(t=>e.jsx(a,{xs:12,children:e.jsx(r,{title:t.title,image:t.image,subtitle:"With supporting text below as a natural lead-in to additional content.",isHorizontal:!0,footer:e.jsxs(e.Fragment,{children:[e.jsx(g,{iconBefore:"add",text:"Button"})," ",e.jsx(g,{variant:"destructive",iconBefore:"delete",isCircle:!0})," "]})})},t.title))]})}),x=t=>e.jsx(s,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{xs:12,children:e.jsx(o,{margin:"1rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Card."})}),e.jsx(a,{xs:4,children:e.jsx(r,{...t})})]})});var C,j,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => <StyledCustomGrid fluid>
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
                    <Card title={card.title} image={card.image} />
                </Cell>)}
        </Row>
    </StyledCustomGrid>`,...(y=(b=d.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,k,B;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Here we have cards but we pass a icon name.</Paragraph>
            </Cell>
            {mockCards.map(card => <Cell xs={4} key={card.title}>
                    <Card title={card.title} icon={card.icon} subtitle='With supporting text below as a natural lead-in to additional content.' />
                </Cell>)}
        </Row>
    </StyledCustomGrid>`,...(B=(k=c.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var H,P,v;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Here we have cards and custom footer. You can pass JSX element to it to render a component inside the footer.</Paragraph>
            </Cell>
            {mockCards.map(card => <Cell xs={4} key={card.title}>
                    <Card title={card.title} image={card.image} subtitle='With supporting text below as a natural lead-in to additional content.' footer={<>
                                <Button iconBefore='add' text='Button' /> <Button variant='destructive' iconBefore='delete' isCircle />{' '}
                            </>} />
                </Cell>)}
        </Row>
    </StyledCustomGrid>`,...(v=(P=m.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var G,R,W;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`() => <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>This is an example of the a link (image) with a card.</Paragraph>
            </Cell>
            {mockCards.map(card => <Cell xs={4} key={card.title}>
                    <Card title={card.title} image={card.image} subtitle='With supporting text below as a natural lead-in to additional content.' link={card.image} />
                </Cell>)}
        </Row>
    </StyledCustomGrid>`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var z,J,q;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`() => <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Here we have horizontal cards.</Paragraph>
            </Cell>
            {mockCards.map(card => <Cell xs={6} key={card.title}>
                    <Card title={card.title} image={card.image} subtitle='With supporting text below as a natural lead-in to additional content.' isHorizontal />
                </Cell>)}
        </Row>
    </StyledCustomGrid>`,...(q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var F,E,I;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`() => <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Here we have horizontal cards and we can customize the footer, passing a JSX element to it.</Paragraph>
            </Cell>
            {mockCards.map(card => <Cell xs={12} key={card.title}>
                    <Card title={card.title} image={card.image} subtitle='With supporting text below as a natural lead-in to additional content.' isHorizontal footer={<>
                                <Button iconBefore='add' text='Button' /> <Button variant='destructive' iconBefore='delete' isCircle />{' '}
                            </>} />
                </Cell>)}
        </Row>
    </StyledCustomGrid>`,...(I=(E=h.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var O,X,_;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`(args: CardProps) => <StyledCustomGrid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Card.</Paragraph>
            </Cell>
            <Cell xs={4}>
                <Card {...args} />
            </Cell>
        </Row>
    </StyledCustomGrid>`,...(_=(X=x.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};const te=["Cards","Image","Icons","Footer","Link","Horizontal","HorizontalFooter","Playground"];export{l as Cards,m as Footer,u as Horizontal,h as HorizontalFooter,c as Icons,d as Image,p as Link,x as Playground,te as __namedExportsOrder,ee as default};
