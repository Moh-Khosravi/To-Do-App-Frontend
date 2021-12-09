function colorGenerator() {
  function c() {
    var hex = Math.floor(Math.random()*256).toString(16);
    return ("0"+String(hex)).slice(-2); 
  }
  return "#"+c()+c()+c()+'50';
}

export default colorGenerator;