//Content

document.addEventListener("DOMContentLoaded", function () {
  var filterOpen = document.getElementById("filterOpen");
  var filterEnd = document.getElementById("filterEnd");
  var catalogPageFilter = document.getElementById("catalogPageFilter");

  var kitchens = document.getElementById("kitchens");
  var cabinetFurniture = document.getElementById("cabinetFurniture");
  var dressingWardrobes = document.getElementById("dressingWardrobes");
  var like = [],
    productFirstScreen = [];
  var index,
    categoryNum = 0;
  var productCategory = [kitchens, cabinetFurniture, dressingWardrobes];

  var firstScreenProduct = [
    [
      kitchens,
      ["Кухня 14.", "ELITE LINE", `img/Catalog/foto0.png`, 15],
      ["Кухня 2. ", "BASIC LINE", `img/Catalog/foto1.png`, 18],
      ["Кухня 15. ", "BASIC / SMART LINE", `img/Catalog/foto2.png`, 23],
      ["Кухня 1. ", "BASIC LINE", `img/Catalog/foto3.png`, 5],
    ],
    [
      cabinetFurniture,
      ["Корпусная мебель 14.", "ELITE LINE", `img/Catalog/foto0.png`, 239],
      ["Корпусная мебель 2. ", "BASIC LINE", `img/Catalog/foto1.png`, 211],
      ["Корпусная мебель 15. ", "BASIC / SMART LINE", `img/Catalog/foto2.png`, 11],
      ["Корпусная мебель 1. ", "BASIC LINE", `img/Catalog/foto3.png`, 18],
    ],
    [
      dressingWardrobes,
      ["ГАРДЕРОБНЫЙ ШКАФ 14.", "ELITE LINE", `img/Catalog/foto0.png`, 55],
      ["ГАРДЕРОБНЫЙ ШКАФ 2. ", "BASIC LINE", `img/Catalog/foto1.png`, 16],
      ["ГАРДЕРОБНЫЙ ШКАФ 15. ", "BASIC / SMART LINE", `img/Catalog/foto2.png`, 58],
      ["ГАРДЕРОБНЫЙ ШКАФ 1. ", "BASIC LINE", `img/Catalog/foto3.png`, 7],
    ],
  ];

  function CatalogFirstScrinActive(num) {
    PositionActive(productCategory, "position_active", num);

    if (catalogPageFilter) {
      if (num == 0) {
        catalogPageFilter.style.display = "block";
      } else {
        catalogPageFilter.style.display = "none";
      }
    }

    productFirstScreen = [];
    catalogProduct.innerHTML = "";
    for (let i = 1; i < firstScreenProduct[num].length; i++) {
      NewElement(
        `<div class="product cursor" id="product${i}"><div class="product_foto"><img src="${firstScreenProduct[num][i][2]}" alt="" class=""></div><div class="product_info"><div class ="product_info__text"><p class="product_title text16px">${firstScreenProduct[num][i][0]}</p><p class="product_title">${firstScreenProduct[num][i][1]}</p></div><div class="like"><span>${firstScreenProduct[num][i][3]}</span><div class="like_img"><img src="img/Catalog/like.svg" alt="" id="like${i}"><img src="img/Catalog/likeActive.svg" style="display:none" alt="" id="likeActive${i}"><img src="img/Catalog/likeHover.svg" id="likeHover${i}" alt="" class="likeHover""></div></div></div></div>`,
        catalogProduct,
        `product${i}`,
        productFirstScreen
      );

      let Element = document.getElementById(`likeHover${i}`);
      like.push(Element);
    }
  }

  function CatalogFirstScrinActiveClick(e) {
    for (let i = 0; i < productCategory.length; i++) {
      if (e.target == productCategory[i]) {
        CatalogFirstScrinActive(i);
        categoryNum = i;
      }
    }

    ArrayClick(like, Like);
  }

  function Like(e) {
    for (let i = 0; i < productFirstScreen.length; i++) {
      if (e.target.parentElement.parentElement.parentElement.parentElement == productFirstScreen[i]) {
        index = i + 1;
      }
    }
    if (getComputedStyle(e.target.parentElement.children[1]).display == "none") {
      e.target.parentElement.children[1].style.display = "block";
      e.target.parentElement.children[0].style.display = "none";
      firstScreenProduct[categoryNum][index][3]++;
      e.target.parentElement.parentElement.children[0].innerHTML = `${firstScreenProduct[categoryNum][index][3]}`;
    } else {
      e.target.parentElement.children[1].style.display = "none";
      e.target.parentElement.children[0].style.display = "block";
      firstScreenProduct[categoryNum][index][3]--;
      e.target.parentElement.parentElement.children[0].innerHTML = `${firstScreenProduct[categoryNum][index][3]}`;
    }
  }

  CatalogFirstScrinActive(0);
  ArrayClick(productCategory, CatalogFirstScrinActiveClick);
  ArrayClick(like, Like);

  CatalogFirstScrinActive(0);
  ArrayClick(productCategory, CatalogFirstScrinActiveClick);
  ArrayClick(like, Like);

  if (filterOpen)
    filterOpen.addEventListener("click", () => {
      filterOpen.style.display = "none";
      filterEnd.style.display = "block";
      catalogPageConfiguration.style.display = "block";
      catalogPageStyle.style.display = "block";
    });
  if (filterEnd)
    filterEnd.addEventListener("click", () => {
      filterOpen.style.display = "block";
      None([filterEnd, catalogPageConfiguration, catalogPageStyle]);
    });
});