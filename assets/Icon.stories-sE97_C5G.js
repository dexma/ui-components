import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as G}from"./index-DRjF_FHU.js";import{a as A}from"./global-Dkooq0WN.js";import{I as r,G as d,R as n,C as a,P as l,k as _,l as E}from"./Breadcrumb-DLl5l2I_.js";import"./index-DqsfaJzi.js";const F="legacy_",T=A.div`
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
`,W={title:"Icon",component:r,tags:["autodocs"],argTypes:{size:{control:{type:"number"}}}},i=()=>e.jsx(d,{fluid:!0,children:e.jsxs(n,{children:[e.jsx(a,{xs:12,children:e.jsx(l,{margin:"1rem 0 1rem 0",children:"An icon is a svg used to represent something else you can set the size and color"})}),e.jsx(a,{children:e.jsx(r,{size:70,ariaLabel:"aria-label example"})}),e.jsx(a,{children:e.jsx(r,{size:60,color:"red",ariaLabel:"aria-label example"})}),e.jsx(a,{children:e.jsx(r,{size:50,ariaLabel:"aria-label example"})}),e.jsx(a,{children:e.jsx(r,{size:40,ariaLabel:"aria-label example"})}),e.jsx(a,{children:e.jsx(r,{size:30,ariaLabel:"aria-label example"})}),e.jsx(a,{children:e.jsx(r,{size:20,ariaLabel:"aria-label example"})})]})}),P=({legacy:m=!1})=>{const[S,v]=G.useState(""),R=x=>{v(x.target.value)},w=x=>E.filter(s=>s.name.startsWith(F)===m&&s.name.includes(x)).map(s=>e.jsxs(a,{xs:2,className:"box-icon",children:[e.jsx(r,{name:s.name,size:40,ariaLabel:`${s.name} icon`}),e.jsx(l,{margin:".6rem",children:s.name})]},s.name));return e.jsx(T,{children:e.jsxs(n,{children:[e.jsx(a,{xs:12,className:"search",children:e.jsx(_,{type:"text",placeholder:"Search icon",onChange:R,icon:"search",label:"Search"})}),w(S)]})})},o=()=>e.jsx(d,{fluid:!0,children:e.jsxs(n,{children:[e.jsx(a,{xs:12,children:e.jsx(l,{margin:"1rem 0 1rem 0",children:"An icon is a svg used to represent something else"})}),e.jsx(P,{})]})}),c=()=>e.jsx(d,{fluid:!0,children:e.jsxs(n,{children:[e.jsx(a,{xs:12,children:e.jsx(l,{margin:"1rem 0 1rem 0",children:"Former icons that have been replaced and should no longer be used. They are available as legacy_<name>"})}),e.jsx(P,{legacy:!0})]})}),t=m=>e.jsx(d,{fluid:!0,children:e.jsxs(n,{children:[e.jsx(a,{xs:12,children:e.jsx(l,{margin:"1rem 0 1rem 0",children:"An icon is a svg used to represent something else"})}),e.jsx(r,{...m})]})});var p,h,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Grid fluid>
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
    </Grid>`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,j,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else</Paragraph>
            </Cell>
            <SearchIcons />
        </Row>
    </Grid>`,...(b=(j=o.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var C,y,z;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Former icons that have been replaced and should no longer be used. They are available as legacy_&lt;name&gt;</Paragraph>
            </Cell>
            <SearchIcons legacy />
        </Row>
    </Grid>`,...(z=(y=c.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var I,L,f;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`(args: IconProps) => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>An icon is a svg used to represent something else</Paragraph>
            </Cell>
            <Icon {...args} />
        </Row>
    </Grid>`,...(f=(L=t.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};const X=["Sizes","Icons","Legacy","Playground"];export{o as Icons,c as Legacy,t as Playground,i as Sizes,X as __namedExportsOrder,W as default};
