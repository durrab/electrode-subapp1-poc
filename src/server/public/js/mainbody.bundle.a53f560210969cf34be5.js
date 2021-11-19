!function(){"use strict";var e,n,t={6231:function(e,n,t){!function(e){var n=t.u,r=t.e,a=t.p;t.p="";var o=e.xarcV2||e.xarcV1;o&&"undefined"!=typeof __remoteCdnMapping&&o.cdnUpdate({md:__remoteCdnMapping});var c=function(e){var n=o&&o.cdnMap(e);return n&&n!==e?n:null};t.e=function(e){t.u=function(){var t=n(e);return c(t)||a+t};var o=r(e);return t.u=n,o};var u=t.miniCssF;u&&(t.miniCssF=function(e){var n=u(e);return c(n)||a+n})}(window)},7607:function(e,n,t){var r,a=t(5773),o=t(1018),c=t(3928),u=t(3884),i=t(9635),l=t(2471),f=t.n(l),s=(t(7711),function(e){var n=e.item,t="panel panel-"+(n.type||"primary");return f().createElement("div",{className:"col-sm-4"},f().createElement("div",{className:t},f().createElement("div",{className:"panel-heading"},n.heading),f().createElement("div",{className:"panel-body"},f().createElement("img",{src:n.imageUrl,className:"img-responsive",style:{width:"100%"},alt:"Image"})),f().createElement("div",{className:"panel-footer"},n.footer)))}),m=function(e){for(var n=e.items,t=e.index,r=[],a=0;a<3&&t+a<n.length;a++)r.push(f().createElement(s,{key:a,item:n[t+a]}));return f().createElement("div",{className:"row"},r)},p=(0,u.$j)((function(e){return{items:e.items,value:e.number.value}}),(function(e){return{dispatch:e}}))((function(e){for(var n=e.items,t=(e.value,e.dispatch),a=[],o=0;o<n.length;o+=3)a.push(f().createElement(m,{key:o,items:n,index:o}));return f().createElement("div",{className:"container"},r||(r=f().createElement("p",null,"Products")),f().createElement("div",null,"Redux State Demo: ",f().createElement("button",{onClick:function(){return t({type:"DEC_NUMBER"})}},"≪")," ",e.value," ",f().createElement("button",{onClick:function(){return t({type:"INC_NUMBER"})}},"≫")),a)})),d=t(3219),v=t(137),h=(t(3615),t(808)),y=t(1115);f().Component,f().Component;var E=function(e,n){return"function"==typeof e?e(n):e},b=function(e,n){return"string"==typeof e?(0,v.createLocation)(e,null,null,n):e},g=function(e){return e},_=f().forwardRef;void 0===_&&(_=g);var N=_((function(e,n){var t=e.innerRef,r=e.navigate,o=e.onClick,c=(0,h.Z)(e,["innerRef","navigate","onClick"]),u=c.target,i=(0,a.Z)({},c,{onClick:function(e){try{o&&o(e)}catch(n){throw e.preventDefault(),n}e.defaultPrevented||0!==e.button||u&&"_self"!==u||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return i.ref=g!==_&&n||t,f().createElement("a",i)})),$=_((function(e,n){var t=e.component,r=void 0===t?N:t,o=e.replace,c=e.to,u=e.innerRef,l=(0,h.Z)(e,["component","replace","to","innerRef"]);return f().createElement(i.s6.Consumer,null,(function(e){e||(0,y.Z)(!1);var t=e.history,i=b(E(c,e.location),e.location),s=i?t.createHref(i):"",m=(0,a.Z)({},l,{href:s,navigate:function(){var n=E(c,e.location),r=(0,v.createPath)(e.location)===(0,v.createPath)(b(n));(o||r?t.replace:t.push)(n)}});return g!==_?m.ref=n||u:m.innerRef=u,f().createElement(r,m)}))})),w=function(e){return e},S=f().forwardRef;void 0===S&&(S=w),S((function(e,n){var t=e["aria-current"],r=void 0===t?"page":t,o=e.activeClassName,c=void 0===o?"active":o,u=e.activeStyle,l=e.className,s=e.exact,m=e.isActive,p=e.location,d=e.sensitive,v=e.strict,g=e.style,_=e.to,N=e.innerRef,C=(0,h.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return f().createElement(i.s6.Consumer,null,(function(e){e||(0,y.Z)(!1);var t=p||e.location,o=b(E(_,t),t),h=o.pathname,O=h&&h.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=O?(0,i.LX)(t.pathname,{path:O,exact:s,sensitive:d,strict:v}):null,Z=!!(m?m(x,t):x),j="function"==typeof l?l(Z):l,P="function"==typeof g?g(Z):g;Z&&(j=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return e})).join(" ")}(j,c),P=(0,a.Z)({},P,u));var k=(0,a.Z)({"aria-current":Z&&r||null,className:j,style:P,to:o},C);return w!==S?k.ref=n||N:k.innerRef=N,f().createElement($,k)}))}));var C,O,x,Z,j=function(e){var n,t=e.to,r=e.exact,a=e.strict,o=e.children;return f().createElement(i.AW,{path:t,exact:r,strict:a,children:function(e){e.location;var r=e.match?"active":null;return f().createElement("li",{className:r},n||(n=f().createElement($,{to:t},f().createElement("div",null,o))))}})},P=(0,i.EN)((function(){return C||(C=f().createElement("nav",{className:"navbar navbar-inverse"},f().createElement("div",{className:"container-fluid"},f().createElement("div",{className:"navbar-header"},f().createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar"},f().createElement("span",{className:"icon-bar"}),f().createElement("span",{className:"icon-bar"}),f().createElement("span",{className:"icon-bar"})),f().createElement("a",{className:"navbar-brand",href:"#"},"Logo")),f().createElement("div",{className:"collapse navbar-collapse",id:"myNavbar"},f().createElement("ul",{className:"nav navbar-nav"},f().createElement(j,{exact:!0,to:"/"},"Home"),f().createElement(j,{to:"/products"},"Products"),f().createElement(j,{to:"/deals"},"Deals"),f().createElement(j,{to:"/stores"},"Stores"),f().createElement(j,{to:"/contact"},"Contact")),f().createElement("ul",{className:"nav navbar-nav navbar-right"},f().createElement(j,{to:"/account"},f().createElement("span",{className:"glyphicon glyphicon-user"})," Your Account"),f().createElement(j,{to:"/cart"},f().createElement("span",{className:"glyphicon glyphicon-shopping-cart"})," Cart"))))))})),k=function(e){function n(){var n;return(n=e.call(this)||this).state={ready:!1},n}return(0,d.Z)(n,e),n.prototype.render=function(){var e=this;if("undefined"==typeof window)return"";var n=this.props.name,t=c.xarc.getSubApp(n);return c.xarc.getBundle(n)&&t?c._$.createElement("div",{className:"col-sm-4"},c._$.createElement("div",{className:"panel panel-primary"},c._$.createElement("div",{className:"panel-body"},t.start(null,{props:this.props})))):((0,c.dynamicLoadSubApp)({name:"Deal",onLoad:function(){return e.setState({ready:!0})}}),"")},n}(c._$.Component),A=function(e){var n=e.id;return(0,c.dynamicLoadSubApp)({name:"Deal",id:n}),c._$.createElement("div",{className:"col-sm-4"},c._$.createElement("div",{className:"panel panel-primary"},c._$.createElement("div",{className:"panel-body"},c._$.createElement("div",{id:n}))))},R=(0,u.$j)((function(e){return{value:e.number.value}}),(function(e){return{dispatch:e}}))((function(e){var n=e.value,t=e.dispatch;return c._$.createElement("div",null,c._$.createElement("div",null,"Redux State Demo: ",c._$.createElement("button",{onClick:function(){return t({type:"DEC_NUMBER"})}},"≪")," ",n," ",c._$.createElement("button",{onClick:function(){return t({type:"INC_NUMBER"})}},"≫")),c._$.createElement("div",null,c._$.createElement(A,(0,a.Z)({},e,{id:"deal_1"})),c._$.createElement(A,(0,a.Z)({},e,{id:"deal_2"})),c._$.createElement(A,(0,a.Z)({},e,{id:"deal_3"}))),O||(O=c._$.createElement("div",null,c._$.createElement(k,{name:"Deal",deal:"hello"}))))})),B=function(){return c._$.createElement(c.Il.Consumer,null,(function(e){var n=e.isSsr,t=e.ssr,r=e.subApp;return c._$.createElement("div",{className:"container-fluid text-center"},x||(x=c._$.createElement("p",null,"HOME")),c._$.createElement("div",null,"SubApp name: ",r?r.name:"Not Available from context"),c._$.createElement("div",null,"IS_SSR: ",""+Boolean(n)," HAS_REQUEST: ",t&&t.request?"yes":"no"))}))},D=function(){return"Stores"},M=function(){return"Contact"},L=(0,i.EN)((0,u.$j)((function(e){return e}),(function(e){return{dispatch:e}}))((function(e){return c._$.createElement("div",null,Z||(Z=c._$.createElement(P,null)),c._$.createElement(i.rs,null,c._$.createElement(i.AW,(0,a.Z)({path:"/",exact:!0,component:B},e)),c._$.createElement(i.AW,(0,a.Z)({path:"/products",component:p},e)),c._$.createElement(i.AW,(0,a.Z)({path:"/deals",component:R},e)),c._$.createElement(i.AW,(0,a.Z)({path:"/stores",component:D},e)),c._$.createElement(i.AW,(0,a.Z)({path:"/contact",component:M},e))))})));(0,o.cm)({name:"MainBody",Component:L,useReactRouter:!0,StartComponent:function(e){return c._$.createElement("div",null," ",c._$.createElement(i.F0,{history:(0,c.getBrowserHistory)()},c._$.createElement(L,e)))},prepare:function(){return new Promise((function(e,n){return e()}))},reduxShareStore:!0,reduxReducers:{number:function(e,n){return"INC_NUMBER"===n.type?{value:e.value+1}:"DEC_NUMBER"===n.type?{value:e.value-1}:e||{value:999}},items:function(e){return e||{items:[]}}}})},9185:function(e,n,t){e.exports=t(8702)},3348:function(e,n,t){var r=t(189),a=t(2951),o=t(1976),c=t(2471),u=t.n(c),i=t(7711),l=function(){function e(n){(0,a.Z)(this,e),this.ref=n}return(0,o.Z)(e,[{key:"renderStart",value:function(){var e=this.ref,n=e.subApp,t=e.element,a=e.options,o=(0,r.Z)((0,r.Z)({},a._prepared),a.props),c=n.info.StartComponent||n.info.Component;if(!t)return u().createElement(c,o);a.serverSideRendering?(0,i.hydrate)(u().createElement(c,o),t):(0,i.render)(u().createElement(c,o),t)}}]),e}();n.Z=l},3928:function(e,n,t){t.d(n,{_$:function(){return c.a},Il:function(){return u.Z}});var r=t(3348),a=t(3002);t.o(a,"dynamicLoadSubApp")&&t.d(n,{dynamicLoadSubApp:function(){return a.dynamicLoadSubApp}}),t.o(a,"getBrowserHistory")&&t.d(n,{getBrowserHistory:function(){return a.getBrowserHistory}}),t.o(a,"xarc")&&t.d(n,{xarc:function(){return a.xarc}});var o=t(2471),c=t.n(o),u=t(4310);(0,a.setupFramework)(r.Z)},2951:function(e,n,t){function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:function(){return r}})},1976:function(e,n,t){function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}t.d(n,{Z:function(){return a}})},189:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(4649);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,a.c=r,e=[],a.O=function(n,t,r,o){if(!t){var c=1/0;for(f=0;f<e.length;f++){t=e[f][0],r=e[f][1],o=e[f][2];for(var u=!0,i=0;i<t.length;i++)(!1&o||c>=o)&&Object.keys(a.O).every((function(e){return a.O[e](t[i])}))?t.splice(i--,1):(u=!1,o<c&&(c=o));if(u){e.splice(f--,1);var l=r();void 0!==l&&(n=l)}}return n}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[t,r,o]},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,{a:n}),n},a.d=function(e,n){for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(n,t){return a.f[t](e,n),n}),[]))},a.u=function(e){return(474===e?"vendors.~27de08f3":e)+".bundle."+{378:"688b8b186af2f73a9edb",474:"4d51c45dec4aa1c137ba",534:"c073347961dc7980e375",793:"6010554198f29b68c94d"}[e]+".js"},a.miniCssF=function(e){},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},a.l=function(e,t,r,o){if(n[e])n[e].push(t);else{var c,u;if(void 0!==r)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var f=i[l];if(f.getAttribute("src")==e){c=f;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=e),n[e]=[t];var s=function(t,r){c.onerror=c.onload=null,clearTimeout(m);var a=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(e){return e(r)})),t)return t(r)},m=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),u&&document.head.appendChild(c)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){a.S={};var e={},n={};a.I=function(t,r){r||(r=[]);var o=n[t];if(o||(o=n[t]={}),!(r.indexOf(o)>=0)){if(r.push(o),e[t])return e[t];a.o(a.S,t)||(a.S[t]={});var c=a.S[t],u=void 0,i=function(e,n,t,r){var a=c[e]=c[e]||{},o=a[n];(!o||!o.loaded&&(!r!=!o.eager?r:u>o.from))&&(a[n]={get:t,from:u,eager:!!r})},l=[];return"default"===t&&(i("history","4.10.1",(function(){return a.e(534).then((function(){return function(){return a(2534)}}))})),i("react-dom","17.0.2",(function(){return Promise.all([a.e(474),a.e(545)]).then((function(){return function(){return a(1542)}}))})),i("react","17.0.2",(function(){return a.e(378).then((function(){return function(){return a(7378)}}))})),i("subapp-web","1.0.50",(function(){return Promise.all([a.e(137),a.e(793)]).then((function(){return function(){return a(3793)}}))}))),e[t]=l.length?Promise.all(l).then((function(){return e[t]=1})):1}}}(),function(){var e;a.g.importScripts&&(e=a.g.location+"");var n=a.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}(),function(){var e=function(e){var n=function(e){return e.split(".").map((function(e){return+e==e?+e:e}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=t[1]?n(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,n(t[2]))),t[3]&&(r.push([]),r.push.apply(r,n(t[3]))),r},n=function(e){var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,r+="u"==(typeof(u=e[o]))[0]?"-":(a>0?".":"")+(a=2,u);return r}var c=[];for(o=1;o<e.length;o++){var u=e[o];c.push(0===u?"not("+i()+")":1===u?"("+i()+" || "+i()+")":2===u?c.pop()+" "+c.pop():n(u))}return i();function i(){return c.pop().replace(/^\((.+)\)$/,"$1")}},t=function(n,r){if(0 in n){r=e(r);var a=n[0],o=a<0;o&&(a=-a-1);for(var c=0,u=1,i=!0;;u++,c++){var l,f,s=u<n.length?(typeof n[u])[0]:"";if(c>=r.length||"o"==(f=(typeof(l=r[c]))[0]))return!i||("u"==s?u>a&&!o:""==s!=o);if("u"==f){if(!i||"u"!=s)return!1}else if(i)if(s==f)if(u<=a){if(l!=n[u])return!1}else{if(o?l>n[u]:l<n[u])return!1;l!=n[u]&&(i=!1)}else if("s"!=s&&"n"!=s){if(o||u<=a)return!1;i=!1,u--}else{if(u<=a||f<s!=o)return!1;i=!1}else"s"!=s&&"n"!=s&&(i=!1,u--)}}var m=[],p=m.pop.bind(m);for(c=1;c<n.length;c++){var d=n[c];m.push(1==d?p()|p():2==d?p()&p():d?t(d,r):!p())}return!!p()},r=function(n,t){var r=n[t];return Object.keys(r).reduce((function(n,t){return!n||!r[n].loaded&&function(n,t){n=e(n),t=e(t);for(var r=0;;){if(r>=n.length)return r<t.length&&"u"!=(typeof t[r])[0];var a=n[r],o=(typeof a)[0];if(r>=t.length)return"u"==o;var c=t[r],u=(typeof c)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=c)return a<c;r++}}(n,t)?t:n}),0)},o=function(e,a,o,u){var i=r(e,o);return t(u,i)||"undefined"!=typeof console&&console.warn&&console.warn(function(e,t,r){return"Unsatisfied version "+t+" of shared singleton module "+e+" (required "+n(r)+")"}(o,i,u)),c(e[o][i])},c=function(e){return e.loaded=1,e.get()},u=function(e){return function(n,t,r,o){var c=a.I(n);return c&&c.then?c.then(e.bind(e,n,a.S[n],t,r,o)):e(n,a.S[n],t,r,o)}}((function(e,n,t,r,c){return n&&a.o(n,t)?o(n,0,t,r):c()})),i={},l={3002:function(){return u("default","subapp-web",[1,1,0,50],(function(){return Promise.all([a.e(137),a.e(793)]).then((function(){return function(){return a(3793)}}))}))},2471:function(){return u("default","react",[1,17,0,2],(function(){return a.e(378).then((function(){return function(){return a(7378)}}))}))},137:function(){return u("default","history",[1,4,9,0],(function(){return a.e(534).then((function(){return function(){return a(2534)}}))}))},7711:function(){return u("default","react-dom",[1,17,0,2],(function(){return a.e(474).then((function(){return function(){return a(1542)}}))}))}};[3002,2471,137,7711].forEach((function(e){a.m[e]=function(n){i[e]=0,delete a.c[e];var t=l[e]();if("function"!=typeof t)throw new Error("Shared module is not available for eager consumption: "+e);n.exports=t()}}));var f={};a.f.consumes=function(e,n){a.o(f,e)&&f[e].forEach((function(e){if(a.o(i,e))return n.push(i[e]);var t=function(n){i[e]=0,a.m[e]=function(t){delete a.c[e],t.exports=n()}},r=function(n){delete i[e],a.m[e]=function(t){throw delete a.c[e],n}};try{var o=l[e]();o.then?n.push(i[e]=o.then(t).catch(r)):t(o)}catch(e){r(e)}}))}}(),function(){var e={493:0,590:0,145:0,545:0,502:0,621:0,137:0,86:0,718:0};a.f.j=function(n,t){var r=a.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^([15]45|137|621|86)$/.test(n))e[n]=0;else{var o=new Promise((function(t,a){r=e[n]=[t,a]}));t.push(r[2]=o);var c=a.p+a.u(n),u=new Error;a.l(c,(function(t){if(a.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+n+" failed.\n("+o+": "+c+")",u.name="ChunkLoadError",u.type=o,u.request=c,r[1](u)}}),"chunk-"+n,n)}},a.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,o,c=t[0],u=t[1],i=t[2],l=0;if(c.some((function(n){return 0!==e[n]}))){for(r in u)a.o(u,r)&&(a.m[r]=u[r]);if(i)var f=i(a)}for(n&&n(t);l<c.length;l++)o=c[l],a.o(e,o)&&e[o]&&e[o][0](),e[c[l]]=0;return a.O(f)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),a.O(void 0,[829,961,145,545,621,137,86],(function(){return a(6231)}));var o=a.O(void 0,[829,961,145,545,621,137,86],(function(){return a(7607)}));o=a.O(o)}();
//# sourceMappingURL=../map/mainbody.bundle.a53f560210969cf34be5.js.map