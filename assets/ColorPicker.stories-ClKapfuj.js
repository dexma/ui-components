import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{d as s,G as a,R as t,C as e,P as c}from"./Breadcrumb-CkZbs_bz.js";import"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const F={title:"ColorPicker",component:s,tags:["autodocs"]},o=()=>r.jsx(a,{fluid:!0,children:r.jsxs(t,{children:[r.jsx(e,{xs:12,children:r.jsx(c,{margin:"1rem 0 1rem 0",children:"Basic ColorPicker with input based on React-Color."})}),r.jsx(e,{xs:12,children:r.jsx(s,{showInput:!0})}),r.jsx(e,{style:{marginTop:"4px"},xs:12,children:r.jsx(s,{showInput:!0,isLoading:!0})})]})}),n=()=>r.jsx(a,{fluid:!0,children:r.jsxs(t,{children:[r.jsx(e,{xs:12,children:r.jsx(c,{margin:"1rem 0 1rem 0",children:"Basic ColorPicker without input."})}),r.jsx(e,{xs:12,children:r.jsx(s,{})}),r.jsx(e,{style:{marginTop:"4px"},xs:12,children:r.jsx(s,{isLoading:!0})})]})}),l=()=>r.jsx(a,{fluid:!0,children:r.jsxs(t,{children:[r.jsx(e,{xs:12,children:r.jsx(c,{margin:"1rem 0 1rem 0",children:"Basic ColorPicker with sample preset colors."})}),r.jsx(e,{xs:12,children:r.jsx(s,{presetColors:["#000","#AAA","#CCC","#FFF"]})})]})}),i=R=>r.jsx(a,{fluid:!0,children:r.jsxs(t,{children:[r.jsx(e,{xs:12,children:r.jsx(c,{margin:"1rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this ColorPicker."})}),r.jsx(e,{style:{marginTop:"4px"},xs:12,children:r.jsx(s,{...R})})]})});var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic ColorPicker with input based on React-Color.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <ColorPicker showInput />
            </Cell>
            <Cell style={{
      marginTop: '4px'
    }} xs={12}>
                <ColorPicker showInput isLoading />
            </Cell>
        </Row>
    </Grid>`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,C,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic ColorPicker without input.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <ColorPicker />
            </Cell>
            <Cell style={{
      marginTop: '4px'
    }} xs={12}>
                <ColorPicker isLoading />
            </Cell>
        </Row>
    </Grid>`,...(h=(C=n.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var u,g,P;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic ColorPicker with sample preset colors.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <ColorPicker presetColors={['#000', '#AAA', '#CCC', '#FFF']} />
            </Cell>
        </Row>
    </Grid>`,...(P=(g=l.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var j,w,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`(args: ColorPickerProps) => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this ColorPicker.</Paragraph>
            </Cell>
            <Cell style={{
      marginTop: '4px'
    }} xs={12}>
                <ColorPicker {...args} />
            </Cell>
        </Row>
    </Grid>`,...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const S=["Basic","Simple","PresetColors","Playground"];export{o as Basic,i as Playground,l as PresetColors,n as Simple,S as __namedExportsOrder,F as default};
