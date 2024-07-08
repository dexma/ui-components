import{j as o}from"./polished.esm-BTw9q-eL.js";import{W as e,G as W,R as f,C as c,P as y}from"./DatePicker-DtFoBb26.js";import"./index-uubelm5h.js";import"./global-DpqdS--E.js";import"./get-B2oUPAyW.js";import"./_commonjs-dynamic-modules-S1e38TyK.js";import"./_baseIteratee-JV0s3RFV.js";import"./index-DfsGIHLO.js";import"./debounce-BJI3GnSe.js";import"./index-Bd6JW1JU.js";const M=[{color:"#00CC88",from:0,to:100,tooltip:"Good"}],l=[{color:"#FD5754",from:76,to:100,tooltip:"Bad"},{color:"#00CC88",from:0,to:50,tooltip:"Good"},{color:"#FE9753",from:51,to:75,tooltip:"So-so"}],R=[{color:"#000000",tooltip:"Basic tooltip: 55kWh",value:55}],j=[{color:"#00FFFF",tooltip:"Basic tooltip: 55kWh",value:55},{color:"#000FFF",tooltip:"Basic tooltip 2: 76kWh",value:76}],H={title:"Gauge",component:e,tags:["autodocs"]},r=()=>o.jsx(W,{fluid:!0,children:o.jsxs(f,{children:[o.jsx(c,{xs:12,children:o.jsx(y,{margin:"1rem 0 1rem 0",children:"Gauge"})}),o.jsx(c,{xs:12,children:o.jsx(e,{"data-testid":"gauge-chart",type:"DIAL",title:"Contador general Industrias ACME",comparison:{enabled:!0,value:80,color:"#00CC88",period:{from:null,to:null,type:"TEXT",text:"Compared to last seven days"},showAsPercentage:!1},ranges:[{color:"#00CC88",from:0,to:50,tooltip:"Good"},{color:"#FE9753",from:50,to:75,tooltip:"So-So"},{color:"#FD5754",from:75,to:100,tooltip:"Bad"}],units:"kWh",indicator:{color:"#FB4EDA",tooltip:"Contador general Industrias ACME: 50kWh",value:50},min:0,max:100,checkpoints:[{color:"#000FFF",tooltip:"Basic tooltip: 60kWh",value:60}],options:{subtitle:{text:"last seven days"}}})})]})}),t=()=>o.jsx(e,{type:"DIAL",indicator:{color:"#00CC88",tooltip:"Contador general Industrias ACME: 50kWh",value:50},min:0,max:100}),a=()=>o.jsx(e,{type:"DIAL",indicator:{color:"#00CC88",tooltip:"Contador general Industrias ACME: 50kWh",value:50},min:0,max:100,ranges:M}),n=()=>o.jsx(e,{type:"DIAL",indicator:{color:"#FB4EDA",tooltip:"Contador general Industrias ACME: 50kWh",value:50},min:0,max:100,ranges:l}),i=()=>o.jsx(e,{type:"DIAL",indicator:{color:"#FB4EDA",tooltip:"Contador general Industrias ACME: 50kWh",value:50},min:0,max:100,ranges:l,checkpoints:R}),s=()=>o.jsx(e,{type:"DIAL",indicator:{color:"#FB4EDA",tooltip:"Contador general Industrias ACME: 50kWh",value:50},min:0,max:100,ranges:l,checkpoints:j});var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Gauge</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Gauge data-testid='gauge-chart' type='DIAL' title='Contador general Industrias ACME' comparison={{
        enabled: true,
        value: 80,
        color: '#00CC88',
        period: {
          from: null,
          to: null,
          type: 'TEXT',
          text: 'Compared to last seven days'
        },
        showAsPercentage: false
      }} ranges={[{
        color: '#00CC88',
        from: 0,
        to: 50,
        tooltip: 'Good'
      }, {
        color: '#FE9753',
        from: 50,
        to: 75,
        tooltip: 'So-So'
      }, {
        color: '#FD5754',
        from: 75,
        to: 100,
        tooltip: 'Bad'
      }]} units='kWh' indicator={{
        color: '#FB4EDA',
        tooltip: 'Contador general Industrias ACME: 50kWh',
        value: 50
      }} min={0} max={100} checkpoints={[{
        color: '#000FFF',
        tooltip: 'Basic tooltip: 60kWh',
        value: 60
      }]} options={{
        subtitle: {
          text: 'last seven days'
        }
      }} />
            </Cell>
        </Row>
    </Grid>`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,g,C;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Gauge type='DIAL' indicator={{
  color: '#00CC88',
  tooltip: 'Contador general Industrias ACME: 50kWh',
  value: 50
}} min={0} max={100} />`,...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var h,k,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Gauge type='DIAL' indicator={{
  color: '#00CC88',
  tooltip: 'Contador general Industrias ACME: 50kWh',
  value: 50
}} min={0} max={100} ranges={mockSingleRangeSerie} />`,...(S=(k=a.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var A,x,E;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`() => <Gauge type='DIAL' indicator={{
  color: '#FB4EDA',
  tooltip: 'Contador general Industrias ACME: 50kWh',
  value: 50
}} min={0} max={100} ranges={mockRangeSeries} />`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var G,F,I;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`() => <Gauge type='DIAL' indicator={{
  color: '#FB4EDA',
  tooltip: 'Contador general Industrias ACME: 50kWh',
  value: 50
}} min={0} max={100} ranges={mockRangeSeries} checkpoints={mockSingleCheckpointSeries} />`,...(I=(F=i.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var v,D,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => <Gauge type='DIAL' indicator={{
  color: '#FB4EDA',
  tooltip: 'Contador general Industrias ACME: 50kWh',
  value: 50
}} min={0} max={100} ranges={mockRangeSeries} checkpoints={mockCheckpointSeries} />`,...(B=(D=s.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const J=["Basic","BasicGauge","SingleRangeSerieGauge","MultipleRangeSerieGauge","SingleCheckpointSerieGauge","MultipleCheckpointSerieGauge"];export{r as Basic,t as BasicGauge,s as MultipleCheckpointSerieGauge,n as MultipleRangeSerieGauge,i as SingleCheckpointSerieGauge,a as SingleRangeSerieGauge,J as __namedExportsOrder,H as default};
