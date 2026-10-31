// Selmex Order Tracker settings. Upload this file to GitHub next to index.html.
// NOTE: this file is public on GitHub Pages. That is fine for now (agreed), but keep the AI key
// restricted / with a spending limit, and move it to a server function later.
window.APP_CONFIG = {
  SUPABASE_URL: "https://clyqzlyltamuuqfnrvys.supabase.co",
  SUPABASE_KEY: "PASTE_SUPABASE_ANON_KEY_HERE",   // the same anon key as in your old index.html

  AI_PROVIDER: "gemini",                         // "gemini" or "claude"
  AI_KEY: "PASTE_AI_API_KEY_HERE",
  AI_MODEL: "gemini-2.5-flash"                   // for Claude use e.g. "claude-sonnet-5-5"
};
