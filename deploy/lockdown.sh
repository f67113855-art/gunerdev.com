#!/bin/bash
# Reinstall sonrasi ANINDA calistir: SSH key + password lockdown + ct-preset-deb disable
# Hedef: yeniden compromise olmamak icin saniyeler icinde password auth kapatmak.
set -e

echo "[1/4] SSH key ekleniyor..."
mkdir -p /root/.ssh
chmod 700 /root/.ssh
echo 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIBcVgb2YSAbrJ0TjTaL//TupdcuarxVezp2xj5MOBjx4 gunerdev-deploy' > /root/.ssh/authorized_keys
chmod 600 /root/.ssh/authorized_keys

echo "[2/4] Password auth kapatiliyor..."
cat > /etc/ssh/sshd_config.d/10-lockdown.conf <<EOF
PasswordAuthentication no
KbdInteractiveAuthentication no
ChallengeResponseAuthentication no
PubkeyAuthentication yes
PermitRootLogin prohibit-password
EOF
sshd -t
systemctl reload ssh || service ssh reload

echo "[3/4] ct-preset-deb timer disable + mask..."
systemctl disable --now ct-preset-deb.timer 2>/dev/null || true
systemctl mask ct-preset-deb.timer 2>/dev/null || true
systemctl mask ct-preset-deb.service 2>/dev/null || true

echo "[4/4] Dogrulama..."
sshd -T | grep -E '^(passwordauthentication|kbdinteractiveauthentication|pubkeyauthentication|permitrootlogin)'
echo
echo "=== LOCKDOWN DONE ==="
echo "Su andan itibaren sadece SSH key auth calisir."
echo "Test: yeni terminalden 'ssh -i ~/.ssh/gunerdev_deploy root@104.247.173.144' calismali."
