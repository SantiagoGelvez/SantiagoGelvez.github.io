import{_ as h,r as u,o as s,c as i,a as e,t as a,F as l,b as c,d as g}from"./index-14eb6101.js";const _={class:"mb-10"},f={class:"mb-10 mx-16 grid grid-cols-4 gap-16"},b=["src","alt","onClick"],v={class:"flex flex-col justify-between h-full"},y={class:"mx-5 my-4"},P=["href"],k={class:"mt-2"},z={class:"flex justify-evenly my-4"},x=["onClick"],w=["onClick"],C={__name:"PortfolioView",setup(S){const d=u([{link:"https://exchange.santiagogelvez.com",img:"exchangeplatzi",technologies:["Vue.js 2","Tailwind","Rest API"],title:"Exchange Platzi",description_en:'Application to follow the behavior of the prices of the main cryptocurrencies in the market. It allows to evaluate the value of each coin in dollars and vice versa, as well as to review the history of the last 24 hours. It connects to the CoinCap API to offer updated data in real time. Project done in the "VueJS 2" course of Platzi.',description_es:'Aplicación para seguir el comportamiento de los precios de las principales criptodivisas del mercado. Permite evaluar el valor de cada moneda en dólares y viceversa, así como revisar el histórico de las últimas 24 horas. Se conecta a la API CoinCap para ofrecer datos actualizados en tiempo real. Proyecto realizado en el curso "VueJS 2" de Platzi.',github:"https://github.com/SantiagoGelvez/Platzi_Vuejs2/tree/main/platzi-exchange"},{link:"https://platzicommerce.santiagogelvez.com",img:"platzicommerce",technologies:["Wordpress"],title:"PlatziCommerce",description_en:'E-commerce of basic merchandising (clothes, shoes, stickers), with shopping cart and payment platform, created from WooCommerce.. Project done in the "Wordpress" course of Platzi.',description_es:'E-commerce de merchandising básico (ropa, zapatos, pegatinas), con carrito de la compra y plataforma de pago, creado a partir de WooCommerce.. Proyecto realizado en el curso "Wordpress" de Platzi.'},{link:"https://projects.santiagogelvez.com/pages/PhotosProject/",img:"photonextu",technologies:["HTML","CSS"],title:"Album NextU",description_en:'Site created to work with images and the different effects that can be applied to them. Project done in the "Web Development" course of NextU.',description_es:'Sitio creado para trabajar con imágenes y los diferentes efectos que se les pueden aplicar. Proyecto realizado en el curso "Desarrollo Web" de NextU.',github:"https://github.com/SantiagoGelvez/SantiagoGelvez.github.io/tree/main/pages/PhotosProject"}]);function r(t){window.open(t,"_blank")}return(t,V)=>(s(),i(l,null,[e("section",_,[e("header",null,[e("h1",null,a(t.$t("portfolio")),1),e("p",null,a(t.$t("portfolioDescription")),1)])]),e("section",f,[(s(!0),i(l,null,c(d.value,(o,p)=>(s(),i("article",{key:p,class:"rounded-xl bg-cyan-200/[.05] flex flex-col justify-between"},[e("img",{src:`/src/assets/img/portfolio/${o.img}.png`,alt:o.img,onClick:n=>r(o.link),class:"rounded-t-xl cursor-pointer"},null,8,b),e("section",v,[e("div",y,[(s(!0),i(l,null,c(o.technologies,(n,m)=>(s(),i("span",{key:m,class:"mr-3 px-2 py-1 rounded-full border"},a(n),1))),128)),e("a",{href:o.link,target:"_blank",class:"text-3xl my-5 block"},a(o.title),9,P),e("p",k,a(t.$i18n.locale==="en"?o.description_en:o.description_es),1)]),e("div",z,[o.github?(s(),i("button",{key:0,onClick:n=>r(o.github),class:"border rounded px-9 py-2 button-secondary"},a(t.$t("seeGithub")),9,x)):g("",!0),e("button",{onClick:n=>r(o.link),class:"border rounded px-6 py-2 button-primary"},a(t.$t("openProject")),9,w)])])]))),128))])],64))}},W=h(C,[["__scopeId","data-v-69896337"]]);export{W as default};