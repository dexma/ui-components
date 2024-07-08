import{j as o}from"./polished.esm-BTw9q-eL.js";import{S as n,G as R,R as r,C as e,q as c,P as a,T as i}from"./DatePicker-DtFoBb26.js";import"./index-uubelm5h.js";import{m as s}from"./Chart-tt3aWv3S.js";import{d,c as x}from"./Table-CeU1Pbmn.js";import"./global-DpqdS--E.js";import"./get-B2oUPAyW.js";import"./_commonjs-dynamic-modules-S1e38TyK.js";import"./_baseIteratee-JV0s3RFV.js";import"./index-DfsGIHLO.js";import"./debounce-BJI3GnSe.js";import"./index-Bd6JW1JU.js";const G={title:"Section",component:n,tags:["autodocs"]},l=()=>o.jsxs(R,{fluid:!0,children:[o.jsx(r,{children:o.jsx(e,{xs:12,children:o.jsx(n,{title:"Chart layout title",onExportExcel:()=>{console.log("click onExportExcel")},onExportImage:()=>{console.log("click onExportImage")},onAddReport:()=>{console.log("click onAddReport")},children:o.jsx(c,{options:s})})})}),o.jsx(r,{children:o.jsx(e,{xs:12,children:o.jsx(n,{title:"Chart layout title",onExportExcel:()=>{console.log("click onExportExcel")},onAddReport:()=>{console.log("click onAddReport")},children:o.jsx(c,{isLoading:!0,options:s})})})})]}),t=()=>o.jsxs(R,{fluid:!0,children:[o.jsxs(r,{children:[o.jsx(e,{xs:12,children:o.jsx(a,{margin:"1rem 0 1rem 0",children:"Section data for table loading"})}),o.jsx(e,{xs:12,children:o.jsx(n,{title:"Table layout title",onExportExcel:()=>{console.log("click onExportExcel")},onExportImage:()=>{console.log("click onExportImage")},onAddReport:()=>{console.log("click onAddReport")},isLoading:!0,children:o.jsx(i,{dataSource:d,columns:x})})})]}),o.jsxs(r,{children:[o.jsx(e,{xs:12,children:o.jsx(a,{margin:"1rem 0 1rem 0",children:"Section data for table loading"})}),o.jsx(e,{xs:12,children:o.jsx(n,{title:"Table layout title",onExportExcel:()=>{console.log("click onExportExcel")},onExportImage:()=>{console.log("click onExportImage")},onAddReport:()=>{console.log("click onAddReport")},isLoading:!0,children:o.jsx(i,{isLoading:!0,dataSource:d,columns:x})})})]})]});var p,m,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Grid fluid>
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
    </Grid>`,...(g=(m=l.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var E,u,h;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`() => <Grid fluid>
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
    </Grid>`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const P=["SectionDataChart","SectionDataTable"];export{l as SectionDataChart,t as SectionDataTable,P as __namedExportsOrder,G as default};
