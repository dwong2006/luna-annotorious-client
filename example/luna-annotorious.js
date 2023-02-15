(function(E,J){typeof exports=="object"&&typeof module<"u"?module.exports=J():typeof define=="function"&&define.amd?define(J):(E=typeof globalThis<"u"?globalThis:E||self,E.LunaAnnotorious=J())})(this,function(){"use strict";function E(){}const J=t=>t;function xe(t,e){for(const n in e)t[n]=e[n];return t}function Zt(t){return t()}function It(){return Object.create(null)}function F(t){t.forEach(Zt)}function bt(t){return typeof t=="function"}function wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function De(t){return Object.keys(t).length===0}function Pe(t){return t&&bt(t.destroy)?t.destroy:E}const Ot=typeof window<"u";let Be=Ot?()=>window.performance.now():()=>Date.now(),kt=Ot?t=>requestAnimationFrame(t):E;const K=new Set;function Ut(t){K.forEach(e=>{e.c(t)||(K.delete(e),e.f())}),K.size!==0&&kt(Ut)}function He(t){let e;return K.size===0&&kt(Ut),{promise:new Promise(n=>{K.add(e={c:t,f:n})}),abort(){K.delete(e)}}}function w(t,e){t.appendChild(e)}function Kt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Re(t){const e=D("style");return $e(Kt(t),e),e.sheet}function $e(t,e){w(t.head||t,e)}function L(t,e,n){t.insertBefore(e,n||null)}function N(t){t.parentNode.removeChild(t)}function ze(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function D(t){return document.createElement(t)}function je(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function V(){return M(" ")}function Yt(){return M("")}function Q(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function S(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Xt(t,e){for(const n in e)S(t,n,e[n])}function Fe(t){return Array.from(t.childNodes)}function Y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function qt(t,e,n){t.classList[n?"add":"remove"](e)}function Gt(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}const ct=new Map;let ut=0;function Ve(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function We(t,e){const n={stylesheet:Re(e),rules:{}};return ct.set(t,n),n}function Jt(t,e,n,o,r,i,s,a=0){const c=16.666/o;let l=`{
`;for(let p=0;p<=1;p+=c){const m=e+(n-e)*i(p);l+=p*100+`%{${s(m,1-m)}}
`}const d=l+`100% {${s(n,1-n)}}
}`,_=`__svelte_${Ve(d)}_${a}`,f=Kt(t),{stylesheet:h,rules:u}=ct.get(f)||We(f,t);u[_]||(u[_]=!0,h.insertRule(`@keyframes ${_} ${d}`,h.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${_} ${o}ms linear ${r}ms 1 both`,ut+=1,_}function Ze(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),r=n.length-o.length;r&&(t.style.animation=o.join(", "),ut-=r,ut||Ie())}function Ie(){kt(()=>{ut||(ct.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),ct.clear())})}let tt;function et(t){tt=t}function Oe(){if(!tt)throw new Error("Function called outside component initialization");return tt}function Qt(){const t=Oe();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Gt(e,n,{cancelable:o});return r.slice().forEach(s=>{s.call(t,i)}),!i.defaultPrevented}return!0}}const nt=[],Et=[],ft=[],te=[],ee=Promise.resolve();let Ct=!1;function ne(){Ct||(Ct=!0,ee.then(re))}function Ue(){return ne(),ee}function rt(t){ft.push(t)}const St=new Set;let dt=0;function re(){const t=tt;do{for(;dt<nt.length;){const e=nt[dt];dt++,et(e),Ke(e.$$)}for(et(null),nt.length=0,dt=0;Et.length;)Et.pop()();for(let e=0;e<ft.length;e+=1){const n=ft[e];St.has(n)||(St.add(n),n())}ft.length=0}while(nt.length);for(;te.length;)te.pop()();Ct=!1,St.clear(),et(t)}function Ke(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}let ot;function Ye(){return ot||(ot=Promise.resolve(),ot.then(()=>{ot=null})),ot}function At(t,e,n){t.dispatchEvent(Gt(`${e?"intro":"outro"}${n}`))}const pt=new Set;let $;function W(){$={r:0,c:[],p:$}}function Z(){$.r||F($.c),$=$.p}function k(t,e){t&&t.i&&(pt.delete(t),t.i(e))}function A(t,e,n,o){if(t&&t.o){if(pt.has(t))return;pt.add(t),$.c.push(()=>{pt.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}const Xe={duration:0};function oe(t,e,n,o){let r=e(t,n),i=o?0:1,s=null,a=null,c=null;function l(){c&&Ze(t,c)}function d(f,h){const u=f.b-i;return h*=Math.abs(u),{a:i,b:f.b,d:u,duration:h,start:f.start,end:f.start+h,group:f.group}}function _(f){const{delay:h=0,duration:u=300,easing:y=J,tick:p=E,css:m}=r||Xe,v={start:Be()+h,b:f};f||(v.group=$,$.r+=1),s||a?a=v:(m&&(l(),c=Jt(t,i,f,u,h,y,m)),f&&p(0,1),s=d(v,u),rt(()=>At(t,f,"start")),He(T=>{if(a&&T>a.start&&(s=d(a,u),a=null,At(t,s.b,"start"),m&&(l(),c=Jt(t,i,s.b,s.duration,0,y,r.css))),s){if(T>=s.end)p(i=s.b,1-i),At(t,s.b,"end"),a||(s.b?l():--s.group.r||F(s.group.c)),s=null;else if(T>=s.start){const G=T-s.start;i=s.a+s.d*y(G/s.duration),p(i,1-i)}}return!!(s||a)}))}return{run(f){bt(r)?Ye().then(()=>{r=r(),_(f)}):_(f)},end(){l(),s=a=null}}}function qe(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],a=e[i];if(a){for(const c in s)c in a||(o[c]=1);for(const c in a)r[c]||(n[c]=a[c],r[c]=1);t[i]=a}else for(const c in s)r[c]=1}for(const s in o)s in n||(n[s]=void 0);return n}function it(t){t&&t.c()}function X(t,e,n,o){const{fragment:r,on_mount:i,on_destroy:s,after_update:a}=t.$$;r&&r.m(e,n),o||rt(()=>{const c=i.map(Zt).filter(bt);s?s.push(...c):F(c),t.$$.on_mount=[]}),a.forEach(rt)}function q(t,e){const n=t.$$;n.fragment!==null&&(F(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ge(t,e){t.$$.dirty[0]===-1&&(nt.push(t),ne(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Nt(t,e,n,o,r,i,s,a=[-1]){const c=tt;et(t);const l=t.$$={fragment:null,ctx:null,props:i,update:E,not_equal:r,bound:It(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:It(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(_,f,...h)=>{const u=h.length?h[0]:f;return l.ctx&&r(l.ctx[_],l.ctx[_]=u)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](u),d&&Ge(t,_)),f}):[],l.update(),d=!0,F(l.before_update),l.fragment=o?o(l.ctx):!1,e.target){if(e.hydrate){const _=Fe(e.target);l.fragment&&l.fragment.l(_),_.forEach(N)}else l.fragment&&l.fragment.c();e.intro&&k(t.$$.fragment),X(t,e.target,e.anchor,e.customElement),re()}et(c)}class Tt{$destroy(){q(this,1),this.$destroy=E}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!De(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var Lt={dragStart:!0},ie=(t,e,n)=>Math.min(Math.max(t,e),n),Mt=t=>typeof t=="string",Je=([t,e],n,o)=>{const r=(i,s)=>s===0?0:Math.ceil(i/s)*s;return[r(n,t),r(o,e)]},le=(t,e)=>t.some(n=>e.some(o=>n.contains(o)));function xt(t,e){if(t===void 0)return;if(Dt(t))return t.getBoundingClientRect();if(typeof t=="object"){const{top:o=0,left:r=0,right:i=0,bottom:s=0}=t;return{top:o,right:window.innerWidth-i,bottom:window.innerHeight-s,left:r}}if(t==="parent")return e.parentNode.getBoundingClientRect();const n=document.querySelector(t);if(n===null)throw new Error("The selector provided for bound doesn't exists in the document.");return n.getBoundingClientRect()}var ht=(t,e,n)=>t.style.setProperty(e,n),Dt=t=>t instanceof HTMLElement,Qe=(t,e={})=>{var ke,Ee;let n,o,{bounds:r,axis:i="both",gpuAcceleration:s=!0,legacyTranslate:a=!0,transform:c,applyUserSelectHack:l=!0,disabled:d=!1,ignoreMultitouch:_=!1,recomputeBounds:f=Lt,grid:h,position:u,cancel:y,handle:p,defaultClass:m="neodrag",defaultClassDragging:v="neodrag-dragging",defaultClassDragged:T="neodrag-dragged",defaultPosition:G={x:0,y:0},onDragStart:_t,onDrag:Pn,onDragEnd:Bn}=e,gt=!1,I=0,O=0,lt=0,st=0,Rt=0,$t=0,{x:yt,y:vt}=u?{x:(ke=u==null?void 0:u.x)!=null?ke:0,y:(Ee=u==null?void 0:u.y)!=null?Ee:0}:G;Ft(yt,vt);let z,U,at,zt,_e,ge="",Hn=!!u;f={...Lt,...f};const jt=document.body.style,j=t.classList;function Ft(g=I,C=O){if(!c){if(a){let H=`${+g}px, ${+C}px`;return ht(t,"transform",s?`translate3d(${H}, 0)`:`translate(${H})`)}return ht(t,"translate",`${+g}px ${+C}px ${s?"1px":""}`)}const x=c({offsetX:g,offsetY:C,rootNode:t});Mt(x)&&ht(t,"transform",x)}const Vt=(g,C)=>{const x={offsetX:I,offsetY:O,rootNode:t,currentNode:_e};t.dispatchEvent(new CustomEvent(g,{detail:x})),C==null||C(x)},Wt=addEventListener;Wt("pointerdown",ve,!1),Wt("pointerup",be,!1),Wt("pointermove",we,!1),ht(t,"touch-action","none");const ye=()=>{let g=t.offsetWidth/U.width;return isNaN(g)&&(g=1),g};function ve(g){if(d||g.button===2||_&&!g.isPrimary)return;if(f.dragStart&&(z=xt(r,t)),Mt(p)&&Mt(y)&&p===y)throw new Error("`handle` selector can't be same as `cancel` selector");if(j.add(m),at=function(b,B){if(!b)return[B];if(Dt(b))return[b];if(Array.isArray(b))return b;const R=B.querySelectorAll(b);if(R===null)throw new Error("Selector passed for `handle` option should be child of the element on which the action is applied");return Array.from(R.values())}(p,t),zt=function(b,B){if(!b)return[];if(Dt(b))return[b];if(Array.isArray(b))return b;const R=B.querySelectorAll(b);if(R===null)throw new Error("Selector passed for `cancel` option should be child of the element on which the action is applied");return Array.from(R.values())}(y,t),n=/(both|x)/.test(i),o=/(both|y)/.test(i),le(zt,at))throw new Error("Element being dragged can't be a child of the element on which `cancel` is applied");const C=g.composedPath()[0];if(!at.some(b=>{var B;return b.contains(C)||((B=b.shadowRoot)==null?void 0:B.contains(C))})||le(zt,[C]))return;_e=at.length===1?t:at.find(b=>b.contains(C)),gt=!0,U=t.getBoundingClientRect(),l&&(ge=jt.userSelect,jt.userSelect="none"),Vt("neodrag:start",_t);const{clientX:x,clientY:H}=g,P=ye();n&&(lt=x-yt/P),o&&(st=H-vt/P),z&&(Rt=x-U.left,$t=H-U.top)}function be(){gt&&(f.dragEnd&&(z=xt(r,t)),j.remove(v),j.add(T),l&&(jt.userSelect=ge),Vt("neodrag:end",Bn),n&&(lt=I),o&&(st=O),gt=!1)}function we(g){if(!gt)return;f.drag&&(z=xt(r,t)),j.add(v),g.preventDefault(),U=t.getBoundingClientRect();let C=g.clientX,x=g.clientY;const H=ye();if(z){const P={left:z.left+Rt,top:z.top+$t,right:z.right+Rt-U.width,bottom:z.bottom+$t-U.height};C=ie(C,P.left,P.right),x=ie(x,P.top,P.bottom)}if(Array.isArray(h)){let[P,b]=h;if(isNaN(+P)||P<0)throw new Error("1st argument of `grid` must be a valid positive number");if(isNaN(+b)||b<0)throw new Error("2nd argument of `grid` must be a valid positive number");let B=C-lt,R=x-st;[B,R]=Je([P/H,b/H],B,R),C=lt+B,x=st+R}n&&(I=Math.round((C-lt)*H)),o&&(O=Math.round((x-st)*H)),yt=I,vt=O,Vt("neodrag",Pn),Ft()}return{destroy:()=>{const g=removeEventListener;g("pointerdown",ve,!1),g("pointerup",be,!1),g("pointermove",we,!1)},update:g=>{var x,H,P,b,B,R,Ce,Se,Ae,Ne,Te,Le,Me;i=g.axis||"both",d=(x=g.disabled)!=null?x:!1,_=(H=g.ignoreMultitouch)!=null?H:!1,p=g.handle,r=g.bounds,f=(P=g.recomputeBounds)!=null?P:Lt,y=g.cancel,l=(b=g.applyUserSelectHack)!=null?b:!0,h=g.grid,s=(B=g.gpuAcceleration)!=null?B:!0,a=(R=g.legacyTranslate)!=null?R:!0,c=g.transform;const C=j.contains(T);j.remove(m,T),m=(Ce=g.defaultClass)!=null?Ce:"neodrag",v=(Se=g.defaultClassDragging)!=null?Se:"neodrag-dragging",T=(Ae=g.defaultClassDragged)!=null?Ae:"neodrag-dragged",j.add(m),C&&j.add(T),Hn&&(yt=I=(Te=(Ne=g.position)==null?void 0:Ne.x)!=null?Te:I,vt=O=(Me=(Le=g.position)==null?void 0:Le.y)!=null?Me:O,Ft())}}};function tn(t){const e=t-1;return e*e*e+1}function se(t,{delay:e=0,duration:n=400,easing:o=tn}={}){const r=getComputedStyle(t),i=+r.opacity,s=parseFloat(r.height),a=parseFloat(r.paddingTop),c=parseFloat(r.paddingBottom),l=parseFloat(r.marginTop),d=parseFloat(r.marginBottom),_=parseFloat(r.borderTopWidth),f=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:o,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*i};height: ${h*s}px;padding-top: ${h*a}px;padding-bottom: ${h*c}px;margin-top: ${h*l}px;margin-bottom: ${h*d}px;border-top-width: ${h*_}px;border-bottom-width: ${h*f}px;`}}function en(t){let e,n=[{width:t[1]},{height:t[1]},{"stroke-width":"0"},{class:t[2]},t[0].a,t[4],{xmlns:"http://www.w3.org/2000/svg"}],o={};for(let r=0;r<n.length;r+=1)o=xe(o,n[r]);return{c(){e=je("svg"),Xt(e,o)},m(r,i){L(r,e,i),e.innerHTML=t[3]},p(r,[i]){i&8&&(e.innerHTML=r[3]),Xt(e,o=qe(n,[i&2&&{width:r[1]},i&2&&{height:r[1]},{"stroke-width":"0"},i&4&&{class:r[2]},i&1&&r[0].a,i&16&&r[4],{xmlns:"http://www.w3.org/2000/svg"}]))},i:E,o:E,d(r){r&&N(e)}}}function nn(t,e,n){let{src:o}=e,{size:r="1em"}=e,{color:i=void 0}=e,{title:s=void 0}=e,{className:a=""}=e,c,l;return t.$$set=d=>{"src"in d&&n(0,o=d.src),"size"in d&&n(1,r=d.size),"color"in d&&n(5,i=d.color),"title"in d&&n(6,s=d.title),"className"in d&&n(2,a=d.className)},t.$$.update=()=>{t.$$.dirty&33&&(n(4,l={}),i&&(o.a.stroke!=="none"&&n(4,l.stroke=i,l),o.a.fill!=="none"&&n(4,l.fill=i,l))),t.$$.dirty&65&&n(3,c=(s?`<title>${s}</title>`:"")+o.c)},[o,r,a,c,l,i,s]}class mt extends Tt{constructor(e){super(),Nt(this,e,nn,en,wt,{src:0,size:1,color:5,title:6,className:2})}}const rn={a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>'},on={a:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},c:'<polyline points="6 9 12 15 18 9"></polyline>'},ae={a:{viewBox:"0 0 640 512"},c:'<path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"></path>'};var ln=["second","minute","hour","day","week","month","year"];function sn(t,e){if(e===0)return["just now","right now"];var n=ln[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]}var an=["\u79D2","\u5206\u949F","\u5C0F\u65F6","\u5929","\u5468","\u4E2A\u6708","\u5E74"];function cn(t,e){if(e===0)return["\u521A\u521A","\u7247\u523B\u540E"];var n=an[~~(e/2)];return[t+" "+n+"\u524D",t+" "+n+"\u540E"]}var Pt={},ce=function(t,e){Pt[t]=e},un=function(t){return Pt[t]||Pt.en_US},Bt=[60,60,24,7,365/7/12,12];function ue(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function fn(t,e){var n=t<0?1:0;t=Math.abs(t);for(var o=t,r=0;t>=Bt[r]&&r<Bt.length;r++)t/=Bt[r];return t=Math.floor(t),r*=2,t>(r===0?9:1)&&(r+=1),e(t,r,o)[n].replace("%s",t.toString())}function dn(t,e){var n=e?ue(e):new Date;return(+n-+ue(t))/1e3}var fe=function(t,e,n){var o=dn(t,n&&n.relativeDate);return fn(o,un(e))};ce("en_US",sn),ce("zh_CN",cn);var Ht="__autosizeInputGhost",pn={" ":"nbsp","<":"lt",">":"gt"};function hn(t){return"&"+pn[t]+";"}function mn(t){return t.replace(/\s|<|>/g,hn)}function _n(){var t=document.createElement("div");return t.id=Ht,t.style.cssText="display:inline-block;height:0;overflow:hidden;position:absolute;top:0;visibility:hidden;white-space:nowrap;",document.body.appendChild(t),t}var gn=function(t,e){var n=window.getComputedStyle(t),o="box-sizing:"+n.boxSizing+";border-left:"+n.borderLeftWidth+" solid red;border-right:"+n.borderRightWidth+" solid red;font-family:"+n.fontFamily+";font-feature-settings:"+n.fontFeatureSettings+";font-kerning:"+n.fontKerning+";font-size:"+n.fontSize+";font-stretch:"+n.fontStretch+";font-style:"+n.fontStyle+";font-variant:"+n.fontVariant+";font-variant-caps:"+n.fontVariantCaps+";font-variant-ligatures:"+n.fontVariantLigatures+";font-variant-numeric:"+n.fontVariantNumeric+";font-weight:"+n.fontWeight+";letter-spacing:"+n.letterSpacing+";margin-left:"+n.marginLeft+";margin-right:"+n.marginRight+";padding-left:"+n.paddingLeft+";padding-right:"+n.paddingRight+";text-indent:"+n.textIndent+";text-transform:"+n.textTransform;function r(){var s=t.value||t.getAttribute("placeholder")||"",a=document.getElementById(Ht)||_n();a.style.cssText+=o,a.innerHTML=mn(s);var c=window.getComputedStyle(a).width;return t.style.width=c,c}t.addEventListener("input",r);var i=r();return e&&e.minWidth&&i!=="0px"&&(t.style.minWidth=i),function(){t.removeEventListener("input",r);var s=document.getElementById(Ht);s&&s.parentNode.removeChild(s)}};const Rn="";function de(t,e,n){const o=t.slice();return o[14]=e[n],o}function yn(t){var d,_,f;let e,n=((d=t[4])==null?void 0:d.value)+"",o,r,i,s,a,c,l=((f=(_=t[4])==null?void 0:_.creator)==null?void 0:f.type)==="Person"&&pe();return{c(){e=D("span"),o=M(n),r=V(),l&&l.c(),i=Yt(),S(e,"class","transcription svelte-1usy2uv")},m(h,u){L(h,e,u),w(e,o),L(h,r,u),l&&l.m(h,u),L(h,i,u),s=!0,a||(c=Q(e,"click",t[9]),a=!0)},p(h,u){var y,p,m;(!s||u&16)&&n!==(n=((y=h[4])==null?void 0:y.value)+"")&&Y(o,n),((m=(p=h[4])==null?void 0:p.creator)==null?void 0:m.type)==="Person"?l?(l.p(h,u),u&16&&k(l,1)):(l=pe(),l.c(),k(l,1),l.m(i.parentNode,i)):l&&(W(),A(l,1,1,()=>{l=null}),Z())},i(h){s||(k(l),s=!0)},o(h){A(l),s=!1},d(h){h&&N(e),h&&N(r),l&&l.d(h),h&&N(i),a=!1,c()}}}function vn(t){let e,n,o,r;return{c(){var i;e=D("input"),e.value=n=(i=t[4])==null?void 0:i.value,S(e,"spellcheck",!1),S(e,"class","svelte-1usy2uv")},m(i,s){L(i,e,s),t[8](e),o||(r=Q(e,"keydown",t[7]),o=!0)},p(i,s){var a;s&16&&n!==(n=(a=i[4])==null?void 0:a.value)&&e.value!==n&&(e.value=n)},i:E,o:E,d(i){i&&N(e),t[8](null),o=!1,r()}}}function pe(t){let e,n;return e=new mt({props:{className:"verified-transcription",src:rn}}),{c(){it(e.$$.fragment)},m(o,r){X(e,o,r),n=!0},p:E,i(o){n||(k(e.$$.fragment,o),n=!0)},o(o){A(e.$$.fragment,o),n=!1},d(o){q(e,o)}}}function bn(t){let e,n,o,r,i,s,a,c,l,d;const _=[En,kn],f=[];function h(u,y){var p,m;return u[5]?0:(m=(p=u[4])==null?void 0:p.creator)!=null&&m.name?1:-1}return~(o=h(t))&&(r=f[o]=_[o](t)),{c(){e=D("p"),n=M("Transcribed by "),r&&r.c(),i=M("  \xB7 [ "),s=D("button"),s.textContent="Edit",a=M(" ]"),S(s,"class","add-transcription svelte-1usy2uv"),S(e,"class","transcription-details transcribed-by svelte-1usy2uv")},m(u,y){L(u,e,y),w(e,n),~o&&f[o].m(e,null),w(e,i),w(e,s),w(e,a),c=!0,l||(d=Q(s,"click",t[12]),l=!0)},p(u,y){let p=o;o=h(u),o===p?~o&&f[o].p(u,y):(r&&(W(),A(f[p],1,1,()=>{f[p]=null}),Z()),~o?(r=f[o],r?r.p(u,y):(r=f[o]=_[o](u),r.c()),k(r,1),r.m(e,i)):r=null)},i(u){c||(k(r),c=!0)},o(u){A(r),c=!1},d(u){u&&N(e),~o&&f[o].d(),l=!1,d()}}}function wn(t){let e,n,o,r,i=t[0].length-1+"",s,a,c,l,d,_,f,h,u,y;o=new mt({props:{src:on}});let p=t[6]&&he(t);return{c(){e=D("p"),n=D("button"),it(o.$$.fragment),r=V(),s=M(i),a=M(" more transcriptions"),c=M(" \xB7 [ "),l=D("button"),l.textContent="Edit",d=M(" ]"),_=V(),p&&p.c(),f=Yt(),S(n,"class","show-all svelte-1usy2uv"),qt(n,"open",t[6]),S(l,"class","add-transcription svelte-1usy2uv"),S(e,"class","transcription-details transcription-count svelte-1usy2uv")},m(m,v){L(m,e,v),w(e,n),X(o,n,null),w(n,r),w(n,s),w(n,a),w(e,c),w(e,l),w(e,d),L(m,_,v),p&&p.m(m,v),L(m,f,v),h=!0,u||(y=[Q(n,"click",t[10]),Q(l,"click",t[11])],u=!0)},p(m,v){(!h||v&1)&&i!==(i=m[0].length-1+"")&&Y(s,i),v&64&&qt(n,"open",m[6]),m[6]?p?(p.p(m,v),v&64&&k(p,1)):(p=he(m),p.c(),k(p,1),p.m(f.parentNode,f)):p&&(W(),A(p,1,1,()=>{p=null}),Z())},i(m){h||(k(o.$$.fragment,m),k(p),h=!0)},o(m){A(o.$$.fragment,m),A(p),h=!1},d(m){m&&N(e),q(o),m&&N(_),p&&p.d(m),m&&N(f),u=!1,F(y)}}}function kn(t){var o,r;let e=((r=(o=t[4])==null?void 0:o.creator)==null?void 0:r.name)+"",n;return{c(){n=M(e)},m(i,s){L(i,n,s)},p(i,s){var a,c;s&16&&e!==(e=((c=(a=i[4])==null?void 0:a.creator)==null?void 0:c.name)+"")&&Y(n,e)},i:E,o:E,d(i){i&&N(n)}}}function En(t){let e,n,o;return e=new mt({props:{src:ae}}),{c(){it(e.$$.fragment),n=M(" mapKurator")},m(r,i){X(e,r,i),L(r,n,i),o=!0},p:E,i(r){o||(k(e.$$.fragment,r),o=!0)},o(r){A(e.$$.fragment,r),o=!1},d(r){q(e,r),r&&N(n)}}}function he(t){let e,n,o,r=t[1],i=[];for(let a=0;a<r.length;a+=1)i[a]=me(de(t,r,a));const s=a=>A(i[a],1,1,()=>{i[a]=null});return{c(){e=D("ul");for(let a=0;a<i.length;a+=1)i[a].c();S(e,"class","all-transcriptions svelte-1usy2uv")},m(a,c){L(a,e,c);for(let l=0;l<i.length;l+=1)i[l].m(e,null);o=!0},p(a,c){if(c&2){r=a[1];let l;for(l=0;l<r.length;l+=1){const d=de(a,r,l);i[l]?(i[l].p(d,c),k(i[l],1)):(i[l]=me(d),i[l].c(),k(i[l],1),i[l].m(e,null))}for(W(),l=r.length;l<i.length;l+=1)s(l);Z()}},i(a){if(!o){for(let c=0;c<r.length;c+=1)k(i[c]);rt(()=>{n||(n=oe(e,se,{duration:120},!0)),n.run(1)}),o=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)A(i[c]);n||(n=oe(e,se,{duration:120},!1)),n.run(0),o=!1},d(a){a&&N(e),ze(i,a),a&&n&&n.end()}}}function Cn(t){let e=t[14].creator.name+"",n;return{c(){n=M(e)},m(o,r){L(o,n,r)},p(o,r){r&2&&e!==(e=o[14].creator.name+"")&&Y(n,e)},i:E,o:E,d(o){o&&N(n)}}}function Sn(t){let e,n,o;return e=new mt({props:{src:ae}}),{c(){it(e.$$.fragment),n=M(" mapKurator")},m(r,i){X(e,r,i),L(r,n,i),o=!0},p:E,i(r){o||(k(e.$$.fragment,r),o=!0)},o(r){A(e.$$.fragment,r),o=!1},d(r){q(e,r),r&&N(n)}}}function me(t){let e,n=t[14].value+"",o,r,i,s=fe(t[14].created)+"",a,c,l,d,_,f;const h=[Sn,Cn],u=[];function y(p,m){var v;return((v=p[14].creator)==null?void 0:v.type)==="Software"?0:1}return l=y(t),d=u[l]=h[l](t),{c(){e=D("li"),o=M(n),r=V(),i=D("span"),a=M(s),c=M(" by "),d.c(),_=V(),S(i,"class","transcribed-by svelte-1usy2uv"),S(e,"class","svelte-1usy2uv")},m(p,m){L(p,e,m),w(e,o),w(e,r),w(e,i),w(i,a),w(i,c),u[l].m(i,null),w(e,_),f=!0},p(p,m){(!f||m&2)&&n!==(n=p[14].value+"")&&Y(o,n),(!f||m&2)&&s!==(s=fe(p[14].created)+"")&&Y(a,s);let v=l;l=y(p),l===v?u[l].p(p,m):(W(),A(u[v],1,1,()=>{u[v]=null}),Z(),d=u[l],d?d.p(p,m):(d=u[l]=h[l](p),d.c()),k(d,1),d.m(i,null))},i(p){f||(k(d),f=!0)},o(p){A(d),f=!1},d(p){p&&N(e),u[l].d()}}}function An(t){let e,n,o,r,i,s,a;const c=[vn,yn],l=[];function d(u,y){return u[3]?0:1}n=d(t),o=l[n]=c[n](t);const _=[wn,bn],f=[];function h(u,y){return u[0].length>1?0:1}return i=h(t),s=f[i]=_[i](t),{c(){e=D("div"),o.c(),r=V(),s.c(),S(e,"class","transcription-container")},m(u,y){L(u,e,y),l[n].m(e,null),w(e,r),f[i].m(e,null),a=!0},p(u,[y]){let p=n;n=d(u),n===p?l[n].p(u,y):(W(),A(l[p],1,1,()=>{l[p]=null}),Z(),o=l[n],o?o.p(u,y):(o=l[n]=c[n](u),o.c()),k(o,1),o.m(e,r));let m=i;i=h(u),i===m?f[i].p(u,y):(W(),A(f[m],1,1,()=>{f[m]=null}),Z(),s=f[i],s?s.p(u,y):(s=f[i]=_[i](u),s.c()),k(s,1),s.m(e,null))},i(u){a||(k(o),k(s),a=!0)},o(u){A(o),A(s),a=!1},d(u){u&&N(e),l[n].d(),f[i].d()}}}function Nn(t,e,n){const o=Qt();let{data:r}=e,i,s,a=!1,c,l,d=!1;const _=m=>{if(m.key==="Enter"){const{value:v}=s;v!==(c==null?void 0:c.value)&&o("addTranscription",s.value),n(3,a=!1)}else m.key==="Escape"&&n(3,a=!1)};function f(m){Et[m?"unshift":"push"](()=>{s=m,n(2,s)})}const h=()=>n(6,d=!d),u=()=>n(6,d=!d),y=()=>n(3,a=!0),p=()=>n(3,a=!0);return t.$$set=m=>{"data"in m&&n(0,r=m.data)},t.$$.update=()=>{if(t.$$.dirty&3){n(1,i=r.slice().sort((v,T)=>v.created<T.created?1:-1));const m=i.filter(v=>{var T;return((T=v.creator)==null?void 0:T.type)==="Person"});if(m.length>0)n(4,c=m[0]);else{const v=i.find(T=>{var G,_t;return((G=T.creator)==null?void 0:G.type)==="Software"&&((_t=T.creator)==null?void 0:_t.name)==="mapKurator:ocr"});v?(n(4,c=v),n(5,l=!0)):n(4,c=i.length>0?i[0]:null)}}t.$$.dirty&12&&a&&Ue().then(()=>{gn(s),s.focus()})},[r,i,s,a,c,l,d,_,f,h,u,y,p]}class Tn extends Tt{constructor(e){super(),Nt(this,e,Nn,An,wt,{data:0})}}const $n="";function Ln(t){let e,n,o,r,i,s,a,c,l,d;return r=new Tn({props:{data:t[1]}}),r.$on("addTranscription",t[2]),{c(){e=D("div"),n=D("div"),o=D("div"),it(r.$$.fragment),i=V(),s=D("div"),S(o,"class","r8s-hover-content svelte-nj7tr3"),S(n,"class","r8s-hover-main svelte-nj7tr3"),S(s,"class","mousetrap svelte-nj7tr3"),S(e,"class","r8s-hover-container svelte-nj7tr3"),S(e,"style",a=`top: ${t[0].offsetY}px; left: ${t[0].offsetX}px`)},m(_,f){L(_,e,f),w(e,n),w(n,o),X(r,o,null),w(e,i),w(e,s),c=!0,l||(d=Pe(Qe.call(null,n)),l=!0)},p(_,[f]){const h={};f&2&&(h.data=_[1]),r.$set(h),(!c||f&1&&a!==(a=`top: ${_[0].offsetY}px; left: ${_[0].offsetX}px`))&&S(e,"style",a)},i(_){c||(k(r.$$.fragment,_),c=!0)},o(_){A(r.$$.fragment,_),c=!1},d(_){_&&N(e),q(r),l=!1,d()}}}function Mn(t,e,n){const o=Qt();let{annotation:r}=e,{originalEvent:i}=e,{env:s}=e,a=[];const c=l=>{const _=[...Array.isArray(r.body)?r.body:[r.body],{type:"TextualBody",purpose:"transcribing",value:l.detail,creator:{type:"Person",name:s.currentUser.id},created:s.getCurrentTimeAdjusted()}];n(3,r={...r,body:_}),o("transcriptionChanged",r)};return t.$$set=l=>{"annotation"in l&&n(3,r=l.annotation),"originalEvent"in l&&n(0,i=l.originalEvent),"env"in l&&n(4,s=l.env)},t.$$.update=()=>{if(t.$$.dirty&8){const l=r.body?Array.isArray(r.body)?r.body:[r.body]:[];n(1,a=l.filter(d=>{var _;return(!d.purpose||d.purpose==="transcribing")&&((_=d.creator)==null?void 0:_.name)!=="mapKurator:post-ocr"}))}},[i,a,c,r,s]}class xn extends Tt{constructor(e){super(),Nt(this,e,Mn,Ln,wt,{annotation:3,originalEvent:0,env:4})}}class Dn{constructor(e,n){this.showPopup=(o,r)=>{this.popup=new xn({target:document.body,props:{annotation:o,originalEvent:r,env:this.anno.env}}),this.popup.$on("transcriptionChanged",i=>this.anno.updateAnnotation(i.detail.id,i.detail)),this.popup.$on("editShape",i=>this.anno.selectAnnotation(i.detail.id))},this.hidePopup=()=>{this.popup.$destroy(),this.popup=null},this.anno=e,this.viewer=n,e.on("mouseEnterAnnotation",(o,r)=>{this.showPopup(o,r)}),e.on("mouseLeaveAnnotation",()=>{this.hidePopup()})}}return Dn});
//# sourceMappingURL=luna-annotorious.js.map
