#!/bin/bash
set -e

# Bootstrap nginx config (HTTP-only for ACME)
cat > /etc/nginx/sites-available/gunerdev.com <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name gunerdev.com www.gunerdev.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 200 "bootstrap";
    }
}
EOF

# Reload nginx with bootstrap config
nginx -t
systemctl reload nginx

# Test ACME endpoint reachable
mkdir -p /var/www/certbot/.well-known/acme-challenge
echo "test123" > /var/www/certbot/.well-known/acme-challenge/test
echo "=== Local ACME test ==="
curl -s http://localhost/.well-known/acme-challenge/test
echo

# Obtain certificate
echo "=== Running certbot ==="
certbot certonly --webroot -w /var/www/certbot \
  -d gunerdev.com -d www.gunerdev.com \
  --non-interactive --agree-tos \
  --email f67113855@gmail.com -v 2>&1 | tail -60

# Cleanup test file
rm -f /var/www/certbot/.well-known/acme-challenge/test

# Show cert state
echo "=== Final cert state ==="
ls -la /etc/letsencrypt/live/ 2>&1 || echo "no live dir"
ls -la /etc/letsencrypt/live/gunerdev.com/ 2>&1 || echo "no domain dir"
