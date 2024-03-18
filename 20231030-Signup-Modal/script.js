// 監聽事件抓取id
const navbar=document.getElementById('navbar');
const modal=document.getElementById('modal');
const open=document.getElementById('open');
const close=document.getElementById('close');
const toggle=document.getElementById('toggle');

// toggle為按鈕標籤(navbar)
toggle.addEventListener('click',()=>{
    document.body.classList.toggle("show-nav");
});

// modal open
open.addEventListener('click',()=>{
    // modal被我們用在對話框容器上，包覆整個表單
    modal.classList.add("show-modal");
});

// close modal
close.addEventListener('click',()=>{
    // modal被我們用在對話框容器上，包覆整個表單
    modal.classList.remove("show-modal");
 });

// outside click and modal should be close
// e=event(事件)
// 判斷e.target被點擊的元素是否為modal?如果是就從對話框移除show-modal類別，使其隱藏
// 此code用來實現點外部任一個空間來自動關閉表單(modal)
window.addEventListener("click",(e)=>{
    e.target==modal?modal.classList.remove('show-modal'):false;
})

