particlesJS.load('particles-js', 'particles.json', function () {
  console.log('particles.js loaded - callback');
});

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);



var cbpFixedScrollLayout = (function () {

  // cache and initialize some values
  var config = {
    // the cbp-fbscroller´s sections
    $sections: $('#cbp-fbscroller > section'),
    // the navigation links
    $navlinks: $('#cbp-fbscroller > nav:first > a'),
    // index of current link / section
    currentLink: 0,
    // the body element
    $body: $('html, body'),
    // the body animation speed
    animspeed: 650,
    // the body animation easing (jquery easing)
    animeasing: 'easeInOutExpo'
  };

  function init() {

    // click on a navigation link: the body is scrolled to the position of the respective section
    config.$navlinks.on('click', function () {
      scrollAnim(config.$sections.eq($(this).index()).offset().top);
      return false;
    });

    // 2 waypoints defined:
    // First one when we scroll down: the current navigation link gets updated. 
    // A `new section´ is reached when it occupies more than 70% of the viewport
    // Second one when we scroll up: the current navigation link gets updated. 
    // A `new section´ is reached when it occupies more than 70% of the viewport
    config.$sections.waypoint(function (direction) {
      if (direction === 'down') { changeNav($(this)); }
    }, { offset: '30%' }).waypoint(function (direction) {
      if (direction === 'up') { changeNav($(this)); }
    }, { offset: '-30%' });

    // on window resize: the body is scrolled to the position of the current section
    $(window).on('debouncedresize', function () {
      scrollAnim(config.$sections.eq(config.currentLink).offset().top);
    });

  }

  // update the current navigation link
  function changeNav($section) {
    config.$navlinks.eq(config.currentLink).removeClass('cbp-fbcurrent');
    config.currentLink = $section.index('section');
    config.$navlinks.eq(config.currentLink).addClass('cbp-fbcurrent');
  }

  // function to scroll / animate the body
  function scrollAnim(top) {
    config.$body.stop().animate({ scrollTop: top }, config.animspeed, config.animeasing);
  }

  return { init: init };

})();
