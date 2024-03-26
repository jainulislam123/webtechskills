let mobileIcon = document.querySelector(".mobileIcon");
let NavbarUl = document.querySelector(".navbar ul");
let icon1 = document.querySelector(".fa-bars");
let icon2 = document.querySelector(".fa-xmark");
let icon = 0;
mobileIcon.addEventListener("click",()=>{
    NavbarUl.classList.toggle("blocked");
    NavbarUl.classList.toggle("active");
    if(icon==0){
        icon2.style.display="block";
        icon1.style.display="none";
        icon =1;
    }else{
        icon1.style.display="block";
        icon2.style.display="none";
        icon=0;
    }
})

let audio = new Audio('fg.mp3')
let vdobtn = document.querySelector(".vdobtn span");
play = 1;
vdobtn.addEventListener("click",()=>{
 if(play ==1){
    vdobtn.innerHTML='<i class="fa-solid fa-pause"></i>'
    audio.play();
    play=2
 }else{
    vdobtn.innerHTML='<i class="fas fa-play"></i>'
    audio.pause();
    play=1
 }

});

          
