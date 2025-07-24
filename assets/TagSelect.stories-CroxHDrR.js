import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{a1 as m,a2 as g,a3 as h,G as f,R as y,C as s,P as x}from"./Breadcrumb-W8ev-o1x.js";import{e as S,d as C}from"./global-Bal8tAcl.js";import{r as T}from"./index-DRjF_FHU.js";import"./index-DqsfaJzi.js";const l=m(({dataId:a="tagSelect",placeholder:i="Type text and press enter",onChange:c,disabled:r,style:p})=>{const u=T.useContext(S)||C;return e.jsxs(e.Fragment,{children:[e.jsx(g,{$theme:u}),e.jsx(h,{"data-id":a,"data-testid":"tagSelect",mode:"tags",placeholder:i,style:p||{width:"100%"},dropdownAlign:{offset:[0,3]},disabled:r,"aria-disabled":r||!1,onChange:c})]})},"tagSelect");try{l.displayName="TagSelect",l.__docgenInfo={description:"",displayName:"TagSelect",props:{dataId:{defaultValue:null,description:"",name:"dataId",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string[]) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const b={title:"TagSelect",component:l,tags:["autodocs"]},t=()=>e.jsx(f,{fluid:!0,children:e.jsxs(y,{children:[e.jsx(s,{xs:12,children:e.jsx(x,{margin:"1rem 0 1rem 0",children:"TagSelect allows to type in tags by the user"})}),e.jsx(s,{xs:12,children:e.jsx(l,{style:{width:"100%"},onChange:a=>{console.log(a)}})})]})});var n,o,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>TagSelect allows to type in tags by the user</Paragraph>
            </Cell>
            <Cell xs={12}>
                <TagSelectComp style={{
        width: '100%'
      }} onChange={newValues => {
        console.log(newValues);
      }} />
            </Cell>
        </Row>
    </Grid>`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const P=["TagSelect"];export{t as TagSelect,P as __namedExportsOrder,b as default};
