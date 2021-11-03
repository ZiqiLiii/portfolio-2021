const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // add menu icon
        toggle.innerHTML = `<i class="fas fa-bars">`;
    }
    else {
        menu.classList.add("active");

        // add x (close menu) icon
        toggle.innerHTML = `<i class="fas fa-times"></i>`;
    }
}

toggle.addEventListener("click", toggleMenu, false);


// let oMenu = my$('.nav-item');
// let oUL = getFirstElementChild(oMenu);
// // get class
// function my$(classList) {

//     return document.querySelector(classList);
// }
// // get first item
// function getFirstElementChild(element) {

//     let node;
//     let nodes = element.childNodes;
//     let i=0;
//     //遍历返回元素节点，当元素节点为空时返回null
//     while (node = nodes[i++]){

//         if (node.nodeType === 1){

//             return node;
//         }
//     }
//     return null;
// }
// // 添加注册事件
// for (let i=0;i<oUL.children.length;i++){

//     let oLi = oUL.children[i];
//     oLi.onclick = LiClick;
// }
// function LiClick() {

//     for (let i=0;i<oUL.children.length;i++){

//         let oLi = oUL.children[i];
//         oLi.className = '';
//     }
//     this.className = 'current';
//     return false;
// }