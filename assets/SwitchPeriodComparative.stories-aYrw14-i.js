import{j as e}from"./polished.esm-BTw9q-eL.js";import{r as u}from"./index-uubelm5h.js";import{X as d,Y as S,G as h,R as w,C as o,P as T}from"./DatePicker-DtFoBb26.js";import"./global-DpqdS--E.js";import"./get-B2oUPAyW.js";import"./_commonjs-dynamic-modules-S1e38TyK.js";import"./_baseIteratee-JV0s3RFV.js";import"./index-DfsGIHLO.js";import"./debounce-BJI3GnSe.js";import"./index-Bd6JW1JU.js";const D="2019-05-31T00:00:00+02:00",j="2019-06-06T23:59:59+02:00",g="Previous period",y="Same period last year",k={title:"SwitchPeriodComparative",component:d,tags:["autodocs"]},t=()=>{const[a,n]=u.useState({period:S.PREVIOUS_PERIOD,date:null});return e.jsx(h,{fluid:!0,children:e.jsxs(w,{children:[e.jsx(o,{xs:12,children:e.jsx(T,{margin:"1rem 0 1rem 0",children:"A switch period comparative between two dates start and end, the text its optional so if you dont put nothing its ok"})}),e.jsx(o,{xs:12,children:e.jsx(d,{selectedPeriod:a.period,startDate:D,endDate:j,onPeriodSelect:({period:i,date:s})=>{n({period:i,date:s})}})})]})})},r=()=>{const[a,n]=u.useState({period:S.PREVIOUS_PERIOD,date:null}),{period:i}=a;return e.jsx(h,{fluid:!0,children:e.jsxs(w,{children:[e.jsx(o,{xs:12,children:e.jsx(T,{margin:"1rem 0 1rem 0",children:"A switch period comparative between two dates start and end, the text its optional so if you dont put nothing its ok"})}),e.jsx(o,{xs:12,children:e.jsx(d,{selectedPeriod:i,startDate:D,endDate:j,previousPeriodText:g,samePeriodLastYearText:y,onPeriodSelect:({period:s,date:C})=>{n({period:s,date:C})}})})]})})};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
                        A switch period comparative between two dates start and end, the text its optional so if you dont put nothing its ok
                    </Paragraph>
                </Cell>
                <Cell xs={12}>
                    <SwitchPeriodComparative selectedPeriod={stateNoText.period} startDate={startDate} endDate={endDate} onPeriodSelect={({
          period,
          date
        }) => {
          setStateNoText({
            period: (period as SelectedPeriodType),
            date
          });
        }} />
                </Cell>
            </Row>
        </Grid>;
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,x,P;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
            period: (_period as SelectedPeriodType),
            date
          });
        }} />
                </Cell>
            </Row>
        </Grid>;
}`,...(P=(x=r.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const A=["Basic","SwitchPeriodComparativeWitText"];export{t as Basic,r as SwitchPeriodComparativeWitText,A as __namedExportsOrder,k as default};
