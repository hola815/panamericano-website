#!/bin/bash
# Build script für Netlify Drop

echo "🔨 Starte Build..."
cd "$(dirname "$0")"

/usr/local/bin/npm run build

if [ -d "out" ]; then
  echo ""
  echo "✅ Build erfolgreich! Ordner 'out' wurde erstellt."
  echo "👉 Jetzt den Ordner 'out' auf app.netlify.com/drop ziehen."
  open .
else
  echo ""
  echo "❌ Build fehlgeschlagen. Fehlermeldung oben prüfen."
fi
