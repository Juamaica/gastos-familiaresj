// =========================================================
// ÚNICO ARCHIVO QUE DEBES EDITAR PARA CONECTAR TU PROYECTO
// =========================================================
// 1. Entra a tu proyecto en https://supabase.com
// 2. Ve a: Project Settings > API
// 3. Copia "Project URL" y pégalo en SUPABASE_URL
// 4. Copia "anon public key" y pégalo en SUPABASE_ANON_KEY
// =========================================================

(function () {
  const SUPABASE_URL = "sb_publishable_w9jMwlpfxl_4Vs6jOWOGKA__JW_a0z6";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjbWdjeHd6dXhqc2Fod2pnb2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2NTYwNTcsImV4cCI6MjEwMjIzMjA1N30.oDc3GdfW6d1pLxY91mw5I4_Gh6yNOkjIkWuoI5sT6gw";

  window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();
