(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{309:function(t,e,l){"use strict";l.r(e);var o={props:{item:{type:Object,default:function(){return{title:"Title",desc:"Sinopsis",isDone:!1}}}}},r=l(26),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"flex-grow text-4xl py-3"},[e("nuxt-link",{attrs:{to:"/articles/detail/".concat(t.item.id)}},[e("img",{staticClass:"h-[300px] w-[400px] object-fill",attrs:{src:t.item.img,alt:"article ".concat(t.item.id," image")}}),t._v(" "),e("h2",{staticClass:"pt-4"},[t._v(t._s(t.item.title))])])],1)}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,l){"use strict";l.r(e);var o={name:"ArticlePage",components:{ArticlesPage:l(309).default},data:function(){return{articles:[{id:1,title:"Judul Artikel 1",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",img:"https://images.unsplash.com/photo-1649282806617-c51bb282899c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"},{id:2,title:"Judul Artikel 2",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",img:"https://images.unsplash.com/photo-1635732646038-0a1a2fe3f2d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"},{id:3,title:"Judul Artikel 3",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?",img:"https://images.unsplash.com/photo-1640006807976-a6127e9d6fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"}]}},head:{title:"Articles"}},r=l(26),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"pt-20 h-full px-5 py-7 flex flex-wrap gap-x-5"},t._l(t.articles,(function(article,i){return e("articles-page",{key:i,attrs:{item:article}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticlesPage:l(309).default})}}]);