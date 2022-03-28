const body = document.querySelector("body");
const colorGenerator = () => {
  const color = Math.floor(Math.random() * 255);
  return color;
};

const loop = () => {
  const r = colorGenerator();
  const g = colorGenerator();
  const b = colorGenerator();
  const rgb = "rgb(" + r + ", " + g + ", " + b + ")";

  body.style.background = rgb;
  bgInfos.innerHTML = `<button id="btn">${rgb}</button>`;

  btn.addEventListener("click", (e) => {
    navigator.clipboard.writeText(e.target.textContent).then(() => {
      alert(e.target.textContent +"\ncopié !");
    });
  });

  setTimeout(loop, 3000);
};

loop();
