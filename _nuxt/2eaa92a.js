(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{309:function(e,t,n){"use strict";n.r(t);var o=n(30),r=(n(87),n(43),{name:"CardItem",props:{movie:{type:Object,default:"Untitled"},isMultiGrid:{type:Boolean,required:!0,default:!1}}}),l=n(26),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"'relative min-w-[250px] max-w-full flex items-center p-4 text-xl md:text-2xl',",attrs:{id:"list-movies"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.movie.isDone,expression:"movie.isDone"}],class:["mx-3 h-[.85em] w-[.85em]",e.isMultiGrid?"md:h-4 md:w-4":"md:h-5 md:w-5"],attrs:{type:"checkbox",name:"status"},domProps:Object(o.a)({checked:e.movie.isDone},"checked",Array.isArray(e.movie.isDone)?e._i(e.movie.isDone,null)>-1:e.movie.isDone),on:{change:function(t){var n=e.movie.isDone,o=t.target,r=!!o.checked;if(Array.isArray(n)){var l=e._i(n,null);o.checked?l<0&&e.$set(e.movie,"isDone",n.concat([null])):l>-1&&e.$set(e.movie,"isDone",n.slice(0,l).concat(n.slice(l+1)))}else e.$set(e.movie,"isDone",r)}}}),e._v(" "),t("div",{staticClass:"flex flex-col"},[t("h2",{staticClass:"mb-1",class:[e.movie.isDone?"line-through":""],attrs:{id:"title"}},[e._v("\n      "+e._s(e.movie.title)+"\n    ")]),e._v(" "),e.movie.isDone?e._e():t("p",{staticClass:"text-base",attrs:{id:"description"}},[e._v("\n      "+e._s(e.movie.desc)+"\n    ")])])])}),[],!1,null,null,null);t.default=component.exports},311:function(e,t,n){var content=n(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("1f2047ba",content,!0,{sourceMap:!1})},314:function(e,t,n){"use strict";n(311)},315:function(e,t,n){var o=n(53)((function(i){return i[1]}));o.push([e.i,"",""]),o.locals={},e.exports=o},318:function(e,t,n){"use strict";n.r(t);n(55),n(44),n(15),n(88),n(89);var o={name:"PlaygroundPage",components:{CardItem:n(309).default},data:function(){return{selectedQuery:"",isMobile:!1,isMultiGrid:!1,isCreating:!1,movies:[{title:"Hitman",desc:"Sinopsis",genre:"Action",isDone:!1},{title:"Jumanji 2022",desc:"Sinopsis",genre:"Action Comedy",isDone:!1},{title:"Deadpool 2",desc:"Sinopsis",genre:"Superhero Action Comedy",isDone:!1},{title:"Megaman X",desc:"Sinopsis",genre:"Fantasy Action",isDone:!1},{title:"Digimon",desc:"Sinopsis",genre:"Fantasy Action",isDone:!1},{title:"Superman 2",desc:"Sinopsis",genre:"Superhero Action",isDone:!1},{title:"Man of Steel",desc:"Sinopsis",genre:"Superhero Action",isDone:!1},{title:"Civil War",desc:"Sinopsis",genre:"Superhero Action Comedy",isDone:!1},{title:"Avengers",desc:"Sinopsis",genre:"Superhero Action Comedy",isDone:!1},{title:"Avengers 2: Ultron",desc:"Sinopsis",genre:"Superhero Action Comedy",isDone:!1},{title:"The Boys",desc:"Sinopsis",genre:"Superhero Action",isDone:!1},{title:"Breaking Bad",desc:"Sinopsis",genre:"Action",isDone:!1},{title:"Blue Beetle",desc:"Sinopsis",genre:"Superhero Action Comedy",isDone:!1}]}},head:{title:"Playground"},computed:{resultQuery:function(){var e=this;return this.selectedQuery?this.movies.filter((function(t){return e.selectedQuery.toLowerCase().split(" ").every((function(e){return t.genre.toLowerCase().includes(e)}))})):this.movies}},mounted:function(){var e=window.innerWidth;e<768?(e=window.innerWidth,this.isMobile=!0):e>768&&(e=window.innerWidth,this.isMobile=!1)},methods:{}},r=(n(314),n(26)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"pt-16 px-4"},[t("h2",{staticClass:"py-8 text-2xl md:text-3xl lg:text-4xl"},[e._v("Movie List")]),e._v(" "),e.isMobile?e._e():t("div",{staticClass:"flex items-center gap-x-3"},[t("h2",{staticClass:"text-lg md:text-xl"},[e._v("View")]),e._v(" "),t("button",{staticClass:"@btn @btn-square @btn-sm text-lg md:text-xl",on:{click:function(t){e.isMultiGrid=!e.isMultiGrid}}},[t("ion-icon",{attrs:{name:[e.isMultiGrid?"menu":"grid"]}})],1)]),e._v(" "),e.isCreating?t("form",{staticClass:"py-2 px-4"},[t("div",{attrs:{id:"movie-form"}},[e._m(0),e._v(" "),t("div",{staticClass:"py-2 flex gap-x-3",attrs:{id:"confirmation-btn"}},[t("button",{staticClass:"@btn @btn-primary font-bold text-base text-white md:text-lg",attrs:{id:"save-btn"},on:{click:e.prevent}},[e._v("\n          Save\n        ")]),e._v(" "),t("button",{staticClass:"@btn @btn-secondary font-bold text-base text-white md:text-lg",attrs:{id:"cancel-btn"},on:{click:function(t){e.isCreating=!e.isCreating}}},[e._v("\n          Cancel\n        ")])])])]):t("div",[t("div",{staticClass:"flex gap-x-3"},[t("div",{staticClass:"flex flex-grow items-center justify-start gap-x-4 text-lg md:text-xl"},[t("h2",[e._v("Genre:")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedQuery,expression:"selectedQuery"}],staticClass:"@select @select-success p-2 m-0 w-full max-w-xs",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedQuery=t.target.multiple?n:n[0]}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Sekect movie genre")]),e._v(" "),t("option",[e._v("Comedy")]),e._v(" "),t("option",[e._v("Action")]),e._v(" "),t("option",[e._v("Superhero")]),e._v(" "),t("option",[e._v("Fantasy")])])]),e._v(" "),t("div",{staticClass:"flex flex-grow items-center justify-end"},[e.isCreating?e._e():t("button",{staticClass:"@btn @btn-neutral @btn-md my-5 font-bold text-lg lg:@btn-lg",on:{click:function(t){e.isCreating=!e.isCreating}}},[e._v("\n          Add Movie\n        ")])])]),e._v(" "),t("hr",{staticClass:"h-px my-8 bg-gray-200 border-0 dark:bg-gray-400"}),e._v(" "),t("div",{class:["grid duration-300",e.isMultiGrid?"grid-cols-3":"grid-cols-2"]},e._l(e.resultQuery,(function(n,i){return t("CardItem",{key:i,attrs:{movie:n,"is-multi-grid":e.isMultiGrid}})})),1)])])}),[function(){var e=this._self._c;return e("div",{staticClass:"flex flex-col",attrs:{id:"add-card"}},[e("input",{staticClass:"border border-black mb-2 p-2 text-base md:text-lg",attrs:{type:"text",placeholder:"Title"}}),this._v(" "),e("textarea",{staticClass:"text-lg p-2 border border-slate-500",attrs:{cols:"30",rows:"10"}})])}],!1,null,"9ed6fef0",null);t.default=component.exports;installComponents(component,{CardItem:n(309).default})}}]);