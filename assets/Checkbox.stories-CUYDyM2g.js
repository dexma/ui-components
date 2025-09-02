import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as j}from"./index-DRjF_FHU.js";import{c as r,G as m,R as p,C as c,P as C}from"./Breadcrumb-CkZbs_bz.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const R={title:"Checkbox",component:r,tags:["autodocs"]},l=({text:o})=>{const[a,u]=j.useState(!1),k=()=>{u(!a)},g=()=>{console.log("blur")};return e.jsx(r,{checked:a,onChange:k,onBlur:g,children:o&&o})},s=()=>e.jsx(m,{fluid:!0,children:e.jsxs(p,{children:[e.jsx(c,{xs:12,children:e.jsx(C,{margin:"1rem 0 1rem 0",children:"Checkboxes are used for a list of options where the user may select multiple options, including all or none. They can be grouped vertically or horizontally."})}),e.jsxs(c,{xs:12,children:[e.jsx(l,{}),e.jsx("br",{}),e.jsx(l,{text:"Basic checkbox"}),e.jsx("br",{}),e.jsx(r,{disabled:!0,children:"Checkbox disabled"}),e.jsx("br",{}),e.jsx(r,{disabled:!0,checked:!0,children:"Checkbox checked disabled"}),e.jsx("br",{})]})]})}),n=o=>e.jsx(m,{fluid:!0,children:e.jsxs(p,{style:{marginBottom:"10px"},children:[e.jsx(c,{xs:12,children:e.jsx(C,{margin:"1.5rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Checkbox."})}),e.jsx(c,{xs:12,children:e.jsx(r,{...o,children:"Checkbox"})})]})});var t,i,d;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Checkboxes are used for a list of options where the user may select multiple options, including all or none. They can be grouped vertically or horizontally.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <CheckboxBasic />
                <br />
                <CheckboxBasic text='Basic checkbox' />
                <br />
                <Checkbox disabled>Checkbox disabled</Checkbox>
                <br />
                <Checkbox disabled checked>
                    Checkbox checked disabled
                </Checkbox>
                <br />
            </Cell>
        </Row>
    </Grid>`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var h,x,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`(args: CheckboxProps) => <Grid fluid>
        <Row style={{
    marginBottom: '10px'
  }}>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Checkbox.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Checkbox {...args}>Checkbox</Checkbox>
            </Cell>
        </Row>
    </Grid>`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const G=["Basic","Playground"];export{s as Basic,n as Playground,G as __namedExportsOrder,R as default};
