const removeFromArray = function(array, ...args) {
  const filteredArray = [];
  for(let i=0; i<array.length; i++){
    if(!args.includes(array[i])){
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
