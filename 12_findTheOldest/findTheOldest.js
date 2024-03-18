const findTheOldest = function(people) {
  const yearsArr = people.map(person => {
    const years = person.yearOfDeath
      ? person.yearOfDeath - person.yearOfBirth
      : new Date().getFullYear() - person.yearOfBirth;
  
    return { ...person, years };
  });
  const sortedArr = yearsArr.sort((a,b) => b.years - a.years);
  console.log(sortedArr);

  return sortedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
