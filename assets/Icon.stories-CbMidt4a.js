import{j as e}from"./polished.esm-BTw9q-eL.js";import{r as v}from"./index-uubelm5h.js";import{p as w}from"./global-DpqdS--E.js";import{I as r,G as m,R as l,C as s,P as c,i as y,j as R}from"./DatePicker-DtFoBb26.js";import"./get-B2oUPAyW.js";import"./_commonjs-dynamic-modules-S1e38TyK.js";import"./_baseIteratee-JV0s3RFV.js";import"./index-DfsGIHLO.js";import"./debounce-BJI3GnSe.js";import"./index-Bd6JW1JU.js";const G=w.div`
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
`,D={title:"Icon",component:r,tags:["autodocs"],argTypes:{size:{control:{type:"number"}}}},o=()=>e.jsx(m,{fluid:!0,children:e.jsxs(l,{children:[e.jsx(s,{xs:12,children:e.jsx(c,{margin:"1rem 0 1rem 0",children:"An icon is a svg used to represent something else you can set the size and color"})}),e.jsx(s,{children:e.jsx(r,{size:70})}),e.jsx(s,{children:e.jsx(r,{size:60,color:"red"})}),e.jsx(s,{children:e.jsx(r,{size:50})}),e.jsx(s,{children:e.jsx(r,{size:40})}),e.jsx(s,{children:e.jsx(r,{size:30})}),e.jsx(s,{children:e.jsx(r,{size:20})})]})}),b=()=>{const[t,f]=v.useState(""),P=d=>{f(d.target.value)},S=d=>R.filter(n=>n.name.includes(d)).map(n=>e.jsxs(s,{xs:2,className:"box-icon",children:[e.jsx(r,{name:n.name,size:40}),e.jsx(c,{margin:".6rem",children:n.name})]},n.name));return e.jsx(G,{children:e.jsxs(l,{children:[e.jsx(s,{xs:12,className:"search",children:e.jsx(y,{type:"text",placeholder:"Search icon",onChange:P,icon:"search"})}),S(t)]})})},a=()=>e.jsx(m,{fluid:!0,children:e.jsxs(l,{children:[e.jsx(s,{xs:12,children:e.jsx(c,{margin:"1rem 0 1rem 0",children:"An icon is a svg used to represent something else"})}),e.jsx(b,{})]})}),i=t=>e.jsx(m,{fluid:!0,children:e.jsxs(l,{children:[e.jsx(s,{xs:12,children:e.jsx(c,{margin:"1rem 0 1rem 0",children:"An icon is a svg used to represent something else"})}),e.jsx(r,{...t})]})});var p,x,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Grid fluid>
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
    </Grid>`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,u,j;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else</Paragraph>
            </Cell>
            <SearchIcons />
        </Row>
    </Grid>`,...(j=(u=a.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var C,z,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`(args: IconProps) => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else</Paragraph>
            </Cell>
            <Icon {...args} />
        </Row>
    </Grid>`,...(I=(z=i.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const F=["Sizes","Icons","Playground"];export{a as Icons,i as Playground,o as Sizes,F as __namedExportsOrder,D as default};
