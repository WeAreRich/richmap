(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"5wkb":function(e,t,r){"use strict";var o=r("w8F3");r.n(o).a},H09I:function(e,t,r){"use strict";function o(e){return void 0===e&&(e=document.body),!0===e?document.body:e instanceof window.Node?e:document.querySelector(e)}const n={inserted(e,{value:t},r){if(e.dataset&&"true"!==e.dataset.transfer)return!1;e.className=e.className?e.className+" v-transfer-dom":"v-transfer-dom";const n=e.parentNode;if(!n)return;const i=document.createComment("");let a=!1;!1!==t&&(n.replaceChild(i,e),o(t).appendChild(e),a=!0),e.__transferDomData||(e.__transferDomData={parentNode:n,home:i,target:o(t),hasMovedOut:a})},componentUpdated(e,{value:t}){if(e.dataset&&"true"!==e.dataset.transfer)return!1;const r=e.__transferDomData;if(!r)return;const n=r.parentNode,i=r.home,a=r.hasMovedOut;!a&&t?(n.replaceChild(i,e),o(t).appendChild(e),e.__transferDomData=Object.assign({},e.__transferDomData,{hasMovedOut:!0,target:o(t)})):a&&!1===t?(n.replaceChild(e,i),e.__transferDomData=Object.assign({},e.__transferDomData,{hasMovedOut:!1,target:o(t)})):t&&o(t).appendChild(e)},unbind(e){if(e.dataset&&"true"!==e.dataset.transfer)return!1;e.className=e.className.replace("v-transfer-dom",""),e.__transferDomData&&(!0===e.__transferDomData.hasMovedOut&&e.__transferDomData.parentNode&&e.__transferDomData.parentNode.appendChild(e),e.__transferDomData=null)}};t.a=n},eFtz:function(e,t,r){(function(t){(function(){"use strict";"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t||Function("return this")()})(),e.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};t.install=function(e){e.directive("click-outside",f)};var i=Object.create(null),a=Object.create(null),s=[i,a],c=function(e,t,r){var o=r.target,n=function(t){var n=t.el;if(n!==o&&!n.contains(o)){var i=t.binding;i.modifiers.stop&&r.stopPropagation(),i.modifiers.prevent&&r.preventDefault(),i.value.call(e,r)}};Object.keys(t).forEach(function(e){return t[e].forEach(n)})},p=function(e){c(this,i,e)},u=function(e){c(this,a,e)},l=function(e){return e?p:u},f=t.directive=Object.defineProperties({},{$_captureInstances:{value:i},$_nonCaptureInstances:{value:a},$_onCaptureEvent:{value:p},$_onNonCaptureEvent:{value:u},bind:{value:function(e,t){if("function"!=typeof t.value)throw new TypeError("Binding value must be a function.");var r=t.arg||"click",s=n({},t,{arg:r,modifiers:n({capture:!1,prevent:!1,stop:!1},t.modifiers)}),c=s.modifiers.capture,p=c?i:a;Array.isArray(p[r])||(p[r]=[]),1===p[r].push({el:e,binding:s})&&"object"===("undefined"==typeof document?"undefined":o(document))&&document&&document.addEventListener(r,l(c),c)}},unbind:{value:function(e){var t=function(t){return t.el!==e};s.forEach(function(e){var r=Object.keys(e);if(r.length){var n=e===i;r.forEach(function(r){var i=e[r].filter(t);i.length?e[r]=i:("object"===("undefined"==typeof document?"undefined":o(document))&&document&&document.removeEventListener(r,l(n),n),delete e[r])})}})}}})}])}).call(this,r("yLpj"))},iFuS:function(e,t,r){"use strict";r.r(t);var o,n=r("AfiY"),i=r("aICe"),a=r("fR+o"),s=r("+IY/"),c=r("Kw5r"),p=r("YKMj"),u=r("jF86"),l=r("LdhC"),f=r("4ZJM"),d=r.n(f),h=r("OK+q"),v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),m=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"===("undefined"==typeof Reflect?"undefined":v(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},b=function(e){function t(){var t=e.call(this)||this;return t.TAG="PovertyMap",t.FIRST_LEVEL_LAYER_ID="first-level",t.SECOND_LEVEL_LAYER_ID="second-level",t.THIRD_LEVEL_LAYER_ID="third-level",t.borderPaint={"line-color":"rgba(255,255,255,0.5)","line-width":2},t.firstCheck=!1,t.secondCheck=!1,t.thirdCheck=!1,l.a.info(t.TAG,"constructor"),t.query="",t.searchItems=[],t.nominatimService=new u.a,t}return y(t,e),t.prototype.onMapUrlChange=function(e,t){l.a.info(this.TAG,e,t),this.map.setStyle(e)},t.prototype.mounted=function(){l.a.info(this.TAG,"mounted"),this.initMap()},t.prototype.initMap=function(){var e=this;l.a.info(this.TAG,"start init map"),d.a.accessToken=h.a,this.map=new d.a.Map({container:"map-container",style:this.mapUrl,maxBounds:h.b}),this.map.addControl(new d.a.NavigationControl),this.map.addControl(new d.a.ScaleControl),this.map.on("load",function(){e.onMapLoad(e.map)})},t.prototype.click=function(){},t.prototype.onMapLoad=function(e){},t.prototype.handleChangeFirstLevelCheckBox=function(){this.firstCheck=!this.firstCheck,this.firstCheck?this.showFirstLevelBorder():this.map.removeLayer(this.FIRST_LEVEL_LAYER_ID)},t.prototype.handleChangeSecondLevelCheckBox=function(){this.secondCheck=!this.secondCheck,this.secondCheck?this.showSecondLevelBorder():this.map.removeLayer(this.SECOND_LEVEL_LAYER_ID)},t.prototype.handleChangeThirdLevelCheckBox=function(){this.thirdCheck=!this.thirdCheck,this.thirdCheck?this.showThirdLevelBorder():this.map.removeLayer(this.THIRD_LEVEL_LAYER_ID)},t.prototype.showFirstLevelBorder=function(){var e=this;if(l.a.info(this.TAG,"show first level border"),!this.firstLevelLayer){this.map.addSource(this.FIRST_LEVEL_LAYER_ID,{type:"vector",url:"mapbox://vsr2018.78vj6bhk"});var t={id:this.FIRST_LEVEL_LAYER_ID,type:"line",source:this.FIRST_LEVEL_LAYER_ID,"source-layer":"first-6jawx0",paint:this.borderPaint};this.firstLevelLayer=t}this.map.addLayer(this.firstLevelLayer),this.map.on("sourcedata",this.FIRST_LEVEL_LAYER_ID,function(){l.a.info(e.TAG,"load layer")})},t.prototype.showSecondLevelBorder=function(){if(l.a.info(this.TAG,"showSecondLevelBorder"),!this.secondLevelLayer){this.map.addSource(this.SECOND_LEVEL_LAYER_ID,{type:"vector",url:"mapbox://vsr2018.050px5x2"});var e={id:this.SECOND_LEVEL_LAYER_ID,type:"line",source:this.SECOND_LEVEL_LAYER_ID,paint:this.borderPaint,"source-layer":"second-dsvifq"};this.secondLevelLayer=e}this.map.addLayer(this.secondLevelLayer)},t.prototype.showThirdLevelBorder=function(){if(l.a.info(this.TAG,"showThirdLevelBorder"),!this.thirdLevelLayer){this.map.addSource(this.THIRD_LEVEL_LAYER_ID,{type:"vector",url:"mapbox://vsr2018.5tz0fat5"});var e={id:this.THIRD_LEVEL_LAYER_ID,type:"line",source:this.THIRD_LEVEL_LAYER_ID,paint:this.borderPaint,"source-layer":"third-dppmjz"};this.thirdLevelLayer=e}this.map.addLayer(this.thirdLevelLayer)},m([Object(p.c)({default:function(){return"mapbox://styles/mapbox/satellite-v9"}})],t.prototype,"mapUrl",void 0),m([Object(p.e)("mapUrl")],t.prototype,"onMapUrlChange",null),m([Object(p.b)()],t.prototype,"onMapLoad",null),m([Object(p.a)({components:{Dropdown:s.a,Tooltip:a.a,DropdownMenu:i.a,Button:n.a}})],t)}(c.default),_=(r("5wkb"),r("KHd+")),L=Object(_.a)(b,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"outer"},[r("div",{staticClass:"border-control"},[r("Dropdown",{staticStyle:{position:"relative"},attrs:{trigger:"click",placement:"bottom-start"}},[r("Tooltip",{attrs:{content:"边界",placement:"right"}},[r("Button",{attrs:{icon:"ios-browsers"}})],1),e._v(" "),r("DropdownMenu",{staticStyle:{"text-align":"left",width:"130px"},attrs:{slot:"list"},slot:"list"},[r("div",{staticStyle:{display:"flex","flex-direction":"column",padding:"10px"}},[r("div",[r("input",{attrs:{type:"checkbox",id:"first"},on:{click:e.handleChangeFirstLevelCheckBox}}),e._v(" "),r("label",{attrs:{for:"first"}},[e._v("一级行政区边界")])]),e._v(" "),r("div",[r("input",{attrs:{type:"checkbox",id:"second"},on:{click:e.handleChangeSecondLevelCheckBox}}),e._v(" "),r("label",{attrs:{for:"second"}},[e._v("二级行政区边界")])]),e._v(" "),r("div",[r("input",{attrs:{type:"checkbox",id:"third"},on:{click:e.handleChangeThirdLevelCheckBox}}),e._v(" "),r("label",{attrs:{for:"third"}},[e._v("三级行政区边界")])])])])],1)],1),e._v(" "),r("div",{attrs:{id:"map-container"}})])},[],!1,null,"3cf78593",null);t.default=L.exports},jF86:function(e,t,r){"use strict";var o=r("LdhC"),n=function(){function e(){}return e.prototype.search=function(e){return function(e,t,r,o){return new(r||(r=Promise))(function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})}(this,void 0,void 0,function(){var t,r,n;return function(e,t){var r,o,n,i,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(n=2&i[0]?o.return:i[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,i[1])).done)return n;switch(o=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){a.label=i[1];break}if(6===i[0]&&a.label<n[1]){a.label=n[1],n=i;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(i);break}n[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,function(i){switch(i.label){case 0:t="https://nominatim.openstreetmap.org/search?format=json&q="+decodeURIComponent(e),o.a.info(this,"start to fetch "+t),i.label=1;case 1:return i.trys.push([1,4,,5]),[4,fetch(t)];case 2:return[4,(r=i.sent()).json()];case 3:return r=i.sent(),o.a.info(this,"fetch success",r),[2,r];case 4:throw n=i.sent(),o.a.error(this,"fetch error",n),n;case 5:return[2]}})})},e}();t.a=n},oBAn:function(e,t,r){"use strict";const o=r("Kw5r").default.prototype.$isServer,n=o?function(){}:r("0uR5");t.a={props:{placement:{type:String,default:"bottom"},boundariesPadding:{type:Number,default:5},reference:Object,popper:Object,offset:{default:0},value:{type:Boolean,default:!1},transition:String,options:{type:Object,default:()=>({modifiers:{computeStyle:{gpuAcceleration:!1},preventOverflow:{boundariesElement:"window"}}})}},data(){return{visible:this.value}},watch:{value:{immediate:!0,handler(e){this.visible=e,this.$emit("input",e)}},visible(e){e?(this.updatePopper(),this.$emit("on-popper-show")):this.$emit("on-popper-hide"),this.$emit("input",e)}},methods:{createPopper(){if(o)return;if(!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement))return;const e=this.options,t=this.popper||this.$refs.popper,r=this.reference||this.$refs.reference;t&&r&&(this.popperJS&&this.popperJS.hasOwnProperty("destroy")&&this.popperJS.destroy(),e.placement=this.placement,e.modifiers.offset||(e.modifiers.offset={}),e.modifiers.offset.offset=this.offset,e.onCreate=(()=>{this.$nextTick(this.updatePopper),this.$emit("created",this)}),this.popperJS=new n(r,t,e))},updatePopper(){o||(this.popperJS?this.popperJS.update():this.createPopper())},doDestroy(){o||this.visible||(this.popperJS.destroy(),this.popperJS=null)}},updated(){this.$nextTick(()=>this.updatePopper())},beforeDestroy(){o||this.popperJS&&this.popperJS.destroy()}}},w8F3:function(e,t){}}]);
//# sourceMappingURL=14.12e95ff89232857db25b.js.map