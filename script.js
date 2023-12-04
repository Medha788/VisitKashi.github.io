const one=document.querySelector('.one');


    one.addEventListener('click', () =>{
        one.classList.toggle('active');
    });

    window.onscroll=function(){
let navbar=document.getElementById("navbar");

// if(window.scrolly >= 190){
//     console.log("ok");
// navbar.classList.add('sticky');
// }
//     };

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {
//     let navbar=document.getElementById("navbar");
// };


  if (window.scrollY >0) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};





