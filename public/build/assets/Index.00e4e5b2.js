import{o as a,c as n,a as c,u as s,b as t,F as _,m as u,d as r,t as l,w as o,l as i}from"./app.bbb26f92.js";import{d as m}from"./helpers.35d68338.js";const b=t("div",{class:"mb-12 mt-3"},[t("h2",{class:"text-2xl font-bold mb-3"},"B\xE0i vi\u1EBFt n\u1ED5i b\u1EADt"),t("p",null,"T\u1ED5ng h\u1EE3p c\xE1c b\xE0i vi\u1EBFt chia s\u1EBB v\u1EC1 kinh nghi\u1EC7m t\u1EF1 h\u1ECDc l\u1EADp tr\xECnh online v\xE0 c\xE1c k\u1EF9 thu\u1EADt l\u1EADp tr\xECnh web.")],-1),f={class:"border-2 border-gray-200 rounded-lg p-8 mb-5 w-10/12"},g={class:"flex items-center mb-2"},v={class:"flex items-center"},x=["src","alt"],p={class:"ml-2"},w={class:"flex items-center justify-between h-40"},k={class:"pr-8"},y={class:"text-2xl font-bold"},B={class:"mt-3 text-base"},j=["src","alt"],F={class:"flex text-gray-400 text-sm"},L=t("span",{class:"mx-3"},"\u2022",-1),E={__name:"Index",props:{posts:Object},setup(d){return(N,V)=>(a(),n("div",null,[c(s(r.Head),{title:"Blog"}),t("div",null,[b,(a(!0),n(_,null,u(d.posts.data,(e,h)=>(a(),n("div",{key:h},[t("div",f,[t("div",g,[t("div",v,[t("img",{class:"h-8 w-8 rounded-full",src:e.author.avatar_url,alt:e.author.name},null,8,x),t("span",p,l(e.author.name),1)])]),t("div",w,[t("div",k,[c(s(r.Link),{href:s(i)("blog.show",{slug:e.slug})},{default:o(()=>[t("h2",y,l(e.title),1)]),_:2},1032,["href"]),t("p",B,l(e.excerpt),1)]),t("div",null,[c(s(r.Link),{href:s(i)("blog.show",{slug:e.slug})},{default:o(()=>[t("img",{class:"rounded-lg w-80 h-35 object-cover",src:e.thumbnail_url,alt:e.title},null,8,j)]),_:2},1032,["href"])])]),t("div",F,[t("span",null,l(s(m)(e.created_at)),1),L,t("span",null,l(e.read_duration)+" ph\xFAt \u0111\u1ECDc",1)])])]))),128))])]))}};export{E as default};