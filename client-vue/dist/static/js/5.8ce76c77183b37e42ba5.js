(window.webpackJsonp=window.webpackJsonp||[]).push([[5,14],{"2XyJ":function(e,t,n){"use strict";n.r(t);var o,r=n("Kw5r"),i=n("iFuS"),a=n("YKMj"),s=n("OK+q"),c=n("LdhC"),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.TAG="Try.vue",t.mapStyles=s.d,t.urls=["mapbox://wenxiangdong.0u7nbzi0","mapbox://wenxiangdong.dhr5yy3g"],t.ids=[],t.index="night-light-2013",t}return u(t,e),t.prototype.handleSelect=function(e){c.a.info(this.TAG,e)},t.prototype.handleOnMapLoad=function(e){c.a.info(this.TAG,"map loaded",e),this.map=e},t.prototype.handleChange=function(){c.a.info(this.TAG,"change"),this.map.addSource("hubei",{type:"raster",url:"mapbox://vsr2018.2g41qcaf"}),this.map.addLayer({id:"hubei",type:"raster",source:"hubei","source-layer":"1-6zujon"})},t.prototype.handleShow=function(e){c.a.info(this.TAG,e),this.animationService.showLayer(e)},t.prototype.handleHide=function(){this.animationService&&this.animationService.hideLayer(this.id)},t.prototype.handleAuto=function(){this.animationService.autoDisplay()},function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}([Object(a.a)({components:{PovertyMap:i.default}})],t)}(r.default),f=(n("ymnH"),n("KHd+")),d=Object(f.a)(p,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"80%",margin:"auto"}},[n("poverty-map",{on:{"on-map-load":e.handleOnMapLoad}}),e._v(" "),n("Button",{on:{click:e.handleChange}},[e._v("change")]),e._v(" "),n("Button",{on:{click:e.handleHide}},[e._v("hide")]),e._v(" "),n("ol",e._l(e.ids,function(t){return n("li",[e._v("\n            "+e._s(t)+"\n            "),n("Button",{on:{click:function(n){e.handleShow(t)}}},[e._v("显示")])],1)})),e._v(" "),n("Button",{on:{click:e.handleAuto}},[e._v("Auto")])],1)},[],!1,null,null,null);t.default=d.exports},"3IHN":function(e,t){},CIwq:function(e,t,n){"use strict";var o=n("L7K1");n.n(o).a},H09I:function(e,t,n){"use strict";function o(e){return void 0===e&&(e=document.body),!0===e?document.body:e instanceof window.Node?e:document.querySelector(e)}const r={inserted(e,{value:t},n){if(e.dataset&&"true"!==e.dataset.transfer)return!1;e.className=e.className?e.className+" v-transfer-dom":"v-transfer-dom";const r=e.parentNode;if(!r)return;const i=document.createComment("");let a=!1;!1!==t&&(r.replaceChild(i,e),o(t).appendChild(e),a=!0),e.__transferDomData||(e.__transferDomData={parentNode:r,home:i,target:o(t),hasMovedOut:a})},componentUpdated(e,{value:t}){if(e.dataset&&"true"!==e.dataset.transfer)return!1;const n=e.__transferDomData;if(!n)return;const r=n.parentNode,i=n.home,a=n.hasMovedOut;!a&&t?(r.replaceChild(i,e),o(t).appendChild(e),e.__transferDomData=Object.assign({},e.__transferDomData,{hasMovedOut:!0,target:o(t)})):a&&!1===t?(r.replaceChild(e,i),e.__transferDomData=Object.assign({},e.__transferDomData,{hasMovedOut:!1,target:o(t)})):t&&o(t).appendChild(e)},unbind(e){if(e.dataset&&"true"!==e.dataset.transfer)return!1;e.className=e.className.replace("v-transfer-dom",""),e.__transferDomData&&(!0===e.__transferDomData.hasMovedOut&&e.__transferDomData.parentNode&&e.__transferDomData.parentNode.appendChild(e),e.__transferDomData=null)}};t.a=r},L7K1:function(e,t){},LdhC:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=function(){function e(){}return e.info=function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var r=(new Date).toLocaleTimeString();if(console.info){console.info("At "+r+" in 【"+t+"】");for(var i=0,a=n;i<a.length;i++){var s=a[i];console.info(s)}console.log("-------------------------------")}else e.log.apply(e,[t].concat(n))},e.error=function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var r=(new Date).toLocaleTimeString();if(console.error){console.error("At "+r+" in "+t);for(var i=0,a=n;i<a.length;i++){var s=a[i];console.error(s)}}else e.log.apply(e,[t].concat(n))},e.log=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=(new Date).toLocaleTimeString();console.log("At "+o+" in "+e);for(var r=0,i=t;r<i.length;r++){var a=i[r];console.log(a)}},e}()},"OK+q":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return r}),n.d(t,"e",function(){return a});var o="pk.eyJ1Ijoid2VueGlhbmdkb25nIiwiYSI6ImNqajEyN2owYjBvNHYzdm10c2p2NXowM2kifQ.kixIr8Jwk2mAqmlQCWW88Q",r=[[108.3,29],[116.3,33.3]],i={"night-light-2001":"mapbox://styles/wenxiangdong/cjjuyolqw21sf2rmmrrp13azv","night-light-2013":"mapbox://styles/wenxiangdong/cjjuzjzid0a1a2ro45v4abumf"},a={hubeiDEM:"mapbox://wenxiangdong.6mjehw01",hubeiGDP:"mapbox://wenxiangdong.aa00vskv",hubeiSlope:"mapbox://wenxiangdong.9vwvp9tc",hubieNightLight:"mapbox://wenxiangdong.527q7f2p"},s="rec-layer-id"},eFtz:function(e,t,n){(function(t){(function(){"use strict";"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t||Function("return this")()})(),e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.install=function(e){e.directive("click-outside",f)};var i=Object.create(null),a=Object.create(null),s=[i,a],c=function(e,t,n){var o=n.target,r=function(t){var r=t.el;if(r!==o&&!r.contains(o)){var i=t.binding;i.modifiers.stop&&n.stopPropagation(),i.modifiers.prevent&&n.preventDefault(),i.value.call(e,n)}};Object.keys(t).forEach(function(e){return t[e].forEach(r)})},l=function(e){c(this,i,e)},u=function(e){c(this,a,e)},p=function(e){return e?l:u},f=t.directive=Object.defineProperties({},{$_captureInstances:{value:i},$_nonCaptureInstances:{value:a},$_onCaptureEvent:{value:l},$_onNonCaptureEvent:{value:u},bind:{value:function(e,t){if("function"!=typeof t.value)throw new TypeError("Binding value must be a function.");var n=t.arg||"click",s=r({},t,{arg:n,modifiers:r({capture:!1,prevent:!1,stop:!1},t.modifiers)}),c=s.modifiers.capture,l=c?i:a;Array.isArray(l[n])||(l[n]=[]),1===l[n].push({el:e,binding:s})&&"object"===("undefined"==typeof document?"undefined":o(document))&&document&&document.addEventListener(n,p(c),c)}},unbind:{value:function(e){var t=function(t){return t.el!==e};s.forEach(function(e){var n=Object.keys(e);if(n.length){var r=e===i;n.forEach(function(n){var i=e[n].filter(t);i.length?e[n]=i:("object"===("undefined"==typeof document?"undefined":o(document))&&document&&document.removeEventListener(n,p(r),r),delete e[n])})}})}}})}])}).call(this,n("yLpj"))},iFuS:function(e,t,n){"use strict";n.r(t);var o,r=n("AfiY"),i=n("aICe"),a=n("fR+o"),s=n("+IY/"),c=n("Kw5r"),l=n("YKMj"),u=n("jF86"),p=n("LdhC"),f=n("4ZJM"),d=n.n(f),h=n("OK+q"),v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":v(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},b=function(e){function t(){var t=e.call(this)||this;return t.TAG="PovertyMap",t.FIRST_LEVEL_LAYER_ID="first-level",t.SECOND_LEVEL_LAYER_ID="second-level",t.THIRD_LEVEL_LAYER_ID="third-level",t.borderPaint={"line-color":"rgba(255,255,255,0.5)","line-width":2},t.firstLevelLayer=void 0,t.secondLevelLayer=void 0,t.thirdLevelLayer=void 0,t.firstCheck=!1,t.secondCheck=!1,t.thirdCheck=!1,t.mapUrl="mapbox://styles/mapbox/satellite-v9",p.a.info(t.TAG,"constructor"),t.query="",t.searchItems=[],t.nominatimService=new u.a,t}return y(t,e),t.prototype.onMapUrlChange=function(e,t){p.a.info(this.TAG,e,t),this.map.setStyle(e)},t.prototype.mounted=function(){p.a.info(this.TAG,"mounted"),this.firstLevelLayer=void 0,this.initMap()},t.prototype.initMap=function(){var e=this;p.a.info(this.TAG,"start init map"),d.a.accessToken=h.a,this.map=new d.a.Map({container:"map-container",style:this.mapUrl,maxBounds:h.b}),this.map.addControl(new d.a.NavigationControl),this.map.addControl(new d.a.ScaleControl),this.map.on("load",function(){e.$emit("on-map-load",e.map)})},t.prototype.click=function(){console.log("hhhhh")},t.prototype.handleChangeFirstLevelCheckBox=function(){console.log("here"),this.firstCheck=!this.firstCheck,this.firstCheck?this.showFirstLevelBorder():this.map.removeLayer(this.FIRST_LEVEL_LAYER_ID)},t.prototype.handleChangeSecondLevelCheckBox=function(){this.secondCheck=!this.secondCheck,this.secondCheck?this.showSecondLevelBorder():this.map.removeLayer(this.SECOND_LEVEL_LAYER_ID)},t.prototype.handleChangeThirdLevelCheckBox=function(){this.thirdCheck=!this.thirdCheck,this.thirdCheck?this.showThirdLevelBorder():this.map.removeLayer(this.THIRD_LEVEL_LAYER_ID)},t.prototype.showFirstLevelBorder=function(){var e=this;if(p.a.info(this.TAG,"show first level border"),!this.firstLevelLayer){console.log("add first"),this.map.addSource(this.FIRST_LEVEL_LAYER_ID,{type:"vector",url:"mapbox://vsr2018.78vj6bhk"});var t={id:this.FIRST_LEVEL_LAYER_ID,type:"line",source:this.FIRST_LEVEL_LAYER_ID,"source-layer":"first-6jawx0",paint:this.borderPaint};this.firstLevelLayer=t,console.log(this.firstLevelLayer)}this.map.addLayer(this.firstLevelLayer),this.map.on("sourcedata",this.FIRST_LEVEL_LAYER_ID,function(){p.a.info(e.TAG,"load layer")})},t.prototype.showSecondLevelBorder=function(){if(p.a.info(this.TAG,"showSecondLevelBorder"),!this.secondLevelLayer){this.map.addSource(this.SECOND_LEVEL_LAYER_ID,{type:"vector",url:"mapbox://vsr2018.050px5x2"});var e={id:this.SECOND_LEVEL_LAYER_ID,type:"line",source:this.SECOND_LEVEL_LAYER_ID,paint:this.borderPaint,"source-layer":"second-dsvifq"};this.secondLevelLayer=e}this.map.addLayer(this.secondLevelLayer)},t.prototype.showThirdLevelBorder=function(){if(p.a.info(this.TAG,"showThirdLevelBorder"),!this.thirdLevelLayer){this.map.addSource(this.THIRD_LEVEL_LAYER_ID,{type:"vector",url:"mapbox://vsr2018.5tz0fat5"});var e={id:this.THIRD_LEVEL_LAYER_ID,type:"line",source:this.THIRD_LEVEL_LAYER_ID,paint:this.borderPaint,"source-layer":"third-dppmjz"};this.thirdLevelLayer=e}this.map.addLayer(this.thirdLevelLayer)},m([Object(l.d)("mapUrl")],t.prototype,"onMapUrlChange",null),m([Object(l.a)({components:{Dropdown:s.a,Tooltip:a.a,DropdownMenu:i.a,Button:r.a}})],t)}(c.default),_=(n("CIwq"),n("KHd+")),L=Object(_.a)(b,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"outer"},[n("div",{staticClass:"border-control"},[n("Dropdown",{staticStyle:{position:"relative"},attrs:{trigger:"click",placement:"bottom-start"}},[n("Tooltip",{attrs:{content:"边界",placement:"right"}},[n("Button",{attrs:{icon:"ios-browsers"}})],1),e._v(" "),n("DropdownMenu",{staticStyle:{"text-align":"left",width:"130px"},attrs:{slot:"list"},slot:"list"},[n("div",{staticStyle:{display:"flex","flex-direction":"column",padding:"10px"}},[n("div",[n("input",{attrs:{type:"checkbox",id:"first"},on:{click:e.handleChangeFirstLevelCheckBox}}),e._v(" "),n("label",{attrs:{for:"first"}},[e._v("一级行政区边界")])]),e._v(" "),n("div",[n("input",{attrs:{type:"checkbox",id:"second"},on:{click:e.handleChangeSecondLevelCheckBox}}),e._v(" "),n("label",{attrs:{for:"second"}},[e._v("二级行政区边界")])]),e._v(" "),n("div",[n("input",{attrs:{type:"checkbox",id:"third"},on:{click:e.handleChangeThirdLevelCheckBox}}),e._v(" "),n("label",{attrs:{for:"third"}},[e._v("三级行政区边界")]),e._v(" "),n("Button",{on:{click:e.handleChangeFirstLevelCheckBox}})],1)])])],1)],1),e._v(" "),n("div",{attrs:{id:"map-container"}})])},[],!1,null,"8d93675c",null);t.default=L.exports},jF86:function(e,t,n){"use strict";var o=n("LdhC"),r=function(){function e(){}return e.prototype.search=function(e){return function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})}(this,void 0,void 0,function(){var t,n,r;return function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,function(i){switch(i.label){case 0:t="https://nominatim.openstreetmap.org/search?format=json&q="+decodeURIComponent(e),o.a.info(this,"start to fetch "+t),i.label=1;case 1:return i.trys.push([1,4,,5]),[4,fetch(t)];case 2:return[4,(n=i.sent()).json()];case 3:return n=i.sent(),o.a.info(this,"fetch success",n),[2,n];case 4:throw r=i.sent(),o.a.error(this,"fetch error",r),r;case 5:return[2]}})})},e}();t.a=r},oBAn:function(e,t,n){"use strict";const o=n("Kw5r").default.prototype.$isServer,r=o?function(){}:n("0uR5");t.a={props:{placement:{type:String,default:"bottom"},boundariesPadding:{type:Number,default:5},reference:Object,popper:Object,offset:{default:0},value:{type:Boolean,default:!1},transition:String,options:{type:Object,default:()=>({modifiers:{computeStyle:{gpuAcceleration:!1},preventOverflow:{boundariesElement:"window"}}})}},data(){return{visible:this.value}},watch:{value:{immediate:!0,handler(e){this.visible=e,this.$emit("input",e)}},visible(e){e?(this.updatePopper(),this.$emit("on-popper-show")):this.$emit("on-popper-hide"),this.$emit("input",e)}},methods:{createPopper(){if(o)return;if(!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement))return;const e=this.options,t=this.popper||this.$refs.popper,n=this.reference||this.$refs.reference;t&&n&&(this.popperJS&&this.popperJS.hasOwnProperty("destroy")&&this.popperJS.destroy(),e.placement=this.placement,e.modifiers.offset||(e.modifiers.offset={}),e.modifiers.offset.offset=this.offset,e.onCreate=(()=>{this.$nextTick(this.updatePopper),this.$emit("created",this)}),this.popperJS=new r(n,t,e))},updatePopper(){o||(this.popperJS?this.popperJS.update():this.createPopper())},doDestroy(){o||this.visible||(this.popperJS.destroy(),this.popperJS=null)}},updated(){this.$nextTick(()=>this.updatePopper())},beforeDestroy(){o||this.popperJS&&this.popperJS.destroy()}}},ymnH:function(e,t,n){"use strict";var o=n("3IHN");n.n(o).a}}]);
//# sourceMappingURL=5.8ce76c77183b37e42ba5.js.map