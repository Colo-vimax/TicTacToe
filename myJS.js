// Restart Game Button
let restart = document.querySelector('#b');
// Grabs all the squares
let squares = document.querySelectorAll('td');
// clear all the squares
function clearBoard() {
    for (var i = 0;i < squares.length; i++){
        squares[i].textContent = ''
    } 
}

restart.addEventListener('click',clearBoard)
//check the square markers

function changeMarker(){
    if(this.textContent === ''){
      this.textContent = 'x'
    }else if (this.textContent === 'x') {
      this.textContent = '0'    
    }else{
      this.textContent = ''
    }
}

for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click',changeMarker)
}
console.log("connected!")




// for loop to add event listeners to all the squaress