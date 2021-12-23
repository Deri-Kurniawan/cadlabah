# <img src="public/images/readme-brand.jpeg">
![html](https://img.shields.io/static/v1?message=HTML&logo=html5&labelColor=5c5c5c&color=1182c3&label=%20)
![html](https://img.shields.io/static/v1?message=Javascript&logo=javascript&labelColor=5c5c5c&color=1182c3&label=%20)
![npm](https://img.shields.io/static/v1?message=npm&logo=npm&labelColor=5c5c5c&color=1182c3&label=%20)
![nodejs](https://img.shields.io/static/v1?message=Node%20Js&logo=node.js&labelColor=5c5c5c&color=1182c3&label=%20)
![bootstrap](https://img.shields.io/static/v1?message=Bootstrap%205&logo=bootstrap&labelColor=5c5c5c&color=1182c3&label=%20)
![google-fonts](https://img.shields.io/static/v1?message=Chakra%20Petch&logo=googlefonts&labelColor=5c5c5c&color=1182c3&label=%20)
![google-fonts](https://badgen.net/badge/icon/airbnb?icon=airbnb&label)

![Github Tags](https://badgen.net/github/contributors/capstone-csd-196/cadlabah)
![Github tags](https://badgen.net/github/tags/capstone-csd-196/cadlabah)
![Github License](https://badgen.net/github/license/capstone-csd-196/cadlabah)

![Github PRs](https://badgen.net/github/prs/capstone-csd-196/cadlabah)
![Github Open PRs](https://badgen.net/github/open-prs/capstone-csd-196/cadlabah)
![Github Closed PRs](https://badgen.net/github/closed-prs/capstone-csd-196/cadlabah)
![Github Merge PRs](https://badgen.net/github/merged-prs/capstone-csd-196/cadlabah)


CADLABAH adalah sebuah aplikasi website untuk pencarian dan pelaporan barang hilang berbentuk sebuah postingan yang dapat dilihat oleh seluruh pengguna.

Deployed on https://cadlabah.glitch.me (TUNGGU SAMPAI APLIKASI AKTIF)

## Fitur Aplikasi
1. Posting Pengumuman berisi 2 pilihan yaitu post barang hilang dan post barang temuan. [Menuju Fitur](https://cadlabah.glitch.me/post/create) (Harus Login)
2. Daftar Postingan yang berisi semua postingan barang hilang maupun barang temuan. [Menuju Fitur](https://cadlabah.glitch.me/posts)
3. Tips & Trik berisi informasi informasi cara mengatasi masalah barang yang hilang. [Menuju Fitur](https://cadlabah.glitch.me/edu/tips-dan-trik)
4. Kategori yaitu berisi barang temuan maupun barang hilang yang ditampilkan sesuai dengan  kategori. Kami hanya membuat 2 kategori saja yaitu kategori [elektronik](https://cadlabah.glitch.me/posts/category/electronic) dan [aksesoris](https://cadlabah.glitch.me/posts/category/accessories).

## Library & API Yang Digunakan
1. [Daftar Library & API By Github](https://github.com/Capstone-CSD-196/cadlabah/network/dependencies)
2. [Tiny](https://www.tiny.cloud/about)
3. [Mockapi](https://mockapi.io/about)


## Halaman Aplikasi
1. Beranda [/](https://cadlabah.glitch.me/)
2. Postingan [/posts](https://cadlabah.glitch.me/posts)
2. Postingan berdasarkan kategori Example [/posts/category/example](https://cadlabah.glitch.me/posts/category/example)
3. Buat Postingan [/posts/create](https://cadlabah.glitch.me/post/create) (Harus Login)
4. Edukasi Tips & Trik [/edu/tips-&-trik](https://cadlabah.glitch.me/edu/tips-&-trik)

## Pengembangan Aplikasi

### Cara menjalankan Aplikasi di Penyimpanan Lokal
1. Buka CMD atau Git Bash
2. Simpan aplikasi pada penyimpanan lokal dengan mengetikan

    `git clone https://github.com/capstone-csd-196/cadlabah`

3. Masuk ke folder cadlabah dengan mengetikan
    
    `cd cadlabah`

4. Pasang semua dependensi dengan mengetikan 

    `npm install`

5. Jalankan aplikasi pada *Mode Development* dengan mengetikan 
    
    `npm run start-dev`

6. Lihat aplikasi yang berjalan pada *log* CMD atau Git Bash anda. 

    [http://localhost:9000](http://localhost:8080) (adalah *port default*)

### Mode Aplikasi
Ada 2 mode aplikasi yaitu:
1. **Development**
    - cara mejalankan:
    
      `npm run start-dev`

    - cara merubah mode & port:
      
      `env MODE=development PORT=8000 nodemon .`

2. **Production**
    - cara menjalankan: 
    
      `npm start`

    - cara merubah mode & port: 
    
      `env MODE=production PORT=3000 nodemon .`

### Testing Aplikasi
Untuk melakukan *testing* pada aplikasi, kami menyediakan 2 *test* yaitu:
1. **[End-To-End](https://www.npmjs.com/package/e2e)**
    - cara menjalankan: 
    
      `npm run e2e` (CATATAN: *Server* Aplikasi Harus Berjalan)

2. **[Eslint](https://www.npmjs.com/package/eslint)**
    - cara menjalankan: 
    
      `npm run lint`

## Tim Pengembang
 - [Deri Kurniawan](https://github.com/deri-kurniawan)
 - [Adrian Tri Pamungkas](https://github.com/adriantrip25)