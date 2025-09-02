import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{a0 as e,G as f,R as W,C as c,P as y}from"./Breadcrumb-CkZbs_bz.js";import"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const M=[{color:"#00CC88",from:0,to:100,tooltip:"Good"}],l=[{color:"#FD5754",from:76,to:100,tooltip:"Bad"},{color:"#00CC88",from:0,to:50,tooltip:"Good"},{color:"#FE9753",from:51,to:75,tooltip:"So-so"}],R=[{color:"#000000",tooltip:"Basic tooltip: 55kWh",value:55}],j=[{color:"#00FFFF",tooltip:"Basic tooltip: 55kWh",value:55},{color:"#000FFF",tooltip:"Basic tooltip 2: 76kWh",value:76}],_={title:"Gauge",component:e,tags:["autodocs"]},a=()=>o.jsx(f,{fluid:!0,children:o.jsxs(W,{children:[o.jsx(c,{xs:12,children:o.jsx(y,{margin:"1rem 0 1rem 0",children:"Gauge"})}),o.jsx(c,{xs:12,children:o.jsx(e,{"data-testid":"gauge-chart",type:"DIAL",title:"Contador general Industrias ACME",comparison:{enabled:!0,value:80,color:"#00CC88",period:{from:null,to:null,type:"TEXT",text:"Compared to last seven days"},showAsPercentage:!1},ranges:[{color:"#00CC88",from:0,to:50,tooltip:"Good"},{color:"#FE9753",from:50,to:75,tooltip:"So-So"},{color:"#FD5754",from:75,to:100,tooltip:"Bad"}],units:"kWh",indicator:{color:"#FB4EDA",tooltip:"Contador general Industrias ACME: 50kWh",value:50},min:0,max:100,checkpoints:[{color:"#000FFF",tooltip:"Basic tooltip: 60kWh",value:60}],options:{subtitle:{text:"last seven days"}}})})]})}),r=()=>o.jsx(e,{type:"DIAL",indicator:{color:"#00CC88",tooltip:"Contador general Industrias ACME: 50kWh",value:50},min:0,max:100}),t=()=>o.jsx(e,{type:"DIAL",indicator:{color:"#00CC88",tooltip:"Contador general Industrias ACME: 50kWh",value:50},min:0,max:100,ranges:M}),n=()=>o.jsx(e,{type:"DIAL",indicator:{color:"#FB4EDA",tooltip:"Contador general Industrias ACME: 50kWh",value:50},min:0,max:100,ranges:l}),s=()=>o.jsx(e,{type:"DIAL",indicator:{color:"#FB4EDA",tooltip:"Contador general Industrias ACME: 50kWh",value:50},min:0,max:100,ranges:l,checkpoints:R}),i=()=>o.jsx(e,{type:"DIAL",indicator:{color:"#FB4EDA",tooltip:"Contador general Industrias ACME: 50kWh",value:50},min:0,max:100,ranges:l,checkpoints:j});var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Grid fluid>
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
    </Grid>`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,g,C;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Gauge type='DIAL' indicator={{
  color: '#00CC88',
  tooltip: 'Contador general Industrias ACME: 50kWh',
  value: 50
}} min={0} max={100} />`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var h,k,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Gauge type='DIAL' indicator={{
  color: '#00CC88',
  tooltip: 'Contador general Industrias ACME: 50kWh',
  value: 50
}} min={0} max={100} ranges={mockSingleRangeSerie} />`,...(S=(k=t.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var A,x,E;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`() => <Gauge type='DIAL' indicator={{
  color: '#FB4EDA',
  tooltip: 'Contador general Industrias ACME: 50kWh',
  value: 50
}} min={0} max={100} ranges={mockRangeSeries} />`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var G,F,I;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`() => <Gauge type='DIAL' indicator={{
  color: '#FB4EDA',
  tooltip: 'Contador general Industrias ACME: 50kWh',
  value: 50
}} min={0} max={100} ranges={mockRangeSeries} checkpoints={mockSingleCheckpointSeries} />`,...(I=(F=s.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var v,D,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`() => <Gauge type='DIAL' indicator={{
  color: '#FB4EDA',
  tooltip: 'Contador general Industrias ACME: 50kWh',
  value: 50
}} min={0} max={100} ranges={mockRangeSeries} checkpoints={mockCheckpointSeries} />`,...(B=(D=i.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const X=["Basic","BasicGauge","SingleRangeSerieGauge","MultipleRangeSerieGauge","SingleCheckpointSerieGauge","MultipleCheckpointSerieGauge"];export{a as Basic,r as BasicGauge,i as MultipleCheckpointSerieGauge,n as MultipleRangeSerieGauge,s as SingleCheckpointSerieGauge,t as SingleRangeSerieGauge,X as __namedExportsOrder,_ as default};
