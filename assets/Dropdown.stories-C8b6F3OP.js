import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{i as t,G as p,R as m,C as n,P as x}from"./Breadcrumb-CkZbs_bz.js";import"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const o=[{text:"Edit",icon:"edit"},{text:"Delete",icon:"delete"},{icon:"add",iconAriaLabel:"Add"}],T={title:"Dropdown",component:t,tags:["autodocs"]},r=s=>{const i=o.find((A,R)=>R===s);i&&console.log(`Click in ${i.text} option`)},d=()=>e.jsx(p,{fluid:!0,children:e.jsxs(m,{children:[e.jsx(n,{xs:12,children:e.jsx(x,{margin:"1rem 0 1rem 0",children:"A simple dropdown that provides action elements like links and buttons."})}),e.jsxs(n,{xs:12,children:[e.jsx(t,{icon:"more_horiz",content:o,iconAriaLabel:"More actions",onItemSelected:r}),e.jsx(t,{icon:"add",content:o,iconAriaLabel:"Add",onItemSelected:r})]})]})}),c=()=>e.jsx(p,{fluid:!0,children:e.jsxs(m,{children:[e.jsx(n,{xs:12,children:e.jsx(x,{margin:"1rem 0 1rem 0",children:"The text prop allows the dropdown to be more descriptive."})}),e.jsx(n,{xs:12,children:e.jsx(t,{icon:"add",content:o,text:"Dropdown",trigger:["click"],onItemSelected:r})})]})}),l=()=>e.jsx(p,{fluid:!0,children:e.jsxs(m,{children:[e.jsxs(n,{xs:12,children:[e.jsx(x,{margin:"1rem 0 1rem 0",children:"You can use the placement prop to adjust the dropdown position."}),e.jsx("br",{})]}),e.jsx(n,{xs:12,xsOffset:2,children:e.jsx(t,{icon:"settings",content:o,text:"Bottom",placement:"bottom",onItemSelected:r})}),e.jsx("br",{}),e.jsx(n,{xs:12,xsOffset:2,children:e.jsx(t,{icon:"settings",content:o,text:"Top",placement:"top",onItemSelected:r})}),e.jsx("br",{}),e.jsx(n,{xs:12,xsOffset:2,children:e.jsx(t,{icon:"settings",content:o,text:"Left",placement:"bottomLeft",onItemSelected:r})}),e.jsx("br",{}),e.jsx(n,{xs:12,xsOffset:2,children:e.jsx(t,{icon:"settings",content:o,text:"Right",placement:"bottomRight",onItemSelected:r})})]})}),a=({content:s,...i})=>(typeof s=="object"&&!Array.isArray(s)&&(s=[]),e.jsx(p,{fluid:!0,children:e.jsxs(m,{children:[e.jsx(n,{xs:12,children:e.jsx(x,{margin:"1rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Dropdown."})}),e.jsx(n,{xs:12,children:e.jsx(t,{...i})})]})}));var h,w,g;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A simple dropdown that provides action elements like links and buttons.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Dropdown icon='more_horiz' content={innerContent} iconAriaLabel='More actions' onItemSelected={onItemDropdownSelected} />
                <Dropdown icon='add' content={innerContent} iconAriaLabel='Add' onItemSelected={onItemDropdownSelected} />
            </Cell>
        </Row>
    </Grid>`,...(g=(w=d.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var j,u,f;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>The text prop allows the dropdown to be more descriptive.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Dropdown icon='add' content={innerContent} text='Dropdown' trigger={['click']} onItemSelected={onItemDropdownSelected} />
            </Cell>
        </Row>
    </Grid>`,...(f=(u=c.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var C,D,b;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>You can use the placement prop to adjust the dropdown position.</Paragraph>
                <br />
            </Cell>
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Bottom' placement='bottom' onItemSelected={onItemDropdownSelected} />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Top' placement='top' onItemSelected={onItemDropdownSelected} />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Left' placement='bottomLeft' onItemSelected={onItemDropdownSelected} />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Right' placement='bottomRight' onItemSelected={onItemDropdownSelected} />
            </Cell>
        </Row>
    </Grid>`,...(b=(D=l.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var S,I,P;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
}`,...(P=(I=a.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const _=["Basic","DropdownWithText","DropdownWithPlacement","Playground"];export{d as Basic,l as DropdownWithPlacement,c as DropdownWithText,a as Playground,_ as __namedExportsOrder,T as default};
