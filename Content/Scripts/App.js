function openMenu() {
  document.querySelector(".menuRes").classList.add("openMenu");
}

function CloseMenu() {
  document.querySelector(".menuRes").classList.remove("openMenu");
}

var productItems = document.getElementsByClassName("product-item");
for (var i = 0; i < productItems.length; i++) {
  productItems[i].onclick = function (e) {
    document.getElementById("product-description").innerHTML = e.currentTarget
      .querySelector(".info-product")
      .querySelector(".description").innerHTML;

    document.querySelector(".descriptionTitle").innerHTML = e.currentTarget
      .querySelector(".info-product")
      .querySelector(".title-product").innerHTML;
  };
}

// // const text = props.text
let playing = false;
const toggleState = () => {
  // console.log("last playing state was: ", playing);
  if (playing) {
    document.querySelector("video").pause();
  } else {
    document.querySelector("video").play();
  }
  playing = !playing;
  // console.log("current playing state is: ", playing);
};

const myInterval = setInterval(() => {
  const bars = document.querySelectorAll(".bar");
  if (playing)
    for (let bar of bars) {
      bar.style.maxHeight = ((Math.random() * 1000) % 7).toString() + "rem";
    }
}, 1000);

addEventListener('click', click = () => {
});
const buttonPause = document.querySelector(".pause-play");
buttonPause.addEventListener("click", (click = () => {
  buttonPause.classList.toggle("pause");
})
);

const left = document.querySelector(".left");
left.addEventListener("click", (click = () => {
  const voiceItem = document.querySelector(".voice-grid");
  if (voiceItem.style.left === "100%") {
    voiceItem.style.left = "0";
  } else {
    voiceItem.style.left = "100%";
  }
  var i = 5;
  for (var i = 0; i < 10; i++) {
    voiceItem.style.left = "100%";
  }
})
);

function showPass(tag, id) {

  var x =
      document.getElementById("password");
  if (x.type === 'password') {
    x.type = "text";
  } else {
    x.type = "password";
  }

}

/*show password of input type password*/

function showpass(tag,id) {

  var x=0;

  switch (id) {
    case 1:
      x = 1;
      var x=
          document.getElementById("password");
      if (x.type==='password'){
        x.type="text";
      }else {
        x.type="password";
      }
      break;
    case 2:
      x = 2;
      var x=
          document.getElementById("confirm");
      if (x.type==='password'){
        x.type="text";
      }else {
        x.type="password";
      }
      break;
    case 3:
      x = 3;
      var x=
          document.getElementById("new_password");
      if (x.type==='password'){
        x.type="text";
      }else {
        x.type="password";
      }
      break;
  }

}

/*show password of input type password*/


// const voiceGrid = [...document.querySelectorAll('.audio')];

// const nextBtn = [...document.querySelectorAll('.nextBtn')];
// const prevBtn = [...document.querySelectorAll('.prevBtn')];


// voiceGrid.forEach((item, i) => {
//   let domasion = item.getBoundingClientRect();
//   let width = domasion.width;


//   prevBtn[i].addEventListener('click', () => {
//     item.scrollLeft += width;
//     // console.log("prevBtn");
//   })


//   nextBtn[i].addEventListener('click', () => {
//     item.scrollLeft -= width;
//     // console.log("nextBtn");

//   })

// })


// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("voice");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].classList.display = "none";

//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "flex";
//   slides[slideIndex - 1].style.display = "flex";
//   dots[slideIndex - 1].className += " active";
//   // slides[slideIndex - 1].classList.add("active");
// }






// profile script



// const profile = document.getElementsByClassName("sliderBar-right").console.log("ok");


// profile.addEventListener('click', click = () =>{

// });


// profile.addEventListener("click", function () {
//   document.querySelector(".dashboard-items").classList.add("openProfile");
//   console.log("ok");
// });




