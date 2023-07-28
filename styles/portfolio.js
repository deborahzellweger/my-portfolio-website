for (let el of document.querySelectorAll('.p-hp-hover')) {
let image = new Image();
console.log(image);
image.src = el.dataset.src;
console.log(image.src)
el.addEventListener('mouseover', (e)=> {
  document.getElementById('project-reveal').append(image);
  image.style.top = "200px";
  image.style.left = "300px";
})
el.addEventListener('mouseout',(e)=>{
    image.remove();
  })
}