import re

with open(r'd:\Kuliah\Magang\Web\Web Maksum\src\data\portfolioData.ts', 'r', encoding='utf-8') as f:
    c = f.read()

m = re.findall(r'assets/images/mined/', c)
print(f"Mined images in portfolioData.ts: {len(m)}")

with open(r'd:\Kuliah\Magang\Web\Web Maksum\dist\index.html', 'r', encoding='utf-8') as f:
    h = f.read()

m_dist = re.findall(r'assets/images/mined/', h)
print(f"Mined images in dist/index.html: {len(m_dist)}")
