// Selmex Order Tracker settings. Upload this file to GitHub next to index.html.
// NOTE: this file is public on GitHub Pages. That is fine for now (agreed), but keep the AI key
// restricted / with a spending limit, and move it to a server function later.
window.APP_CONFIG = {
  SUPABASE_URL: "https://clyqzlyltamuuqfnrvys.supabase.co",
  SUPABASE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNseXF6bHlsdGFtdXVxZm5ydnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4MjQ4MjQsImV4cCI6MjEwODQwMDgyNH0.QBVQnqwmYKKu9ICwcpFYmUJSJWiZBs2KDqoGmTTEv98",   // the same anon key as in your old index.html

  AI_PROVIDER: "gemini",                         // "gemini" or "claude"
  AI_KEY: "PASTE_AI_API_KEY_HER",
  AI_MODEL: "gemini-2.5-flash"                   // for Claude use e.g. "claude-sonnet-5-5"
};
