const article = document.querySelector(".actions");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const badge = document.createElement("a");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("download-cta", "btn-cta");
  badge.textContent = `➕ Add To Modpack`;
  var newURL =  article.querySelector(".btn-cta").href;
  newURL = `http://localhost:8080/add/${newURL.split("/")[7]}`
  badge.href = newURL;

  // Support for API reference docs
  const heading = article.querySelector("#menuButton");
  // Support for article docs with date
  const date = heading.querySelector(".btn-cta");

  heading.insertAdjacentElement("afterbegin", badge);
}

//href="https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty/download/5020014"