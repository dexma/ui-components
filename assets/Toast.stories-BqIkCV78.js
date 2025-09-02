import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{K as p,G as c,R as x,C as n,P as m,N as T,B as a,O as o}from"./Breadcrumb-CkZbs_bz.js";import"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const S={title:"Toaster",component:p,tags:["autodocs"]},s=()=>t.jsx(c,{fluid:!0,children:t.jsxs(x,{children:[t.jsx(n,{xs:12,children:t.jsx(m,{margin:"1rem 0 1rem 0",children:"We present a series of toasters that appear on the top area of the view. In order to make it work it is necessary to inject our custom provider wrapping all components you want to be able to display it. You will then be able to operate the toaster via this provider."})}),t.jsx(n,{xs:12,children:t.jsx(p,{children:t.jsx(T.Consumer,{children:e=>t.jsxs(t.Fragment,{children:[t.jsx(a,{variant:"outline",text:"Information",onClick:()=>{e.toast({text:"INFORMATION TOAST! This is an example of a notification message toast.",type:o.INFO})}}),t.jsx(a,{variant:"outline",text:"Success",onClick:()=>{e.toast({text:"SUCCESS TOAST! This is an example of a success message toast.",type:o.SUCCESS})}}),t.jsx(a,{variant:"outline",text:"Warning",onClick:()=>{e.toast({text:"WARNING TOAST! This is an example of a warning message toast.",type:o.WARNING})}}),t.jsx(a,{variant:"outline",text:"Error",onClick:()=>{e.toast({text:"ERROR TOAST! This is an example of an error message toast.",type:o.ERROR})}})]})})})})]})});var r,i,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    We present a series of toasters that appear on the top area of the view. In order to make it work it is necessary to inject our custom provider wrapping all
                    components you want to be able to display it. You will then be able to operate the toaster via this provider.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Toaster>
                    <ToasterContext.Consumer>
                        {context => <>
                                <Button variant='outline' text='Information' onClick={() => {
              context.toast({
                text: 'INFORMATION TOAST! This is an example of a notification message toast.',
                type: ToastType.INFO
              });
            }} />
                                <Button variant='outline' text='Success' onClick={() => {
              context.toast({
                text: 'SUCCESS TOAST! This is an example of a success message toast.',
                type: ToastType.SUCCESS
              });
            }} />
                                <Button variant='outline' text='Warning' onClick={() => {
              context.toast({
                text: 'WARNING TOAST! This is an example of a warning message toast.',
                type: ToastType.WARNING
              });
            }} />
                                <Button variant='outline' text='Error' onClick={() => {
              context.toast({
                text: 'ERROR TOAST! This is an example of an error message toast.',
                type: ToastType.ERROR
              });
            }} />
                            </>}
                    </ToasterContext.Consumer>
                </Toaster>
            </Cell>
        </Row>
    </Grid>`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const g=["Basic"];export{s as Basic,g as __namedExportsOrder,S as default};
