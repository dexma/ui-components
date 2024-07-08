import{j as e}from"./polished.esm-BTw9q-eL.js";import{r as h}from"./index-uubelm5h.js";import{m as t,G as k,R as y,C as a,P as s,B as o}from"./DatePicker-DtFoBb26.js";import"./global-DpqdS--E.js";import"./get-B2oUPAyW.js";import"./_commonjs-dynamic-modules-S1e38TyK.js";import"./_baseIteratee-JV0s3RFV.js";import"./index-DfsGIHLO.js";import"./debounce-BJI3GnSe.js";import"./index-Bd6JW1JU.js";const J={title:"Popover",component:t,tags:["autodocs"]},n=()=>e.jsx(k,{fluid:!0,children:e.jsxs(y,{children:[e.jsx(a,{xs:12,children:e.jsx(s,{margin:"1rem 0 1rem 0",children:"A simple text popup tip, wrapping ant design tooltip. For further details and documentation visit Ant Design site. Remember that the Popover needs to wrap further children in order to operate."})}),e.jsxs(a,{children:[e.jsx(t,{title:"Popover",trigger:"click",children:e.jsx(o,{text:"Click me"})}),e.jsx(t,{title:"Popover",content:e.jsx(s,{margin:"1rem 0 1rem 0",children:"A popover content may be a simple text or a more complex component."}),children:e.jsx(o,{text:"Test",iconBefore:"vader"})}),e.jsx(t,{placement:"top",content:e.jsx(s,{margin:"1rem 0 1rem 0",children:"A popover may not have a title, but only content to be displayed."}),children:e.jsx(o,{text:"Test top",iconBefore:"vader",variant:"secondary"})}),e.jsx(t,{title:"Popover right",placement:"right",children:e.jsx(o,{iconBefore:"help",isCircle:!0})})]})]})}),r=()=>{const[c,l]=h.useState(!1),[b,p]=h.useState(!1),B=()=>{l(!1),p(!1)},w=d=>{p(d),l(!1)},H=d=>{p(!1),l(d)},T=e.jsx("div",{children:"This is hover content."}),A=e.jsx("div",{children:"This is click content."});return e.jsx(t,{style:{width:500},content:T,title:"Hover title",trigger:"hover",open:b,onOpenChange:w,children:e.jsx(t,{content:e.jsxs("div",{children:[A,e.jsx("button",{type:"button",onClick:B,children:"Close"})]}),title:"Click title",trigger:"click",open:c,onOpenChange:H,children:e.jsx(o,{variant:"primary",children:"Hover and click"})})})},i=c=>e.jsx(k,{fluid:!0,children:e.jsxs(y,{children:[e.jsx(a,{xs:12,children:e.jsx(s,{margin:"1rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Popover."})}),e.jsx(a,{children:e.jsx(t,{...c,children:e.jsx("span",{children:"Test"})})})]})});var m,v,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    A simple text popup tip, wrapping ant design tooltip. For further details and documentation visit Ant Design site. Remember that the Popover needs to wrap
                    further children in order to operate.
                </Paragraph>
            </Cell>
            <Cell>
                <Popover title='Popover' trigger='click'>
                    <Button text='Click me' />
                </Popover>
                <Popover title='Popover' content={<Paragraph margin='1rem 0 1rem 0'>A popover content may be a simple text or a more complex component.</Paragraph>}>
                    <Button text='Test' iconBefore='vader' />
                </Popover>
                <Popover placement='top' content={<Paragraph margin='1rem 0 1rem 0'>A popover may not have a title, but only content to be displayed.</Paragraph>}>
                    <Button text='Test top' iconBefore='vader' variant='secondary' />
                </Popover>
                <Popover title='Popover right' placement='right'>
                    <Button iconBefore='help' isCircle />
                </Popover>
            </Cell>
        </Row>
    </Grid>`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var u,x,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
                <Button variant='primary'>Hover and click</Button>
            </Popover>
        </Popover>;
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var P,j,f;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes) => <Grid fluid>
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
    </Grid>`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const X=["Basic","PopoverClickHover","Playground"];export{n as Basic,i as Playground,r as PopoverClickHover,X as __namedExportsOrder,J as default};
