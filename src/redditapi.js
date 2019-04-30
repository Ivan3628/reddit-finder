class Reddit {
  search(searchTerm, searchLimit, sortBy) {
    return fetch(
      `http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`
    )
      .then(response => response.json())
      .then(data => data.data.children.map(data => data.data))
      .catch(err => console.log(err));
  }
}
export const reddit = new Reddit();
