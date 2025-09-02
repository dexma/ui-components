import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as P}from"./index-DRjF_FHU.js";import{a1 as d,a2 as h,G as S,R as w,C as r,P as y}from"./Breadcrumb-CkZbs_bz.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const T="2019-05-31T00:00:00+02:00",D="2019-06-06T23:59:59+02:00",v="Previous period",C="Same period last year",O={title:"SwitchPeriodComparative",component:d,tags:["autodocs"]},t=()=>{const[a,n]=P.useState({period:h.PREVIOUS_PERIOD,date:null});return e.jsx(S,{fluid:!0,children:e.jsxs(w,{children:[e.jsx(r,{xs:12,children:e.jsx(y,{margin:"1rem 0 1rem 0",children:'A switch period comparative between two dates start and end, the text its optional so if you dont put nothing its ok. If you choose a period with Keyboard, you need move to period with "Tab" key and select it with "Enter" key'})}),e.jsx(r,{xs:12,children:e.jsx(d,{selectedPeriod:a.period,startDate:T,endDate:D,onPeriodSelect:({period:i,date:s})=>{n({period:i,date:s})}})})]})})},o=()=>{const[a,n]=P.useState({period:h.PREVIOUS_PERIOD,date:null}),{period:i}=a;return e.jsx(S,{fluid:!0,children:e.jsxs(w,{children:[e.jsx(r,{xs:12,children:e.jsx(y,{margin:"1rem 0 1rem 0",children:"A switch period comparative between two dates start and end, the text its optional so if you dont put nothing its ok"})}),e.jsx(r,{xs:12,children:e.jsx(d,{selectedPeriod:i,startDate:T,endDate:D,previousPeriodText:v,samePeriodLastYearText:C,onPeriodSelect:({period:s,date:j})=>{n({period:s,date:j})}})})]})})};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [stateNoText, setStateNoText] = useState<{
    period: SelectedPeriodType;
    date: {
      startDate: Dayjs;
      endDate: Dayjs;
    } | null;
  }>({
    period: SelectedPeriodType.PREVIOUS_PERIOD,
    date: null
  });
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>
                        A switch period comparative between two dates start and end, the text its optional so if you dont put nothing its ok. If you choose a period with Keyboard,
                        you need move to period with &quot;Tab&quot; key and select it with &quot;Enter&quot; key
                    </Paragraph>
                </Cell>
                <Cell xs={12}>
                    <SwitchPeriodComparative selectedPeriod={stateNoText.period} startDate={startDate} endDate={endDate} onPeriodSelect={({
          period,
          date
        }) => {
          setStateNoText({
            period: period as SelectedPeriodType,
            date
          });
        }} />
                </Cell>
            </Row>
        </Grid>;
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,m,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [state, setState] = useState<{
    period: SelectedPeriodType;
    date: {
      startDate: Dayjs;
      endDate: Dayjs;
    } | null;
  }>({
    period: SelectedPeriodType.PREVIOUS_PERIOD,
    date: null
  });
  const {
    period
  } = state;
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>
                        A switch period comparative between two dates start and end, the text its optional so if you dont put nothing its ok
                    </Paragraph>
                </Cell>
                <Cell xs={12}>
                    <SwitchPeriodComparative selectedPeriod={period} startDate={startDate} endDate={endDate} previousPeriodText={previousPeriodText} samePeriodLastYearText={samePeriodLastYearText} onPeriodSelect={({
          period: _period,
          date
        }) => {
          setState({
            period: _period as SelectedPeriodType,
            date
          });
        }} />
                </Cell>
            </Row>
        </Grid>;
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const _=["Basic","SwitchPeriodComparativeWitText"];export{t as Basic,o as SwitchPeriodComparativeWitText,_ as __namedExportsOrder,O as default};
