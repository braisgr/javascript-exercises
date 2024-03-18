const palindromes = function (str) {
  const arr = Array.from(str);
  const regex = new RegExp(/^[a-zA-Z0-9]+$/);

  const filteredArr = arr.filter(w => regex.test(w));

  return filteredArr.join("").toLowerCase() === filteredArr.reverse().join("").toLowerCase(); 
};

// Do not edit below this line
module.exports = palindromes;
