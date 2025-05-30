import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as W}from"./index-DRjF_FHU.js";import{T as i,G as s,R as d,C as t,P as f,o as H,p as V,t as $}from"./TreeSelect-LI7qyCKz.js";import{d as h,c as v}from"./Table-CeU1Pbmn.js";import"./global-BZ1uRXIW.js";import"./index-DqsfaJzi.js";const J={title:"Table",component:i,tags:["autodocs"]},B=()=>{const[r,o]=W.useState([]),n={selectedRowKeys:r,onChange:a=>{o(a)}},c=$();return e.jsx("div",{children:e.jsx(c,{rowSelection:n,columns:v,dataSource:h,rowsCanBeSelectAriaLabel:"Check to select row",selectAllRowsAriaLabel:"Select all"})})},l=()=>e.jsx(s,{fluid:!0,children:e.jsxs(d,{children:[e.jsx(t,{xs:12,children:e.jsx(f,{margin:"1rem 0 1rem 0",children:"Tables allow arranging and organising data into rows and columns. A wrapper for Ant Design Table so check their documentation for further information."})}),e.jsx(t,{xs:12,children:e.jsx(i,{dataSource:h,columns:v,showSizeChanger:!0})})]})}),u=()=>e.jsx(s,{fluid:!0,children:e.jsxs(d,{children:[e.jsx(t,{xs:12,children:e.jsx(f,{margin:"1rem 0 1rem 0",children:"Table loading"})}),e.jsx(t,{xs:12,children:e.jsx(i,{dataSource:h,columns:v,isLoading:!0})})]})}),g=()=>e.jsx(s,{fluid:!0,children:e.jsxs(d,{children:[e.jsx(t,{xs:12,children:e.jsx(f,{margin:"1rem 0 1rem 0",children:"Table error"})}),e.jsx(t,{xs:12,children:e.jsx(i,{dataSource:h,columns:v,showError:!0,errorContent:e.jsx(H,{variant:V.ERROR,title:"Error data",info:"Please check and modify the following information before resubmitting."})})})]})}),m=()=>e.jsx(s,{fluid:!0,children:e.jsx(d,{children:e.jsx(t,{xs:12,children:e.jsx(B,{})})})}),p=()=>{const r=[{title:"Component categorisation",dataIndex:"categorisation",key:"categorisation"},{title:"Devices",dataIndex:"devices",key:"devices"},{title:"Configuration",dataIndex:"configuration",key:"configuration"}],o=[{key:1,categorisation:"Electricity",description:"Electricity",children:[{key:11,categorisation:"Consumption",devices:"Device name",configuration:"Mesured",children:[{key:111,categorisation:"HVAC",configuration:"Unmesured",children:[{key:1111,categorisation:"Subtotals",devices:"device name, device name",configuration:"Partially mesured"}]},{key:112,categorisation:"Heating system",configuration:"Calculated",children:[{key:1121,categorisation:"Subtotals",devices:"device name, device name",configuration:"Mesured"}]},{key:113,categorisation:"Lighting",configuration:"Mesured",children:[{key:1131,categorisation:"Subtotals",devices:"device name, device name",configuration:"Mesured"}]},{key:114,categorisation:"Example",configuration:"Mesured",children:[{key:1141,categorisation:"Subtotals",devices:"device name, device name",configuration:"Partially mesured"}]}]}]},{key:2,categorisation:"Gas",description:"Gas",children:[{key:21,categorisation:"Consumption",devices:"device name",configuration:"Mesured"}]},{key:3,categorisation:"Water",description:"Water",children:[{key:31,categorisation:"Consumption",devices:"device name",configuration:"Mesured"}]}];return e.jsx(i,{columns:r,dataSource:o,expandable:{}})},x=()=>{const r=()=>{const n=[{title:"Project details",dataIndex:"project_details",key:"project_details",width:"25%"},{title:"Type",dataIndex:"type",key:"type",width:"20%"},{title:"Target",dataIndex:"target",key:"target",width:"11%"},{title:"Saved %",dataIndex:"saved",key:"saved",width:"14%"},{title:"Saved Total",dataIndex:"saved_total",key:"saved_total",width:"30%"}],c=[];for(let a=0;a<6;a+=1)c.push({key:a,project_details:a,type:"Standard",target:`${(a+Math.random()*100).toFixed(1)}%`,saved:`${(a*2+Math.random()*100).toFixed(2)}%`,saved_total:(a*1e3+Math.random()*1e3).toFixed(2)});return e.jsx(i,{isExpanded:!0,columns:n,dataSource:c,pagination:!1,bordered:!1})},o=[{title:"Group details",dataIndex:"group_details",key:"group_details"},{title:"Projects",dataIndex:"projects",key:"projects"},{title:"Target",dataIndex:"target",key:"target"},{title:"Saved %",dataIndex:"saved",key:"saved"},{title:"Saved Total",dataIndex:"saved_total",key:"saved_total"},{title:"Time Savings",dataIndex:"time_savings",key:"time_savings"}],y=[];for(let n=0;n<3;n+=1)y.push({key:n,group_details:"School",projects:n,target:"5.0%",saved:"0.41%",saved_total:"10.3.4.5654",time_savings:"asdasda",expandable:!0});return e.jsx(s,{fluid:!0,children:e.jsx(d,{children:e.jsx(t,{xs:12,children:e.jsx(i,{isExpanded:!0,columns:o,expandable:{expandedRowRender:r},dataSource:y,pagination:!1})})})})};var k,b,S;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Tables allow arranging and organising data into rows and columns. A wrapper for Ant Design Table so check their documentation for further information.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} showSizeChanger />
            </Cell>
        </Row>
    </Grid>`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var j,T,w;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Table loading</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} isLoading />
            </Cell>
        </Row>
    </Grid>`,...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var C,_,R;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Table error</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} showError errorContent={<Result variant={ResultVariants.ERROR} title='Error data' info='Please check and modify the following information before resubmitting.' />} />
            </Cell>
        </Row>
    </Grid>`,...(R=(_=g.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var I,E,M;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Selection />
            </Cell>
        </Row>
    </Grid>`,...(M=(E=m.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var G,P,A;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
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
  return <Table columns={columns} dataSource={dataSources} expandable={{}} />;
}`,...(A=(P=p.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var D,L,F;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
    return <Table isExpanded columns={columns} dataSource={data} pagination={false} bordered={false} />;
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
        }} dataSource={data} pagination={false} />
                </Cell>
            </Row>
        </Grid>;
}`,...(F=(L=x.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};const Q=["Basic","Loading","Error","TableSelection","ExpandableTable","NestedTable"];export{l as Basic,g as Error,p as ExpandableTable,u as Loading,x as NestedTable,m as TableSelection,Q as __namedExportsOrder,J as default};
