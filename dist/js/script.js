var anchors = document.querySelectorAll('.tabs__item__btn');
var elements = document.querySelectorAll('.tabs__item');

var b = window.location.href 
var s = b.toString().split("/")[3]; // * Gets current URL removes slash
// console.log(s);

elements.forEach(function (element, i) {

	var id = elements[i].id;
	var element = document.getElementById(id);
	var elementHome = elements[0];
	var element404 = document.getElementById('404');

	if (id == s) {
		element.classList.add("open");
    element404.classList.remove("open");
	} 

  // if (404 || id !== s) {
	// 	element404.classList.add("open");
	// }

  if (s == 0) {
		elementHome.classList.add("open");
    element404.classList.remove("open");
	}

});

anchors.forEach(function (anchor) {
  
  // var a = anchor.href;
	// var u = a.toString().split("/")[3]; //Gets the anchor links and removes slash

	anchor.addEventListener('click', function(e) {

		e.preventDefault();
		
		var t = e.target.href.toString().split("/")[3]; //Get the url and remove the slash

		// console.log(t); 

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