webpackJsonp([2],{183:function(e,r,n){"use strict";function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function o(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var i=n(0),s=n.n(i),d=n(194),c=n(14),A=n(59),l=n(197),m=n.n(l),p=n(58),u=n(13),g=n(7),b=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),f=function(e){function r(){return t(this,r),a(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return o(r,e),b(r,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("token");this.props.onFetchOrders(e),console.log(this.props.orders),console.log(this.props.userId)}},{key:"render",value:function(){var e=this.props.orders.map(function(e){return s.a.createElement(d.a,{key:e.id,price:e.price,ingredients:e.ingredients,orderData:e.orderData,date:e.date})});return this.props.loading&&(e=s.a.createElement(p.a,null)),s.a.createElement("div",{className:m.a.ordersPage},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:["col-md-12",m.a.orderHeading].join(" ")},s.a.createElement("h3",null,"Order History"),s.a.createElement("hr",null))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12"},e))))}}]),r}(i.Component),C=function(e){return{orders:e.order.order,loading:e.order.loading,userId:e.auth.userId}},B=function(e){return{onFetchOrders:function(r,n){return e(u.d(r,n))}}};r.default=Object(g.b)(C,B)(Object(A.a)(f,c.a))},194:function(e,r,n){"use strict";var t=n(0),a=n.n(t),o=n(195),i=n.n(o),s=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});return a.a.createElement("div",{className:i.a.Order},a.a.createElement("div",{className:"container-fluid"},a.a.createElement("div",{className:["row",i.a.mainArea].join(" ")},a.a.createElement("div",{className:"col-md-1"}),a.a.createElement("div",{className:"col-md-10"},a.a.createElement("div",{className:i.a.singleOrder},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-6"},a.a.createElement("img",{src:"https://m.economictimes.com/thumb/msid-72863458,width-1200,height-900,resizemode-4,imgsize-731189/burger-thnkstck.jpg",className:"img-thumbnail",alt:"Cinque Terre",width:"100",height:"236"}),a.a.createElement("h6",null,"Name: ",e.orderData.name),a.a.createElement("p",null,a.a.createElement("span",{style:{fontWeight:"bold"}},"Email:")," ",e.orderData.email),a.a.createElement("p",null,a.a.createElement("span",{style:{fontWeight:"bold"}},"Ingredients: "),r.map(function(e){return a.a.createElement("span",{className:i.a.ingredients,style:{textTransform:"capitalize"},key:e.name}," ",e.name,"(",e.amount,") ")})),a.a.createElement("p",null,a.a.createElement("span",{style:{fontWeight:"bold"}},"Address: ")," ",e.orderData.street,",",e.orderData.zipCode,",",e.orderData.country)),a.a.createElement("div",{className:"col-md-2"},a.a.createElement("h5",{style:{fontWeight:"bold"}},"$ ",e.price.toFixed(2))),a.a.createElement("div",{className:["col-md-4",i.a.restInfo].join(" ")},a.a.createElement("p",{style:{fontWeight:"bold"}},a.a.createElement("span",{className:i.a.dot}),"  Order Placed: ",e.date),a.a.createElement("p",null,"Delivery Method: ",e.orderData.deliveryMethod))))),a.a.createElement("div",{className:"md-1"},a.a.createElement("i",{style:{color:"#130C53",cursor:"pointer"},className:"fa fa-times","aria-hidden":"true"})))))};r.a=s},195:function(e,r,n){var t=n(196);"string"===typeof t&&(t=[[e.i,t,""]]);var a={};a.transform=void 0;n(181)(t,a);t.locals&&(e.exports=t.locals)},196:function(e,r,n){r=e.exports=n(180)(!0),r.push([e.i,".Order__singleOrder__1baAV{padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #c9c9c9;border-radius:5px;background:#fff;margin-bottom:10px;cursor:pointer;border-left:5px solid #e0e0e0}.Order__singleOrder__1baAV:hover{-webkit-box-shadow:2px 2px 10px #d8d8d8;box-shadow:2px 2px 10px #d8d8d8;-webkit-transition:.15s ease-in;-o-transition:ease-in .15s;transition:.15s ease-in}.Order__mainArea__2VW3c{line-height:5px}.Order__mainArea__2VW3c img{float:left;display:block;margin-right:10px}.Order__mainArea__2VW3c p{color:#6a6a6a;font-size:13px;font-weight:400}.Order__restInfo__2s2Mc p{color:#6a6a6a;font-size:15px}.Order__ingredients__3PNf9{color:#fff;background:#130c53;border-radius:5px;margin-right:5px;padding:2px 4px;-webkit-box-sizing:border-box;box-sizing:border-box}.Order__ingredients__3PNf9:hover{background:#241981}.Order__dot__2u9R9{height:10px;width:10px;background-color:#5fffca;border-radius:50%;display:inline-block}","",{version:3,sources:["F:/Udemy/React- Max/Project/Burger-builder/src/components/Order/Order.css"],names:[],mappings:"AACA,2BACI,aAAc,AACd,8BAA+B,AACvB,sBAAuB,AAC/B,yBAA0B,AAC1B,kBAAmB,AACnB,gBAAkB,AAClB,mBAAoB,AACpB,eAAgB,AAChB,6BAA+B,CAClC,AAED,iCACI,wCAAyC,AACjC,gCAAiC,AACzC,gCAAkC,AAClC,2BAA6B,AAC7B,uBAA0B,CAC7B,AAED,wBACI,eAAiB,CACpB,AAED,4BACI,WAAY,AACZ,cAAe,AACf,iBAAmB,CACtB,AAED,0BACI,cAAe,AACf,eAAgB,AAChB,eAAgB,CACnB,AAED,0BACI,cAAe,AACf,cAAgB,CACnB,AAED,2BACI,WAAa,AACb,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,gBAAiB,AACjB,8BAA+B,AACvB,qBAAuB,CAClC,AAED,iCACI,kBAAoB,CACvB,AAED,mBACI,YAAa,AACb,WAAY,AACZ,yBAA0B,AAC1B,kBAAmB,AACnB,oBAAsB,CACvB",file:"Order.css",sourcesContent:["\r\n.singleOrder{\r\n    padding: 20px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    border: 1px solid #c9c9c9;\r\n    border-radius: 5px;\r\n    background: white;\r\n    margin-bottom: 10px;\r\n    cursor: pointer;\r\n    border-left: 5px solid #e0e0e0;\r\n}\r\n\r\n.singleOrder:hover {\r\n    -webkit-box-shadow: 2px 2px 10px #d8d8d8;\r\n            box-shadow: 2px 2px 10px #d8d8d8;\r\n    -webkit-transition: ease-in 150ms;\r\n    -o-transition: ease-in 150ms;\r\n    transition: ease-in 150ms;\r\n}\r\n\r\n.mainArea{\r\n    line-height: 5px;\r\n}\r\n\r\n.mainArea img{\r\n    float: left;\r\n    display: block;\r\n    margin-right: 10px;\r\n}\r\n\r\n.mainArea p{\r\n    color: #6a6a6a;\r\n    font-size: 13px;\r\n    font-weight: 400\r\n}\r\n\r\n.restInfo p{\r\n    color: #6a6a6a;\r\n    font-size: 15px;\r\n}\r\n\r\n.ingredients {\r\n    color: white;\r\n    background: #130C53;\r\n    border-radius: 5px;\r\n    margin-right: 5px;\r\n    padding: 2px 4px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.ingredients:hover{\r\n    background: #241981;\r\n}\r\n\r\n.dot {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: #5FFFCA;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }"],sourceRoot:""}]),r.locals={singleOrder:"Order__singleOrder__1baAV",mainArea:"Order__mainArea__2VW3c",restInfo:"Order__restInfo__2s2Mc",ingredients:"Order__ingredients__3PNf9",dot:"Order__dot__2u9R9"}},197:function(e,r,n){var t=n(198);"string"===typeof t&&(t=[[e.i,t,""]]);var a={};a.transform=void 0;n(181)(t,a);t.locals&&(e.exports=t.locals)},198:function(e,r,n){r=e.exports=n(180)(!0),r.push([e.i,".Orders__ordersPage__1wa6f{width:100%}.Orders__orderHeading__2nIAQ{color:#130c53;text-align:center;margin-bottom:40px}","",{version:3,sources:["F:/Udemy/React- Max/Project/Burger-builder/src/containers/Orders/Orders.css"],names:[],mappings:"AAAA,2BACI,UAAY,CACf,AAED,6BACI,cAAe,AACf,kBAAmB,AACnB,kBAAoB,CACvB",file:"Orders.css",sourcesContent:[".ordersPage{\r\n    width: 100%;\r\n}\r\n\r\n.orderHeading {\r\n    color: #130C53;\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n}"],sourceRoot:""}]),r.locals={ordersPage:"Orders__ordersPage__1wa6f",orderHeading:"Orders__orderHeading__2nIAQ"}}});
//# sourceMappingURL=2.1330cb14.chunk.js.map