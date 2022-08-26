

const particle = document.getElementById("Partícula");


// window.addEventListener("keydown", function(e){
//     let position = particle.getBoundingClientRect()
// })

// Funcion trayectoria

let g = -9.81; 



const Rt = (Vo, angle, t, Xo, Yo) => {
    // console.log(Math.cos(angle))

    let theta = (angle/180)*Math.PI; 
    let Vx = Vo*Math.cos(theta); 
    let Vy = Vo*Math.sin(theta); 
    let x = Vx*t + Xo; 
    let y = Vy*t + (g*(t**2))/2 + Yo;

    x = x>100 ? 100:x;
    y = y>100 ? 100:y;  

    
    x = x<0 ? 0:x;
    y = y<0 ? 0:y;
    return {x,y}; 
}


function framesX (){
    let frames = []; 
    for(let i = 0; i < 9; i++){
        let {x,y} = Rt(30,75,i, 10, 70);
        let pos = {bottom: `${y}vh `, left: `${x}vw`}; 
        frames.push(pos); 
    }
    const animation = particle.animate(
        //keyframes
        frames
       ,{
        //options
        easing: "ease", 
        iterations: 1,
        duration: 2000
    })
    return animation.finished; 
}


 setInterval(()=>framesX(), 3000)

 