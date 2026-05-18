#!/bin/bash
# Aktif compromise temizligi.
# Sira KRITIK: 1) password auth kapat (yeni saldiri durur) -> 2) persistence iptal -> 3) miner kill -> 4) dosya temizlik

echo "=========================================="
echo "[1/6] PASSWORD AUTH KAPATILIYOR"
echo "=========================================="
cat > /etc/ssh/sshd_config.d/10-lockdown.conf <<EOF
PasswordAuthentication no
KbdInteractiveAuthentication no
ChallengeResponseAuthentication no
PubkeyAuthentication yes
PermitRootLogin prohibit-password
EOF
if sshd -t; then
    systemctl reload ssh || service ssh reload
    echo "OK: sshd reload"
    sshd -T | grep -E '^(passwordauthentication|kbdinteractiveauthentication|pubkeyauthentication|permitrootlogin)'
else
    echo "HATA: sshd config validation basarisiz. Lockdown conf siliniyor."
    rm /etc/ssh/sshd_config.d/10-lockdown.conf
    exit 1
fi

echo
echo "=========================================="
echo "[2/6] MALWARE SYSTEMD UNIT DISABLE"
echo "=========================================="
systemctl stop kworker.service 2>/dev/null || true
systemctl disable kworker.service 2>/dev/null || true
systemctl mask kworker.service 2>/dev/null || true
rm -f /etc/systemd/system/kworker.service
rm -f /etc/systemd/system/multi-user.target.wants/kworker.service

systemctl stop ct-preset-deb.timer 2>/dev/null || true
systemctl disable ct-preset-deb.timer 2>/dev/null || true
systemctl mask ct-preset-deb.timer 2>/dev/null || true
systemctl mask ct-preset-deb.service 2>/dev/null || true

systemctl daemon-reload
echo "OK: kworker.service + ct-preset-deb iptal"

echo
echo "=========================================="
echo "[3/6] MINER PROCESSLERI OLDURULUYOR"
echo "=========================================="
# Miner ve helper
pkill -9 -f 'syslog-ng-d' && echo "killed: syslog-ng-d" || echo "yok: syslog-ng-d"
pkill -9 -f 'bin syslog-helper' && echo "killed: syslog-helper" || echo "yok: syslog-helper"
sleep 2
echo "Dogrulama (bos olmali):"
ps auxf | grep -E 'syslog-ng-d|syslog-helper|tmp/\.x' | grep -v grep || echo "TEMIZ"

echo
echo "=========================================="
echo "[4/6] MALWARE DOSYALARI SILINIYOR"
echo "=========================================="
rm -rf /usr/share/man/man3/.syslog-085760bf/
rm -rf /tmp/.ICEi-unix
rm -rf /tmp/.X291-unix
rm -f  /tmp/.x.tgz /tmp/1.json /tmp/.x /tmp/.xc /tmp/.ct /tmp/let
echo "OK: hidden dir + /tmp malware silindi"

echo
echo "=========================================="
echo "[5/6] SHELL INIT + CRONTAB TEMIZLIK"
echo "=========================================="
for f in /root/.bashrc /root/.profile /etc/profile /etc/bash.bashrc; do
    if grep -q 'tmp/\.x' "$f"; then
        sed -i '/pgrep -f \/tmp\/\.x/d' "$f"
        echo "Cleaned: $f"
    else
        echo "Zaten temiz: $f"
    fi
done

if crontab -l 2>/dev/null | grep -q XMRMARK; then
    crontab -r
    echo "Root crontab silindi (sadece malware iceriyordu)"
else
    echo "Root crontab zaten temiz"
fi

echo
echo "=========================================="
echo "[6/6] FINAL DOGRULAMA"
echo "=========================================="
echo
echo "--- Shell init (malware satiri olmamali) ---"
grep -HnE 'tmp/\.x|kworker/0:2' /root/.bashrc /root/.profile /etc/profile /etc/bash.bashrc 2>/dev/null && echo "!!! HALA KIRLI" || echo "TEMIZ"

echo
echo "--- /tmp icerigi ---"
ls -la /tmp/

echo
echo "--- Active miner check ---"
ps auxf | grep -E 'syslog-ng-d|syslog-helper|tmp/\.x' | grep -v grep || echo "TEMIZ"

echo
echo "--- /etc/ld.so.preload (yok olmali) ---"
[ -f /etc/ld.so.preload ] && cat /etc/ld.so.preload || echo "TEMIZ"

echo
echo "--- /etc/profile.d ---"
ls -la /etc/profile.d/

echo
echo "--- Apt sources (suspect repo var mi) ---"
cat /etc/apt/sources.list
ls /etc/apt/sources.list.d/ 2>/dev/null

echo
echo "--- Outbound connections (mining pool yok olmali) ---"
ss -tnp 2>/dev/null | grep -vE '127\.0\.0\.1|localhost|:22' | head -10

echo
echo "--- Top CPU (syslog-ng-d olmamali) ---"
ps auxf --sort=-%cpu | head -8

echo
echo "--- SSH config ---"
sshd -T | grep -E '^(passwordauthentication|pubkeyauthentication|permitrootlogin)'

echo
echo "=========================================="
echo "CLEANUP DONE"
echo "=========================================="
