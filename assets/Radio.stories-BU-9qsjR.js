import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as P}from"./index-DRjF_FHU.js";import{r,G as t,R as l,C as a,P as d,s as v}from"./Breadcrumb-CirhZGIC.js";import"./global-Dkooq0WN.js";import"./index-DqsfaJzi.js";const V={title:"Radio",component:r,tags:["autodocs"]},c=({vertical:n=!1})=>{const[f,C]=P.useState("first"),G=w=>{C(w.target.value)};return e.jsxs(v,{value:f,onChange:G,style:n?{display:"flex",flexDirection:"column",gap:"8px"}:void 0,children:[e.jsx(r,{value:"first",children:"First option"}),e.jsx(r,{value:"second",children:"Second option"}),e.jsx(r,{value:"third",disabled:!0,children:"Third option disabled"})]})},o=()=>e.jsx(t,{fluid:!0,children:e.jsxs(l,{children:[e.jsx(a,{xs:12,children:e.jsx(d,{margin:"1rem 0 1rem 0",children:"Radio buttons are used for a list of options where the user must select exactly one option. Group them with RadioGroup to manage the selected value."})}),e.jsxs(a,{xs:12,children:[e.jsx(r,{children:"Radio"}),e.jsx("br",{}),e.jsx(r,{checked:!0,children:"Radio checked"}),e.jsx("br",{}),e.jsx(r,{disabled:!0,children:"Radio disabled"}),e.jsx("br",{}),e.jsx(r,{disabled:!0,checked:!0,children:"Radio checked disabled"})]})]})}),s=()=>e.jsx(t,{fluid:!0,children:e.jsxs(l,{children:[e.jsxs(a,{xs:12,children:[e.jsx(d,{margin:"1rem 0 1rem 0",children:"Horizontal group"}),e.jsx(c,{})]}),e.jsxs(a,{xs:12,children:[e.jsx(d,{margin:"1.5rem 0 1rem 0",children:"Vertical group"}),e.jsx(c,{vertical:!0})]})]})}),i=n=>e.jsx(t,{fluid:!0,children:e.jsxs(l,{style:{marginBottom:"10px"},children:[e.jsx(a,{xs:12,children:e.jsx(d,{margin:"1.5rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Radio."})}),e.jsx(a,{xs:12,children:e.jsx(r,{...n,children:"Radio"})})]})});var u,h,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Radio buttons are used for a list of options where the user must select exactly one option. Group them with RadioGroup to manage the selected value.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Radio>Radio</Radio>
                <br />
                <Radio checked>Radio checked</Radio>
                <br />
                <Radio disabled>Radio disabled</Radio>
                <br />
                <Radio disabled checked>
                    Radio checked disabled
                </Radio>
            </Cell>
        </Row>
    </Grid>`,...(p=(h=o.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var m,x,R;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Horizontal group</Paragraph>
                <RadioGroupBasic />
            </Cell>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>Vertical group</Paragraph>
                <RadioGroupBasic vertical />
            </Cell>
        </Row>
    </Grid>`,...(R=(x=s.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var g,j,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(args: RadioProps) => <Grid fluid>
        <Row style={{
    marginBottom: '10px'
  }}>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Radio.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Radio {...args}>Radio</Radio>
            </Cell>
        </Row>
    </Grid>`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const _=["Basic","Group","Playground"];export{o as Basic,s as Group,i as Playground,_ as __namedExportsOrder,V as default};
