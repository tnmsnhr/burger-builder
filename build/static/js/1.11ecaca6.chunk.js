webpackJsonp([1],{184:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),u=n.n(l),s=n(185),c=n(57),p=n(199),h=n.n(p),d=n(13),f=n(7),m=n(58),g=n(8),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),A=function(e){function t(){var e,n,i,l;a(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Enter Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},i.checkValidity=function(e,t){var n=!0;return!t||(t.required&&t&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n)},i.inputChangedHandler=function(e,t){var n=Object.assign({},i.state.controls,r({},t,Object.assign({},i.state.controls[t],{value:e.target.value,valid:i.checkValidity(e.target.value,i.state.controls[t].validation),touched:!0})));i.setState({controls:n})},i.switchAuthModeHandler=function(){i.setState(function(e){return{isSignup:!e.isSignup}})},i.submitHandler=function(e){e.preventDefault(),i.props.onAuth(i.state.controls.email.value,i.state.controls.password.value,i.state.isSignup)},l=n,o(i,l)}return i(t,e),v(t,[{key:"componentDidMount",value:function(){console.log("Auth Redirect Path",this.props.authRedirectPath),console.log("Building prop",this.props.building),this.props.building||"/"==this.props.authRedirectPath||this.props.onSetAuthRedirectPath("/")}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var r=null;this.props.token&&(console.log(this.props.authRedirectPath),r=u.a.createElement(g.d,{to:this.props.authRedirectPath}));var a=t.map(function(t){return u.a.createElement(s.a,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(n){return e.inputChangedHandler(n,t.id)},key:t.id,touched:t.config.touched,shouldValidate:t.config.validation,valid:t.config.valid})}),o=u.a.createElement("div",null,u.a.createElement("form",{onSubmit:this.submitHandler},a,u.a.createElement(c.a,{btnType:"Success"},"SUBMIT")),u.a.createElement("hr",null),u.a.createElement(c.a,{btnType:"Danger",clicked:this.switchAuthModeHandler},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP")),i=null;return this.props.error&&(i=u.a.createElement("p",null,this.props.error.message)),this.props.loading&&(o=u.a.createElement(m.a,null)),u.a.createElement("div",{className:[h.a.Auth,"jumbotron"].join(" ")},r,i,o)}}]),t}(l.Component),b=function(e){return{loading:e.auth.loading,error:e.auth.error,token:e.auth.token,building:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},y=function(e){return{onAuth:function(t,n,r){return e(d.b(t,n,r))},onSetAuthRedirectPath:function(t){return e(d.j(t))}}};t.default=Object(f.b)(b,y)(A)},185:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(186),i=n.n(o),l=function(e){var t=null,n=["form-control mb-4"];switch(!e.valid&&e.shouldValidate&&e.touched&&n.push(i.a.errorClass),e.elementType){case"input":case"textarea":t=a.a.createElement("input",Object.assign({},e.elementConfig,{value:e.value,className:n.join(" "),onChange:e.changed}));break;case"select":t=a.a.createElement("select",{value:e.value,className:n.join(" "),onChange:e.changed},e.elementConfig.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=a.a.createElement("input",Object.assign({},e.elementConfig,{value:e.value,className:n.join(" "),onChange:e.changed}))}return a.a.createElement("div",null,a.a.createElement("label",{style:{float:"left"}},e.label),t)};t.a=l},186:function(e,t,n){var r=n(187);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(181)(r,a);r.locals&&(e.exports=r.locals)},187:function(e,t,n){t=e.exports=n(180)(!0),t.push([e.i,".Input__errorClass__14DJh{border:1px solid red;background-color:#faa}","",{version:3,sources:["F:/Udemy/React- Max/Project/Burger-builder/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,0BACI,qBAAsB,AACtB,qBAA0B,CAC7B",file:"Input.css",sourcesContent:[".errorClass {\r\n    border: 1px solid red;\r\n    background-color: #ffaaaa;\r\n}"],sourceRoot:""}]),t.locals={errorClass:"Input__errorClass__14DJh"}},199:function(e,t,n){var r=n(200);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(181)(r,a);r.locals&&(e.exports=r.locals)},200:function(e,t,n){t=e.exports=n(180)(!0),t.push([e.i,".Auth__Auth__1TInt{margin:10px auto;width:80%;text-align:center}@media (min-width:600px){.Auth__Auth__1TInt{width:500px}}","",{version:3,sources:["F:/Udemy/React- Max/Project/Burger-builder/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACI,iBAAkB,AAClB,UAAW,AACX,iBAAmB,CACtB,AACD,yBACI,mBACI,WAAa,CAChB,CACJ",file:"Auth.css",sourcesContent:[".Auth {\r\n    margin: 10px auto;\r\n    width: 80%;\r\n    text-align: center;\r\n}\r\n@media (min-width: 600px){\r\n    .Auth{\r\n        width: 500px;\r\n    }\r\n}"],sourceRoot:""}]),t.locals={Auth:"Auth__Auth__1TInt"}}});
//# sourceMappingURL=1.11ecaca6.chunk.js.map