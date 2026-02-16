
(function(){
  const now = new Date();
  const el = document.getElementById("lastUpdate");
  if (el) el.textContent = now.toLocaleString();
})();
