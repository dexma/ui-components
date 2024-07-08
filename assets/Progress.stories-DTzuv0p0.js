import{j as r}from"./polished.esm-BTw9q-eL.js";import{n as e,G as o,R as n,C as s,P as t}from"./DatePicker-DtFoBb26.js";import"./index-uubelm5h.js";import"./global-DpqdS--E.js";import"./get-B2oUPAyW.js";import"./_commonjs-dynamic-modules-S1e38TyK.js";import"./_baseIteratee-JV0s3RFV.js";import"./index-DfsGIHLO.js";import"./debounce-BJI3GnSe.js";import"./index-Bd6JW1JU.js";const q={title:"Progress",component:e,tags:["autodocs"]},a=()=>r.jsx(o,{fluid:!0,children:r.jsxs(n,{children:[r.jsx(s,{xs:12,children:r.jsx(t,{margin:"1rem 0 1rem 0",children:"A progress bar component communicates to the user the progress of a particular process"})}),r.jsxs(s,{xs:12,children:[r.jsx(e,{percent:20,text:"20%",color:"gray"}),r.jsx(e,{percent:40,text:"40%",color:"red"}),r.jsx(e,{percent:60,text:"60%",color:"amber"}),r.jsx(e,{percent:80,text:"80%",color:"green"})]})]})}),c=()=>r.jsx(o,{fluid:!0,children:r.jsxs(n,{children:[r.jsx(s,{xs:12,children:r.jsx(t,{margin:"1rem 0 1rem 0",children:"Display the current progress of an operation flow."})}),r.jsxs(s,{xs:12,children:[r.jsx(e,{percent:20,text:"20%",color:"gray",isTransparent:!0}),r.jsx(e,{percent:40,text:"40%",color:"red",isTransparent:!0}),r.jsx(e,{percent:60,text:"60%",color:"amber",isTransparent:!0}),r.jsx(e,{percent:80,text:"80%",color:"green",isTransparent:!0})]})]})}),T=[{value:30,color:"black"}],D=[{value:20,color:"blue"},{value:50,color:"black"}],l=()=>r.jsx(o,{fluid:!0,children:r.jsxs(n,{children:[r.jsx(s,{xs:12,children:r.jsx(t,{margin:"1rem 0 1rem 0",children:"Display the current progress of an operation flow."})}),r.jsxs(s,{xs:12,children:[r.jsx(e,{percent:10,text:"10%",color:"red",marks:T}),r.jsx(e,{percent:40,text:"40%",color:"green",marks:D})]})]})}),p=()=>r.jsx(o,{fluid:!0,children:r.jsxs(n,{children:[r.jsx(s,{xs:12,children:r.jsx(t,{margin:"1rem 0 1rem 0",children:"Display the current progress without text"})}),r.jsxs(s,{xs:12,children:[r.jsx(e,{percent:20,color:"gray"}),r.jsx(e,{percent:40,color:"red"}),r.jsx(e,{percent:60,color:"amber"}),r.jsx(e,{percent:80,color:"green"})]})]})}),i=G=>r.jsx(o,{fluid:!0,children:r.jsxs(n,{children:[r.jsx(s,{xs:12,children:r.jsx(t,{margin:"1rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Progress."})}),r.jsx(s,{xs:12,children:r.jsx(e,{...G})})]})});var x,m,d;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A progress bar component communicates to the user the progress of a particular process</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress percent={20} text='20%' color='gray' />
                <Progress percent={40} text='40%' color='red' />
                <Progress percent={60} text='60%' color='amber' />
                <Progress percent={80} text='80%' color='green' />
            </Cell>
        </Row>
    </Grid>`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,u,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Display the current progress of an operation flow.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress percent={20} text='20%' color='gray' isTransparent />
                <Progress percent={40} text='40%' color='red' isTransparent />
                <Progress percent={60} text='60%' color='amber' isTransparent />
                <Progress percent={80} text='80%' color='green' isTransparent />
            </Cell>
        </Row>
    </Grid>`,...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var j,P,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Display the current progress of an operation flow.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress percent={10} text='10%' color='red' marks={oneMark} />
                <Progress percent={40} text='40%' color='green' marks={twoMark} />
            </Cell>
        </Row>
    </Grid>`,...(C=(P=l.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var f,w,y;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Display the current progress without text</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress percent={20} color='gray' />
                <Progress percent={40} color='red' />
                <Progress percent={60} color='amber' />
                <Progress percent={80} color='green' />
            </Cell>
        </Row>
    </Grid>`,...(y=(w=p.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var b,R,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`(args: ProgressProps) => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Progress.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress {...args} />
            </Cell>
        </Row>
    </Grid>`,...(k=(R=i.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const z=["Basic","ProgressTransparent","Marks","NoText","Playground"];export{a as Basic,l as Marks,p as NoText,i as Playground,c as ProgressTransparent,z as __namedExportsOrder,q as default};
