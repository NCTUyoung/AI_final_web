(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{195:function(t,e,n){var content=n(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("6bf49e18",content,!0,{sourceMap:!1})},209:function(t,e,n){"use strict";n(195)},210:function(t,e,n){var o=n(64)(!1);o.push([t.i,".container[data-v-4739622e]{padding:12px}canvas[data-v-4739622e]{background:#556b2f}body[data-v-4739622e]{background-color:#f0f0f0}#app[data-v-4739622e]{text-align:center;color:#2c3e50;margin-top:60px}#video[data-v-4739622e]{width:100%}#output[data-v-4739622e],#video[data-v-4739622e]{background-color:#000}#output[data-v-4739622e]{height:256px;width:256px}#canvas[data-v-4739622e],#output[data-v-4739622e]{display:none}ul[data-v-4739622e]{flex-direction:row;flex-wrap:nowrap}li[data-v-4739622e],ul[data-v-4739622e]{display:flex}li[data-v-4739622e]{padding:5px}.imgBox.choose[data-v-4739622e]{border-color:#3cb371}.imgBox[data-v-4739622e]{background:transparent;margin:2px;border:4px solid transparent;border-radius:10px}.list-enter-active[data-v-4739622e],.list-leave-active[data-v-4739622e]{transition:all 1s}.list-enter[data-v-4739622e],.list-leave-to[data-v-4739622e]{opacity:0;transform:translateY(30px)}.video-crop[data-v-4739622e]{background:#3cb371}.float-crop[data-v-4739622e]{position:fixed;top:50%;left:50%;z-index:1}",""]),t.exports=o},211:function(t,e,n){"use strict";n.r(e);var o=n(4),r=(n(27),n(196),n(14),n(31),n(199),n(45),n(200)),c=n.n(r),l=n(203),d=n.n(l),v=n(208),f={data:function(){return{video:{},canvas:{},transform:[],captures:[],choose_idx:[],imgData:[],outImage:{},session:{},load:!1,finish:!0,output_canvas:{}}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.video=t.$refs.video,t.output_canvas=t.$refs.output,console.log(navigator.mediaDevices),console.log(navigator.mediaDevices.getUserMedia),navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(console.log("Something went wrong!"),navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){t.video.srcObject=e,console.log(e),t.video.play()})).catch((function(t){console.log("Something went wrong!")})));case 5:case"end":return e.stop()}}),e)})))()},computed:{runcheck:function(){return!this.load||!this.finish}},methods:{capture:function(){this.canvas=this.$refs.canvas,this.canvas.getContext("2d").drawImage(this.video,0,0,256,256),this.captures.push({img:this.canvas.toDataURL("image/png"),choose:!1}),this.runEnhance()},choose:function(t){this.captures[t].choose=!this.captures[t].choose,this.transform[t].choose=!this.transform[t].choose,this.choose_idx.push(t)},remove:function(){this.captures=this.captures.filter((function(t,e,n){return console.log(t),!1===t.choose})),this.transform=this.transform.filter((function(t,e,n){return console.log(t),!1===t.choose})),this.choose_idx.length=0},loadModel:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.session=new v.InferenceSession({backendHint:"wasm"}),e.next=3,t.session.loadModel("fast_depth.onnx");case 3:console.log("load finished !"),t.load=!0;case 5:case"end":return e.stop()}}),e)})))()},runEnhance:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,l,data,f,h,m,x,w,k,y,_,C;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.finish=!1,n=t.canvas.getContext("2d"),o=document.getElementById("output"),r=o.getContext("2d"),l=n.getImageData(0,0,256,256),r.putImageData(l,0,0),data=l.data,f=l.width,h=l.height,m=c()(new Float32Array(data),[f,h,4]),x=c()(new Float32Array(f*h*3),[1,3,f,h]),d.a.assign(x.pick(0,0,null,null),m.pick(null,null,0)),d.a.assign(x.pick(0,1,null,null),m.pick(null,null,1)),d.a.assign(x.pick(0,2,null,null),m.pick(null,null,2)),d.a.divseq(x,255),w=[new v.Tensor(new Float32Array(x.data),"float32",[1,3,f,h])],console.log(w),e.next=17,t.session.run(w);case 17:k=e.sent,y=k.values().next().value,console.log(y),_=c()(new Float32Array(y.data),[3,f,h]),C=c()(new Float32Array(f*h*4),[f,h,4]),d.a.assign(C.pick(null,null,0),_.pick(0,null,null)),d.a.assign(C.pick(null,null,1),_.pick(1,null,null)),d.a.assign(C.pick(null,null,2),_.pick(2,null,null)),d.a.mulseq(C,255),d.a.assigns(C.pick(null,null,3),255),t.outImage=new ImageData(new Uint8ClampedArray(C.data),f,h),r.putImageData(t.outImage,0,0),t.finish=!0,t.transform.push({img:t.output_canvas.toDataURL("image/png"),choose:!1});case 31:case"end":return e.stop()}}),e)})))()}}},h=(n(209),n(38)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[n("v-flex",{attrs:{shrink:""}},[n("v-btn",{staticClass:"green",attrs:{id:"snap",disabled:t.runcheck},on:{click:function(e){return t.capture()}}},[t._v("Snap Photo")]),t._v(" "),n("v-btn",{staticClass:"red",attrs:{id:"rm"},on:{click:function(e){return t.remove()}}},[t._v("Remove")]),t._v(" "),n("v-btn",{staticClass:"orange",attrs:{id:"v",disabled:t.load},on:{click:function(e){return t.loadModel()}}},[t._v("loadModel")]),t._v(" "),n("canvas",{ref:"canvas",attrs:{id:"canvas",width:"256",height:"256"}}),t._v(" "),n("v-img",{attrs:{id:"i"}})],1)],1),t._v(" "),n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[n("h2",[t._v("Camera Video Stream")]),t._v(" "),n("v-flex",{attrs:{md12:""}},[n("video",{ref:"video",attrs:{id:"video",width:"256",height:"256",autoplay:""}})]),t._v(" "),n("v-flex",{attrs:{md12:""}},[n("canvas",{ref:"output",attrs:{id:"output",width:"256",height:"256"}})])],1),t._v(" "),n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},t._l(t.captures,(function(e,o){return n("v-flex",{key:e.img,staticClass:"imgBox",class:{choose:e.choose},attrs:{xs12:"",sm12:"",md2:"","d-flex":""}},[n("v-card",{staticClass:"d-flex",attrs:{flat:""},on:{click:function(e){return t.choose(o)}}},[n("v-img",{staticClass:"grey lighten-2",attrs:{src:e.img,alt:"."}})],1)],1)})),1)],1),t._v(" "),n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},t._l(t.transform,(function(e,o){return n("v-flex",{key:e.img,staticClass:"imgBox",class:{choose:e.choose},attrs:{xs12:"",sm12:"",md2:"","d-flex":""}},[n("v-card",{staticClass:"d-flex",attrs:{flat:""},on:{click:function(e){return t.choose(o)}}},[n("v-img",{staticClass:"grey lighten-2",attrs:{src:e.img,alt:"."}})],1)],1)})),1)],1)],1)}),[],!1,null,"4739622e",null);e.default=component.exports}}]);