(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{473:function(t,e,n){"use strict";n.r(e);n(34),n(21),n(43),n(29),n(44);var o,r=n(16),c=n(8),d=n(4),m=(n(38),n(28),n(55),n(25),n(45)),l=n(7),f=n.n(l);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={asyncData:function(t){return Object(d.a)(regeneratorRuntime.mark((function e(){var n,r,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=n.apolloProvider.defaultClient,e.next=4,r.query({query:f()(o||(o=Object(c.a)(["\n          {\n            company {\n              id\n              name\n              description\n              contacts {\n                email\n                phone\n              }\n              rccm\n              id_nat\n              address {\n                city\n                local\n              }\n            }\n          }\n        "])))}).then((function(t){var data=t.data;return data&&data.company}));case 4:return d=e.sent,console.log(d),e.abrupt("return",{company:d});case 7:case"end":return e.stop()}}),e)})))()},methods:y(y({},Object(m.b)({updateCompany:"company/updateCompany"})),{},{updateComp:function(){this.updateCompany({name:this.company.name,description:this.company.description,rccm:this.company.rccm,id_nat:this.company.id_nat,address:{city:this.company.address.city,local:this.company.address.local},contacts:{email:this.company.contacts.email,phone:this.company.contacts.phone}})}})},h=n(24),component=Object(h.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mt-4 sm:mt-0"},[n("div",{staticClass:"md:grid md:grid-cols-1 md:gap-6 px-12"},[n("div",{staticClass:"mt-2 md:mt-0 md:col-span-2"},[t._m(0),t._v(" "),n("form",{attrs:{action:"#",method:"POST"}},[n("div",{staticClass:"shadow overflow-hidden sm:rounded-md"},[n("div",{staticClass:"px-12 py-5 bg-white"},[n("div",{staticClass:"flex flex-col space-y-4"},[n("div",{staticClass:"flex space-x-4"},[n("div",{staticClass:"w-1/2"},[n("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"first-name"}},[t._v("Denomination")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.company.name,expression:"company.name"}],staticClass:"\n                        mt-1\n                        focus:ring-indigo-500\n                        focus:border-indigo-500\n                        block\n                        w-full\n                        shadow-sm\n                        sm:text-sm\n                        border-gray-300\n                        rounded-md\n                      ",attrs:{type:"text",name:"first-name",id:"first-name",autocomplete:"given-name"},domProps:{value:t.company.name},on:{input:function(e){e.target.composing||t.$set(t.company,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"w-1/4"},[n("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"email-address"}},[t._v("Rccm")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.company.rccm,expression:"company.rccm"}],staticClass:"\n                        mt-1\n                        focus:ring-indigo-500\n                        focus:border-indigo-500\n                        block\n                        w-full\n                        shadow-sm\n                        sm:text-sm\n                        border-gray-300\n                        rounded-md\n                      ",attrs:{type:"text",name:"rccm",id:"rccm",placeholder:"R-C-C-M"},domProps:{value:t.company.rccm},on:{input:function(e){e.target.composing||t.$set(t.company,"rccm",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"w-1/4"},[n("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"email-address"}},[t._v("Id national")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.company.id_nat,expression:"company.id_nat"}],staticClass:"\n                        mt-1\n                        focus:ring-indigo-500\n                        focus:border-indigo-500\n                        block\n                        w-full\n                        shadow-sm\n                        sm:text-sm\n                        border-gray-300\n                        rounded-md\n                      ",attrs:{type:"text",name:"id_nat",id:"id_nat",placeholder:"Id-nat"},domProps:{value:t.company.id_nat},on:{input:function(e){e.target.composing||t.$set(t.company,"id_nat",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"flex items-center w-full space-x-4"},[n("div",{staticClass:"col-span-6"},[n("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"street-address"}},[t._v("Votre Ville")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.company.address.city,expression:"company.address.city"}],staticClass:"\n                        mt-1\n                        focus:ring-indigo-500\n                        focus:border-indigo-500\n                        block\n                        w-full\n                        shadow-sm\n                        sm:text-sm\n                        border-gray-300\n                        rounded-md\n                      ",attrs:{type:"text",name:"street-address",id:"street-address",autocomplete:"street-address",placeholder:"L'adresse de l'entreprise"},domProps:{value:t.company.address.city},on:{input:function(e){e.target.composing||t.$set(t.company.address,"city",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex-1"},[n("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"street-address"}},[t._v("Votre adresse")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.company.address.local,expression:"company.address.local"}],staticClass:"\n                        mt-1\n                        focus:ring-indigo-500\n                        focus:border-indigo-500\n                        block\n                        w-full\n                        shadow-sm\n                        sm:text-sm\n                        border-gray-300\n                        rounded-md\n                      ",attrs:{type:"text",name:"street-address",id:"street-address",autocomplete:"street-address",placeholder:"L'adresse de l'entreprise"},domProps:{value:t.company.address.local},on:{input:function(e){e.target.composing||t.$set(t.company.address,"local",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"flex w-full space-x-4"},[n("div",{staticClass:"w-1/2"},[n("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"city"}},[t._v("Phone")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.company.contacts.phone,expression:"company.contacts.phone"}],staticClass:"\n                        mt-1\n                        focus:ring-indigo-500\n                        focus:border-indigo-500\n                        block\n                        w-full\n                        shadow-sm\n                        sm:text-sm\n                        border-gray-300\n                        rounded-md\n                      ",attrs:{type:"text",name:"phone",id:"phone",placeholder:"Ex: +243 84 999 . . ."},domProps:{value:t.company.contacts.phone},on:{input:function(e){e.target.composing||t.$set(t.company.contacts,"phone",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"w-1/2"},[n("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"state"}},[t._v("Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.company.contacts.email,expression:"company.contacts.email"}],staticClass:"\n                        mt-1\n                        focus:ring-indigo-500\n                        focus:border-indigo-500\n                        block\n                        w-full\n                        shadow-sm\n                        sm:text-sm\n                        border-gray-300\n                        rounded-md\n                      ",attrs:{type:"text",name:"email",id:"email",placeholder:"exemple@gmail.com"},domProps:{value:t.company.contacts.email},on:{input:function(e){e.target.composing||t.$set(t.company.contacts,"email",e.target.value)}}})])]),t._v(" "),n("div",{},[n("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"about"}},[t._v("\n                    description\n                  ")]),t._v(" "),n("div",{staticClass:"mt-1"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.company.description,expression:"company.description"}],staticClass:"\n                        shadow-sm\n                        focus:ring-indigo-500\n                        focus:border-indigo-500\n                        mt-1\n                        block\n                        w-full\n                        sm:text-sm\n                        border border-gray-300\n                        rounded-md\n                      ",attrs:{id:"about",name:"about",rows:"3",placeholder:"Detail ici ...."},domProps:{value:t.company.description},on:{input:function(e){e.target.composing||t.$set(t.company,"description",e.target.value)}}})]),t._v(" "),n("p",{staticClass:"mt-2 text-sm text-gray-500"},[t._v("\n                    Brief description pour l'entreprise.\n                  ")])])])]),t._v(" "),n("div",{staticClass:"px-12 py-3 bg-gray-50 text-right space-x-4"},[n("nuxt-link",{staticClass:"\n                  inline-flex\n                  justify-center\n                  py-2\n                  px-20\n                  border border-transparent\n                  shadow-sm\n                  text-sm\n                  font-medium\n                  rounded-md\n                  text-white\n                  bg-orange-600\n                  hover:bg-orange-700\n                  focus:outline-none\n                  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\n                ",attrs:{to:"/settings/general"}},[t._v("\n                Annuler\n              ")]),t._v(" "),n("button",{staticClass:"\n                  inline-flex\n                  justify-center\n                  py-2\n                  px-20\n                  border border-transparent\n                  shadow-sm\n                  text-sm\n                  font-medium\n                  rounded-md\n                  text-white\n                  bg-indigo-600\n                  hover:bg-indigo-700\n                  focus:outline-none\n                  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\n                ",on:{click:function(e){return e.preventDefault(),t.updateComp(e)}}},[t._v("\n                Enregistrer\n              ")])],1)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-4 sm:px-0"},[n("h3",{staticClass:"font-medium leading-6 text-gray-900"},[t._v("\n            Information General\n          ")])])}],!1,null,null,null);e.default=component.exports}}]);