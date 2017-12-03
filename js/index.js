window.onload=function () {
	var flows=document.getElementsByClassName("flow");

	window.onscroll=function () {
		var scrollTop=window.scrollY || document.body.scrollTop || document.documentElement.scrollTop||window
		.pageYOffset;
		
		for (var i = 0; i < flows.length; i++) {
			var imgs=flows[i].getElementsByTagName("img");
			if (scrollTop > (flows[i].offsetTop-300)){
				
				for (var j = 0; j < imgs.length; j++) {
					var jiazai=imgs[j].getAttribute("attr");
					imgs[j].src=jiazai;
				}

			}	
		}
		
	}
	
	
}