const getTheTitles = function(books) {
  const titles = [];
  for(book of books){
    let title = book.title;
    titles.push(title);
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
