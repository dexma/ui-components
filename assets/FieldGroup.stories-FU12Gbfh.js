import{j as e}from"./polished.esm-BTw9q-eL.js";import{r as p}from"./index-uubelm5h.js";import{O as m,G as x,R as h,C as r,P as g,Q as E,U as B,V as z}from"./DatePicker-DtFoBb26.js";import"./global-DpqdS--E.js";import"./get-B2oUPAyW.js";import"./_commonjs-dynamic-modules-S1e38TyK.js";import"./_baseIteratee-JV0s3RFV.js";import"./index-DfsGIHLO.js";import"./debounce-BJI3GnSe.js";import"./index-Bd6JW1JU.js";const D=[{value:"15min",label:"15min",id:"15min",name:"parameters",isDisabled:!0},{value:"30min",label:"30min",id:"30min",name:"parameters"},{value:"horas",label:"h",id:"horas",name:"parameters"},{value:"dias",label:"d",id:"dias",name:"parameters"},{value:"semanas",label:"s",id:"semanas",name:"parameters"},{value:"meses",label:"m",id:"meses",name:"parameters"}],J=[{value:"15min",id:"15min",icon:"widget_single_kpi",name:"parameters",tooltip:"parameters",isDisabled:!0},{value:"gauge",id:"gauge",icon:"widget_gauge",name:"gauge",tooltip:"gauge"},{value:"percentage",id:"percentage",icon:"widget_percentage",name:"percentage",tooltip:"percentage"}],C="horas",O=[{value:"hdd",label:"hdd",id:"hdd",name:"hdd",tooltip:"HDD",icon:"ratios_hdd",isDisabled:!0},{value:"production",label:"production",id:"production",name:"production",tooltip:"Production",icon:"ratios_production"},{value:"cdd",label:"cdd",id:"cdd",name:"cdd",tooltip:"CDD",icon:"ratios_cdd"},{value:"surface",label:"surface",id:"surface",name:"surface",tooltip:"Surface",icon:"ratios_surface"}],T=["production","cdd"],Z={title:"FieldGroup",component:m,tags:["autodocs"]},I=()=>{const[o,a]=p.useState(C),s=({value:t})=>{a(t)};return e.jsx(m,{values:D,selectedValues:o,onChange:s})},L=o=>{const[a,s]=p.useState(C),t=({value:i})=>{s(i)};return e.jsx(m,{variant:B.CUSTOM,values:J,selectedValues:a,onChange:t,...o})},A=o=>{const[a,s]=p.useState(C),t=({value:i})=>{s(i)};return e.jsx(m,{variant:B.SPLIT,...o,values:D,selectedValues:a,onChange:t})},j=o=>{const[a,s]=p.useState(T),t=({value:i})=>{const n=a,G=n.indexOf(i);G>=0?delete n[G]:n.push(i),s([...n])};return e.jsx(z,{values:O,selectedValues:a,onChange:t,...o})},l=()=>e.jsx(x,{fluid:!0,children:e.jsxs(h,{children:[e.jsx(r,{xs:12,children:e.jsx(g,{margin:"1rem 0 1rem 0",children:"Joined variant field group:"})}),e.jsx(r,{xs:12,children:e.jsx(I,{})})]})}),d=()=>e.jsx(x,{fluid:!0,children:e.jsx(h,{children:e.jsx(r,{xs:12,children:e.jsx(L,{size:E.LARGE})})})}),c=()=>e.jsx(x,{fluid:!0,children:e.jsxs(h,{children:[e.jsx(r,{xs:12,style:{marginBottom:"10px"},children:e.jsx(g,{margin:"1rem 0 1rem 0",children:"Custom variant field group:"})}),e.jsx(r,{xs:12,style:{marginBottom:"10px"},children:e.jsx(A,{})})]})}),u=()=>e.jsx(x,{fluid:!0,children:e.jsxs(h,{children:[e.jsx(r,{xs:12,children:e.jsx(g,{margin:"1rem 0 1rem 0",children:"Create group of input with type checkbox and vertically"})}),e.jsx(r,{xs:12,style:{marginBottom:"10px"},children:e.jsx(j,{})}),e.jsx(r,{xs:12,children:e.jsx(j,{vertical:!0})})]})});var R,f,v;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Joined variant field group:</Paragraph>
            </Cell>
            <Cell xs={12}>
                <RadioGroup />
            </Cell>
        </Row>
    </Grid>`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,S,V;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <RadioCustomGroup size={ButtonSize.LARGE} />
            </Cell>
        </Row>
    </Grid>`,...(V=(S=d.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var k,w,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12} style={{
      marginBottom: '10px'
    }}>
                <Paragraph margin='1rem 0 1rem 0'>Custom variant field group:</Paragraph>
            </Cell>
            <Cell xs={12} style={{
      marginBottom: '10px'
    }}>
                <RadioSplitGroup />
            </Cell>
        </Row>
    </Grid>`,...(F=(w=c.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var _,y,P;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Create group of input with type checkbox and vertically</Paragraph>
            </Cell>
            <Cell xs={12} style={{
      marginBottom: '10px'
    }}>
                <CheckboxGroup />
            </Cell>
            <Cell xs={12}>
                <CheckboxGroup vertical />
            </Cell>
        </Row>
    </Grid>`,...(P=(y=u.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const $=["FieldJoinedVariantGroupRadio","FieldCustomVariantGroupRadio","FieldSplitVariantGroupRadio","FieldGroupCheckboxTooltips"];export{d as FieldCustomVariantGroupRadio,u as FieldGroupCheckboxTooltips,l as FieldJoinedVariantGroupRadio,c as FieldSplitVariantGroupRadio,$ as __namedExportsOrder,Z as default};
