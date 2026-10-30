# Portfolio Muhammad Dahron Mustofa Maksum (Astro)

Proyek website portofolio pribadi **Muhammad Dahron Mustofa Maksum** (Mahasiswa Statistika UNY, Data Analyst & Social Impact Enthusiast), dimigrasikan ke arsitektur modern berbasis [Astro](https://astro.build/).

---

## 🚀 Fitur & Keunggulan

- **Arsitektur Berbasis Komponen**: Kode modular dan terstruktur rapi di `src/components/` & `src/layouts/`.
- **Data-Driven Content**: Semua data profil, kemampuan, riwayat pengalaman, pendidikan, prestasi, serta tautan media dipisahkan di `src/data/portfolioData.ts` sehingga mudah diperbarui tanpa mengotori markup HTML.
- **Performa Kilat**: Static Site Generation (SSG) menghasilkan aset HTML & CSS yang dioptimasi dan sangat cepat diakses.
- **Interaktivitas Penuh**:
  - Background canvas interaktif partikel statistik (*Scatter plot & network graph style*) dengan interaksi mouse & klik/touch burst.
  - Smooth scrolling navigation & scrollspy aktif.
  - Animasi transisi elemen menggunakan Intersection Observer.
  - Tampilan responsif untuk desktop dan mobile dengan hamburger drawer menu.
- **Otomatisasi Deployment**: Dilengkapi dengan GitHub Actions (`.github/workflows/deploy.yml`) untuk deployment otomatis ke GitHub Pages.

---

## 📁 Struktur Direktori

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Otomasi build & deploy ke GitHub Pages
├── documents/                  # Berkas lokal privat (CV PDF, diabaikan Git)
├── public/                     # Aset statis publik
│   ├── .nojekyll               # Mencegah proses Jekyll di GitHub Pages
│   └── assets/                 # Aset gambar & logo terorganisir
│       ├── images/             # Foto profil & ilustrasi
│       └── logos/              # Logo instansi, organisasi, & mitra
├── src/
│   ├── components/             # Komponen Astro modular (MOMENTUM design)
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── ProgramsShowcase.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Skills.astro
│   │   ├── Education.astro
│   │   ├── Achievements.astro
│   │   ├── Projects.astro
│   │   ├── Media.astro
│   │   ├── Gallery.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── StatsCanvas.astro
│   ├── data/
│   │   └── portfolioData.ts    # Sumber data portofolio (Data-driven)
│   ├── layouts/
│   │   └── Layout.astro        # Layout dasar HTML & SEO meta tags
│   ├── pages/
│   │   └── index.astro         # Halaman utama
│   └── styles/
│       └── global.css          # Styling global
├── astro.config.mjs            # Konfigurasi Astro
├── package.json                # Dependensi & script NPM
└── tsconfig.json               # Konfigurasi TypeScript
```

---

## 🛠️ Panduan Perintah (Scripts)

| Perintah | Deskripsi |
| :--- | :--- |
| `npm install` | Memasang dependensi proyek |
| `npm run dev` | Menjalankan local development server (`http://localhost:4321/portofolio/`) |
| `npm run build` | Menghasilkan static build produksi di folder `dist/` |
| `npm run preview` | Meninjau hasil build produksi secara lokal |

---

## ✏️ Cara Mengubah / Memperbarui Konten

Untuk memperbarui isi portofolio (misalnya menambah pengalaman baru, artikel media baru, keahlian, atau kontak), cukup edit berkas:
👉 **`src/data/portfolioData.ts`**

Contoh:
- Ingin menambah prestasi baru: tambahkan objek baru ke dalam array `achievementsData`.
- Ingin menambah liputan media: tambahkan tautan baru pada kategori terkait di `mediaData`.
- Ingin mengubah bio atau kontak: ubah nilai pada objek `personalInfo`.

---

## 🌐 Deployment ke GitHub Pages

Proyek ini sudah dilengkapi dengan alur kerja **GitHub Actions** di `.github/workflows/deploy.yml`.

Untuk mengaktifkan deployment otomatis di GitHub:
1. Buka repositori Anda di GitHub: `https://github.com/maksumsindet/portofolio`
2. Masuk ke **Settings** > **Pages**.
3. Pada bagian **Build and deployment** > **Source**, pilih **GitHub Actions**.
4. Lakukan `git push` ke branch `main`. GitHub Actions akan otomatis membuild dan mempublikasikan situs ke GitHub Pages!
