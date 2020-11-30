d:
cd "D:\"
nssm.exe install "Remonubefront" "D:\Remonubefront.exe" AppDirectory "D:\" DisplayName "Remonubefront" ObjectName "administrador" "BASEWARE" Start SERVICE_AUTO_START
nssm start "Interface"
