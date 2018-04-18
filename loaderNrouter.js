  	var main = document.querySelector('main');
		var body = document.querySelector('body');
		body.addEventListener("load", initBody, false);
		function getData(pageId) {
		  //console.log(pageId);
		  var myRequest = new Request(pageId + '.txt');
	
		  fetch(myRequest)
		  .then(function(response) { return response.text() })
		  .then(function(text) {
			main.innerHTML = text;
		  });
		}
	
		el = document.querySelectorAll("a");
		function preventRedirection(e) {
			e.preventDefault();
			history.pushState({}, "", this.getAttribute("href"));
			console.log(this.getAttribute("href"));
			if(this.getAttribute("href")=='/') getData('home'); else getData(e.target);
		}
		for (var i = 0; i < el.length; i++) {
			el[i].addEventListener("click", preventRedirection);
		}
		function initBody(){
			getData('home');
			console.log('home');
		}
