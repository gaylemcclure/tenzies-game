
function randomNumber() {
  let dieNumber = [];
  //let random = Math.floor(Math.random() * 6 + 1)
  let arr = 0
  
  while(arr < 10) {
    dieNumber.push(Math.floor(Math.random() * 6 + 1))
    arr++
  }
}

export default randomNumber;