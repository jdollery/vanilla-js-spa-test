var anchors = document.querySelectorAll('.tabs__item__btn');
var elements = document.querySelectorAll('.tabs__item');

var b = window.location.href 
var s = b.toString().split("/")[3]; //Gets current URL removes slash
console.log(s);

elements.forEach(function (element, i) {

	var id = elements[i].id;
	var element = document.getElementById(id);
	var elementHome = elements[0];
	var element404 = document.getElementById('404');

	if (id == s) {
		element.classList.add("open");
	} 

	if (s == 0) {
		elementHome.classList.add("open");
	}

	if (s !== id) {
		element404.classList.add("open");
	}

});

anchors.forEach(function (anchor) {
  
  var a = anchor.href;
	var u = a.toString().split("/")[3]; //Gets the anchor links and removes slash

	anchor.addEventListener('click', function(e) {

		e.preventDefault();
		
		var t = e.target.href.toString().split("/")[3]; //Get the url and remove the slash

		console.log(t); 

		window.history.pushState({}, "", t); //Change the url using the target url without page reload.

		elements.forEach(function (element, i) {

			var id = elements[i].id;
			var element = document.getElementById(id);

			if (id !== t) {
				element.classList.add("open");
			} 

			element.classList.toggle('open');

		});

	});

});


// create a function that handles the url location
// const urlLocationHandler = async () => {
// 	const location = window.location.pathname; // get the url path
// 	// if the path length is 0, set it to primary page route
// 	if (location.length == 0) {
// 		location = "/";
// 	}
// 	// get the route object from the urlRoutes object
// 	const route = urlRoutes[location] || urlRoutes["404"];
// 	// get the html from the template
// 	const html = await fetch(route.template).then((response) => response.text());
// 	// set the content of the content div to the html
// 	document.getElementById("content").innerHTML = html;
// 	// set the title of the document to the title of the route
// 	document.title = route.title;
// 	// set the description of the document to the description of the route
// 	document
// 		.querySelector('meta[name="description"]')
// 		.setAttribute("content", route.description);
// };

// // add an event listener to the window that watches for url changes
// window.onpopstate = urlLocationHandler;
// // call the urlLocationHandler function to handle the initial url
// window.route = urlRoute;
// // call the urlLocationHandler function to handle the initial url
// urlLocationHandler();
