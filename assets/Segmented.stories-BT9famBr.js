import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{u as o,G as p,R as u,C as a,P as d}from"./Breadcrumb-CKLegHK5.js";import{r as g}from"./index-DRjF_FHU.js";import"./global--igbgGtP.js";import"./index-DqsfaJzi.js";const v={title:"Segmented",component:o,tags:["autodocs"]},n=s=>{const[i,m]=g.useState("all");return e.jsx(p,{fluid:!0,children:e.jsxs(u,{children:[e.jsx(a,{xs:12,children:e.jsx(d,{margin:"1rem 0 1rem 0",children:"Segmented control to switch between a set of options. Component is a 1:1 port from AntD Component."})}),e.jsx(a,{xs:12,children:e.jsx(o,{...s,block:!0,options:[{label:"All",value:"all"},{label:"Critical",value:"critical"},{label:"Warning",value:"warning"}],value:i,onChange:c=>{m(c)}})})]})})};var t,r,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`(args: SegmentedProps) => {
  const [value, setValue] = useState<string>('all');
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>
                        Segmented control to switch between a set of options. Component is a 1:1 port from AntD Component.
                    </Paragraph>
                </Cell>
                <Cell xs={12}>
                    <Segmented {...args} block options={[{
          label: 'All',
          value: 'all'
        }, {
          label: 'Critical',
          value: 'critical'
        }, {
          label: 'Warning',
          value: 'warning'
        }]} value={value} onChange={next => {
          setValue(next as string);
        }} />
                </Cell>
            </Row>
        </Grid>;
}`,...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const S=["Basic"];export{n as Basic,S as __namedExportsOrder,v as default};
