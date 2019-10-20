

let container = document.querySelector("#container");
var color;

var value;
var i;

function generateNumber() {
    return Math.floor(Math.random() * 255);
}

function colorChange(color) {
    console.log("Color method: " + color)
    if(color === "shadow") {
        let cells = document.querySelectorAll('.cell')
        console.log(cells);
        cells.forEach(element => {
            element.removeEventListener('mouseenter', event);
            element.addEventListener("mouseenter", function( event ) {
                if(event.target.style.backgroundColor != "black") {
                    event.target.style.backgroundColor = "black";
                    event.target.style.opacity = 0.1;
                    console.log(event.target.style.opacity, "hi");
                } else {
                    event.target.style.opacity = Number(event.target.style.opacity) + 0.1;
                    console.log(event.target.style.opacity);
                }
            });
        });
    } else if (color === "colorful") {
        console.log("In colorful")
        let cells = document.querySelectorAll('.cell')
        console.log(cells);
        cells.forEach(element => {
            element.removeEventListener('mouseenter', event);
            element.addEventListener("mouseenter", function( event ) {
                event.target.style.backgroundColor = "rgba(" + generateNumber() + "," + generateNumber() + "," + generateNumber() + "," + 1 + ")";
                event.target.style.opacity = 1;
                ;
            });
        });
    } else if (color === "black") {
        let cells = document.querySelectorAll('.cell')
        console.log(cells);
        cells.forEach(element => {
            element.removeEventListener('mouseenter', event);
            element.addEventListener("mouseenter", function( event ) {
                event.target.style.backgroundColor = "black";
                event.target.style.opacity = 1;
                ;
            });
        });
    }
}

function determinePixel(value) {
    let pixel = 960/value;
    return (pixel + "px");
}

function makeGrid(value) {
    let x = determinePixel(value);
  for (i=0; i < value * value; i++) {
      const div = document.createElement('div');
      div.className = 'cell';
      div.style.width = x;
      div.style.height = x;
      div.style.backgroundColor = "white";
      div.style.border = "1px solid black";
      div.addEventListener("mouseenter", function( event ) {
          event.target.style.backgroundColor = "black";
      });
      container.appendChild(div);
  }
  container.style.columnCount = value;
  container.style.rowCount = value;
  container.style.padding = "0px";
  container.style.width = "960px";
}

value = prompt ("How many columns would you like?");
makeGrid(value);

function reset() {
    location.reload(true);
}

    
/* for (i=0; i<400; i++) {
    const div = document.createElement('div');
    div.style.width = "60px";
    div.style.height = "60px";
    div.style.backgroundColor = "black";
    div.addEventListener("mouseenter", function( event ) {
        event.target.style.backgroundColor = "white";
    })
        
    container.appendChild(div);
}; */