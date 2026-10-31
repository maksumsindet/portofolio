import sys

path = r'd:\Kuliah\Magang\Web\Web Maksum\src\components\ProgramsShowcase.astro'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

old_prog = '''  {
    category: "Pemberdayaan Masyarakat",
    title: "PPK Ormawa SEGARA",
    subtitle: "Sentra Gerak Agromina",
    role: "Ketua Tim Pelaksana",
    description: "Program nasional Kemdiktisaintek RI mengoordinasikan lima pilar terintegrasi (Madya, Karya, Daya, Raya, Lestari) guna memberdayakan 6 kelompok pembudidaya ikan pengelola 224 kolam budidaya.",
    image: `${base}assets/images/portfolio/uny-dscf0754.jpg`,
    link: "#media",
    tag: "Terbaik 2 Nasional"
  },'''

new_prog = '''  {
    category: "Pemberdayaan Masyarakat",
    title: "PPK Ormawa SEGARA",
    subtitle: "Sentra Gerak Agromina Sidoagung",
    role: "Ketua Tim Pelaksana (Team Leader)",
    description: "Dipercaya sebagai Ketua Tim Pelaksana memimpin 14 mahasiswa lintas disiplin FMIPA UNY, berkolaborasi dengan Pemkab Sleman dan 20 Dinas dalam mengoordinasikan lima pilar terintegrasi (Madya, Karya, Daya, Raya, Lestari) guna memberdayakan 6 kelompok pembudidaya pengelola 224 kolam budidaya.",
    image: `${base}assets/images/portfolio/uny-dscf0754.jpg`,
    link: "#media",
    tag: "Ketua Tim Pelaksana • Juara 2 Nasional"
  },'''

old_cine = '''            <div class="accent-lead-wrap">
              <span class="accent-rule"></span>
              <span class="lead-phrase">Turn Insight Into Action</span>
            </div>
            <h3 class="cinematic-heading">
              Mengubah Wawasan Menjadi <span class="headline-gold">Aksi Nyata</span>
            </h3>
            <p class="cinematic-sub">
              Kolaborasi strategis multi-pihak antara Ormawa, FMIPA UNY, Pemkab Sleman, dan 20 Dinas dalam menggerakkan potensi lokal perikanan Kalurahan Sidoagung.
            </p>'''

new_cine = '''            <div class="accent-lead-wrap">
              <span class="accent-rule"></span>
              <span class="lead-phrase">Kepemimpinan Lapangan & Orkestrasi Dampak</span>
            </div>
            <h3 class="cinematic-heading">
              Ketua Tim Pelaksana: <span class="headline-gold">PPK Ormawa SEGARA</span>
            </h3>
            <p class="cinematic-sub">
              Sebagai <strong>Ketua Tim Pelaksana</strong>, Muhammad Dahron memimpin 14 mahasiswa lintas disiplin FMIPA UNY mengorkestrasi kolaborasi multi-pihak bersama Kalurahan Sidoagung, Pemkab Sleman, dan 20 Dinas guna mentransformasi 224 kolam budidaya perikanan hingga sukses meraih Terbaik 2 Nasional Abdidaya Ormawa 2026.
            </p>'''

c_lf = c.replace('\r\n', '\n')
if old_prog in c_lf and old_cine in c_lf:
    c_lf = c_lf.replace(old_prog, new_prog)
    c_lf = c_lf.replace(old_cine, new_cine)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c_lf)
    print("Success: ProgramsShowcase.astro updated!")
else:
    print("Error: String patterns not matched")

