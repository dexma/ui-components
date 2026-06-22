import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{u as r,G as t,R as s,C as n,P as i}from"./Breadcrumb-CoSjW8N8.js";import{r as G}from"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const Q={title:"Select",component:r,tags:["autodocs"]},b=[{label:"manager",options:[{label:"Jack",value:1},{label:"Lucy",value:2}]},{label:"engineer",options:[{label:"Chloe",value:3},{label:"Lucas",value:4}]}],d=()=>e.jsx(t,{fluid:!0,children:e.jsxs(s,{children:[e.jsx(n,{xs:12,children:e.jsx(i,{margin:"1rem 0 1rem 0",children:"Select is a form control for selecting a value from a set of options."})}),e.jsx(n,{xs:12,children:e.jsx(r,{allowClear:!0,open:!0,mode:"multiple",style:{width:"100%"},pageSize:6,defaultValues:["3"],maxTagLength:20,maxTagCount:"responsive",options:[{value:"1",label:"1st Floor"},{value:"2",label:"1st Floor [02. Luxemburg Building]",color:"green"},{value:"3",label:"3rd Floor",color:"orange"},{value:"4",label:"45th Floor [04. Luxemburg Building]",color:"red",disabled:!0},{value:"5",color:"blue",label:"1st Floor [05. Luxemburg Building]"},{value:"6",color:"gray",label:"1st Floor [06. Luxemburg Building]"},{value:"7",label:"2nd Floor",color:"blue"},{value:"8",label:"2nd Floor [03. Malaga Building]",color:"red"},{value:"9",label:"2nd Floor [04. New York Building]",color:"green"},{value:"10",label:"1st Floor [12. Hong Kong Building]",color:"blue"},{value:"11",label:"3rd Floor [02. Singapur Building]",color:"orange"},{value:"12",label:"2nd Floor [16.  Building]",color:"orange"}],showOptionsAriaLabel:"Show options",hideOptionsAriaLabel:"Hide options",clearAllOptionsAriaLabel:"Clear all options",deleteOptionSelectedAriaLabel:"Delete option"})})]})}),c=()=>e.jsx(t,{fluid:!0,children:e.jsxs(s,{children:[e.jsx(n,{xs:12,children:e.jsx(i,{margin:"1rem 0 1rem 0",children:"When pageSize prop is not set, the select will not have a button to select all options."})}),e.jsx(n,{xs:12,children:e.jsx(r,{mode:"multiple",style:{width:"100%"},options:[{value:"1",label:"1st Floor",color:"blue"},{value:"2",label:"1st Floor [02. Luxemburg Building]",color:"green"},{value:"3",label:"3rd Floor",color:"orange"},{value:"4",label:"45th Floor [04. Luxemburg Building]",color:"black"},{value:"5",color:"gray",label:"1st Floor [05. Luxemburg Building]"},{value:"6",color:"green",label:"1st Floor [06. Luxemburg Building]"},{value:"7",label:"2nd Floor",color:"blue"},{value:"8",label:"2nd Floor [03. Malaga Building]",color:"red"},{value:"9",label:"2nd Floor [04. New York Building]",color:"green"},{value:"10",label:"1st Floor [12. Hong Kong Building]",color:"blue"},{value:"11",label:"3rd Floor [02. Singapur Building]",color:"orange"},{value:"12",label:"2nd Floor [16.  Building]",color:"orange"}],showOptionsAriaLabel:"Show options",hideOptionsAriaLabel:"Hide options",clearAllOptionsAriaLabel:"Clear option"})})]})}),P=l=>e.jsx(r,{...l}),N=(l,a)=>a.index%2?e.jsx("span",{"data-label":l.label,children:l.label}):e.jsx("strong",{"data-label":l.label,children:l.label}),p=()=>{const[l,a]=G.useState([b[0].options[1].value]);return e.jsx(t,{fluid:!0,children:e.jsxs(s,{children:[e.jsx(n,{xs:12,children:e.jsx(i,{margin:"1rem 0 1rem 0",children:"Based on the mode prop, the select can be single or multiple."})}),e.jsx(n,{xs:12,children:e.jsx(P,{defaultValues:l,options:b,optionFilterProp:"label",optionRender:N})})]})})},g=()=>{const[l,a]=G.useState(b[0].options[1].value),o=u=>a(u);return e.jsx(t,{fluid:!0,children:e.jsxs(s,{children:[e.jsx(n,{xs:12,children:e.jsx(i,{margin:"1rem 0 1rem 0",children:"Based on the mode prop, the select can be single or multiple."})}),e.jsx(n,{xs:12,children:e.jsx(P,{allowClear:!0,defaultValues:[l],handleClearAll:()=>{console.log("clear all"),a(null)},onChange:o,options:b})})]})})},m=()=>{const l=o=>{var h;const u=((h=o.data)==null?void 0:h.value)??"";return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"start"},children:[e.jsx("span",{children:o.label}),e.jsx("img",{src:u,alt:`Logo for ${u}`,style:{height:20,marginLeft:"8px"}})]})},a=o=>e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"start",width:"100%"},children:[e.jsx("span",{children:o.label}),e.jsx("img",{src:o.value,alt:`Logo for ${o.label}`,style:{height:20,marginLeft:"8px"}})]});return e.jsx(t,{fluid:!0,children:e.jsxs(s,{children:[e.jsx(n,{xs:12,children:e.jsx(i,{margin:"1rem 0 1rem 0",children:" To add an image, or any custom html to the component, use 'optionRender' to customize each of the options available, and 'selectedOptionRender' to customize the selected option."})}),e.jsx(n,{xs:12,children:e.jsx(r,{mode:"single",style:{width:"100%"},optionRender:l,selectedOptionRender:a,allowClear:!0,options:[{value:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdC8jTXU10v0L8zftHFmYCO5MYGJyjWfyjQ&s",label:"Logo sample 1"},{value:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUfwz7NI1b8PCMhWJYhMFVZopMkj_I-_wyKQ&s",label:"Logo sample 2"},{value:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83JhrObvY8ljCtbRcSuqbAsQL6PmEZ5Nepw&s",label:"Logo sample 3"}],showOptionsAriaLabel:"Show options",hideOptionsAriaLabel:"Hide options",clearAllOptionsAriaLabel:"Clear option"})})]})})};var x,v,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Select is a form control for selecting a value from a set of options.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Select allowClear open mode='multiple' style={{
        width: '100%'
      }} pageSize={6} defaultValues={['3']} maxTagLength={20} maxTagCount='responsive' options={[{
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
        color: 'red',
        disabled: true
      }, {
        value: '5',
        color: 'blue',
        label: '1st Floor [05. Luxemburg Building]'
      }, {
        value: '6',
        color: 'gray',
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
    </Grid>`,...(S=(v=d.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,L,j;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Grid fluid>
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
        color: 'black'
      }, {
        value: '5',
        color: 'gray',
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
    </Grid>`,...(j=(L=c.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var w,F,f;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [selectedValues, setSelectedValues] = useState([singleSelectOptions[0].options[1].value]);
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>Based on the mode prop, the select can be single or multiple.</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <SingleSelectComponent defaultValues={selectedValues} options={singleSelectOptions} optionFilterProp='label' optionRender={optionRender} />
                </Cell>
            </Row>
        </Grid>;
}`,...(f=(F=p.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var y,B,O;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [selectedValues, setSelectedValue] = useState<number | null>(singleSelectOptions[0].options[1].value);
  const handleChange = (value: any) => setSelectedValue(value);
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>Based on the mode prop, the select can be single or multiple.</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <SingleSelectComponent allowClear defaultValues={[selectedValues]} handleClearAll={() => {
          console.log('clear all');
          setSelectedValue(null);
        }} onChange={handleChange} options={singleSelectOptions} />
                </Cell>
            </Row>
        </Grid>;
}`,...(O=(B=g.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var A,R,V;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const renderDropdownOption = (option: any) => {
    const optionValue = option.data?.value ?? '';
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start'
    }}>
                <span>{option.label}</span>

                <img src={optionValue} alt={\`Logo for \${optionValue}\`} style={{
        height: 20,
        marginLeft: '8px'
      }} />
            </div>;
  };
  const renderSelectedOption = (option: any) => <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%'
  }}>
            <span>{option.label}</span>

            <img src={option.value} alt={\`Logo for \${option.label}\`} style={{
      height: 20,
      marginLeft: '8px'
    }} />
        </div>;
  return <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'> To add an image, or any custom html to the component, use &apos;optionRender&apos; to customize each of the options available, and &apos;selectedOptionRender&apos; to customize the selected option.</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <Select mode='single' style={{
          width: '100%'
        }} optionRender={renderDropdownOption} selectedOptionRender={renderSelectedOption} allowClear options={[{
          value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdC8jTXU10v0L8zftHFmYCO5MYGJyjWfyjQ&s',
          label: 'Logo sample 1'
        }, {
          value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUfwz7NI1b8PCMhWJYhMFVZopMkj_I-_wyKQ&s',
          label: 'Logo sample 2'
        }, {
          value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83JhrObvY8ljCtbRcSuqbAsQL6PmEZ5Nepw&s',
          label: 'Logo sample 3'
        }]} showOptionsAriaLabel='Show options' hideOptionsAriaLabel='Hide options' clearAllOptionsAriaLabel='Clear option' />
                </Cell>
            </Row>
        </Grid>;
}`,...(V=(R=m.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const T=["Multiple","SelectNoButton","SingleSelect","SingleSelectAllowClear","SelectWithImage"];export{d as Multiple,c as SelectNoButton,m as SelectWithImage,p as SingleSelect,g as SingleSelectAllowClear,T as __namedExportsOrder,Q as default};
