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

  function numberValue(v) {
    if (typeof v === "string") v = Number(v);
    return typeof v === "number" && isFinite(v) ? v : null;
  }

  function render() {
    var parts = [];
    if (typeof visits === "number") parts.push(format(visits) + " " + visitLabel);
    if (typeof downloads === "number") parts.push(format(downloads) + " " + downloadLabel);
    if (!parts.length) return;
    el.textContent = parts.join(" · ");
    el.classList.add("is-ready");
  }

  var signal = typeof AbortSignal !== "undefined" && AbortSignal.timeout
    ? AbortSignal.timeout(8000)
    : undefined;

  fetch("https://countapi.mileshilliard.com/api/v1/hit/amrkz-nefertiti-releases-site-visits", { signal: signal })
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (data) {
      var n = numberValue(data && data.value);
      if (n !== null) visits = n;
      render();
    })
    .catch(function () {});

  fetch("https://api.github.com/repos/Amrkz/Nefertiti-releases/releases", { signal: signal })
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
