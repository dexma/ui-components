import{j as r}from"./polished.esm-BTw9q-eL.js";import{r as C}from"./index-uubelm5h.js";import{M as p,G as x,R as u,C as a,P as t,B as i}from"./DatePicker-DtFoBb26.js";import"./global-DpqdS--E.js";import"./get-B2oUPAyW.js";import"./_commonjs-dynamic-modules-S1e38TyK.js";import"./_baseIteratee-JV0s3RFV.js";import"./index-DfsGIHLO.js";import"./debounce-BJI3GnSe.js";import"./index-Bd6JW1JU.js";const f=({withFooter:j})=>{const[g,e]=C.useState(!1),w=j?[r.jsx(i,{variant:"destructive",onClick:()=>{e(!1)},children:"Yes, discard project"}),r.jsx(i,{variant:"secondary",onClick:()=>{e(!1)},children:"No, continue editing"})]:!1;return r.jsxs("div",{children:[r.jsx(i,{text:"Open modal",onClick:()=>{e(!0)}}),r.jsx(p,{open:g,onCancel:()=>{e(!1)},title:"Unsaved changes",width:400,footer:w,children:r.jsx(t,{children:"Are you sure you want to discard your changes?"})})]})},E={title:"Modal",component:p,tags:["autodocs"]},o=()=>r.jsx(x,{fluid:!0,children:r.jsxs(u,{children:[r.jsx(a,{xs:12,children:r.jsx(t,{margin:"1rem 0 1rem 0",children:r.jsxs("div",{children:[" ","Basic modal dialogs with a footer ",r.jsx("a",{href:"https://ant.design/../components/modal/",children:"this link"})," for more information about the props"," "]})})}),r.jsx(a,{xs:12,children:r.jsx(f,{})})]})}),s=()=>r.jsx(x,{fluid:!0,children:r.jsxs(u,{children:[r.jsx(a,{xs:12,children:r.jsx(t,{margin:"1rem 0 1rem 0",children:"Basic modal dialogs with a footer"})}),r.jsx(a,{xs:12,children:r.jsx(f,{withFooter:!0})})]})});var n,l,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => <Grid fluid>
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
    </Grid>`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const V=["Basic","Footer"];export{o as Basic,s as Footer,V as __namedExportsOrder,E as default};
