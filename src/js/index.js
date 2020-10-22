var iny = document.getElementById("input")
var ul = document.querySelector("#suo")
var form1 = document.querySelector(".fei")
    //input搜索联想
$("#input").click(function() {
    $("#suo").css("display", "block")
    return false
})
$("#suo li a").click(function() {
    $("#input").val($(this).html())
    return false
})

$("#tijiao").click(function() {
    location.href = "http://www.baidu.com"
    return false
})

form1.onmouseleave = function(e) {
    e = window.event || e;
    var target = e.target || e.srcElement;
    if (target) {
        $("#suo").fadeOut()
    }
}
iny.oninput = function() {
        ul.style.display = "block"
        var bb = iny.value
        var sc = document.createElement("script")
        sc.src = "https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=7523&wd=" + bb +
            "&req=2&csor=1&cb=fn&_=1600945693209"
        document.body.appendChild(sc)
        fn = function(a) {
            ul.innerHTML = ""
            var str = ""
            if (a.g) {
                a.g.forEach(function(element) {
                    str += "<li><a href='#'>" + element.q + "</a></li>"
                });
                ul.innerHTML = str
                sc.remove()
            }
        }
    }
    // iny.onmouseleave = function(e) {
    // 	e = e || window.event
    // 	ul.style.display = "none"
    // }
var dd = $(".hh a:eq(0) ")[0]
var zz = $(".hh a:eq(1) ")[0]
var box1 = $("#box1")[0]
var box = $("#box")[0]
    //登录注册显示
zz.onclick = function() {
    $(box).fadeIn()
    $(box1).fadeIn()
}
dd.onclick = function() {
    $(box).fadeIn()
    $(box1).fadeIn()
}
box1.oncontextmenu = function(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
}
box.oncontextmenu = function(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
}
var p = box1.children[0].children[0]
var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
b2.onclick = function() {
    $(box).fadeOut()
    $(box1).fadeOut()
}
$("#b3").click(function() {
        $(box).fadeOut()
        $(box1).fadeOut()
    })
    //登录托拽
p.onmousedown = function(e) {
    e = e || window.event
        //继续阻止
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
    var disx = e.offsetX || e.layerX;
    var disy = e.offsetY || e.layerY;
    document.onmousemove = function(a) {
        a = a || window.event
        var aa = a.clientX + roll().left - disx
        var bb = a.clientY + roll().top - disy
        if (aa < 0) {
            aa = 0
        }
        if (aa > innerWidth - box1.offsetWidth) {
            aa = innerWidth - box1.offsetWidth
        }
        if (bb < 0) {
            bb = 0
        }
        if (bb > innerHeight - box1.offsetHeight) {
            bb = innerHeight - box1.offsetHeight
        }
        box1.style.left = aa + "px"
        box1.style.top = bb + "px"
    }
}
document.onmouseup = function() {
        document.onmousemove = ""
    }
    //验证登录注册到服务器
var form = document.querySelector("#xxx")
var aaa = document.querySelector(".aaa")
var ooo = document.querySelector(".ooo")
var z1 = document.querySelector("#z1")
var z2 = document.querySelector("#m1")
var z2 = document.querySelector("#z2")
var m2 = document.querySelector("#m2")
var n1 = $("#xxx span").eq(0)
var n2 = $("#xxx span").eq(1)

function aa(b, dom) {
    var a = /^\w{6,18}$/
    if (a.test(b)) {
        dom.style.color = "green"
        dom.innerHTML = ""
        n1.addClass("glyphicon glyphicon-ok Y")
        return true
    } else {
        dom.style.color = "red"
        dom.innerHTML = "请输入6~18位数字，字母，字符串"
        return false
    }

}

function bb(b, dom) {
    var a = /^[\w\d\~\!\@\#\$\%\^\&\*]{6,18}$/
    if (a.test(b)) {
        dom.style.color = "green"
        dom.innerHTML = ""
        n2.addClass("glyphicon glyphicon-ok Y")
        return true
    } else {
        dom.style.color = "red"
        dom.innerHTML = "请输入6~18位数字，字母，字符串"
        return false
    }

}

z1.oninput = function() {
    aa(this.value, aaa)
}
z2.oninput = function() {
        bb(this.value, ooo)
    }
    //注册验证
b1.onclick = function() {
        if (z2.value && m2.value) {
            ps("../iconfont/zhuce.php", function(a) {
                console.log(a)
                if (a == "true") {
                    confirm("注册成功")
                }
            }, `name=${z2.value}&word=${m2.value}`)
        }
    }
    //登录验证
var az = gc("zhang")
if (az) {
    z1.value = az
}

var b0 = document.querySelector("#b0")
b0.onclick = function() {
        ps("../iconfont/denglu.php", function(zxc) {
            console.log(zxc)
            if (zxc == "true") {
                confirm("登录成功")
                $(box).fadeOut()
                $(box1).fadeOut()
                $(".hh").children().eq(0).html(`欢迎,${z1.value}`)
            }
        }, `name=${z1.value}&word=${z2.value}&expires=10`)
    }
    //注册登录点击换
$("#box1 a").click(function() {
        $(this).addClass("toua").siblings("a").removeClass("toua")
            .siblings("div").children().eq($(this).index() - 1).css("display", "block")
            .siblings().css("display", "none")
        return false
    })
    //滑动选项
$("header .main>ul>li").mouseenter(function() {
    $("header ul span").css("display", "block")
})
$("header .main>ul>li").mouseenter(function() {
    $("header ul span").stop().animate({
        left: $(this).index() * 58
    }, 200)
})
$("header ul ").mouseleave(function() {
        $("header ul span").fadeOut()
    })
    //秒杀倒计时
    // function FreshTime() {
    // 	var endtime = new Date('2020-10-20 18:00:00'); //结束时间
    // 	var nowtime = new Date(); //当前时间
    // 	var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
    // 	var d = parseInt(lefttime / 60 / 60 / 24)
    // 	var h = parseInt((lefttime / 60 / 60) % 24)
    // 	if (h <= 9) {
    // 		h = `0${h}`
    // 	}
    // 	var m = parseInt((lefttime / 60) % 60)
    // 	if (m <= 9) {
    // 		m = `0${m}`
    // 	}
    // 	var s = lefttime % 60
    // 	if (s <= 9) {
    // 		s = `0${s}`
    // 	}
    // 	document.querySelector(".daoji").children[0].innerHTML = `${d}天:${h}:${m}:${s}`;
    // 	if (lefttime <= 0) {
    // 		document.querySelector(".daoji").children[0].innerHTML = "秒杀已结束";
    // 		clearInterval(hh);
    // 	}
    // }
    // FreshTime();
    // var hh;
    // hh = setInterval(FreshTime, 1000);


var time = setInterval(fn, 1000)

function fn() {
    var img = document.querySelector(".daoji").children
    var date = new Date()
    var she = new Date(2020, 9, 30, 0, 0, 0)
    var a = parseInt((she.getTime() - date.getTime()) / 1000)
    if (a <= 0) {
        clearInterval(time)
    }
    var d = parseInt(a / 60 / 60 / 24)
    var h = parseInt((a / 60 / 60) % 24)
    var m = parseInt((a / 60) % 60)
    var s = a % 60
    var arr = [
        parseInt(h / 10),
        h % 10,
        "",
        parseInt(m / 10),
        m % 10,
        ",",
        parseInt(s / 10),
        s % 10,
    ]
    for (var i = 0; i < arr.length; i++) {
        img[i].src = `../images/images/${arr[i]}.jpg`
    }

}

//回到顶部
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $(".fix").children().last().fadeIn()
    } else {
        $(".fix").children().last().fadeOut()
    }
})
$(".fix").children().last().click(function() {
        $("html").animate({
            scrollTop: 0
        }, 1000)
    })
    //菜单固定
$(window).scroll(function() {
        if ($(this).scrollTop() > 300) {

        }
    })
    //article下拉菜单
$("article .li").mouseenter(function() {
    $(this).children(".div").stop().slideDown();
})
$("article .li").mouseleave(function() {
    $(this).children(".div").hide()
})

//详情页
// $("header .main>ul>li ").mouseenter(function() {
//     $(this).children(".caidan").stop().slideDown().parent()
//         .siblings().children(".caidan").stop().slideUp()
// })

// $("header .main>ul ").mouseleave(function() {
//     $(".caidan").stop().slideUp()
// })
$("header .caidan").click(function() {
        return false
    })
    //根据后端数据发送详情页
$(".haha ul").empty()
$.ajax({
        url: "../iconfont/data.json",
        dataType: "json",
        success: function(res) {
            $(".haha ul").each(function(i, v) {
                $.each(res, function(a, b) {
                    if (i % 2 == 0) {
                        if (a < 35) {
                            $(".haha ul").eq(i).append(`<li><a href=""><img  src=../images/${b.path}>${b.text}</a></li>`)
                        }
                    } else {
                        if (a >= 35 && a <= 70) {
                            $(".haha ul").eq(i).append(`<li><a href=""><img  src=../images/${b.path}>${b.text}</a></li>`)
                        }
                    }
                })
            })
        }
    })
    //用js改前期图片位置
    // $("img").each(function(i,v){
    // 	console.log(i,v)
    // 	$(this).attr("src" ,`../images/${ $(this).attr("src")}` ) 
    // })
    //轮播图
var mySwiper = new Swiper('.swiper-container', {
    mousewheel: true,
    keyboard: true,
    //切换方式
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    loop: true, // 循环模式选项

    autoplay: true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: true,
        disableOnInteraction: true,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
mySwiper.el.onmouseover = function() {
    mySwiper.autoplay.stop();
}

//鼠标离开开始自动切换
mySwiper.el.onmouseout = function() {
        mySwiper.autoplay.start();
    }
    //鼠标划上渲染数据购物车
$(".gou").mouseenter(function() {
    $(".hq").slideDown()
    $.ajax({
        url: "http://127.0.0.1/src/iconfont/ajax/showlist.php",
        dataType: "json",
        success: function(res) {
            $("tbody").children().eq(0).nextAll().remove()
            if (res.code) {
                $("#aa").after(``)
                $.each(res.data, function(i, v) {
                    $("tbody").append(`<tr id="${v.product_id}">
                        <td>${v.product_name}</td>
                        <td><img src=${v.product_img} class="img-thumbnail"></td>
                        <td>${v.product_price}元</td>
                        <td><button type="button" class="btn btn-warning btn-sm jian" >-</button></td>
                        <td>${v.product_num}</td>
                        <td><button type="button" class="btn btn-warning btn-sm jia" >+</button></td>
                        <td><button type="button" class="btn btn-warning btn-sm del">删除</button></td>
                    </tr>`)
                })
                $(".jian").click(function() {
                    var a = $(this)
                    $.ajax({
                        url: "http://127.0.0.1/src/iconfont/ajax/updatewq.php",
                        dataType: "json",
                        data: {
                            id: $(this).parents("tr").attr("id"),
                            type: 10
                        },
                        success: function(res) {
                            if (res.code) {
                                if (a.parent().next().text() == 1) {
                                    a.parent().next().text() == 1
                                } else {
                                    a.parent().next().text(`${ a.parent().next().text() - 1}`)
                                }
                            }
                        }
                    })
                    return false

                })

                $(".jia").click(function() {
                    var a = $(this)
                    $.ajax({
                        url: "http://127.0.0.1/src/iconfont/ajax/updatewq.php",
                        dataType: "json",
                        data: {
                            id: $(this).parents("tr").attr("id"),
                            type: "add"
                        },
                        success: function(res) {
                            if (res.code) {
                                a.parent().prev().text(`${ parseInt(a.parent().prev().text()) + 1}`)
                            }
                        }
                    })
                    return false
                })
                $(".del").click(function() {
                    var a = $(this)
                    $.ajax({
                        url: "http://127.0.0.1/src/iconfont/ajax/delwq.php",
                        dataType: "json",
                        data: {
                            id: $(this).parents("tr").attr("id"),
                        },
                        success: function(res) {
                            console.log(res)
                            if (res.code) {
                                a.parents("tr").remove()
                            }
                        }
                    })
                    return false
                })


            } else {
                $("#aa").after(`<tr ">
                        <th>无内容</th>
                    </tr>`)
            }
        }
    })
    return false
})
$(".gou").mouseleave(function() {
    $(".hq").stop().slideUp()
})