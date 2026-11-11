import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as l}from"./index-DRjF_FHU.js";import{T as c,G as x,R as h,C as o,P as R,k as Y,r as Z,s as ee,x as ae}from"./Breadcrumb-BjHONIPG.js";import{c as S,d as v}from"./Table-CeU1Pbmn.js";import"./global-Dkooq0WN.js";import"./index-DqsfaJzi.js";const de={title:"Table",component:c,tags:["autodocs"]},te=()=>{const[r,a]=l.useState([]),[t,s]=l.useState(10),[i,n]=l.useState(1),[m,d]=l.useState(v.slice((i-1)*t,i*t)),_={selectedRowKeys:r,onChange:p=>{a(p)}},u=(p,f)=>{console.log(`Page: ${p}, Size: ${f}`),s(f),n(p),d(v.slice((p-1)*f,p*f))},I=ae();return e.jsx("div",{children:e.jsx(I,{rowSelection:_,columns:S,dataSource:m,currentPage:i,totalRegisters:v.length,pageSize:t,onPageChange:u,rowsCanBeSelectAriaLabel:"Check to select row",selectAllRowsAriaLabel:"Select all"})})},w=Array.from({length:250},(r,a)=>({key:a,name:`Edward King ${a}`,age:20+a%40,address:`London, Park Lane no. ${a}`})),P=()=>{const[r,a]=l.useState(25),[t,s]=l.useState(1),[i,n]=l.useState(w.slice((t-1)*r,t*r)),m=(d,g)=>{console.log(`Page: ${d}, Size: ${g}`),a(g),s(d),n(w.slice((d-1)*g,d*g))};return e.jsx(x,{fluid:!0,children:e.jsxs(h,{children:[e.jsx(o,{xs:12,children:e.jsx(R,{margin:"1rem 0 1rem 0",children:"Tables allow arranging and organising data into rows and columns. A wrapper for Ant Design Table so check their documentation for further information."})}),e.jsx(o,{xs:12,children:e.jsx(c,{dataSource:i,columns:S,totalRegisters:w.length,pageSize:r,currentPage:t,showSizeChanger:!0,onPageChange:m,prevPageAriaLabel:"Previous page",nextPageAriaLabel:"Next page",prevDotsPageAriaLabel:"Jumpt previous 5 pages",nextDotsPageAriaLabel:"Jumpt next 5 pages"})})]})})},b=()=>{const[r,a]=l.useState(""),[t,s]=l.useState(25),[i,n]=l.useState(1),m=w.filter(u=>u.name.toLowerCase().includes(r.toLowerCase())),d=m.slice((i-1)*t,i*t),g=(u,I)=>{s(I),n(u)},_=u=>{a(u.target.value),n(1)};return e.jsx(x,{fluid:!0,children:e.jsxs(h,{children:[e.jsx(o,{xs:12,children:e.jsx(R,{margin:"1rem 0 1rem 0",children:'Pagination reflects the filtered result: filter by name (e.g. "King 1") and the total and pages are recalculated.'})}),e.jsx(o,{xs:12,children:e.jsx(Y,{type:"text",label:"Filter by name",value:r,onChange:_})}),e.jsx(o,{xs:12,children:e.jsx(c,{dataSource:d,columns:S,totalRegisters:m.length,pageSize:t,currentPage:i,showSizeChanger:!0,onPageChange:g,prevPageAriaLabel:"Previous page",nextPageAriaLabel:"Next page",prevDotsPageAriaLabel:"Jumpt previous 5 pages",nextDotsPageAriaLabel:"Jumpt next 5 pages"})})]})})},y=()=>e.jsx(x,{fluid:!0,children:e.jsxs(h,{children:[e.jsx(o,{xs:12,children:e.jsx(R,{margin:"1rem 0 1rem 0",children:"Table loading"})}),e.jsx(o,{xs:12,children:e.jsx(c,{dataSource:v,columns:S,isLoading:!0,isPaginated:!1})})]})}),C=()=>e.jsx(x,{fluid:!0,children:e.jsxs(h,{children:[e.jsx(o,{xs:12,children:e.jsx(R,{margin:"1rem 0 1rem 0",children:"Table error"})}),e.jsx(o,{xs:12,children:e.jsx(c,{dataSource:v,columns:S,isPaginated:!1,showError:!0,errorContent:e.jsx(Z,{variant:ee.ERROR,title:"Error data",info:"Please check and modify the following information before resubmitting."})})})]})}),k=()=>e.jsx(x,{fluid:!0,children:e.jsx(h,{children:e.jsx(o,{xs:12,children:e.jsx(te,{})})})}),j=()=>{const r=[{title:"Component categorisation",dataIndex:"categorisation",key:"categorisation"},{title:"Devices",dataIndex:"devices",key:"devices"},{title:"Configuration",dataIndex:"configuration",key:"configuration"}],a=[{key:1,categorisation:"Electricity",description:"Electricity",children:[{key:11,categorisation:"Consumption",devices:"Device name",configuration:"Mesured",children:[{key:111,categorisation:"HVAC",configuration:"Unmesured",children:[{key:1111,categorisation:"Subtotals",devices:"device name, device name",configuration:"Partially mesured"}]},{key:112,categorisation:"Heating system",configuration:"Calculated",children:[{key:1121,categorisation:"Subtotals",devices:"device name, device name",configuration:"Mesured"}]},{key:113,categorisation:"Lighting",configuration:"Mesured",children:[{key:1131,categorisation:"Subtotals",devices:"device name, device name",configuration:"Mesured"}]},{key:114,categorisation:"Example",configuration:"Mesured",children:[{key:1141,categorisation:"Subtotals",devices:"device name, device name",configuration:"Partially mesured"}]}]}]},{key:2,categorisation:"Gas",description:"Gas",children:[{key:21,categorisation:"Consumption",devices:"device name",configuration:"Mesured"}]},{key:3,categorisation:"Water",description:"Water",children:[{key:31,categorisation:"Consumption",devices:"device name",configuration:"Mesured"}]}];return e.jsx(c,{columns:r,dataSource:a,expandable:{},isPaginated:!1})},T=()=>{const r=()=>{const s=[{title:"Project details",dataIndex:"project_details",key:"project_details",width:"25%"},{title:"Type",dataIndex:"type",key:"type",width:"20%"},{title:"Target",dataIndex:"target",key:"target",width:"11%"},{title:"Saved %",dataIndex:"saved",key:"saved",width:"14%"},{title:"Saved Total",dataIndex:"saved_total",key:"saved_total",width:"30%"}],i=[];for(let n=0;n<6;n+=1)i.push({key:n,project_details:n,type:"Standard",target:`${(n+Math.random()*100).toFixed(1)}%`,saved:`${(n*2+Math.random()*100).toFixed(2)}%`,saved_total:(n*1e3+Math.random()*1e3).toFixed(2)});return e.jsx(c,{isExpanded:!0,columns:s,dataSource:i,isPaginated:!1,bordered:!1})},a=[{title:"Group details",dataIndex:"group_details",key:"group_details"},{title:"Projects",dataIndex:"projects",key:"projects"},{title:"Target",dataIndex:"target",key:"target"},{title:"Saved %",dataIndex:"saved",key:"saved"},{title:"Saved Total",dataIndex:"saved_total",key:"saved_total"},{title:"Time Savings",dataIndex:"time_savings",key:"time_savings"}],t=[];for(let s=0;s<3;s+=1)t.push({key:s,group_details:"School",projects:s,target:"5.0%",saved:"0.41%",saved_total:"10.3.4.5654",time_savings:"asdasda",expandable:!0});return e.jsx(x,{fluid:!0,children:e.jsx(h,{children:e.jsx(o,{xs:12,children:e.jsx(c,{isExpanded:!0,columns:a,expandable:{expandedRowRender:r},dataSource:t,isPaginated:!1})})})})};var L,D,z;P.parameters={...P.parameters,docs:{...(L=P.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataSource, setDataSource] = useState(largeDataTable.slice((currentPage - 1) * pageSize, currentPage * pageSize));
  const onPageChange = (page: number, size: number) => {
    console.log(\`Page: \${page}, Size: \${size}\`);
    setPageSize(size);
    setCurrentPage(page);
    setDataSource(largeDataTable.slice((page - 1) * size, page * size));
  };
  return <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Tables allow arranging and organising data into rows and columns. A wrapper for Ant Design Table so check their documentation for further information.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataSource} columns={columnsTable} totalRegisters={largeDataTable.length} pageSize={pageSize} currentPage={currentPage} showSizeChanger onPageChange={onPageChange} prevPageAriaLabel='Previous page' nextPageAriaLabel='Next page' prevDotsPageAriaLabel='Jumpt previous 5 pages' nextDotsPageAriaLabel='Jumpt next 5 pages' />
            </Cell>
        </Row>
    </Grid>;
}`,...(z=(D=P.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var A,E,M;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [filter, setFilter] = useState('');
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const filteredData = largeDataTable.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));
  const dataSource = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const onPageChange = (page: number, size: number) => {
    setPageSize(size);
    setCurrentPage(page);
  };
  const onFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    setCurrentPage(1);
  };
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>
                        Pagination reflects the filtered result: filter by name (e.g. "King 1") and the total and pages are recalculated.
                    </Paragraph>
                </Cell>
                <Cell xs={12}>
                    <Input type='text' label='Filter by name' value={filter} onChange={onFilterChange} />
                </Cell>
                <Cell xs={12}>
                    <Table dataSource={dataSource} columns={columnsTable} totalRegisters={filteredData.length} pageSize={pageSize} currentPage={currentPage} showSizeChanger onPageChange={onPageChange} prevPageAriaLabel='Previous page' nextPageAriaLabel='Next page' prevDotsPageAriaLabel='Jumpt previous 5 pages' nextDotsPageAriaLabel='Jumpt next 5 pages' />
                </Cell>
            </Row>
        </Grid>;
}`,...(M=(E=b.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var G,F,$;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Table loading</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} isLoading isPaginated={false} />
            </Cell>
        </Row>
    </Grid>`,...($=(F=y.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var J,N,W;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Table error</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} isPaginated={false} showError errorContent={<Result variant={ResultVariants.ERROR} title='Error data' info='Please check and modify the following information before resubmitting.' />} />
            </Cell>
        </Row>
    </Grid>`,...(W=(N=C.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var H,K,V;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Selection />
            </Cell>
        </Row>
    </Grid>`,...(V=(K=k.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var B,O,U;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const columns = [{
    title: 'Component categorisation',
    dataIndex: 'categorisation',
    key: 'categorisation'
  }, {
    title: 'Devices',
    dataIndex: 'devices',
    key: 'devices'
  }, {
    title: 'Configuration',
    dataIndex: 'configuration',
    key: 'configuration'
  }];
  const dataSources = [{
    key: 1,
    categorisation: 'Electricity',
    description: 'Electricity',
    children: [{
      key: 11,
      categorisation: 'Consumption',
      devices: 'Device name',
      configuration: 'Mesured',
      children: [{
        key: 111,
        categorisation: 'HVAC',
        configuration: 'Unmesured',
        children: [{
          key: 1111,
          categorisation: 'Subtotals',
          devices: 'device name, device name',
          configuration: 'Partially mesured'
        }]
      }, {
        key: 112,
        categorisation: 'Heating system',
        configuration: 'Calculated',
        children: [{
          key: 1121,
          categorisation: 'Subtotals',
          devices: 'device name, device name',
          configuration: 'Mesured'
        }]
      }, {
        key: 113,
        categorisation: 'Lighting',
        configuration: 'Mesured',
        children: [{
          key: 1131,
          categorisation: 'Subtotals',
          devices: 'device name, device name',
          configuration: 'Mesured'
        }]
      }, {
        key: 114,
        categorisation: 'Example',
        configuration: 'Mesured',
        children: [{
          key: 1141,
          categorisation: 'Subtotals',
          devices: 'device name, device name',
          configuration: 'Partially mesured'
        }]
      }]
    }]
  }, {
    key: 2,
    categorisation: 'Gas',
    description: 'Gas',
    children: [{
      key: 21,
      categorisation: 'Consumption',
      devices: 'device name',
      configuration: 'Mesured'
    }]
  }, {
    key: 3,
    categorisation: 'Water',
    description: 'Water',
    children: [{
      key: 31,
      categorisation: 'Consumption',
      devices: 'device name',
      configuration: 'Mesured'
    }]
  }];
  return <Table columns={columns} dataSource={dataSources} expandable={{}} isPaginated={false} />;
}`,...(U=(O=j.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var q,Q,X;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const expandedRowRender = () => {
    const columns = [{
      title: 'Project details',
      dataIndex: 'project_details',
      key: 'project_details',
      width: '25%'
    }, {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: '20%'
    }, {
      title: 'Target',
      dataIndex: 'target',
      key: 'target',
      width: '11%'
    }, {
      title: 'Saved %',
      dataIndex: 'saved',
      key: 'saved',
      width: '14%'
    }, {
      title: 'Saved Total',
      dataIndex: 'saved_total',
      key: 'saved_total',
      width: '30%'
    }];
    const data = [];
    for (let i = 0; i < 6; i += 1) {
      data.push({
        key: i,
        project_details: i,
        type: 'Standard',
        target: \`\${(i + Math.random() * 100).toFixed(1)}%\`,
        saved: \`\${(i * 2 + Math.random() * 100).toFixed(2)}%\`,
        saved_total: (i * 1000 + Math.random() * 1000).toFixed(2)
      });
    }
    return <Table isExpanded columns={columns} dataSource={data} isPaginated={false} bordered={false} />;
  };
  const columns = [{
    title: 'Group details',
    dataIndex: 'group_details',
    key: 'group_details'
  }, {
    title: 'Projects',
    dataIndex: 'projects',
    key: 'projects'
  }, {
    title: 'Target',
    dataIndex: 'target',
    key: 'target'
  }, {
    title: 'Saved %',
    dataIndex: 'saved',
    key: 'saved'
  }, {
    title: 'Saved Total',
    dataIndex: 'saved_total',
    key: 'saved_total'
  }, {
    title: 'Time Savings',
    dataIndex: 'time_savings',
    key: 'time_savings'
  }];
  const data = [];
  for (let i = 0; i < 3; i += 1) {
    data.push({
      key: i,
      group_details: 'School',
      projects: i,
      target: '5.0%',
      saved: '0.41%',
      saved_total: '10.3.4.5654',
      time_savings: 'asdasda',
      expandable: true
    });
  }
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Table isExpanded columns={columns} expandable={{
          expandedRowRender
        }} dataSource={data} isPaginated={false} />
                </Cell>
            </Row>
        </Grid>;
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ce=["Basic","FilteredPagination","Loading","Error","TableSelection","ExpandableTable","NestedTable"];export{P as Basic,C as Error,j as ExpandableTable,b as FilteredPagination,y as Loading,T as NestedTable,k as TableSelection,ce as __namedExportsOrder,de as default};
