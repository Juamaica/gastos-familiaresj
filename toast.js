// ---------- TOAST (notificaciones) ----------
function mostrarToast(mensaje, tipo) {
  const toast = document.createElement("div");
  toast.className = `toast toast--${tipo === "error" ? "error" : "exito"}`;
  toast.textContent = mensaje;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
