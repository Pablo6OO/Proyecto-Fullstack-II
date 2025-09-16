// Cookie helpers (simples y locales a este archivo)
function setCookie(name, value, maxAgeSec) {
  const expiresAt = Date.now() + maxAgeSec * 1000;
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Max-Age=${maxAgeSec}; Path=/; SameSite=Lax`;
  document.cookie = `${encodeURIComponent(name)}_expires=${expiresAt}; Max-Age=${maxAgeSec}; Path=/; SameSite=Lax`;
}

function getCookie(name) {
  const target = encodeURIComponent(name) + "=";
  return document.cookie.split("; ").reduce((acc, c) => {
    if (c.startsWith(target)) return decodeURIComponent(c.substring(target.length));
    return acc;
  }, null);
}

(function init() {
  // Si ya hay username, sugiere ir a perfil
  const msg = document.getElementById("msg");
  const existing = getCookie("username");
  if (existing) {
    msg.textContent = `Ya tenemos tu nombre (“${existing}”). Puedes ir a comprar en la tienda.`;
  }

  // Manejo del form: guarda cookie y redirige
  const form = document.getElementById("form-username");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("usernamesign").value.trim();
    const password = document.getElementById("passwordsign").value.trim();
    if (!username) {
      msg.textContent = "Por favor, escribe un usuario válido.";
      return;
    }
    if (!password){
        msg.textContent = "Por favor, escribe una contraseña valida";
        return;
    }
    setCookie("password", password, 60 * 5); //5 Minutos
    setCookie("username", username, 60 * 5); //5 Minutos
    msg.textContent = "Usuario completo guardado en cookie";
    // Redirige a login
    setTimeout(() => (window.location.href = "login.html"), 2000);
  });
})();