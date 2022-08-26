const particle = document.getElementById("Partícula");
const particle2 = document.getElementById("Partícula2");
const particle3 = document.getElementById("Partícula3");

const FinalFunctionEjecution = () => {
    framesParticle(particle, 30, 75, 9, 10, 60); 
    framesParticle(particle2, 40, 75, 9, 5, 60)
    framesParticle(particle3, 20, 75, 9, 15, 60)
}

 setInterval(FinalFunctionEjecution, 3000)

 