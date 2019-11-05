
function posterLeftIn() {
    // console.log("进入posterLeftFun");
    $("#poster_right").css("width", "0");
    $("#anniu").css("left", "100%");
    // document.getElementById("poster_right").style.width = "0";
}
function posterLeftOut() {
    posterRightOut()
}
function posterRightIn() {
    // console.log("进入posterRightFun");
    $("#poster_right").css("width", "100%");
    $("#anniu").css("left", "0");
}
function posterRightOut() {
    $("#poster_right").css("width", "50%");
    $("#anniu").css("left", "50%");
}


// IE Chrome Opera Safari浏览器的注册事件：

// window.onmousewheel = document.onmousewheel = scrollFunc;      //scrollFunc为定义的事件名
// 1
// Firefox浏览器的注册事件：

// if (document.addEventListener) { 
//     document.addEventListener('DOMMouseScroll', scrollFunc, false);  //scrollFunc为定义的事件名
// }
// 1
// 2
// 3
// 不同浏览器滚动事件的属性也有差异： 
// IE Chrome Opera Safari浏览器的属性：wheelDelta 
// wheelDelta取值为±120,+120表示滚轮向上,-120表示滚轮向下 
// Firefox浏览器滚动事件的属性：detail 
// wheelDelta取值为±3,+3表示滚轮向上,-3表示滚轮向下

// 实际应用：

// var scrollFunc = function (e) {  
//     e = e || window.event;  
//     if (e.wheelDelta) {             //IE Chrome Opera Safari       
//         if (e.wheelDelta > 0) { 
//             //业务操作...
//             e.stopPropagation();    //终止事件的进一步传播
//         }  
//         if (e.wheelDelta < 0) { 
//             //业务操作...
//             e.stopPropagation();
//         }  
//     } 
//     else if (e.detail) {            //Firefox
//         if (e.detail < 0) { 
//             //业务操作...
//             e.stopPropagation();    //终止事件的进一步传播
//         }  
//         if (e.detail > 0) { 
//             //业务操作...
//             e.stopPropagation();
//         }  
//     }
//   } 
//   //注册事件
//   if (document.addEventListener) {    //Firefox
//     document.addEventListener('DOMMouseScroll', scrollFunc, false);  
//   }  
//   //IE Chrome Opera Safari
//   window.onmousewheel = document.onmousewheel = scrollFunc;   
