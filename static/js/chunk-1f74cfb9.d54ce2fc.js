(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f74cfb9"],{"1ea9":function(e,t,n){},3449:function(e,t,n){"use strict";n("1ea9")},5197:function(e,t,n){e.exports=n.p+"static/img/image1.7590e83c.png"},c740:function(e,t,n){"use strict";var c=n("23e7"),r=n("b727").findIndex,a=n("44d2"),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),c({target:"Array",proto:!0,forced:o},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(i)},e382:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=n("5197"),a=n.n(r),i=function(e){return Object(c["pushScopeId"])("data-v-09ee29b6"),e=e(),Object(c["popScopeId"])(),e},o={class:"user"},u={class:"user-nav"},l={class:"user-info"},s=i((function(){return Object(c["createElementVNode"])("img",{class:"user-info-avatar",src:a.a,alt:""},null,-1)})),d={class:"user-info-name"},f={class:"user-info-uid"},b=i((function(){return Object(c["createElementVNode"])("dt",{class:"user-nav-title"},"账号管理",-1)})),j=["onClick"],p=i((function(){return Object(c["createElementVNode"])("i",{class:"iconfont icon-right"},null,-1)})),O={class:"user-page"};function v(e,t,n,r,a,i){var v=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",u,[Object(c["createElementVNode"])("div",l,[s,Object(c["createElementVNode"])("p",d,Object(c["toDisplayString"])(e.userInfo.nickname),1),Object(c["createElementVNode"])("p",f,"ID: "+Object(c["toDisplayString"])(e.userInfo.id),1)]),Object(c["createElementVNode"])("dl",null,[b,(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.navList,(function(t,n){return Object(c["openBlock"])(),Object(c["createElementBlock"])("dd",{key:n,class:Object(c["normalizeClass"])(["user-nav-item",{active:e.activeIndex==n}]),onClick:function(c){return e.handleNavClick(t,n)}},[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.title)+" ",1),p],10,j)})),128))])]),Object(c["createElementVNode"])("div",O,[Object(c["createVNode"])(v)])])}n("c740");var m=n("5502"),k=n("6c02"),I=[{title:"个人信息",url:"/user/profile"},{title:"用户安全",url:"/user/userSafety"},{title:"站内信",url:"/user/stationEmail"},{title:"账变明细",url:"/user/accountDetail"},{title:"银行卡信息",url:"/user/userBackCard"},{title:"兑换",url:"/user/userWithdraw"}],g=Object(c["defineComponent"])({name:"UserIndex",setup:function(){var e=Object(m["b"])(),t=Object(k["d"])(),n=Object(k["c"])(),r=Object(c["ref"])(0),a=Object(c["computed"])((function(){return e.getters.userInfo})),i=function(e){t.push(e.url)},o=function(){var e=I.findIndex((function(e){return e.url===n.path}));r.value=-1!==e?e:0};return o(),Object(c["watch"])((function(){return n.path}),o),{userInfo:a,navList:I,activeIndex:r,handleNavClick:i}}}),h=(n("3449"),n("6b0d")),E=n.n(h);const N=E()(g,[["render",v],["__scopeId","data-v-09ee29b6"]]);t["default"]=N}}]);