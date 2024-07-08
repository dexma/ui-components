import{j as e}from"./polished.esm-BTw9q-eL.js";import{b as i,G as h,R as p,C as b,P as o}from"./DatePicker-DtFoBb26.js";import"./index-uubelm5h.js";import"./global-DpqdS--E.js";import"./get-B2oUPAyW.js";import"./_commonjs-dynamic-modules-S1e38TyK.js";import"./_baseIteratee-JV0s3RFV.js";import"./index-DfsGIHLO.js";import"./debounce-BJI3GnSe.js";import"./index-Bd6JW1JU.js";const B={title:"Cascader",component:i,tags:["autodocs"],argTypes:{options:{description:"Options for cascader",control:{type:"object"}},multiple:{description:"Whether support multiple or not.",control:{type:"boolean"}},maxTagCount:{description:"Max tag count",control:{type:"number"}},open:{description:"Starts the cascader with the dropdown opened.",control:{type:"boolean"}},onChange:{description:"Change event",action:"changed"}}},r=()=>e.jsx(h,{fluid:!0,children:e.jsx(p,{children:e.jsxs(b,{xs:12,children:[e.jsx(o,{margin:"1rem 0 1rem 0",children:"When you need to select from a set of associated data set. Such as province/city/district, company level, things classification."}),e.jsx(o,{margin:"1rem 0 1rem 0",children:"When selecting from a large data set, with multi-stage classification separated for easy selection."}),e.jsx(o,{margin:"1rem 0 1rem 0",children:"Chooses cascade items in one float layer for better user experience."}),e.jsx(i,{multiple:!0,options:[{label:"Light",value:"light",children:new Array(20).fill(null).map((a,l)=>({label:`Number ${l}`,value:l}))},{label:"Bamboo",value:"bamboo",children:[{label:"Little",value:"little",children:[{label:"Toy Fish",value:"fish",disabled:!0,disableCheckbox:!0},{label:"Toy Cards",value:"cards"},{label:"Toy Bird",value:"bird"}]}]}],onChange:a=>{console.log(a)}})]})})}),n=()=>e.jsx(h,{fluid:!0,children:e.jsx(p,{children:e.jsxs(b,{xs:12,children:[e.jsx(o,{margin:"1rem 0 1rem 0",children:"The cascader allows to make a single or multiple selection from a set of associated data set."}),e.jsx(i,{style:{width:"100%"},multiple:!0,maxTagCount:"responsive",options:[{label:"Light",value:"light",children:new Array(20).fill(null).map((a,l)=>({label:`Number ${l}`,value:l}))},{label:"Bamboo",value:"bamboo",children:[{label:"Little",value:"little",children:[{label:"Toy Fish",value:"fish",disabled:!0,disableCheckbox:!0},{label:"Toy Cards",value:"cards"},{label:"Toy Bird",value:"bird"}]}]}],onChange:a=>{console.log(a)}})]})})});var t,s,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
                </Paragraph>
                <Paragraph margin='1rem 0 1rem 0'>When selecting from a large data set, with multi-stage classification separated for easy selection.</Paragraph>
                <Paragraph margin='1rem 0 1rem 0'>Chooses cascade items in one float layer for better user experience.</Paragraph>
                <Cascader multiple options={[{
        label: 'Light',
        value: 'light',
        children: new Array(20).fill(null).map((_, index) => ({
          label: \`Number \${index}\`,
          value: index
        }))
      }, {
        label: 'Bamboo',
        value: 'bamboo',
        children: [{
          label: 'Little',
          value: 'little',
          children: [{
            label: 'Toy Fish',
            value: 'fish',
            disabled: true,
            disableCheckbox: true
          }, {
            label: 'Toy Cards',
            value: 'cards'
          }, {
            label: 'Toy Bird',
            value: 'bird'
          }]
        }]
      }]} onChange={value => {
        console.log(value);
      }} />
            </Cell>
        </Row>
    </Grid>`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,m,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>The cascader allows to make a single or multiple selection from a set of associated data set.</Paragraph>
                <Cascader style={{
        width: '100%'
      }} multiple maxTagCount='responsive' options={[{
        label: 'Light',
        value: 'light',
        children: new Array(20).fill(null).map((_, index) => ({
          label: \`Number \${index}\`,
          value: index
        }))
      }, {
        label: 'Bamboo',
        value: 'bamboo',
        children: [{
          label: 'Little',
          value: 'little',
          children: [{
            label: 'Toy Fish',
            value: 'fish',
            disabled: true,
            disableCheckbox: true
          }, {
            label: 'Toy Cards',
            value: 'cards'
          }, {
            label: 'Toy Bird',
            value: 'bird'
          }]
        }]
      }]} onChange={value => {
        console.log(value);
      }} />
            </Cell>
        </Row>
    </Grid>`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const L=["Single","Multiple"];export{n as Multiple,r as Single,L as __namedExportsOrder,B as default};
