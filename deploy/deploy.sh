#!/usr/bin/env bash
set -euo pipefail

# VPS uzerinde calistirilacak deploy script'i.
# Hazir Next.js standalone artifact'ini /tmp/gunerdev-release.tar.gz uzerinden alir,
# uygulamayi acar ve PM2 ile yeniden yukler. RAM gerektiren build adimi runner'da yapilir.

APP_DIR="${APP_DIR:-/var/www/gunerdev}"
APP_NAME="gunerdev"
RELEASE_TAR="/tmp/gunerdev-release.tar.gz"

if [ ! -f "$RELEASE_TAR" ]; then
  echo "ERROR: $RELEASE_TAR bulunamadi. Workflow scp adimi calismadi mi?"
  exit 1
fi

mkdir -p "$APP_DIR"
cd "$APP_DIR"

echo "==> Eski standalone artifact'leri temizleniyor"
rm -rf node_modules .next public server.js

echo "==> Yeni release aciliyor"
tar xzf "$RELEASE_TAR" -C "$APP_DIR"

echo "==> Log klasoru hazirlaniyor"
mkdir -p logs

echo "==> PM2 ile uygulama baslatiliyor / yeniden yukleniyor"
if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  # script: 'next' -> 'server.js' gecisi reload ile uyumsuz olabilir;
  # bu durumda delete + start ile temiz baslatilir.
  if ! pm2 reload ecosystem.config.js --update-env; then
    echo "==> Reload basarisiz; delete + start ile temiz baslatiliyor"
    pm2 delete "$APP_NAME" || true
    pm2 start ecosystem.config.js
  fi
else
  pm2 start ecosystem.config.js
fi

pm2 save

echo "==> Temizlik"
rm -f "$RELEASE_TAR"

echo "==> Deploy tamamlandi"
pm2 status
