import{as as U,d as V,u as X,h as x,k as F,w as Y,j as Z,m as K,i as D,c as I,W as ee,e as p,ae as R,P as L,ab as T,at as te,au as ae,av as ne,D as re,E as z,F as P,aw as ie,G as C,K as W,H,ax as oe,ay as se,O as le,M as ce,N as ue}from"./index.83820bf7.js";import{u as de,b as M}from"./route-block.b9fb0d8d.js";var pe={small:8,middle:16,large:24},ve=function(){return{prefixCls:String,size:{type:[String,Number,Array]},direction:L.oneOf(T("horizontal","vertical")).def("horizontal"),align:L.oneOf(T("start","end","center","baseline")),wrap:{type:Boolean,default:void 0}}};function fe(e){return typeof e=="string"?pe[e]:e||0}var me=V({compatConfig:{MODE:3},name:"ASpace",props:ve(),slots:["split"],setup:function(t,r){var o=r.slots,a=X("space",t),n=a.prefixCls,m=a.space,v=a.direction,s=de(),c=x(function(){var i,l,d;return(i=(l=t.size)!==null&&l!==void 0?l:(d=m.value)===null||d===void 0?void 0:d.size)!==null&&i!==void 0?i:"small"}),f=F(),_=F();Y(c,function(){var i=(Array.isArray(c.value)?c.value:[c.value,c.value]).map(function(d){return fe(d)}),l=Z(i,2);f.value=l[0],_.value=l[1]},{immediate:!0});var y=x(function(){return t.align===void 0&&t.direction==="horizontal"?"center":t.align}),S=x(function(){var i;return K(n.value,"".concat(n.value,"-").concat(t.direction),(i={},D(i,"".concat(n.value,"-rtl"),v.value==="rtl"),D(i,"".concat(n.value,"-align-").concat(y.value),y.value),i))}),u=x(function(){return v.value==="rtl"?"marginLeft":"marginRight"}),$=x(function(){var i={};return s.value&&(i.columnGap="".concat(f.value,"px"),i.rowGap="".concat(_.value,"px")),I(I({},i),t.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-_.value,"px")})});return function(){var i,l,d=t.wrap,w=t.direction,g=w===void 0?"horizontal":w,B=ee((i=o.default)===null||i===void 0?void 0:i.call(o)),h=B.length;if(h===0)return null;var b=(l=o.split)===null||l===void 0?void 0:l.call(o),N="".concat(n.value,"-item"),G=f.value,k=h-1;return p("div",{class:S.value,style:$.value},[B.map(function(Q,E){var O={};return s.value||(g==="vertical"?E<k&&(O={marginBottom:"".concat(G/(b?2:1),"px")}):O=I(I({},E<k&&D({},u.value,"".concat(G/(b?2:1),"px"))),d&&{paddingBottom:"".concat(_.value,"px")})),p(R,null,[p("div",{class:N,style:O},[Q]),E<k&&b&&p("span",{class:"".concat(N,"-split"),style:O},[b])])})])}}});const _e=U(me);var ge=["class","component","viewBox","spin","rotate","tabindex","onClick"];function A(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),o.forEach(function(a){q(e,a,r[a])})}return e}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function he(e,t){if(e==null)return{};var r=ye(e,t),o,a;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(r[o]=e[o]))}return r}function ye(e,t){if(e==null)return{};var r={},o=Object.keys(e),a,n;for(n=0;n<o.length;n++)a=o[n],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}var j=function(t,r){var o=r.attrs,a=r.slots,n=A({},t,o),m=n.class,v=n.component,s=n.viewBox,c=n.spin,f=n.rotate,_=n.tabindex,y=n.onClick,S=he(n,ge),u=a.default&&a.default(),$=u&&u.length,i=a.component;te();var l=q({anticon:!0},m,m),d={"anticon-spin":c===""||!!c},w=f?{msTransform:"rotate(".concat(f,"deg)"),transform:"rotate(".concat(f,"deg)")}:void 0,g=A({},ae,{viewBox:s,class:d,style:w});s||delete g.viewBox;var B=function(){return v?p(v,g,{default:function(){return[u]}}):i?i(g):$?(ne(Boolean(s)||u.length===1&&u[0]&&u[0].type==="use"),p("svg",A({},g,{viewBox:s}),[u])):null},h=_;return h===void 0&&y&&(h=-1,S.tabindex=h),p("span",A({role:"img"},S,{onClick:y,class:l}),[B()])};j.props={spin:Boolean,rotate:Number,viewBox:String,ariaLabel:String};j.inheritAttrs=!1;j.displayName="Icon";const be=j;const J=V({name:"NewFeed",components:{Icon:be},setup(){const e=F([{id:"2",title:"ABC",description:"2",heart:!1},{id:"3",title:"ABC",description:"3",heart:!1},{id:"4",title:"ABC",description:"4",heart:!1},{id:"5",title:"ABC",description:"4",heart:!1},{id:"6",title:"ABC",description:"4",heart:!1},{id:"7",title:"ABC",description:"4",heart:!1},{id:"8",title:"ABC",description:"4",heart:!0},{id:"9",title:"ABC",description:"4",heart:!1},{id:"9",title:"ABC",description:"4",heart:!1}]);function t(r){r.heart=!r.heart}return{list_data:e,toggleHeart:t}}});const xe=e=>(ce("data-v-e54471d0"),e=e(),ue(),e),Ce={class:"new-feed-container"},Se={class:"blog-item"},we={class:""},Be={class:"description-blog"},Oe={class:"form-icon"},Ie=["onClick"],ze=xe(()=>C("path",{d:"M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"},null,-1)),Pe=[ze];function Ae(e,t,r,o,a,n){const m=le("icon"),v=_e;return z(),P("div",Ce,[(z(!0),P(R,null,ie(e.list_data,s=>(z(),P("div",{key:s.id,class:"form-container"},[C("div",Se,[C("div",we,W(s.title),1),C("div",Be,W(s.description),1),C("div",Oe,[p(v,{class:"icon-heart"},{default:H(()=>[p(m,{style:oe({color:"rgb(160 169 169"})},{component:H(()=>[(z(),P("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024",class:se({"red-heart":s.heart}),onClick:c=>e.toggleHeart(s)},Pe,10,Ie))]),_:2},1032,["style"])]),_:2},1024)])])]))),128))])}typeof M=="function"&&M(J);const Ne=re(J,[["render",Ae],["__scopeId","data-v-e54471d0"]]);export{Ne as default};