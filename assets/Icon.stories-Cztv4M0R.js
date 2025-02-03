import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as v}from"./index-DRjF_FHU.js";import{a as w}from"./global-C5EY7ICf.js";import{I as r,G as m,R as l,C as s,P as c,i as y,j as R}from"./DatePicker-Dwnz1syV.js";import"./index-DqsfaJzi.js";const G=w.div`
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
`,B={title:"Icon",component:r,tags:["autodocs"],argTypes:{size:{control:{type:"number"}}}},a=()=>e.jsx(m,{fluid:!0,children:e.jsxs(l,{children:[e.jsx(s,{xs:12,children:e.jsx(c,{margin:"1rem 0 1rem 0",children:"An icon is a svg used to represent something else you can set the size and color"})}),e.jsx(s,{children:e.jsx(r,{size:70})}),e.jsx(s,{children:e.jsx(r,{size:60,color:"red"})}),e.jsx(s,{children:e.jsx(r,{size:50})}),e.jsx(s,{children:e.jsx(r,{size:40})}),e.jsx(s,{children:e.jsx(r,{size:30})}),e.jsx(s,{children:e.jsx(r,{size:20})})]})}),b=()=>{const[t,f]=v.useState(""),P=d=>{f(d.target.value)},S=d=>R.filter(n=>n.name.includes(d)).map(n=>e.jsxs(s,{xs:2,className:"box-icon",children:[e.jsx(r,{name:n.name,size:40}),e.jsx(c,{margin:".6rem",children:n.name})]},n.name));return e.jsx(G,{children:e.jsxs(l,{children:[e.jsx(s,{xs:12,className:"search",children:e.jsx(y,{type:"text",placeholder:"Search icon",onChange:P,icon:"search"})}),S(t)]})})},o=()=>e.jsx(m,{fluid:!0,children:e.jsxs(l,{children:[e.jsx(s,{xs:12,children:e.jsx(c,{margin:"1rem 0 1rem 0",children:"An icon is a svg used to represent something else"})}),e.jsx(b,{})]})}),i=t=>e.jsx(m,{fluid:!0,children:e.jsxs(l,{children:[e.jsx(s,{xs:12,children:e.jsx(c,{margin:"1rem 0 1rem 0",children:"An icon is a svg used to represent something else"})}),e.jsx(r,{...t})]})});var x,h,p;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else you can set the size and color</Paragraph>
            </Cell>
            <Cell>
                <Icon size={70} />
            </Cell>
            <Cell>
                <Icon size={60} color='red' />
            </Cell>
            <Cell>
                <Icon size={50} />
            </Cell>
            <Cell>
                <Icon size={40} />
            </Cell>
            <Cell>
                <Icon size={30} />
            </Cell>
            <Cell>
                <Icon size={20} />
            </Cell>
        </Row>
    </Grid>`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var g,u,j;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else</Paragraph>
            </Cell>
            <SearchIcons />
        </Row>
    </Grid>`,...(j=(u=o.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var C,z,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`(args: IconProps) => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else</Paragraph>
            </Cell>
            <Icon {...args} />
        </Row>
    </Grid>`,...(I=(z=i.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const O=["Sizes","Icons","Playground"];export{o as Icons,i as Playground,a as Sizes,O as __namedExportsOrder,B as default};
