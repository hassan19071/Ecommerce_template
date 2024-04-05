// loading

window.onload = function(){
    document.querySelector(".main-overlay").style.display = "none";
}

// open and close menu
let menuBtn = document.querySelector("header .menu");
let mobileLinks = document.querySelector("header .mobile-links");

menuBtn.addEventListener("click",function(){
    mobileLinks.classList.toggle("active");
})

// open search;============================================================================
let searchIcon = document.querySelector("header .icons-links .search");
let searchContainer = document.querySelector("header .search-container");
let xBtnForSearch = document.querySelector("header .search-container .x");

searchIcon.addEventListener("click",function(e){
    e.preventDefault();
    searchContainer.classList.toggle("active");
});
xBtnForSearch.addEventListener("click",function(){
    searchContainer.classList.remove("active");
});

// owl carousel trending===================================================================
$('.owl-carousel-one').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

// types=====================================================================================
let categoriesTypes = document.querySelectorAll(".trending .types li");
let trendingProducts = document.querySelectorAll(".trending .item");

categoriesTypes.forEach((el)=>{
    el.addEventListener("click",function(){
        categoriesTypes.forEach((e)=>{
            e.classList.remove("active");
        })
        el.classList.add("active");
    })
})

// testimonial===============================================================================
$('.owl-carousel-two').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// select box--------------------------------------------------------------------------------------------------
let x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        let y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  let x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// range input--------------------------------------------------------------------------------------------------

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 100;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

// increase & decrease quantity;
let quantityNum = document.querySelectorAll(".cart .quantity input");
let increaseBtn = document.querySelectorAll(".cart .quantity button:first-of-type");
let decreaseBtn = document.querySelectorAll(".cart .quantity button:last-of-type");

for(let i =0;i<quantityNum.length;i++){
    increaseBtn[i].addEventListener("click",function(){
       if (quantityNum[i].value < 30){
         quantityNum[i].value++;
       }
    });
    decreaseBtn[i].addEventListener("click",function(){
       if (quantityNum[i].value > 1){
        quantityNum[i].value--;
       }
    })
}

// product details
let productDetailsTypes = document.querySelectorAll(".product-details .pro-description .info ul li");
let productDetailsText = document.querySelectorAll(".product-details .pro-description .text");

for (let i =0;i<productDetailsText.length;i++){
    productDetailsTypes[i].addEventListener("click",function(){
        productDetailsTypes.forEach((e)=>{
            e.classList.remove("active");
        })
        this.classList.add("active");
        productDetailsText.forEach((e)=>{
            e.classList.remove("active");
        });
        productDetailsText[i].classList.add("active");
    })
}