for (var i = 1; i < u.children.length; i++) {
    u.children[i].index = i;
    u.children[i].onmouseenter = function () {
        this.children[0].style.color = "red"
    }
    u.children[i].onmouseleave = function () {
        this.children[0].style.color = "black"
    }
}
var catelist = category.children[0].children;
for (var i = 0; i < catelist.length; i++) {
    catelist[i].index = i;
    catelist[i].onmouseenter = function () {
        for (var j = 0; j < show.children.length; j++) {
            show.children[j].index = j;
            show.children[this.index].style.display = "block";
        }
        for (var i = 0; i < youyi.children.length; i++) {
            youyi.children[i].index = i;
            // setTimeout(function(){
                youyi.children[this.index].style.transition="0.5s"
                youyi.children[this.index].style.left = "990px";
                youyi.children[this.index].style.display = "block";
                youyi.children[this.index].style.opacity = "1";
            // }, 5000)

        }

    }
    catelist[i].onmouseleave = function () {
        for (var i = 0; i < show.children.length; i++) {
            show.children[i].index = i;
            show.children[this.index].style.display = "none";
        }
        for (var i = 0; i < youyi.children.length; i++) {
            youyi.children[i].index = i;
            youyi.children[this.index].style.transition="0s"
            youyi.children[this.index].style.left = "205px";
            youyi.children[this.index].style.opacity = "0";
        }
    }
}

var x = 0;
menu_cont.children[x].style.display = "block";
menu.children[x].className = "co";
for (var i = 0; i < menu.children.length; i++) {
    menu.children[i].index = i;
    menu.children[i].onmouseover = function () {
        menu.children[x].className = "";
        menu_cont.children[x].style.display = "none";
        menu.children[this.index].className = "co";
        for (var i = 0; i < menu_cont.children.length; i++) {
            menu_cont.children[this.index].style.display = "block";
            x = this.index;
        }
    }
}

var imgs = middle.children;
var btns = btn.children;
var x = 0;
// 初始状态
imgs[x].style.opacity = 1;
btns[x].className = "red";

for (var i = 0; i < btns.length; i++) {
    btns[i].index = i;
    btns[i].onmouseenter = function () {
        // 之前显示大图慢慢变透明
        imgs[x].style.opacity = 0;
        btns[x].className = "";
        // 与当前缩略图对应的大图慢慢显示
        imgs[this.index].style.opacity = 1;
        this.className = "red";
        // x记录当前显示哪一个
        x = this.index;
    }
}

