#!/bin/bash
# Derin tarama - ct-preset-deb ve diger suspect unitleri incele

echo "==================== MINER PROCESS DETAILS ===================="
echo "--- /proc/11131/exe ---"
readlink /proc/11131/exe 2>&1
ls -la /proc/11131/exe 2>&1
echo "--- /proc/11131/comm ---"
cat /proc/11131/comm 2>&1
echo "--- /proc/11131/cmdline (hexdump first 200 bytes) ---"
xxd /proc/11131/cmdline 2>&1 | head -10
echo "--- /proc/11131/cwd ---"
readlink /proc/11131/cwd 2>&1
echo "--- /proc/11131/root ---"
readlink /proc/11131/root 2>&1
echo "--- /proc/11131/maps (first 30 lines) ---"
head -30 /proc/11131/maps 2>&1
echo "--- /proc/11131/environ (printable) ---"
tr '\0' '\n' < /proc/11131/environ 2>&1 | head -20

echo
echo "==================== ct-preset-deb.service ===================="
systemctl cat ct-preset-deb.service 2>&1
echo
echo "--- status ---"
systemctl status ct-preset-deb.service --no-pager 2>&1 | head -20

echo
echo "==================== ct-preset-deb.timer ===================="
systemctl cat ct-preset-deb.timer 2>&1
echo
echo "--- status ---"
systemctl status ct-preset-deb.timer --no-pager 2>&1 | head -20

echo
echo "==================== kworker.service ===================="
systemctl cat kworker.service 2>&1

echo
echo "==================== sudo.service ===================="
systemctl cat sudo.service 2>&1

echo
echo "==================== syslog.service ===================="
systemctl cat syslog.service 2>&1

echo
echo "==================== ENABLED TIMERS ===================="
systemctl list-timers --all --no-pager 2>&1

echo
echo "==================== ALL ENABLED SERVICES (non-default) ===================="
systemctl list-unit-files --type=service --state=enabled --no-pager 2>&1 | grep -vE 'cron|ssh|nginx|networkd|resolved|timesync|cloud|landscape|getty|console|pollinate|fail2ban|dpkg|apparmor|polkit|dbus|rsyslog|man-db|unattended|update-notifier|udev|user@|systemd-' | head -30

echo
echo "==================== /proc/1/environ ===================="
tr '\0' '\n' < /proc/1/environ 2>&1 | head -10

echo
echo "==================== /etc/systemd/system FULL LIST ===================="
ls -la /etc/systemd/system/ 2>&1

echo
echo "==================== /etc/init.d ===================="
ls -la /etc/init.d/ 2>&1

echo
echo "==================== /etc/rc.local ===================="
cat /etc/rc.local 2>&1

echo
echo "==================== JOURNAL ETRAFINDA KOMPROMIZE (2026-05-15 03:00 - 03:40) ===================="
journalctl --since '2026-05-15 03:00:00' --until '2026-05-15 03:40:00' --no-pager 2>&1 | head -80

echo
echo "==================== MAY 14 - 15 BOOT LOG ===================="
journalctl --list-boots --no-pager 2>&1 | head -10
echo "--- first boot log ---"
journalctl -b 0 --no-pager 2>&1 | head -50

echo
echo "==================== SYSLOG HELPER BINARY ===================="
ls -la /usr/local/bin/syslog* /usr/bin/syslog-helper /usr/sbin/syslog-helper 2>&1
which syslog-helper 2>&1
find / -name 'syslog-helper*' 2>/dev/null | head -10
find / -name 'syslog-ng-d*' 2>/dev/null | head -10

echo
echo "==================== DONE ===================="
