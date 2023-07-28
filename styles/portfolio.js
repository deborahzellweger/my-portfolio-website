for (let el of document.querySelectorAll('.p-hp-hover')) {
let image = new Image();
image.src = el.dataset.src;
image.className = "followMouse"
el.addEventListener('mouseover', (e)=> {
  document.getElementById('project-reveal').append(image);
  image.style.left = `${e.x - (image.width/2)}px`;
  image.style.top = `${e.y - (image.height/2)}px`;
})
el.addEventListener('mouseout',(e)=>{
    image.remove();
  })
}

window.addEventListener('mousemove',(e)=> {
  let image = document.querySelector('.followMouse');
  if (image) {
    image.style.left = `${e.x - (image.width/2)}px`;
    image.style.top = `${e.y - (image.height/2)}px`;
  }
})