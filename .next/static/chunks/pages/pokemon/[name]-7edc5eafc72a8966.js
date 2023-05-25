(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{40:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pokemon/[name]",function(){return t(4962)}])},9333:function(e,n){"use strict";n.Z={src:"/_next/static/media/Logo.649d483c.png",height:96,width:266,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AcKhblX8/gL0tNUh8ywb9UPx+gkeJhXvvpDNIdcvFv77Ab2ebsYMCfg58vgK/gwI+gLu9g4AFAzyAPf8BgALB/7dAWNgeTRBLfueCwgAvNvqDtzt9QTg9v8IIj4k7FARDPzQma4v5V5oyb0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},1812:function(e,n,t){"use strict";t.d(n,{L:function(){return d}});var s=t(7294),r=t(8687),a=t.n(r),i=t(7297);function l(){let e=(0,i.Z)(["\n {\n    pokemons(limit: 10, offset: 0){\n      results{\n        id\n        name\n        image\n        artwork\n      }\n    }\n  }\n"]);return l=function(){return e},e}function c(){let e=(0,i.Z)(["\n  query getPokemon($name: String!){\n    pokemon(name: $name) {\n      abilities {\n        ability {\n          name\n        }\n      }\n      height\n      weight\n      name\n      id\n      types{\n        slot\n        type{\n          name\n        }\n      }\n      stats{\n        base_stat\n        effort\n        stat{\n          name\n        }\n      }\n    }\n  }\n"]);return c=function(){return e},e}let o=(0,r.gql)(l());(0,r.gql)(c());let d=()=>{let[e,n]=(0,s.useState)([]);return(0,s.useEffect)(()=>{a()("https://graphql-pokeapi.graphcdn.app/",o).then(e=>n(e.pokemons.results))},[]),{pokemons:e}}},4962:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return y},default:function(){return N}});var s=t(5893),r=t(5675),a=t.n(r),i=t(7294),l=t(682),c=t(4051),o=t(1555),d=t(4184),m=t.n(d),h=t(6792);function u({min:e,now:n,max:t,label:r,visuallyHidden:a,striped:i,animated:l,className:c,style:o,variant:d,bsPrefix:h,...u},p){return(0,s.jsx)("div",{ref:p,...u,role:"progressbar",className:m()(c,`${h}-bar`,{[`bg-${d}`]:d,[`${h}-bar-animated`]:l,[`${h}-bar-striped`]:l||i}),style:{width:`${Math.round((n-e)/(t-e)*1e5)/1e3}%`,...o},"aria-valuenow":n,"aria-valuemin":e,"aria-valuemax":t,children:a?(0,s.jsx)("span",{className:"visually-hidden",children:r}):r})}let p=i.forwardRef(({isChild:e,...n},t)=>{var r;let a;if(n.bsPrefix=(0,h.vE)(n.bsPrefix,"progress"),e)return u(n,t);let{min:l,now:c,max:o,label:d,visuallyHidden:p,striped:f,animated:g,bsPrefix:b,variant:x,className:j,children:_,...v}=n;return(0,s.jsx)("div",{ref:t,...v,className:m()(j,b),children:_?(r=e=>(0,i.cloneElement)(e,{isChild:!0}),a=0,i.Children.map(_,e=>i.isValidElement(e)?r(e,a++):e)):u({min:l,now:c,max:o,label:d,visuallyHidden:p,striped:f,animated:g,bsPrefix:b,variant:x},t)})});p.displayName="ProgressBar",p.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1};var f=t(9333),g=t(1163),b=t(6273),x=t.n(b),j=t(8193),_=t(1812);let v=e=>{let{pokemon:n}=e,t=(0,g.useRouter)(),{pokemons:r}=(0,_.L)(),i=r.find(e=>e.name===n.name),d=e=>{switch(e){case"grass":case"bug":return"#69ad69";case"poison":case"psychic":return"#cf70cf";case"fire":return"#ff9c10";case"flying":return"linear-gradient(#24caff 50%, #b3abab 50%)";default:return"#3fafd3"}};return(0,s.jsxs)(l.Z,{children:[(0,s.jsx)("div",{className:"py-5 text-center",children:(0,s.jsx)(a(),{src:f.Z,width:300,alt:"pokemon logo"})}),(0,s.jsxs)(c.Z,{sm:1,lg:3,children:[(0,s.jsx)(o.Z,{className:"d-block d-md-none",children:(0,s.jsx)("div",{className:"".concat(x().mb_img),children:(0,s.jsx)(a(),{src:null==i?void 0:i.artwork,height:300,width:300,alt:""})})}),(0,s.jsxs)(o.Z,{children:[(0,s.jsxs)("h1",{className:x().pokemon_name,children:[n.name," #00",n.id]}),(0,s.jsx)("p",{className:"fs-5",children:"There is a plant seed on its black right from the day this pokemon is born. The seed slowly grows larger"}),(0,s.jsx)("div",{className:x().pokemon_card,children:(0,s.jsxs)(c.Z,{xs:2,className:"g-5",children:[(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("p",{className:"fw-bold mb-2 fs-5",children:"Height"}),(0,s.jsxs)("p",{children:[n.height,"'"]})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("p",{className:"fw-bold mb-2 fs-5",children:"Category"}),(0,s.jsx)("p",{children:"Seed"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("p",{className:"fw-bold mb-2 fs-5",children:"Weight"}),(0,s.jsxs)("p",{children:[n.weight," lbs"]})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("p",{className:"fw-bold mb-2 fs-5",children:"Abilities"}),(0,s.jsx)("ul",{children:n.abilities.map((e,n)=>(0,s.jsx)("li",{className:"text-capitalize",children:e.ability.name},n))})]})]})})]}),(0,s.jsx)(o.Z,{className:"d-none d-md-block",children:(0,s.jsx)("div",{className:x().wb_img,children:(0,s.jsx)(a(),{src:null==i?void 0:i.artwork,height:370,width:370,alt:""})})}),(0,s.jsxs)(o.Z,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"mb-4",children:"Type"}),n.types.map((e,n)=>(0,s.jsx)("span",{className:x().neature,style:{background:d(e.type.name)},children:e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1)},n))]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"my-4",children:"Weakness"}),["fire","psychic","flying","ice"].map((e,n)=>(0,s.jsx)("span",{className:x().neature,style:{background:d(e)},children:e.charAt(0).toUpperCase()+e.slice(1)},n))]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"my-4",children:"Stats"}),n.stats.map((e,n)=>(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"fs-5 mb-1 text-capitalize",children:e.stat.name}),(0,s.jsx)(p,{style:{height:"10px"},variant:"info",now:e.base_stat,className:"mb-2"})]},n))]})]})]}),(0,s.jsx)("div",{className:"mt-5",children:(0,s.jsxs)("button",{className:x().back_btn,onClick:()=>t.push("/"),children:[(0,s.jsx)(j.uME,{}),"Back to Homepage"]})})]})};var y=!0,N=v},6273:function(e){e.exports={pokemon_name:"Charectar_pokemon_name__Z24Nr",pokemon_card:"Charectar_pokemon_card__sKOcL",neature:"Charectar_neature__8gIHU",back_btn:"Charectar_back_btn__X72ks",mb_img:"Charectar_mb_img__2J1kx",wb_img:"Charectar_wb_img__lgPMr"}},1163:function(e,n,t){e.exports=t(880)},8357:function(e,n,t){"use strict";t.d(n,{w_:function(){return c}});var s=t(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=s.createContext&&s.createContext(r),i=function(){return(i=Object.assign||function(e){for(var n,t=1,s=arguments.length;t<s;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},l=function(e,n){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>n.indexOf(s)&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)0>n.indexOf(s[r])&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(t[s[r]]=e[s[r]]);return t};function c(e){return function(n){return s.createElement(o,i({attr:i({},e.attr)},n),function e(n){return n&&n.map(function(n,t){return s.createElement(n.tag,i({key:t},n.attr),e(n.child))})}(e.child))}}function o(e){var n=function(n){var t,r=e.attr,a=e.size,c=e.title,o=l(e,["attr","size","title"]),d=a||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),s.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:t,style:i(i({color:e.color||n.color},n.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&s.createElement("title",null,c),e.children)};return void 0!==a?s.createElement(a.Consumer,null,function(e){return n(e)}):n(r)}}},function(e){e.O(0,[617,470,774,888,179],function(){return e(e.s=40)}),_N_E=e.O()}]);