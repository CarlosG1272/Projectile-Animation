function framesX (){
    let frames = []; 
    for(let i = 0; i < 1000; i++){
        let {x,y} = Rt(i);
        let pos = {transform: `TranslateX(${x}rem)`}; 
        frames.push(pos); 
    }
    const animation = particle.animate(
        //keyframes
        frames
       ,{
        //options
        easing: "linear", 
        iterations: 1,
        duration: 1000
    })
    return animation.finished; 
}

function framesY (){
    let frames = []; 
    for(let i = 0; i < 1000; i++){
        let {x,y} = Rt(i);
        let pos = {transform: `TranslateY(${y}px)`}; 
        frames.push(pos); 
    }
    const animation = particle.animate(
        //keyframes
        frames
       ,{
        //options
        easing: "linear", 
        iterations: 5,
        duration: 1000
    })
    return animation.finished; 
}