import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{k as a,G as r,R as t,C as l,P as s}from"./Breadcrumb-CkZbs_bz.js";import"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const E={title:"Input",component:a,tags:["autodocs"]},n=()=>e.jsx(r,{fluid:!0,children:e.jsxs(t,{children:[e.jsx(l,{xs:12,children:e.jsx(s,{margin:"1rem 0 1rem 0",children:"Basic input text"})}),e.jsx(l,{xs:12,children:e.jsx(a,{type:"text",placeholder:"Input text",label:"Basic input text",id:"basic_input"})})]})}),i=()=>e.jsx(r,{fluid:!0,children:e.jsxs(t,{children:[e.jsx(l,{xs:12,children:e.jsx(s,{margin:"1rem 0 1rem 0",children:"Input search in two cell"})}),e.jsx(l,{xs:6,children:e.jsx(a,{type:"text",placeholder:"Search text",icon:"search",label:"Search text",ariaLabel:"Search",isItToSearch:!0,id:"search_input"})})]})}),p=()=>e.jsx(r,{fluid:!0,children:e.jsxs(t,{children:[e.jsx(l,{xs:12,children:e.jsx(s,{margin:"1rem 0 1rem 0",children:"Input search with loading prop"})}),e.jsx(l,{xs:8,xsOffset:2,children:e.jsx(a,{type:"text",placeholder:"Search text",icon:"search",isLoading:!0,label:"Search text",id:"loading_input"})})]})}),o=()=>e.jsx(r,{fluid:!0,children:e.jsxs(t,{children:[e.jsx(l,{xs:12,children:e.jsx(s,{margin:"1rem 0 1rem 0",children:"Disabled input, both placeholders and values"})}),e.jsx(l,{xs:12,children:e.jsx(a,{type:"text",value:"Value Text",disabled:!0,label:"Value"})}),e.jsx(l,{xs:12,children:e.jsx(a,{type:"text",placeholder:"Placeholder text",disabled:!0,label:"Disabled input",id:"disabled_input"})})]})}),d=()=>e.jsx(r,{fluid:!0,children:e.jsxs(t,{children:[e.jsx(l,{xs:12,children:e.jsx(s,{margin:"1rem 0 1rem 0",children:"Input types must be 'text', 'email', 'number', 'tel', 'password', 'url' or 'file'"})}),e.jsx(l,{xs:12,children:e.jsx(a,{type:"text",value:"Hi, I am Rob",label:"Greeting",id:"greeting_input"})}),e.jsx(l,{xs:12,children:e.jsx(a,{type:"email",value:"user@inputtest.com",label:"Email",autoComplete:"email",id:"email_input"})}),e.jsx(l,{xs:12,children:e.jsx(a,{type:"number",placeholder:"Enter your number",label:"Age",autoComplete:"age",id:"age_input"})}),e.jsx(l,{xs:12,children:e.jsx(a,{type:"password",placeholder:"Enter your password",label:"Password",autoComplete:"password",id:"password_input"})}),e.jsx(l,{xs:12,children:e.jsx(a,{type:"tel",placeholder:"Phone number",label:"Phone number",autoComplete:"tel",id:"phone_input"})}),e.jsx(l,{xs:12,children:e.jsx(a,{type:"url",placeholder:"URL",label:"URL",autoComplete:"url",id:"url_input"})}),e.jsx(l,{xs:12,children:e.jsx(a,{type:"file",placeholder:"Choose a file",label:"File",autoComplete:"file",id:"file_input"})})]})});var u,c,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic input text</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Input type='text' placeholder='Input text' label='Basic input text' id='basic_input' />
            </Cell>
        </Row>
    </Grid>`,...(x=(c=n.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var h,m,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Input search in two cell</Paragraph>
            </Cell>
            <Cell xs={6}>
                <Input type='text' placeholder='Search text' icon='search' label='Search text' ariaLabel='Search' isItToSearch id='search_input' />
            </Cell>
        </Row>
    </Grid>`,...(b=(m=i.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var C,g,j;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Input search with loading prop</Paragraph>
            </Cell>
            <Cell xs={8} xsOffset={2}>
                <Input type='text' placeholder='Search text' icon='search' isLoading label='Search text' id='loading_input' />
            </Cell>
        </Row>
    </Grid>`,...(j=(g=p.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var y,f,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Disabled input, both placeholders and values</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Input type='text' value='Value Text' disabled label='Value' />
            </Cell>
            <Cell xs={12}>
                <Input type='text' placeholder='Placeholder text' disabled label='Disabled input' id='disabled_input' />
            </Cell>
        </Row>
    </Grid>`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var I,_,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Input types must be &apos;text&apos;, &apos;email&apos;, &apos;number&apos;, &apos;tel&apos;, &apos;password&apos;, &apos;url&apos; or &apos;file&apos;
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Input type='text' value='Hi, I am Rob' label='Greeting' id='greeting_input' />
            </Cell>
            <Cell xs={12}>
                <Input type='email' value='user@inputtest.com' label='Email' autoComplete='email' id='email_input' />
            </Cell>
            <Cell xs={12}>
                <Input type='number' placeholder='Enter your number' label='Age' autoComplete='age' id='age_input' />
            </Cell>
            <Cell xs={12}>
                <Input type='password' placeholder='Enter your password' label='Password' autoComplete='password' id='password_input' />
            </Cell>
            <Cell xs={12}>
                <Input type='tel' placeholder='Phone number' label='Phone number' autoComplete='tel' id='phone_input' />
            </Cell>
            <Cell xs={12}>
                <Input type='url' placeholder='URL' label='URL' autoComplete='url' id='url_input' />
            </Cell>
            <Cell xs={12}>
                <Input type='file' placeholder='Choose a file' label='File' autoComplete='file' id='file_input' />
            </Cell>
        </Row>
    </Grid>`,...(P=(_=d.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const B=["Basic","Search","Loading","Disabled","Types"];export{n as Basic,o as Disabled,p as Loading,i as Search,d as Types,B as __namedExportsOrder,E as default};
