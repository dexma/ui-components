import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{q as s,G as o,R as a,C as e,P as n}from"./Breadcrumb-CkZbs_bz.js";import"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const A={title:"Progress",component:s,tags:["autodocs"]},t=()=>r.jsx(o,{fluid:!0,children:r.jsxs(a,{children:[r.jsx(e,{xs:12,children:r.jsx(n,{margin:"1rem 0 1rem 0",children:"A progress bar component communicates to the user the progress of a particular process"})}),r.jsx(e,{xs:12,children:r.jsx(s,{percent:20,text:"20%",color:"gray"})})]})}),l=()=>r.jsx(o,{fluid:!0,children:r.jsxs(a,{children:[r.jsx(e,{xs:12,children:r.jsx(n,{margin:"1rem 0 1rem 0",children:"Display the current progress of an operation flow."})}),r.jsx(e,{xs:12,children:r.jsx(s,{percent:20,text:"20%",color:"green",isTransparent:!0})})]})}),D=[{value:20,color:"blue"},{value:50,color:"black"}],c=()=>r.jsx(o,{fluid:!0,children:r.jsxs(a,{children:[r.jsx(e,{xs:12,children:r.jsx(n,{margin:"1rem 0 1rem 0",children:"Display the current progress of an operation flow."})}),r.jsx(e,{xs:12,children:r.jsx(s,{percent:40,text:"40%",color:"blue",marks:D})})]})}),i=()=>r.jsx(o,{fluid:!0,children:r.jsxs(a,{children:[r.jsx(e,{xs:12,children:r.jsx(n,{margin:"1rem 0 1rem 0",children:"Display the current progress without text"})}),r.jsx(e,{xs:12,children:r.jsx(s,{percent:20,color:"red",ariaLabel:"20%"})})]})}),p=k=>r.jsx(o,{fluid:!0,children:r.jsxs(a,{children:[r.jsx(e,{xs:12,children:r.jsx(n,{margin:"1rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Progress."})}),r.jsx(e,{xs:12,children:r.jsx(s,{...k})})]})});var d,m,x;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A progress bar component communicates to the user the progress of a particular process</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress percent={20} text='20%' color='gray' />
            </Cell>
        </Row>
    </Grid>`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,u,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Display the current progress of an operation flow.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress percent={20} text='20%' color='green' isTransparent />
            </Cell>
        </Row>
    </Grid>`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var j,P,C;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Display the current progress of an operation flow.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress percent={40} text='40%' color='blue' marks={twoMark} />
            </Cell>
        </Row>
    </Grid>`,...(C=(P=c.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var f,w,R;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Display the current progress without text</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress percent={20} color='red' ariaLabel='20%' />
            </Cell>
        </Row>
    </Grid>`,...(R=(w=i.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var y,G,b;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`(args: ProgressProps) => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Progress.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress {...args} />
            </Cell>
        </Row>
    </Grid>`,...(b=(G=p.parameters)==null?void 0:G.docs)==null?void 0:b.source}}};const B=["Basic","ProgressTransparent","Marks","NoText","Playground"];export{t as Basic,c as Marks,i as NoText,p as Playground,l as ProgressTransparent,B as __namedExportsOrder,A as default};
