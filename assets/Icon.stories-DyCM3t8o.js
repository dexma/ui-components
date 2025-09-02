import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as S}from"./index-DRjF_FHU.js";import{a as P}from"./global-CSShRRib.js";import{I as r,G as m,R as o,C as a,P as c,k as v,l as w}from"./Breadcrumb-CkZbs_bz.js";import"./index-DqsfaJzi.js";const y=P.div`
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
`,N={title:"Icon",component:r,tags:["autodocs"],argTypes:{size:{control:{type:"number"}}}},n=()=>e.jsx(m,{fluid:!0,children:e.jsxs(o,{children:[e.jsx(a,{xs:12,children:e.jsx(c,{margin:"1rem 0 1rem 0",children:"An icon is a svg used to represent something else you can set the size and color"})}),e.jsx(a,{children:e.jsx(r,{size:70,ariaLabel:"aria-label example"})}),e.jsx(a,{children:e.jsx(r,{size:60,color:"red",ariaLabel:"aria-label example"})}),e.jsx(a,{children:e.jsx(r,{size:50,ariaLabel:"aria-label example"})}),e.jsx(a,{children:e.jsx(r,{size:40,ariaLabel:"aria-label example"})}),e.jsx(a,{children:e.jsx(r,{size:30,ariaLabel:"aria-label example"})}),e.jsx(a,{children:e.jsx(r,{size:20,ariaLabel:"aria-label example"})})]})}),R=()=>{const[t,I]=S.useState(""),L=d=>{I(d.target.value)},f=d=>w.filter(s=>s.name.includes(d)).map(s=>e.jsxs(a,{xs:2,className:"box-icon",children:[e.jsx(r,{name:s.name,size:40,ariaLabel:`${s.name} icon`}),e.jsx(c,{margin:".6rem",children:s.name})]},s.name));return e.jsx(y,{children:e.jsxs(o,{children:[e.jsx(a,{xs:12,className:"search",children:e.jsx(v,{type:"text",placeholder:"Search icon",onChange:L,icon:"search",label:"Search"})}),f(t)]})})},l=()=>e.jsx(m,{fluid:!0,children:e.jsxs(o,{children:[e.jsx(a,{xs:12,children:e.jsx(c,{margin:"1rem 0 1rem 0",children:"An icon is a svg used to represent something else"})}),e.jsx(R,{})]})}),i=t=>e.jsx(m,{fluid:!0,children:e.jsxs(o,{children:[e.jsx(a,{xs:12,children:e.jsx(c,{margin:"1rem 0 1rem 0",children:"An icon is a svg used to represent something else"})}),e.jsx(r,{...t})]})});var x,p,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else you can set the size and color</Paragraph>
            </Cell>
            <Cell>
                <Icon size={70} ariaLabel='aria-label example' />
            </Cell>
            <Cell>
                <Icon size={60} color='red' ariaLabel='aria-label example' />
            </Cell>
            <Cell>
                <Icon size={50} ariaLabel='aria-label example' />
            </Cell>
            <Cell>
                <Icon size={40} ariaLabel='aria-label example' />
            </Cell>
            <Cell>
                <Icon size={30} ariaLabel='aria-label example' />
            </Cell>
            <Cell>
                <Icon size={20} ariaLabel='aria-label example' />
            </Cell>
        </Row>
    </Grid>`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,u,j;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else</Paragraph>
            </Cell>
            <SearchIcons />
        </Row>
    </Grid>`,...(j=(u=l.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var b,C,z;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`(args: IconProps) => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else</Paragraph>
            </Cell>
            <Icon {...args} />
        </Row>
    </Grid>`,...(z=(C=i.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};const B=["Sizes","Icons","Playground"];export{l as Icons,i as Playground,n as Sizes,B as __namedExportsOrder,N as default};
