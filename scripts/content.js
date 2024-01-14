const article = document.querySelector(".actions");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  

  var newURL = article.querySelector(".btn-cta").href;
  fetch('http://localhost:8080/check/' + newURL.split("/")[7]).then(r => r.text()).then(result => {
    result = JSON.parse(result)
    for (idx in result.compatible) {
      const badge = document.createElement("a");
      // Use the same styling as the publish information in an article's header
      badge.classList.add("download-cta", "btn-cta");
      badge.textContent = `➕ Add To ${result.compatible[idx]}`;
      newURL = `http://localhost:8080/check/${newURL.split("/")[7]}`
      badge.onclick = clickFunction;

      // Support for API reference docs
      const heading = article.querySelector("#menuButton");
      // Support for article docs with date
      const date = heading.querySelector(".btn-cta");

      heading.insertAdjacentElement("afterbegin", badge);
    }
    for (idx in result.in) {
      const badge = document.createElement("a");
      // Use the same styling as the publish information in an article's header
      badge.classList.add("download-cta", "btn-cta");
      badge.textContent = `✖️ Remove from ${result.in[idx]}`;
      newURL = `http://localhost:8080/check/${newURL.split("/")[7]}`
      badge.onclick = clickFunction;

      // Support for API reference docs
      const heading = article.querySelector("#menuButton");
      // Support for article docs with date
      const date = heading.querySelector(".btn-cta");

      heading.insertAdjacentElement("afterbegin", badge);
    }

    // Result now contains the response text, do what you want...
  })

}


function clickFunction() {
  alert("Clicked")
}

//href="https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty/download/5020014"