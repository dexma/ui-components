import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{A as s,G as o,R as t,C as r,P as n}from"./Breadcrumb-CkZbs_bz.js";import"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const T={title:"Alert",component:s,tags:["autodocs"]},a=()=>e.jsx(o,{fluid:!0,children:e.jsxs(t,{children:[e.jsx(r,{xs:12,children:e.jsx(n,{margin:"1rem 0 1rem 0",children:"Alerts visually highlight important content for the user."})}),e.jsxs(r,{xs:12,children:[e.jsx(n,{margin:"1rem 0 1rem 0",children:"You can choose between basic, outline, success, info and warning for different icon an color options."}),e.jsx(s,{message:"Basic",type:"basic",showIcon:!0}),e.jsx("br",{}),e.jsx(s,{message:"Outline",type:"outline"}),e.jsx("br",{}),e.jsx(s,{message:"Success Tips",type:"success",showIcon:!0}),e.jsx("br",{}),e.jsx(s,{message:"Informational Notes",type:"info",showIcon:!0}),e.jsx("br",{}),e.jsx(s,{message:"Warning",type:"warning",showIcon:!0}),e.jsx("br",{}),e.jsx(s,{message:"Error",type:"error",showIcon:!0})]})]})}),i=()=>e.jsx(o,{fluid:!0,children:e.jsxs(t,{children:[e.jsx(r,{xs:12,children:e.jsx(n,{margin:"1rem 0 1rem 0",children:"You can add description to the body of the alert."})}),e.jsx(r,{xs:12,children:e.jsx(s,{message:"Basic alert",description:"Detailed description and advice about successful copywriting.",type:"basic",showIcon:!0})})]})}),c=()=>e.jsx(o,{fluid:!0,children:e.jsxs(t,{children:[e.jsx(r,{xs:12,children:e.jsx(n,{margin:"1rem 0 1rem 0",children:"A option without the icon on the title alert. The showIcon prop that allows to show or not the icon default to false."})}),e.jsxs(r,{xs:12,children:[e.jsx(s,{message:"Success Tips",description:"Detailed description and advice about successful copywriting.",type:"success"}),e.jsx("br",{}),e.jsx(s,{message:"Informational Notes",type:"info"}),e.jsx("br",{}),e.jsx(s,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning"}),e.jsx("br",{}),e.jsx(s,{message:"Error",description:"This is an error message about copywriting.",type:"error"})]})]})}),l=()=>e.jsx(o,{fluid:!0,children:e.jsxs(t,{children:[e.jsx(r,{xs:12,children:e.jsx(n,{margin:"1rem 0 1rem 0",children:"Alert component used when you need customs messages. You can pass html to the message prop to allow for it."})}),e.jsxs(r,{xs:12,children:[e.jsx(s,{type:"info",message:e.jsxs("span",{style:{fontWeight:"400",fontSize:"14px"},children:["You have ",e.jsx("strong",{children:"2"})," Optimise datapoints left in your free trial."," ",e.jsx("span",{style:{color:"#0054a1",textDecoration:"underline",cursor:"pointer"},children:"How are these calculated?"})]}),showIcon:!0}),e.jsx("br",{}),e.jsx(s,{type:"error",message:e.jsxs("span",{style:{fontWeight:"400",fontSize:"14px"},children:["You have ",e.jsx("strong",{children:"2"})," Optimise datapoints left in your free trial."," ",e.jsx("span",{style:{color:"#ffffff",textDecoration:"underline",cursor:"pointer"},children:"How are these calculated?"})]}),showIcon:!0}),e.jsx("br",{}),e.jsx(s,{type:"success",message:e.jsxs("span",{style:{fontWeight:"400",fontSize:"14px"},children:["You have ",e.jsx("strong",{children:"2"})," Optimise datapoints left in your free trial."," ",e.jsx("span",{style:{color:"#ffffff",textDecoration:"underline",cursor:"pointer"},children:"How are these calculated?"})]}),showIcon:!0}),e.jsx("br",{})]})]})}),p=S=>e.jsx(o,{fluid:!0,children:e.jsx(t,{children:e.jsxs(r,{xs:12,children:[e.jsx(n,{margin:"1rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Alert."}),e.jsx(s,{...S})]})})});var d,u,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Alerts visually highlight important content for the user.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>You can choose between basic, outline, success, info and warning for different icon an color options.</Paragraph>
                <Alert message='Basic' type='basic' showIcon />
                <br />
                <Alert message='Outline' type='outline' />
                <br />
                <Alert message='Success Tips' type='success' showIcon />
                <br />
                <Alert message='Informational Notes' type='info' showIcon />
                <br />
                <Alert message='Warning' type='warning' showIcon />
                <br />
                <Alert message='Error' type='error' showIcon />
            </Cell>
        </Row>
    </Grid>`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var m,g,x;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>You can add description to the body of the alert.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Alert message='Basic alert' description='Detailed description and advice about successful copywriting.' type='basic' showIcon />
            </Cell>
        </Row>
    </Grid>`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,w,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A option without the icon on the title alert. The showIcon prop that allows to show or not the icon default to false.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Alert message='Success Tips' description='Detailed description and advice about successful copywriting.' type='success' />
                <br />
                <Alert message='Informational Notes' type='info' />
                <br />
                <Alert message='Warning' description='This is a warning notice about copywriting.' type='warning' />
                <br />
                <Alert message='Error' description='This is an error message about copywriting.' type='error' />
            </Cell>
        </Row>
    </Grid>`,...(y=(w=c.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var j,b,A;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Alert component used when you need customs messages. You can pass html to the message prop to allow for it.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Alert type='info' message={<span style={{
        fontWeight: '400',
        fontSize: '14px'
      }}>
                            You have <strong>2</strong> Optimise datapoints left in your free trial.{' '}
                            <span style={{
          color: '#0054a1',
          textDecoration: 'underline',
          cursor: 'pointer'
        }}>
                                How are these calculated?
                            </span>
                        </span>} showIcon />
                <br />
                <Alert type='error' message={<span style={{
        fontWeight: '400',
        fontSize: '14px'
      }}>
                            You have <strong>2</strong> Optimise datapoints left in your free trial.{' '}
                            <span style={{
          color: '#ffffff',
          textDecoration: 'underline',
          cursor: 'pointer'
        }}>
                                How are these calculated?
                            </span>
                        </span>} showIcon />
                <br />
                <Alert type='success' message={<span style={{
        fontWeight: '400',
        fontSize: '14px'
      }}>
                            You have <strong>2</strong> Optimise datapoints left in your free trial.{' '}
                            <span style={{
          color: '#ffffff',
          textDecoration: 'underline',
          cursor: 'pointer'
        }}>
                                How are these calculated?
                            </span>
                        </span>} showIcon />
                <br />
            </Cell>
        </Row>
    </Grid>`,...(A=(b=l.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var I,C,P;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`(args: AlertProps) => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Alert.</Paragraph>
                <Alert {...args} />
            </Cell>
        </Row>
    </Grid>`,...(P=(C=p.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const W=["Basic","Description","NoIcon","CustomAlert","Playground"];export{a as Basic,l as CustomAlert,i as Description,c as NoIcon,p as Playground,W as __namedExportsOrder,T as default};
