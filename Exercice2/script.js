let animate = document.getElementById('animate');
let container = document.getElementById('container');
// click event
animate.addEventListener("click", myMove)

function myMove() {
      let currentPos = 0; // start date
      let timer = setInterval(function() {
        currentPos += 25;
        animate.style.left = (currentPos) + 'px';
        if (currentPos > (container.offsetWidth - animate.offsetWidth - 25 )) {
          clearInterval(timer);
        }
      }, 200);
}