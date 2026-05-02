#!/usr/bin/env bash
set -euo pipefail

# VPS üzerinde çalıştırılacak deploy script'i
# Kullanım: bash deploy/deploy.sh

APP_DIR="${APP_DIR:-/var/www/gunerdev}"
APP_NAME="gunerdev"
NODE_ENV="production"

cd "$APP_DIR"

echo "==> Son değişiklikler çekiliyor"
git fetch --all --prune
git reset --hard origin/main

echo "==> Bağımlılıklar yükleniyor"
npm ci --omit=dev=false

echo "==> Production build alınıyor"
npm run build

echo "==> Log klasörü hazırlanıyor"
mkdir -p logs

if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  echo "==> Uygulama yeniden yükleniyor (zero-downtime)"
  pm2 reload ecosystem.config.js --update-env
else
  echo "==> Uygulama ilk kez başlatılıyor"
  pm2 start ecosystem.config.js
fi

pm2 save

echo "==> Deploy tamamlandı"
pm2 status
