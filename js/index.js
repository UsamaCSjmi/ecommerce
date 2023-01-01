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