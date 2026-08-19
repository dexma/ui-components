import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{d as R,a as m}from"./global--igbgGtP.js";import{X as n,G as i,R as o,C as d}from"./Breadcrumb-CKLegHK5.js";import"./index-DRjF_FHU.js";import"./index-DqsfaJzi.js";const P={title:"Typography",tags:["autodocs"],component:n},N=["h1","h2","h3","h4","h5","h6","xlarge","large","medium","small"],q=["light","normal","medium","semiBold","bold"],c=R.div`
    padding: 8px 0;
    border-bottom: 1px solid ${a=>a.theme.color.gray200};
    .meta {
        font-size: 0.75rem;
        color: ${a=>a.theme.color.gray500};
    }
`,t={render:()=>e.jsx(i,{children:N.map(a=>e.jsx(o,{children:e.jsx(d,{children:e.jsxs(c,{theme:m,children:[e.jsx(n,{variant:a,children:"The quick brown fox jumps over the lazy dog"}),e.jsxs("div",{className:"meta",children:['variant="',a,'"']})]})})},a))})},l={render:()=>e.jsx(i,{children:q.map(a=>e.jsx(o,{children:e.jsx(d,{children:e.jsxs(c,{theme:m,children:[e.jsx(n,{variant:"large",weight:a,children:"The quick brown fox jumps over the lazy dog"}),e.jsxs("div",{className:"meta",children:['weight="',a,'"']})]})})},a))})},r={render:()=>e.jsx(i,{children:["1111111111","0000000000","1234567890","1010101010"].map(a=>e.jsx(o,{children:e.jsx(d,{children:e.jsx(n,{variant:"large",children:a})})},a))})},s={render:()=>e.jsx(i,{children:[{label:"latin",sample:"Consumption, energía, français, português"},{label:"latin-ext (pl_PL)",sample:"Zużycie energii — łąka, ćma, źrebię, świeża"},{label:"cyrillic (bg_BG)",sample:"Потребление на енергия"},{label:"CJK (zh_CN) — system fallback",sample:"能源消耗"}].map(({label:a,sample:_})=>e.jsx(o,{children:e.jsx(d,{children:e.jsxs(c,{theme:m,children:[e.jsx(n,{variant:"large",children:_}),e.jsx("div",{className:"meta",children:a})]})})},a))})};var p,h,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Grid>
            {variants.map(variant => <Row key={variant}>
                    <Cell>
                        <StyledToken theme={defaultTheme}>
                            <Typography variant={variant}>The quick brown fox jumps over the lazy dog</Typography>
                            <div className='meta'>variant=&quot;{variant}&quot;</div>
                        </StyledToken>
                    </Cell>
                </Row>)}
        </Grid>
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,y,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Grid>
            {weights.map(weight => <Row key={weight}>
                    <Cell>
                        <StyledToken theme={defaultTheme}>
                            <Typography variant='large' weight={weight}>
                                The quick brown fox jumps over the lazy dog
                            </Typography>
                            <div className='meta'>weight=&quot;{weight}&quot;</div>
                        </StyledToken>
                    </Cell>
                </Row>)}
        </Grid>
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var b,T,j,v,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Grid>
            {['1111111111', '0000000000', '1234567890', '1010101010'].map(digits => <Row key={digits}>
                    <Cell>
                        <Typography variant='large'>{digits}</Typography>
                    </Cell>
                </Row>)}
        </Grid>
}`,...(j=(T=r.parameters)==null?void 0:T.docs)==null?void 0:j.source},description:{story:"Montserrat's default figures are proportional, so the library sets `font-feature-settings: 'tnum'`\nglobally. These columns must stay visually aligned — if they do not, tabular figures were lost.",...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var w,k,C,S,G;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Grid>
            {[{
      label: 'latin',
      sample: 'Consumption, energía, français, português'
    }, {
      label: 'latin-ext (pl_PL)',
      sample: 'Zużycie energii — łąka, ćma, źrebię, świeża'
    }, {
      label: 'cyrillic (bg_BG)',
      sample: 'Потребление на енергия'
    }, {
      label: 'CJK (zh_CN) — system fallback',
      sample: '能源消耗'
    }].map(({
      label,
      sample
    }) => <Row key={label}>
                    <Cell>
                        <StyledToken theme={defaultTheme}>
                            <Typography variant='large'>{sample}</Typography>
                            <div className='meta'>{label}</div>
                        </StyledToken>
                    </Cell>
                </Row>)}
        </Grid>
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source},description:{story:"Shipped subsets: latin, latin-ext (pl_PL), cyrillic (bg_BG). zh_CN falls back to a system CJK face.",...(G=(S=s.parameters)==null?void 0:S.docs)==null?void 0:G.description}}};const E=["Variants","Weights","TabularFigures","Subsets"];export{s as Subsets,r as TabularFigures,t as Variants,l as Weights,E as __namedExportsOrder,P as default};
