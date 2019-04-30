import { reddit } from "./redditapi";
import { ui } from "./ui";
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

//Form event listener
searchForm.addEventListener("submit", e => {
  //Get search term
  const searchTerm = searchInput.value;
  //Get sort
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  console.log(sortBy);
  //Get limit
  const searchLimit = document.getElementById("limit").value;
  console.log(searchLimit);

  //Check input
  if (searchTerm === "") {
    ui.showMessage("Please add a seach term", "alert-danger");
  } else {
    //Clear input
    ui.clearSearchInput();
    //Search Reddit
    reddit.search(searchTerm, searchLimit, sortBy).then(results => {
      ui.showArticles(results);
    });
  }

  e.preventDefault();
});
