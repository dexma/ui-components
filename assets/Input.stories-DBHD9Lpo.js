import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{i as r,G as a,R as s,C as l,P as t}from"./DatePicker-DwsgQwU6.js";import"./index-DRjF_FHU.js";import"./global-BZ1uRXIW.js";import"./index-DqsfaJzi.js";const B={title:"Input",component:r,tags:["autodocs"]},n=()=>e.jsx(a,{fluid:!0,children:e.jsxs(s,{children:[e.jsx(l,{xs:12,children:e.jsx(t,{margin:"1rem 0 1rem 0",children:"Basic input text"})}),e.jsx(l,{xs:12,children:e.jsx(r,{type:"text",placeholder:"Input text",label:"Basic input text"})})]})}),o=()=>e.jsx(a,{fluid:!0,children:e.jsxs(s,{children:[e.jsx(l,{xs:12,children:e.jsx(t,{margin:"1rem 0 1rem 0",children:"Input search in two cell"})}),e.jsx(l,{xs:6,children:e.jsx(r,{type:"text",placeholder:"Search text",icon:"search",label:"Search text",ariaLabel:"Search",isItToSearch:!0})})]})}),p=()=>e.jsx(a,{fluid:!0,children:e.jsxs(s,{children:[e.jsx(l,{xs:12,children:e.jsx(t,{margin:"1rem 0 1rem 0",children:"Input search with loading prop"})}),e.jsx(l,{xs:8,xsOffset:2,children:e.jsx(r,{type:"text",placeholder:"Search text",icon:"search",isLoading:!0,label:"Search text"})})]})}),i=()=>e.jsx(a,{fluid:!0,children:e.jsxs(s,{children:[e.jsx(l,{xs:12,children:e.jsx(t,{margin:"1rem 0 1rem 0",children:"Disabled input, both placeholders and values"})}),e.jsx(l,{xs:12,children:e.jsx(r,{type:"text",value:"Value Text",disabled:!0,label:"Value"})}),e.jsx(l,{xs:12,children:e.jsx(r,{type:"text",placeholder:"Placeholder text",disabled:!0,label:"Disabled input"})})]})}),c=()=>e.jsx(a,{fluid:!0,children:e.jsxs(s,{children:[e.jsx(l,{xs:12,children:e.jsx(t,{margin:"1rem 0 1rem 0",children:"Input types must be 'text', 'email', 'number', 'tel', 'password', 'url' or 'file'"})}),e.jsx(l,{xs:12,children:e.jsx(r,{type:"text",value:"Hi, I am Rob",label:"Greeting"})}),e.jsx(l,{xs:12,children:e.jsx(r,{type:"email",value:"user@inputtest.com",label:"Email",autoComplete:"email"})}),e.jsx(l,{xs:12,children:e.jsx(r,{type:"number",placeholder:"Enter your number",label:"Age",autoComplete:"age"})}),e.jsx(l,{xs:12,children:e.jsx(r,{type:"password",placeholder:"Enter your password",label:"Password",autoComplete:"password"})}),e.jsx(l,{xs:12,children:e.jsx(r,{type:"tel",placeholder:"Phone number",label:"Phone number",autoComplete:"tel"})}),e.jsx(l,{xs:12,children:e.jsx(r,{type:"url",placeholder:"URL",label:"URL",autoComplete:"url"})}),e.jsx(l,{xs:12,children:e.jsx(r,{type:"file",placeholder:"Choose a file",label:"File",autoComplete:"file"})})]})});var d,u,x;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic input text</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Input type='text' placeholder='Input text' label='Basic input text' />
            </Cell>
        </Row>
    </Grid>`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,m,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Input search in two cell</Paragraph>
            </Cell>
            <Cell xs={6}>
                <Input type='text' placeholder='Search text' icon='search' label='Search text' ariaLabel='Search' isItToSearch />
            </Cell>
        </Row>
    </Grid>`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var C,j,g;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Input search with loading prop</Paragraph>
            </Cell>
            <Cell xs={8} xsOffset={2}>
                <Input type='text' placeholder='Search text' icon='search' isLoading label='Search text' />
            </Cell>
        </Row>
    </Grid>`,...(g=(j=p.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var y,I,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Disabled input, both placeholders and values</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Input type='text' value='Value Text' disabled label='Value' />
            </Cell>

            <Cell xs={12}>
                <Input type='text' placeholder='Placeholder text' disabled label='Disabled input' />
            </Cell>
        </Row>
    </Grid>`,...(f=(I=i.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var w,P,R;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Input types must be &apos;text&apos;, &apos;email&apos;, &apos;number&apos;, &apos;tel&apos;, &apos;password&apos;, &apos;url&apos; or &apos;file&apos;
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Input type='text' value='Hi, I am Rob' label='Greeting' />
            </Cell>
            <Cell xs={12}>
                <Input type='email' value='user@inputtest.com' label='Email' autoComplete='email' />
            </Cell>
            <Cell xs={12}>
                <Input type='number' placeholder='Enter your number' label='Age' autoComplete='age' />
            </Cell>
            <Cell xs={12}>
                <Input type='password' placeholder='Enter your password' label='Password' autoComplete='password' />
            </Cell>
            <Cell xs={12}>
                <Input type='tel' placeholder='Phone number' label='Phone number' autoComplete='tel' />
            </Cell>
            <Cell xs={12}>
                <Input type='url' placeholder='URL' label='URL' autoComplete='url' />
            </Cell>
            <Cell xs={12}>
                <Input type='file' placeholder='Choose a file' label='File' autoComplete='file' />
            </Cell>
        </Row>
    </Grid>`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const D=["Basic","Search","Loading","Disabled","Types"];export{n as Basic,i as Disabled,p as Loading,o as Search,c as Types,D as __namedExportsOrder,B as default};
