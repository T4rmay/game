const welcome =
  "▁ ▂ ▄ ▅ ▆ ▇ █ ಠ_ಠ Welcome To Our Web ಠ_ಠ █ ▇ ▆ ▅ ▄ ▂ ▁ ";

console.log(welcome);

let degs = 0;
let y = 2;
const peepoSpin = () => {
  degs = degs + 360;

  let peepo = document.querySelector(".peepo__circle--spin");
  peepo.style.transform = `rotate(${degs}deg)`;
  //peepo.style.width = '310px';
  //peepo.style.height = '310px';

  /*
    if (peepo) {
        
        peepo.className = 'peepo__circle--spin';
    } else {
        peepo = document.querySelector('div.peepo__circle--spin');
        peepo.className = 'peepo__circle';
    }
    */
  return peepo;
};

let x = 0;

const loop = () => {
  for (let i = 0; i < 6; i++) {
    x = x + 1;
    //console.log(`x = ${x}`)
    peepoSpin();
  }
};

let clicks = 0;

let clickCount = () => {
  clicks = clicks + 1;
  //console.log(clicks);
  if (clicks === x + 6) {
    //window.setInterval(peepoSpin, 2000);
    loop();
  }
};

let clicker = document.querySelector(".peepo--js");
clicker.addEventListener("click", clickCount);

//let interval = window.setInterval(peepoSpin, 2000);
