# Gunerdev — Kurumsal Web Sitesi

Hızlı, ölçeklenebilir ve modern web uygulamaları geliştiren kurumsal yazılım ekibi `gunerdev.com` için geliştirilmiş üretim hazırı kurumsal web sitesi.

## Özellikler

- **Next.js 15 (App Router)** + **React 18** + **TypeScript (strict)**
- **TailwindCSS** ile koyu tema, kurumsal tasarım sistemi
- **Framer Motion** ile minimal, ölçülü animasyonlar
- Tam **SSR/SEO** desteği — `sitemap.xml`, `robots.txt`, OpenGraph, Twitter Card
- **Erişilebilirlik** (semantic HTML, ARIA, klavye navigasyonu, skip-to-content)
- **İletişim formu** + sunucu tarafı doğrulama + IP bazlı rate limit (harici servis bağımlılığı yok)
- **VPS** için hazır: standalone build, **PM2 cluster**, **NGINX** reverse proxy konfigürasyonu
- **Tamamen Türkçe** içerik

## Proje Yapısı

```
.
├── app/
│   ├── layout.tsx               # Root layout (font, metadata, navbar, footer)
│   ├── page.tsx                 # Anasayfa (Hero, Services, Process, Why Us, CTA)
│   ├── about/page.tsx           # Hakkımızda (Vizyon, Misyon, İlkeler, Değerler)
│   ├── services/page.tsx        # Hizmetler (6 servis, detaylı)
│   ├── projects/page.tsx        # Projeler (case study formatı)
│   ├── contact/page.tsx         # İletişim (form + kanallar)
│   ├── api/contact/route.ts     # POST /api/contact (validation + rate limit)
│   ├── not-found.tsx            # 404
│   ├── sitemap.ts               # /sitemap.xml
│   └── robots.ts                # /robots.txt
│
├── components/                  # Tüm UI bileşenleri (Navbar, Footer, Hero, vb.)
├── lib/                         # site config, SEO helper, validation, rate limit, utils
├── styles/globals.css           # Tema değişkenleri, base stiller
├── public/                      # Statik dosyalar
├── deploy/
│   ├── nginx.conf               # Üretim NGINX konfigürasyonu
│   └── deploy.sh                # VPS deploy scripti
├── ecosystem.config.js          # PM2 cluster konfigürasyonu
├── next.config.js               # standalone output, güvenlik başlıkları
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Yerel Geliştirme

### Gereksinimler

- **Node.js >= 18.18**
- **npm** (veya pnpm/yarn — komutları uyarlayın)

### Kurulum

```bash
git clone <repo-url> gunerdev
cd gunerdev
cp .env.example .env.local
npm install
```

### Komutlar

```bash
npm run dev         # http://localhost:3000 (geliştirme)
npm run build       # üretim derlemesi
npm run start       # üretim sunucusu (port 3000)
npm run lint        # eslint
npm run typecheck   # TypeScript tip kontrolü
```

---

## Üretim Build

```bash
npm ci
npm run build
```

Build çıktısı `.next/` altına alınır. `next.config.js` içinde `output: 'standalone'` ayarı vardır; bu sayede `node .next/standalone/server.js` ile minimum bağımlılıkla da çalıştırılabilir. Ancak aşağıdaki PM2 + NGINX kurulumunda standart `next start` modu kullanılmaktadır.

---

## VPS Üzerinde Üretim Kurulumu

Aşağıdaki adımlar Ubuntu 22.04+ / Debian 12+ için yazılmıştır.

### 1. Sunucu Hazırlığı (root olarak)

```bash
# Sistem güncelleme
apt update && apt upgrade -y

# Node.js 20.x (NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Build araçları
apt install -y git build-essential

# NGINX
apt install -y nginx

# PM2 (global)
npm install -g pm2

# UFW firewall
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
```

### 2. Uygulama Kullanıcısı (önerilir)

```bash
adduser --disabled-password --gecos "" deploy
usermod -aG sudo deploy
mkdir -p /var/www/gunerdev
chown -R deploy:deploy /var/www/gunerdev
su - deploy
```

### 3. Uygulamanın Yerleştirilmesi

```bash
cd /var/www/gunerdev
git clone <repo-url> .
cp .env.example .env.local
# .env.local dosyasını düzenleyin

npm ci
npm run build
mkdir -p logs
```

### 4. PM2 ile Başlatma

```bash
# İlk başlatma
pm2 start ecosystem.config.js

# Boot sırasında otomatik başlatma
pm2 save
pm2 startup systemd
# Çıkan komutu root olarak çalıştırın
```

PM2 yararlı komutlar:

```bash
pm2 status                  # uygulama durumu
pm2 logs gunerdev           # canlı log
pm2 logs gunerdev --lines 200
pm2 restart gunerdev        # restart
pm2 reload gunerdev         # zero-downtime reload
pm2 stop gunerdev           # durdur
pm2 delete gunerdev         # sil
pm2 monit                   # interaktif monitor
```

### 5. NGINX Konfigürasyonu

`deploy/nginx.conf` dosyasını sunucuya kopyalayın:

```bash
# root olarak
cp /var/www/gunerdev/deploy/nginx.conf /etc/nginx/sites-available/gunerdev.com
ln -s /etc/nginx/sites-available/gunerdev.com /etc/nginx/sites-enabled/gunerdev.com

# Default siteyi devre dışı bırak (opsiyonel)
rm -f /etc/nginx/sites-enabled/default

nginx -t
systemctl reload nginx
```

### 6. SSL Sertifikası (Let's Encrypt)

```bash
apt install -y certbot python3-certbot-nginx

certbot --nginx \
  -d gunerdev.com \
  -d www.gunerdev.com \
  --non-interactive --agree-tos -m iletisim@gunerdev.com

# Otomatik yenileme (certbot timer'ı kendiliğinden ekler)
systemctl status certbot.timer
```

> Not: `deploy/nginx.conf` dosyası HTTPS bloğunu hazır içerir. Eğer certbot dosyayı düzenlemekte zorlanırsa, certbot çalıştırmadan önce HTTPS bloğunu yorumlayın; sertifika alındıktan sonra geri yükleyin.

---

## Sonraki Deploy'lar (güncelleme)

```bash
ssh deploy@sunucu
cd /var/www/gunerdev
bash deploy/deploy.sh
```

`deploy/deploy.sh` şu adımları otomatize eder:

1. `git pull` (origin/main)
2. `npm ci`
3. `npm run build`
4. `pm2 reload` (zero-downtime)
5. `pm2 save`

### CI/CD ile (opsiyonel)

GitHub Actions örneği:

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USER }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /var/www/gunerdev
            bash deploy/deploy.sh
```

---

## Çevre Değişkenleri

`.env.example` dosyasını referans alın. Üretim için en az şunlar gereklidir:

| Değişken | Açıklama |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical, OG ve sitemap URL'i |
| `NODE_ENV` | `production` |

Kurulum dosyaları yoksa `lib/site.ts` içindeki `site.url` varsayılanı kullanılır.

---

## SEO ve Performans Notları

- Tüm sayfaların özel `<title>` ve `<description>` etiketi vardır (`buildMetadata`)
- `app/sitemap.ts` ile dinamik `/sitemap.xml`
- `app/robots.ts` ile `/api/*` arama motoruna kapalı
- Statik varlıklar NGINX tarafından `Cache-Control: public, max-age=31536000, immutable` ile sunulur
- Görseller Next/Image optimizasyonuna hazır (WebP / AVIF varsayılan)
- Core Web Vitals odaklı: minimal JS, ölçülü animasyon, font-display: swap

---

## Lisans

Bu proje gunerdev.com'a özeldir. İçerik ve marka kullanımı izne tabidir.
