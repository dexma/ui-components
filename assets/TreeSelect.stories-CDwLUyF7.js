import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{V as s,G as i,R as n,C as l,P as c}from"./Breadcrumb-CkZbs_bz.js";import"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const o=[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"leaf1"},{value:"leaf2",title:"leaf2"},{value:"leaf3",title:"leaf3"},{value:"leaf4",title:"leaf4"},{value:"leaf5",title:"leaf5"},{value:"leaf6",title:"leaf6"}]},{value:"parent 1-1",title:"parent 1-1",children:[{value:"leaf11",title:"leaf11"}]}]}],R={title:"TreeSelect",component:s,tags:["autodocs"]},r=()=>e.jsx(i,{fluid:!0,children:e.jsxs(n,{children:[e.jsx(l,{xs:12,children:e.jsx(c,{margin:"1rem 0 1rem 0",children:"A simple tree select allow to select a single item."})}),e.jsx(l,{xs:12,children:e.jsx(s,{treeData:o,treeDefaultExpandAll:!0})})]})}),t=()=>e.jsx(i,{fluid:!0,children:e.jsxs(n,{children:[e.jsx(l,{xs:12,children:e.jsx(c,{margin:"1rem 0 1rem 0",children:"A tree multiple selection allow to select multiple items."})}),e.jsx(l,{xs:12,children:e.jsx(s,{multiple:!0,treeData:o,treeDefaultExpandAll:!0})})]})}),a=()=>e.jsx(i,{fluid:!0,children:e.jsxs(n,{children:[e.jsx(l,{xs:12,children:e.jsx(c,{margin:"1rem 0 1rem 0",children:"A tree checkable allow to check multiple items."})}),e.jsx(l,{xs:12,children:e.jsx(s,{treeCheckable:!0,treeData:o,treeDefaultExpandAll:!0})})]})});var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A simple tree select allow to select a single item.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <TreeSelect treeData={treeData} treeDefaultExpandAll />
            </Cell>
        </Row>
    </Grid>`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,x,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A tree multiple selection allow to select multiple items.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <TreeSelect multiple treeData={treeData} treeDefaultExpandAll />
            </Cell>
        </Row>
    </Grid>`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,j,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A tree checkable allow to check multiple items.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <TreeSelect treeCheckable treeData={treeData} treeDefaultExpandAll />
            </Cell>
        </Row>
    </Grid>`,...(g=(j=a.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};const S=["Basic","Multiple","Checkable"];export{r as Basic,a as Checkable,t as Multiple,S as __namedExportsOrder,R as default};
