(function() {
	// var anchors = document.getElementsByTagName('a'); //Find all links
	var anchors = document.querySelectorAll('.tabs__item__btn');
	var elements = document.querySelectorAll('.tabs__item');

	// var e = document.querySelectorAll('.tabs__item')[0];
	// var all = e.id;
	// console.log(all);

	var historyState = {};

	var base = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
	
	// for (var i = 0; i < anchors.length; i++) {
	anchors.forEach(function (anchor, index) {
		
		anchor.addEventListener('click', function(event) {

			event.preventDefault();
			
			//Change to new page with hash
			var newPage = window.location.href + '#' + event.target.href.replace(base, '');
			window.location.href = newPage;
			
			//Only do this if history.pushState is supported by the browser

			//Remove hash from URL and replace with desired URL
			if (history && history.pushState) { 
				history.pushState(historyState, event.target.innerHTML, event.target.href)
			}

			var hash = event.target.href.replace(base, '')

			console.log(hash + " Open");

			// for (var i = 0; i < elements.length; i++) {
			// anchors.forEach(function (elements, index) {

			var id = elements[index].id;
			var element = document.getElementById(id);

			if (id !== hash) {
				element.classList.add("open");
			} 

			element.classList.toggle('open');

			console.log(id + " Clicked");

			// });

		});

	});

	window.addEventListener('load', (event) => {

		var url = window.location.href.replace(base, '');

		console.log('Current Page: ' + url) // value

		// for (var i = 0; i < elements.length; i++) {
		elements.forEach(function (element, index) {

			// function all(){
			// 	return [...elements].map(e => e.id).join(", "); //arry of all the elements ids
			// }

			// var id = [].slice.call(document.getElementsByClassName('tabs__item'));

			// id.forEach(function(id){
			// 	console.log(id.getAttribute('id'))
			// });

			var id = elements[index].id;
			var element = document.getElementById(id);
			var elementFirst = document.getElementById('section-1');
			var element404 = document.getElementById('404');
			
			// var current = window.location.href;
			// var location = window.location.pathname;

			// console.log(index) // index
			// console.log(url !== id) // value

			// var href = window.location.href;
			// var http = new XMLHttpRequest();
			// http.open('HEAD', href, false);
			// http.send();

			if (url == 0) { //if home
				elementFirst.classList.add("open");
				console.log('Current ID: ', id); //returns all ids
			} 
			
			if (url == id) { //if page
				element.classList.add("open");
				console.log('Current ID: ', id);
			} 
			
			// if (http.status = 404) { //if 404
			if (url == 0) { //if page
				element404.classList.add("open");
				// console.log('Home Page') // value
			}

			//404 working, but showing on home still

			// var http = new XMLHttpRequest();

			// if (http.status = 404) { //if 404
			// 	element404.classList.add("open");
			// }

		});

	});

})();