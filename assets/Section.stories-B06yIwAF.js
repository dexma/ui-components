import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{S as n,G as R,R as r,C as e,t as c,P as a,T as i}from"./Breadcrumb-CkZbs_bz.js";import"./index-DRjF_FHU.js";import{m as s}from"./Chart-59uyPtwP.js";import{d,c as x}from"./Table-CeU1Pbmn.js";import"./global-CSShRRib.js";import"./index-DqsfaJzi.js";const f={title:"Section",component:n,tags:["autodocs"]},l=()=>o.jsxs(R,{fluid:!0,children:[o.jsx(r,{children:o.jsx(e,{xs:12,children:o.jsx(n,{title:"Chart layout title",onExportExcel:()=>{console.log("click onExportExcel")},onExportImage:()=>{console.log("click onExportImage")},onAddReport:()=>{console.log("click onAddReport")},children:o.jsx(c,{options:s})})})}),o.jsx(r,{children:o.jsx(e,{xs:12,children:o.jsx(n,{title:"Chart layout title",onExportExcel:()=>{console.log("click onExportExcel")},onAddReport:()=>{console.log("click onAddReport")},children:o.jsx(c,{isLoading:!0,options:s})})})})]}),t=()=>o.jsxs(R,{fluid:!0,children:[o.jsxs(r,{children:[o.jsx(e,{xs:12,children:o.jsx(a,{margin:"1rem 0 1rem 0",children:"Section data for table loading"})}),o.jsx(e,{xs:12,children:o.jsx(n,{title:"Table layout title",onExportExcel:()=>{console.log("click onExportExcel")},onExportImage:()=>{console.log("click onExportImage")},onAddReport:()=>{console.log("click onAddReport")},isLoading:!0,children:o.jsx(i,{dataSource:d,columns:x})})})]}),o.jsxs(r,{children:[o.jsx(e,{xs:12,children:o.jsx(a,{margin:"1rem 0 1rem 0",children:"Section data for table loading"})}),o.jsx(e,{xs:12,children:o.jsx(n,{title:"Table layout title",onExportExcel:()=>{console.log("click onExportExcel")},onExportImage:()=>{console.log("click onExportImage")},onAddReport:()=>{console.log("click onAddReport")},isLoading:!0,children:o.jsx(i,{isLoading:!0,dataSource:d,columns:x})})})]})]});var p,g,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Section title='Chart layout title' onExportExcel={() => {
        console.log('click onExportExcel');
      }} onExportImage={() => {
        console.log('click onExportImage');
      }} onAddReport={() => {
        console.log('click onAddReport');
      }}>
                    <Chart options={mockBasicArea} />
                </Section>
            </Cell>
        </Row>
        <Row>
            <Cell xs={12}>
                <Section title='Chart layout title' onExportExcel={() => {
        console.log('click onExportExcel');
      }} onAddReport={() => {
        console.log('click onAddReport');
      }}>
                    <Chart isLoading options={mockBasicArea} />
                </Section>
            </Cell>
        </Row>
    </Grid>`,...(m=(g=l.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var E,u,h;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Section data for table loading</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Section title='Table layout title' onExportExcel={() => {
        console.log('click onExportExcel');
      }} onExportImage={() => {
        console.log('click onExportImage');
      }} onAddReport={() => {
        console.log('click onAddReport');
      }} isLoading>
                    <Table dataSource={dataTable} columns={columnsTable} />
                </Section>
            </Cell>
        </Row>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Section data for table loading</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Section title='Table layout title' onExportExcel={() => {
        console.log('click onExportExcel');
      }} onExportImage={() => {
        console.log('click onExportImage');
      }} onAddReport={() => {
        console.log('click onAddReport');
      }} isLoading>
                    <Table isLoading dataSource={dataTable} columns={columnsTable} />
                </Section>
            </Cell>
        </Row>
    </Grid>`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const I=["SectionDataChart","SectionDataTable"];export{l as SectionDataChart,t as SectionDataTable,I as __namedExportsOrder,f as default};
