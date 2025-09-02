import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{Q as r,G as T,R as h,C as n,P as x,B as g}from"./Breadcrumb-CkZbs_bz.js";import{r as y}from"./index-DRjF_FHU.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const E={title:"Tooltip",component:r,tags:["autodocs"]},l=i=>{const[j,s]=y.useState(!1),{tooltipTitle:C,buttonText:b,buttonIcon:f,position:w}=i,P=R=>{R.key==="Enter"&&(s(!0),setTimeout(()=>s(!1),2e3))};return t.jsx(r,{title:C,open:j,position:w,onOpenChange:s,children:t.jsx(g,{kind:"iconTextButton",text:b,iconBefore:f,onKeyDown:P})})},o=()=>t.jsx(T,{fluid:!0,children:t.jsxs(h,{children:[t.jsx(n,{xs:12,children:t.jsx(x,{margin:"1rem 0 1rem 0",children:"A simple text popup tip, wrapping ant design tooltip. For further details and documentation visit Ant Design site. Remember that the Tooltip needs to wrap further children in order to operate."})}),t.jsxs(n,{children:[t.jsx(r,{title:"Tooltip",trigger:"click",children:t.jsx(g,{text:"Click me"})}),t.jsx(l,{tooltipTitle:"Tooltip",buttonText:"Test",buttonIcon:"vader"}),t.jsx(l,{tooltipTitle:"Tooltip top",buttonText:"Test top",buttonIcon:"vader"}),t.jsx(l,{tooltipTitle:"Tooltip right",buttonIcon:"help",position:"right"})]})]})}),e=i=>t.jsx(T,{fluid:!0,children:t.jsxs(h,{children:[t.jsx(n,{xs:12,children:t.jsx(x,{margin:"1rem 0 1rem 0",children:"Use the Controls on the section below to add your own props to this Tooltip."})}),t.jsx(n,{children:t.jsx(r,{...i,children:t.jsx("span",{children:"Test"})})})]})});var p,a,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    A simple text popup tip, wrapping ant design tooltip. For further details and documentation visit Ant Design site. Remember that the Tooltip needs to wrap
                    further children in order to operate.
                </Paragraph>
            </Cell>
            <Cell>
                <Tooltip title='Tooltip' trigger='click'>
                    <Button text='Click me' />
                </Tooltip>
                <TooltipComponent tooltipTitle='Tooltip' buttonText='Test' buttonIcon='vader' />
                <TooltipComponent tooltipTitle='Tooltip top' buttonText='Test top' buttonIcon='vader' />
                <TooltipComponent tooltipTitle='Tooltip right' buttonIcon='help' position='right' />
            </Cell>
        </Row>
    </Grid>`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var c,m,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`(args: TooltipPropsExtended) => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Tooltip.</Paragraph>
            </Cell>
            <Cell>
                <Tooltip {...args}>
                    <span>Test</span>
                </Tooltip>
            </Cell>
        </Row>
    </Grid>`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const A=["Basic","Playground"];export{o as Basic,e as Playground,A as __namedExportsOrder,E as default};
