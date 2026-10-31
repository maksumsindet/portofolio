import os
import json

base_dir = r"d:\Kuliah\Magang\Web\Web Maksum\hasil-data-mining-foto"

# Mapping rules based on filenames
def categorize(folder, filename):
    fn = filename.lower()
    
    # 1. Religius & Pramuka
    if "tahfidz" in fn:
        slide_num = fn.split("slide")[-1].replace(".jpg", "") if "slide" in fn else ""
        return {
            "category": "Religius & Pramuka",
            "tag": "Tahfidz Al-Qur'an",
            "caption": f"Apresiasi Wisuda Tahfidz Al-Qur'an 7 Juz di MAN 3 Bantul (Dokumentasi Slide {slide_num})" if slide_num else "Apresiasi Wisuda Tahfidz Al-Qur'an 7 Juz di MAN 3 Bantul",
            "source": "Dokumentasi Instagram @mksmetrics"
        }
    if "pramuka" in fn:
        if "cium" in fn or "bendera" in fn:
            return {
                "category": "Religius & Pramuka",
                "tag": "Pramuka Penegak",
                "caption": "Momen khidmat mencium Sang Saka Merah Putih pada prosesi pelantikan Pramuka Penegak MAN 3 Bantul",
                "source": "Dokumentasi Instagram @mksmetrics"
            }
        elif "amanat" in fn or "upacara" in fn:
            return {
                "category": "Religius & Pramuka",
                "tag": "Pembina Upacara",
                "caption": "Memimpin dan menyampaikan amanat upacara apel kepramukaan di hadapan barisan siswa MAN 3 Bantul",
                "source": "Dokumentasi Instagram @mksmetrics"
            }
        else:
            return {
                "category": "Religius & Pramuka",
                "tag": "Pramuka MAN 3",
                "caption": "Kebersamaan dan jiwa korsa bersama rekan-rekan Dewan Ambalan Pramuka MAN 3 Bantul",
                "source": "Dokumentasi Instagram @mksmetrics"
            }
            
    # 2. Petualangan & Alam Terbuka
    if any(k in fn for k in ["prau", "dieng", "semendung", "pegunungan", "kafe_pegunungan", "outdoor", "mobil"]):
        if "puncak" in fn or "sunrise" in fn:
            return {
                "category": "Petualangan & Alam Terbuka",
                "tag": "Puncak Gn. Prau",
                "caption": "Pemandangan cakrawala sunrise keemasan di Puncak Gunung Prau (2.590 MDPL), Dieng Plateau",
                "source": "Dokumentasi Pendakian Pribadi"
            }
        elif "plakat" in fn:
            return {
                "category": "Petualangan & Alam Terbuka",
                "tag": "2.590 MDPL",
                "caption": "Mendokumentasikan pencapaian di tugu plakat puncak Gunung Prau 2.590 MDPL",
                "source": "Dokumentasi Pendakian Pribadi"
            }
        elif "pos" in fn or "basecamp" in fn:
            return {
                "category": "Petualangan & Alam Terbuka",
                "tag": "Jalur Pendakian",
                "caption": "Perjalanan melintasi jalur pendakian Gunung Prau via Dieng melewati Pos Semendung",
                "source": "Dokumentasi Pendakian Pribadi"
            }
        else:
            return {
                "category": "Petualangan & Alam Terbuka",
                "tag": "Eksplorasi Alam",
                "caption": "Eksplorasi keindahan alam dan ruang terbuka di kawasan dataran tinggi Dieng",
                "source": "Dokumentasi Pendakian Pribadi"
            }

    # 3. Kepemimpinan & Organisasi
    if "ihmsi" in fn or "presidium" in fn:
        if "slide" in fn:
            num = fn.split("slide")[-1].replace(".jpg", "")
            return {
                "category": "Kepemimpinan & Organisasi",
                "tag": "Presidium I Mukernas",
                "caption": f"Memimpin persidangan Musyawarah Kerja Nasional (Mukernas) XIX IHMSI sebagai Presidium 1 (Dokumentasi Slide {num})",
                "source": "Dokumentasi Instagram @mksmetrics"
            }
        elif "bersama" in fn or "delegasi" in fn:
            return {
                "category": "Kepemimpinan & Organisasi",
                "tag": "Delegasi HIMATIKA",
                "caption": "Delegasi HIMATIKA FMIPA UNY pada Musyawarah Kerja Nasional XIX IHMSI di Yogyakarta",
                "source": "HIMATIKA FMIPA UNY"
            }
        else:
            return {
                "category": "Kepemimpinan & Organisasi",
                "tag": "Sidang IHMSI",
                "caption": "Pemandangan sidang pleno Mukernas XIX Ikatan Himpunan Mahasiswa Statistika Indonesia",
                "source": "Humas IHMSI"
            }
            
    if "ksi" in fn and "laporan" in fn:
        return {
            "category": "Kepemimpinan & Organisasi",
            "tag": "Departemen KPL",
            "caption": "Evaluasi dan pemaparan laporan pertanggungjawaban program kerja Departemen KPL KSI Mist FMIPA UNY",
            "source": "Arsip Sublaporan Akhir KSI Mist"
        }

    # 4. Prestasi & Penghargaan
    if "abdidaya" in fn:
        if "kontingen" in fn:
            return {
                "category": "Prestasi & Penghargaan",
                "tag": "Terbaik 2 Nasional",
                "caption": "Kontingen Universitas Negeri Yogyakarta merayakan raihan Terbaik 2 Nasional Abdidaya Ormawa 2026 di UMI Makassar",
                "source": "Humas Resmi UNY & Belmawa"
            }
        elif "panggung" in fn:
            return {
                "category": "Prestasi & Penghargaan",
                "tag": "Penganugerahan",
                "caption": "Penyerahan anugerah penghargaan nasional pada Malam Puncak Abdidaya Ormawa 2026",
                "source": "Belmawa Kemdiktisaintek RI"
            }
        else:
            return {
                "category": "Prestasi & Penghargaan",
                "tag": "Juara 2 Nasional",
                "caption": "Muhammad Dahron Mustofa Maksum memegang piagam penghargaan Terbaik 2 Nasional Abdidaya Ormawa 2026",
                "source": "Dokumentasi Belmawa & Pribadi"
            }
            
    if "mahasiswa_berprestasi" in fn or "mawapres" in fn:
        return {
            "category": "Prestasi & Penghargaan",
            "tag": "Mawapres UNY",
            "caption": "Rekognisi Pemilihan Mahasiswa Berprestasi (Pilmapres) Fakultas MIPA Universitas Negeri Yogyakarta 2026",
            "source": "Dokumentasi Instagram @mksmetrics"
        }
        
    if "matematika" in fn or "posi" in fn:
        return {
            "category": "Prestasi & Penghargaan",
            "tag": "Medali Matematika",
            "caption": "Perolehan Medali Perunggu Kompetisi Sains Matematika Nasional POSI jenjang Madrasah Aliyah di MAN 3 Bantul",
            "source": "Humas MAN 3 Bantul"
        }
        
    if "komik" in fn or "sultan_agung" in fn:
        return {
            "category": "Prestasi & Penghargaan",
            "tag": "Juara Komik Sejarah",
            "caption": "Penganugerahan Juara 2 Lomba Komik Sejarah Tokoh Sultan Agung Tingkat DIY diliput media cetak Tribun Jogja",
            "source": "Tribun Jogja & Dinas Kebudayaan"
        }

    # 5. Media & Berita Acara
    if "koran" in fn or "merapi" in fn:
        return {
            "category": "Media & Berita Acara",
            "tag": "Kliping Media",
            "caption": "Publikasi dan liputan program pemberdayaan SEGARA pada Harian Merapi surat kabar cetak Yogyakarta",
            "source": "Koran Harian Merapi"
        }
    if "berita_acara" in fn:
        return {
            "category": "Media & Berita Acara",
            "tag": "Legalitas Luaran",
            "caption": "Dokumen Berita Acara Serah Terima Luaran Program SEGARA yang ditandatangani resmi oleh Muhammad Dahron",
            "source": "Sublaporan Akhir PPK Ormawa"
        }
    if "press_release" in fn or "poster" in fn or "biodata" in fn or "jas" in fn or "pasfoto" in fn:
        return {
            "category": "Media & Berita Acara",
            "tag": "Profil & Publikasi",
            "caption": "Publikasi profil kepemimpinan dan lembar rilis resmi program Sentra Gerak Agromina",
            "source": "Dokumentasi Tim SEGARA"
        }

    # 6. Inovasi Teknis & Pelatihan
    if "diskominfo" in fn or "aplikasi" in fn:
        return {
            "category": "Inovasi Teknis & Pelatihan",
            "tag": "SEGARA App",
            "caption": "Rapat koordinasi teknis dan pengujian keamanan platform digital SEGARA App bersama Diskominfo Sleman",
            "source": "Diskominfo Sleman & Tim IT"
        }
    if "dinkes" in fn or "sertifikat" in fn:
        return {
            "category": "Inovasi Teknis & Pelatihan",
            "tag": "Standarisasi Dinkes",
            "caption": "Sosialisasi sertifikasi kelayakan higienitas pangan dan P-IRT bersama narasumber Dinas Kesehatan Sleman",
            "source": "Dinas Kesehatan Sleman"
        }
    if "olahan_ikan" in fn or "memasak" in fn or "ridho_fresh" in fn or "segara_karya" in fn:
        return {
            "category": "Inovasi Teknis & Pelatihan",
            "tag": "Diversifikasi Produk",
            "caption": "Praktik hilirisasi dan diversifikasi produk olahan ikan air tawar bersama kelompok wanita tani (KWT) Sidoagung",
            "source": "Dokumentasi PPKO SEGARA"
        }
    if "blk" in fn or "dinkop" in fn or "koperasi" in fn:
        return {
            "category": "Inovasi Teknis & Pelatihan",
            "tag": "Legalitas & Pasar",
            "caption": "Pelatihan pemasaran digital dan pendampingan izin usaha NIB bersama Dinas Koperasi & UKM Sleman",
            "source": "Dinas Koperasi & UKM Sleman"
        }

    # 7. Default to Pemberdayaan SEGARA
    if "bupati" in fn:
        return {
            "category": "Pemberdayaan SEGARA",
            "tag": "Audiensi Bupati",
            "caption": "Audiensi dan pemaparan capaian program SEGARA di ruang kerja Bupati Sleman",
            "source": "Dokumentasi Pemkab Sleman"
        }
    if "dprd" in fn:
        return {
            "category": "Pemberdayaan SEGARA",
            "tag": "Sinergi DPRD",
            "caption": "Sosialisasi dan penguatan sinergi kebijakan perikanan bersama Pimpinan DPRD Kabupaten Sleman",
            "source": "Sekretariat DPRD Sleman"
        }
    if "lintas_dinas" in fn:
        return {
            "category": "Pemberdayaan SEGARA",
            "tag": "20 Dinas Sleman",
            "caption": "Rakor terpadu lintas 20 dinas/instansi Pemerintah Kabupaten Sleman menjamin keberlanjutan pasca-program",
            "source": "Bappeda Sleman & Tim SEGARA"
        }
    if "gapokkan" in fn or "fgd" in fn:
        return {
            "category": "Pemberdayaan SEGARA",
            "tag": "Gapokkan Segara",
            "caption": "Inisiasi dan pembentukan Gabungan Kelompok Pembudidaya Ikan (Gapokkan) Segara Agung 224 kolam",
            "source": "Pemerintah Kalurahan Sidoagung"
        }
    if "opening" in fn or "tumpeng" in fn:
        return {
            "category": "Pemberdayaan SEGARA",
            "tag": "Grand Opening",
            "caption": "Peluncuran resmi program Sentra Gerak Agromina di Balai Kalurahan Sidoagung dihadiri pimpinan kampus dan pamong",
            "source": "Dokumentasi Resmi UNY"
        }
    if "closing" in fn or "kelulusan" in fn:
        return {
            "category": "Pemberdayaan SEGARA",
            "tag": "Grand Closing",
            "caption": "Puncak penyerahan 15 luaran dan wisuda kelulusan inkubasi wirausaha perikanan warga Sidoagung",
            "source": "Dokumentasi Tim Pelaksana"
        }
    if "edukasi" in fn or "anak" in fn:
        return {
            "category": "Pemberdayaan SEGARA",
            "tag": "Edukasi Generasi Muda",
            "caption": "Sosialisasi gemar makan ikan dan edukasi gizi bagi anak-anak serta generasi muda Kalurahan Sidoagung",
            "source": "Dokumentasi Edukasi Warga"
        }
    if "festival" in fn or "rektor" in fn:
        return {
            "category": "Pemberdayaan SEGARA",
            "tag": "Pasar Triwulan",
            "caption": "Festival Segara Raya dan Pasar Triwulan ditinjau langsung oleh Rektor UNY dan Bupati Sleman",
            "source": "Humas DKA UNY"
        }

    return {
        "category": "Pemberdayaan SEGARA",
        "tag": "Aksi Lapangan",
        "caption": "Dokumentasi kegiatan dan koordinasi lapangan tim pelaksana di Kalurahan Sidoagung",
        "source": "Dokumentasi Tim SEGARA"
    }

def main():
    dest_root = r"d:\Kuliah\Magang\Web\Web Maksum\public\assets\images\mined"
    output_items = []
    
    # Iterate through all 4 folders in deterministic order
    folders = [
        "01-Foto-Profil-dan-Prestasi-Dahron",
        "02-Foto-Instagram-Dahron",
        "03-Foto-Kegiatan-PPKO-SEGARA-Ada-Dahron",
        "04-Foto-Sublaporan-Akhir-KSI-Mist-Dahron"
    ]
    
    for folder in folders:
        fpath = os.path.join(dest_root, folder)
        if not os.path.exists(fpath):
            continue
        for fname in sorted(os.listdir(fpath)):
            if not fname.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                continue
            meta = categorize(folder, fname)
            rel_src = f"assets/images/mined/{folder}/{fname}"
            output_items.append({
                "src": rel_src,
                "alt": meta["caption"],
                "caption": meta["caption"],
                "category": meta["category"],
                "tag": meta["tag"],
                "source": meta["source"]
            })
            
    print(f"Total processed photos: {len(output_items)}")
    
    # Save as JSON for inspection
    with open(r"d:\Kuliah\Magang\Web\Web Maksum\scripts\generated_gallery.json", "w", encoding="utf-8") as f:
        json.dump(output_items, f, indent=2, ensure_ascii=False)
        
    print("Saved generated_gallery.json successfully!")
    
    # Print categories breakdown
    cats = {}
    for item in output_items:
        cats[item["category"]] = cats.get(item["category"], 0) + 1
    print("Categories distribution:")
    for c, n in sorted(cats.items(), key=lambda x: -x[1]):
        print(f"  {c}: {n} photos")

if __name__ == "__main__":
    main()

