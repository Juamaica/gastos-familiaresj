// =========================================================
// ÚNICO ARCHIVO QUE DEBES EDITAR PARA CONECTAR TU PROYECTO
// =========================================================
// 1. Entra a tu proyecto en https://supabase.com
// 2. Ve a: Project Settings > API
// 3. Copia "Project URL" y pégalo en SUPABASE_URL
// 4. Copia "anon public key" y pégalo en SUPABASE_ANON_KEY
// =========================================================

(function () {
  const SUPABASE_URL = "https://cdgdxxafylyoydvhplhq.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkZ2R4eGFmeWx5b3lkdmhwbGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2NjQ3NjIsImV4cCI6MjEwMjI0MDc2Mn0.Dgdz9s1N4sJ-8IW8R_md2HqnXa9pfQthwP0uxZYqY5s";

  window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();
