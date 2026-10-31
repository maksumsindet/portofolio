import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request("https://maksumsindet.github.io/portofolio/", headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req, context=ctx) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

print("Contains AgriAlert:", "AgriAlert" in html)
print("Contains SEC_:", "SEC_" in html)
print("Contains GEMASTIK:", "GEMASTIK" in html)
print("Contains evidence-visual-col:", "evidence-visual-col" in html)
print("Contains segara-banner-sidoagung:", "segara-banner-sidoagung" in html)
