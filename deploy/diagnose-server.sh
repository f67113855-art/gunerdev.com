#!/bin/bash
# Compromise diagnostic for gunerdev.com VPS
# Run as: bash diagnose-server.sh

echo "==================== IMMUTABLE FLAGS ===================="
lsattr /root/.bashrc /root/.profile /etc/profile /etc/bash.bashrc 2>&1

echo
echo "==================== FILE MTIMES ===================="
stat -c '%y  %n' /root/.bashrc /root/.profile /etc/profile /etc/bash.bashrc /root/.ssh/authorized_keys /etc/passwd /etc/shadow /etc/sudoers 2>&1

echo
echo "==================== LOGIN HISTORY ===================="
last -n 20

echo
echo "==================== FAILED LOGINS (lastb) ===================="
lastb -n 15 2>/dev/null | head -25 || echo "no btmp"

echo
echo "==================== AUTH LOG (last 50 lines) ===================="
journalctl -u ssh -n 50 --no-pager 2>/dev/null | tail -40 || tail -40 /var/log/auth.log 2>/dev/null || echo "no auth log"

echo
echo "==================== ALL CRON ===================="
ls -la /etc/cron.d/ /var/spool/cron/ /var/spool/cron/crontabs/ 2>&1
echo "--- /etc/crontab ---"
cat /etc/crontab 2>&1
echo "--- cron.d contents ---"
grep -rH . /etc/cron.d/ 2>&1
echo "--- spool cron contents ---"
grep -rH . /var/spool/cron/ 2>&1

echo
echo "==================== USERS WITH SHELL ===================="
grep -E ':/bin/bash|:/bin/sh|:/bin/zsh' /etc/passwd

echo
echo "==================== SUDOERS ===================="
ls -la /etc/sudoers.d/ 2>&1
grep -RH NOPASSWD /etc/sudoers /etc/sudoers.d/ 2>&1

echo
echo "==================== AUTHORIZED KEYS ===================="
cat /root/.ssh/authorized_keys

echo
echo "==================== SUSPICIOUS BINARIES (eski malware'den) ===================="
ls -la /usr/bin/ps1 /usr/bin/softirq /usr/bin/systemtd /usr/bin/ccphxb /etc/init.d/rondo /etc/rondo 2>&1

echo
echo "==================== TMP HIDDEN ===================="
ls -la /tmp/ 2>&1 | grep -E '^\.\?|^d|.\.[A-Za-z]' | head -20
ls -la /tmp/.ICEi-unix /tmp/.X291-unix /tmp/.x /tmp/.xc /tmp/let 2>&1

echo
echo "==================== SYSTEMD SERVICES ===================="
ls /etc/systemd/system/ 2>&1 | grep -vE '^(multi-user|graphical|default|sysinit|cloud)' | head -30

echo
echo "==================== SHADOW SYSTEMD-BACKUP DIRS ===================="
ls -la /var/lib/.systemd-backup /usr/local/share/.systemd-backup 2>&1

echo
echo "==================== LISTENING SOCKETS ===================="
ss -tnlp 2>&1 | head -20

echo
echo "==================== OUTBOUND CONNECTIONS ===================="
ss -tnp 2>&1 | head -20

echo
echo "==================== TOP CPU PROCESSES ===================="
ps auxf --sort=-%cpu | head -15

echo
echo "==================== SUSPICIOUS PROCESSES ===================="
pgrep -fa 'kworker|tmp/.x|xmrig|amco_|rondo|pakchoi' || echo "none"

echo
echo "==================== OS / KERNEL ===================="
cat /etc/os-release | head -5
uname -a
uptime

echo
echo "==================== DONE ===================="
