/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json');
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 380,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#8179fd"
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
        "value": 3,
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
        "color": "#e9e9e9",
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
        "bounce": false,
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
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
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
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
});

// start header typing
let TxtRotate = function (el, toRotate, period)
{
    this.el = el;
    this.toRotate = toRotate;
    this.period = parseInt(period, 10) || 2000;
    this.loopNum = 0;
    this.txt = ``;
    this.isDeleting = false;
    this.tick()
};

TxtRotate.prototype.tick = function ()
{
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  };
  this.el.innerHTML = `<span class="wrap"> ${this.txt} </span>`;
  
  let that = this;
  let delta = 300 - Math.random() * 100;
  if (this.isDeleting) { delta /= 2; }
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === ``) {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  
  setTimeout(function ()
  {
    that.tick();
  }, delta);
};

window.onload = function ()
{
  let elements = document.getElementsByClassName(`txt-rotate`);
  for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute(`data-rotate`);
    let period = elements[i].getAttribute(`data-period`);
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  let css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
// end header typing

// select all bullets;
let allBullets = document.querySelectorAll(".nav-bullets .bullet");
function scrollToSomeWhere(element)
{
    element.forEach((ele) =>
    {
        ele.addEventListener("click", (e) =>
        {
            document.querySelector(e.target.dataset.section).scrollIntoView({ behavior: 'smooth' });
        })
    });
}
scrollToSomeWhere(allBullets);

// seemore list;
let btnSeeMoreOpn = document.querySelector("#seemore");
let btnSeeMoreCls = document.querySelector(".seemore button");
let listSeeMore = document.querySelector(".seemore");
btnSeeMoreOpn.addEventListener("click", () =>
{
  listSeeMore.style.display = "flex";
})
btnSeeMoreCls.addEventListener("click", () =>
{
  listSeeMore.style.display = "none";
})
