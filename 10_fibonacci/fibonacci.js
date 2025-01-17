const fibonacci = function(num) {
  if(typeof num === 'string'){
    num = parseInt(num);
  }
  
  if(num === 0) return 0;

  if(num < 0) return 'OOPS';

  const fibo = [1,1];

  for(let i=0; i< num-1; i++){
    let next = fibo[i] + fibo[i+1];
    fibo.push(next);
  }
  return fibo[num-1];
};


// Do not edit below this line
module.exports = fibonacci;
