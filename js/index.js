if(window.screen.width<770){
    var menu = document.getElementById("side-nav");
    menu.classList.add("hideNav");
    menu.classList.add("sideNav");
    var listItems = document.getElementsByClassName("hasNav");
    // console.log(listItems.length())
    for(var i=0;i<listItems.length;i++){
        listItems[i].setAttribute("id","li-"+i);
        var span = document.createElement("span");
        span.innerHTML='<div class="up-down-btn"><img class="arrowBtn" src="icons/arrow.svg" alt=""></div>';
        span.setAttribute("onclick","toggleSubNav("+i+")");
        listItems[i].appendChild(span);
        var subNav=listItems[i].getElementsByClassName("subNavigation");
        subNav[0].classList.add("mobile-sub-menu");
        subNav[0].classList.remove("subNavigation");
    }
}

function showSearch(){
    document.getElementById("searchPanel").style.visibility="visible";
}
function closeSearch(){
    document.getElementById("searchPanel").style.visibility="hidden";
}
function closeWindow(){
    document.getElementById('overlay').classList.add("close-overlay");
    document.getElementById('overlay').classList.remove("open");
}
function productQuickView(){
    document.getElementById('overlay').classList.remove("close-overlay");
    document.getElementById('overlay').classList.add("open");
}
function changeImage(id){
    var active=document.getElementsByClassName("active-image");
    active[0].classList.remove("active-image");
    var element=document.getElementById(id);
    element.classList.add("active-image");
    var src = element.getAttribute('src');
    document.getElementById("main-image").setAttribute('src',src);
}
function decreaseQty(id){
    var qty=document.getElementById(id).value;
    if(qty>1)
        qty--;
    document.getElementById(id).value=qty;
    
}
function increasQty(id){
    var qty=document.getElementById(id).value;
    qty++;
    document.getElementById(id).value=qty;
}
function collapseForm(){
    document.getElementById("arrowBtn").classList.toggle("arrowBtnUp");
    var doc=document.getElementById("ask-us-inner");
    doc.classList.toggle("form-open");
    document.getElementById("window").scrollTo({ left: 0, top: document.getElementById("window").scrollHeight, behavior: "smooth" });

}

function hideCart(){
    document.getElementById("cart").classList.remove("cart-view");
}

function showCart(){
    document.getElementById("cart").classList.add("cart-view");
}

function hideNav(){
    document.getElementById("side-nav").classList.add("hideNav");
}

function showNav(){
    document.getElementById("side-nav").classList.remove("hideNav");
}

function toggleSubNav(id){
    var item = document.getElementById("li-"+id);
    var subNav=item.getElementsByClassName("mobile-sub-menu");

    subNav[0].classList.toggle("mobile-sub-nav");
}