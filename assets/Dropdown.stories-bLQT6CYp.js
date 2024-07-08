import{j as e}from"./polished.esm-BTw9q-eL.js";import{h as t,G as a,R as d,C as n,P as p}from"./DatePicker-DtFoBb26.js";import"./index-uubelm5h.js";import"./global-DpqdS--E.js";import"./get-B2oUPAyW.js";import"./_commonjs-dynamic-modules-S1e38TyK.js";import"./_baseIteratee-JV0s3RFV.js";import"./index-DfsGIHLO.js";import"./debounce-BJI3GnSe.js";import"./index-Bd6JW1JU.js";const r=[{text:"Edit",icon:"edit",onClick:o=>{console.log("click edit",o)}},{text:"Delete",icon:"delete",onClick:o=>{console.log("click delete",o)}}],S={title:"Dropdown",component:t,tags:["autodocs"]},s=()=>e.jsx(a,{fluid:!0,children:e.jsxs(d,{children:[e.jsx(n,{xs:12,children:e.jsx(p,{margin:"1rem 0 1rem 0",children:"A simple dropdown that provides action elements like links and buttons."})}),e.jsxs(n,{xs:12,children:[e.jsx(t,{icon:"more_horiz",content:r}),e.jsx(t,{icon:"add",content:r})]})]})}),i=()=>e.jsx(a,{fluid:!0,children:e.jsxs(d,{children:[e.jsx(n,{xs:12,children:e.jsx(p,{margin:"1rem 0 1rem 0",children:"The text prop allows the dropdown to be more descriptive."})}),e.jsx(n,{xs:12,children:e.jsx(t,{icon:"add",content:r,text:"Dropdown",trigger:["click"]})})]})}),l=()=>e.jsx(a,{fluid:!0,children:e.jsxs(d,{children:[e.jsxs(n,{xs:12,children:[e.jsx(p,{margin:"1rem 0 1rem 0",children:"You can use the placement prop to adjust the dropdown position."}),e.jsx("br",{})]}),e.jsx(n,{xs:12,xsOffset:2,children:e.jsx(t,{icon:"settings",content:r,text:"Bottom",placement:"bottom"})}),e.jsx("br",{}),e.jsx(n,{xs:12,xsOffset:2,children:e.jsx(t,{icon:"settings",content:r,text:"Top",placement:"top"})}),e.jsx("br",{}),e.jsx(n,{xs:12,xsOffset:2,children:e.jsx(t,{icon:"settings",content:r,text:"Left",placement:"bottomLeft"})}),e.jsx("br",{}),e.jsx(n,{xs:12,xsOffset:2,children:e.jsx(t,{icon:"settings",content:r,text:"Right",placement:"bottomRight"})})]})}),c=({content:o,...R})=>(typeof o=="object"&&!Array.isArray(o)&&(o=[]),e.jsx(a,{fluid:!0,children:e.jsxs(d,{children:[e.jsx(n,{xs:12,children:e.jsx(p,{margin:"1rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Dropdown."})}),e.jsx(n,{xs:12,children:e.jsx(t,{...R})})]})}));var x,m,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A simple dropdown that provides action elements like links and buttons.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Dropdown icon='more_horiz' content={innerContent} />
                <Dropdown icon='add' content={innerContent} />
            </Cell>
        </Row>
    </Grid>`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,j,u;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>The text prop allows the dropdown to be more descriptive.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Dropdown icon='add' content={innerContent} text='Dropdown' trigger={['click']} />
            </Cell>
        </Row>
    </Grid>`,...(u=(j=i.parameters)==null?void 0:j.docs)==null?void 0:u.source}}};var w,C,f;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>You can use the placement prop to adjust the dropdown position.</Paragraph>
                <br />
            </Cell>
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Bottom' placement='bottom' />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Top' placement='top' />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Left' placement='bottomLeft' />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Right' placement='bottomRight' />
            </Cell>
        </Row>
    </Grid>`,...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var b,D,P;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`({
  content,
  ...props
}: DropdownProps) => {
  if (typeof content === 'object' && !Array.isArray(content)) {
    // eslint-disable-next-line
    content = [];
  }
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Dropdown.</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <Dropdown {...props} />
                </Cell>
            </Row>
        </Grid>;
}`,...(P=(D=c.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const W=["Basic","DropdownWithText","DropdownWithPlacement","Playground"];export{s as Basic,l as DropdownWithPlacement,i as DropdownWithText,c as Playground,W as __namedExportsOrder,S as default};
