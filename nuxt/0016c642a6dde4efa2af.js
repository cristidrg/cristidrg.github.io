(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{154:function(t,e,o){var content=o(166);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("2051237f",content,!0,{sourceMap:!1})},165:function(t,e,o){"use strict";var n=o(154);o.n(n).a},166:function(t,e,o){(t.exports=o(50)(!1)).push([t.i,".page-enter-active[data-v-49a5fe8c],.page-leave-active[data-v-49a5fe8c]{-webkit-animation:placeholder .6s ease-out both;animation:placeholder .6s ease-out both}.imageslideme[data-v-49a5fe8c]{border-radius:5px}.phonebackground[data-v-49a5fe8c]{fill:#f7fafc}.st0[data-v-49a5fe8c]{fill:url(#XMLID_2_)}.st1[data-v-49a5fe8c]{fill:#ccc}.st3[data-v-49a5fe8c]{fill:url(#XMLID_3_)}.st4[data-v-49a5fe8c]{fill:#333}",""])},167:function(t,e,o){"use strict";o.r(e);o(69),o(34),o(25),o(67),o(68),o(52);var n=o(163),r=o.n(n),c=o(149),l=o(17),h=Object(l.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"mt-12 md:mt-16"},[o("p",{staticClass:"pt-8 text-2xl font-bold leading-tight border-t border-gray-300 lg:text-3xl font-display"},[t._v("Work inquiry, question or something else? "),o("a",{staticClass:"inline-block border-b-2 border-black hover:text-gray-600",attrs:{href:"mailto:cristiandrg96@gmail.com"}},[t._v("Email me.")])]),t._v(" "),o("div",{staticClass:"flex mt-6 font-bold md:text-xs lg:text-sm xl:text-base"},[o("a",{attrs:{href:"https://cristidrg.github.io/"}},[t._v("Github")]),t._v(" "),o("a",{staticClass:"ml-4",attrs:{href:"https://www.linkedin.com/in/cristian-dragomir-40a7a7172/"}},[t._v("Linkedin")])]),t._v(" "),o("p",{staticClass:"text-xs font-display"},[t._v("© All rights reserved, 2020")])])}],!1,null,null,null).exports,d=o(97),m={components:{Logo:c.a,Footer:h},transition:function(t,e){return"about"==t.name?[Object(d.a)({autoplay:!1,targets:".contentright",duration:200,easing:"easeInOutCubic",opacity:0}),Object(d.a)({autoplay:!1,targets:".contentright",duration:600,easing:"easeInOutCubic",width:"0%",padding:0}),Object(d.a)({autoplay:!1,targets:".panels > .bg-gray-100",duration:600,easing:"easeInOutCubic",width:"100%"}),Object(d.a)({autoplay:!1,targets:".contentleft",duration:600,easing:"easeInOutCubic",width:"100%"}),Object(d.a)({autoplay:!1,targets:".maincontent",translateX:["15px","0px"],duration:200,opacity:[1,0],easing:"easeInOutCubic"})].forEach((function(t){return t.restart()})):t.name.includes("project")&&(window.scrollTo({top:0,left:0,behavior:"smooth"}),[Object(d.a)({autoplay:!1,targets:[".contentleft"],opacity:[1,0],duration:300,easing:"easeInOutCubic"}),Object(d.a)({autoplay:!1,targets:".contentleft",duration:600,easing:"easeInOutCubic",width:"0%"}),Object(d.a)({autoplay:!1,targets:".contentright",opacity:[1,0],translateX:[0,-450],duration:600,easing:"easeInOutCubic"}),Object(d.a)({autoplay:!1,targets:".contentright",duration:600,easing:"easeInOutCubic",width:"100%",padding:0}),Object(d.a)({autoplay:!1,targets:".panels > .bg-gray-100",duration:600,easing:"easeInOutCubic",width:"0%"})].forEach((function(t){return t.restart()}))),"page"},head:function(){return{title:"Cristian Dragomir - Software Engineer"}},methods:{handleAboutFocus:function(){this.$refs.pagecontainer&&!this.$refs.pagecontainer.classList.contains("exit-about")&&(this.$refs.pagecontainer.className+=" exit-about")},handleAboutBlur:function(){this.$refs.pagecontainer&&this.$refs.pagecontainer.classList.contains("exit-about")&&this.$refs.pagecontainer.classList.remove("exit-about")},handleScroll:function(t){var e=this;this&&this.$refs&&this.$refs.projectlist&&this.$refs.projectlist.getBoundingClientRect().top<400&&this.showPhone(),this&&this.$refs&&this.$refs.projectlist&&this.$refs.projectlist.getBoundingClientRect().top<200&&window.requestAnimationFrame((function(){return e.$refs.phone.style.top=window.pageYOffset+"px"}))},handleProjectHover:function(t){var e=this;return function(o){window.activePhoneURL!=t&&(window.activePhoneURL=t,e.$refs.phonebackground.setAttribute("animation","exit"))}},triggerMountAnimations:function(){var t=this,e=Object(d.a)({autoplay:!1,targets:".panels > .bg-gray-100",duration:600,delay:300,easing:"easeInOutCubic",width:"66.6667%"}),o=Object(d.a)({autoplay:!1,targets:".homeimage",translateX:"-200px",duration:750,easing:"easeInOutCubic",delay:300}),n=Object(d.a)({autoplay:!1,targets:".fade-in-content",translateX:["15px","0px"],duration:400,delay:1700,opacity:[0,1],easing:"easeInOutCubic"}),r=Object(d.a)({autoplay:!1,targets:".imageslideme",delay:300,duration:600,easing:"easeInOutCubic",translateX:["-75px","0px"],filter:["blur(10px)","blur(0px)"],opacity:[0,1]}),c=d.a.timeline({autoplay:!1,loop:!1,delay:800}).add({targets:".homeimage > div",width:["0%","100%"],duration:750,easing:"easeInOutCubic",changeComplete:function(e){t.$refs.pozasite.style.display="block",t.$refs.imageslidepanel.classList.remove("right-0"),t.$refs.imageslidepanel.style.left="0px"}}).add({delay:0,targets:".homeimage > div",width:["100%","0%"],translateX:-150,duration:550,easing:"easeInOutCubic"});n.restart(),e.restart(),o.restart(),r.restart(),c.restart()},mountProjectList:function(t){if(t&&window.projectsShouldMount){Object(d.a)({targets:".home-projects__entry",translateX:["200px","0px"],duration:650,opacity:["0","1"],easing:"easeOutElastic(1, .5)",delay:d.a.stagger(325,{start:50})});window.projectsShouldMount=!1}},showPhone:function(t){var e=this;this&&this.$refs&&this.$refs.phone&&!this.$refs.phone.classList.contains("bounce-in-top")&&window.requestAnimationFrame((function(){e.$refs.phone.className+=" bounce-in-top",e.$refs.phone.style.top=e.$refs.projectlist.getBoundingClientRect().top+1.1*window.pageYOffset-150+"px",e.$refs.phonebackground.setAttribute("fill","url(#".concat(window.activePhoneURL,")"))}))}},mounted:function(){var t=this.$refs,e=t.phonebackground,o=t.projectlist;t.dayText;t.container.style.display="flex",window.hasScrolled=!1,window.activePhoneURL="turbotax",window.lastScrollTop=window.pageYOffset,window.addEventListener("scroll",r.a.throttle(this.handleScroll,50)),e.addEventListener("animationend",(function(){"exit"==e.getAttribute("animation")&&(e.setAttribute("fill","url(#".concat(window.activePhoneURL,")")),e.setAttribute("animation","enter"))})),o.addEventListener("mouseover",this.showPhone);var n=!0,c=!1,l=void 0;try{for(var h,m=o.querySelectorAll(".project-entry")[Symbol.iterator]();!(n=(h=m.next()).done);n=!0){var _=h.value;_.addEventListener("mouseover",this.handleProjectHover(_.getAttribute("data-phone-id")))}}catch(t){c=!0,l=t}finally{try{n||null==m.return||m.return()}finally{if(c)throw l}}null==document.querySelector(".page-enter-active")?(window.projectsShouldMount=!0,this.triggerMountAnimations()):([Object(d.a)({autoplay:!1,targets:".maincontent",opacity:[0,1],duration:600,easing:"easeInOutCubic"}),Object(d.a)({autoplay:!1,targets:".panels > .bg-gray-100",duration:0,easing:"easeInOutCubic",width:"66.6667%"}),Object(d.a)({autoplay:!1,targets:".homeimage",translateX:"-200px",duration:0,easing:"easeInOutCubic"}),Object(d.a)({autoplay:!1,targets:".imageslideme",duration:0,easing:"easeInOutCubic",opacity:[0,1]}),Object(d.a)({autoplay:!1,targets:".homeimage > div",width:["0%","100%"],translateX:-150,opacity:0,duration:0,easing:"easeInOutCubic"})].forEach((function(t){return t.restart()})),this.showPhone())}},_=(o(165),Object(l.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"pagecontainer",staticClass:"relative"},[o("div",{ref:"container",staticClass:"container relative z-10 flex items-start hidden h-full pb-6 mx-auto transition-3"},[o("div",{staticClass:"flex-col flex-wrap self-start w-8/12 text-left items-left contentleft"},[t._m(0),t._v(" "),o("div",{staticClass:"mt-6 ml-6 mr-6 md:mt-12 md:mr-32 maincontent fade-in-content md:mr-6 md:ml-6 lg:mr-12 lg:ml-20 xl:ml-32 xl:mr-40"},[t._m(1),t._v(" "),o("h2",{staticClass:"mt-1 text-sm text-gray-600 lg:text-base font-body"},[t._v("Specialized in Web Accessibility and Front-end Development")]),t._v(" "),o("h3",{staticClass:"mt-6 text-xl font-black md:mt-16 lg:text-2xl font-display"},[t._v("Modern Web Development 🚀")]),t._v(" "),o("p",{staticClass:"mr-8 text-sm leading-loose lg:text-base font-body"},[t._v("Even if the web has been around for a considerable time, its capabilities have been constantly expanding. All of my projects are centered around using the latest technologies in the web ecosystem and delivering long standing solutions towards my clients and employees. My style of work has been developed in the United States where I worked for several years in Silicon Valley, San Diego and the Greater Boston Area.")]),t._v(" "),o("p",{staticClass:"mt-4 mr-8 text-sm leading-loose lg:text-base font-body"},[t._v("I am currently working as a freelancer until this spring from my hometown in Bucharest, Romania having just graduated college at Northeastern University, Boston on a full-tuition scholarship. My services are centered around creating web experiences tailored for clients, having gathered experience with a variety of niches, from multi-million-dollar financial software to freshly launched companies, residential complexes, academic institutions, sport clubs, and many more. Additionally, I provide consulting services on accessibility review and enhancements, as well as on web application performance.")]),t._v(" "),o("h3",{ref:"projects",staticClass:"mt-8 text-xl font-black md:mt-16 lg:text-2xl font-display"},[t._v("Websites I worked on 💼")]),t._v(" "),o("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.mountProjectList,expression:"mountProjectList"}],ref:"projectlist",staticClass:"flex-wrap mt-1 text-sm leading-loose projectlist lg:text-base font-body"},[o("div",{ref:"showPhoneHere",staticClass:"home-projects__entry project-entry",attrs:{"data-phone-id":"turbotax"}},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)]),t._v(" "),o("Footer")],1)]),t._v(" "),o("div",{staticClass:"relative self-start w-4/12 px-6 py-4 text-white bg-transparent contentright"},[o("div",{staticClass:"absolute mt-20 homeimage",attrs:{name:"Cristian Dragomir"}},[o("img",{ref:"pozasite",staticClass:"hidden imageslideme opacity-1",attrs:{height:"500",width:"350",src:"/pozasite.jpg"}}),t._v(" "),o("div",{ref:"imageslidepanel",staticClass:"absolute top-0 right-0 float-right w-full h-full"})]),t._v(" "),o("div",{ref:"phone",staticClass:"relative phone"},[o("svg",{staticStyle:{"enable-background":"new 0 0 478 828"},attrs:{version:"1.1",id:"phoneHome",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 478 828","xml:space":"preserve"}},[o("defs",[o("pattern",{attrs:{id:"turbotax",x:"0",y:"0",width:"100%",height:"100%",patternContentUnits:"objectBoundingBox"}},[o("image",{attrs:{height:"1",width:"1",preserveAspectRatio:"none","xlink:href":"phone/turbotaxphone.png"}})]),t._v(" "),o("pattern",{attrs:{id:"quickbooks",x:"0",y:"0",width:"100%",height:"100%",patternContentUnits:"objectBoundingBox"}},[o("image",{attrs:{height:"1",width:"1",preserveAspectRatio:"none","xlink:href":"phone/quickbooksphone.png"}})]),t._v(" "),o("pattern",{attrs:{id:"nuprops",x:"0",y:"0",width:"100%",height:"100%",patternContentUnits:"objectBoundingBox"}},[o("image",{attrs:{height:"1",width:"1",preserveAspectRatio:"none","xlink:href":"phone/nupropsphone.png"}})]),t._v(" "),o("pattern",{attrs:{id:"geo",x:"0",y:"0",width:"100%",height:"100%",patternContentUnits:"objectBoundingBox"}},[o("image",{attrs:{height:"1",width:"1",preserveAspectRatio:"none","xlink:href":"phone/geophone.png"}})]),t._v(" "),o("pattern",{attrs:{id:"comiccon",x:"0",y:"0",width:"100%",height:"100%",patternContentUnits:"objectBoundingBox"}},[o("image",{attrs:{height:"1",width:"1",preserveAspectRatio:"none","xlink:href":"phone/comicconphone.png"}})]),t._v(" "),o("pattern",{attrs:{id:"gamesstop",x:"0",y:"0",width:"100%",height:"100%",patternContentUnits:"objectBoundingBox"}},[o("image",{attrs:{height:"1",width:"1",preserveAspectRatio:"none","xlink:href":"phone/gamesstopphone.png"}})]),t._v(" "),o("pattern",{attrs:{id:"turbo",x:"0",y:"0",width:"100%",height:"100%",patternContentUnits:"objectBoundingBox"}},[o("image",{attrs:{height:"1",width:"1",preserveAspectRatio:"none","xlink:href":"phone/turbophone.png"}})]),t._v(" "),o("pattern",{attrs:{id:"mint",x:"0",y:"0",width:"100%",height:"100%",patternContentUnits:"objectBoundingBox"}},[o("image",{attrs:{height:"1",width:"1",preserveAspectRatio:"none","xlink:href":"phone/mintphone.png"}})])]),t._v(" "),o("g",{attrs:{id:"XMLID_424_"}},[o("linearGradient",{attrs:{id:"XMLID_2_",gradientUnits:"userSpaceOnUse",x1:"-12.9855",y1:"161.5145",x2:"491.9855",y2:"666.4855"}},[o("stop",{staticStyle:{"stop-color":"#CCCCCC"},attrs:{offset:"0"}}),t._v(" "),o("stop",{staticStyle:{"stop-color":"#808080"},attrs:{offset:"1"}})],1),t._v(" "),o("path",{staticClass:"st0",attrs:{id:"XMLID_428_",d:"M416,107.1c0-28.8-23.3-52.1-52.1-52.1H115.1C86.3,55,63,78.3,63,107.1v613.8\n              c0,28.8,23.3,52.1,52.1,52.1h248.8c28.8,0,52.1-23.3,52.1-52.1V107.1z M408,720.4c0,24.6-20,44.6-44.6,44.6H114.6\n              C90,765,70,745,70,720.4V106.6C70,82,90,62,114.6,62h248.8C388,62,408,82,408,106.6V720.4z"}}),t._v(" "),o("polyline",{staticClass:"st1",attrs:{id:"XMLID_271_",points:"63,149.4 59.2,149.4 59.2,176.6 63,176.6 \t"}}),t._v(" "),o("polyline",{staticClass:"st1",attrs:{id:"XMLID_270_",points:"416,301.5 419.8,301.5 419.8,217.9 416,217.9 \t"}}),t._v(" "),o("g",{attrs:{id:"XMLID_267_"}},[o("polyline",{staticClass:"st1",attrs:{id:"XMLID_269_",points:"63,201.7 59.2,201.7 59.2,252.5 63,252.5 \t\t"}}),t._v(" "),o("polyline",{staticClass:"st1",attrs:{id:"XMLID_268_",points:"63,266.9 59.2,266.9 59.2,317.8 63,317.8 \t\t"}})]),t._v(" "),o("path",{staticClass:"phonebackground",attrs:{id:"XMLID_425_",d:"M364.9,74h-28.5c-6.1,0-8.3-0.1-8.7,7.6c-0.4,8-5.9,12.5-13.3,14.8c-2.5,0.8-5.3,0.6-8,0.6\n              h-5.4H180.2h-5.4c-2.7,0-5.5,0.3-8-0.5c-7.4-2.3-13-7-13.3-15c-0.4-7.7-2.6-7.5-8.7-7.5h-28.8C98.4,74,85,88,85,105.5v613.3\n              c0,17.5,13.4,31.2,30.9,31.2h249c17.5,0,32.1-13.8,32.1-31.2V105.5C397,88,382.4,74,364.9,74z"}}),t._v(" "),o("path",{ref:"phonebackground",staticClass:"st2",attrs:{id:"XMLID_425_",d:"M364.9,74h-28.5c-6.1,0-8.3-0.1-8.7,7.6c-0.4,8-5.9,12.5-13.3,14.8c-2.5,0.8-5.3,0.6-8,0.6\n              h-5.4H180.2h-5.4c-2.7,0-5.5,0.3-8-0.5c-7.4-2.3-13-7-13.3-15c-0.4-7.7-2.6-7.5-8.7-7.5h-28.8C98.4,74,85,88,85,105.5v613.3\n              c0,17.5,13.4,31.2,30.9,31.2h249c17.5,0,32.1-13.8,32.1-31.2V105.5C397,88,382.4,74,364.9,74z"}}),t._v(" "),o("linearGradient",{attrs:{id:"XMLID_3_",gradientUnits:"userSpaceOnUse",x1:"-8.1822",y1:"166.3178",x2:"486.1822",y2:"660.6822"}},[o("stop",{staticStyle:{"stop-color":"#4c4c4b"},attrs:{offset:"0"}}),t._v(" "),o("stop",{staticStyle:{"stop-color":"#000000"},attrs:{offset:"1"}})],1),t._v(" "),o("path",{staticClass:"st3",attrs:{id:"XMLID_437_",d:"M408,106.6C408,82,388,62,363.4,62H114.6C90,62,70,82,70,106.6v613.8C70,745,90,765,114.6,765\n              h248.8c24.6,0,44.6-20,44.6-44.6V106.6z M280.7,79.1c0,2.4-2,4.4-4.4,4.4c-2.4,0-4.4-2-4.4-4.4s2-4.4,4.4-4.4\n              C278.8,74.8,280.7,76.7,280.7,79.1z M221.2,77h39c1.7,0,3,1,3,2.5s-1.3,2.5-3,2.5h-39c-1.7,0-3-1-3-2.5S219.6,77,221.2,77z\n              M397,718.8c0,17.5-14.6,31.2-32.1,31.2h-249C98.4,750,85,736.2,85,718.8V105.5C85,88,98.4,74,115.9,74h28.8c6.1,0,8.3-0.1,8.7,7.6\n              c0.4,8,5.9,12.5,13.3,14.8c2.5,0.8,5.3,0.6,8,0.6h5.4h120.7h5.4c2.7,0,5.5,0.3,8-0.5c7.4-2.3,13-7,13.3-15c0.4-7.7,2.6-7.5,8.7-7.5\n              h28.5c17.5,0,32.1,14,32.1,31.5V718.8z"}}),t._v(" "),o("circle",{staticClass:"st4",attrs:{id:"XMLID_429_",cx:"276.3",cy:"79.1",r:"4.4"}}),t._v(" "),o("path",{staticClass:"st4",attrs:{id:"XMLID_430_",d:"M221.2,82h39c1.7,0,3-1,3-2.5s-1.3-2.5-3-2.5h-39c-1.7,0-3,1-3,2.5S219.6,82,221.2,82z"}})],1)])])])]),t._v(" "),t._m(9)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center w-full pt-4 pl-2 text-base fade-in-content lg:pl-6 xl:text-lg font-body"},[e("p",{staticClass:"font-black font-display logo-titlu"},[this._v(" Cristian A. Dragomir")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"text-2xl font-bold leading-tight lg:text-3xl xl:text-4xl font-display"},[this._v("Software engineer obssessed about performance and quality"),e("span",{staticClass:"text-gray-600"},[this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-projects__text"},[e("p",{staticClass:"home-projects__title"},[this._v("TurboTax")]),this._v(" "),e("p",[this._v("USA's #1 tax filling software, with over 10 million yearly hits. Here I developed React front-end components which are shared across the marketing website (turbotax.com) and in A&B tests. As a fin-tech product, the websites had to comply with WCAG AA standards, have a fast page load and be robust, achieving this was done via auditing with Axe, WPT, aplitools and automated tests.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-between w-full mt-4 home-projects__multi"},[e("div",{staticClass:"home-projects__multi-container"},[e("a",{staticClass:"home-projects__link-multi",attrs:{href:"https://turbotax.intuit.com/tax-tools/tax-reform"}},[this._v("Sample React.js App")])]),this._v(" "),e("div",{staticClass:"home-projects__multi-container"},[e("a",{staticClass:"home-projects__link-multi",attrs:{href:"https://turbotax.intuit.com/personal-taxes/online/"}},[this._v("Sample React.js Page")])]),this._v(" "),e("div",{staticClass:"home-projects__multi-container"},[e("a",{staticClass:"home-projects__link",attrs:{href:"https://turbotax.intuit.com/"}},[this._v("Check my work")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex items-start home-projects__entry"},[o("div",{staticClass:"flex flex-wrap md:flex-1 project-entry project-2col",attrs:{"data-phone-id":"mint"}},[o("div",{staticClass:"home-projects__text"},[o("p",{staticClass:"home-projects__title"},[t._v("Mint")]),t._v(" "),o("p",[t._v("Mint is a budget tracker & planner which syncs with your banks and transactions.")])]),t._v(" "),o("div",{staticClass:"mr-4 home-projects__button"},[o("a",{staticClass:"home-projects__link",attrs:{href:"https://www.mint.com/"}},[t._v("Visit site")])])]),t._v(" "),o("div",{staticClass:"flex flex-wrap md:ml-4 md:flex-1 project-entry project-2col",attrs:{"data-phone-id":"turbo"}},[o("div",{staticClass:"home-projects__text"},[o("p",{staticClass:"home-projects__title"},[t._v("Turbo")]),t._v(" "),o("p",[t._v("Turbo is a free credit score checker, financial health advisor, debt-to-incone reporter & more.")])]),t._v(" "),o("div",{staticClass:"home-projects__button"},[o("a",{staticClass:"home-projects__link",attrs:{href:"http://turbo.com/"}},[t._v("Visit site")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-projects__entry project-entry",attrs:{"data-phone-id":"quickbooks"}},[e("div",{staticClass:"home-projects__text"},[e("p",{staticClass:"home-projects__title"},[this._v("QuickBooks")]),this._v(" "),e("p",{},[this._v("A complete accounting solution, topping sales in its software market in the USA. My work here was to refresh the front-end ecosystem. I ported several flows from dojo.js/REST to React/Relay/GraphQL.")])]),this._v(" "),e("div",{staticClass:"mt-4 home-projects__button"},[e("a",{staticClass:"home-projects__link",attrs:{href:"https://quickbooks.intuit.com/"}},[this._v("Visit site")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex-wrap home-projects__entry project-entry",attrs:{"data-phone-id":"geo"}},[o("div",{staticClass:"home-projects__text"},[o("p",{staticClass:"home-projects__title"},[t._v("Northeastern University - Departments")]),t._v(" "),o("p",[t._v("I worked as a web developer for my alma matter where I contributed to a variety of projects using Laravel, Wordpress, Tailwind CSS, Nuxt.js, Vue.js and GraphQL,")])]),t._v(" "),o("div",{staticClass:"flex justify-between w-full mt-4 home-projects__multi"},[o("div",{staticClass:"home-projects__multi-container"},[o("a",{staticClass:"home-projects__link-multi",attrs:{href:"https://www.northeastern.edu/geo/"}},[t._v("Wordpress Project 1")])]),t._v(" "),o("div",{staticClass:"home-projects__multi-container"},[o("a",{staticClass:"home-projects__link-multi",attrs:{href:"https://learning.northeastern.edu/"}},[t._v("Wordpress Project 1")])]),t._v(" "),o("div",{staticClass:"home-projects__multi-container"},[o("a",{staticClass:"home-projects__link-multi",attrs:{href:"https://dev-graduateoutcomes.northeastern.edu/"}},[t._v("Vue.js Demo App")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-4 home-projects__entry project-entry",attrs:{"data-phone-id":"nuprops"}},[e("div",{staticClass:"home-projects__text"},[e("p",{staticClass:"home-projects__title"},[this._v("Northeastern - Digital Presence Monitoring")]),this._v(" "),e("p",[this._v("A tool I created which organizes Northeastern's internal organization hierarchy, shows information about them, monitors their online presence and audits their accessibility, performance, providing an API with the info and more. This project was made with Laravel, TailWind CSS, Google Lighthouse and CRON Jobs. ")])]),this._v(" "),e("div",{staticClass:"mt-4 home-projects__button"},[e("a",{staticClass:"home-projects__link",attrs:{href:"http://165.227.195.33/"}},[this._v("Laravel Demo App")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex items-start home-projects__entry"},[o("div",{staticClass:"flex flex-wrap md:flex-1 project-entry project-2col-2",attrs:{"data-phone-id":"gamesstop"}},[o("div",{staticClass:"home-projects__text"},[o("p",{staticClass:"home-projects__title"},[t._v("Gamesstop")]),t._v(" "),o("p",[t._v("Bucharest's finest place for board games and hobbies. This was my first independent freelance project, created in 2012.")])]),t._v(" "),o("div",{staticClass:"mr-4 home-projects__button"},[o("a",{staticClass:"home-projects__link",attrs:{href:"http://gamesstop.ro/"}},[t._v("Visit site")])])]),t._v(" "),o("div",{staticClass:"flex flex-wrap md:ml-4 md:flex-1 project-entry project-2col-2",attrs:{"data-phone-id":"comiccon"}},[o("div",{staticClass:"home-projects__text"},[o("p",{staticClass:"home-projects__title"},[t._v("Comic Con - Museum")]),t._v(" "),o("p",[t._v("Comic Con and Intuit organized a hackathon in San Diego to create software for the upcoming museum. Check our projects!")])]),t._v(" "),o("div",{staticClass:"home-projects__button"},[o("a",{staticClass:"home-projects__link",attrs:{href:"https://github.com/Comic-Con-Museum"}},[t._v("Github Repo")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"absolute top-0 left-0 z-0 flex w-full h-full panels"},[e("div",{staticClass:"w-full h-full bg-gray-100"}),this._v(" "),e("div",{staticClass:"flex-1 h-full bg-dark"})])}],!1,null,"49a5fe8c",null));e.default=_.exports}}]);