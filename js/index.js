window.onload=function () {
//按需加载功能模块开始
	var flows=document.getElementsByClassName("flow");
	window.onscroll=function () {
		var scrollTop=window.scrollY || document.body.scrollTop || document.documentElement.scrollTop||window
		.pageYOffset;
		
		for (var i = 0; i < flows.length; i++) {
			var imgs=flows[i].getElementsByTagName("img");
			if (scrollTop > (flows[i].offsetTop-100)){
				
				for (var j = 0; j < imgs.length; j++) {
					var jiazai=imgs[j].getAttribute("attr");
					imgs[j].src=jiazai;
				}

			}	
		}	
	};
	let nav=document.getElementsByClassName('nav_b_center')[0];
	let lis=nav.getElementsByTagName('li');
	let nc=nav.getElementsByClassName('nc');
	for (let i = 0; i < lis.length-2; i++) {
		lis[i].onmouseover=function () {
			for (let j = 0; j < nc.length; j++) {
				nc[j].classList.remove('blo');
			}
			nc[i].classList.add('blo');
		};
		lis[i].onmouseout=function () {
			for (let j = 0; j < nc.length; j++) {
				nc[j].classList.remove('blo');
			}
		}
	}
//按需加载功能模块结束

// banner侧导航选项卡效果开始
	 /*获取内容部分
	 获取选项部分*/
	let leftBan=document.getElementsByClassName('banner_left_side')[0];
	let wyNav=leftBan.getElementsByClassName('wy_nav');

	for (let i = 0; i < wyNav.length; i++) {
		let wy=document.getElementsByClassName('wy');
		wyNav[i].onmouseover=function () {
			for (let j = 0; j < wy.length; j++) {
				wy[j].classList.remove('active');
			}
			wy[i].classList.add('active');
		};
		wyNav[i].onmouseout=function () {
			for (let j = 0; j < wy.length; j++) {
				wy[j].classList.remove('active');
			}
		}
	}
// banner侧导航选项卡效果结束
//轮播图模块开始
	/*需求分析
	1、初始化CSS
	2、获取元素
		·bannerImg、·banner_dot 、·banner_btn_left banner_btn_right
	3、添加定时器    操作图片  .imgActive
	4、
	*/
	let banner_content=document.querySelector('.banner_content');
	let bannerImg=document.querySelectorAll('.bannerImg');
	let banner_dot=document.querySelectorAll('.banner_dot>li');
	let banner_btn_left=document.querySelector('.banner_btn_left');
	let banner_btn_right=document.querySelector('.banner_btn_right');
	let CurIndex=0;
	let timer=setInterval(move,3000);
	function move(type) {
		type=type||'right';
		if (type=='left'){
            CurIndex--;
            if (CurIndex==-1){
                CurIndex=bannerImg.length-1;
            }
		}else if (type=='right'){
            CurIndex++;
            if (CurIndex>bannerImg.length-1){
                CurIndex=0;
            }
		}
        bannerImg.forEach(function (ele,index) {
            ele.classList.remove('imgActive');
            banner_dot[index].classList.remove('active');
        });
		bannerImg[CurIndex].classList.add('imgActive');
        banner_dot[CurIndex].classList.add('active');
    }
    banner_btn_left.onclick=function () {
		clearInterval(timer);
		move('left');
    };
    banner_btn_right.onclick=function () {
		clearInterval(timer);
		move('right');
    };
    banner_content.onmouseover=function () {
    	clearInterval(timer);
    };
    banner_content.onmouseout=function () {
        timer=setInterval(move,3000);
    };
    banner_dot.forEach(function (ele,index) {
		ele.addEventListener('mouseover',function () {
			clearInterval(timer);
        });
		ele.addEventListener('click',function () {
            bannerImg.forEach(function (elea,index1) {
                elea.classList.remove('imgActive');
                banner_dot[index1].classList.remove('active');
            });
            bannerImg[index].classList.add('imgActive');
            this.classList.add('active');
            CurIndex=index;
        });

    });
//轮播图模块结束
	//家电选项卡
	/*1、初始化css  display
	2、获取元素节点 flow 每个楼层下的titile下的标签  、内容部分的选项卡
	3、遍历flow 选择每个楼层下的title标签 并遍历
	4、給每个title标签添加移入事件onmouseover
	5、遍历每个flow下的选项卡  .right_card
	6、控制每个选项卡的消失隐藏*/

	let floors=document.getElementsByClassName('floor');
	// console.log(floors);
	for (let i = 0; i < floors.length; i++) {
		let title = floors[i].getElementsByClassName('page');
		// console.log(title);
		for (let j = 0; j < title.length; j++) {
			// console.log(title[j]);
			// console.log(j);
			title[j].onmouseover=function () {
				var card1=floors[i].getElementsByClassName('right_card');
				// console.log(j);
				for (let k = 0; k < card1.length; k++) {	
					title[k].classList.remove('title_active');
					card1[k].classList.remove('card_active');
				}
				title[j].classList.add('title_active');
				card1[j].classList.add('card_active');
			}
		}
	}
	function jieDian(pa,item,num) {
        let bottom = document.querySelector(item);
        let par = document.querySelector(pa);
        let btn_left = par.querySelector('.btn_left');
        let btn_right = par.querySelector('.btn_right');
        let widths = bottom.firstElementChild.offsetWidth;
        let rights = parseInt(getComputedStyle(bottom.firstElementChild,null).marginRight);
        let count = bottom.childElementCount;
        bottom.style.width = count * (widths + rights) + 'px';
        let nums = 0;
    	btn_right.onclick = function(){
            if(nums== num){
                btn_right.className = 'iconfont button-active';
                btn_left.className = 'iconfont';
                return;
            }
            nums++;
            bottom.style.transform = `translateX(${-1226*nums}px)`;
        };
    	btn_left.onclick = function(){
            if(nums == 0){
                btn_left.className = 'iconfont button-active';
                btn_right.className = 'iconfont';
                return;
            }
            nums--;
            bottom.style.transform = `translateX(${-1226*nums}px)`;
        }
    }
    jieDian('.star_product','.star',1);
    jieDian('.tuijian','.homer',2);

    function neiRong(pa,num) {
        let par = document.querySelector(pa);
        let bottom = par.querySelector('.con>ul');
        let btn_left = par.querySelector('.btn_left');
        let btn_right = par.querySelector('.btn_right');
        let dots=par.querySelectorAll('.dot>ul>li');
        let widths = bottom.firstElementChild.offsetWidth;
        let rights = parseInt(getComputedStyle(bottom.firstElementChild,null).marginRight);
        let count = bottom.childElementCount;
        bottom.style.width = count * (widths + rights) + 'px';
        let nums = 0;
        btn_right.onclick = function(){
            if(nums== num){
                // btn_right.className = 'iconfont button-active';
                // btn_left.className = 'iconfont';
                return;
            }
            nums++;
            for (let i=0;i<dots.length;i++){
            	dots[i].firstElementChild.classList.remove('active');
			}
            bottom.style.transform = `translateX(${-296*nums}px)`;
            dots[nums].firstElementChild.classList.add('active');
        };
        btn_left.onclick = function(){
            if(nums == 0){
                // btn_left.className = 'iconfont button-active';
                // btn_right.className = 'iconfont';
                return;
            }
            nums--;
            for (let i=0;i<dots.length;i++){
                dots[i].firstElementChild.classList.remove('active');
            }
            bottom.style.transform = `translateX(${-296*nums}px)`;
            dots[nums].firstElementChild.classList.add('active');
        }
    }
    neiRong('.book',2);
    neiRong('.MIUI',3);
    neiRong('.play',3);
    neiRong('.app',3);

};