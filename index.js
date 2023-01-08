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