import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{h as i,G as c,R as m,C as s,P as d,B as x}from"./Breadcrumb-CkZbs_bz.js";import{r as h}from"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const D={title:"Drawer",component:i,tags:["autodocs"]},n=l=>{const[r,t]=h.useState(!1);return e.jsx(c,{fluid:!0,children:e.jsxs(m,{children:[e.jsx(s,{xs:12,children:e.jsx(d,{margin:"1rem 0 1rem 0",children:"Drawer component to have a side panel. Component is a 1:1 port from AntD Component."})}),e.jsxs(s,{xs:12,style:{height:"50px"},children:[e.jsx(x,{onClick:()=>{t(!r)},kind:"button",text:"Try me"}),e.jsxs(i,{...l,open:r,title:"Basic Drawer",onClose:()=>{t(!1)},children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]})]})})};var o,a,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`(args: DrawerProps) => {
  const [open, setOpen] = useState(false);
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>Drawer component to have a side panel. Component is a 1:1 port from AntD Component.</Paragraph>
                </Cell>
                <Cell xs={12} style={{
        height: '50px'
      }}>
                    <Button onClick={() => {
          setOpen(!open);
        }} kind='button' text='Try me' />
                    <Drawer {...args} open={open} title='Basic Drawer' onClose={() => {
          setOpen(false);
        }}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
                </Cell>
            </Row>
        </Grid>;
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const g=["Basic"];export{n as Basic,g as __namedExportsOrder,D as default};
