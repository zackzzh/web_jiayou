
// (function loadHeadFooter() {
//     $("#jy-head").load(dotsSum + 'components/jy-head/jy-head.html')
//     $("#jy-footer").load(dotsSum + 'components/jy-footer/jy-footer.html')
//     $("#jy-up").load(dotsSum + 'components/jy-up/jy-up.html')
//     // $("#common-modal").load(dotsSum + 'components/common-modal/common-modal.html')
// })()

// 加载头和脚
function loadHeadFooter() {
    // 页头
    $("#jy_head").load(dotsSum + 'components/jy_head/jy_head.html');
    // 页脚
    $("#jy_footer").load(dotsSum + 'components/jy_footer/jy_footer.html');
    // 联系我们
    $("#contact_us").load(dotsSum + 'components/contact_us/contact_us.html');
    // 需求表单
    $("#need_form").load(dotsSum + 'components/need_form/need_form.html');
    // $("#jy-up").load(dotsSum + 'components/jy-up/jy-up.html')
    // $("#common-modal").load(dotsSum + 'components/common-modal/common-modal.html')
}
loadHeadFooter()
