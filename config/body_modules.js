// 加载JQ，低版本，兼容ie8https://code.jquery.com/jquery-1.12.4.min.js
document.write('<script src="' + dotsSum + 'jquery/jquery-1.12.4.min.js"></script>')

document.write('<script src="' + dotsSum + 'bootstrap3/js/bootstrap.min.js"></script>')
// 加载页头 和 页脚
document.write('<script src="' + dotsSum + 'config/load_head_footer.js"></script>')
// 页面跳转
document.write('<script src="' + dotsSum + 'config/router.js"></script>')
// 左右，海报
document.write('<script src="' + dotsSum + 'js/poster.js"></script>')

// 全局配置背景色
document.getElementsByTagName("body")[0].style.background = "#F6F9F8";


function shangQiao() {
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?55e3045ecc2368c8841840cf18cbe5f4";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
}
// setTimeout(() => {
    shangQiao();
// }, 4000);

