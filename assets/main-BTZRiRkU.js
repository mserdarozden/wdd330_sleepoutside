import{r}from"./utils-gz_w4pGt.js";import{P as i}from"./ProductData-BlKoN2GH.js";function n(t){return`<li class="product-card">
    <a href="product_pages/index.html?product=${t.Id}">
      <img src="${t.Image}" alt="Image of ${t.NameWithoutBrand}">
      <h3 class="card__brand">${t.Brand.Name}</h3>
      <h2 class="card__name">${t.NameWithoutBrand}</h2>
      <p class="product-card__price">$${t.FinalPrice.toFixed(2)}</p>
    </a>
  </li>`}class c{constructor(a,e,s){this.category=a,this.dataSource=e,this.listElement=s}async init(){const a=await this.dataSource.getData();this.renderList(a)}renderList(a){r(n,this.listElement,a)}}const d=new i("tents"),o=document.getElementById("product-list"),l=new c("tents",d,o);l.init();
