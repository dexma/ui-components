import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as W}from"./index-DRjF_FHU.js";import{T as i,G as s,R as d,C as t,P as f,q as H,r as J,v as N}from"./Breadcrumb-BIY0vnFa.js";import{d as v,c as h}from"./Table-CeU1Pbmn.js";import"./global-Bal8tAcl.js";import"./index-DqsfaJzi.js";const q={title:"Table",component:i,tags:["autodocs"]},V=()=>{const[r,o]=W.useState([]),n={selectedRowKeys:r,onChange:a=>{o(a)}},c=N();return e.jsx("div",{children:e.jsx(c,{rowSelection:n,columns:h,dataSource:v,rowsCanBeSelectAriaLabel:"Check to select row",selectAllRowsAriaLabel:"Select all"})})},l=()=>e.jsx(s,{fluid:!0,children:e.jsxs(d,{children:[e.jsx(t,{xs:12,children:e.jsx(f,{margin:"1rem 0 1rem 0",children:"Tables allow arranging and organising data into rows and columns. A wrapper for Ant Design Table so check their documentation for further information."})}),e.jsx(t,{xs:12,children:e.jsx(i,{dataSource:v,columns:h,showSizeChanger:!0,prevPageAriaLabel:"Previous page",nextPageAriaLabel:"Next page",prevDotsPageAriaLabel:"Jumpt previous 5 pages",nextDotsPageAriaLabel:"Jumpt next 5 pages"})})]})}),u=()=>e.jsx(s,{fluid:!0,children:e.jsxs(d,{children:[e.jsx(t,{xs:12,children:e.jsx(f,{margin:"1rem 0 1rem 0",children:"Table loading"})}),e.jsx(t,{xs:12,children:e.jsx(i,{dataSource:v,columns:h,isLoading:!0,isPaginated:!1})})]})}),g=()=>e.jsx(s,{fluid:!0,children:e.jsxs(d,{children:[e.jsx(t,{xs:12,children:e.jsx(f,{margin:"1rem 0 1rem 0",children:"Table error"})}),e.jsx(t,{xs:12,children:e.jsx(i,{dataSource:v,columns:h,isPaginated:!1,showError:!0,errorContent:e.jsx(H,{variant:J.ERROR,title:"Error data",info:"Please check and modify the following information before resubmitting."})})})]})}),m=()=>e.jsx(s,{fluid:!0,children:e.jsx(d,{children:e.jsx(t,{xs:12,children:e.jsx(V,{})})})}),p=()=>{const r=[{title:"Component categorisation",dataIndex:"categorisation",key:"categorisation"},{title:"Devices",dataIndex:"devices",key:"devices"},{title:"Configuration",dataIndex:"configuration",key:"configuration"}],o=[{key:1,categorisation:"Electricity",description:"Electricity",children:[{key:11,categorisation:"Consumption",devices:"Device name",configuration:"Mesured",children:[{key:111,categorisation:"HVAC",configuration:"Unmesured",children:[{key:1111,categorisation:"Subtotals",devices:"device name, device name",configuration:"Partially mesured"}]},{key:112,categorisation:"Heating system",configuration:"Calculated",children:[{key:1121,categorisation:"Subtotals",devices:"device name, device name",configuration:"Mesured"}]},{key:113,categorisation:"Lighting",configuration:"Mesured",children:[{key:1131,categorisation:"Subtotals",devices:"device name, device name",configuration:"Mesured"}]},{key:114,categorisation:"Example",configuration:"Mesured",children:[{key:1141,categorisation:"Subtotals",devices:"device name, device name",configuration:"Partially mesured"}]}]}]},{key:2,categorisation:"Gas",description:"Gas",children:[{key:21,categorisation:"Consumption",devices:"device name",configuration:"Mesured"}]},{key:3,categorisation:"Water",description:"Water",children:[{key:31,categorisation:"Consumption",devices:"device name",configuration:"Mesured"}]}];return e.jsx(i,{columns:r,dataSource:o,expandable:{},isPaginated:!1})},x=()=>{const r=()=>{const n=[{title:"Project details",dataIndex:"project_details",key:"project_details",width:"25%"},{title:"Type",dataIndex:"type",key:"type",width:"20%"},{title:"Target",dataIndex:"target",key:"target",width:"11%"},{title:"Saved %",dataIndex:"saved",key:"saved",width:"14%"},{title:"Saved Total",dataIndex:"saved_total",key:"saved_total",width:"30%"}],c=[];for(let a=0;a<6;a+=1)c.push({key:a,project_details:a,type:"Standard",target:`${(a+Math.random()*100).toFixed(1)}%`,saved:`${(a*2+Math.random()*100).toFixed(2)}%`,saved_total:(a*1e3+Math.random()*1e3).toFixed(2)});return e.jsx(i,{isExpanded:!0,columns:n,dataSource:c,isPaginated:!1,bordered:!1})},o=[{title:"Group details",dataIndex:"group_details",key:"group_details"},{title:"Projects",dataIndex:"projects",key:"projects"},{title:"Target",dataIndex:"target",key:"target"},{title:"Saved %",dataIndex:"saved",key:"saved"},{title:"Saved Total",dataIndex:"saved_total",key:"saved_total"},{title:"Time Savings",dataIndex:"time_savings",key:"time_savings"}],y=[];for(let n=0;n<3;n+=1)y.push({key:n,group_details:"School",projects:n,target:"5.0%",saved:"0.41%",saved_total:"10.3.4.5654",time_savings:"asdasda",expandable:!0});return e.jsx(s,{fluid:!0,children:e.jsx(d,{children:e.jsx(t,{xs:12,children:e.jsx(i,{isExpanded:!0,columns:o,expandable:{expandedRowRender:r},dataSource:y,isPaginated:!1})})})})};var b,k,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Tables allow arranging and organising data into rows and columns. A wrapper for Ant Design Table so check their documentation for further information.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} showSizeChanger prevPageAriaLabel='Previous page' nextPageAriaLabel='Next page' prevDotsPageAriaLabel='Jumpt previous 5 pages' nextDotsPageAriaLabel='Jumpt next 5 pages' />
            </Cell>
        </Row>
    </Grid>`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var j,T,w;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Table loading</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} isLoading isPaginated={false} />
            </Cell>
        </Row>
    </Grid>`,...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var C,P,_;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Table error</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} isPaginated={false} showError errorContent={<Result variant={ResultVariants.ERROR} title='Error data' info='Please check and modify the following information before resubmitting.' />} />
            </Cell>
        </Row>
    </Grid>`,...(_=(P=g.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var R,I,E;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Selection />
            </Cell>
        </Row>
    </Grid>`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var M,G,A;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(A=(G=p.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var L,D,F;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(F=(D=x.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const Q=["Basic","Loading","Error","TableSelection","ExpandableTable","NestedTable"];export{l as Basic,g as Error,p as ExpandableTable,u as Loading,x as NestedTable,m as TableSelection,Q as __namedExportsOrder,q as default};
