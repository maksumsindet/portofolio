---
name: Portofolio Resmi Muhammad Dahron Mustofa Maksum
description: Statistisi, Analis Data, dan Penggerak Inovasi Sosial (Bernstein Editorial Design System)
colors:
  primary: "#C5A880"
  primary-hover: "#B8976C"
  gold-deep: "#8C6239"
  midnight-deep: "#0B101B"
  midnight: "#111827"
  midnight-card: "#182234"
  midnight-border: "#23314B"
  midnight-subtle: "#1E293B"
  cream-bg: "#FBF9F6"
  cream-card: "#FFFFFF"
  cream-border: "#E8E2D9"
  text-dark: "#0F172A"
  text-secondary: "#526071"
  text-light: "#F8FAFC"
  text-muted-light: "#CBD5E1"
  domain-sky: "#38bdf8"
  domain-violet: "#a78bfa"
  domain-amber: "#fb923c"
  domain-emerald: "#34d399"
  accent-green: "#10b981"
  gold-alt: "#c89d56"
  charcoal-bg: "#141416"
typography:
  display:
    fontFamily: "Gambarino, Georgia, serif"
    fontSize: "clamp(2.8rem, 1.6rem + 5vw, 5.2rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Gambarino, Georgia, serif"
    fontSize: "clamp(2rem, 1.3rem + 3.2vw, 3.8rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Gambarino, Georgia, serif"
    fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "General Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  label:
    fontFamily: "General Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
spacing:
  xs: "0.5rem"
  sm: "0.85rem"
  md: "1.25rem"
  lg: "2.5rem"
  xl: "6.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.midnight-deep}"
    rounded: "{rounded.xs}"
    padding: "0.9rem 1.9rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.midnight-deep}"
    rounded: "{rounded.xs}"
    padding: "0.9rem 1.9rem"
  button-navy:
    backgroundColor: "{colors.midnight-card}"
    textColor: "{colors.text-light}"
    rounded: "{rounded.xs}"
    padding: "0.9rem 1.9rem"
  card-dossier:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.text-light}"
    rounded: "{rounded.xl}"
    padding: "2.5rem 2.75rem"
---

# Design System: Portofolio Resmi Muhammad Dahron Mustofa Maksum

## Overview

**Creative North Star: "The Sovereign Academic Ledger"**

Sistem desain ini merayakan perpaduan antara ketajaman analitis data kuantitatif (*statistical precision*) dan martabat kepemimpinan sosial mahasiswa terbaik nasional. Mengadopsi estetika editorial *Bernstein*, antarmuka menyeimbangkan kanvas gelap yang intim dan berwibawa (*Executive Midnight Navy*) dengan kehangatan aksen emas sampanye (*Champagne Gold*) serta lembaran terang (*Alabaster Cream*) untuk dokumen publikasi.

Desain menolak secara tegas klise template teknologi generik: tidak ada gradien neon murah, tidak ada garis aksen samping (*side-tab tells*), tidak ada kartu bertumpuk (*nested cards*), dan tidak ada ikon tanpa pembuktian. Setiap keputusan visual mengabdi pada integritas bukti (*evidence-first*), keterbacaan tipografi editorial, dan akuntabilitas akademik.

**Key Characteristics:**
- **Otoritas Editorial:** Judul menggunakan *Gambarino Serif* yang dipadukan dengan *General Sans* geometris yang jernih dan mudah dipindai.
- **Palet Bernilai Tinggi:** Paduan *Midnight Navy* (`#0B101B`), *Champagne Gold* (`#C5A880`), dan teks berkontras tinggi memenuhi standar rasio WCAG AA ($\ge 4.5:1$).
- **Permukaan Terarah (*Craft Floor Compliance*):** Seleksi teks bertema emas, kursor bertema, ketiadaan tombol kapsul tak bermakna, dan angka tabular (`font-variant-numeric: tabular-nums`) untuk data statistik.

---

## Colors

Palet warna terinspirasi dari publikasi monograf ekonomi-statistik klasik dan arsitektur prestisius, menghadirkan kedalaman visual tanpa mengorbankan kejernihan data.

### Primary
- **Champagne Gold** (`#C5A880`): Digunakan sebagai aksen otoritas utama, tombol aksi primer, teks aksen terkurasi, dan status fokus keyboard.
- **Champagne Gold Hover** (`#B8976C`): Status interaksi aktif dan penekanan saat kursor melayang.
- **Gold Glow Subtle** (`rgba(197, 168, 128, 0.14)`): Digunakan untuk latar belakang lencana verifikasi dan sorotan metrik.

### Neutral
- **Executive Midnight Deep** (`#0B101B`): Latar belakang utama bagian atas (Hero, Navigasi) dan fondasi tema gelap berkelas.
- **Midnight Card Surface** (`#111827` / `#182234`): Permukaan kontainer dossier dan panel data dengan kontras yang terukur.
- **Midnight Border** (`#23314B` / `rgba(255, 255, 255, 0.1)`): Garis pembatas perimeter tipis 1px untuk mendefinisikan ruang secara elegan.
- **Alabaster Cream** (`#FBF9F6`): Latar belakang bagian editorial terang untuk meningkatkan daya tahan baca.
- **Text Dark Charcoal** (`#0F172A`): Warna teks primer pada permukaan terang.
- **Text Light Slate** (`#F8FAFC`): Warna teks primer pada permukaan gelap.
- **Text Secondary Slate** (`#526071` / `rgba(255, 255, 255, 0.75)`): Teks deskripsi dan metadata pendukung.

### Named Rules
**The Rarity of Gold Rule.** Aksen *Champagne Gold* dibatasi maksimal 10% dari luas permukaan tampilan visual mana pun. Nilai kemewahan dan otoritas emas hadir dari kelangkaannya, bukan dominasinya.

---

## Typography

**Display Font:** `Gambarino`, Georgia, serif  
**Body Font:** `General Sans`, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif  
**Accent/Script Font:** `Caveat`, cursive, sans-serif  

**Character:** Karakter tipografi mempertemukan ketegasan publikasi cetak prestisius (*Gambarino*) dengan keterbacaan teknis modern berskala komputasi (*General Sans*).

### Hierarchy
- **Display** (Regular 400, `clamp(2.8rem, 1.6rem + 5vw, 5.2rem)`, Line-height: 1.05, Tracking: -0.025em): Judul agung pada Hero section.
- **Headline** (Regular 400, `clamp(2rem, 1.3rem + 3.2vw, 3.8rem)`, Line-height: 1.15): Judul seksi utama portofolio.
- **Title** (Bold 700, `clamp(1.4rem, 2.5vw, 1.85rem)`, Line-height: 1.3): Judul berkas studi kasus dan proyek data.
- **Body** (Regular 400, `clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)`, Line-height: 1.65): Paragraf narasi dan ikhtisar eksekutif (lebar optimal 65–75ch).
- **Label** (Bold 700, `0.8125rem`, Letter-spacing: 0.08em, Uppercase): Kategori, tag alat/teknologi, dan nama institusi mitra.

### Named Rules
**The Balanced Heading Rule.** Setiap judul utama wajib menggunakan `text-wrap: balance` dan pelacakan huruf (*letter-spacing*) tidak melebihi `-0.03em`. Penekanan visual pada frasa penting dilakukan melalui penulisan miring (*italic*) atau perubahan bobot font, bukan dengan gradien warna.

---

## Layout

Tata letak mengadopsi model *editorial container* berpusat simetris dengan batasan lebar maksimum responsif:
- **Container Max-Width:** `1140px` untuk seksi studi kasus data; `1280px` untuk tata letak lebar.
- **Padding Seksi:** Vertikal `6.5rem`, horizontal `6%`–`8%` pada layar desktop; mengecil teratur menjadi `4rem 5%` pada layar ponsel cerdas.
- **Grid Metrik:** Grid 4 kolom simetris pada desktop (`repeat(4, 1fr)`), reflow menjadi 2 kolom pada tablet (`max-width: 900px`), dan 1 kolom pada ponsel (`max-width: 640px`).

---

## Elevation & Depth

Sistem mengutamakan *tonal layering* dan batas perimeter 1px daripada bayangan pekat yang mengapung artifisial.

### Shadow Vocabulary
- **Card Grounded Shadow** (`box-shadow: 0 16px 40px -8px rgba(0, 0, 0, 0.5)`): Digunakan pada kartu dossier studi kasus untuk memberikan jangkar kedalaman yang lembut.
- **Hover Micro-Elevation** (`box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55); transform: translateY(-2px)`): Transisi interaktif ketika kartu dossier disentuh kursor.

### Named Rules
**The Single Elevation Source Rule.** Elevasi dideklarasikan secara tunggal melalui kombinasi border perimeter tipis `1px` dan bayangan lembut ber-offset. Garis tepi tebal di satu sisi (*border-left/right > 1px*) dilarang keras.

---

## Shapes

- **Radius Skala Teratur:**
  - Tombol Utama & Input: `4px` (gaya *Bernstein* yang kokoh dan presisi).
  - Lencana & Tag Kategori: `6px` (proporsional tanpa kesan membulat kekanak-kanakan).
  - Kotak Ringkasan & Kartu Metrik: `10px`–`12px`.
  - Kartu Dossier Penuh: `16px`.
- **Form Geometry:** Menghindari sudut membulat kapsul ekstrem (`999px`) kecuali untuk elemen navigasi lingkaran atau tombol kontrol mikro.

---

## Components

### Buttons
- **Primary (`.btn-gold`):** Latar belakang `{colors.primary}`, teks `{colors.midnight-deep}`, padding `0.9rem 1.9rem`, radius `4px`.
- **Navy Outline (`.btn-navy-outline`):** Latar belakang `{colors.midnight-card}`, teks putih, border tipis, transisi `translateY(-2px)`.
- **Focus States:** Wajib memiliki ring `:focus-visible` sebesar `2px solid {colors.primary}` dengan offset `2px`.

### Cards (Dossier Proyek Data)
- **Container:** Latar belakang `rgba(26, 26, 30, 0.94)`, border `1px solid rgba(255, 255, 255, 0.1)`, radius `16px`.
- **Poin Bukti:** Daftar bernomor atau bertanda centang hijau emerald (`#10b981`) dengan teks putih `rgba(255, 255, 255, 0.84)`.
- **Tautan Aksi:** Tombol tautan Google Drive berlatar transparan emas dengan ikon eksternal.

### Tabular Data & Metrics
- **Karakter:** Semua angka metrik dan statistik wajib menggunakan kelas tabular (`.metric-number`, `.stat-value`) dengan properti `font-variant-numeric: tabular-nums` untuk perataan vertikal yang sempurna.

---

## Do's and Don'ts

### Do:
- **Do** selalu menggunakan data faktual dan menautkan naskah resmi Google Drive asli untuk setiap klaim proyek data.
- **Do** mempertahankan rasio kontras teks minimal $4.5:1$ terhadap latar belakangnya.
- **Do** menjaga aksen *Champagne Gold* (`#C5A880`) sebagai aksen eksklusif dan terukur.
- **Do** menerapkan `:focus-visible` yang jelas pada setiap kontrol interaktif untuk navigasi aksesibilitas penuh.

### Don't:
- **Don't** menggunakan gradien teks (*gradient text*) pada judul utama.
- **Don't** menggunakan garis vertikal aksen tebal (*side-tab border*) di sisi kiri kartu.
- **Don't** menyertakan kartu bertumpuk (*nested cards*) atau kotak kolusi yang berlebihan.
- **Don't** menggantikan ikon drawn library dengan emoji unicode.
- **Don't** mengaburkan data statistik dengan grafik dekoratif yang tidak memiliki sumbu atau angka terverifikasi.
