var anchors = document.querySelectorAll('.tabs__item__btn');
var elements = document.querySelectorAll('.tabs__item');

// anchors.forEach(function (anchor, index) {

  // create document click that watches the nav links only
  // document.addEventListener("click", (e) => {
  //   const { target } = e;
  //   if (!target.matches(anchors)) {
  //     return;
  //   }
  //   e.preventDefault();
  //   urlRoute();
  // });

  

// });

// create an object that maps the url to the template, title, and description
// const urlRoutes = {
// 	404: {
// 		template: "/templates/404.html",
// 		title: "404 | " + urlPageTitle,
// 		description: "Page not found",
// 	},
// 	"/": {
// 		template: "/templates/index.html",
// 		title: "Home | " + urlPageTitle,
// 		description: "This is the home page",
// 	},
// 	"/about": {
// 		template: "/templates/about.html",
// 		title: "About Us | " + urlPageTitle,
// 		description: "This is the about page",
// 	},
// 	"/contact": {
// 		template: "/templates/contact.html",
// 		title: "Contact Us | " + urlPageTitle,
// 		description: "This is the contact page",
// 	},
// };

anchors.forEach(function (anchor, index) {

  // if (anchor.href.substring(0, location.origin.length) !== location.origin) {
  //   return true;
  // }

  // window.history.pushState(null, null, window.location.pathname);
  
  var routes = anchor.href;

  // var str = path.split("/");

  // var pathname = new URL(routes).pathname;

  // console.log(pathname);

  var splitURL = routes.toString().split("/")[3];
  console.log(splitURL);  

  // // create a function that watches the url and calls the urlLocationHandler
  // const urlRoute = (event) => {
  //   event = event || window.event; // get window.event if event argument not provided
  //   event.preventDefault();
  //   // window.history.pushState(state, unused, target link);
  //   window.history.pushState({}, "", event.target.href);
  //   urlLocationHandler();
  // };

	// elements.forEach(function (element, i) {

	// });


});

document.addEventListener('click', function(e) {

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
