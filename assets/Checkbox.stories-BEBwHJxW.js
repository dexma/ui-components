import{j as e}from"./polished.esm-BTw9q-eL.js";import{r as g}from"./index-uubelm5h.js";import{c as r,G as m,R as p,C as a,P as C}from"./DatePicker-DtFoBb26.js";import"./global-DpqdS--E.js";import"./get-B2oUPAyW.js";import"./_commonjs-dynamic-modules-S1e38TyK.js";import"./_baseIteratee-JV0s3RFV.js";import"./index-DfsGIHLO.js";import"./debounce-BJI3GnSe.js";import"./index-Bd6JW1JU.js";const _={title:"Checkbox",component:r,tags:["autodocs"]},t=({text:o})=>{const[c,u]=g.useState(!1),k=()=>{u(!c)};return e.jsx(r,{checked:c,onChange:k,children:o&&o})},s=()=>e.jsx(m,{fluid:!0,children:e.jsxs(p,{children:[e.jsx(a,{xs:12,children:e.jsx(C,{margin:"1rem 0 1rem 0",children:"Checkboxes are used for a list of options where the user may select multiple options, including all or none. They can be grouped vertically or horizontally."})}),e.jsxs(a,{xs:12,children:[e.jsx(t,{}),e.jsx("br",{}),e.jsx(t,{text:"Basic checkbox"}),e.jsx("br",{}),e.jsx(r,{disabled:!0,children:"Checkbox disabled"}),e.jsx("br",{}),e.jsx(r,{disabled:!0,checked:!0,children:"Checkbox checked disabled"}),e.jsx("br",{})]})]})}),n=o=>e.jsx(m,{fluid:!0,children:e.jsxs(p,{style:{marginBottom:"10px"},children:[e.jsx(a,{xs:12,children:e.jsx(C,{margin:"1.5rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Checkbox."})}),e.jsx(a,{xs:12,children:e.jsx(r,{...o,children:"Checkbox"})})]})});var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => <Grid fluid>
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
    </Grid>`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var h,x,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`(args: CheckboxProps) => <Grid fluid>
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
    </Grid>`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const v=["Basic","Playground"];export{s as Basic,n as Playground,v as __namedExportsOrder,_ as default};
