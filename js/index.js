

function showSearch(){
    document.getElementById("searchPanel").style.visibility="visible";
}
function closeSearch(){
    document.getElementById("searchPanel").style.visibility="hidden";
}
function closeWindow(){
    document.getElementById('overlay').classList.remove("open");
}
function productQuickView(){
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
function decreaseQty(){
    var qty=document.getElementById("qty").value;
    if(qty>1)
        qty--;
    document.getElementById("qty").value=qty;
    
}
function increasQty(){
    var qty=document.getElementById("qty").value;
    qty++;
    document.getElementById("qty").value=qty;
}
function collapseForm(){
    document.getElementById("arrowBtn").classList.toggle("arrowBtnUp");
    var doc=document.getElementById("ask-us-inner");
    doc.classList.toggle("form-open");
    document.getElementById("window").scrollTo({ left: 0, top: document.getElementById("window").scrollHeight, behavior: "smooth" });

}
