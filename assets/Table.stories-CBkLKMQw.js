import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as c}from"./index-DRjF_FHU.js";import{T as l,G as p,R as x,C as o,P as j,r as K,s as U,w as q}from"./Breadcrumb-CkZbs_bz.js";import{d as s,c as P}from"./Table-CeU1Pbmn.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const te={title:"Table",component:l,tags:["autodocs"]},Q=()=>{const[i,d]=c.useState([]),[n,t]=c.useState(10),[r,a]=c.useState(1),[C,u]=c.useState(s.slice((r-1)*n,r*n)),V={selectedRowKeys:i,onChange:g=>{d(g)}},B=(g,h)=>{console.log(`Page: ${g}, Size: ${h}`),t(h),a(g),u(s.slice((g-1)*h,g*h))},O=q();return e.jsx("div",{children:e.jsx(O,{rowSelection:V,columns:P,dataSource:C,currentPage:r,totalRegisters:s.length,pageSize:n,onPageChange:B,rowsCanBeSelectAriaLabel:"Check to select row",selectAllRowsAriaLabel:"Select all"})})},v=()=>{const[i,d]=c.useState(10),[n,t]=c.useState(1),[r,a]=c.useState(s.slice((n-1)*i,n*i)),C=(u,m)=>{console.log(`Page: ${u}, Size: ${m}`),d(m),t(u),a(s.slice((u-1)*m,u*m))};return e.jsx(p,{fluid:!0,children:e.jsxs(x,{children:[e.jsx(o,{xs:12,children:e.jsx(j,{margin:"1rem 0 1rem 0",children:"Tables allow arranging and organising data into rows and columns. A wrapper for Ant Design Table so check their documentation for further information."})}),e.jsx(o,{xs:12,children:e.jsx(l,{dataSource:r,columns:P,totalRegisters:s.length,pageSize:i,currentPage:n,showSizeChanger:!0,onPageChange:C,prevPageAriaLabel:"Previous page",nextPageAriaLabel:"Next page",prevDotsPageAriaLabel:"Jumpt previous 5 pages",nextDotsPageAriaLabel:"Jumpt next 5 pages"})})]})})},S=()=>e.jsx(p,{fluid:!0,children:e.jsxs(x,{children:[e.jsx(o,{xs:12,children:e.jsx(j,{margin:"1rem 0 1rem 0",children:"Table loading"})}),e.jsx(o,{xs:12,children:e.jsx(l,{dataSource:s,columns:P,isLoading:!0,isPaginated:!1})})]})}),y=()=>e.jsx(p,{fluid:!0,children:e.jsxs(x,{children:[e.jsx(o,{xs:12,children:e.jsx(j,{margin:"1rem 0 1rem 0",children:"Table error"})}),e.jsx(o,{xs:12,children:e.jsx(l,{dataSource:s,columns:P,isPaginated:!1,showError:!0,errorContent:e.jsx(K,{variant:U.ERROR,title:"Error data",info:"Please check and modify the following information before resubmitting."})})})]})}),f=()=>e.jsx(p,{fluid:!0,children:e.jsx(x,{children:e.jsx(o,{xs:12,children:e.jsx(Q,{})})})}),b=()=>{const i=[{title:"Component categorisation",dataIndex:"categorisation",key:"categorisation"},{title:"Devices",dataIndex:"devices",key:"devices"},{title:"Configuration",dataIndex:"configuration",key:"configuration"}],d=[{key:1,categorisation:"Electricity",description:"Electricity",children:[{key:11,categorisation:"Consumption",devices:"Device name",configuration:"Mesured",children:[{key:111,categorisation:"HVAC",configuration:"Unmesured",children:[{key:1111,categorisation:"Subtotals",devices:"device name, device name",configuration:"Partially mesured"}]},{key:112,categorisation:"Heating system",configuration:"Calculated",children:[{key:1121,categorisation:"Subtotals",devices:"device name, device name",configuration:"Mesured"}]},{key:113,categorisation:"Lighting",configuration:"Mesured",children:[{key:1131,categorisation:"Subtotals",devices:"device name, device name",configuration:"Mesured"}]},{key:114,categorisation:"Example",configuration:"Mesured",children:[{key:1141,categorisation:"Subtotals",devices:"device name, device name",configuration:"Partially mesured"}]}]}]},{key:2,categorisation:"Gas",description:"Gas",children:[{key:21,categorisation:"Consumption",devices:"device name",configuration:"Mesured"}]},{key:3,categorisation:"Water",description:"Water",children:[{key:31,categorisation:"Consumption",devices:"device name",configuration:"Mesured"}]}];return e.jsx(l,{columns:i,dataSource:d,expandable:{},isPaginated:!1})},k=()=>{const i=()=>{const t=[{title:"Project details",dataIndex:"project_details",key:"project_details",width:"25%"},{title:"Type",dataIndex:"type",key:"type",width:"20%"},{title:"Target",dataIndex:"target",key:"target",width:"11%"},{title:"Saved %",dataIndex:"saved",key:"saved",width:"14%"},{title:"Saved Total",dataIndex:"saved_total",key:"saved_total",width:"30%"}],r=[];for(let a=0;a<6;a+=1)r.push({key:a,project_details:a,type:"Standard",target:`${(a+Math.random()*100).toFixed(1)}%`,saved:`${(a*2+Math.random()*100).toFixed(2)}%`,saved_total:(a*1e3+Math.random()*1e3).toFixed(2)});return e.jsx(l,{isExpanded:!0,columns:t,dataSource:r,isPaginated:!1,bordered:!1})},d=[{title:"Group details",dataIndex:"group_details",key:"group_details"},{title:"Projects",dataIndex:"projects",key:"projects"},{title:"Target",dataIndex:"target",key:"target"},{title:"Saved %",dataIndex:"saved",key:"saved"},{title:"Saved Total",dataIndex:"saved_total",key:"saved_total"},{title:"Time Savings",dataIndex:"time_savings",key:"time_savings"}],n=[];for(let t=0;t<3;t+=1)n.push({key:t,group_details:"School",projects:t,target:"5.0%",saved:"0.41%",saved_total:"10.3.4.5654",time_savings:"asdasda",expandable:!0});return e.jsx(p,{fluid:!0,children:e.jsx(x,{children:e.jsx(o,{xs:12,children:e.jsx(l,{isExpanded:!0,columns:d,expandable:{expandedRowRender:i},dataSource:n,isPaginated:!1})})})})};var T,w,R;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataSource, setDataSource] = useState(dataTable.slice((currentPage - 1) * pageSize, currentPage * pageSize));
  const onPageChange = (page: number, size: number) => {
    console.log(\`Page: \${page}, Size: \${size}\`);
    setPageSize(size);
    setCurrentPage(page);
    setDataSource(dataTable.slice((page - 1) * size, page * size));
  };
  return <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Tables allow arranging and organising data into rows and columns. A wrapper for Ant Design Table so check their documentation for further information.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataSource} columns={columnsTable} totalRegisters={dataTable.length} pageSize={pageSize} currentPage={currentPage} showSizeChanger onPageChange={onPageChange} prevPageAriaLabel='Previous page' nextPageAriaLabel='Next page' prevDotsPageAriaLabel='Jumpt previous 5 pages' nextDotsPageAriaLabel='Jumpt next 5 pages' />
            </Cell>
        </Row>
    </Grid>;
}`,...(R=(w=v.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var _,I,E;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Table loading</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} isLoading isPaginated={false} />
            </Cell>
        </Row>
    </Grid>`,...(E=(I=S.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var M,G,A;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Table error</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} isPaginated={false} showError errorContent={<Result variant={ResultVariants.ERROR} title='Error data' info='Please check and modify the following information before resubmitting.' />} />
            </Cell>
        </Row>
    </Grid>`,...(A=(G=y.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var D,L,z;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Selection />
            </Cell>
        </Row>
    </Grid>`,...(z=(L=f.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var $,F,W;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(W=(F=b.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var H,J,N;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(N=(J=k.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};const ie=["Basic","Loading","Error","TableSelection","ExpandableTable","NestedTable"];export{v as Basic,y as Error,b as ExpandableTable,S as Loading,k as NestedTable,f as TableSelection,ie as __namedExportsOrder,te as default};
