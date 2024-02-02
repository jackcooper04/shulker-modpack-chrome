const actionTray = document.querySelector(".actions");
if (actionTray) {
  var rawModURL = actionTray.querySelector(".btn-cta").href;
  var fileID = rawModURL.split("/")[7];
  fetch('http://localhost:8080/check/' + fileID).then(r => r.text()).then(result => {
    result = JSON.parse(result);

    for (idx in result.compatible) {
      const badge = document.createElement("a");
      console.log(badge)
      // Use the same styling as the publish information in an actionTray's header
      badge.classList.add("download-cta", "btn-cta");
      badge.textContent = `➕ Add To ${result.compatible[idx]}`;
      badge.onclick = function(event) {
        fetch('http://localhost:8080/add/'+fileID+'/'+result.compatible[idx]).then(r => r.text()).then(result => {})
      }


      const heading = actionTray.querySelector(".split-button");


      heading.insertAdjacentElement("afterbegin", badge);
    };
    for (idx in result.in) {
      const badge = document.createElement("a");
      // Use the same styling as the publish information in an actionTray's header
      badge.classList.add("download-cta", "btn-cta");
      badge.textContent = `✖️ Remove from ${result.in[idx]}`;
      modPack = result.in[idx]
      badge.onclick = function(event) {
        fetch('http://localhost:8080/remove/'+fileID+'/'+result.in[idx]).then(r => r.text()).then(result => {})
      }


      const heading = actionTray.querySelector(".split-button");


      heading.insertAdjacentElement("afterbegin", badge);
    };

  });

};