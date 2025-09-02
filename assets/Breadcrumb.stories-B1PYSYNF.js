var Ce=Object.defineProperty;var ke=(t,e,n)=>e in t?Ce(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var g=(t,e,n)=>ke(t,typeof e!="symbol"?e+"":e,n);import{j as u}from"./jsx-runtime-DR9Q75dM.js";import"./global-CSShRRib.js";import{a3 as _e,a4 as z,G,R as L,C as y,P as O}from"./Breadcrumb-CkZbs_bz.js";import{r as m,R as V}from"./index-DRjF_FHU.js";import"./index-DqsfaJzi.js";const le=m.createContext({}),ve={aliceblue:"9ehhb",antiquewhite:"9sgk7",aqua:"1ekf",aquamarine:"4zsno",azure:"9eiv3",beige:"9lhp8",bisque:"9zg04",black:"0",blanchedalmond:"9zhe5",blue:"73",blueviolet:"5e31e",brown:"6g016",burlywood:"8ouiv",cadetblue:"3qba8",chartreuse:"4zshs",chocolate:"87k0u",coral:"9yvyo",cornflowerblue:"3xael",cornsilk:"9zjz0",crimson:"8l4xo",cyan:"1ekf",darkblue:"3v",darkcyan:"rkb",darkgoldenrod:"776yz",darkgray:"6mbhl",darkgreen:"jr4",darkgrey:"6mbhl",darkkhaki:"7ehkb",darkmagenta:"5f91n",darkolivegreen:"3bzfz",darkorange:"9yygw",darkorchid:"5z6x8",darkred:"5f8xs",darksalmon:"9441m",darkseagreen:"5lwgf",darkslateblue:"2th1n",darkslategray:"1ugcv",darkslategrey:"1ugcv",darkturquoise:"14up",darkviolet:"5rw7n",deeppink:"9yavn",deepskyblue:"11xb",dimgray:"442g9",dimgrey:"442g9",dodgerblue:"16xof",firebrick:"6y7tu",floralwhite:"9zkds",forestgreen:"1cisi",fuchsia:"9y70f",gainsboro:"8m8kc",ghostwhite:"9pq0v",goldenrod:"8j4f4",gold:"9zda8",gray:"50i2o",green:"pa8",greenyellow:"6senj",grey:"50i2o",honeydew:"9eiuo",hotpink:"9yrp0",indianred:"80gnw",indigo:"2xcoy",ivory:"9zldc",khaki:"9edu4",lavenderblush:"9ziet",lavender:"90c8q",lawngreen:"4vk74",lemonchiffon:"9zkct",lightblue:"6s73a",lightcoral:"9dtog",lightcyan:"8s1rz",lightgoldenrodyellow:"9sjiq",lightgray:"89jo3",lightgreen:"5nkwg",lightgrey:"89jo3",lightpink:"9z6wx",lightsalmon:"9z2ii",lightseagreen:"19xgq",lightskyblue:"5arju",lightslategray:"4nwk9",lightslategrey:"4nwk9",lightsteelblue:"6wau6",lightyellow:"9zlcw",lime:"1edc",limegreen:"1zcxe",linen:"9shk6",magenta:"9y70f",maroon:"4zsow",mediumaquamarine:"40eju",mediumblue:"5p",mediumorchid:"79qkz",mediumpurple:"5r3rv",mediumseagreen:"2d9ip",mediumslateblue:"4tcku",mediumspringgreen:"1di2",mediumturquoise:"2uabw",mediumvioletred:"7rn9h",midnightblue:"z980",mintcream:"9ljp6",mistyrose:"9zg0x",moccasin:"9zfzp",navajowhite:"9zest",navy:"3k",oldlace:"9wq92",olive:"50hz4",olivedrab:"472ub",orange:"9z3eo",orangered:"9ykg0",orchid:"8iu3a",palegoldenrod:"9bl4a",palegreen:"5yw0o",paleturquoise:"6v4ku",palevioletred:"8k8lv",papayawhip:"9zi6t",peachpuff:"9ze0p",peru:"80oqn",pink:"9z8wb",plum:"8nba5",powderblue:"6wgdi",purple:"4zssg",rebeccapurple:"3zk49",red:"9y6tc",rosybrown:"7cv4f",royalblue:"2jvtt",saddlebrown:"5fmkz",salmon:"9rvci",sandybrown:"9jn1c",seagreen:"1tdnb",seashell:"9zje6",sienna:"6973h",silver:"7ir40",skyblue:"5arjf",slateblue:"45e4t",slategray:"4e100",slategrey:"4e100",snow:"9zke2",springgreen:"1egv",steelblue:"2r1kk",tan:"87yx8",teal:"pds",thistle:"8ggk8",tomato:"9yqfb",turquoise:"2j4r4",violet:"9b10u",wheat:"9ld4j",white:"9zldr",whitesmoke:"9lhpx",yellow:"9zl6o",yellowgreen:"61fzm"},d=Math.round;function R(t,e){const n=t.replace(/^[^(]*\((.*)/,"$1").replace(/\).*/,"").match(/\d*\.?\d+%?/g)||[],r=n.map(i=>parseFloat(i));for(let i=0;i<3;i+=1)r[i]=e(r[i]||0,n[i]||"",i);return n[3]?r[3]=n[3].includes("%")?r[3]/100:r[3]:r[3]=1,r}const D=(t,e,n)=>n===0?t:t/100;function w(t,e){const n=e||255;return t>n?n:t<0?0:t}class b{constructor(e){g(this,"isValid",!0);g(this,"r",0);g(this,"g",0);g(this,"b",0);g(this,"a",1);g(this,"_h");g(this,"_s");g(this,"_l");g(this,"_v");g(this,"_max");g(this,"_min");g(this,"_brightness");function n(r){return r[0]in e&&r[1]in e&&r[2]in e}if(e)if(typeof e=="string"){let i=function(s){return r.startsWith(s)};const r=e.trim();if(/^#?[A-F\d]{3,8}$/i.test(r))this.fromHexString(r);else if(i("rgb"))this.fromRgbString(r);else if(i("hsl"))this.fromHslString(r);else if(i("hsv")||i("hsb"))this.fromHsvString(r);else{const s=ve[r.toLowerCase()];s&&this.fromHexString(parseInt(s,36).toString(16).padStart(6,"0"))}}else if(e instanceof b)this.r=e.r,this.g=e.g,this.b=e.b,this.a=e.a,this._h=e._h,this._s=e._s,this._l=e._l,this._v=e._v;else if(n("rgb"))this.r=w(e.r),this.g=w(e.g),this.b=w(e.b),this.a=typeof e.a=="number"?w(e.a,1):1;else if(n("hsl"))this.fromHsl(e);else if(n("hsv"))this.fromHsv(e);else throw new Error("@ant-design/fast-color: unsupported input "+JSON.stringify(e))}setR(e){return this._sc("r",e)}setG(e){return this._sc("g",e)}setB(e){return this._sc("b",e)}setA(e){return this._sc("a",e,1)}setHue(e){const n=this.toHsv();return n.h=e,this._c(n)}getLuminance(){function e(s){const o=s/255;return o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4)}const n=e(this.r),r=e(this.g),i=e(this.b);return .2126*n+.7152*r+.0722*i}getHue(){if(typeof this._h>"u"){const e=this.getMax()-this.getMin();e===0?this._h=0:this._h=d(60*(this.r===this.getMax()?(this.g-this.b)/e+(this.g<this.b?6:0):this.g===this.getMax()?(this.b-this.r)/e+2:(this.r-this.g)/e+4))}return this._h}getSaturation(){if(typeof this._s>"u"){const e=this.getMax()-this.getMin();e===0?this._s=0:this._s=e/this.getMax()}return this._s}getLightness(){return typeof this._l>"u"&&(this._l=(this.getMax()+this.getMin())/510),this._l}getValue(){return typeof this._v>"u"&&(this._v=this.getMax()/255),this._v}getBrightness(){return typeof this._brightness>"u"&&(this._brightness=(this.r*299+this.g*587+this.b*114)/1e3),this._brightness}darken(e=10){const n=this.getHue(),r=this.getSaturation();let i=this.getLightness()-e/100;return i<0&&(i=0),this._c({h:n,s:r,l:i,a:this.a})}lighten(e=10){const n=this.getHue(),r=this.getSaturation();let i=this.getLightness()+e/100;return i>1&&(i=1),this._c({h:n,s:r,l:i,a:this.a})}mix(e,n=50){const r=this._c(e),i=n/100,s=a=>(r[a]-this[a])*i+this[a],o={r:d(s("r")),g:d(s("g")),b:d(s("b")),a:d(s("a")*100)/100};return this._c(o)}tint(e=10){return this.mix({r:255,g:255,b:255,a:1},e)}shade(e=10){return this.mix({r:0,g:0,b:0,a:1},e)}onBackground(e){const n=this._c(e),r=this.a+n.a*(1-this.a),i=s=>d((this[s]*this.a+n[s]*n.a*(1-this.a))/r);return this._c({r:i("r"),g:i("g"),b:i("b"),a:r})}isDark(){return this.getBrightness()<128}isLight(){return this.getBrightness()>=128}equals(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}clone(){return this._c(this)}toHexString(){let e="#";const n=(this.r||0).toString(16);e+=n.length===2?n:"0"+n;const r=(this.g||0).toString(16);e+=r.length===2?r:"0"+r;const i=(this.b||0).toString(16);if(e+=i.length===2?i:"0"+i,typeof this.a=="number"&&this.a>=0&&this.a<1){const s=d(this.a*255).toString(16);e+=s.length===2?s:"0"+s}return e}toHsl(){return{h:this.getHue(),s:this.getSaturation(),l:this.getLightness(),a:this.a}}toHslString(){const e=this.getHue(),n=d(this.getSaturation()*100),r=d(this.getLightness()*100);return this.a!==1?`hsla(${e},${n}%,${r}%,${this.a})`:`hsl(${e},${n}%,${r}%)`}toHsv(){return{h:this.getHue(),s:this.getSaturation(),v:this.getValue(),a:this.a}}toRgb(){return{r:this.r,g:this.g,b:this.b,a:this.a}}toRgbString(){return this.a!==1?`rgba(${this.r},${this.g},${this.b},${this.a})`:`rgb(${this.r},${this.g},${this.b})`}toString(){return this.toRgbString()}_sc(e,n,r){const i=this.clone();return i[e]=w(n,r),i}_c(e){return new this.constructor(e)}getMax(){return typeof this._max>"u"&&(this._max=Math.max(this.r,this.g,this.b)),this._max}getMin(){return typeof this._min>"u"&&(this._min=Math.min(this.r,this.g,this.b)),this._min}fromHexString(e){const n=e.replace("#","");function r(i,s){return parseInt(n[i]+n[s||i],16)}n.length<6?(this.r=r(0),this.g=r(1),this.b=r(2),this.a=n[3]?r(3)/255:1):(this.r=r(0,1),this.g=r(2,3),this.b=r(4,5),this.a=n[6]?r(6,7)/255:1)}fromHsl({h:e,s:n,l:r,a:i}){if(this._h=e%360,this._s=n,this._l=r,this.a=typeof i=="number"?i:1,n<=0){const p=d(r*255);this.r=p,this.g=p,this.b=p}let s=0,o=0,a=0;const l=e/60,h=(1-Math.abs(2*r-1))*n,c=h*(1-Math.abs(l%2-1));l>=0&&l<1?(s=h,o=c):l>=1&&l<2?(s=c,o=h):l>=2&&l<3?(o=h,a=c):l>=3&&l<4?(o=c,a=h):l>=4&&l<5?(s=c,a=h):l>=5&&l<6&&(s=h,a=c);const f=r-h/2;this.r=d((s+f)*255),this.g=d((o+f)*255),this.b=d((a+f)*255)}fromHsv({h:e,s:n,v:r,a:i}){this._h=e%360,this._s=n,this._v=r,this.a=typeof i=="number"?i:1;const s=d(r*255);if(this.r=s,this.g=s,this.b=s,n<=0)return;const o=e/60,a=Math.floor(o),l=o-a,h=d(r*(1-n)*255),c=d(r*(1-n*l)*255),f=d(r*(1-n*(1-l))*255);switch(a){case 0:this.g=f,this.b=h;break;case 1:this.r=c,this.b=h;break;case 2:this.r=h,this.b=f;break;case 3:this.r=h,this.g=c;break;case 4:this.r=f,this.g=h;break;case 5:default:this.g=h,this.b=c;break}}fromHsvString(e){const n=R(e,D);this.fromHsv({h:n[0],s:n[1],v:n[2],a:n[3]})}fromHslString(e){const n=R(e,D);this.fromHsl({h:n[0],s:n[1],l:n[2],a:n[3]})}fromRgbString(e){const n=R(e,(r,i)=>i.includes("%")?d(r/100*255):r);this.r=n[0],this.g=n[1],this.b=n[2],this.a=n[3]}}const k=2,W=.16,Se=.05,je=.05,ze=.15,ce=5,he=4,He=[{index:7,amount:15},{index:6,amount:25},{index:5,amount:30},{index:5,amount:45},{index:5,amount:65},{index:5,amount:85},{index:4,amount:90},{index:3,amount:95},{index:2,amount:97},{index:1,amount:98}];function F(t,e,n){let r;return Math.round(t.h)>=60&&Math.round(t.h)<=240?r=n?Math.round(t.h)-k*e:Math.round(t.h)+k*e:r=n?Math.round(t.h)+k*e:Math.round(t.h)-k*e,r<0?r+=360:r>=360&&(r-=360),r}function Q(t,e,n){if(t.h===0&&t.s===0)return t.s;let r;return n?r=t.s-W*e:e===he?r=t.s+W:r=t.s+Se*e,r>1&&(r=1),n&&e===ce&&r>.1&&(r=.1),r<.06&&(r=.06),Math.round(r*100)/100}function U(t,e,n){let r;return n?r=t.v+je*e:r=t.v-ze*e,r=Math.max(0,Math.min(1,r)),Math.round(r*100)/100}function Me(t,e={}){const n=[],r=new b(t),i=r.toHsv();for(let s=ce;s>0;s-=1){const o=new b({h:F(i,s,!0),s:Q(i,s,!0),v:U(i,s,!0)});n.push(o)}n.push(r);for(let s=1;s<=he;s+=1){const o=new b({h:F(i,s),s:Q(i,s),v:U(i,s)});n.push(o)}return e.theme==="dark"?He.map(({index:s,amount:o})=>new b(e.backgroundColor||"#141414").mix(n[s],o).toHexString()):n.map(s=>s.toHexString())}const A=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];A.primary=A[5];function $e(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Re(t,e){if(!t)return!1;if(t.contains)return t.contains(e);let n=e;for(;n;){if(n===t)return!0;n=n.parentNode}return!1}const Y="data-rc-order",K="data-rc-priority",Ae="rc-util-key",T=new Map;function ue({mark:t}={}){return t?t.startsWith("data-")?t:`data-${t}`:Ae}function B(t){return t.attachTo?t.attachTo:document.querySelector("head")||document.body}function Te(t){return t==="queue"?"prependQueue":t?"prepend":"append"}function I(t){return Array.from((T.get(t)||t).children).filter(e=>e.tagName==="STYLE")}function de(t,e={}){if(!$e())return null;const{csp:n,prepend:r,priority:i=0}=e,s=Te(r),o=s==="prependQueue",a=document.createElement("style");a.setAttribute(Y,s),o&&i&&a.setAttribute(K,`${i}`),n!=null&&n.nonce&&(a.nonce=n==null?void 0:n.nonce),a.innerHTML=t;const l=B(e),{firstChild:h}=l;if(r){if(o){const c=(e.styles||I(l)).filter(f=>{if(!["prepend","prependQueue"].includes(f.getAttribute(Y)))return!1;const p=Number(f.getAttribute(K)||0);return i>=p});if(c.length)return l.insertBefore(a,c[c.length-1].nextSibling),a}l.insertBefore(a,h)}else l.appendChild(a);return a}function Pe(t,e={}){let{styles:n}=e;return n||(n=I(B(e))),n.find(r=>r.getAttribute(ue(e))===t)}function qe(t,e){const n=T.get(t);if(!n||!Re(document,n)){const r=de("",e),{parentNode:i}=r;T.set(t,i),t.removeChild(r)}}function Ee(t,e,n={}){var l,h,c;const r=B(n),i=I(r),s={...n,styles:i};qe(r,s);const o=Pe(e,s);if(o)return(l=s.csp)!=null&&l.nonce&&o.nonce!==((h=s.csp)==null?void 0:h.nonce)&&(o.nonce=(c=s.csp)==null?void 0:c.nonce),o.innerHTML!==t&&(o.innerHTML=t),o;const a=de(t,s);return a.setAttribute(ue(s),e),a}function ge(t){var e;return(e=t==null?void 0:t.getRootNode)==null?void 0:e.call(t)}function Ne(t){return ge(t)instanceof ShadowRoot}function Ge(t){return Ne(t)?ge(t):null}let P={};const Le=t=>{};function Oe(t,e){}function Be(t,e){}function Ie(){P={}}function fe(t,e,n){!e&&!P[n]&&(t(!1,n),P[n]=!0)}function H(t,e){fe(Oe,t,e)}function Ve(t,e){fe(Be,t,e)}H.preMessage=Le;H.resetWarned=Ie;H.noteOnce=Ve;function De(t){return t.replace(/-(.)/g,(e,n)=>n.toUpperCase())}function We(t,e){H(t,`[@ant-design/icons] ${e}`)}function J(t){return typeof t=="object"&&typeof t.name=="string"&&typeof t.theme=="string"&&(typeof t.icon=="object"||typeof t.icon=="function")}function X(t={}){return Object.keys(t).reduce((e,n)=>{const r=t[n];switch(n){case"class":e.className=r,delete e.class;break;default:delete e[n],e[De(n)]=r}return e},{})}function q(t,e,n){return n?V.createElement(t.tag,{key:e,...X(t.attrs),...n},(t.children||[]).map((r,i)=>q(r,`${e}-${t.tag}-${i}`))):V.createElement(t.tag,{key:e,...X(t.attrs)},(t.children||[]).map((r,i)=>q(r,`${e}-${t.tag}-${i}`)))}function me(t){return Me(t)[0]}function pe(t){return t?Array.isArray(t)?t:[t]:[]}const Fe=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,Qe=t=>{const{csp:e,prefixCls:n,layer:r}=m.useContext(le);let i=Fe;n&&(i=i.replace(/anticon/g,n)),r&&(i=`@layer ${r} {
${i}
}`),m.useEffect(()=>{const s=t.current,o=Ge(s);Ee(i,"@ant-design-icons",{prepend:!r,csp:e,attachTo:o})},[])},C={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function Ue({primaryColor:t,secondaryColor:e}){C.primaryColor=t,C.secondaryColor=e||me(t),C.calculated=!!e}function Ye(){return{...C}}const x=t=>{const{icon:e,className:n,onClick:r,style:i,primaryColor:s,secondaryColor:o,...a}=t,l=m.useRef();let h=C;if(s&&(h={primaryColor:s,secondaryColor:o||me(s)}),Qe(l),We(J(e),`icon should be icon definiton, but got ${e}`),!J(e))return null;let c=e;return c&&typeof c.icon=="function"&&(c={...c,icon:c.icon(h.primaryColor,h.secondaryColor)}),q(c.icon,`svg-${c.name}`,{className:n,onClick:r,style:i,"data-icon":c.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",...a,ref:l})};x.displayName="IconReact";x.getTwoToneColors=Ye;x.setTwoToneColors=Ue;function be(t){const[e,n]=pe(t);return x.setTwoToneColors({primaryColor:e,secondaryColor:n})}function Ke(){const t=x.getTwoToneColors();return t.calculated?[t.primaryColor,t.secondaryColor]:t.primaryColor}function E(){return E=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},E.apply(this,arguments)}be(A.primary);const M=m.forwardRef((t,e)=>{const{className:n,icon:r,spin:i,rotate:s,tabIndex:o,onClick:a,twoToneColor:l,...h}=t,{prefixCls:c="anticon",rootClassName:f}=m.useContext(le),p=_e(f,c,{[`${c}-${r.name}`]:!!r.name,[`${c}-spin`]:!!i||r.name==="loading"},n);let $=o;$===void 0&&a&&($=-1);const ye=s?{msTransform:`rotate(${s}deg)`,transform:`rotate(${s}deg)`}:void 0,[xe,we]=pe(l);return m.createElement("span",E({role:"img","aria-label":r.name},h,{ref:e,tabIndex:$,onClick:a,className:p}),m.createElement(x,{icon:r,primaryColor:xe,secondaryColor:we,style:ye}))});M.displayName="AntdIcon";M.getTwoToneColor=Ke;M.setTwoToneColor=be;var Je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"};function N(){return N=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},N.apply(this,arguments)}const Xe=(t,e)=>m.createElement(M,N({},t,{ref:e,icon:Je})),Ze=m.forwardRef(Xe),lt={title:"Breadcrumb",component:z,tags:["autodocs"]},j=(t,e)=>{t.preventDefault(),console.log(`Click in ${e}`)},et=[{title:u.jsxs(u.Fragment,{children:[u.jsx(Ze,{}),u.jsx("span",{children:"Home"})]})},{title:u.jsx("a",{href:"#",onClick:t=>j(t,"Application Center"),children:"Application Center"})},{title:u.jsx("a",{href:"#",onClick:t=>j(t,"Application List"),children:"Application List"})},{title:"An Application"}],_=()=>u.jsx(G,{fluid:!0,children:u.jsxs(L,{children:[u.jsx(y,{xs:12,children:u.jsx(O,{margin:"1rem 0 1rem 0",children:"A simple breadcrumb display the current location within a hierarchy. And allow going back to states higher up in the hierarchy."})}),u.jsx(y,{xs:12,children:u.jsx(z,{items:et})})]})}),v=()=>u.jsx(G,{fluid:!0,children:u.jsxs(L,{children:[u.jsx(y,{xs:12,children:u.jsx(O,{margin:"1rem 0 1rem 0",children:"A breadcrumb with param to allow manage parameters about main location."})}),u.jsx(y,{xs:12,children:u.jsx(z,{items:[{title:"Groups"},{title:":id",onClick:()=>{console.log("Click in Group #1")}}],params:{id:1}})})]})}),tt=[{key:"1",label:"General"},{key:"2",label:"Edit"},{key:"3",label:"Duplicate"}],S=()=>u.jsx(G,{fluid:!0,children:u.jsxs(L,{children:[u.jsx(y,{xs:12,children:u.jsx(O,{margin:"1rem 0 1rem 0",children:"A breadcrumb with menu display current location within hierarchy and allow choose menu option."})}),u.jsx(y,{xs:12,children:u.jsx(z,{items:[{title:"Users"},{title:u.jsx("a",{href:"#",onClick:t=>j(t,"Application Profile"),children:"Profile"})},{title:u.jsx("a",{href:"#",onClick:t=>j(t,"General"),children:"General"}),menu:{items:tt}},{title:"Permissions"}]})})]})});var Z,ee,te;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`() => <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin='1rem 0 1rem 0'>
          A simple breadcrumb display the current location within a hierarchy. And allow going back to states higher up in the hierarchy.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Breadcrumb items={items} />
      </Cell>
    </Row>
  </Grid>`,...(te=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,ie;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`() => <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin='1rem 0 1rem 0'>
          A breadcrumb with param to allow manage parameters about main location.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Breadcrumb items={[{
        title: 'Groups'
      }, {
        title: ':id',
        onClick: () => {
          console.log('Click in Group #1');
        }
      }]} params={{
        id: 1
      }} />
      </Cell>
    </Row>
  </Grid>`,...(ie=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,oe,ae;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`() => <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin='1rem 0 1rem 0'>
          A breadcrumb with menu display current location within hierarchy and allow choose menu option.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Breadcrumb items={[{
        title: 'Users'
      }, {
        title: <a href="#" onClick={e => onClick(e, 'Application Profile')}>Profile</a>
      }, {
        title: <a href="#" onClick={e => onClick(e, 'General')}>General</a>,
        menu: {
          items: menuItems
        }
      }, {
        title: 'Permissions'
      }]} />
      </Cell>
    </Row>
  </Grid>`,...(ae=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};const ct=["Basic","WithParams","WithDropdownMenu"];export{_ as Basic,S as WithDropdownMenu,v as WithParams,ct as __namedExportsOrder,lt as default};
