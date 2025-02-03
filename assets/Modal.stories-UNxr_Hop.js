import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{r as C}from"./index-DRjF_FHU.js";import{M as p,G as x,R as u,C as a,P as i,B as n}from"./DatePicker-Dwnz1syV.js";import"./global-C5EY7ICf.js";import"./index-DqsfaJzi.js";const f=({withFooter:j})=>{const[g,e]=C.useState(!1),w=j?[r.jsx(n,{variant:"destructive",onClick:()=>{e(!1)},children:"Yes, discard project"}),r.jsx(n,{variant:"secondary",onClick:()=>{e(!1)},children:"No, continue editing"})]:!1;return r.jsxs("div",{children:[r.jsx(n,{text:"Open modal",onClick:()=>{e(!0)}}),r.jsx(p,{open:g,onCancel:()=>{e(!1)},title:"Unsaved changes",width:400,footer:w,children:r.jsx(i,{children:"Are you sure you want to discard your changes?"})})]})},P={title:"Modal",component:p,tags:["autodocs"]},o=()=>r.jsx(x,{fluid:!0,children:r.jsxs(u,{children:[r.jsx(a,{xs:12,children:r.jsx(i,{margin:"1rem 0 1rem 0",children:r.jsxs("div",{children:[" ","Basic modal dialogs with a footer ",r.jsx("a",{href:"https://ant.design/../components/modal/",children:"this link"})," for more information about the props"," "]})})}),r.jsx(a,{xs:12,children:r.jsx(f,{})})]})}),s=()=>r.jsx(x,{fluid:!0,children:r.jsxs(u,{children:[r.jsx(a,{xs:12,children:r.jsx(i,{margin:"1rem 0 1rem 0",children:"Basic modal dialogs with a footer"})}),r.jsx(a,{xs:12,children:r.jsx(f,{withFooter:!0})})]})});var t,l,d;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    <div>
                        {' '}
                        Basic modal dialogs with a footer <a href='https://ant.design/../components/modal/'>this link</a> for more information about the props{' '}
                    </div>
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <ModalView />
            </Cell>
        </Row>
    </Grid>`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic modal dialogs with a footer</Paragraph>
            </Cell>
            <Cell xs={12}>
                <ModalView withFooter />
            </Cell>
        </Row>
    </Grid>`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const k=["Basic","Footer"];export{o as Basic,s as Footer,k as __namedExportsOrder,P as default};
