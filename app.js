let movies = [
    {
        name: "Shree Kashi Vishwanath Temple",
        img: "images/slider7.jpg"
    },
    {
        name: "New VT",
        des:"lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptas voluptatem suscipit in! Vitae, accusantium!",
        img: "images/slider2.webp"
    },
    {
        name: "Namo ghat",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptas voluptatem suscipit in! Vitae, accusantium!",
        img: "images/slider5.jpg"
    },
    {
        name: "Namo ghat",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptas voluptatem suscipit in! Vitae, accusantium!",
        img: "images/slider7.jpg"
    },
    {
        name: "Namo ghat",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptas voluptatem suscipit in! Vitae, accusantium!",
        img: "images/vt.jpg"
    },
    {
        name: "Subah-e-Banaras",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptas voluptatem suscipit in! Vitae, accusantium!",
        img: "images/slider7.jpg" 
    }

];
const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        sliderIndex = 0;
    }
    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all elements
    
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    
    content.appendChild(h1);
    content.appendChild(p);

    slide.appendChild(content);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up images
    imgElement.src = movies[slideIndex].images;
    slideIndex++;

    // setting elements classname
    slide.classname = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.classname = 'movie-des';

    sliders.push(slide);

    // adding sliding effects
     
    if(sliders.length){
        sliders[0].style.marginLeft = calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)
    }
}
for(let i=0; i<3; i++){
    createSlide();
}
setInterval( () =>{
    createSlide(0);
}, 3000);
