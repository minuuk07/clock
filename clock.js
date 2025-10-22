let hr = document.getElementById("hour");
let minn = document.getElementById("min");
let secc = document.getElementById("sec");

function display() {
    let now = new Date();  

    let hh = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();

    let hrotations = (30 * hh) + (mm / 2);
    let mrotations = 6 * mm;
    let srotations = 6 * ss;

    hr.style.transform = `rotate(${hrotations}deg)`;
    minn.style.transform = `rotate(${mrotations}deg)`;
    secc.style.transform = `rotate(${srotations}deg)`;
}

// display(); 
setInterval(display, 1000);
