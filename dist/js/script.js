(function() {
	// var anchors = document.getElementsByTagName('a'); //Find all links
	var anchors = document.querySelectorAll('.tabs__item__btn');
	var elements = document.querySelectorAll('.tabs__item');

	// var e = document.querySelectorAll('.tabs__item')[0];
	// var all = e.id;
	// console.log(all);

	var historyState = {};

	var base = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
	
	for (var i = 0; i < anchors.length; i++) {

		// if (anchors[i].href.substring(0, location.origin.length) !== location.origin) {
		// 	continue;
		// }

		// if (location.length == 0) {
		// 	location = "/";
		// }
		
		anchors[i].addEventListener('click', function(evt) {

			evt.preventDefault();
			
			//Change to new page with hash
			var newPage = window.location.href + '#' + evt.target.href.replace(base, '');
			window.location.href = newPage;
			
			//Only do this if history.pushState is supported by the browser

			if (history && history.pushState) {
				//Remove hash from URL and replace with desired URL
				history.pushState(historyState, evt.target.innerHTML, evt.target.href)
			}

			var hash = evt.target.href.replace(base, '')

			for (var i = 0; i < elements.length; i++) {

				var id = elements[i].id;
				var element = document.getElementById(id);

				if (id !== hash) {
					element.classList.add("open");
				} 

				element.classList.toggle('open');

			}

		});

		window.addEventListener('load', (event) => {

			for (var i = 0; i < elements.length; i++) {

				function all(){
					return [...elements].map(e => e.id).join(", "); //arry of all the elements ids
				}

				var id = elements[i].id;
				var element = document.getElementById(id);
				var elementFirst = document.getElementById('section-1');
				var element404 = document.getElementById('404');
				var url = window.location.href.replace(base, '');
				var current = window.location.href;
				var location = window.location.pathname;

				if (url == id) {
					element.classList.add("open");
					console.log(id);
				} 
				
				if (url == 0) { //if home
					elementFirst.classList.add("open");
					console.log(id);
				}

				//404 working, but showing on home still

				var http = new XMLHttpRequest();

				if (http.status != 404) { //if 404
					element404.classList.add("open");
					console.log(id);
				}

			}

		});

		// var href = window.location.href;
		// function UrlExists(href) {
		// 		var http = new XMLHttpRequest();
		// 		http.open('HEAD', href, false);
		// 		http.send();
		// 		if (http.status != 404) {
		// 			element404.classList.add("open");
		// 		}
				
		// }

	}

})();