//生成随机数
function rand(n, m) {
    return n + parseInt(Math.random() * (m - n + 1));
}
//获取ID

function $id(a) {
    return document.getElementById(a)

}
//生成顔色6位
function color() {
    var result = "#";
    for (var i = 0; i < 6; i++) {
        result += rand(0, 15).toString(16)
    }
    return result;
}
//计算返回一个6位验证码
function yan() {
    var a = ""
    for (var i = 0; i <= 5; i++) {
        var b = rand(48, 122)
        if ((b > 57 && b < 65) || b > 90 && b < 97) {
            i--
        } else {
            a += String.fromCharCode(b)
        }
    }
    return a
}
//计算两个时间差
function fn(t1, t2) {
    var d1 = new Date(t1);
    var d2 = new Date(t2);
    d1 = d1.getTime();
    d2 = d2.getTime();
    var cha = d2 - d1;

    var day = Math.floor(cha / (1000 * 60 * 60 * 24));
    cha = cha - day * (1000 * 60 * 60 * 24);

    var hou = Math.floor(cha / (1000 * 60 * 60));
    cha = cha - hou * (1000 * 60 * 60);

    var min = Math.floor(cha / (1000 * 60));
    cha = cha - min * (1000 * 60);

    var sec = Math.floor(cha / 1000);
    return "相差" + day + "天" + hou + "小时" + min + "分" + sec + "秒"
}
//时间变格式
function getFormatDate(dates) {
    if (dates) {
        date.setTime(dates)
    }
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentDate = date.getFullYear() + "-" + month + "-" + strDate +
        " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return currentDate;
}
//时间转大写
function toChinese(num) {
    var charArr = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]
    var weiArr = ["", "拾", "佰", "仟", "万"];
    var result = "";
    arr = num.toString().split("").reverse();
    for (var i = 0; i < arr.length; i++) {
        result = charArr[arr[i]] + weiArr[i] + result;
    }
    return result;
}
//传入一个数组和一个元素,判断数组中是否存在该元素,存在返回true,不存在返回false
function has(arr, data) {
    for (var i = 0; i < arr.length; i++) {
        if (data === arr[i]) {
            return true;
        }
    }
    return false;
}
//传入一个数组,返回数组去重以后的结果,不改变原数组
function norepeat(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!has(result, arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}
//获取滚动的距离{top:"",left:""}
function roll() {
    if (window.pageYOffset) {
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    } else if (document.documentElement.scrollLeft) {
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    } else {
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        }
    }
}
//获取指定dom的指定样式值
function getStyle(dom, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[attr];
    } else {
        return dom.currentStyle[attr]
    }

}

//前后空格去除
function trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, "")
}

//字符串验证
function a() {
   var  str = $("article_content").innerHTML;
  var  res = prompt("请输入要查找的内容");
  var  reg = new RegExp(res, "g");
    $("article_content").innerHTML = str.replace(reg, "<span>" + res + "</span>");
}

function b() {
  var  replaceCon = prompt("请输入要替换的内容");
    $("article_content").innerHTML = str.replace(reg, replaceCon);
}

//封装一个函数,可以让指定目标(dom)运动到指定位置(target),是匀速运动,每20毫秒运动30px;
function move(dom, target) {
    clearInterval(dom.timer)
    dom.timer = setInterval(function() {
        //1 获取元素原来的位置
        var current = dom.offsetLeft;
        //2 确定运动速度
        var speed = target > current ? 5 : -5;
        //3 计算元素的当前位置
        current = current + speed;
        //4 判断是否到达目标:
        if (Math.abs(current - target) <= 5) {
            current = target;
            clearInterval(dom.timer)
        }
        //5 定义目标元素
        dom.style.left = current + "px";
    }, 20)
}

//封装一个函数,实现透明度匀速运动:target必须是0-100之间的整数
function move2(dom, target) {
    clearInterval(dom.timer)
        //每隔一段时间(20毫秒),透明度变化3
    dom.timer = setInterval(function() {
        //1 获取元素原来位置
        var current = parseInt(getStyle(dom, "opacity") * 100);
        //2 计算速度
        var speed = target > current ? 3 : -3;
        //3 计算元素现在位置 
        current = current + speed
            //4 判断是否到达目标
        if (Math.abs(current - target) <= 3) {
            current = target;
            clearInterval(dom.timer)
        }
        //5 定位元素
        dom.style.filter = "alpha(opacity=" + current + ")";
        dom.style.opacity = current / 100;
    }, 20)
}

//缓动函数封装:单属性缓动
function animate1(dom, attr, target, fn) {
    //每隔一段时间(20毫秒),让dom元素的attr属性运动一段距离(剩余路程的10分之1)
    clearInterval(dom.timer);
    dom.timer = setInterval(function() {
        //1 获取元素原来的位置
        var current = parseInt(getStyle(dom, attr));
        //2 计算速度
        var speed = (target - current) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        //3 计算元素的的当前位置
        current = current + speed;
        //4 判断到达目标位置
        if (current == target) {
            clearInterval(dom.timer)
            if (fn) {
                fn()
            };
        }
        //5 定位元素
        dom.style[attr] = current + "px";
    }, 20)

}

function animate(dom, target, fn) {
    clearInterval(dom.timer)
    dom.timer = setInterval(function() {
        var flag = true
            //每间隔20毫秒,width和left就缓动一段距离,直到他们都到达目标位置
        for (var attr in target) {
            //1 获取元素原来位置
            if (attr == "opacity") {
                var current = parseInt(getStyle(dom, "opacity") * 100)
            } else {
                var current = parseInt(getStyle(dom, attr))
            }
            //2 计算速度
            var speed = (target[attr] - current) / 10
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
                //3 计算元素当前位置					
            if (attr == "zIndex") {
                current = target.zIndex;
            } else {
                current = current + speed
            }
            //4 判断是否到达目标
            if (current != target[attr]) {
                flag = false;
            }
            //5 定位元素
            if (attr == "zIndex") {
                dom.style.zIndex = current;
            } else if (attr == "opacity") {
                dom.style.opacity = current / 100;
                dom.style.filter = "alpha(opacity=" + current + ")";
            } else {
                dom.style[attr] = current + "px";
            }

        }
        if (flag) {
            clearInterval(dom.timer)
            if (fn) {
                fn()
            }
        }

    }, 20)

}

function sc(key, value, expires) {
    // 接收三个参数
    // key:你要设置的cookie的属性名
    // value:你要设置的cookie的属性值
    // expires:你要设置的cookie的过期时间,单位是秒,这个参数可以不传递,不传递默认使用session

    if (expires) {
        var time = new Date();
        time.setTime(time.getTime() - 8 * 60 * 60 * 1000 + 1000 * expires);
        document.cookie = key + "=" + value + ";expires=" + time;
    } else {
        document.cookie = key + "=" + value;
    }

}


function gc(key) {

    var str = "";

    var tmp = document.cookie.split('; ');
    for (var i = 0; i < tmp.length; i++) {
        var t = tmp[i].split('=');
        if (t[0] === key) {
            str = t[1];
        }
    }

    return str;

}

function gs(url, cb) {
    var xhr = new XMLHttpRequest()
        // 2 配置请求信息
    xhr.open('GET', url);
    // 3 接收响应
    xhr.onload = function() {
            // 调用函数cb的时候传入实参xhr.responseText,所以函数cb需要有一个形参接收
            cb(xhr.responseText);
        }
        // 4 发送请求
    xhr.send()
}

function ps(url, cb, params) {
    var xhr = new XMLHttpRequest();
    // 2 配置请求信息
    xhr.open('POST', url);
    // 3 接收响应
    xhr.onload = function() {
            // 调用函数cb的时候传入实参xhr.responseText,所以函数cb需要有一个形参接收
            cb(xhr.responseText)
        }
        // 4-0 设置请求头
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    // 4-1 发送请求
    xhr.send(params)

}
// function GS(url){
// 	var p1=new Promise(function(resolve,reject){
// 	var xhr=new XMLHttpRequest()
// 		xhr.open("GET",url)
// 		xhr.onload=function(){
// 			resolve(xhr.responseText)
// 		}
// 		xhr.send()
// 	})
// 	return p1
// }

// function PS(url,params){
// 	var p1=new Promise(function(resolve,reject){
// 			var xhr=new XMLHttpRequest
// 			xhr.open("POST",url)
// 			xhr.onload=function(){
// 				resolve(xhr.responseText)
// 			}
// 			xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
// 			xhr.send(params)
// 	})
// 	return p1
// }

function GS(url){
    // 如果后面想接.then,那么返回值必须是一个promise对象
    var p1 = new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onload = function(){
            resolve(xhr.responseText);
        }
        xhr.send()
    })
    return p1;
    
}

function PS(url,params){
    var p1 = new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('POST',url);
        xhr.onload = function(){
            resolve(xhr.responseText)
        }
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(params)
    })
    return p1;   
}









/* 停止传播
e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true

鼠标目标
e = e || window.event
var ta = e.target || e.srcElement

停止跳转停止默认
e.preventDefault ? e.preventDefault : e.returnValue = false;

页面鼠标位置
e.clientX + scroll().left + "px "

屏幕缩小停止
document.onvisibilitychange = function() {
    if (document.visibilityState == "hidden") {
        clearInterval(a)
    } else if (document.visibilityState == "visible") {
        setInterval(b, 500)
    }
} */





































//数字转中文钱
function convertCurrency(money) {
    //汉字的数字
    var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
    //基本单位
    var cnIntRadice = new Array('', '拾', '佰', '仟');
    //对应整数部分扩展单位
    var cnIntUnits = new Array('', '万', '亿', '兆');
    //对应小数部分单位
    var cnDecUnits = new Array('角', '分', '毫', '厘');
    //整数金额时后面跟的字符
    var cnInteger = '整';
    //整型完以后的单位
    var cnIntLast = '元';
    //最大处理的数字
    var maxNum = 999999999999999.9999;
    //金额整数部分
    var integerNum;
    //金额小数部分
    var decimalNum;
    //输出的中文金额字符串
    var chineseStr = '';
    //分离金额后用的数组，预定义
    var parts;
    if (money == '') {
        return '';
    }
    money = parseFloat(money);
    if (money >= maxNum) {
        //超出最大处理数字
        return '';
    }
    if (money == 0) {
        chineseStr = cnNums[0] + cnIntLast + cnInteger;
        return chineseStr;
    }
    //转换为字符串
    money = money.toString();
    if (money.indexOf('.') == -1) {
        integerNum = money;
        decimalNum = '';
    } else {
        parts = money.split('.');
        integerNum = parts[0];
        decimalNum = parts[1].substr(0, 4);
    }
    //获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
        var zeroCount = 0;
        var IntLen = integerNum.length;
        for (var i = 0; i < IntLen; i++) {
            var n = integerNum.substr(i, 1);
            var p = IntLen - i - 1;
            var q = p / 4;
            var m = p % 4;
            if (n == '0') {
                zeroCount++;
            } else {
                if (zeroCount > 0) {
                    chineseStr += cnNums[0];
                }
                //归零
                zeroCount = 0;
                chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m == 0 && zeroCount < 4) {
                chineseStr += cnIntUnits[q];
            }
        }
        chineseStr += cnIntLast;
    }
    //小数部分
    if (decimalNum != '') {
        var decLen = decimalNum.length;
        for (var i = 0; i < decLen; i++) {
            var n = decimalNum.substr(i, 1);
            if (n != '0') {
                chineseStr += cnNums[Number(n)] + cnDecUnits[i];
            }
        }
    }
    if (chineseStr == '') {
        chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum == '') {
        chineseStr += cnInteger;
    }
    return chineseStr;
}