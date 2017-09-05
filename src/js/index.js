/**
 * Created by 舍予 on 2017/9/3.
 */
import  'bootstrap/dist/css/bootstrap.css'
import '../css/styl/index.styl'


/*$(document).ready(function() {
    $('#fullpage').fullpage();
});*/

//获取屏幕的高
function getHeighr() {
    return window.innerHeight
}
//设置屏幕的高，传入JQ对象（$()）
function setHeight(JQobj){
    JQobj.css('height',getHeighr())
}


