import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{U as s,G as i,R as n,C as r,P as d}from"./Breadcrumb-CkZbs_bz.js";import"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const f=[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",children:[{title:"leaf",key:"0-0-0-0"},{title:"leaf",key:"0-0-0-1"}]},{title:"parent 1-1",key:"0-0-1",children:[{title:"sss",key:"0-0-1-0"}]}]}],D={title:"Tree",component:s,tags:["autodocs"]},a=()=>e.jsx(i,{fluid:!0,children:e.jsxs(n,{children:[e.jsx(r,{xs:12,children:e.jsx(d,{margin:"1rem 0 1rem 0",children:"A simple tree that provides information about parents and your children."})}),e.jsx(r,{xs:12,children:e.jsx(s,{treeData:f,defaultExpandedKeys:["0-0-0","0-0-1"]})})]})}),t=()=>e.jsx(i,{fluid:!0,children:e.jsxs(n,{children:[e.jsx(r,{xs:12,children:e.jsx(d,{margin:"1rem 0 1rem 0",children:"A checkable tree that allows you to select any item you want."})}),e.jsx(r,{xs:12,children:e.jsx(s,{checkable:!0,treeData:f,defaultExpandedKeys:["0-0-0","0-0-1"]})})]})}),l=()=>e.jsx(i,{fluid:!0,children:e.jsxs(n,{children:[e.jsx(r,{xs:12,children:e.jsx(d,{margin:"1rem 0 1rem 0",children:"A checkable tree that allows you to select any item you want."})}),e.jsx(r,{xs:12,children:e.jsx(s,{checkable:!0,treeData:[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",disabled:!0,children:[{title:"leaf",key:"0-0-0-0"},{title:"leaf",key:"0-0-0-1",disableCheckbox:!0}]},{title:"parent 1-1",key:"0-0-1",children:[{title:"sss",key:"0-0-1-0"}]}]}],defaultExpandedKeys:["0-0-0","0-0-1"],defaultCheckedKeys:["0-0-1"]})})]})});var c,o,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin='1rem 0 1rem 0'>A simple tree that provides information about parents and your children.</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Tree treeData={treeData} defaultExpandedKeys={['0-0-0', '0-0-1']} />
      </Cell>
    </Row>
  </Grid>`,...(h=(o=a.parameters)==null?void 0:o.docs)==null?void 0:h.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin='1rem 0 1rem 0'>A checkable tree that allows you to select any item you want.</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Tree checkable treeData={treeData} defaultExpandedKeys={['0-0-0', '0-0-1']} />
      </Cell>
    </Row>
  </Grid>`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,y,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin='1rem 0 1rem 0'>A checkable tree that allows you to select any item you want.</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Tree checkable treeData={[{
        title: 'parent 1',
        key: '0-0',
        children: [{
          title: 'parent 1-0',
          key: '0-0-0',
          disabled: true,
          children: [{
            title: 'leaf',
            key: '0-0-0-0'
          }, {
            title: 'leaf',
            key: '0-0-0-1',
            disableCheckbox: true
          }]
        }, {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [{
            title: "sss",
            key: '0-0-1-0'
          }]
        }]
      }]} defaultExpandedKeys={['0-0-0', '0-0-1']} defaultCheckedKeys={['0-0-1']} />
      </Cell>
    </Row>
  </Grid>`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const R=["Basic","Checkable","Disabled"];export{a as Basic,t as Checkable,l as Disabled,R as __namedExportsOrder,D as default};
