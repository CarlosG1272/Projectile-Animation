
function framesParticle (Particle, Vo, Angle, Time, Xo, Yo){
    let frames = []; 
    for(let i = 0; i < Time; i++){
        let {x,y} = Rt(Vo,Angle,i, Xo, Yo);
        let pos = {bottom: `${y}vh `, left: `${x}vw`}; 
        frames.push(pos); 
    }
    const animation = Particle.animate(
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


