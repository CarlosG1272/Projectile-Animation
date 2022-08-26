const g = -9.81; 

// Vo = Initial velocity
// t = Instant
// Xo = Initial Position in x axis; 
// Yo = Initial Position in y axis; 
const Rt = (Vo, angle, t, Xo, Yo) => {
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

