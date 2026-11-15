(function () {
  var el = document.querySelector(".foot__counts");
  if (!el) return;

  var ar = document.documentElement.lang === "ar";
  var visitLabel = ar ? "زيارة" : "visits";
  var downloadLabel = ar ? "تنزيل" : "downloads";
  var visits = null;
  var downloads = null;

  function format(n) {
    try {
      return n.toLocaleString(ar ? "ar" : "en-US");
    } catch (e) {
      return String(n);
    }
  }

  function render() {
    var parts = [];
    if (typeof visits === "number") parts.push(format(visits) + " " + visitLabel);
    if (typeof downloads === "number") parts.push(format(downloads) + " " + downloadLabel);
    if (!parts.length) return;
    el.textContent = parts.join(" · ");
    el.classList.add("is-ready");
  }

  fetch("https://abacus.jasoncameron.dev/hit/amrkz-nefertiti-releases/site-visits")
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (data) {
      if (data && typeof data.value === "number") visits = data.value;
      render();
    })
    .catch(function () {});

  fetch("https://api.github.com/repos/Amrkz/Nefertiti-releases/releases")
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (releases) {
      if (!Array.isArray(releases)) return;
      var total = 0;
      var found = false;
      for (var i = 0; i < releases.length; i++) {
        var assets = releases[i].assets || [];
        for (var j = 0; j < assets.length; j++) {
          var name = assets[j].name || "";
          if (/\.exe$/i.test(name)) {
            total += Number(assets[j].download_count) || 0;
            found = true;
          }
        }
      }
      if (found) downloads = total;
      render();
    })
    .catch(function () {});
})();
