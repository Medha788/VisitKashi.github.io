const initSlider=()=>{
    const images_list=document.querySelector(".Trending_attraction .images_list");

    const sliderButtons=document.querySelectorAll(".Trending_attraction .slide-button");
    const maxScrollLeft=images_list.scrollWidth -images_list.clientWidth;
    sliderButtons.forEach(button=>{
        button.addEventListener("click",()=>{
const direction=button.id==="prev-slide"?-1:1;
const scrollAmount=images_list.clientWidth *direction;
images_list.scrollBy ({ left:scrollAmount,behavior:"smooth"});
o
        });
    });

    const handleSlideButtons=()=>{
        sliderButtons[0].style.display=images_list.scrollLeft<=0?"none":"block";
        sliderButtons[1].style.display=images_list.scrollLeft>=maxScrollLeft?"none":"block";

    }
    images_list.addEventListener("scroll",()=>{
        handleSlideButtons();
    })
}

window.addEventListener("load",initSlider);