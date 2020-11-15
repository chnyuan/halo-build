(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8b03"],{"306f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-row",{staticClass:"h-screen",attrs:{type:"flex",justify:"center",align:"middle"}},[a("a-col",{attrs:{xl:8,md:12,sm:20,xs:24}},[a("div",{staticClass:"card-container"},[a("a-card",{staticStyle:{"box-shadow":"0px 10px 20px 0px rgba(236, 236, 236, 0.86)"},attrs:{bordered:!1,title:"Halo 安装向导"}},[a("a-steps",{attrs:{current:t.stepCurrent}},[a("a-step",{attrs:{title:"博主信息"}}),a("a-step",{attrs:{title:"博客信息"}}),a("a-step",{attrs:{title:"数据导入"}})],1),a("a-divider",{attrs:{dashed:""}}),a("a-form-model",{directives:[{name:"show",rawName:"v-show",value:0==t.stepCurrent,expression:"stepCurrent == 0"}],ref:"generalForm",attrs:{model:t.installation,rules:t.generalRules,layout:"horizontal"}},[a("a-form-model-item",{staticClass:"animated fadeInUp",attrs:{prop:"username"}},[a("a-input",{attrs:{placeholder:"用户名"},model:{value:t.installation.username,callback:function(e){t.$set(t.installation,"username",e)},expression:"installation.username"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-model-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.1s"},attrs:{prop:"nickname"}},[a("a-input",{attrs:{placeholder:"用户昵称"},model:{value:t.installation.nickname,callback:function(e){t.$set(t.installation,"nickname",e)},expression:"installation.nickname"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"smile"},slot:"prefix"})],1)],1),a("a-form-model-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.2s"},attrs:{prop:"email"}},[a("a-input",{attrs:{placeholder:"用户邮箱"},model:{value:t.installation.email,callback:function(e){t.$set(t.installation,"email",e)},expression:"installation.email"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1),a("a-form-model-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.3s"},attrs:{prop:"password"}},[a("a-input",{attrs:{type:"password",placeholder:"用户密码（8-100位）"},model:{value:t.installation.password,callback:function(e){t.$set(t.installation,"password",e)},expression:"installation.password"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),a("a-form-model-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.4s"},attrs:{prop:"confirmPassword"}},[a("a-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:t.installation.confirmPassword,callback:function(e){t.$set(t.installation,"confirmPassword",e)},expression:"installation.confirmPassword"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1),a("a-form-model",{directives:[{name:"show",rawName:"v-show",value:1==t.stepCurrent,expression:"stepCurrent == 1"}],ref:"blogForm",attrs:{layout:"horizontal",model:t.installation,rules:t.blogRules}},[a("a-form-model-item",{staticClass:"animated fadeInUp",attrs:{prop:"url"}},[a("a-input",{attrs:{placeholder:"博客地址"},model:{value:t.installation.url,callback:function(e){t.$set(t.installation,"url",e)},expression:"installation.url"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"link"},slot:"prefix"})],1)],1),a("a-form-model-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.2s"},attrs:{prop:"title"}},[a("a-input",{attrs:{placeholder:"博客标题"},model:{value:t.installation.title,callback:function(e){t.$set(t.installation,"title",e)},expression:"installation.title"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"book"},slot:"prefix"})],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2==t.stepCurrent,expression:"stepCurrent == 2"}]},[a("a-alert",{staticStyle:{"margin-bottom":"1rem"},attrs:{message:"如果有数据导入需求，请点击并选择之前导出的文件。需要注意的是，并不是所有数据都会导入，该初始化表单的数据会覆盖你导入的数据。",type:"info"}}),a("FilePondUpload",{ref:"upload",attrs:{name:"file",accept:"application/json",label:"拖拽或点击选择数据文件，请确认是否为 Halo 后台导出的文件。",multiple:!1,uploadHandler:t.handleMigrationUpload,loadOptions:!1}})],1),a("a-row",{staticClass:"install-action",staticStyle:{"margin-top":"1rem"},attrs:{type:"flex",justify:"space-between"}},[a("div",[0!=t.stepCurrent?a("a-button",{staticClass:"previus-button",staticStyle:{"margin-right":"1rem"},on:{click:function(e){t.stepCurrent--}}},[t._v("上一步")]):t._e(),2!=t.stepCurrent?a("a-button",{attrs:{type:"primary"},on:{click:t.handleNextStep}},[t._v("下一步")]):t._e()],1),2==t.stepCurrent?a("a-button",{attrs:{type:"primary",icon:"upload",loading:t.installing},on:{click:t.handleInstall}},[t._v("安装")]):t._e()],1)],1)],1)])],1)],1)},r=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("96cf"),a("3b8d")),i=a("bd86"),l=a("50fc"),o=a("9efd"),c="/api/admin/migrations",p={migrate:function(t){return Object(o["a"])({url:"".concat(c,"/halo"),data:t,method:"post"})}},u=p,d=a("2f62");function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={data:function(){var t=this,e=function(e,a,n){a!==t.installation.password?n(new Error("确认密码与所输入的密码不一致")):n()};return{installation:{},stepCurrent:0,migrationData:null,installing:!1,generalRules:{username:[{required:!0,message:"* 用户名不能为空",trigger:["change"]},{max:50,message:"* 用户名的字符长度不能超过 50",trigger:["change"]}],nickname:[{required:!0,message:"* 用户昵称不能为空",trigger:["change"]},{max:255,message:"* 用户昵称的字符长度不能超过 255",trigger:["change"]}],email:[{required:!0,message:"* 电子邮件地址不能为空",trigger:["change"]},{max:127,message:"* 电子邮件地址的字符长度不能超过 127",trigger:["change"]},{pattern:/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/g,message:"* 电子邮件地址的格式不正确",trigger:["change"]}],password:[{required:!0,message:"* 密码不能为空",trigger:["change"]},{min:8,max:100,message:"* 密码的字符长度必须在 8 - 100 之间",trigger:["change"]}],confirmPassword:[{required:!0,message:"* 确认密码不能为空",trigger:["change"]},{validator:e,trigger:["change"]}]},blogRules:{url:[{required:!0,message:"* 博客地址不能为空",trigger:["change"]}],title:[{required:!0,message:"* 博客标题不能为空",trigger:["change"]}]}}},beforeMount:function(){this.handleVerifyIsInstall(),this.$set(this.installation,"url",window.location.protocol+"//"+window.location.host)},methods:g(g({},Object(d["b"])(["installCleanToken"])),{},{handleVerifyIsInstall:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].isInstalled().then((function(t){t.data.data&&e.$router.push({name:"Login"})}));case 2:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),handleNextStep:function(){var t=this;0===this.stepCurrent?this.$refs.generalForm.validate((function(e){if(!e)return!1;t.stepCurrent++})):1===this.stepCurrent&&this.$refs.blogForm.validate((function(e){if(!e)return!1;t.stepCurrent++}))},handleMigrationUpload:function(t){var e=this;return this.$log.debug("Selected data",t),this.migrationData=t,new Promise((function(t,a){e.$log.debug("Handle uploading"),t()}))},install:function(){var t=this;this.installCleanToken(this.installation).then((function(e){t.$log.debug("Installation response",e),t.$message.success("安装成功！"),setTimeout((function(){t.$router.push({name:"Login"})}),200)})).finally((function(){setTimeout((function(){t.installing=!1}),400)}))},handleInstall:function(){var t=this;if(this.installing=!0,this.migrationData){var e=this.$message.loading("数据导入中...",0);u.migrate(this.migrationData).then((function(e){t.$log.debug("Migrated successfullly"),t.$message.success("数据导入成功！"),t.install()})).finally((function(){e()}))}else this.install()}})},h=f,b=a("2877"),y=Object(b["a"])(h,n,r,!1,null,null,null);e["default"]=y.exports}}]);