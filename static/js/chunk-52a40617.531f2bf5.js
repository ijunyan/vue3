(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52a40617"],{"0862":function(e,t,n){"use strict";n("1df9")},"1df9":function(e,t,n){},"2e78":function(e,t,n){"use strict";n("730f")},4977:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o={class:"hall-container"},a={class:"hall-main"};function r(e,t,n,r,l,i){var d=Object(c["resolveComponent"])("HallCard");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",a,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.gameList,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(d,{key:e.id,gameInfo:e},null,8,["gameInfo"])})),128))])])}var l=function(e){return Object(c["pushScopeId"])("data-v-1978be00"),e=e(),Object(c["popScopeId"])(),e},i={class:"hall-box"},d={class:"body"},s=["src"],u={class:"info"},m={class:"name"},b={class:"rule"},j={class:"current-oder"},O={class:"footer"},f=l((function(){return Object(c["createElementVNode"])("span",{class:"number"},"开奖结果",-1)})),p=Object(c["createTextVNode"])("立即下单");function g(e,t,n,o,a,r){var l=Object(c["resolveComponent"])("el-button");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",i,[Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("div",{class:"image",onClick:t[0]||(t[0]=function(t){return e.toPage({name:"Bet",query:{game_id:e.gameInfo.id}})})},[Object(c["createElementVNode"])("img",{src:e.getLogoByIdFun(e.gameInfo.id),style:{width:"96px",height:"96px"}},null,8,s)]),Object(c["createElementVNode"])("div",u,[Object(c["createElementVNode"])("div",m,Object(c["toDisplayString"])(e.gameInfo.game_name),1),Object(c["createElementVNode"])("div",b,Object(c["toDisplayString"])(e.gameInfo.game_remark),1),Object(c["createElementVNode"])("div",j,[(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(6,(function(e){return Object(c["createElementVNode"])("span",{class:"hm",key:e},Object(c["toDisplayString"])(e),1)})),64))])])]),Object(c["createElementVNode"])("div",O,[Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(l,{type:"text",onClick:t[1]||(t[1]=function(t){return e.toPage({name:"History",query:{game_id:e.gameInfo.id}})})},{default:Object(c["withCtx"])((function(){return[f]})),_:1})]),Object(c["createVNode"])(l,{type:"primary",size:"small",plain:"",onClick:t[2]||(t[2]=function(t){return e.toPage({name:"Bet",query:{game_id:e.gameInfo.id}})})},{default:Object(c["withCtx"])((function(){return[p]})),_:1})])])}var v=n("d2c9"),k=n("d257"),y=Object(c["defineComponent"])({name:"hallCard",props:{gameInfo:{type:Object,default:function(){}}},setup:function(e){console.log(e);var t=Object(v["a"])(),n=t.toPage,c=k["a"];return{toPage:n,getLogoByIdFun:c}}}),E=(n("0862"),n("d959")),I=n.n(E);const B=I()(y,[["render",g],["__scopeId","data-v-1978be00"]]);var N=B,V=n("5502"),h=Object(c["defineComponent"])({name:"hall",components:{HallCard:N},setup:function(){var e=Object(V["b"])(),t=k["a"],n=Object(c["computed"])((function(){return e.getters.gameList}));return{gameList:n,getLogoByIdFun:t}}});n("2e78");const C=I()(h,[["render",r],["__scopeId","data-v-437d2211"]]);t["default"]=C},"730f":function(e,t,n){}}]);