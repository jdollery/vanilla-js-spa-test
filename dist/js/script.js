(function() {
  var app = {
    'routes': {
      'section-1': {
        'rendered': function() {
          app.preventScroll();
        }
      },
      'section-2': {
        'rendered': function() {
          app.preventScroll();
        }
      },
      'section-3': {
        'rendered': function() {
          app.preventScroll();
        }
      },
    },
    'default': 'section-1',
    'preventScroll': function() {
      document.querySelector('html').scrollTop = 0;
      document.querySelector('body').scrollTop = 0;
    },
    'routeChange': function() {
      app.routeID = location.hash.slice(1);
      app.route = app.routes[app.routeID];
      
      app.routeElem = document.getElementById(app.routeID);

      let elements = document.querySelectorAll('.tabs__item');

      let elementId = app.routeElem;

      elements.forEach(element =>{

        if(element == elementId){
          element.classList.add('open');
        } else {
          element.classList.remove('open');
        }

      });
      
      app.route.rendered();
    },

    'init': function() {
      window.addEventListener('hashchange', function() {
        app.routeChange();
      });
      if (!window.location.hash) {
        window.location.hash = app.default;
      } else {
        app.routeChange();
      }
    }
  };
  window.app = app;
})();

app.init();

// const elements = document.querySelectorAll('.tabs__item');

// elements.forEach(element =>{
//   let btn = element.querySelector('.tabs__item__btn');
//   let answer = element.lastElementChild;
//   let answers = document.querySelectorAll('.tabs__item__content');
//   btn.addEventListener('click', ()=>{
//       answers.forEach(ans =>{
//           if(answer !== ans){
//               ans.classList.add('closed');
//           }
//       });
//       answer.classList.toggle('closed');
//   });
// });