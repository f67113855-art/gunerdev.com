#!/bin/bash
# Cleanup step 2: kalan artiklari sil + sources.list inceleme

echo "=== chattr -i ile immutable flag temizle ==="
chattr -iaR /tmp/.ICEi-unix 2>&1 || true
chattr -ia /tmp/nodes 2>&1 || true
lsattr -d /tmp/.ICEi-unix 2>&1
lsattr /tmp/nodes 2>&1

echo
echo "=== Artiklari sil ==="
rm -rf /tmp/.ICEi-unix
rm -f /tmp/nodes
echo "OK"

echo
echo "=== /tmp final ==="
ls -la /tmp/

echo
echo "=== ct-preset.list ICERIK ==="
cat /etc/apt/sources.list.d/ct-preset.list 2>&1

echo
echo "=== nodesource.sources ICERIK ==="
cat /etc/apt/sources.list.d/nodesource.sources 2>&1

echo
echo "=== Tum apt sources.list.d ==="
ls -la /etc/apt/sources.list.d/

echo
echo "=== ct-preset-deb paketi kurulu mu? ==="
dpkg -l | grep ct-preset 2>&1 || echo "kurulu degil"
apt-cache policy ct-preset-deb 2>&1 | head -15

echo
echo "=== Outbound bagblantilar (mining pool olmamali) ==="
ss -tnp 2>&1 | grep -v 127.0.0.1 | head -10

echo
echo "=== CPU (temiz olmali) ==="
ps auxf --sort=-%cpu | head -5

echo
echo "=== systemd unit kontrolu ==="
systemctl list-unit-files --state=enabled 2>&1 | grep -iE 'kworker|ct-preset' || echo "TEMIZ"

echo
echo "DONE"
