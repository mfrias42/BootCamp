const randombgcolor = () => {
    const random = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + random;
    color.innerHTML = "#" + random;
  }
  
document.addEventListener("click", randombgcolor, true);
  randombgcolor();