"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[443],{355:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var s=e(252);const c={class:"frontHomePage"},n=(0,s._)("h2",null,"這是前台首頁",-1),l=[n];function o(t,a){return(0,s.wg)(),(0,s.iD)("div",c,l)}var r=e(744);const d={},i=(0,r.Z)(d,[["render",o]]);var u=i},991:function(t,a,e){e.r(a),e.d(a,{default:function(){return H}});var s=e(252),c=e(577),n=e(963);const l=(0,s._)("h2",null,"購物車列表",-1),o={class:"text-end"},r={class:"table align-middle"},d=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th",null,"品名"),(0,s._)("th",{style:{width:"150px"}},"數量/單位"),(0,s._)("th",null,"單價")])],-1),i=["onClick"],u=(0,s._)("i",{class:"fas fa-spinner fa-pulse"},null,-1),p=(0,s.Uk)(" x "),h=[u,p],g={class:"input-group input-group-sm"},_={class:"input-group mb-3"},v=["onUpdate:modelValue","onChange"],w=["value"],m={class:"input-group-text",id:"basic-addon2"},f={class:"text-end"},y=(0,s._)("small",{class:"text-success"},"價格：",-1),b=(0,s._)("td",{colspan:"3",class:"text-end"},"總計",-1),x={class:"text-end"},D=(0,s._)("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),k={class:"text-end text-success"};function C(t,a,e,u,p,C){return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,(0,s._)("div",o,[(0,s._)("button",{class:"btn btn-outline-danger",type:"button",onClick:a[0]||(a[0]=(...t)=>C.deleteAllCartData&&C.deleteAllCartData(...t))},"清空購物車")]),(0,s._)("table",r,[d,(0,s._)("tbody",null,[p.carts.carts?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:0},(0,s.Ko)(p.carts.carts,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,[(0,s._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:a=>C.deleteSingleCart(t)},h,8,i)]),(0,s._)("td",null,(0,c.zw)(t.product.title),1),(0,s._)("td",null,[(0,s._)("div",g,[(0,s._)("div",_,[(0,s.wy)((0,s._)("select",{name:"",id:"form-select","onUpdate:modelValue":a=>t.qty=a,onChange:a=>C.updateCartData(t)},[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(20,(t=>(0,s._)("option",{value:t,key:`${t}+123`},(0,c.zw)(t),9,w))),64))],40,v),[[n.bM,t.qty]]),(0,s._)("span",m,(0,c.zw)(t.product.unit),1)])])]),(0,s._)("td",f,[y,(0,s.Uk)(" "+(0,c.zw)(t.total),1)])])))),128)):(0,s.kq)("",!0)]),(0,s._)("tfoot",null,[(0,s._)("tr",null,[b,(0,s._)("td",x,(0,c.zw)(p.carts.total),1)]),(0,s._)("tr",null,[D,(0,s._)("td",k,(0,c.zw)(p.carts.final_total),1)])])])],64)}var z={data(){return{carts:[]}},methods:{getCartData(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/danny123/cart").then((t=>{this.carts=t.data.data})).catch((t=>{console.log(t)}))},deleteAllCartData(){this.$http.delete("https://vue3-course-api.hexschool.io/v2/api/danny123/carts").then((t=>{this.getCartData()})).catch((t=>{console.log(t)}))},updateCartData(t){const a={product_id:t.id,qty:t.qty};this.$http.put(`https://vue3-course-api.hexschool.io/v2/api/danny123/cart/${t.id}`,{data:a}).then((t=>{this.getCartData()})).catch((t=>{console.log(t)}))},deleteSingleCart(t){this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/danny123/cart/${t.id}`).then((t=>{this.getCartData()})).catch((t=>{console.log(t)}))}},mounted(){this.getCartData()}},$=e(744);const U=(0,$.Z)(z,[["render",C]]);var H=U},697:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var s=e(252);const c={class:"dashBoard"},n=(0,s._)("h2",null,"這是後台首頁呦",-1),l=[n];function o(t,a){return(0,s.wg)(),(0,s.iD)("div",c,l)}var r=e(744);const d={},i=(0,r.Z)(d,[["render",o]]);var u=i},770:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var s=e(252),c=e(577);const n=(0,s._)("h2",null,"產品列表",-1),l={class:"container"},o={class:"row row-cols-1 row-cols-lg-4 g-3"},r={class:"card h-100",style:{width:"18rem"}},d=["src"],i={class:"card-body"},u={class:"card-title"},p={class:"card-text"},h=(0,s.Uk)("詳細資訊");function g(t,a,e,g,_,v){const w=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[n,(0,s._)("div",l,[(0,s._)("div",o,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(_.products,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"col",key:t.id},[(0,s._)("div",r,[(0,s._)("img",{src:t.imageUrl,class:"card-img-top",alt:"",width:"200",height:"300"},null,8,d),(0,s._)("div",i,[(0,s._)("h5",u,(0,c.zw)(t.title),1),(0,s._)("p",p,(0,c.zw)(t["description"]),1),(0,s.Wm)(w,{to:`/productInfor/${t.id}`,class:"btn btn-primary"},{default:(0,s.w5)((()=>[h])),_:2},1032,["to"])])])])))),128))])])],64)}var _={data(){return{products:[]}},methods:{getProductData(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/danny123/products").then((t=>{this.products=t.data.products})).catch((t=>{console.log(t)}))}},mounted(){this.getProductData()}},v=e(744);const w=(0,v.Z)(_,[["render",g]]);var m=w},920:function(t,a,e){e.r(a),e.d(a,{default:function(){return x}});var s=e(252),c=e(577);const n={class:"col-md-6"},l=(0,s._)("h2",null,"單一產品細節",-1),o={class:"card mb-3"},r=["src"],d={class:"card-body"},i={class:"card-title"},u={class:"badge bg-primary ms-2"},p={class:"card-text"},h={class:"card-text"},g={class:"d-flex"},_={class:"card-text me-2"},v={class:"card-text text-secondary"},w=["src"];function m(t,a,e,m,f,y){return(0,s.wg)(),(0,s.iD)("div",n,[l,f.product.id?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("div",o,[(0,s._)("img",{src:f.product.imageUrl,class:"card-img-top primary-image",alt:"主圖"},null,8,r),(0,s._)("div",d,[(0,s._)("h5",i,[(0,s.Uk)((0,c.zw)(f.product.title)+" ",1),(0,s._)("span",u,(0,c.zw)(f.product.category),1)]),(0,s._)("p",p,"商品描述："+(0,c.zw)(f.product.description),1),(0,s._)("p",h,"商品內容："+(0,c.zw)(f.product.content),1),(0,s._)("div",g,[(0,s._)("p",_,(0,c.zw)(f.product.origin_price),1),(0,s._)("p",v,[(0,s._)("del",null,(0,c.zw)(f.product.price),1)]),(0,s.Uk)(" "+(0,c.zw)(f.product.unit)+" / 元 ",1)]),(0,s._)("input",{class:"btn btn-primary",type:"button",value:"加入購物車",onClick:a[0]||(a[0]=t=>y.addCart(f.product.id))})])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.product.imagesUrl,(t=>((0,s.wg)(),(0,s.iD)("img",{key:t,src:t,alt:"",class:"images m-2"},null,8,w)))),128))],64)):(0,s.kq)("",!0)])}var f={data(){return{product:[]}},methods:{getProductInforMation(){const{id:t}=this.$route.params;this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/danny123/product/${t}`).then((t=>{this.product=t.data.product})).catch((t=>{console.log(t)}))},addCart(t,a=1){const e={product_id:t,qty:a};this.$http.post("https://vue3-course-api.hexschool.io/v2/api/danny123/cart",{data:e}).then((t=>{console.log(t.data)})).catch((t=>{console.log(t)}))}},mounted(){this.getProductInforMation()}},y=e(744);const b=(0,y.Z)(f,[["render",m]]);var x=b}}]);
//# sourceMappingURL=about.d654610d.js.map