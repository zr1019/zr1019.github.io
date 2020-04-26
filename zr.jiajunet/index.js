for (var i = 0; i < nav_ul.children.length; i++) {
    nav_ul.children[i].index = i;
    nav_ul.children[i].onmouseenter = function () {
        this.children[1].style.display = "block";
    }
    nav_ul.children[i].onmouseleave = function () {
        this.children[1].style.display = "none";
    }
}

var imgs = document.getElementsByClassName("img");
var enter = document.getElementsByClassName("enter")
var x = 0;
// 初始状态
imgs[x].style.opacity = 1;
enter[x].style.opacity = 1;
enter[x].style.left = "100px";
var timer = setInterval(function () {

    enter[x].style.transition = "0s"
    imgs[x].style.opacity = 0;
    enter[x].style.opacity = 0;
    enter[x].style.left = "-500px";
    x++;
    if (x > imgs.length - 1) {
        x = 0
    }
    imgs[x].style.opacity = 1;
    enter[x].style.opacity = 1;
    enter[x].style.transition = ".5s"
    enter[x].style.left = "100px";
}, 6000);

imgs[0].style.display = "block";
var y = 0;
direct.children[0].onclick = function () {
    imgs[y].style.transition="0.3s";
    imgs[y].style.opacity = 0;
    y++;
    if (y >= imgs.length) {
        y = 0;
    }
    setTimeout(function () {
        imgs[y].style.transition = "all 1.5s";
        imgs[y].style.opacity = 1;
     }, 16.7);
}
direct.children[1].onclick = function () {
    imgs[y].style.transition="0.3s";
    imgs[y].style.opacity = 0;
    y--;
    if (y < 0) {
        y = imgs.length - 1;
    }
    setTimeout(function () {
       imgs[y].style.transition = "all 1.5s";
       imgs[y].style.opacity = 1;
    }, 16.7)
    
}



var index = 0;
var flag = true;
// 展示内容宽度
var imgWidth = inner.offsetWidth;
var li = inner.children;
// cloneNode(true)递归复制当前节点的所有子孙节点
// cloneNode(false)只复制当前节点
inner.appendChild(inner.children[0].cloneNode(true));
next.onclick = function () {
    // 如果门是开的  就进去
    if (flag) {
        // // 如果门是开的  就进去
        flag = false;
        index++;
        inner.style.left = -index * imgWidth + "px";
    }

};

inner.addEventListener("transitionend", function () {
    if (index == inner.children.length - 1) {
        inner.style.transition = "all 0s";
        inner.style.left = 0 + "px";
        index = 0;
        setTimeout(function () {
            inner.style.transition = "all 1s";
        }, 16.7)
    }
    flag = true;
});
prev.onclick = function () {
    if (flag) {
        flag = false;
        index--;
        if (index < 0) {
            inner.style.transition = "all 0s";
            inner.style.left = -(inner.children.length - 1) * imgWidth + "px";
            setTimeout(function () {
                inner.style.transition = "all 1s";
                inner.style.left = -(inner.children.length - 2) * imgWidth + "px";
            }, 16.7)
            index = inner.children.length - 2;
        } else {
            inner.style.left = -index * imgWidth + "px";
        }
    }
};


var new_1 = setInterval(function () {
    new1.style.color = "white"
    new1.style.backgroundColor = "red"
    new2.style.color = "white"
    new2.style.backgroundColor = "red"
    new3.style.color = "white"
    new3.style.backgroundColor = "red"
    new4.style.color = "white"
    new4.style.backgroundColor = "red"
    var new_2 = setTimeout(function () {
       new1.style.color = "red"
       new1.style.backgroundColor = "white"
       new2.style.color = "red"
        new2.style.backgroundColor = "white"
       new3.style.color = "red"
        new3.style.backgroundColor = "white"
        new4.style.color = "red"
       new4.style.backgroundColor = "white"
    }, 500)
}, 1000)