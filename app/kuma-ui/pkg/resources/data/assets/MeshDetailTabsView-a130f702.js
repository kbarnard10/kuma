import{d as h,k as f,T as w,a as n,o as R,b as V,w as m,e as s,m as b,l as p,f as _}from"./index-5610cebd.js";import{N as T}from"./NavTabs-6a256ce7.js";import{T as x}from"./TextWithCopyButton-6b9d1e6e.js";import"./CopyButton-92e1c8af.js";import"./index-fce48c05.js";const D=h({__name:"MeshDetailTabsView",setup(v){var l;const{t:u}=f(),d=(((l=w().getRoutes().find(e=>e.name==="mesh-detail-tabs-view"))==null?void 0:l.children)??[]).map(e=>{var a,t;const i=typeof e.name>"u"?(a=e.children)==null?void 0:a[0]:e,o=i.name,r=((t=i.meta)==null?void 0:t.module)??"";return{title:u(`meshes.routes.item.navigation.${o}`),routeName:o,module:r}});return(e,i)=>{const o=n("RouteTitle"),r=n("RouterView"),c=n("AppView"),a=n("RouteView");return R(),V(a,{name:"mesh-detail-tabs-view",params:{mesh:""}},{default:m(({route:t})=>[s(c,null,{title:m(()=>[b("h1",null,[s(x,{text:t.params.mesh},{default:m(()=>[s(o,{title:p(u)("meshes.routes.item.title",{name:t.params.mesh})},null,8,["title"])]),_:2},1032,["text"])])]),default:m(()=>[_(),s(T,{class:"route-mesh-view-tabs",tabs:p(d)},null,8,["tabs"]),_(),s(r)]),_:2},1024)]),_:1})}}});export{D as default};
