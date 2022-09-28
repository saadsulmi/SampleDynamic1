const card= document.querySelector('.card');
const container=document.querySelector('.container');

//items

const product = document.querySelector('.product');
const sizes = document.querySelector('.content');


//to get hovering effect

container.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX)/10 ;
    let yAxis = (window.innerHeight / 2 - e.pageY)/10 ;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener('mouseenter',(e)=>{
    card.style.transition="none";
    
    product.style.transform="translateZ(100px) rotate(-20deg)";
    sizes.style.transform="translateZ(80px) ";
    
})

//animate out
container.addEventListener('mouseleave', (e)=>{
    card.style.transition = "all 0.7s ease";
    card.style.transform=`rotateY(0deg)rotate(0deg)`
    product.style.transform='translateZ(0px)';
    sizes.style.transform="translateZ(0px)";
    product.style.transform="rotate(0deg)"
})