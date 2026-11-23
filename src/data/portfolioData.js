export const PROFILE_DATA = {
  brandName: 'HowKeJaa',
  handle: '@howkejaa',
  logoPath: '/logo.png', // Otomatis membaca file logo.png dari folder public/
  availability: 'Tersedia untuk proyek baru',
  headline: 'Membangun sistem web, bot otomasi, dan perangkat keamanan yang presisi',
  subheadline:
    'Pengembang independen yang berfokus pada pengembangan website modern, bot Telegram interaktif, skrip pertahanan keamanan server, serta aplikasi Android yang ringan dan fungsional.',
  aboutTitle: 'Pendekatan kerja yang ringkas dan berorientasi pada keandalan sistem',
  aboutParagraphs: [
    'Saya mengembangkan berbagai perangkat lunak mulai dari antarmuka web responsif, bot otomasi berbasis API, skrip perlindungan trafik website, hingga aplikasi mobile Android.',
    'Setiap proyek dirancang dengan struktur kode yang efisien, waktu muat cepat di berbagai perangkat, serta tampilan gelap yang nyaman digunakan dalam jangka panjang.'
  ],
  contacts: {
    telegramUrl: 'https://t.me/howkejaa',
    telegramHandle: '@howkejaa',
    instagramUrl: 'https://www.instagram.com/kejaltng?avpt=eWZqajUydDVoaXQ2',
    instagramHandle: '@kejaltng'
  }
};

export const EXPERTISE_LIST = [
  {
    code: '01',
    title: 'Web Development',
    description:
      'Merancang dan membangun website portofolio, halaman arahan produk, dan aplikasi web interaktif dengan performa tinggi.',
    stack: ['React', 'Tailwind CSS', 'PHP', 'JavaScript']
  },
  {
    code: '02',
    title: 'Telegram Bot',
    description:
      'Mengembangkan bot Telegram otomatis untuk pemrosesan data, pembacaan kode QR, integrasi API, dan manajemen akses pengguna.',
    stack: ['Node.js', 'Telegraf', 'REST API', 'JSON DB']
  },
  {
    code: '03',
    title: 'Script Security',
    description:
      'Menyusun skrip perlindungan lapisan aplikasi web untuk menyaring trafik berbahaya, pembatasan laju akses, dan validasi bot.',
    stack: ['PHP Security', 'Rate Limiting', 'Anti-Flood', 'Header Audit']
  },
  {
    code: '04',
    title: 'Android App',
    description:
      'Membangun aplikasi Android ringan dengan antarmuka bersih serta integrasi layanan asisten pintar dan API eksternal.',
    stack: ['Kotlin', 'Android SDK', 'API Integration', 'Mobile UI']
  }
];

export const COMPLETED_PROJECTS = [
  {
    id: '01',
    category: 'Telegram Bot & Data Parser',
    title: 'QRIS E-Wallet Tracker Bot',
    description:
      'Bot Telegram untuk memindai gambar QRIS dari berbagai dompet digital dan bank, mengekstrak identitas merchant, NMID, pemetaan koordinat Google Maps, serta dilengkapi sistem manajemen izin pengguna.',
    highlights: [
      'Pemindaian gambar 5 tahap untuk foto buram maupun layar gelap',
      'Pembongkaran struktur EMVCo TLV dan validasi checksum CRC-16',
      'Sistem hak akses bertingkat berbasis penyimpanan JSON'
    ],
    stack: ['Node.js', 'Telegraf', 'Jimp', 'jsQR']
  },
  {
    id: '02',
    category: 'Web Application Security',
    title: 'ZeroProtectV1',
    description:
      'Skrip pertahanan keamanan website mandiri untuk menahan lonjakan trafik Layer-7, mendeteksi pola permintaan otomatis secara real-time, serta mengamankan akses pengunjung.',
    highlights: [
      'Mode pertahanan otomatis saat terdeteksi serangan trafik tinggi',
      'Penyaringan cerdas yang tetap meloloskan bot mesin pencari resmi',
      'Halaman verifikasi pengunjung bertema gelap yang ringan'
    ],
    stack: ['PHP', 'JSON Storage', 'Layer-7 Defense', 'Rate Limiter']
  },
  {
    id: '03',
    category: 'Progressive Web App',
    title: 'ZeroCam 1.0',
    description:
      'Aplikasi kamera berbasis web yang dioptimalkan untuk browser perangkat mobile dengan kendali pemrosesan visual langsung di sisi klien.',
    highlights: [
      'Mode pemotretan HDR+, Portrait, dan Night Sight',
      'Pengaturan rasio aspek layar dan kontrol lampu kilat',
      'Tampilan antarmuka minimalis yang cepat dimuat di Vercel'
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Vercel']
  }
];

export const MORE_PROJECTS_NOTE = {
  code: '04+',
  title: 'Dan berbagai proyek lainnya (dll.)',
  description:
    'Selain tiga karya utama di atas, masih terdapat berbagai proyek lain yang telah dikembangkan—mencakup skrip otomasi bot Telegram, utilitas backend server, alat bantu keamanan web, hingga eksperimen aplikasi Android.',
  tags: ['Custom Bot Scripts', 'Backend Utilities', 'Web Tools', 'Android Builds']
};

export const WEB_SERVICE_DATA = {
  title: 'Jasa Pembuatan Website HowKeJaa',
  subtitle:
    'Layanan perancangan dan pengembangan website personal maupun kebutuhan digital dengan desain terstruktur, cepat diakses, dan siap online.',
  packages: [
    {
      code: 'A',
      name: 'Website Portofolio Personal',
      detail:
        'Halaman profil profesional lengkap dengan animasi halus, etalase karya, dan integrasi tombol kontak langsung untuk membangun kredibilitas personal.'
    },
    {
      code: 'B',
      name: 'Landing Page Produk & Jasa',
      detail:
        'Halaman penawaran terfokus dengan struktur informasi yang jelas, responsif di seluruh ukuran layar HP maupun desktop, dan waktu muat cepat.'
    },
    {
      code: 'C',
      name: 'Web Tools & Sistem Kustom',
      detail:
        'Pengembangan aplikasi web fungsional berbasis React, JavaScript, atau PHP sesuai alur kerja dan kebutuhan spesifik proyekmu.'
    }
  ],
  workflow: [
    'Diskusi konsep, referensi tampilan, dan kebutuhan fitur',
    'Penyusunan struktur halaman dan pengembangan kode',
    'Pengujian responsivitas di perangkat mobile serta desktop',
    'Publikasi online siap pakai melalui Vercel atau hosting pilihan'
  ]
};
