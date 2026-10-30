export interface SkillItem {
  name: string;
  icon: string;
  color?: string;
  details?: string;
}

export interface SkillCategoryGroup {
  category: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location?: string;
  period: string;
  badge?: string;
  description?: string;
  logo?: string;
  icon?: string;
  iconColor?: string;
  responsibilities: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  location?: string;
  period: string;
  score?: string;
  focus?: string;
  activities?: string;
  logo?: string;
  icon?: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  year: string;
  category: string;
  description?: string;
  logo?: string;
  icon?: string;
  iconColor?: string;
}

export interface MediaLink {
  title: string;
  url: string;
  icon: string;
}

export interface MediaCategory {
  category: string;
  links: MediaLink[];
}

export interface DocumentaryPhoto {
  src: string;
  alt: string;
  caption: string;
  category: "Pemberdayaan" | "Prestasi & Riset" | "Lapangan & Teknis";
  tag: string;
  source?: string;
}

export const personalInfo = {
  name: "Muhammad Dahron Mustofa Maksum",
  nickname: "Maksum",
  roleBadge: "Data Analyst & Social Impact Enthusiast",
  subtitle: "Mahasiswa S1 Statistika Universitas Negeri Yogyakarta | IPK 3.84",
  description: "Mahasiswa aktif S1 Statistika UNY dengan minat yang kuat dan keahlian teruji di bidang analisis data statistik, machine learning, kajian strategis kebijakan, serta pemberdayaan masyarakat berbasis data.",
  gpa: "3.84 / 4.00",
  email: "muhammaddahron.2024@student.uny.ac.id",
  phone: "+62 858 7604 9490",
  address: "Sindet RT 03, Wukirsari, Imogiri, Bantul, D.I. Yogyakarta 55782",
  university: "Universitas Negeri Yogyakarta (UNY)",
  social: {
    email: "mailto:muhammaddahron.2024@student.uny.ac.id",
    linkedin: "https://www.linkedin.com/in/muhammad-dahron-mustofa-maksum-055905382",
    instagram: "https://www.instagram.com/mksmetrics/",
    github: "https://github.com/maksumsindet"
  },
  profileImage: "assets/images/profile-abdidaya.jpg",
  projectDriveUrl: "https://drive.google.com/drive/folders/1H6HgFSFGwxvSwdGxksj6OziAQxvSrjA0?usp=drive_link"
};

export const aboutData = {
  paragraphs: [
    "Saya adalah Muhammad Dahron Mustofa Maksum, mahasiswa aktif Program Studi S1 Statistika di Universitas Negeri Yogyakarta dengan Indeks Prestasi Kumulatif (IPK) 3,84. Memiliki minat yang kuat dan keahlian teruji di bidang analisis data statistik, machine learning, kajian strategis kebijakan, serta pemberdayaan masyarakat berbasis data.",
    "Selama perjalanan akademik, saya aktif memimpin program penguatan kapasitas organisasi kemahasiswaan berskala nasional (PPK Ormawa SEGARA) hingga meraih Terbaik 2 Nasional Abdidaya Ormawa 2026, berperan sebagai pengurus pusat bidang Kajian Strategis di Ikatan Himpunan Mahasiswa Statistika Indonesia (IHMSI), Kepala Departemen Kajian, Penalaran, dan Lomba di KSI Mist UNY, serta menjalankan peran operasional profesional sebagai mitra pengemudi ShopeeFood dengan integritas kerja, kepatuhan SOP, dan ketepatan waktu tinggi."
  ]
};

export const skillsCategories: SkillCategoryGroup[] = [
  {
    category: "Analisis Data & Statistik",
    icon: "fas fa-chart-line",
    skills: [
      { name: "Python", icon: "fab fa-python", color: "#3776AB", details: "Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn" },
      { name: "Pemrograman R", icon: "fab fa-r-project", color: "#276DC3", details: "Komputasi & Pemodelan Statistik" },
      { name: "SQL", icon: "fas fa-database", color: "#00758F", details: "Querying, Filtering, Aggregation" },
      { name: "Microsoft Excel", icon: "fas fa-file-excel", color: "#217346", details: "Advanced Lookup, Pivot Table, Data Solver" },
      { name: "SPSS", icon: "fas fa-table", color: "#D32F2F", details: "Analisis & Pengujian Statistik" },
      { name: "Statistika Multivariat", icon: "fas fa-calculator", color: "var(--accent-color)", details: "Analisis Komponen Utama & Faktor" }
    ]
  },
  {
    category: "Pemodelan & Riset",
    icon: "fas fa-brain",
    skills: [
      { name: "Machine Learning", icon: "fas fa-robot", color: "#4CAF50", details: "Fundamental Klasifikasi & Regresi" },
      { name: "Topic Modeling", icon: "fas fa-layer-group", color: "#8E24AA", details: "NLP & Pemodelan Topik Teks" },
      { name: "Text Preprocessing & Cleaning", icon: "fas fa-broom", color: "#795548", details: "Pembersihan Data Teks & Normalisasi" },
      { name: "Metodologi Survei & Sampling", icon: "fas fa-poll", color: "var(--primary-color)", details: "Teknik Penarikan Sampel & Kuesioner" },
      { name: "Visualisasi Data Interaktif", icon: "fas fa-chart-pie", color: "var(--primary-color)", details: "Dashboard & Visualisasi Dinamis" }
    ]
  },
  {
    category: "Manajemen & Kepemimpinan",
    icon: "fas fa-users-cog",
    skills: [
      { name: "Manajemen Tim Multidisiplin", icon: "fas fa-sitemap", color: "var(--primary-color)", details: "Koordinasi Tim & Eksekusi Program" },
      { name: "Program Berbasis Metrik Dampak", icon: "fas fa-bullseye", color: "var(--accent-color)", details: "Perancangan Program Berbasis Hasil" },
      { name: "Negosiasi B2B", icon: "fas fa-handshake", color: "#00897B", details: "Kerja Sama & Kemitraan Komersial" },
      { name: "Komunikasi Publik & Lembaga", icon: "fas fa-comments", color: "var(--primary-color)", details: "Relasi Stakeholder, Dinas & Warga" },
      { name: "Presidium Persidangan", icon: "fas fa-gavel", color: "#E65100", details: "Pimpinan Sidang Umum & Musyawarah Nasional" }
    ]
  },
  {
    category: "Kreatif, Desain & Bahasa",
    icon: "fas fa-palette",
    skills: [
      { name: "Desain Grafis Komunikasi", icon: "fas fa-pen-nib", color: "#e83e8c", details: "Komunikasi Visual & Publikasi" },
      { name: "Dokumentasi Publikasi Media", icon: "fas fa-camera", color: "#1E88E5", details: "Press Release & Media Relations" },
      { name: "Bahasa Indonesia", icon: "fas fa-language", color: "var(--primary-color)", details: "Penutur Asli (Native)" },
      { name: "Bahasa Inggris", icon: "fas fa-globe", color: "var(--accent-color)", details: "Tingkat Dasar (Elementary)" }
    ]
  }
];

export const experienceProgramAndWork: ExperienceItem[] = [
  {
    role: "Ketua Tim Pelaksana",
    organization: "Program Penguatan Kapasitas Ormawa (PPK Ormawa SEGARA)",
    location: "Sidoagung, Godean, Sleman, D.I. Yogyakarta",
    period: "Jun 2026 - Okt 2026",
    badge: "Terbaik 2 Nasional Abdidaya Ormawa 2026",
    description: "Program nasional Kemdiktisaintek RI untuk menguatkan kapasitas Ormawa melalui pengabdian dan pemberdayaan masyarakat.",
    logo: "assets/logos/segara.png",
    responsibilities: [
      "Memimpin 14 anggota tim lintas disiplin ilmu dalam menjalankan program PPK Ormawa SEGARA (Sentra Gerak Agromina) yang didanai Kemdiktisaintek RI di Kalurahan Sidoagung, Sleman, melalui koordinasi lima pilar terintegrasi (Segara Madya, Segara Karya, Segara Daya, Segara Raya, Segara Lestari) guna memberdayakan 6 kelompok pembudidaya ikan pengelola 224 kolam budidaya.",
      "Menginisiasi penguatan kelembagaan hulu dan hilir dengan mendirikan Gabungan Kelompok Ikan (Gapokkan) Segara Agung beranggotakan 25 orang (menaungi 6 kelompok perikanan) serta membentuk Kelompok Usaha Bersama (KUB) Ikanura beranggotakan 16 perwakilan KWT dari 8 padukuhan yang dibina melalui inkubasi pelatihan diversifikasi produk olahan ikan bernilai tambah.",
      "Membangun integrasi rantai pasok digital dan komersialisasi pasar dengan merancang platform SEGARA App yang berhasil diuji keamanan sistemnya bersama Diskominfo Kabupaten Sleman, serta menginisiasi kesepakatan bisnis B2B resmi antara Gapokkan Segara Agung dengan Warung Makan Kembang Ndhesso guna menjamin kepastian penyerapan panen ikan warga.",
      "Menggalang kolaborasi strategis multi-pihak antara Ormawa, FMIPA UNY, Pemerintah Kalurahan Sidoagung, dan 20 Dinas di lingkungan Pemkab Sleman, termasuk mengadvokasi bantuan sarana produksi dari Dinas Pertanian, Pangan, dan Perikanan berupa 84 kg bibit ikan unggul dan 30 sak pakan bagi seluruh kelompok budidaya.",
      "Mengorkestrasi gelaran pasar triwulan Segara Raya, pameran produk UMKM, dan festival daerah yang dihadiri langsung oleh Bupati Sleman, Rektor UNY, 20 Dinas Pemkab Sleman, serta lebih dari 350 partisipan, yang mengantarkan tim lolos sebagai delegasi finalis nasional hingga sukses meraih Terbaik 2 Pemahaman Pemberdayaan Masyarakat pada Anugerah Abdidaya Ormawa 2026."
    ]
  },
  {
    role: "Mitra Pengemudi (Delivery Driver Partner)",
    organization: "ShopeeFood (PT Shopee International Indonesia)",
    location: "D.I. Yogyakarta, Indonesia",
    period: "Sep 2024 - Sekarang",
    badge: "Profesional & Operasional",
    description: "Layanan pesan-antar makanan dan minuman daring terintegrasi dalam ekosistem Shopee (Sea Group).",
    icon: "fas fa-motorcycle",
    iconColor: "#EE4D2D",
    responsibilities: [
      "Mengelola pengambilan dan pengantaran pesanan makanan/minuman dari mitra merchant ke pelanggan di wilayah D.I. Yogyakarta secara tepat waktu dengan rata-rata waktu pengantaran konsisten di bawah 30 menit.",
      "Mengoptimalkan efisiensi rute perjalanan dan pemilihan navigasi real-time guna meminimalkan durasi tempuh dan biaya operasional.",
      "Menjaga kualitas layanan pelanggan prima, tingkat penyelesaian pesanan 100%, serta kepatuhan penuh terhadap standar SOP dan kode etik keselamatan berkendara.",
      "Menjalankan rekonsiliasi transaksi pembayaran tunai dan non-tunai secara harian dengan akurasi 100% tanpa selisih."
    ]
  }
];

export const experienceOrganization: ExperienceItem[] = [
  {
    role: "Staf Bidang Kajian Strategis (Kastrat) | Presidium I Mukernas XIX",
    organization: "Ikatan Himpunan Mahasiswa Statistika Indonesia (IHMSI)",
    location: "Nasional / Indonesia",
    period: "Jan 2025 - Sekarang",
    logo: "assets/logos/ihmsi.png",
    description: "Satu-satunya organisasi keprofesian mahasiswa statistika di Indonesia (didirikan 21 November 1987).",
    responsibilities: [
      "Mengkaji dan menganalisis isu-isu strategis nasional maupun internasional yang relevan dengan mahasiswa statistika di tingkat nasional berbasis bukti data.",
      "Berperan sebagai delegasi pengurus pusat pada Musyawarah Kerja Nasional XIX (Mukernas XIX IHMSI) di Universitas Negeri Yogyakarta dalam perumusan program kerja dan kajian kebijakan berbasis data.",
      "Terpilih dan bertindak sebagai Presidium I Musyawarah Kerja Nasional XIX (Mukernas XIX IHMSI) 2025, memimpin jalannya musyawarah tertinggi penetapan program kerja nasional."
    ]
  },
  {
    role: "Kepala Departemen Kajian, Penalaran, dan Lomba (KPL)",
    organization: "KSI Mist FMIPA Universitas Negeri Yogyakarta",
    location: "UNY, Yogyakarta",
    period: "Des 2025 - Sekarang",
    logo: "assets/logos/ksimist.png",
    description: "Lembaga riset mahasiswa FMIPA UNY (berdiri 6 Juli 2002).",
    responsibilities: [
      "Memimpin Departemen Kajian, Penalaran, dan Lomba (KPL) dalam merancang serta mengelola program pengembangan potensi penalaran dan perlombaan guna mengoptimalkan iklim prestatif anggota KSI Mist FMIPA UNY.",
      "Mengoordinasikan pemantauan dan evaluasi (monitoring dan evaluasi) prestasi mahasiswa, pendampingan penulisan karya tulis ilmiah, serta pembinaan delegasi kompetisi tingkat nasional."
    ]
  },
  {
    role: "Anggota | Presidium I Sidang Umum 2024",
    organization: "HIMATIKA DEPIKMAT FMIPA UNY",
    location: "UNY, Yogyakarta",
    period: "Agu 2024 - Sekarang",
    logo: "assets/logos/himatika.png",
    description: "Wadah resmi mahasiswa Departemen Pendidikan Matematika (Pendidikan Matematika, Matematika, dan Statistika).",
    responsibilities: [
      "Berpartisipasi aktif dalam kegiatan akademik, perlombaan matematika dan statistika, serta forum pengembangan keilmuan di lingkungan Departemen Pendidikan Matematika FMIPA UNY.",
      "Dipercaya sebagai Presidium I Sidang Umum HIMATIKA DEPDIKMAT 2024, memimpin persidangan permusyawaratan tertinggi mahasiswa dan penetapan arah AD/ART organisasi."
    ]
  },
  {
    role: "Sekretaris",
    organization: "Dewan Ambalan Senopati Dewi Sartika - MAN 3 Bantul",
    location: "Bantul, D.I. Yogyakarta",
    period: "Jan 2022 - Jan 2023",
    logo: "assets/logos/man3.png",
    description: "Lembaga kepemimpinan dan wadah pembinaan kepramukaan Penegak di pangkalan MAN 3 Bantul (MANTABA).",
    responsibilities: [
      "Mengelola administrasi organisasi, persuratan dinas, dan dokumentasi kearsipan kegiatan kepramukaan tingkat Ambalan secara tertib dan sistematis.",
      "Menyelesaikan latihan kepemimpinan siswa dan Kursus Pembina Pramuka Mahir Tingkat Dasar (KMD) 2022 bekerjasama dengan Kwarcab Bantul."
    ]
  },
  {
    role: "Ketua",
    organization: "Ikatan Pemuda Masjid Baiturrahman (IPREMBA)",
    location: "Sindet, Wukirsari, Imogiri, Bantul",
    period: "Jan 2024 - Sekarang",
    icon: "fas fa-mosque",
    iconColor: "var(--primary-color)",
    responsibilities: [
      "Memimpin kepengurusan pemuda masjid selama masa bakti 3 tahun.",
      "Menyusun arah program kerja kepemudaan, serta mengoordinasikan kegiatan keagamaan dan sosial kemasyarakatan.",
      "Mengembangkan inovasi kegiatan berbasis kolaborasi antar komunitas pemuda tingkat dusun."
    ]
  },
  {
    role: "Staf Bidang Media & Informasi",
    organization: "Karang Taruna Budiluhur Kalurahan Wukirsari",
    location: "Wukirsari, Imogiri, Bantul",
    period: "Jan 2024 - Sekarang",
    logo: "assets/logos/budiluhur.png",
    responsibilities: [
      "Mengelola dokumentasi visual, pembuatan aset desain grafis, serta publikasi informasi kegiatan kepemudaan di tingkat kalurahan."
    ]
  },
  {
    role: "Koordinator Keagamaan & Bidang Pengumuman",
    organization: "Karang Taruna Satyawala Dusun Sindet",
    location: "Sindet, Wukirsari, Imogiri, Bantul",
    period: "Jan 2023 - Sekarang",
    logo: "assets/logos/satyawala.png",
    responsibilities: [
      "Mengoordinasikan kegiatan keagamaan dusun (2024 – Sekarang).",
      "Mengelola penyampaian informasi dan pengumuman resmi kegiatan kepada warga masyarakat."
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    school: "Universitas Negeri Yogyakarta",
    degree: "S1 Statistika, FMIPA",
    location: "Sleman, D.I. Yogyakarta",
    period: "Agu 2024 - Sekarang",
    score: "IPK: 3.84 / 4.00",
    focus: "Analisis Data Statistik, Pemrograman R & Python, Machine Learning, Metode Sampling, dan Statistika Multivariat.",
    logo: "assets/logos/uny.svg"
  },
  {
    school: "MAN 3 Bantul",
    degree: "Sekolah Menengah Atas - MIPA",
    location: "Bantul, D.I. Yogyakarta",
    period: "Jul 2021 - Mei 2024",
    score: "Nilai Rata-rata: 89.90 / 100.00 | Tahfidz 7 Juz Al-Qur'an",
    activities: "Pemimpin Ikrar Siswa Pelepasan Siswa Kelas XII IPA 1 (2024), Sekretaris Dewan Ambalan Penegak, Peraih Medali Olimpiade Matematika POSI.",
    logo: "assets/logos/man3.png"
  },
  {
    school: "MTsN 6 Bantul",
    degree: "Sekolah Menengah Pertama",
    location: "Bantul, D.I. Yogyakarta",
    period: "Lulus 2021",
    activities: "Juara 2 Lomba Komik Sejarah Dinas Kebudayaan, Delegasi Kompetisi Matematika & Sains Madrasah.",
    logo: "assets/logos/mtsn6.png"
  },
  {
    school: "SD Sindet",
    degree: "Sekolah Dasar",
    location: "Bantul, D.I. Yogyakarta",
    period: "Lulus 2018",
    logo: "assets/logos/sdsindet.png"
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: "Terbaik 2 Pemahaman Pemberdayaan Masyarakat Abdidaya Ormawa 2026",
    issuer: "Kemdiktisaintek RI & UMI Makassar",
    year: "2026",
    category: "Prestasi Nasional",
    description: "Program SEGARA (Sentra Gerak Agromina): Pemberdayaan Masyarakat Kalurahan Sidoagung Berbasis Inovasi Olahan Ikan Nusantara dan Digitalisasi Pemasaran pada malam puncak penganugerahan di Universitas Muslim Indonesia (UMI) Makassar.",
    logo: "assets/logos/ppk-ormawa.png"
  },
  {
    title: "Penerima Pendanaan PPK Ormawa 2026 (Ketua Tim Pelaksana)",
    issuer: "Kemdiktisaintek RI",
    year: "2026",
    category: "Pendanaan Nasional",
    description: "Program SEGARA: Pemberdayaan Masyarakat Kalurahan Sidoagung Berbasis Inovasi Olahan Ikan Nusantara dan Digitalisasi Pemasaran.",
    logo: "assets/logos/segara.png"
  },
  {
    title: "Juara Harapan 2 Kompetisi Nasional Video HAM (Hentakan Aksi Mahasiswa)",
    issuer: "BEM Fakultas Keperawatan Universitas Airlangga",
    year: "2025",
    category: "Prestasi Nasional",
    icon: "fas fa-video",
    iconColor: "#E91E63"
  },
  {
    title: "Apresiasi & Penghargaan Tahfidz Al-Qur'an 7 Juz",
    issuer: "MAN 3 Bantul (MANTABA)",
    year: "2024",
    category: "Tahfidz & Karakter",
    description: "Penganugerahan predikat hafalan Al-Qur'an 7 Juz secara mutqin pada wisuda tahfidz Al-Qur'an MAN 3 Bantul.",
    icon: "fas fa-quran",
    iconColor: "#4CAF50"
  },
  {
    title: "Pemimpin Ikrar Siswa Pelepasan Siswa Kelas XII IPA 1",
    issuer: "MAN 3 Bantul (MANTABA)",
    year: "2024",
    category: "Kepemimpinan Madrasah",
    description: "Dipercaya memandu pembacaan ikrar wisudawan purna siswa kelas XII IPA 1 dalam wisuda kelulusan MAN 3 Bantul tahun ajaran 2023/2024.",
    icon: "fas fa-microphone-lines",
    iconColor: "#C86D56"
  },
  {
    title: "Medali Perunggu Olimpiade Matematika Nasional",
    issuer: "Pusat Olimpiade Sains Indonesia (POSI) - National Young Science Innovation",
    year: "2022",
    category: "Prestasi Nasional",
    description: "Meraih medali perunggu tingkat nasional dalam kompetisi National Young Science Innovation (NYSI 2022) bidang matematika sebagai siswa X MIPA 1 MAN 3 Bantul (tercatat resmi dalam warta prestasi madrasah).",
    logo: "assets/logos/posi.png"
  },
  {
    title: "Juara 2 Lomba Komik Sejarah Tokoh Sultan Agung Tingkat Provinsi",
    issuer: "Dinas Kebudayaan D.I. Yogyakarta",
    year: "2021",
    category: "Prestasi Provinsi",
    icon: "fas fa-palette",
    iconColor: "#FFB300",
    description: "Kejuaraan seni komik sejarah edukatif tokoh Sultan Agung tingkat D.I. Yogyakarta yang diliput oleh media pers regional."
  },
  {
    title: "Sertifikat Kursus Pemrograman Python",
    issuer: "Kaggle Learn",
    year: "2025",
    category: "Sertifikasi Kompetensi",
    description: "Penyelesaian kursus pemrograman Python di Kaggle Learn (diterbitkan 5 September 2025).",
    icon: "fab fa-kaggle",
    iconColor: "#20BEFF"
  },
  {
    title: "Sertifikat Pelatihan Kerja Desain Grafis (216 JPL)",
    issuer: "BLKPP Dinas Tenaga Kerja dan Transmigrasi D.I. Yogyakarta",
    year: "2024",
    category: "Sertifikasi Kompetensi",
    description: "Pelatihan Mobile Training Unit (MTU) Desain Grafis selama 216 Jam Pelajaran (No. Sertifikat: 563/1010/2024).",
    logo: "assets/logos/blkpp.png"
  },
  {
    title: "Sertifikat Kursus Pembina Pramuka Mahir Tingkat Dasar (KMD)",
    issuer: "Kwartir Cabang (Kwarcab) Bantul",
    year: "2022",
    category: "Sertifikasi Kepemimpinan",
    description: "Latihan kepemimpinan siswa dan Kursus Pembina Pramuka Mahir Tingkat Dasar di MAN 3 Bantul.",
    icon: "fas fa-compass",
    iconColor: "#4CAF50"
  }
];

export const mediaData: MediaCategory[] = [
  {
    category: "Grand Opening",
    links: [
      { title: "UNY (27 Juni 2026)", url: "https://www.uny.ac.id/id/berita/ppk-ormawa-ksi-mist-fmipa-uny-luncurkan-program-segara-untuk-penguatan-sektor-perikanan-di", icon: "fas fa-globe" },
      { title: "FMIPA UNY (6 Jul 2026)", url: "https://fmipa.uny.ac.id/id/berita/ppko-ksi-mist-fmipa-uny-inisiasi-pembentukan-gapokkan-segara-agung-untuk-perkuat-kelembagaan", icon: "fas fa-university" },
      { title: "Sidoagung (26 Jun 2026)", url: "https://sidoagungsid.slemankab.go.id/home/2026/06/26/", icon: "fas fa-landmark" },
      { title: "Kompasiana (6 Jul 2026)", url: "https://www.kompasiana.com/galuhpitakencana/6a4b250ded64155ead13c486/ppko-ksi-mist-fmipa-uny-inisiasi-pembentukan-gapokkan-segara-agung-untuk-perkuat-kelembagaan-kelompok-perikanan-sidoagung", icon: "fas fa-newspaper" },
      { title: "RRI (7 Jul 2026)", url: "https://rri.co.id/yogyakarta/berita-lain/2548229/uny-bentuk-gapokkan-perkuat-perikanan-sidoagung-berkelanjutan-bersama?nocache=true", icon: "fas fa-broadcast-tower" },
      { title: "PanturaNews (6 Jul 2026)", url: "https://panturanews.com/index.php/panturanews/baca/267376/06/07/2026/perkuat-kelembagaan-kelompok-perikanan-mahasiswa-uny-inisiasi-pembentukan-gapokkan-segara-agung.html", icon: "fas fa-newspaper" },
      { title: "KSI Mist", url: "https://www.ksimist.or.id/blog/ppk-ormawa-ksi-mist-luncurkan-program-segara-untuk-perkuat-sektor-perikanan-sidoagung", icon: "fas fa-users" }
    ]
  },
  {
    category: "Pembentukan Paguyuban",
    links: [
      { title: "UNY (6 Jul 2026)", url: "https://dka.uny.ac.id/tags/ppko-tahun-2026", icon: "fas fa-globe" },
      { title: "Sidoagung (10 Jul 2026)", url: "https://sidoagungsid.slemankab.go.id/home/2026/07/10/ppko-ksi-mist-fmipa-uny-inisiasi-pembentukan-gapokkan-segara-agung-untuk-perkuat-kelembagaan-kelompok-perikanan-sidoagung/", icon: "fas fa-landmark" },
      { title: "Media Center Sleman 1", url: "https://mediacenter.slemankab.go.id/2026/07/07/siapkan-masa-depan-perikanan-sidoagung-program-segara-uny-pacu-penguatan-kelembagaan-dan-digitalisasi/", icon: "fas fa-building" },
      { title: "Media Center Sleman 2", url: "https://mediacenter.slemankab.go.id/2026/07/07/perkuat-sektor-perikanan-godean-mahasiswa-uny-inisiasi-pembentukan-gapokkan-segara-agung/", icon: "fas fa-building" },
      { title: "Margo Raras (6 Jul 2026)", url: "https://margoraras.kim.id/berita/read/ppko-ksi-mist-fmipa-uny-inisiasi-ga69809-340405200201", icon: "fas fa-newspaper" },
      { title: "KSI Mist", url: "https://www.ksimist.or.id/blog/ppko-ksi-mist-fmipa-uny-inisiasi-pembentukan-gapokkan-segara-agung-untuk-perkuat-kelembagaan-perikanan-sidoagung", icon: "fas fa-users" }
    ]
  },
  {
    category: "Pembukaan Segara Karya",
    links: [
      { title: "UNY (19 Jul 2026)", url: "https://dka.uny.ac.id/berita/segara-karya-resmi-dimulai-tim-ppk-ormawa-ksi-mist-fmipa-uny-gelar-inkubasi-pelatihan-pengolahan-produk", icon: "fas fa-globe" },
      { title: "FMIPA UNY (21 Jul 2026)", url: "https://fmipa.uny.ac.id/id/berita/segara-karya-resmi-dimulai-tim-ppk-ormawa-ksi-mist-fmipa-uny-gelar-inkubasi-pelatihan", icon: "fas fa-university" },
      { title: "Sidoagung (23 Jul 2026)", url: "https://sidoagungsid.slemankab.go.id/home/2026/07/23/tim-ppk-ormawa-ksi-mist-fmipa-uny-awali-rangkaian-segara-karya-melalui-inkubasi-pelatihan-pengolahan-produk/", icon: "fas fa-landmark" },
      { title: "RRI (20 Jul 2026)", url: "https://rri.co.id/yogyakarta/regional/2583182/uny-kembangkan-olahan-ikan-tingkatkan-ekonomi-warga-sidoagung-godean?nocache=true", icon: "fas fa-broadcast-tower" },
      { title: "Kompasiana (19 Jul 2026)", url: "https://www.kompasiana.com/galuhpitakencana/6a5c8025c925c478516bb662/segara-karya-resmi-dimulai-tim-ppko-ksi-mist-fmipa-uny-gelar-inkubasi-pelatihan-pengolahan-produk", icon: "fas fa-newspaper" },
      { title: "Media Center Sleman", url: "https://mediacenter.slemankab.go.id/2026/07/20/olah-lele-dan-nila-jadi-dimsum-uny-dampingi-warga-sidoagung-ciptakan-produk-perikanan-bernilai-tambah/", icon: "fas fa-building" },
      { title: "Bisnis Jogja (24 Jul 2026)", url: "https://www.bisnisjogja.id/dorong-umkm-perikanan-uny-inisiasi-inkubasi-olahan-lele-dan-nila/", icon: "fas fa-newspaper" },
      { title: "KSI Mist", url: "https://www.ksimist.or.id/blog/segara-karya-resmi-dimulai-tim-ppk-ormawa-ksi-mist-fmipa-uny-gelar-inkubasi-pelatihan-pengolahan-produk", icon: "fas fa-users" }
    ]
  },
  {
    category: "Rakor Uji Segara App & Web",
    links: [
      { title: "UNY (22 Jul 2026)", url: "https://dka.uny.ac.id/berita/tim-ppk-ormawa-ksi-mist-fmipa-uny-paparkan-aplikasi-segara-dalam-rakor-uji-keamanan-bersama-dinas-kominfo-kabupaten-sleman", icon: "fas fa-globe" },
      { title: "FMIPA UNY (22 Jul 2026)", url: "https://fmipa.uny.ac.id/id/berita/tim-ppk-ormawa-ksi-mist-fmipa-uny-paparkan-aplikasi-segara-dalam-rakor-uji-keamanan-bersama", icon: "fas fa-university" },
      { title: "Sidoagung (24 Jul 2026)", url: "https://sidoagungsid.slemankab.go.id/home/2026/07/24/tim-ppk-ormawa-ksi-mist-fmipa-uny-paparkan-aplikasi-segara-dalam-rakor-uji-keamanan-bersama-dinas-kominfo-kabupaten-sleman/", icon: "fas fa-landmark" },
      { title: "RRI (23 Jul 2026)", url: "https://rri.co.id/yogyakarta/iptek/2588924/uny-matangkan-aplikasi-segara-platform-digital-potensi-perikanan-sleman?nocache=true", icon: "fas fa-broadcast-tower" },
      { title: "Kompasiana (27 Jul 2026)", url: "https://www.kompasiana.com/galuhpitakencana/6a675eb8c925c42d86298cd2/tim-ppko-ksi-mist-fmipa-uny-paparkan-aplikasi-segara-dalam-rakor-uji", icon: "fas fa-newspaper" },
      { title: "Suara Djogja (23 Jul 2026)", url: "https://www.suaradjogja.com/2026/07/tim-ppk-ormawa-ksi-mist-fmipa-uny.html", icon: "fas fa-newspaper" },
      { title: "KSI Mist", url: "https://www.ksimist.or.id/blog/tim-ppk-ormawa-ksi-mist-fmipa-uny-paparkan-aplikasi-segara-dalam-rakor-uji-keamanan-bersama-dinas-kominfo-sleman", icon: "fas fa-users" }
    ]
  },
  {
    category: "Pelatihan Penggunaan App",
    links: [
      { title: "UNY (4 Ags 2026)", url: "https://dka.uny.ac.id/berita/tim-ppk-ormawa-ksi-mist-fmipa-uny-gelar-pelatihan-segara-app-untuk-perkuat-transformasi-digital-sektor-perikanan-di-kalurahan-sidoagung", icon: "fas fa-globe" },
      { title: "FMIPA UNY (31 Jul 2026)", url: "https://fmipa.uny.ac.id/id/berita/tim-ppk-ormawa-ksi-mist-fmipa-uny-gelar-pelatihan-segara-app-untuk-perkuat-transformasi", icon: "fas fa-university" },
      { title: "Sidoagung (7 Ags 2026)", url: "https://sidoagungsid.slemankab.go.id/home/2026/08/07/tim-ppk-ormawa-ksi-mist-fmipa-uny-gelar-pelatihan-segara-app-untuk-perkuat-transformasi-digital-sektor-perikanan-di-kalurahan-sidoagung/", icon: "fas fa-landmark" },
      { title: "RRI (29 Jul 2026)", url: "https://rri.co.id/yogyakarta/iptek/2607219/segara-app-dorong-digitalisasi-pemasaran-perikanan-sidoagung?nocache=true", icon: "fas fa-broadcast-tower" },
      { title: "Kompasiana (28 Jul 2026)", url: "https://www.kompasiana.com/galuhpitakencana/6a675ff4ed641541dd525505/tim-ppko-ksi-mist-fmipa-uny-gelar-pelatihan-segara-app-untuk-perkuat-transformasi-digital-sektor-perikanan-di-kalurahan-sidoagung", icon: "fas fa-newspaper" },
      { title: "KSI Mist", url: "https://www.ksimist.or.id/blog/tim-ppk-ormawa-ksi-mist-fmipa-uny-gelar-pelatihan-segara-app-untuk-perkuat-transformasi-digital-perikanan", icon: "fas fa-users" }
    ]
  },
  {
    category: "Sosialisasi Dinkes & BLK",
    links: [
      { title: "Dinkes: FMIPA UNY", url: "https://fmipa.uny.ac.id/id/berita/ppko-ksi-mist-fmipa-uny-bersama-dinas-kesehatan-sleman-perkuat-standardisasi-produk-dan", icon: "fas fa-university" },
      { title: "Dinkes: Sidoagung", url: "https://sidoagungsid.slemankab.go.id/home/2026/08/01/ppko-ksi-mist-fmipa-uny-bersama-dinas-kesehatan-sleman-perkuat-standardisasi-produk-dan-higienitas-umkm-olahan-ikan/", icon: "fas fa-landmark" },
      { title: "Dinkes: RRI", url: "https://rri.co.id/yogyakarta/berita-lain/2627288/ppko-uny-berhasil-tingkatkan-mutu-umkm-olahan-ikan-sidoagung?nocache=true", icon: "fas fa-broadcast-tower" },
      { title: "Dinkes: Kompasiana", url: "https://www.kompasiana.com/galuhpitakencana/6a71eb99c925c466c314be02/ppko-ksi-mist-uny-bersama-dinkes-perkuat-standardisasi-produk-olahan-ikan", icon: "fas fa-newspaper" },
      { title: "BLK: Sidoagung", url: "https://sidoagungsid.slemankab.go.id/home/2026/08/07/ppko-ksi-mist-fmipa-uny-bersama-blk-gelar-sosialisasi-strategi-pemasaran-digital-bagi-peserta-segara-karya-kalurahan-sidoagung/", icon: "fas fa-landmark" },
      { title: "BLK: RRI", url: "https://rri.co.id/yogyakarta/berita-lain/2633993/uny-perkuat-pemasaran-digital-produk-olahan-ikan-desa-unggulan?nocache=true", icon: "fas fa-broadcast-tower" },
      { title: "BLK: Kompasiana", url: "https://www.kompasiana.com/galuhpitakencana/6a7b259fc925c448c127a5d8/ppko-ksi-mist-fmipa-uny-bersama-blk-gelar-sosialisasi-pemasaran-digital", icon: "fas fa-newspaper" }
    ]
  },
  {
    category: "Segara Karya 2 dan Dinkop",
    links: [
      { title: "Kerupuk dan Kecap: Kompasiana", url: "https://www.kompasiana.com/galuhpitakencana/6a85aa20c925c46308413622/ppko-ksi-mist-kembali-gelar-pelatihan-pengolahan-produk-ikan-di-sidoagung", icon: "fas fa-newspaper" },
      { title: "Kerupuk dan Kecap: KSI Mist", url: "https://www.ksimist.or.id/blog/tim-ppko-ksi-mist-fmipa-uny-kembali-gelar-pelatihan-pengolahan-produk-ikan-di-sidoagung", icon: "fas fa-users" },
      { title: "Dinkop: Kompasiana", url: "https://www.kompasiana.com/galuhpitakencana/6a85b88cc925c412ae400b40/ppko-ksi-mist-fmipa-uny-gandeng-dinkop-sleman-tingkatkan-usaha-sidoagung", icon: "fas fa-newspaper" }
    ]
  },
  {
    category: "Kunjungan Bupati dan DPRD",
    links: [
      { title: "FMIPA UNY (Bupati)", url: "https://fmipa.uny.ac.id/id/berita/bupati-sleman-apresiasi-ppko-ksi-mist-fmipa-uny-siap-dukung-pengembangan-program", icon: "fas fa-university" },
      { title: "FMIPA UNY (DPRD)", url: "https://fmipa.uny.ac.id/id/berita/dprd-kabupaten-sleman-dukung-ppko-ksi-mist-fmipa-uny-perkuat-pemberdayaan-masyarakat", icon: "fas fa-university" },
      { title: "RRI (Bupati)", url: "https://rri.co.id/yogyakarta/berita-lain/2643946/bupati-sleman-dukung-program-pemberdayaan-olahan-ikan-mahasiswa-uny?nocache=true", icon: "fas fa-broadcast-tower" },
      { title: "RRI (DPRD)", url: "https://rri.co.id/yogyakarta/info-parlemen/2643952/dprd-sleman-dukung-pemberdayaan-masyarakat-sidoagung?nocache=true", icon: "fas fa-broadcast-tower" },
      { title: "Kompasiana (Bupati)", url: "https://www.kompasiana.com/galuhpitakencana/6a7b2bc934777c5e7e77ca5a/bupati-sleman-apresiasi-ppko-ksi-mist-fmipa-uny", icon: "fas fa-newspaper" },
      { title: "Kompasiana (DPRD)", url: "https://www.kompasiana.com/galuhpitakencana/6a85ac89ed64155146241834/dprd-sleman-dukung-ppko-ksi-mist-fmipa-uny-dalam-pemberdayaan-sidoagung", icon: "fas fa-newspaper" },
      { title: "Media Center Sembada", url: "https://mediacenter.slemankab.go.id/2026/08/11/pemkab-dan-dprd-sleman-dukung-uny-kembangkan-potensi-perikanan-lokal-sidoagung/", icon: "fas fa-building" },
      { title: "Info Publik", url: "https://infopublik.id/kategori/nusantara/983269/pakai-segara-app-mahasiswa-uny-berdayakan-ekonomi-perikanan-lokal-sleman", icon: "fas fa-globe" },
      { title: "KSI Mist (Bupati)", url: "https://www.ksimist.or.id/blog/bupati-sleman-apresiasi-ppko-ksi-mist-fmipa-uny-dukung-pengembangan-program-pemberdayaan-masyarakat", icon: "fas fa-users" },
      { title: "KSI Mist (DPRD)", url: "https://www.ksimist.or.id/blog/dprd-kabupaten-sleman-dukung-ppko-ksi-mist-fmipa-uny-perkuat-pemberdayaan-masyarakat-sidoagung", icon: "fas fa-users" }
    ]
  },
  {
    category: "Liputan Media Nasional & Pendidikan",
    links: [
      { title: "Harian Merapi: Inovasi SEGARA & Perikanan", url: "https://www.harianmerapi.com", icon: "fas fa-newspaper" },
      { title: "Tribun Jogja: Prestasi Siswa & Literasi", url: "https://jogja.tribunnews.com", icon: "fas fa-newspaper" },
      { title: "UMI Makassar: Prestasi Abdidaya Ormawa", url: "https://umi.ac.id", icon: "fas fa-award" },
      { title: "MAN 3 Bantul: Medali Kompetisi Matematika", url: "https://man3bantul.sch.id/berita/dahron-siswa-man-3-bantul-sabet-medali-kompetisi-matematika-nasional", icon: "fas fa-graduation-cap" },
      { title: "DKA UNY: Peluncuran Resmi SEGARA Sidoagung", url: "https://dka.uny.ac.id/tags/ppko-tahun-2026", icon: "fas fa-university" }
    ]
  }
];

export const documentaryPhotos: DocumentaryPhoto[] = [
  {
    src: "assets/images/portfolio/man3-medali-matematika.jpg",
    alt: "Medali Perunggu Olimpiade Matematika Nasional di MAN 3 Bantul",
    caption: "Penganugerahan Medali Perunggu National Young Science Innovation (POSI 2022) di MAN 3 Bantul",
    category: "Prestasi & Riset",
    tag: "Medali Matematika",
    source: "Humas MAN 3 Bantul"
  },
  {
    src: "assets/images/portfolio/segara-app-training.jpg",
    alt: "Pelatihan & Sosialisasi SEGARA App di Kalurahan Sidoagung",
    caption: "Pelatihan Transformasi Digital & Penggunaan SEGARA App Bersama Komunitas dan Pamong Sidoagung",
    category: "Pemberdayaan",
    tag: "Digitalisasi SEGARA App",
    source: "Humas Resmi UNY & Diskominfo"
  },
  {
    src: "assets/images/portfolio/segara-banner-sidoagung.jpg",
    alt: "Grand Opening & Dokumentasi Kolaboratif Program SEGARA Sidoagung",
    caption: "Peresmian & Sinergi Program Sentra Gerak Agromina SEGARA bersama Rektorat UNY, Pamong, dan Petani Ikan",
    category: "Pemberdayaan",
    tag: "Dokumentasi Kolaboratif",
    source: "Dokumentasi PPK Ormawa"
  },
  {
    src: "assets/images/portfolio/segara-event-1.jpg",
    alt: "Peresmian & Tumpengan Program SEGARA di Balai Kalurahan Sidoagung",
    caption: "Peresmian Program SEGARA Bersama Pamong Kalurahan & Kelompok Budidaya",
    category: "Pemberdayaan",
    tag: "Launching & Sinergi Desa",
    source: "Dokumentasi Pemkal Sidoagung"
  },
  {
    src: "assets/images/portfolio/uny-dscf0754.jpg",
    alt: "Sosialisasi Tim SEGARA UNY Bersama Warga Kalurahan Sidoagung",
    caption: "Sosialisasi Program Sentra Gerak Agromina di Balai Kalurahan Sidoagung",
    category: "Pemberdayaan",
    tag: "Edukasi Masyarakat",
    source: "Humas Resmi UNY"
  },
  {
    src: "assets/images/portfolio/uny-dscf0713.jpg",
    alt: "Pelatihan Budidaya CBIB & Standarisasi Kualitas Air Kolam Nila dan Lele",
    caption: "Pelatihan Budidaya Ikan Berkelanjutan & Manajemen Kualitas Air Kolam",
    category: "Lapangan & Teknis",
    tag: "Standardisasi Budidaya",
    source: "Humas Resmi UNY"
  },
  {
    src: "assets/images/portfolio/uny-dscf0812.jpg",
    alt: "FGD Multi-Pihak Penguatan Kelembagaan Gapokkan SEGARA AGUNG",
    caption: "Forum Group Discussion Koordinasi Multi-pihak Antar-Dinas & Pamong",
    category: "Pemberdayaan",
    tag: "Koordinasi Antar-Lembaga",
    source: "Humas Resmi UNY"
  },
  {
    src: "assets/images/portfolio/fmipa-ksi1.jpg",
    alt: "Tim Riset & Inovasi Sains KSI Mist FMIPA UNY",
    caption: "Pembinaan Delegasi Riset Sains & Inovasi Mahasiswa KSI Mist FMIPA UNY",
    category: "Prestasi & Riset",
    tag: "Delegasi Riset Ilmiah",
    source: "FMIPA UNY"
  },
  {
    src: "assets/images/portfolio/fmipa-ksi2.jpg",
    alt: "Penganugerahan Prestasi Nasional Tim Delegasi Mahasiswa UNY",
    caption: "Penganugerahan Kejuaraan Prestasi Mahasiswa Berprestasi FMIPA UNY",
    category: "Prestasi & Riset",
    tag: "Penganugerahan Prestasi",
    source: "FMIPA UNY"
  },
  {
    src: "assets/images/portfolio/fmipa-ksi5.jpg",
    alt: "Monitoring & Evaluasi Lapangan Kolam Perikanan Sidoagung",
    caption: "Monitoring & Evaluasi Lapangan 224 Kolam Budidaya Ikan Sidoagung",
    category: "Lapangan & Teknis",
    tag: "Monev Lapangan",
    source: "FMIPA UNY"
  },
  {
    src: "assets/images/portfolio/photo-1.jpg",
    alt: "Survei Lapangan & Pengambilan Data Potensi Wilayah 224 Kolam",
    caption: "Survei Lapangan & Pemetaan Geospasial Potensi Perikanan Rakyat",
    category: "Lapangan & Teknis",
    tag: "Survei & Sampling Data",
    source: "Dokumentasi Pribadi"
  },
  {
    src: "assets/images/portfolio/photo-3.png",
    alt: "Presentasi Capaian Program di Depan Dewan Juri Abdidaya di UMI Makassar",
    caption: "Presentasi Capaian Program di Hadapan Dewan Juri Abdidaya Ormawa di UMI Makassar",
    category: "Prestasi & Riset",
    tag: "Abdidaya Ormawa 2026",
    source: "Kemdiktisaintek / UMI"
  },
  {
    src: "assets/images/portfolio/abdidaya-stage-uny.jpg",
    alt: "Penganugerahan Terbaik 2 Nasional Abdidaya Ormawa di UMI Makassar",
    caption: "Penganugerahan Juara Terbaik 2 Nasional Tim Pelaksana di Panggung Utama Abdidaya Ormawa (UMI Makassar)",
    category: "Prestasi & Riset",
    tag: "Juara 2 Nasional",
    source: "Dokumentasi Resmi Abdidaya"
  },
  {
    src: "assets/images/portfolio/photo-4.jpg",
    alt: "Workshop Hilirisasi Olahan Ikan Bersama KWT & PKK Kalurahan Sidoagung",
    caption: "Workshop Hilirisasi Olahan Ikan Bernilai Tambah Tinggi Bersama KWT & PKK",
    category: "Pemberdayaan",
    tag: "Inkubasi Produk Olahan",
    source: "Dokumentasi PPK Ormawa"
  },
  {
    src: "assets/images/portfolio/photo-5.jpg",
    alt: "Produksi & Pengemasan Produk Olahan Ikan Bernilai Tambah Tinggi IKANURA",
    caption: "Pemberdayaan & Standardisasi Produksi Higienis Produk Merek IKANURA",
    category: "Pemberdayaan",
    tag: "Hilirisasi IKANURA",
    source: "Dokumentasi KUB Ikanura"
  },
  {
    src: "assets/images/portfolio/photo-6.jpg",
    alt: "Inspeksi Kualitas Air dan Penerapan Smart IoT Monitoring Kolam",
    caption: "Penerapan Sensor Kualitas Air & Digitalisasi Pemantauan Kolam",
    category: "Lapangan & Teknis",
    tag: "Smart IoT & Data",
    source: "Dokumentasi Teknis"
  }
];

export const galleryEmbeds = [
  "https://www.instagram.com/p/DI_sBzXzehS/embed",
  "https://www.instagram.com/p/DX1PO_jk4R9/embed",
  "https://www.instagram.com/p/DLSHsERzNEC/embed",
  "https://www.instagram.com/p/C3oTFNvv0h7/embed",
  "https://www.instagram.com/p/CiZ_fbFPs_4/embed",
  "https://www.instagram.com/p/Czgde8Fvgtu/embed"
];

export const heroPhotos = [
  { src: "assets/images/portfolio/segara-banner-sidoagung.jpg", alt: "Dokumentasi Kolaboratif SEGARA" },
  { src: "assets/images/portfolio/man3-medali-matematika.jpg", alt: "Medali Matematika Nasional MAN 3 Bantul" },
  { src: "assets/images/portfolio/segara-app-training.jpg", alt: "Pelatihan Digital SEGARA App" },
  { src: "assets/images/portfolio/abdidaya-stage-uny.jpg", alt: "Panggung Juara 2 Abdidaya Ormawa" },
  { src: "assets/images/portfolio/segara-event-1.jpg", alt: "Peresmian Program SEGARA" },
  { src: "assets/images/portfolio/uny-dscf0754.jpg", alt: "Sosialisasi Tim SEGARA UNY" },
  { src: "assets/images/portfolio/uny-dscf0713.jpg", alt: "Pelatihan Budidaya CBIB" },
  { src: "assets/images/portfolio/uny-dscf0812.jpg", alt: "FGD Multi-Pihak Pemkab Sleman" },
  { src: "assets/images/portfolio/fmipa-ksi1.jpg", alt: "Tim Riset KSI Mist FMIPA UNY" },
  { src: "assets/images/portfolio/fmipa-ksi2.jpg", alt: "Penganugerahan Prestasi UNY" },
  { src: "assets/images/portfolio/fmipa-ksi5.jpg", alt: "Monitoring Lapangan PPK Ormawa" },
  { src: "assets/images/portfolio/photo-1.jpg", alt: "Survei Lapangan Statistika" },
  { src: "assets/images/portfolio/photo-3.png", alt: "Presentasi Abdidaya di UMI Makassar" },
  { src: "assets/images/portfolio/photo-4.jpg", alt: "Workshop Olahan Ikan KWT" },
  { src: "assets/images/portfolio/photo-5.jpg", alt: "Produk Olahan Ikanura" },
  { src: "assets/images/portfolio/photo-6.jpg", alt: "Inspeksi Kualitas Air IoT" }
];
