

let togglebtn=document.querySelector('.indexToggle');
    let menus=document.querySelector('ul');
    
    togglebtn.addEventListener('click',()=>{
        menus.classList.toggle('scale-y-100');
        menus.classList.toggle('h-auto');
    })

// ---------------Slider JS--------------

    $(document).ready(function(){
 $('.carousel').slick({
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay:true,
   autoplaySpeed: 2000,
   dots:false,
   centerMode: false,
   responsive: [{
     breakpoint: 1024,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 1,
       // centerMode: true,

     }

   }, {
     breakpoint: 799,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2,
       dots: true,
       infinite: true,

     }
   },  {
     breakpoint: 480,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       dots: true,
       infinite: true,
       autoplay: true,
       autoplaySpeed: 2000,
     }
   }]
 });
});

