//Search Focus and Focus Out
document.querySelector(".sd-2").addEventListener("focusin",searchFocusIn);
function searchFocusIn(){
    console.log("focusin");
    document.querySelector(".sd-1").classList.add("sd-1-onfocus");
    document.querySelector(".sd-2").classList.add("sd-2-onfocus");
}
document.querySelector(".sd-2").addEventListener("focusout",searchFocusOut);
function searchFocusOut(){
    console.log("focusout");
    document.querySelector(".sd-1").classList.remove("sd-1-onfocus");
    document.querySelector(".sd-2").classList.remove("sd-2-onfocus");
}
// ScrollBar implementation on aside hover
document.querySelector(".aside-main").addEventListener("mouseover",showScrollBar);
function showScrollBar(){
    document.querySelector(".aside-main").classList.add("aside-scrbar");
}
document.querySelector(".aside-main").addEventListener("mouseout",hideScrollBar);
function hideScrollBar(){
    document.querySelector(".aside-main").classList.remove("aside-scrbar");
}