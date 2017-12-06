window.onload=function () {
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
	}
	let nav=document.getElementsByClassName('nav_b_center')[0];
	let lis=nav.getElementsByTagName('li');
	let nc=nav.getElementsByClassName('nc');
	for (let i = 0; i < lis.length-2; i++) {
		lis[i].onmouseover=function () {
			for (let j = 0; j < nc.length; j++) {
				nc[j].classList.remove('blo');
			}
			nc[i].classList.add('blo');
		}
		lis[i].onmouseout=function () {
			for (let j = 0; j < nc.length; j++) {
				nc[j].classList.remove('blo');
			}
		}
	}

	// banner侧导航选项卡效果
	// 获取内容部分
	
	// 获取选项部分
	let leftBan=document.getElementsByClassName('banner_left_side')[0];
	let wyNav=leftBan.getElementsByClassName('wy_nav');

	for (let i = 0; i < wyNav.length; i++) {
		// console.log(wyNav[i]);
		let wy=document.getElementsByClassName('wy');
		// console.log(wy[i]);
		wyNav[i].onmouseover=function () {
			for (let j = 0; j < wy.length; j++) {
				wy[j].classList.remove('active');
			}
			wy[i].classList.add('active');
		}
		wyNav[i].onmouseout=function () {
			for (let j = 0; j < wy.length; j++) {
				wy[j].classList.remove('active');
			}
		}
	}

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
	
	
}