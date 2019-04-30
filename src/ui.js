class UI {
  constructor() {
    this.searchInput = document.getElementById("search-input");
    this.results = document.getElementById("results");
  }

  //Clear input
  clearSearchInput() {
    this.searchInput.value = "";
  }

  //Show articles
  showArticles(results) {
    console.log(results);
    let output = '<div class="card-columns">';
    //Loop through posts
    results.forEach(post => {
      //Check for image
      const image = post.preview
        ? post.preview.images[0].source.url
        : "https://assets.entrepreneur.com/content/3x2/2000/20180301190808-reddit-logo.jpeg";

      output += `
  <div class="card">
<img src="${image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${post.title}</h5>
  <p class="card-text">${this.truncateText(post.selftext, 100)} </p>
  <a href="${post.url}"target="_blank" class="btn btn-primary">Read More</a>
  <hr>
  <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
  <span class="badge badge-dark">Score: ${post.score}</span>
</div>
</div>
  `;
    });
    output += "</div>";
    this.results.innerHTML = output;
  }

  //Show alert
  showMessage(message, className) {
    //Create div
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(message));
    div.className = `alert ${className}`;

    const searchContainer = document.getElementById("search-container");
    const search = document.getElementById("search");
    searchContainer.insertBefore(div, search);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  //Truncate text
  truncateText(text, limit) {
    const shortened = text.indexOf(" ", limit);
    if (shortened == -1) return text;
    return text.substring(0, shortened);
  }
}

export const ui = new UI();
