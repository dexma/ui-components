import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{b as i,G as l,R as c,C as d,P as a}from"./Breadcrumb-CkZbs_bz.js";import"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const T={title:"Cascader",component:i,tags:["autodocs"],argTypes:{options:{description:"Options for cascader",control:{type:"object"}},multiple:{description:"Whether support multiple or not.",control:{type:"boolean"}},maxTagCount:{description:"Max tag count",control:{type:"number"}},open:{description:"Starts the cascader with the dropdown opened.",control:{type:"boolean"}},onChange:{description:"Change event",action:"changed"}}},m=[{label:"Light",value:"light",selectedItemAriaLabel:"Ligth item selected",children:new Array(20).fill(null).map((r,n)=>({label:`Number ${n}`,value:n,selectedItemAriaLabel:`Number ${n} item selected`}))},{label:"Bamboo",value:"bamboo",selectedItemAriaLabel:"Bamboo item selected",children:[{label:"Little",value:"little",selectedItemAriaLabel:"Little item selected",children:[{label:"Toy Fish",value:"fish",disabled:!0,disableCheckbox:!0,selectedItemAriaLabel:"Toy Fish item selected"},{label:"Toy Cards",value:"cards",selectedItemAriaLabel:"Toy Cards item selected"},{label:"Toy Bird",value:"bird",selectedItemAriaLabel:"Toy Bird item selected"}]}]}],s=()=>e.jsx(l,{fluid:!0,children:e.jsx(c,{children:e.jsxs(d,{xs:12,children:[e.jsx(a,{margin:"1rem 0 1rem 0",children:"When you need to select from a set of associated data set. Such as province/city/district, company level, things classification."}),e.jsx(a,{margin:"1rem 0 1rem 0",children:"When selecting from a large data set, with multi-stage classification separated for easy selection."}),e.jsx(a,{margin:"1rem 0 1rem 0",children:"Chooses cascade items in one float layer for better user experience."}),e.jsx(i,{options:m,onChange:r=>{console.log(r)}})]})})}),t=()=>e.jsx(l,{fluid:!0,children:e.jsx(c,{children:e.jsxs(d,{xs:12,children:[e.jsx(a,{margin:"1rem 0 1rem 0",children:"When you need to select from a set of associated data set. Such as province/city/district, company level, things classification."}),e.jsx(a,{margin:"1rem 0 1rem 0",children:"When selecting from a large data set, with multi-stage classification separated for easy selection."}),e.jsx(a,{margin:"1rem 0 1rem 0",children:"Chooses cascade items in one float layer for better user experience."}),e.jsx(i,{options:m,onChange:r=>{console.log(r)},changeOnSelect:!0})]})})}),o=()=>e.jsx(l,{fluid:!0,children:e.jsx(c,{children:e.jsxs(d,{xs:12,children:[e.jsx(a,{margin:"1rem 0 1rem 0",children:"The cascader allows to make a single or multiple selection from a set of associated data set."}),e.jsx(i,{style:{width:"100%"},multiple:!0,maxTagCount:"responsive",options:m,onChange:r=>{console.log(r)}})]})})});var p,h,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
                </Paragraph>
                <Paragraph margin='1rem 0 1rem 0'>When selecting from a large data set, with multi-stage classification separated for easy selection.</Paragraph>
                <Paragraph margin='1rem 0 1rem 0'>Chooses cascade items in one float layer for better user experience.</Paragraph>
                <Cascader options={options} onChange={value => {
        console.log(value);
      }} />
            </Cell>
        </Row>
    </Grid>`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,f,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
                </Paragraph>
                <Paragraph margin='1rem 0 1rem 0'>When selecting from a large data set, with multi-stage classification separated for easy selection.</Paragraph>
                <Paragraph margin='1rem 0 1rem 0'>Chooses cascade items in one float layer for better user experience.</Paragraph>
                <Cascader options={options} onChange={value => {
        console.log(value);
      }} changeOnSelect />
            </Cell>
        </Row>
    </Grid>`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,b,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>The cascader allows to make a single or multiple selection from a set of associated data set.</Paragraph>
                <Cascader style={{
        width: '100%'
      }} multiple maxTagCount='responsive' options={options} onChange={value => {
        console.log(value);
      }} />
            </Cell>
        </Row>
    </Grid>`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const L=["Single","SingleParent","Multiple"];export{o as Multiple,s as Single,t as SingleParent,L as __namedExportsOrder,T as default};
