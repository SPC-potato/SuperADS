//主页样式
import '../css/styl/index.styl'

//通用获取dom对象封装
function getId(id){
    if(document.getElementById(id)){
        return document.getElementById(id)
    }
    return console.error('this ID is undefind')
}



//获取屏幕的高
function getHeighr() {
    return window.innerHeight
}
//设置屏幕的高，传入JQ对象（$()）
function setHeight(JQobj){
    JQobj.css('height',getHeighr())
}


//监听内容是否到达可视区域
var isFirst = true;
window.onscroll = function(){
    if(isView(getId('our-stats'))&& isFirst){
        magicNum(0, 2001, getId('magic-num1'));
        magicNum(0, 288, getId('magic-num2'));
        magicNum(0, 3020, getId('magic-num3'));
        isFirst = false;
    }

};


function isView(obj){
        //获取div距离顶部的偏移量
        var top = obj.offsetTop;
        //获取屏幕高度
        var windowTop = window.innerHeight;
        //屏幕卷去的高度
        var scrollTops = document.documentElement.scrollTop;
        if((windowTop+scrollTops)>top + 500)
        {
            console.clear();
            console.log("已经进入可视区");
            return true;
        }else
        {
            console.clear();
            console.log("并没有进入可视区");
            return false;
        }
}


/*
window.onscroll = function(){
    (function windowView() {
        console.clear();
        console.log('网页可见区域宽：document.body.clientWidth ' + document.body.clientWidth)
        console.log('网页可见区域宽：document.body.offsetWidth (包括边线的宽)' + document.body.offsetWidth)
        console.log('网页可见区域高：document.body.offsetHeight (包括边线的宽) ' + document.body.offsetHeight)
        console.log('网页正文全文宽：document.body.scrollWidth ' + document.body.scrollWidth)
        console.log('网页正文全文高：document.body.scrollHeight ' + document.body.scrollHeight)
        console.log('网页被卷去的高：document.body.scrollTop ' + document.body.scrollTop)
        console.log('网页被卷去的左：document.body.scrollLeft：document.body.clientWidth ' + document.body.scrollLeft)
        console.log('网页被卷去的高：document.documentElement.scrollTop ' + document.documentElement.scrollTop)
        console.log('网页被卷去的左：document.body.scrollLeft：document.body.clientWidth ' + document.documentElement.scrollLeft)
        console.log('网页正文部分上：window.screenTop ' + window.screenTop)
        console.log('网页正文部分左：window.screenLeft ' + window.screenLeft)
        console.log('屏幕分辨率的高：window.screen.height ' + window.screen.height)
        console.log('屏幕分辨率的宽：window.screen.width ' + window.screen.width)
        console.log('屏幕可用工作区高度：window.screen.availHeight ' + window.screen.availHeight)
        console.log('屏幕可用工作区宽度：window.screen.availWidth ' + window.screen.availWidth)

    })();
}
*/



/*
magicNum(0, 2001, getId('magic-num1'));
magicNum(0, 288, getId('magic-num2'));
magicNum(0, 3020, getId('magic-num3'));
*/

function magicNum (startNum, endNum, obj){
    //获得一个数字，实现从开始到这个数字变化的过程 （魔法数字）
    var autoPlay = setInterval(function(){
        var currentNum = add();
        if(currentNum >= endNum){
            clearInterval(autoPlay);
        }
        obj.innerHTML= currentNum;
    },1);
    function add(){
        return startNum += 1;
    }
}


///插件JS

$('#roll-stats').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000
});

$('.btn-sign-up').on('click', function () {
    layer.open({
        type: 1,
        area: ['600px', '500px'],
        shadeClose: true, //点击遮罩关闭
        title:'Sign Up',
        content: $('.sign-layer')
    });
})
$('.btn-login').on('click', function () {
    layer.open({
        type: 1,
        area: ['600px', '360px'],
        shadeClose: true, //点击遮罩关闭
        title:'Login',
        content: $('.login-layer')
    });
})

