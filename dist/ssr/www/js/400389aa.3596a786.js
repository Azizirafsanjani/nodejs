(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["400389aa"],{"27ca":function(a,e,t){},"3a9c":function(a,e,t){"use strict";var s=t("83f9"),n=t.n(s);n.a},"4d2d":function(a,e,t){"use strict";var s=t("6233"),n=t.n(s);n.a},6233:function(a,e,t){},7168:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-page",{attrs:{padding:""}},[t("q-btn",{style:a.$q.dark.isActive?"color: white":"color: #1e1e1e",attrs:{to:"/",icon:"chevron_left",label:a.$t("mainMenu.back"),flat:""}}),t("h5",{staticStyle:{"font-weight":"bold"},style:a.$q.dark.isActive?"color: white":"color: #1e1e1e"},[a._v(a._s(a.$t("mainMenu.business"))+"\n      ")]),t("div",{staticClass:"space"}),t("div",{staticClass:"column items-center"},[t("oak-card"),t("div",{staticClass:"space"}),t("river-card"),t("div",{staticClass:"space"}),t("magnolia-card"),t("div",{staticClass:"space"}),t("kennedyb-card"),t("div",{staticClass:"space"}),t("ogeechee-card"),t("div",{staticClass:"space"}),t("kennedya-card"),t("div",{staticClass:"space"}),t("computer-card"),t("div",{staticClass:"space"}),t("classroom-card"),t("div",{staticClass:"space"}),t("atrium-card"),t("div",{staticClass:"space"})],1),t("footer")],1)},n=[],r=t("b06b"),c=t("dcee"),i=t("2038"),d=t("ea57"),l=t("0786"),o=t("be22"),b=t("3f63"),u=t("d5d1"),v=t("11d5"),_=t("b657"),g=t("4c03"),m={components:{OakCard:c["a"],RiverCard:i["a"],MagnoliaCard:d["a"],KennedybCard:l["a"],KennedyaCard:o["a"],ComputerCard:b["a"],ClassroomCard:u["a"],AtriumCard:v["a"],OgeecheeCard:_["a"],Footer:g["a"]},data:function(){return{slide:1,tab:"one",splitterModel:15}},methods:{venuesBusiness:function(){Object(r["a"])("http://venuesatotc.com/business_events.html")},oakRoomVr:function(){Object(r["a"])("https://vrmap.netlify.com")}}},$=m,p=(t("af3d"),t("2877")),k=Object(p["a"])($,s,n,!1,null,"59c804f0",null);e["default"]=k.exports},"83f9":function(a,e,t){},af3d:function(a,e,t){"use strict";var s=t("27ca"),n=t.n(s);n.a},b657:function(a,e,t){"use strict";var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-card",{staticClass:"my-mobile-card",class:a.$q.dark.isActive?"bg-grey-9":"bg-grey-2",attrs:{dark:a.$q.dark.isActive}},[t("div",{staticClass:"q-pa-md"},[t("q-carousel",{attrs:{animated:"",arrows:"",navigation:"",infinite:""},model:{value:a.slide,callback:function(e){a.slide=e},expression:"slide"}},[t("q-carousel-slide",{attrs:{name:1,"img-src":"statics/ogeechee/bg-gallery-1.jpg"}}),t("q-carousel-slide",{attrs:{name:2,"img-src":"statics/ogeechee/bg-gallery-2.jpg"}}),t("q-carousel-slide",{attrs:{name:3,"img-src":"statics/ogeechee/bg-gallery-3.jpg"}})],1)],1),t("q-card-section",[t("div",{staticClass:"text-h6"},[a._v(a._s(a.$t("mainMenu.ogeecheeBoardroom")))])]),t("q-tabs",{style:a.$q.dark.isActive?"color: white":"color:teal",model:{value:a.tab,callback:function(e){a.tab=e},expression:"tab"}},[t("q-tab",{attrs:{label:"Overview",name:"one"}}),t("q-tab",{attrs:{label:"Fee Schedule",name:"two"}}),t("q-tab",{attrs:{label:"Fee Includes",name:"four"}}),t("q-tab",{attrs:{label:"Capacity",name:"five"}})],1),t("q-separator"),t("q-tab-panels",{style:a.$q.dark.isActive?"background: #666666":"background: white",attrs:{animated:""},model:{value:a.tab,callback:function(e){a.tab=e},expression:"tab"}},[t("q-tab-panel",{attrs:{name:"one"}},[a._v("\n          "+a._s(a.$t("cards.ogeecheeText"))+"\n        ")]),t("q-tab-panel",{attrs:{name:"two"}},[t("div",{staticClass:"row justify-around"},[t("div",{staticClass:"<column items-center text-center"},[t("div",{staticClass:"col-3",staticStyle:{"padding-bottom":"5%"}},[t("strong",[a._v(a._s(a.$t("cards.weekDaySchedule")))]),t("br"),t("br"),t("strong",[a._v(a._s(a.$t("cards.halfDayRental")))]),t("br"),a._v("\n              ("+a._s(a.$t("cards.fourHours"))+")"),t("br"),a._v("\n               $150"),t("br"),a._v("\n               "+a._s(a.$t("cards.additionalHour"))+": $40.00"),t("br")]),t("div",{staticClass:"col-3",staticStyle:{"padding-top":"5%"}},[t("strong",[a._v(a._s(a.$t("cards.fullDayRental")))]),t("br"),a._v("\n              ("+a._s(a.$t("cards.eightHours"))+")"),t("br"),a._v("\n               $250"),t("br"),a._v("\n               "+a._s(a.$t("cards.additionalHour"))+": $40.00"),t("br"),t("br")])])])]),t("q-tab-panel",{attrs:{name:"four"}},[a._v("\n          "+a._s(a.$t("cards.ogeecheeFeeIncludesOne"))),t("br"),a._v("\n          "+a._s(a.$t("cards.ogeecheeFeeIncludesTwo"))),t("br"),a._v("\n          "+a._s(a.$t("cards.ogeecheeFeeIncludesThree"))),t("br"),a._v("\n          "+a._s(a.$t("cards.ogeecheeFeeIncludesFour"))),t("br"),a._v("\n          "+a._s(a.$t("cards.ogeecheeFeeIncludesFive"))),t("br"),a._v("\n          "+a._s(a.$t("cards.ogeecheeFeeIncludesSix"))),t("br")]),t("q-tab-panel",{attrs:{name:"five"}},[a._v("\n          "+a._s(a.$t("cards.riverCapacityStanding"))),t("strong",[a._v("500")]),t("br"),a._v("\n          "+a._s(a.$t("cards.riverCapacitySeated"))),t("strong",[a._v("280")]),t("br")]),t("q-tab-panel",{attrs:{name:"three"}},[a._v("\n          "+a._s(a.$t("cards.oakEnhancedPackageOne"))),t("br"),a._v("\n          "+a._s(a.$t("cards.oakEnhancedPackageTwo"))),t("br"),a._v("\n          "+a._s(a.$t("cards.oakEnhancedPackageThree"))+"\n        ")])],1)],1)},n=[],r=t("b06b"),c={data:function(){return{slide:1,tab:"one"}},methods:{oakRoomVr:function(){Object(r["a"])("https://www.statesborowebdesigns.com/#natural_resources_building,235.0,5.0,80.0,4.0")}}},i=c,d=(t("4d2d"),t("2877")),l=Object(d["a"])(i,s,n,!1,null,"78d07b2b",null);e["a"]=l.exports},be22:function(a,e,t){"use strict";var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-card",{staticClass:"my-mobile-card",class:a.$q.dark.isActive?"bg-grey-9":"bg-grey-2",attrs:{dark:a.$q.dark.isActive}},[t("div",{staticClass:"q-pa-md"},[t("q-carousel",{attrs:{animated:"",arrows:"",navigation:"",infinite:""},model:{value:a.slide,callback:function(e){a.slide=e},expression:"slide"}},[t("q-carousel-slide",{attrs:{name:1,"img-src":"statics/kennedya/business/bg-gallery-1.jpg"}}),t("q-carousel-slide",{attrs:{name:2,"img-src":"statics/kennedya/business/bg-gallery-2.jpg"}}),t("q-carousel-slide",{attrs:{name:3,"img-src":"statics/kennedya/business/bg-gallery-3.jpg"}})],1)],1),t("q-card-section",[t("div",{staticClass:"text-h6"},[a._v(a._s(a.$t("mainMenu.kennedyAuditorium")))]),t("q-card-actions",{staticStyle:{"padding-top":"5%"},attrs:{align:"right"}},[t("q-btn",{staticClass:"button-2",attrs:{glossy:"",color:"pink",icon:"360",label:a.$t("mainMenu.buttonVr")},on:{click:function(e){return a.kennedyA()}}})],1)],1),t("q-tabs",{style:a.$q.dark.isActive?"color: white":"color:teal",model:{value:a.tab,callback:function(e){a.tab=e},expression:"tab"}},[t("q-tab",{attrs:{label:a.$t("cards.labelOverview"),name:"one"}}),t("q-tab",{attrs:{label:a.$t("cards.labelFeeSchedule"),name:"two"}}),t("q-tab",{attrs:{label:a.$t("cards.labelFeeIncludes"),name:"four"}}),t("q-tab",{attrs:{label:a.$t("cards.labelCapacity"),name:"five"}})],1),t("q-separator"),t("q-tab-panels",{style:a.$q.dark.isActive?"background: #666666":"background: white",attrs:{animated:""},model:{value:a.tab,callback:function(e){a.tab=e},expression:"tab"}},[t("q-tab-panel",{attrs:{name:"one"}},[a._v("\n          "+a._s(a.$t("cards.kennedyAuditoriumText"))+"\n        ")]),t("q-tab-panel",{attrs:{name:"two"}},[t("div",{staticClass:"row justify-around"},[t("div",{staticClass:"<column items-center text-center"},[t("div",{staticClass:"col-3",staticStyle:{"padding-bottom":"5%"}},[t("strong",[a._v(a._s(a.$t("cards.weekDaySchedule")))]),t("br"),t("br"),t("strong",[a._v(a._s(a.$t("cards.halfDayRental")))]),t("br"),a._v("\n              ("+a._s(a.$t("cards.fourHours"))+")"),t("br"),a._v("\n              $300"),t("br"),a._v("\n              "+a._s(a.$t("cards.additionalHour"))+": $75.00"),t("br")]),t("div",{staticClass:"col-3",staticStyle:{"padding-top":"5%"}},[t("strong",[a._v(a._s(a.$t("cards.fullDayRental")))]),t("br"),a._v("\n              ("+a._s(a.$t("cards.eightHours"))+")"),t("br"),a._v("\n              $450"),t("br"),a._v("\n              "+a._s(a.$t("cards.additionalHour"))+": $75.00"),t("br"),t("br")])]),t("div",{staticClass:"<column items-center text-center"},[t("div",{staticClass:"col-3",staticStyle:{"padding-bottom":"5%"}},[t("strong",[a._v(a._s(a.$t("cards.weekEndSchedule")))]),t("br"),t("br"),t("strong",[a._v(a._s(a.$t("cards.halfDayRental")))]),t("br"),a._v("\n              ("+a._s(a.$t("cards.fourHours"))+")"),t("br"),a._v("\n              $500"),t("br"),a._v("\n              "+a._s(a.$t("cards.additionalHour"))+": $75.00"),t("br")]),t("div",{staticClass:"col-3",staticStyle:{"padding-top":"5%"}},[t("strong",[a._v(a._s(a.$t("cards.fullDayRental")))]),t("br"),a._v("\n              ("+a._s(a.$t("cards.eightHours"))+")"),t("br"),a._v("\n              $750"),t("br"),a._v("\n              "+a._s(a.$t("cards.additionalHour"))+": $125.00"),t("br")])])])]),t("q-tab-panel",{attrs:{name:"four"}},[a._v("\n          "+a._s(a.$t("cards.kennedyAFeeIncludesOne"))),t("br"),a._v("\n          "+a._s(a.$t("cards.kennedyAFeeIncludesTwo"))),t("br"),a._v("\n          "+a._s(a.$t("cards.kennedyAFeeIncludesThree"))),t("br"),a._v("\n          "+a._s(a.$t("cards.kennedyAFeeIncludesFour"))),t("br"),a._v("\n          "+a._s(a.$t("cards.kennedyAFeeIncludesFive"))),t("br"),a._v("\n          "+a._s(a.$t("cards.kennedyAFeeIncludesSix"))),t("br"),a._v("\n          "+a._s(a.$t("cards.kennedyAFeeIncludesSeven"))),t("br")]),t("q-tab-panel",{attrs:{name:"five"}},[a._v("\n          "+a._s(a.$t("cards.kennedyACapacity"))),t("strong",[a._v(" 268")]),t("br")]),t("q-tab-panel",{attrs:{name:"three"}},[a._v("\n          "+a._s(a.$t("cards.oakEnhancedPackageOne"))),t("br"),a._v("\n          "+a._s(a.$t("cards.oakEnhancedPackageTwo"))),t("br"),a._v("\n          "+a._s(a.$t("cards.oakEnhancedPackageThree"))+"\n        ")])],1)],1)},n=[],r=t("b06b"),c={data:function(){return{slide:1,tab:"one"}},methods:{kennedyA:function(){Object(r["a"])("https://www.venuesatotc.com/tour/#Kennedy_Auditorium")}}},i=c,d=(t("3a9c"),t("2877")),l=Object(d["a"])(i,s,n,!1,null,"8165b19e",null);e["a"]=l.exports}}]);