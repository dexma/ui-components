import{j as l}from"./jsx-runtime-DR9Q75dM.js";import{u as t,G as u,R as s,C as e,P as d}from"./Breadcrumb-CkZbs_bz.js";import{r as w}from"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const M={title:"Select",component:t,tags:["autodocs"]},j=[{value:"1",label:"1st Floor"},{value:"2",label:"1st Floor [02. Luxemburg Building]"},{value:"3",label:"3rd Floor"},{value:"4",label:"45th Floor [04. Luxemburg Building]"},{value:"5",label:"1st Floor [05. Luxemburg Building]"},{value:"6",label:"1st Floor [06. Luxemburg Building]"},{value:"7",label:"2nd Floor"},{value:"8",label:"2nd Floor [03. Malaga Building]"},{value:"9",label:"2nd Floor [04. New York Building]"},{value:"10",label:"1st Floor [12. Hong Kong Building]"},{value:"11",label:"3rd Floor [02. Singapur Building]",disabled:!0},{value:"12",label:"2nd Floor [16.  Building]"}],n=()=>l.jsx(u,{fluid:!0,children:l.jsxs(s,{children:[l.jsx(e,{xs:12,children:l.jsx(d,{margin:"1rem 0 1rem 0",children:"Select is a form control for selecting a value from a set of options."})}),l.jsx(e,{xs:12,children:l.jsx(t,{allowClear:!0,mode:"multiple",style:{width:"100%"},pageSize:2,defaultValues:["3"],maxTagLength:20,options:[{value:"1",label:"1st Floor"},{value:"2",label:"1st Floor [02. Luxemburg Building]",color:"green"},{value:"3",label:"3rd Floor",color:"orange"},{value:"4",label:"45th Floor [04. Luxemburg Building]",color:"green",disabled:!0},{value:"5",color:"blue",label:"1st Floor [05. Luxemburg Building]"},{value:"6",color:"green",label:"1st Floor [06. Luxemburg Building]"},{value:"7",label:"2nd Floor",color:"blue"},{value:"8",label:"2nd Floor [03. Malaga Building]",color:"red"},{value:"9",label:"2nd Floor [04. New York Building]",color:"green"},{value:"10",label:"1st Floor [12. Hong Kong Building]",color:"blue"},{value:"11",label:"3rd Floor [02. Singapur Building]",color:"orange"},{value:"12",label:"2nd Floor [16.  Building]",color:"orange"}],showOptionsAriaLabel:"Show options",hideOptionsAriaLabel:"Hide options",clearAllOptionsAriaLabel:"Clear all options",deleteOptionSelectedAriaLabel:"Delete option"})})]})}),r=()=>l.jsx(u,{fluid:!0,children:l.jsxs(s,{children:[l.jsx(e,{xs:12,children:l.jsx(d,{margin:"1rem 0 1rem 0",children:"When pageSize prop is not set, the select will not have a button to select all options."})}),l.jsx(e,{xs:12,children:l.jsx(t,{mode:"multiple",style:{width:"100%"},options:[{value:"1",label:"1st Floor",color:"blue"},{value:"2",label:"1st Floor [02. Luxemburg Building]",color:"green"},{value:"3",label:"3rd Floor",color:"orange"},{value:"4",label:"45th Floor [04. Luxemburg Building]",color:"green"},{value:"5",color:"blue",label:"1st Floor [05. Luxemburg Building]"},{value:"6",color:"green",label:"1st Floor [06. Luxemburg Building]"},{value:"7",label:"2nd Floor",color:"blue"},{value:"8",label:"2nd Floor [03. Malaga Building]",color:"red"},{value:"9",label:"2nd Floor [04. New York Building]",color:"green"},{value:"10",label:"1st Floor [12. Hong Kong Building]",color:"blue"},{value:"11",label:"3rd Floor [02. Singapur Building]",color:"orange"},{value:"12",label:"2nd Floor [16.  Building]",color:"orange"}],showOptionsAriaLabel:"Show options",hideOptionsAriaLabel:"Hide options",clearAllOptionsAriaLabel:"Clear option"})})]})}),f=o=>l.jsx(t,{...o}),a=()=>{const[o,g]=w.useState(["4"]);return l.jsx(u,{fluid:!0,children:l.jsxs(s,{children:[l.jsx(e,{xs:12,children:l.jsx(d,{margin:"1rem 0 1rem 0",children:"Based on the mode prop, the select can be single or multiple."})}),l.jsx(e,{xs:12,children:l.jsx(f,{defaultValues:o,options:j})})]})})},i=()=>{const[o,g]=w.useState(["2"]),A=O=>g(O);return l.jsx(u,{fluid:!0,children:l.jsxs(s,{children:[l.jsx(e,{xs:12,children:l.jsx(d,{margin:"1rem 0 1rem 0",children:"Based on the mode prop, the select can be single or multiple."})}),l.jsx(e,{xs:12,children:l.jsx(f,{allowClear:!0,defaultValues:o,handleClearAll:()=>{console.log("clear all"),g([])},onChange:A,options:j})})]})})};var c,b,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Select is a form control for selecting a value from a set of options.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Select allowClear mode='multiple' style={{
        width: '100%'
      }} pageSize={2} defaultValues={['3']} maxTagLength={20} options={[{
        value: '1',
        label: '1st Floor'
      }, {
        value: '2',
        label: '1st Floor [02. Luxemburg Building]',
        color: 'green'
      }, {
        value: '3',
        label: '3rd Floor',
        color: 'orange'
      }, {
        value: '4',
        label: '45th Floor [04. Luxemburg Building]',
        color: 'green',
        disabled: true
      }, {
        value: '5',
        color: 'blue',
        label: '1st Floor [05. Luxemburg Building]'
      }, {
        value: '6',
        color: 'green',
        label: '1st Floor [06. Luxemburg Building]'
      }, {
        value: '7',
        label: '2nd Floor',
        color: 'blue'
      }, {
        value: '8',
        label: '2nd Floor [03. Malaga Building]',
        color: 'red'
      }, {
        value: '9',
        label: '2nd Floor [04. New York Building]',
        color: 'green'
      }, {
        value: '10',
        label: '1st Floor [12. Hong Kong Building]',
        color: 'blue'
      }, {
        value: '11',
        label: '3rd Floor [02. Singapur Building]',
        color: 'orange'
      }, {
        value: '12',
        label: '2nd Floor [16.  Building]',
        color: 'orange'
      }]} showOptionsAriaLabel='Show options' hideOptionsAriaLabel='Hide options' clearAllOptionsAriaLabel='Clear all options' deleteOptionSelectedAriaLabel='Delete option' />
            </Cell>
        </Row>
    </Grid>`,...(p=(b=n.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var m,h,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>When pageSize prop is not set, the select will not have a button to select all options.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Select mode='multiple' style={{
        width: '100%'
      }} options={[{
        value: '1',
        label: '1st Floor',
        color: 'blue'
      }, {
        value: '2',
        label: '1st Floor [02. Luxemburg Building]',
        color: 'green'
      }, {
        value: '3',
        label: '3rd Floor',
        color: 'orange'
      }, {
        value: '4',
        label: '45th Floor [04. Luxemburg Building]',
        color: 'green'
      }, {
        value: '5',
        color: 'blue',
        label: '1st Floor [05. Luxemburg Building]'
      }, {
        value: '6',
        color: 'green',
        label: '1st Floor [06. Luxemburg Building]'
      }, {
        value: '7',
        label: '2nd Floor',
        color: 'blue'
      }, {
        value: '8',
        label: '2nd Floor [03. Malaga Building]',
        color: 'red'
      }, {
        value: '9',
        label: '2nd Floor [04. New York Building]',
        color: 'green'
      }, {
        value: '10',
        label: '1st Floor [12. Hong Kong Building]',
        color: 'blue'
      }, {
        value: '11',
        label: '3rd Floor [02. Singapur Building]',
        color: 'orange'
      }, {
        value: '12',
        label: '2nd Floor [16.  Building]',
        color: 'orange'
      }]} showOptionsAriaLabel='Show options' hideOptionsAriaLabel='Hide options' clearAllOptionsAriaLabel='Clear option' />
            </Cell>
        </Row>
    </Grid>`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,F,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [selectedValues, setSelectedValue] = useState(['4']);
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>Based on the mode prop, the select can be single or multiple.</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <SingleSelectComponent defaultValues={selectedValues} options={singleSelectOptions} />
                </Cell>
            </Row>
        </Grid>;
}`,...(S=(F=a.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var B,C,L;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [selectedValues, setSelectedValue] = useState(['2']);
  const handleChange = (value: any) => setSelectedValue(value);
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>Based on the mode prop, the select can be single or multiple.</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <SingleSelectComponent allowClear defaultValues={selectedValues} handleClearAll={() => {
          console.log('clear all');
          setSelectedValue([]);
        }} onChange={handleChange} options={singleSelectOptions} />
                </Cell>
            </Row>
        </Grid>;
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const N=["Multiple","SelectNoButton","SingleSelect","SingleSelectAllowClear"];export{n as Multiple,r as SelectNoButton,a as SingleSelect,i as SingleSelectAllowClear,N as __namedExportsOrder,M as default};
