import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{m as o,n as i,G as d,R as m,C as r,P as h,o as C}from"./Breadcrumb-CkZbs_bz.js";import{r as b}from"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const D={title:"Pagination",component:o,tags:["autodocs"],argTypes:{total:{control:"number"},pageSize:{control:"number"},defaultCurrent:{control:"number"}}},v={...i,Pagination:{...i.Pagination,items_per_page:"rows/page"}},a=()=>{const[t,x]=b.useState(6),P=f=>x(f);return e.jsx(d,{fluid:!0,children:e.jsxs(m,{children:[e.jsx(r,{xs:12,children:e.jsx(h,{margin:"1rem 0 1rem 0",children:"Pagination is used for splitting up content or data into several pages, with a control for navigating to the next or previous page. Depending on the parents component width and / or number of available provided pages, the pagination component will automatically scale if required, some pages at the beginning / at the end of the list will be hidden with … symbol. You can check also Ant Design documentation for further details."})}),e.jsx(r,{xs:12,children:e.jsx(C,{locale:v,children:e.jsx(o,{total:100,pageSize:10,defaultCurrent:6,current:t,previousPageAriaLabel:"Previous page",nextPageAriaLabel:"Next page",prevDotsPageAriaLabel:"Jumpt previous 5 pages",nextDotsPageAriaLabel:"Jumpt next 5 pages",onChange:P})})})]})})},n=t=>e.jsx(d,{fluid:!0,children:e.jsxs(m,{children:[e.jsx(r,{xs:12,children:e.jsx(h,{margin:"1rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Pagination."})}),e.jsx(r,{xs:12,children:e.jsx(o,{...t})})]})});var s,l,g;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
                    <ConfigProvider locale={customLocale}>
                        <Pagination total={100} pageSize={10} defaultCurrent={6} current={current} previousPageAriaLabel='Previous page' nextPageAriaLabel='Next page' prevDotsPageAriaLabel='Jumpt previous 5 pages' nextDotsPageAriaLabel='Jumpt next 5 pages' onChange={onChange} />
                    </ConfigProvider>
                </Cell>
            </Row>
        </Grid>;
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,c,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`(args: PaginationProps) => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Pagination.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Pagination {...args} />
            </Cell>
        </Row>
    </Grid>`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const R=["Basic","Playground"];export{a as Basic,n as Playground,R as __namedExportsOrder,D as default};
