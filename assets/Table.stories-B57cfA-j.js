import{j as e}from"./polished.esm-BTw9q-eL.js";import{r as D}from"./index-uubelm5h.js";import{T as n,G as o,R as d,C as t,P as g,o as L,p as N,t as O}from"./DatePicker-DtFoBb26.js";import{d as p,c as x}from"./Table-CeU1Pbmn.js";import"./global-DpqdS--E.js";import"./get-B2oUPAyW.js";import"./_commonjs-dynamic-modules-S1e38TyK.js";import"./_baseIteratee-JV0s3RFV.js";import"./index-DfsGIHLO.js";import"./debounce-BJI3GnSe.js";import"./index-Bd6JW1JU.js";const Y={title:"Table",component:n,tags:["autodocs"]},B=()=>{const[s,r]=D.useState([]),G={selectedRowKeys:s,onChange:A=>{r(A)}},P=O();return e.jsx("div",{children:e.jsx(P,{rowSelection:G,columns:x,dataSource:p})})},l=()=>e.jsx(o,{fluid:!0,children:e.jsxs(d,{children:[e.jsx(t,{xs:12,children:e.jsx(g,{margin:"1rem 0 1rem 0",children:"Tables allow arranging and organising data into rows and columns. A wrapper for Ant Design Table so check their documentation for further information."})}),e.jsx(t,{xs:12,children:e.jsx(n,{dataSource:p,columns:x})})]})}),i=()=>e.jsx(o,{fluid:!0,children:e.jsxs(d,{children:[e.jsx(t,{xs:12,children:e.jsx(g,{margin:"1rem 0 1rem 0",children:"Table loading"})}),e.jsx(t,{xs:12,children:e.jsx(n,{dataSource:p,columns:x,isLoading:!0})})]})}),c=()=>e.jsx(o,{fluid:!0,children:e.jsxs(d,{children:[e.jsx(t,{xs:12,children:e.jsx(g,{margin:"1rem 0 1rem 0",children:"Table error"})}),e.jsx(t,{xs:12,children:e.jsx(n,{dataSource:p,columns:x,showError:!0,errorContent:e.jsx(L,{variant:N.ERROR,title:"Error data",info:"Please check and modify the following information before resubmitting."})})})]})}),m=()=>e.jsx(o,{fluid:!0,children:e.jsx(d,{children:e.jsx(t,{xs:12,children:e.jsx(B,{})})})}),K=()=>{const s=[{title:"Project details",dataIndex:"project_details",key:"project_details",width:"25%"},{title:"Type",dataIndex:"type",key:"type",width:"20%"},{title:"Target",dataIndex:"target",key:"target",width:"11%"},{title:"Saved %",dataIndex:"saved",key:"saved",width:"14%"},{title:"Saved Total",dataIndex:"saved_total",key:"saved_total",width:"30%"}],r=[];for(let a=0;a<6;a+=1)r.push({key:a,project_details:a,type:"Screem",target:50,saved:"iOS",saved_total:"10.3.4.5654"});return e.jsx(n,{isExpanded:!0,columns:s,dataSource:r,pagination:!1,bordered:!1})},u=()=>{const s=[{title:"Group details",dataIndex:"group_details",key:"group_details"},{title:"Projects",dataIndex:"projects",key:"projects"},{title:"Target",dataIndex:"target",key:"target"},{title:"Saved %",dataIndex:"saved",key:"saved"},{title:"Saved Total",dataIndex:"saved_total",key:"saved_total"},{title:"Time Savings",dataIndex:"time_savings",key:"time_savings"}],r=[];for(let a=0;a<3;a+=1)r.push({key:a,group_details:"School",projects:a,target:"5.0%",saved:"0.41%",saved_total:"10.3.4.5654",time_savings:"asdasda"});return e.jsx(o,{fluid:!0,children:e.jsx(d,{children:e.jsx(t,{xs:12,children:e.jsx(n,{isExpanded:!0,className:"components-table-demo-nested",columns:s,expandable:{expandedRowRender:K},dataSource:r,pagination:!1})})})})};var h,j,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Tables allow arranging and organising data into rows and columns. A wrapper for Ant Design Table so check their documentation for further information.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} />
            </Cell>
        </Row>
    </Grid>`,...(f=(j=l.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var b,T,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Table loading</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} isLoading />
            </Cell>
        </Row>
    </Grid>`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var v,w,R;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Table error</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} showError errorContent={<Result variant={ResultVariants.ERROR} title='Error data' info='Please check and modify the following information before resubmitting.' />} />
            </Cell>
        </Row>
    </Grid>`,...(R=(w=c.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var y,_,k;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Selection />
            </Cell>
        </Row>
    </Grid>`,...(k=(_=m.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var C,I,E;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
      time_savings: 'asdasda'
    });
  }
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Table isExpanded className='components-table-demo-nested' columns={columns} expandable={{
          expandedRowRender
        }} dataSource={data} pagination={false} />
                </Cell>
            </Row>
        </Grid>;
}`,...(E=(I=u.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const Z=["Basic","Loading","Error","TableSelection","NestedTable"];export{l as Basic,c as Error,i as Loading,u as NestedTable,m as TableSelection,Z as __namedExportsOrder,Y as default};
