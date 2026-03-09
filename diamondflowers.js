document.addEventListener("DOMContentLoaded", async function () {
  if (document.getElementById("contactPopup")) return;

  const ASSET_BASE = "https://cdn.jsdelivr.net/gh/USERNAME/REPO";

  try {
    const res = await fetch(`${ASSET_BASE}/diamondflowers.html`);
    const html = await res.text();

    document.body.insertAdjacentHTML("beforeend", html);

    var o = document.getElementById("overlay");
    var p = document.getElementById("contactPopup");
    var b = document.getElementById("quickContactFloating");
    var c = document.getElementById("popupClose");

    function openPop(e) {
      if (e) e.preventDefault();
      o.style.display = "block";
      p.style.display = "block";
      setTimeout(function () {
        o.style.opacity = "1";
        p.style.opacity = "1";
        p.style.transform = "translate(-50%,-50%) scale(1)";
      }, 10);
    }

    function closePop() {
      o.style.opacity = "0";
      p.style.opacity = "0";
      p.style.transform = "translate(-50%,-50%) scale(.92)";
      setTimeout(function () {
        o.style.display = "none";
        p.style.display = "none";
      }, 300);
    }

    if (b) b.addEventListener("click", openPop);
    if (c) c.addEventListener("click", closePop);
    if (o) o.addEventListener("click", closePop);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closePop();
    });
  } catch (err) {
    console.error("Diamond Flowers assets failed to load:", err);
  }
});
