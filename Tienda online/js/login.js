const logeado = false;
function getCookie(name) {
  const target = encodeURIComponent(name) + "=";
  return document.cookie.split("; ").reduce((acc, c) => {
    if (c.startsWith(target)) return decodeURIComponent(c.substring(target.length));
    return acc;
  }, null);
}

(function init() {
  const usuario = getCookie("username");
  const password = getCookie("password");
  const login = document.getElementById("logeado-exito");
  const fallo = document.getElementById("fallo-logear");
  const user = document.getElementById("userlog").value.trim();
  const pass = document.getElementById("passlog").value.trim();
  
  if(user != usuario) {
    logeado = false;
    fallo.hidden = false;
    setTimeout(() => (window.location.reload()), 2000);
  } else {
    logeado = true;
    login.hidden = false;
    setTimeout(() => (window.location.href = "index.html"), 2000);
  }
  if(pass != password) {
    logeado = false;
    fallo.hidden = false;
    setTimeout(() => (window.location.reload()), 2000);
  } else {
    logeado = true;
    login.hidden = false;
    setTimeout(() => (window.location.href = "index.html"), 2000);
  }
})();