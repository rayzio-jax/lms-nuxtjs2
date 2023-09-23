(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{310:function(e,t,n){"use strict";n.r(t);var o=n(30),r=(n(87),n(43),{name:"CardItem",props:{item:{type:Object,default:function(){return{title:"Title",desc:"Sinopsis",isDone:!1}}},isMultiGrid:{type:Boolean,default:!1}}}),l=n(26),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"'relative min-w-[250px] max-w-full flex items-center p-4 text-xl md:text-2xl',"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.item.isDone,expression:"item.isDone"}],class:["mx-3 h-[.85em] w-[.85em]",e.isMultiGrid?"md:h-4 md:w-4":"md:h-5 md:w-5"],attrs:{type:"checkbox",name:"status"},domProps:Object(o.a)({checked:e.item.isDone},"checked",Array.isArray(e.item.isDone)?e._i(e.item.isDone,null)>-1:e.item.isDone),on:{change:function(t){var n=e.item.isDone,o=t.target,r=!!o.checked;if(Array.isArray(n)){var l=e._i(n,null);o.checked?l<0&&e.$set(e.item,"isDone",n.concat([null])):l>-1&&e.$set(e.item,"isDone",n.slice(0,l).concat(n.slice(l+1)))}else e.$set(e.item,"isDone",r)}}}),e._v(" "),t("div",{staticClass:"flex flex-col"},[t("h2",{staticClass:"mb-1",class:[e.item.isDone?"line-through":""],attrs:{id:"title"}},[e._v("\n      "+e._s(e.item.title)+"\n    ")]),e._v(" "),e.item.isDone?e._e():t("p",{staticClass:"text-base",attrs:{id:"description"}},[e._v("\n      "+e._s(e.item.desc)+"\n    ")])])])}),[],!1,null,null,null);t.default=component.exports},312:function(e,t,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("046c7b02",content,!0,{sourceMap:!1})},315:function(e,t,n){"use strict";n(312)},316:function(e,t,n){var o=n(53)((function(i){return i[1]}));o.push([e.i,"",""]),o.locals={},e.exports=o},320:function(e,t,n){"use strict";n.r(t);n(55),n(44),n(15),n(87),n(43);var o=n(30);n(88),n(89),n(45),n(31),n(68),n(37),n(69);function r(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={name:"MoviesPage",components:{CardItem:n(310).default},data:function(){return{newMovie:{title:"Title",desc:"Sinopsis",genre:"None",isDone:!1},selectedQuery:"",isMobile:!1,isMultiGrid:!1,isCreating:!1,movies:[{title:"Hitman",desc:"Sinopsis",genre:"Action",isDone:!1},{title:"Jumanji 2022",desc:"Sinopsis",genre:"Action Comedy",isDone:!1},{title:"Deadpool 2",desc:"Sinopsis",genre:"Superhero Action Comedy",isDone:!1},{title:"Megaman X",desc:"Sinopsis",genre:"Fantasy Action",isDone:!1},{title:"Digimon",desc:"Sinopsis",genre:"Fantasy Action",isDone:!1},{title:"Superman 2",desc:"Sinopsis",genre:"Superhero Action",isDone:!1},{title:"Man of Steel",desc:"Sinopsis",genre:"Superhero Action",isDone:!1},{title:"Civil War",desc:"Sinopsis",genre:"Superhero Action Comedy",isDone:!1},{title:"Avengers",desc:"Sinopsis",genre:"Superhero Action Comedy",isDone:!1},{title:"Avengers 2: Ultron",desc:"Sinopsis",genre:"Superhero Action Comedy",isDone:!1},{title:"The Boys",desc:"Sinopsis",genre:"Superhero Action",isDone:!1},{title:"Breaking Bad",desc:"Sinopsis",genre:"Action",isDone:!1},{title:"Blue Beetle",desc:"Sinopsis",genre:"Superhero Action Comedy",isDone:!1}]}},head:{title:"Playground"},computed:{resultQuery:function(){var e=this;return"none"===this.selectedQuery.toLowerCase()?this.movies:this.selectedQuery?this.movies.filter((function(t){return e.selectedQuery.toLowerCase().split(" ").every((function(e){return t.genre.toLowerCase().includes(e)}))})):this.movies}},mounted:function(){var e=window.innerWidth;e<768?(e=window.innerWidth,this.isMobile=!0):e>768&&(e=window.innerWidth,this.isMobile=!1)},methods:{addMovie:function(){this.movies.push(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.newMovie)),this.newMovie={title:"",desc:"",genre:"",isDone:!1},console.log(this.movies)}}},c=l,d=(n(315),n(26)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"pt-16 px-4"},[t("h2",{staticClass:"py-8 text-2xl md:text-3xl lg:text-4xl"},[e._v("Movie List")]),e._v(" "),e.isMobile?e._e():t("div",{staticClass:"flex items-center gap-x-3"},[t("h2",{staticClass:"text-lg md:text-xl"},[e._v("View")]),e._v(" "),t("button",{staticClass:"@btn @btn-square @btn-sm text-lg md:text-xl",on:{click:function(t){e.isMultiGrid=!e.isMultiGrid}}},[t("ion-icon",{attrs:{name:[e.isMultiGrid?"menu":"grid"]}})],1)]),e._v(" "),e.isCreating?t("form",{staticClass:"py-2 px-4",on:{submit:function(t){return t.preventDefault(),e.addMovie.apply(null,arguments)}}},[t("div",{attrs:{id:"movie-form"}},[t("div",{staticClass:"flex flex-col gap-y-6",attrs:{id:"add-card"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newMovie.title,expression:"newMovie.title"}],staticClass:"border border-black mb-2 p-2 text-base md:text-lg",attrs:{id:"movie-title",type:"text",placeholder:"Title",required:""},domProps:{value:e.newMovie.title},on:{input:function(t){t.target.composing||e.$set(e.newMovie,"title",t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newMovie.genre,expression:"newMovie.genre"}],staticClass:"border border-black mb-2 p-2 text-base md:text-lg",attrs:{id:"movie-genre",type:"text",placeholder:"Enter movie genre separate by space",required:""},domProps:{value:e.newMovie.genre},on:{input:function(t){t.target.composing||e.$set(e.newMovie,"genre",t.target.value)}}}),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newMovie.desc,expression:"newMovie.desc"}],staticClass:"text-lg p-2 border border-slate-500",attrs:{id:"movie-synopsis",cols:"30",rows:"10",placeholder:"Sinopsis",required:""},domProps:{value:e.newMovie.desc},on:{input:function(t){t.target.composing||e.$set(e.newMovie,"desc",t.target.value)}}}),e._v(" "),t("div",{staticClass:"flex gap-x-3"},[t("label",{attrs:{for:"movie-done"}},[e._v("Done watch?")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newMovie.isDone,expression:"newMovie.isDone"}],attrs:{id:"movie-done",type:"checkbox"},domProps:{checked:Array.isArray(e.newMovie.isDone)?e._i(e.newMovie.isDone,null)>-1:e.newMovie.isDone},on:{change:function(t){var n=e.newMovie.isDone,o=t.target,r=!!o.checked;if(Array.isArray(n)){var l=e._i(n,null);o.checked?l<0&&e.$set(e.newMovie,"isDone",n.concat([null])):l>-1&&e.$set(e.newMovie,"isDone",n.slice(0,l).concat(n.slice(l+1)))}else e.$set(e.newMovie,"isDone",r)}}})])]),e._v(" "),t("div",{staticClass:"py-2 flex gap-x-3",attrs:{id:"confirmation-btn"}},[t("button",{staticClass:"@btn @btn-primary font-bold text-base text-white md:text-lg",attrs:{id:"save-btn",type:"submit"}},[e._v("\n          Save\n        ")]),e._v(" "),t("button",{staticClass:"@btn @btn-secondary font-bold text-base text-white md:text-lg",attrs:{id:"cancel-btn"},on:{click:function(t){e.isCreating=!e.isCreating}}},[e._v("\n          Cancel\n        ")])])])]):t("div",[t("div",{staticClass:"flex gap-x-3"},[t("div",{staticClass:"flex flex-grow items-center justify-start gap-x-4 text-lg md:text-xl"},[t("h2",[e._v("Genre:")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedQuery,expression:"selectedQuery"}],staticClass:"@select @select-success p-2 m-0 w-full max-w-xs",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedQuery=t.target.multiple?n:n[0]}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Sekect movie genre")]),e._v(" "),t("option",[e._v("None")]),e._v(" "),t("option",[e._v("Comedy")]),e._v(" "),t("option",[e._v("Action")]),e._v(" "),t("option",[e._v("Superhero")]),e._v(" "),t("option",[e._v("Fantasy")])])]),e._v(" "),t("div",{staticClass:"flex flex-grow items-center justify-end"},[e.isCreating?e._e():t("button",{staticClass:"@btn @btn-neutral @btn-md my-5 font-bold text-lg lg:@btn-lg",on:{click:function(t){e.isCreating=!e.isCreating}}},[e._v("\n          Add Movie\n        ")])])]),e._v(" "),t("hr",{staticClass:"h-px my-8 bg-gray-200 border-0 dark:bg-gray-400"}),e._v(" "),t("div",{class:["grid duration-300",e.isMultiGrid?"grid-cols-3":"grid-cols-2"]},e._l(e.resultQuery,(function(n,i){return t("card-item",{key:i,attrs:{item:n,"is-multi-grid":e.isMultiGrid}})})),1)])])}),[],!1,null,"20289612",null);t.default=component.exports;installComponents(component,{CardItem:n(310).default})}}]);