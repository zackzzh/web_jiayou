// 设置层级关系
function dotSum() {

    var routerPath = window.location.pathname.match(/\//g)
    var dots = ""
    var pathLength = routerPath.length; //线上
    // var pathLength = routerPath.length - 1;  //本地测试
    if (pathLength === 1) {
        dots = dots + "./"
    } else {
        while (pathLength > 1) {
            pathLength--;
            dots = dots + "../"
        }
    }

    return dots
}
var dotsSum = dotSum()


// 加载浏览器图标
document.write('<link href="' + dotsSum + 'img/logo.png" rel="shortcut icon" type="image/x-icon">')
// 加载bootstrap
document.write('<link href="' + dotsSum + 'bootstrap3/css/bootstrap.min.css" rel="stylesheet">')
// 加载页头样式
document.write('<link href="' + dotsSum + 'css/head/jy_head.css" rel="stylesheet">')
// 加载页脚样式
document.write('<link href="' + dotsSum + 'css/footer/jy_footer.css" rel="stylesheet">')
// 加载需求表单样式
document.write('<link href="' + dotsSum + 'css/need_form/need_form.css" rel="stylesheet">')
// 加载公共样式
document.write('<link href="' + dotsSum + 'css/common/common.css" rel="stylesheet">')
// 加载联系我们样式
document.write('<link href="' + dotsSum + 'css/contact_us/contact_us.css" rel="stylesheet">')

// 截取后半段URL
var pathRegex01 = /\w+.html$/
// 获取当前页面
var pathRegex02 = /^\w+/

var pathName01 = window.location.pathname.match(pathRegex01)
var pathName = ""
if (pathName01) {
    pathName = pathName01[0].match(pathRegex02)[0]
}


// console.log("当前页面:", pathName);
