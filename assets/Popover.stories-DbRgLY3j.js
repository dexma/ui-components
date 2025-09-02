import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as h}from"./index-DRjF_FHU.js";import{p as o,G as f,R as b,C as s,P as a,B as t}from"./Breadcrumb-CkZbs_bz.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const _={title:"Popover",component:o,tags:["autodocs"]},n=()=>e.jsx(f,{fluid:!0,children:e.jsxs(b,{children:[e.jsx(s,{xs:12,children:e.jsx(a,{margin:"1rem 0 1rem 0",children:"A simple text popup tip, wrapping ant design tooltip. For further details and documentation visit Ant Design site. Remember that the Popover needs to wrap further children in order to operate."})}),e.jsxs(s,{children:[e.jsx(o,{title:"Popover",trigger:"click",children:e.jsx(t,{text:"Click me","aria-label":"Click to open popover"})}),e.jsx(o,{title:"Popover",content:e.jsx(a,{margin:"1rem 0 1rem 0",children:"A popover content may be a simple text or a more complex component."}),children:e.jsx(t,{kind:"iconTextButton",text:"Test",iconBefore:"vader","aria-label":"Hover it to open popover"})}),e.jsx(o,{placement:"top",content:e.jsx(a,{margin:"1rem 0 1rem 0",children:"A popover may not have a title, but only content to be displayed."}),children:e.jsx(t,{kind:"iconTextButton",text:"Test top",iconBefore:"vader",variant:"secondary","aria-label":"Hover it to open popover on the top"})}),e.jsx(o,{title:"Popover right",placement:"right",children:e.jsx(t,{kind:"iconButton",iconBefore:"help",isCircle:!0,iconAriaLabel:"Hover it to open popover on the right"})})]})]})}),r=()=>{const[l,c]=h.useState(!1),[B,p]=h.useState(!1),y=()=>{c(!1),p(!1)},H=d=>{p(d),c(!1)},w=d=>{p(!1),c(d)},T=e.jsx("div",{children:"This is hover content."}),A=e.jsx("div",{children:"This is click content."});return e.jsx(o,{style:{width:500},content:T,title:"Hover title",trigger:"hover",open:B,onOpenChange:H,children:e.jsx(o,{content:e.jsxs("div",{children:[A,e.jsx("button",{type:"button",onClick:y,children:"Close"})]}),title:"Click title",trigger:"click",open:l,onOpenChange:w,children:e.jsx(t,{text:"Hover and click",variant:"primary","aria-label":"Click or hover it to open popover"})})})},i=l=>e.jsx(f,{fluid:!0,children:e.jsxs(b,{children:[e.jsx(s,{xs:12,children:e.jsx(a,{margin:"1rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Popover."})}),e.jsx(s,{children:e.jsx(o,{...l,children:e.jsx("span",{children:"Test"})})})]})});var v,m,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    A simple text popup tip, wrapping ant design tooltip. For further details and documentation visit Ant Design site. Remember that the Popover needs to wrap
                    further children in order to operate.
                </Paragraph>
            </Cell>
            <Cell>
                <Popover title='Popover' trigger='click'>
                    <Button text='Click me' aria-label='Click to open popover' />
                </Popover>
                <Popover title='Popover' content={<Paragraph margin='1rem 0 1rem 0'>A popover content may be a simple text or a more complex component.</Paragraph>}>
                    <Button kind='iconTextButton' text='Test' iconBefore='vader' aria-label='Hover it to open popover' />
                </Popover>
                <Popover placement='top' content={<Paragraph margin='1rem 0 1rem 0'>A popover may not have a title, but only content to be displayed.</Paragraph>}>
                    <Button kind='iconTextButton' text='Test top' iconBefore='vader' variant='secondary' aria-label='Hover it to open popover on the top' />
                </Popover>
                <Popover title='Popover right' placement='right'>
                    <Button kind='iconButton' iconBefore='help' isCircle iconAriaLabel='Hover it to open popover on the right' />
                </Popover>
            </Cell>
        </Row>
    </Grid>`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,x,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hide = () => {
    setClicked(false);
    setHovered(false);
  };
  const handleHoverChange = (open: boolean) => {
    setHovered(open);
    setClicked(false);
  };
  const handleClickChange = (open: boolean) => {
    setHovered(false);
    setClicked(open);
  };
  const hoverContent = <div>This is hover content.</div>;
  const clickContent = <div>This is click content.</div>;
  return <Popover style={{
    width: 500
  }} content={hoverContent} title='Hover title' trigger='hover' open={hovered} onOpenChange={handleHoverChange}>
            <Popover content={<div>
                        {clickContent}
                        <button type='button' onClick={hide}>
                            Close
                        </button>
                    </div>} title='Click title' trigger='click' open={clicked} onOpenChange={handleClickChange}>
                <Button text='Hover and click' variant='primary' aria-label='Click or hover it to open popover' />
            </Popover>
        </Popover>;
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var P,k,j;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes) => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Popover.</Paragraph>
            </Cell>
            <Cell>
                <Popover {...args}>
                    <span>Test</span>
                </Popover>
            </Cell>
        </Row>
    </Grid>`,...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const D=["Basic","PopoverClickHover","Playground"];export{n as Basic,i as Playground,r as PopoverClickHover,D as __namedExportsOrder,_ as default};
