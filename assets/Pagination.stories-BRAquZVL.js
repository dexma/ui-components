import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{l as o,G as c,R as d,C as t,P as m}from"./Breadcrumb-C_Mj3CLc.js";import{r as f}from"./index-DRjF_FHU.js";import"./global-Bal8tAcl.js";import"./index-DqsfaJzi.js";const A={title:"Pagination",component:o,tags:["autodocs"],argTypes:{total:{control:"number"},pageSize:{control:"number"},defaultCurrent:{control:"number"}}},a=()=>{const[r,h]=f.useState(6),x=P=>h(P);return e.jsx(c,{fluid:!0,children:e.jsxs(d,{children:[e.jsx(t,{xs:12,children:e.jsx(m,{margin:"1rem 0 1rem 0",children:"Pagination is used for splitting up content or data into several pages, with a control for navigating to the next or previous page. Depending on the parents component width and / or number of available provided pages, the pagination component will automatically scale if required, some pages at the beginning / at the end of the list will be hidden with … symbol. You can check also Ant Design documentation for further details."})}),e.jsx(t,{xs:12,children:e.jsx(o,{total:100,pageSize:10,defaultCurrent:6,current:r,previosPageAriaLabel:"Previous page",nextPageAriaLabel:"Next page",prevDotsPageAriaLabel:"Jumpt previous 5 pages",nextDotsPageAriaLabel:"Jumpt next 5 pages",onChange:x})})]})})},n=r=>e.jsx(c,{fluid:!0,children:e.jsxs(d,{children:[e.jsx(t,{xs:12,children:e.jsx(m,{margin:"1rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Pagination."})}),e.jsx(t,{xs:12,children:e.jsx(o,{...r})})]})});var i,s,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [current, setCurrent] = useState(6);
  const onChange = (page: number) => setCurrent(page);
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>
                        Pagination is used for splitting up content or data into several pages, with a control for navigating to the next or previous page. Depending on the parents
                        component width and / or number of available provided pages, the pagination component will automatically scale if required, some pages at the beginning / at the
                        end of the list will be hidden with … symbol. You can check also Ant Design documentation for further details.
                    </Paragraph>
                </Cell>
                <Cell xs={12}>
                    <Pagination total={100} pageSize={10} defaultCurrent={6} current={current} previosPageAriaLabel='Previous page' nextPageAriaLabel='Next page' prevDotsPageAriaLabel='Jumpt previous 5 pages' nextDotsPageAriaLabel='Jumpt next 5 pages' onChange={onChange} />
                </Cell>
            </Row>
        </Grid>;
}`,...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var p,g,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`(args: PaginationProps) => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Pagination.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Pagination {...args} />
            </Cell>
        </Row>
    </Grid>`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const y=["Basic","Playground"];export{a as Basic,n as Playground,y as __namedExportsOrder,A as default};
