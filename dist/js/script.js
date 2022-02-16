// const nav = `<a href="/">Home</a> | 
// <a href="/about">About</a> | 
// <a href="/contact">Contact</a>`;
// const routes = {
// "/": `<h1>Home</h1>${nav}<p>Welcome home!</p>`,
// "/about": `<h1>About</h1>${nav}<p>This is a tiny SPA</p>`,
// };

// const render = path => {
//   document.querySelector("#app").innerHTML = routes[path] || '<h1>404</h1>${nav}';

//   document.querySelectorAll('[href^="/"]').forEach(el => 
//     el.addEventListener("click", evt => {
//       evt.preventDefault();
//       const {pathname: path} = new URL(evt.target.href);
//       window.history.pushState({path}, path, path);
//       render(path);
//     })
//   );
// };

// window.addEventListener("popstate", e =>
//   render(new URL(window.location.href).pathname)
// );

// render("/");

// (function() {
  
//   var app = {
//     'routes': {
//       'section-1': {
//         'rendered': function() {
//           app.preventScroll();
//         }
//       },
//       'section-2': {
//         'rendered': function() {
//           app.preventScroll();
//         }
//       },
//       'section-3': {
//         'rendered': function() {
//           app.preventScroll();
//         }
//       },
//     },
//     'default': 'section-1',
//     'preventScroll': function() {
//       document.querySelector('html').scrollTop = 0;
//       document.querySelector('body').scrollTop = 0;
//     },

//     'routeChange': function() {
//       // app.routeID = location.hash.slice(1);
//       app.routeID = window.location.pathname.slice(1);

//       app.route = app.routes[app.routeID];

//       console.log(app.routeID)

//       app.routeElem = document.getElementById(app.routeID);
//       app.elements = document.querySelectorAll('.tabs__item');
//       app.elementId = app.routeElem;
//       app.elements.forEach(element =>{
//         if(element == app.elementId){
//           element.classList.add('open');
//         } else {
//           element.classList.remove('open');
//         }
//       });
//       app.route.rendered();
//     },

    // const onRouteChange = (href, noPush) => {
    //   const _app = document.getElementById('app');
    //   routeWillChange();
    //   setTimeout(() => {
    //     if (!noPush) {
    //       window.history.pushState({}, href,    `${window.location.origin}${href}`);
    //     }
    //     fetch(`/partial${href}`)
    //       .then(resp => resp.text())
    //       .then(html => {
    //         const pageOffload = new CustomEvent('page-offload');
    //         document.dispatchEvent(pageOffload);
    //         app.querySelectorAll('a').forEach(removeListenerFromAnchors);
    //         _app.innerHTML = html;
    //         _app.querySelectorAll('a').forEach(addListenerToAnchors);
    //         loadScript(_app);
    //         const pageOnload = new CustomEvent('page-onload');
    //         document.dispatchEvent(pageOnload);
    //         routeDidChange();
    //       });
    //   }, delay);
    // },

    // 'init': function() {

    //   window.addEventListener('hashchange', function() {
    //     app.routeChange();
    //   });

    //   if (!window.location.hash) {
    //   //   window.location.hash = app.default;
    //   // } else {
    //     app.routeChange();
    //   }

      // document.querySelectorAll('.tabs__item__btn').forEach(addListenerToAnchors);

      // const addListenerToAnchors = anchor => {
      //   const href = anchor.getAttribute('href');
      //   if (
      //     !href.startsWith('http') &&
      //     !href.startsWith('wwww') &&
      //     !href.startsWith('//')
      //   ) {
      //     anchor.addEventListener('click', anchorListener);
      //   }
      // },

      // function anchorListener(e) {
      //   e.preventDefault();
      //   const href = this.getAttribute('href');

      //   if (window.location.pathname !== href) {
      //     onRouteChange();
      //   }

      // }

  //   }
  // };
//   window.app = app;
// })();

// app.init();


const elements = document.querySelectorAll('.tabs__item');

elements.forEach(element => {

  let btn = element.querySelector('.tabs__item__btn');
  let answer = element.lastElementChild;
  let answers = document.querySelectorAll('.tabs__item__content');

  btn.addEventListener("click",function(e){

    answers.forEach(ans =>{
      if(answer !== ans){
        ans.classList.add('closed');
      }
    });

    answer.classList.toggle('closed');
    // e.preventDefault();

  });

});

(function () {
    var current = location.pathname.split('/')[1];
    if (current === "") return;
    var menuItems = document.querySelectorAll('.tabs__item__btn');
    for (var i = 0, len = menuItems.length; i < len; i++) {
        if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
            menuItems[i].className += "is-active";
        }
    }
})();