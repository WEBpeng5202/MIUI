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
	let cona=document.getElementsByClassName('nav_con')[0];
	let nc=cona.getElementsByClassName('nc');
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
	let wy=document.getElementById('wy');
	let wyCon=document.getElementsByClassName('wy-con');
	// 获取选项部分
	let leftBan=document.getElementsByClassName('banner_left_side')[0];
	let wyNav=leftBan.getElementsByTagName('li');
	for (let i = 0; i < wyNav.length; i++) {
		console.log(wyNav[i]);
		wyNav[i].onmouseover=function () {
			for (let j = 0; j < wyCon.length; j++) {
				wyCon[j].classList.remove('active');
			}
			wyCon[i].classList.add('active');
		}
		wyNav[i].onmouseout=function () {
			for (let j = 0; j < wyCon.length; j++) {
				wyCon[j].classList.remove('active');
			}
		}
	}
	
	
}