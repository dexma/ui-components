import{j as u}from"./jsx-runtime-DR9Q75dM.js";import{a as B,g as T,d as w}from"./global-C5EY7ICf.js";import{r as U}from"./index-DRjF_FHU.js";import{G as $,R as G,C as O,P as M}from"./DatePicker-Dwnz1syV.js";import"./index-DqsfaJzi.js";var z=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(n){e.addRange(n)}),t&&t.focus()}},q=z,P={"text/plain":"Text","text/html":"Url",default:"Text"},K="Copy to clipboard: #{key}, Enter";function L(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function W(e,t){var r,o,n,i,c,a,s=!1;t||(t={}),r=t.debug||!1;try{n=q(),i=document.createRange(),c=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(l){if(l.stopPropagation(),t.format)if(l.preventDefault(),typeof l.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var p=P[t.format]||P.default;window.clipboardData.setData(p,e)}else l.clipboardData.clearData(),l.clipboardData.setData(t.format,e);t.onCopy&&(l.preventDefault(),t.onCopy(l.clipboardData))}),document.body.appendChild(a),i.selectNodeContents(a),c.addRange(i);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");s=!0}catch(l){r&&console.error("unable to copy using execCommand: ",l),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(p){r&&console.error("unable to copy using clipboardData: ",p),r&&console.error("falling back to prompt"),o=L("message"in t?t.message:K),window.prompt(o,e)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(i):c.removeAllRanges()),a&&document.body.removeChild(a),n()}return s}var F=W,g={};function h(e){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(e)}Object.defineProperty(g,"__esModule",{value:!0});g.CopyToClipboard=void 0;var y=k(U),H=k(F),X=["text","onCopy","options","children"];function k(e){return e&&e.__esModule?e:{default:e}}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_(Object(r),!0).forEach(function(o){x(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function J(e,t){if(e==null)return{};var r=Q(e,t),o,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function Q(e,t){if(e==null)return{};var r={},o=Object.keys(e),n,i;for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Y(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Z(e,t,r){return Y(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}function v(e,t){return v=Object.setPrototypeOf||function(o,n){return o.__proto__=n,o},v(e,t)}function te(e){var t=oe();return function(){var o=b(e),n;if(t){var i=b(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return re(this,n)}}function re(e,t){if(t&&(h(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function E(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},b(e)}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=function(e){ee(r,e);var t=te(r);function r(){var o;V(this,r);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return o=t.call.apply(t,[this].concat(i)),x(E(o),"onClick",function(a){var s=o.props,f=s.text,l=s.onCopy,p=s.children,I=s.options,d=y.default.Children.only(p),N=(0,H.default)(f,I);l&&l(f,N),d&&d.props&&typeof d.props.onClick=="function"&&d.props.onClick(a)}),o}return Z(r,[{key:"render",value:function(){var n=this.props;n.text,n.onCopy,n.options;var i=n.children,c=J(n,X),a=y.default.Children.only(i);return y.default.cloneElement(a,j(j({},c),{},{onClick:this.onClick}))}}]),r}(y.default.PureComponent);g.CopyToClipboard=A;x(A,"defaultProps",{onCopy:void 0,options:void 0});var ne=g,C=ne.CopyToClipboard;C.CopyToClipboard=C;var ae=C;const de={title:"Colors",tags:["autodocs"],component:u.jsx("div",{})},ie=B.div`
    width: 100%;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 20px 0px 20px 0px;
    .background {
        background: ${e=>T(e.theme.color,e.color)};
        width: 60px;
        height: 60px;
        margin: 0 auto;
        display: block;
        word-wrap: break-word;
        background-clip: border-box;
        border-radius: 50%;
        overflow: hidden;
        &:hover {
            box-shadow: 1px 2px 7px 0 rgba(0, 0, 0, 0.5);
        }
    }
    .text {
        font-size: 0.75rem;
    }
`,ce=({theme:e,text:t,color:r})=>u.jsx(ae.CopyToClipboard,{text:t,onCopy:()=>{alert(`Copied ${t} successfully!`)},children:u.jsxs(ie,{color:r,children:[u.jsx("span",{className:"background"}),u.jsxs("span",{className:"text",children:[t," - ",T(e.color,r)]})]})}),m=()=>u.jsx($,{fluid:!0,children:u.jsxs(G,{children:[u.jsx(O,{xs:12,children:u.jsx(M,{margin:"1rem 0 1rem 0",children:"Base color palette"})}),Object.keys(w.color).map(e=>u.jsxs(O,{xs:2,children:[u.jsx(ce,{color:e,text:e,theme:w})," "]},e))]})});var R,D,S;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`() => <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Base color palette</Paragraph>
            </Cell>
            {Object.keys(defaultTheme.color).map(color => <Cell xs={2} key={color}>
                    <Color color={color} text={color} theme={defaultTheme} />{' '}
                </Cell>)}
        </Row>
    </Grid>`,...(S=(D=m.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const ye=["Basic"];export{m as Basic,ye as __namedExportsOrder,de as default};
