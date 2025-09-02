import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as C}from"./index-DRjF_FHU.js";import{M as x,G as p,R as u,C as a,P as n,B as t}from"./Breadcrumb-CkZbs_bz.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const f=({withFooter:j})=>{const[g,o]=C.useState(!1),w=j?[e.jsx(t,{text:"Yes, discard project",variant:"destructive",onClick:()=>{o(!1)}}),e.jsx(t,{text:"No, continue editing",variant:"secondary",onClick:()=>{o(!1)}})]:!1;return e.jsxs("div",{children:[e.jsx(t,{text:"Open modal",onClick:()=>{o(!0)}}),e.jsx(x,{open:g,onCancel:()=>{o(!1)},title:"Unsaved changes",width:400,footer:w,body:e.jsx(n,{children:"Are you sure you want to discard your changes?"}),closeModalButtonAriaLabel:"Close modal"})]})},P={title:"Modal",component:x,tags:["autodocs"]},r=()=>e.jsx(p,{fluid:!0,children:e.jsxs(u,{children:[e.jsx(a,{xs:12,children:e.jsx(n,{margin:"1rem 0 1rem 0",children:e.jsxs("div",{children:[" ","Basic modal dialogs with a footer ",e.jsx("a",{href:"https://ant.design/../components/modal/",children:"this link"})," for more information about the props"," "]})})}),e.jsx(a,{xs:12,children:e.jsx(f,{})})]})}),s=()=>e.jsx(p,{fluid:!0,children:e.jsxs(u,{children:[e.jsx(a,{xs:12,children:e.jsx(n,{margin:"1rem 0 1rem 0",children:"Basic modal dialogs with a footer"})}),e.jsx(a,{xs:12,children:e.jsx(f,{withFooter:!0})})]})});var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => <Grid fluid>
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
    </Grid>`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic modal dialogs with a footer</Paragraph>
            </Cell>
            <Cell xs={12}>
                <ModalView withFooter />
            </Cell>
        </Row>
    </Grid>`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const k=["Basic","Footer"];export{r as Basic,s as Footer,k as __namedExportsOrder,P as default};
