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
  category: "Pemberdayaan" | "Prestasi & Riset" | "Lapangan & Teknis" | string;
  tag: string;
  source?: string;
}

export const personalInfo = {
  name: "Muhammad Dahron Mustofa Maksum",
  nickname: "Maksum",
  roleBadge: "Data Analyst dan Social Impact Enthusiast",
  subtitle: "Mahasiswa S1 Statistika Universitas Negeri Yogyakarta",
  description: "Menjembatani analisis kuantitatif dan kepemimpinan lapangan untuk merancang solusi masyarakat yang terukur dan berkelanjutan.",
  gpa: "3.84 / 4.00",
  email: "muhammaddahron.2024@student.uny.ac.id",
  phone: "+62 858 7604 9490",
  address: "Sindet RT 03, Wukirsari, Imogiri, Bantul, D.I. Yogyakarta 55782",
  university: "Universitas Negeri Yogyakarta",
  social: {
    email: "mailto:muhammaddahron.2024@student.uny.ac.id",
    linkedin: "https://www.linkedin.com/in/muhammad-dahron-mustofa-maksum-055905382",
    instagram: "https://www.instagram.com/mksmetrics/",
    github: "https://github.com/maksumsindet"
  },
  profileImage: "assets/images/profile-abdidaya.jpg",
  projectDriveUrl: "https://drive.google.com/drive/folders/1H6HgFSFGwxvSwdGxksj6OziAQxvSrjA0?usp=drive_link"
};

export const heroData = {
  kicker: "ANALISIS DATA DAN PEMBERDAYAAN MASYARAKAT",
  headlineLine1: "Wawasan Data",
  headlineLine2: "Untuk Dampak",
  headlineGold: "Masa Depan.",
  description: "Menjembatani ketelitian analisis kuantitatif, komputasi statistik, dan kepemimpinan kolaboratif untuk merancang solusi sosial-ekonomi yang terukur dan berkelanjutan.",
  primaryCtaLabel: "Eksplorasi Program",
  secondaryCtaLabel: "Lihat Galeri Dokumentasi",
  featureRibbon: [
    {
      icon: "bi bi-graph-up-arrow",
      title: "Statistika dan Sains Data",
      desc: "Eksplorasi kuantitatif untuk pengambilan keputusan berbasis bukti."
    },
    {
      icon: "bi bi-flower1",
      title: "Inovasi Pemberdayaan",
      desc: "Transformasi ekonomi lokal dan digitalisasi ekosistem desa."
    },
    {
      icon: "bi bi-scale",
      title: "Kajian Strategis",
      desc: "Advokasi kebijakan publik dan kepemimpinan musyawarah."
    }
  ]
};

export const aboutData = {
  leadPhrase: "Profil dan Filosofi Kerja",
  bioHeading: "Menghubungkan Ketelitian Analitis dengan Kepekaan Sosial",
  signatureName: "Muhammad Dahron M. Maksum",
  paragraphs: [
    "Bagi saya, statistika bukan sekadar kumpulan rumus dan pemodelan di balik layar komputasi, melainkan instrumen objektif untuk memahami persoalan riil masyarakat. Pendekatan kerja saya berangkat dari observasi lapangan yang cermat, pemetaan masalah berbasis bukti, hingga perancangan intervensi yang dapat diukur dampaknya secara langsung oleh warga.",
    "Dalam setiap kolaborasi, saya memegang prinsip bahwa solusi yang berkelanjutan lahir dari perpaduan antara ketajaman riset, tata kelola organisasi yang tertib, serta kedisiplinan eksekusi di lapangan. Baik saat merumuskan naskah kajian kebijakan, memimpin tim multidisiplin di desa binaan, maupun menjalankan operasional harian, integritas dan akuntabilitas selalu menjadi kompas utama."
  ],
  focusTags: [
    {
      icon: "bi bi-clipboard-check",
      label: "Keputusan Berbasis Bukti (Evidence-Based)"
    },
    {
      icon: "bi bi-people",
      label: "Kolaborasi Partisipatif Lintas Sektor"
    },
    {
      icon: "bi bi-shield-check",
      label: "Disiplin Eksekusi dan Kepatuhan SOP"
    },
    {
      icon: "bi bi-arrow-repeat",
      label: "Kemandirian dan Keberlanjutan Komunitas"
    }
  ]
};

export const programsShowcaseData = {
  programCards: [
    {
      filter: "Kelembagaan",
      icon: "bi bi-people-fill",
      kicker: "Pilar 1 • Segara Madya",
      title: "Gapokkan Segara Agung",
      desc: "Konsolidasi 6 kelompok pembudidaya ikan ke dalam satu kelembagaan resmi beranggotakan 25 pengurus inti untuk menyatukan standar manajemen budidaya.",
      meta: "Kelembagaan Hulu"
    },
    {
      filter: "Hilirisasi",
      icon: "bi bi-building-gear",
      kicker: "Pilar 2 • Segara Karya",
      title: "Inkubasi KUB Ikanura",
      desc: "Pembentukan Kelompok Usaha Bersama bersama 16 perwakilan KWT untuk hilirisasi olahan lele dan nila menjadi dimsum, kerupuk, serta kecap ikan.",
      meta: "Hilirisasi Produk"
    },
    {
      filter: "Digitalisasi",
      icon: "bi bi-phone",
      kicker: "Pilar 3 • Segara Daya",
      title: "Platform SEGARA App",
      desc: "Perancangan aplikasi katalog dan rantai pasok perikanan lokal yang telah melalui rapat koordinasi serta uji keamanan sistem bersama Diskominfo.",
      meta: "Transformasi Digital"
    },
    {
      filter: "Komersialisasi",
      icon: "bi bi-shop",
      kicker: "Pilar 4 • Segara Raya",
      title: "Pasar Triwulan dan Kemitraan B2B",
      desc: "Penyelenggaraan festival UMKM perikanan daerah dan penandatanganan kesepakatan serap panen B2B dengan mitra kuliner Warung Makan Kembang Ndhesso.",
      meta: "Akses Pasar"
    },
    {
      filter: "Ekologi",
      icon: "bi bi-droplet",
      kicker: "Pilar 5 • Segara Lestari",
      title: "Standarisasi CBIB dan Mutu Air",
      desc: "Pendampingan Cara Budidaya Ikan yang Baik (CBIB), manajemen pakan efisien, serta pemantauan berkala kualitas air kolam budidaya warga.",
      meta: "Keberlanjutan Budidaya"
    }
  ],
  outcomesMetrics: [
    {
      icon: "bi bi-water",
      number: "224",
      label: "Kolam Budidaya Ikan yang Dikelola Bersama Kelompok Binaan"
    },
    {
      icon: "bi bi-geo-alt",
      number: "8 Padukuhan",
      label: "Cakupan Wilayah Pemberdayaan dan Perwakilan KWT di Sidoagung"
    },
    {
      icon: "bi bi-bank",
      number: "20+ Dinas",
      label: "Instansi Pemerintah Daerah yang Terlibat dalam Sinergi Lintas Sektor"
    },
    {
      icon: "bi bi-people",
      number: "350+ Warga",
      label: "Partisipan Aktif dalam Gelaran Pasar Triwulan dan Festival Daerah"
    }
  ],
  spotlight: {
    title: "Sinergi Multi-Pihak",
    quote: "Wawasan data tidak berhenti pada angka di atas kertas, melainkan menjadi kompas aksi nyata yang menggerakkan kemandirian masyarakat.",
    authorName: "Muhammad Dahron Mustofa Maksum",
    authorRole: "Arsitektur Program Sentra Gerak Agromina (SEGARA)"
  },
  trustBadges: []
};

export const skillsCategories: SkillCategoryGroup[] = [
  {
    category: "Analisis Data dan Statistik",
    icon: "bi bi-graph-up-arrow",
    skills: [
      { name: "Python", icon: "bi bi-filetype-py", color: "#3776AB", details: "Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn" },
      { name: "Pemrograman R", icon: "bi bi-calculator", color: "#276DC3", details: "Komputasi dan Pemodelan Statistik" },
      { name: "SQL", icon: "bi bi-database", color: "#00758F", details: "Querying, Filtering, Aggregation" },
      { name: "Microsoft Excel", icon: "bi bi-file-earmark-excel", color: "#217346", details: "Advanced Lookup, Pivot Table, Data Solver" },
      { name: "SPSS", icon: "bi bi-table", color: "#D32F2F", details: "Analisis dan Pengujian Statistik" },
      { name: "Statistika Multivariat", icon: "bi bi-calculator", color: "var(--accent-color)", details: "Analisis Komponen Utama dan Faktor" }
    ]
  },
  {
    category: "Pemodelan dan Riset",
    icon: "bi bi-cpu",
    skills: [
      { name: "Machine Learning", icon: "bi bi-robot", color: "#4CAF50", details: "Fundamental Klasifikasi dan Regresi" },
      { name: "Topic Modeling", icon: "bi bi-diagram-3", color: "#8E24AA", details: "NLP dan Pemodelan Topik Teks" },
      { name: "Text Preprocessing dan Cleaning", icon: "bi bi-brush", color: "#795548", details: "Pembersihan Data Teks dan Normalisasi" },
      { name: "Metodologi Survei dan Sampling", icon: "bi bi-clipboard-data", color: "var(--primary-color)", details: "Teknik Penarikan Sampel dan Kuesioner" },
      { name: "Visualisasi Data Interaktif", icon: "bi bi-pie-chart", color: "var(--primary-color)", details: "Dashboard dan Visualisasi Dinamis" }
    ]
  },
  {
    category: "Manajemen dan Kepemimpinan",
    icon: "bi bi-people",
    skills: [
      { name: "Manajemen Tim Multidisiplin", icon: "bi bi-diagram-2", color: "var(--primary-color)", details: "Koordinasi Tim dan Eksekusi Program" },
      { name: "Program Berbasis Metrik Dampak", icon: "bi bi-bullseye", color: "var(--accent-color)", details: "Perancangan Program Berbasis Hasil" },
      { name: "Negosiasi B2B", icon: "bi bi-people-fill", color: "#00897B", details: "Kerja Sama dan Kemitraan Komersial" },
      { name: "Komunikasi Publik dan Lembaga", icon: "bi bi-chat-dots", color: "var(--primary-color)", details: "Relasi Stakeholder, Dinas dan Warga" },
      { name: "Presidium Persidangan", icon: "bi bi-hammer", color: "#E65100", details: "Pimpinan Sidang Umum dan Musyawarah Nasional" }
    ]
  },
  {
    category: "Kreatif, Desain dan Bahasa",
    icon: "bi bi-palette",
    skills: [
      { name: "Desain Grafis Komunikasi", icon: "bi bi-pen", color: "#e83e8c", details: "Komunikasi Visual dan Publikasi" },
      { name: "Dokumentasi Publikasi Media", icon: "bi bi-camera", color: "#1E88E5", details: "Press Release dan Media Relations" },
      { name: "Bahasa Indonesia", icon: "bi bi-translate", color: "var(--primary-color)", details: "Penutur Asli (Native)" },
      { name: "Bahasa Inggris", icon: "bi bi-globe", color: "var(--accent-color)", details: "Tingkat Dasar (Elementary)" }
    ]
  }
];

export const experienceProgramAndWork: ExperienceItem[] = [
  {
    role: "Ketua Tim Pelaksana",
    organization: "Program Penguatan Kapasitas Ormawa (PPK Ormawa)",
    location: "Godean, Sleman, D.I. Yogyakarta",
    period: "Jun 2026 - Okt 2026",
    badge: "Manajemen Eksekusi Program",
    description: "Kepemimpinan manajerial dan koordinasi tim lintas disiplin dalam pelaksanaan program pengabdian masyarakat.",
    logo: "assets/logos/segara.png",
    responsibilities: [
      "Memimpin 14 anggota tim lintas disiplin ilmu dari perencanaan anggaran, penyusunan lini masa kerja, pembagian tugas divisi, hingga pemantauan indikator capaian mingguan.",
      "Memfasilitasi forum diskusi terpumpun (FGD) dan audiensi birokrasi bersama jajaran pemerintah kalurahan, dinas kabupaten, DPRD, serta rektorat universitas.",
      "Mengadvokasi penyaluran hibah sarana produksi perikanan berupa 84 kg bibit ikan unggul dan 30 sak pakan bagi kelompok pembudidaya warga.",
      "Menyusun laporan pertanggungjawaban akademik, administrasi keuangan, serta evaluasi keberlanjutan program untuk penilaian tingkat nasional."
    ]
  },
  {
    role: "Mitra Pengemudi (Delivery Driver Partner)",
    organization: "ShopeeFood (PT Shopee International Indonesia)",
    location: "D.I. Yogyakarta, Indonesia",
    period: "Sep 2024 - Sekarang",
    badge: "Profesional dan Operasional",
    description: "Layanan pesan-antar makanan dan minuman daring terintegrasi dalam ekosistem Shopee (Sea Group).",
    icon: "bi bi-truck",
    iconColor: "#EE4D2D",
    responsibilities: [
      "Mengelola pengambilan dan pengantaran pesanan makanan dan minuman dari mitra merchant ke pelanggan di wilayah D.I. Yogyakarta secara tepat waktu dengan rata-rata waktu pengantaran konsisten di bawah 30 menit.",
      "Mengoptimalkan efisiensi rute perjalanan dan pemilihan navigasi real-time guna meminimalkan durasi tempuh dan biaya operasional.",
      "Menjaga kualitas layanan pelanggan prima, tingkat penyelesaian pesanan 100%, serta kepatuhan penuh terhadap standar SOP dan kode etik keselamatan berkendara.",
      "Menjalankan rekonsiliasi transaksi pembayaran tunai dan non-tunai secara harian dengan akurasi 100% tanpa selisih."
    ]
  }
];

export const experienceOrganization: ExperienceItem[] = [
  {
    role: "Staf Bidang Kajian Strategis | Presidium I Mukernas XIX",
    organization: "Ikatan Himpunan Mahasiswa Statistika Indonesia (IHMSI)",
    location: "Nasional / Indonesia",
    period: "Jan 2025 - Sekarang",
    logo: "assets/logos/ihmsi.png",
    description: "Organisasi keprofesian mahasiswa statistika tingkat nasional di Indonesia (didirikan 21 November 1987).",
    responsibilities: [
      "Mengkaji dan menganalisis isu-isu strategis nasional maupun internasional yang relevan dengan mahasiswa statistika berbasis bukti data.",
      "Memimpin jalannya persidangan Musyawarah Kerja Nasional XIX (Mukernas XIX IHMSI) 2025 sebagai Presidium I dalam perumusan serta penetapan program kerja nasional."
    ]
  },
  {
    role: "Kepala Departemen Kajian, Penalaran, dan Lomba (KPL)",
    organization: "KSI Mist FMIPA Universitas Negeri Yogyakarta",
    location: "UNY, Yogyakarta",
    period: "Des 2025 - Sekarang",
    logo: "assets/logos/ksimist.png",
    description: "Lembaga riset dan keilmiahan mahasiswa FMIPA UNY (berdiri 6 Juli 2002).",
    responsibilities: [
      "Memimpin Departemen KPL dalam merancang serta mengelola program pengembangan potensi penalaran guna mengoptimalkan iklim prestatif anggota.",
      "Mengoordinasikan pemantauan prestasi mahasiswa, pendampingan penulisan karya tulis ilmiah, serta pembinaan delegasi kompetisi."
    ]
  },
  {
    role: "Anggota | Presidium I Sidang Umum 2024",
    organization: "HIMATIKA DEPDIKMAT FMIPA UNY",
    location: "UNY, Yogyakarta",
    period: "Agu 2024 - Sekarang",
    logo: "assets/logos/himatika.png",
    description: "Wadah resmi mahasiswa Departemen Pendidikan Matematika FMIPA UNY.",
    responsibilities: [
      "Berpartisipasi aktif dalam forum pengembangan keilmuan dan kegiatan akademik di lingkungan Departemen Pendidikan Matematika.",
      "Dipercaya sebagai Presidium I Sidang Umum 2024 untuk memimpin persidangan permusyawaratan tertinggi mahasiswa dan penetapan arah AD/ART organisasi."
    ]
  },
  {
    role: "Sekretaris Dewan Ambalan",
    organization: "Ambalan Senopati Dewi Sartika MAN 3 Bantul",
    location: "Bantul, D.I. Yogyakarta",
    period: "Jan 2022 - Jan 2023",
    logo: "assets/logos/man3.png",
    description: "Dewan kepemimpinan dan pembinaan kepramukaan Penegak di MAN 3 Bantul.",
    responsibilities: [
      "Mengelola tata usaha organisasi, persuratan dinas, dan dokumentasi kearsipan kegiatan kepramukaan tingkat Ambalan secara tertib dan sistematis.",
      "Menyusun agenda rapat kerja sangga serta mengoordinasikan evaluasi program latihan rutin mingguan anggota Pramuka Penegak."
    ]
  },
  {
    role: "Ketua Umum",
    organization: "Ikatan Pemuda Masjid Baiturrahman (IPREMBA)",
    location: "Sindet, Wukirsari, Imogiri, Bantul",
    period: "Jan 2024 - Sekarang",
    icon: "bi bi-building",
    iconColor: "var(--primary-color)",
    responsibilities: [
      "Memimpin kepengurusan pemuda masjid selama masa bakti 3 tahun.",
      "Menyusun arah program kerja kepemudaan serta mengoordinasikan kegiatan keagamaan dan sosial kemasyarakatan.",
      "Mengembangkan inovasi kegiatan berbasis kolaborasi antar komunitas pemuda tingkat dusun."
    ]
  },
  {
    role: "Staf Bidang Media dan Informasi",
    organization: "Karang Taruna Budiluhur Kalurahan Wukirsari",
    location: "Wukirsari, Imogiri, Bantul",
    period: "Jan 2024 - Sekarang",
    logo: "assets/logos/budiluhur.png",
    responsibilities: [
      "Mengelola dokumentasi visual, pembuatan aset desain grafis, serta publikasi informasi kegiatan kepemudaan di tingkat kalurahan."
    ]
  },
  {
    role: "Koordinator Keagamaan dan Bidang Pengumuman",
    organization: "Karang Taruna Satyawala Dusun Sindet",
    location: "Sindet, Wukirsari, Imogiri, Bantul",
    period: "Jan 2023 - Sekarang",
    logo: "assets/logos/satyawala.png",
    responsibilities: [
      "Mengoordinasikan kegiatan kerohanian warga dusun serta mengelola penyampaian pengumuman resmi kegiatan kemasyarakatan."
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    school: "Universitas Negeri Yogyakarta",
    degree: "S1 Statistika, Fakultas MIPA",
    location: "Sleman, D.I. Yogyakarta",
    period: "Agu 2024 - Sekarang",
    score: "IPK: 3.84 / 4.00",
    focus: "Teori Probabilitas, Inferensi Statistik, Rancangan Percobaan, Ekonometrika, dan Pemodelan Kuantitatif.",
    logo: "assets/logos/uny.svg"
  },
  {
    school: "MAN 3 Bantul",
    degree: "Sekolah Menengah Atas, Peminatan MIPA",
    location: "Bantul, D.I. Yogyakarta",
    period: "Jul 2021 - Mei 2024",
    score: "Nilai Rata-rata: 89.90 / 100.00",
    activities: "Terpilih memandu pembacaan ikrar wisudawan purna siswa kelas XII IPA 1 pada prosesi pelepasan kelulusan tahun ajaran 2023/2024.",
    logo: "assets/logos/man3.png"
  },
  {
    school: "MTsN 6 Bantul",
    degree: "Sekolah Menengah Pertama",
    location: "Bantul, D.I. Yogyakarta",
    period: "Lulus 2021",
    activities: "Delegasi Kompetisi Matematika dan Sains Madrasah.",
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
    issuer: "Kemdiktisaintek RI dan UMI Makassar",
    year: "2026",
    category: "Prestasi Nasional",
    description: "Penganugerahan tertinggi bagi tim pelaksana atas kedalaman metodologi pemberdayaan dan keberlanjutan dampak pada malam puncak Abdidaya Ormawa tingkat nasional di Makassar.",
    logo: "assets/logos/ppk-ormawa.png"
  },
  {
    title: "Penerima Pendanaan Program Penguatan Kapasitas Ormawa 2026",
    issuer: "Direktorat Belmawa Kemdiktisaintek RI",
    year: "2026",
    category: "Hibah Nasional",
    description: "Lolos seleksi substansi dan kelayakan proposal tingkat nasional untuk pendanaan penuh program pengabdian masyarakat berbasis inovasi perikanan.",
    logo: "assets/logos/segara.png"
  },
  {
    title: "Juara Harapan 2 Kompetisi Nasional Video HAM (Hentakan Aksi Mahasiswa)",
    issuer: "BEM Fakultas Keperawatan Universitas Airlangga",
    year: "2025",
    category: "Prestasi Nasional",
    description: "Karya sinematografi kampanye kesadaran hak asasi manusia dan advokasi sosial tingkat mahasiswa nasional.",
    icon: "bi bi-camera-video",
    iconColor: "#E91E63"
  },
  {
    title: "Apresiasi dan Penghargaan Tahfidz Al-Qur'an 7 Juz",
    issuer: "MAN 3 Bantul (MANTABA)",
    year: "2024",
    category: "Tahfidz dan Karakter",
    description: "Penganugerahan predikat hafalan Al-Qur'an 7 Juz secara mutqin pada wisuda tahfidz madrasah.",
    icon: "bi bi-book",
    iconColor: "#4CAF50"
  },
  {
    title: "Medali Perunggu Olimpiade Matematika Nasional (NYSI 2022)",
    issuer: "Pusat Olimpiade Sains Indonesia (POSI)",
    year: "2022",
    category: "Prestasi Nasional",
    description: "Kejuaraan kompetisi sains nasional bidang matematika kategori SMA/MA tingkat nasional.",
    logo: "assets/logos/posi.png"
  },
  {
    title: "Juara 2 Lomba Komik Sejarah Tokoh Sultan Agung Tingkat Provinsi",
    issuer: "Dinas Kebudayaan D.I. Yogyakarta",
    year: "2021",
    category: "Prestasi Provinsi",
    icon: "bi bi-palette",
    iconColor: "#FFB300",
    description: "Kompetisi ilustrasi komik edukasi sejarah perjuangan tokoh bangsa tingkat Provinsi D.I. Yogyakarta."
  },
  {
    title: "Sertifikat Kompetensi Pemrograman Python",
    issuer: "Kaggle Learn",
    year: "2025",
    category: "Sertifikasi Kompetensi",
    description: "Kredensial penguasaan struktur data, algoritma fungsional, dan komputasi dasar Python untuk sains data (diterbitkan 5 September 2025).",
    icon: "bi bi-bar-chart-steps",
    iconColor: "#20BEFF"
  },
  {
    title: "Sertifikat Pelatihan Kerja Desain Grafis (216 JPL)",
    issuer: "BLKPP Disnakertrans D.I. Yogyakarta",
    year: "2024",
    category: "Sertifikasi Kompetensi",
    description: "Kredensial uji kompetensi pelatihan Mobile Training Unit (MTU) produksi desain komunikasi visual (No. Sertifikat: 563/1010/2024).",
    logo: "assets/logos/blkpp.png"
  },
  {
    title: "Sertifikat Kursus Pembina Pramuka Mahir Tingkat Dasar (KMD)",
    issuer: "Kwartir Cabang (Kwarcab) Gerakan Pramuka Bantul",
    year: "2022",
    category: "Sertifikasi Kepemimpinan",
    description: "Kualifikasi resmi metodologi pembinaan kepramukaan, manajemen risiko lapangan, dan kepemimpinan kepanduan.",
    icon: "bi bi-compass",
    iconColor: "#4CAF50"
  }
];

export const mediaData: MediaCategory[] = [
  {
    category: "Peluncuran Program",
    links: [
      { title: "UNY: Peluncuran Resmi Program (27 Jun 2026)", url: "https://www.uny.ac.id/id/berita/ppk-ormawa-ksi-mist-fmipa-uny-luncurkan-program-segara-untuk-penguatan-sektor-perikanan-di", icon: "bi bi-globe" },
      { title: "Pemkal Sidoagung: Peresmian Kegiatan (26 Jun 2026)", url: "https://sidoagungsid.slemankab.go.id/home/2026/06/26/", icon: "bi bi-bank" },
      { title: "KSI Mist: Rilis Peluncuran Perdana", url: "https://www.ksimist.or.id/blog/ppk-ormawa-ksi-mist-luncurkan-program-segara-untuk-perkuat-sektor-perikanan-sidoagung", icon: "bi bi-people" }
    ]
  },
  {
    category: "Pembentukan Kelembagaan Perikanan",
    links: [
      { title: "FMIPA UNY: Inisiasi Paguyuban (6 Jul 2026)", url: "https://fmipa.uny.ac.id/id/berita/ppko-ksi-mist-fmipa-uny-inisiasi-pembentukan-gapokkan-segara-agung-untuk-perkuat-kelembagaan", icon: "bi bi-bank" },
      { title: "RRI Yogyakarta: Penguatan Kelembagaan (7 Jul 2026)", url: "https://rri.co.id/yogyakarta/berita-lain/2548229/uny-bentuk-gapokkan-perkuat-perikanan-sidoagung-berkelanjutan-bersama?nocache=true", icon: "bi bi-broadcast" },
      { title: "PanturaNews: Pembentukan Paguyuban (6 Jul 2026)", url: "https://panturanews.com/index.php/panturanews/baca/267376/06/07/2026/perkuat-kelembagaan-kelompok-perikanan-mahasiswa-uny-inisiasi-pembentukan-gapokkan-segara-agung.html", icon: "bi bi-newspaper" },
      { title: "Kompasiana: Kelembagaan Perikanan (6 Jul 2026)", url: "https://www.kompasiana.com/galuhpitakencana/6a4b250ded64155ead13c486/ppko-ksi-mist-fmipa-uny-inisiasi-pembentukan-gapokkan-segara-agung-untuk-perkuat-kelembagaan-kelompok-perikanan-sidoagung", icon: "bi bi-newspaper" },
      { title: "Pemkal Sidoagung: Konsolidasi Kelompok (10 Jul 2026)", url: "https://sidoagungsid.slemankab.go.id/home/2026/07/10/ppko-ksi-mist-fmipa-uny-inisiasi-pembentukan-gapokkan-segara-agung-untuk-perkuat-kelembagaan-kelompok-perikanan-sidoagung/", icon: "bi bi-bank" },
      { title: "Media Center Sleman: Penguatan dan Digitalisasi", url: "https://mediacenter.slemankab.go.id/2026/07/07/siapkan-masa-depan-perikanan-sidoagung-program-segara-uny-pacu-penguatan-kelembagaan-dan-digitalisasi/", icon: "bi bi-buildings" },
      { title: "Media Center Sleman: Sektor Perikanan Godean", url: "https://mediacenter.slemankab.go.id/2026/07/07/perkuat-sektor-perikanan-godean-mahasiswa-uny-inisiasi-pembentukan-gapokkan-segara-agung/", icon: "bi bi-buildings" },
      { title: "KIM Margo Raras (6 Jul 2026)", url: "https://margoraras.kim.id/berita/read/ppko-ksi-mist-fmipa-uny-inisiasi-ga69809-340405200201", icon: "bi bi-newspaper" },
      { title: "KSI Mist: Dokumentasi Kelembagaan", url: "https://www.ksimist.or.id/blog/ppko-ksi-mist-fmipa-uny-inisiasi-pembentukan-gapokkan-segara-agung-untuk-perkuat-kelembagaan-perikanan-sidoagung", icon: "bi bi-people" }
    ]
  },
  {
    category: "Inkubasi Pengolahan Produk",
    links: [
      { title: "DKA UNY (19 Jul 2026)", url: "https://dka.uny.ac.id/berita/segara-karya-resmi-dimulai-tim-ppk-ormawa-ksi-mist-fmipa-uny-gelar-inkubasi-pelatihan-pengolahan-produk", icon: "bi bi-globe" },
      { title: "FMIPA UNY (21 Jul 2026)", url: "https://fmipa.uny.ac.id/id/berita/segara-karya-resmi-dimulai-tim-ppk-ormawa-ksi-mist-fmipa-uny-gelar-inkubasi-pelatihan", icon: "bi bi-bank" },
      { title: "Pemkal Sidoagung (23 Jul 2026)", url: "https://sidoagungsid.slemankab.go.id/home/2026/07/23/tim-ppk-ormawa-ksi-mist-fmipa-uny-awali-rangkaian-segara-karya-melalui-inkubasi-pelatihan-pengolahan-produk/", icon: "bi bi-bank" },
      { title: "RRI Yogyakarta (20 Jul 2026)", url: "https://rri.co.id/yogyakarta/regional/2583182/uny-kembangkan-olahan-ikan-tingkatkan-ekonomi-warga-sidoagung-godean?nocache=true", icon: "bi bi-broadcast" },
      { title: "Kompasiana (19 Jul 2026)", url: "https://www.kompasiana.com/galuhpitakencana/6a5c8025c925c478516bb662/segara-karya-resmi-dimulai-tim-ppko-ksi-mist-fmipa-uny-gelar-inkubasi-pelatihan-pengolahan-produk", icon: "bi bi-newspaper" },
      { title: "Media Center Sleman (20 Jul 2026)", url: "https://mediacenter.slemankab.go.id/2026/07/20/olah-lele-dan-nila-jadi-dimsum-uny-dampingi-warga-sidoagung-ciptakan-produk-perikanan-bernilai-tambah/", icon: "bi bi-buildings" },
      { title: "Bisnis Jogja (24 Jul 2026)", url: "https://www.bisnisjogja.id/dorong-umkm-perikanan-uny-inisiasi-inkubasi-olahan-lele-dan-nila/", icon: "bi bi-newspaper" },
      { title: "KSI Mist", url: "https://www.ksimist.or.id/blog/segara-karya-resmi-dimulai-tim-ppk-ormawa-ksi-mist-fmipa-uny-gelar-inkubasi-pelatihan-pengolahan-produk", icon: "bi bi-people" }
    ]
  },
  {
    category: "Rakor Uji Keamanan Aplikasi dan Web",
    links: [
      { title: "DKA UNY (22 Jul 2026)", url: "https://dka.uny.ac.id/berita/tim-ppk-ormawa-ksi-mist-fmipa-uny-paparkan-aplikasi-segara-dalam-rakor-uji-keamanan-bersama-dinas-kominfo-kabupaten-sleman", icon: "bi bi-globe" },
      { title: "FMIPA UNY (22 Jul 2026)", url: "https://fmipa.uny.ac.id/id/berita/tim-ppk-ormawa-ksi-mist-fmipa-uny-paparkan-aplikasi-segara-dalam-rakor-uji-keamanan-bersama", icon: "bi bi-bank" },
      { title: "Pemkal Sidoagung (24 Jul 2026)", url: "https://sidoagungsid.slemankab.go.id/home/2026/07/24/tim-ppk-ormawa-ksi-mist-fmipa-uny-paparkan-aplikasi-segara-dalam-rakor-uji-keamanan-bersama-dinas-kominfo-kabupaten-sleman/", icon: "bi bi-bank" },
      { title: "RRI Yogyakarta (23 Jul 2026)", url: "https://rri.co.id/yogyakarta/iptek/2588924/uny-matangkan-aplikasi-segara-platform-digital-potensi-perikanan-sleman?nocache=true", icon: "bi bi-broadcast" },
      { title: "Kompasiana (27 Jul 2026)", url: "https://www.kompasiana.com/galuhpitakencana/6a675eb8c925c42d86298cd2/tim-ppko-ksi-mist-fmipa-uny-paparkan-aplikasi-segara-dalam-rakor-uji", icon: "bi bi-newspaper" },
      { title: "Suara Djogja (23 Jul 2026)", url: "https://www.suaradjogja.com/2026/07/tim-ppk-ormawa-ksi-mist-fmipa-uny.html", icon: "bi bi-newspaper" },
      { title: "KSI Mist", url: "https://www.ksimist.or.id/blog/tim-ppk-ormawa-ksi-mist-fmipa-uny-paparkan-aplikasi-segara-dalam-rakor-uji-keamanan-bersama-dinas-kominfo-sleman", icon: "bi bi-people" }
    ]
  },
  {
    category: "Pelatihan Transformasi Digital Warga",
    links: [
      { title: "DKA UNY (4 Agu 2026)", url: "https://dka.uny.ac.id/berita/tim-ppk-ormawa-ksi-mist-fmipa-uny-gelar-pelatihan-segara-app-untuk-perkuat-transformasi-digital-sektor-perikanan-di-kalurahan-sidoagung", icon: "bi bi-globe" },
      { title: "FMIPA UNY (31 Jul 2026)", url: "https://fmipa.uny.ac.id/id/berita/tim-ppk-ormawa-ksi-mist-fmipa-uny-gelar-pelatihan-segara-app-untuk-perkuat-transformasi", icon: "bi bi-bank" },
      { title: "Pemkal Sidoagung (7 Agu 2026)", url: "https://sidoagungsid.slemankab.go.id/home/2026/08/07/tim-ppk-ormawa-ksi-mist-fmipa-uny-gelar-pelatihan-segara-app-untuk-perkuat-transformasi-digital-sektor-perikanan-di-kalurahan-sidoagung/", icon: "bi bi-bank" },
      { title: "RRI Yogyakarta (29 Jul 2026)", url: "https://rri.co.id/yogyakarta/iptek/2607219/segara-app-dorong-digitalisasi-pemasaran-perikanan-sidoagung?nocache=true", icon: "bi bi-broadcast" },
      { title: "Kompasiana (28 Jul 2026)", url: "https://www.kompasiana.com/galuhpitakencana/6a675ff4ed641541dd525505/tim-ppko-ksi-mist-fmipa-uny-gelar-pelatihan-segara-app-untuk-perkuat-transformasi-digital-sektor-perikanan-di-kalurahan-sidoagung", icon: "bi bi-newspaper" },
      { title: "KSI Mist", url: "https://www.ksimist.or.id/blog/tim-ppk-ormawa-ksi-mist-fmipa-uny-gelar-pelatihan-segara-app-untuk-perkuat-transformasi-digital-perikanan", icon: "bi bi-people" }
    ]
  },
  {
    category: "Sosialisasi Higienitas Dinkes dan Pemasaran BLK",
    links: [
      { title: "Dinkes: FMIPA UNY", url: "https://fmipa.uny.ac.id/id/berita/ppko-ksi-mist-fmipa-uny-bersama-dinas-kesehatan-sleman-perkuat-standardisasi-produk-dan", icon: "bi bi-bank" },
      { title: "Dinkes: Pemkal Sidoagung", url: "https://sidoagungsid.slemankab.go.id/home/2026/08/01/ppko-ksi-mist-fmipa-uny-bersama-dinas-kesehatan-sleman-perkuat-standardisasi-produk-dan-higienitas-umkm-olahan-ikan/", icon: "bi bi-bank" },
      { title: "Dinkes: RRI Yogyakarta", url: "https://rri.co.id/yogyakarta/berita-lain/2627288/ppko-uny-berhasil-tingkatkan-mutu-umkm-olahan-ikan-sidoagung?nocache=true", icon: "bi bi-broadcast" },
      { title: "Dinkes: Kompasiana", url: "https://www.kompasiana.com/galuhpitakencana/6a71eb99c925c466c314be02/ppko-ksi-mist-uny-bersama-dinkes-perkuat-standardisasi-produk-olahan-ikan", icon: "bi bi-newspaper" },
      { title: "BLK: Pemkal Sidoagung", url: "https://sidoagungsid.slemankab.go.id/home/2026/08/07/ppko-ksi-mist-fmipa-uny-bersama-blk-gelar-sosialisasi-strategi-pemasaran-digital-bagi-peserta-segara-karya-kalurahan-sidoagung/", icon: "bi bi-bank" },
      { title: "BLK: RRI Yogyakarta", url: "https://rri.co.id/yogyakarta/berita-lain/2633993/uny-perkuat-pemasaran-digital-produk-olahan-ikan-desa-unggulan?nocache=true", icon: "bi bi-broadcast" },
      { title: "BLK: Kompasiana", url: "https://www.kompasiana.com/galuhpitakencana/6a7b259fc925c448c127a5d8/ppko-ksi-mist-fmipa-uny-bersama-blk-gelar-sosialisasi-pemasaran-digital", icon: "bi bi-newspaper" }
    ]
  },
  {
    category: "Pelatihan Lanjutan dan Sinergi Dinkop UKM",
    links: [
      { title: "Olahan Lanjutan: Kompasiana", url: "https://www.kompasiana.com/galuhpitakencana/6a85aa20c925c46308413622/ppko-ksi-mist-kembali-gelar-pelatihan-pengolahan-produk-ikan-di-sidoagung", icon: "bi bi-newspaper" },
      { title: "Olahan Lanjutan: KSI Mist", url: "https://www.ksimist.or.id/blog/tim-ppko-ksi-mist-fmipa-uny-kembali-gelar-pelatihan-pengolahan-produk-ikan-di-sidoagung", icon: "bi bi-people" },
      { title: "Sinergi Dinkop: Kompasiana", url: "https://www.kompasiana.com/galuhpitakencana/6a85b88cc925c412ae400b40/ppko-ksi-mist-fmipa-uny-gandeng-dinkop-sleman-tingkatkan-usaha-sidoagung", icon: "bi bi-newspaper" }
    ]
  },
  {
    category: "Apresiasi Bupati dan DPRD Sleman",
    links: [
      { title: "FMIPA UNY (Bupati)", url: "https://fmipa.uny.ac.id/id/berita/bupati-sleman-apresiasi-ppko-ksi-mist-fmipa-uny-siap-dukung-pengembangan-program", icon: "bi bi-bank" },
      { title: "FMIPA UNY (DPRD)", url: "https://fmipa.uny.ac.id/id/berita/dprd-kabupaten-sleman-dukung-ppko-ksi-mist-fmipa-uny-perkuat-pemberdayaan-masyarakat", icon: "bi bi-bank" },
      { title: "RRI Yogyakarta (Bupati)", url: "https://rri.co.id/yogyakarta/berita-lain/2643946/bupati-sleman-dukung-program-pemberdayaan-olahan-ikan-mahasiswa-uny?nocache=true", icon: "bi bi-broadcast" },
      { title: "RRI Yogyakarta (DPRD)", url: "https://rri.co.id/yogyakarta/info-parlemen/2643952/dprd-sleman-dukung-pemberdayaan-masyarakat-sidoagung?nocache=true", icon: "bi bi-broadcast" },
      { title: "Kompasiana (Bupati)", url: "https://www.kompasiana.com/galuhpitakencana/6a7b2bc934777c5e7e77ca5a/bupati-sleman-apresiasi-ppko-ksi-mist-fmipa-uny", icon: "bi bi-newspaper" },
      { title: "Kompasiana (DPRD)", url: "https://www.kompasiana.com/galuhpitakencana/6a85ac89ed64155146241834/dprd-sleman-dukung-ppko-ksi-mist-fmipa-uny-dalam-pemberdayaan-sidoagung", icon: "bi bi-newspaper" },
      { title: "Media Center Sembada", url: "https://mediacenter.slemankab.go.id/2026/08/11/pemkab-dan-dprd-sleman-dukung-uny-kembangkan-potensi-perikanan-lokal-sidoagung/", icon: "bi bi-buildings" },
      { title: "InfoPublik Nasional", url: "https://infopublik.id/kategori/nusantara/983269/pakai-segara-app-mahasiswa-uny-berdayakan-ekonomi-perikanan-lokal-sleman", icon: "bi bi-globe" },
      { title: "KSI Mist (Bupati)", url: "https://www.ksimist.or.id/blog/bupati-sleman-apresiasi-ppko-ksi-mist-fmipa-uny-dukung-pengembangan-program-pemberdayaan-masyarakat", icon: "bi bi-people" },
      { title: "KSI Mist (DPRD)", url: "https://www.ksimist.or.id/blog/dprd-kabupaten-sleman-dukung-ppko-ksi-mist-fmipa-uny-perkuat-pemberdayaan-masyarakat-sidoagung", icon: "bi bi-people" }
    ]
  },
  {
    category: "Liputan Media Regional dan Institusi Pendidikan",
    links: [
      { title: "Harian Merapi: Liputan Inovasi Perikanan", url: "https://www.harianmerapi.com", icon: "bi bi-newspaper" },
      { title: "Tribun Jogja: Liputan Prestasi Daerah", url: "https://jogja.tribunnews.com", icon: "bi bi-newspaper" },
      { title: "UMI Makassar: Tuan Rumah Abdidaya Nasional", url: "https://umi.ac.id", icon: "bi bi-award" },
      { title: "MAN 3 Bantul: Warta Medali Kompetisi Matematika", url: "https://man3bantul.sch.id/berita/dahron-siswa-man-3-bantul-sabet-medali-kompetisi-matematika-nasional", icon: "bi bi-mortarboard" },
      { title: "DKA UNY: Arsip Berita PPK Ormawa", url: "https://dka.uny.ac.id/tags/ppko-tahun-2026", icon: "bi bi-bank" }
    ]
  }
];

export const documentaryPhotos: DocumentaryPhoto[] = [
  {
    src: "assets/images/portfolio/man3-medali-matematika.jpg",
    alt: "Penyerahan medali kompetisi matematika di MAN 3 Bantul",
    caption: "Dokumentasi penyerahan apresiasi kejuaraan matematika di kampus MAN 3 Bantul",
    category: "Prestasi & Riset",
    tag: "Kompetisi Sains",
    source: "Humas MAN 3 Bantul"
  },
  {
    src: "assets/images/portfolio/segara-app-training.jpg",
    alt: "Pendampingan warga menggunakan aplikasi perikanan di Sidoagung",
    caption: "Sesi praktik langsung penggunaan aplikasi digital bersama perwakilan kelompok perikanan dan pamong",
    category: "Pemberdayaan",
    tag: "Literasi Digital",
    source: "Humas UNY dan Diskominfo"
  },
  {
    src: "assets/images/portfolio/segara-banner-sidoagung.jpg",
    alt: "Foto bersama peserta dan pemangku kepentingan di Balai Kalurahan Sidoagung",
    caption: "Dokumentasi kolaboratif bersama jajaran birokrasi kampus, perangkat desa, dan pembudidaya ikan",
    category: "Pemberdayaan",
    tag: "Sinergi Lintas Sektor",
    source: "Dokumentasi Tim"
  },
  {
    src: "assets/images/portfolio/segara-event-1.jpg",
    alt: "Prosesi simbolis pembukaan kegiatan pengabdian di Balai Kalurahan",
    caption: "Seremoni pembukaan program pemberdayaan masyarakat di Balai Kalurahan Sidoagung",
    category: "Pemberdayaan",
    tag: "Seremoni Pembukaan",
    source: "Dokumentasi Pemkal Sidoagung"
  },
  {
    src: "assets/images/portfolio/uny-dscf0754.jpg",
    alt: "Pemaparan rencana kegiatan kepada warga Kalurahan Sidoagung",
    caption: "Sosialisasi tahapan kegiatan pemberdayaan kepada masyarakat dan tokoh warga setempat",
    category: "Pemberdayaan",
    tag: "Sosialisasi Warga",
    source: "Humas Resmi UNY"
  },
  {
    src: "assets/images/portfolio/uny-dscf0713.jpg",
    alt: "Praktik lapangan manajemen kualitas air kolam dan pakan",
    caption: "Pendampingan teknis pengelolaan kualitas air kolam dan efisiensi pakan budidaya",
    category: "Lapangan & Teknis",
    tag: "Pendampingan Teknis",
    source: "Humas Resmi UNY"
  },
  {
    src: "assets/images/portfolio/uny-dscf0812.jpg",
    alt: "Diskusi kelompok terpumpun bersama perwakilan dinas terkait",
    caption: "Forum diskusi terpumpun (FGD) penyelarasan program bersama perwakilan instansi daerah",
    category: "Pemberdayaan",
    tag: "Forum Koordinasi",
    source: "Humas Resmi UNY"
  },
  {
    src: "assets/images/portfolio/fmipa-ksi1.jpg",
    alt: "Kegiatan pembinaan anggota riset mahasiswa di FMIPA UNY",
    caption: "Sesi diskusi dan pembinaan kelompok riset mahasiswa di lingkungan Fakultas MIPA",
    category: "Prestasi & Riset",
    tag: "Forum Ilmiah",
    source: "FMIPA UNY"
  },
  {
    src: "assets/images/portfolio/fmipa-ksi2.jpg",
    alt: "Dokumentasi penerima apresiasi mahasiswa berprestasi di tingkat fakultas",
    caption: "Apresiasi capaian kompetisi ilmiah mahasiswa di lingkungan Fakultas MIPA UNY",
    category: "Prestasi & Riset",
    tag: "Apresiasi Fakultas",
    source: "FMIPA UNY"
  },
  {
    src: "assets/images/portfolio/fmipa-ksi5.jpg",
    alt: "Peninjauan langsung kondisi kolam perikanan warga di lapangan",
    caption: "Observasi dan pemetaan kondisi fisik kolam perikanan rakyat di lokasi pendampingan",
    category: "Lapangan & Teknis",
    tag: "Observasi Lapangan",
    source: "FMIPA UNY"
  },
  {
    src: "assets/images/portfolio/abdidaya-stage-uny.jpg",
    alt: "Penerimaan penghargaan di panggung malam puncak Abdidaya",
    caption: "Momen penerimaan penghargaan nasional di panggung utama malam puncak penganugerahan",
    category: "Prestasi & Riset",
    tag: "Malam Penganugerahan",
    source: "Dokumentasi Abdidaya"
  }
];

export const galleryEmbeds: string[] = [
  "https://www.instagram.com/p/DI_sBzXzehS/embed",
  "https://www.instagram.com/p/DX1PO_jk4R9/embed",
  "https://www.instagram.com/p/DLSHsERzNEC/embed",
  "https://www.instagram.com/p/C3oTFNvv0h7/embed",
  "https://www.instagram.com/p/CiZ_fbFPs_4/embed",
  "https://www.instagram.com/p/Czgde8Fvgtu/embed"
];

export const heroPhotos: { src: string; alt: string }[] = [];

export const rawPortfolioContent = {
  personalInfo,
  heroData,
  aboutData,
  programsShowcaseData,
  skillsCategories,
  experienceProgramAndWork,
  experienceOrganization,
  educationData,
  achievementsData,
  mediaData,
  documentaryPhotos,
  galleryEmbeds,
  heroPhotos
};
