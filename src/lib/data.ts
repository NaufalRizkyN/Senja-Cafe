export const siteConfig = {
  name: "Senja Kitchen",
  tagline: "Cafe & Resto Modern dengan Rasa Lokal yang Hangat",
  description:
    "Nikmati pengalaman kuliner minimalis modern di Senja Kitchen. Bahan segar, suasana nyaman, dan cita rasa yang menggugah selera.",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  email: "hello@senjakitchen.id",
  address: "Jl. Kemang Raya No. 12, Jakarta Selatan",
  social: {
    instagram: "https://instagram.com/senjakitchen",
    tiktok: "https://tiktok.com/@senjakitchen",
    facebook: "https://facebook.com/senjakitchen",
  },
};

export const categories = [
  { id: 1, name: "Makanan", slug: "makanan" },
  { id: 2, name: "Minuman", slug: "minuman" },
  { id: 3, name: "Dessert", slug: "dessert" },
];

export const menuItems = [
  {
    id: 1,
    name: "Nasi Goreng Senja",
    slug: "nasi-goreng-senja",
    description: "Nasi goreng spesial dengan telur mata sapi, ayam suwir, dan sambal matah",
    price: 48000,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=750&fit=crop",
    badge: "best_seller" as const,
    categoryId: 1,
  },
  {
    id: 2,
    name: "Ayam Bakar Madu",
    slug: "ayam-bakar-madu",
    description: "Ayam bakar dengan glaze madu lokal, disajikan dengan lalapan segar",
    price: 55000,
    image: "/AyamMadu.png",
    badge: "best_seller" as const,
    categoryId: 1,
  },
  {
    id: 3,
    name: "Soto Betawi Premium",
    slug: "soto-betawi-premium",
    description: "Soto Betawi autentik dengan daging sapi pilihan dan santan kaya",
    price: 52000,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=750&fit=crop",
    badge: null,
    categoryId: 1,
  },
  {
    id: 4,
    name: "Kopi Susu Senja",
    slug: "kopi-susu-senja",
    description: "Espresso blend lokal dengan susu segar dan gula aren",
    price: 28000,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=750&fit=crop",
    badge: "best_seller" as const,
    categoryId: 2,
  },
  {
    id: 5,
    name: "Matcha Latte",
    slug: "matcha-latte",
    description: "Matcha premium Jepang dengan susu oat pilihan",
    price: 35000,
    image: "/Matcha.png",
    badge: "new" as const,
    categoryId: 2,
  },
  {
    id: 6,
    name: "Es Teh Manis House",
    slug: "es-teh-manis",
    description: "Teh hitam premium diseduh dingin dengan rasa manis pas",
    price: 18000,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=750&fit=crop",
    badge: null,
    categoryId: 2,
  },
  {
    id: 7,
    name: "Panna Cotta Buah Lokal",
    slug: "panna-cotta",
    description: "Panna cotta lembut dengan saus buah segar musiman",
    price: 32000,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=750&fit=crop",
    badge: "new" as const,
    categoryId: 3,
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    slug: "chocolate-lava",
    description: "Kue cokelat hangat dengan pusat meleleh, disajikan dengan es krim vanilla",
    price: 38000,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=750&fit=crop",
    badge: "promo" as const,
    categoryId: 3,
  },
];

export const features = [
  {
    title: "Bahan Segar Harian",
    description: "Kami belanja bahan setiap pagi untuk memastikan kesegaran maksimal di setiap hidangan.",
    icon: "Leaf",
  },
  {
    title: "Higienis & Halal",
    description: "Proses dapur berstandar tinggi dengan sertifikasi Halal resmi MUI.",
    icon: "ShieldCheck",
  },
  {
    title: "Suasana Nyaman",
    description: "Desain interior minimalis hangat, cocok untuk kerja, meeting, atau hangout santai.",
    icon: "Home",
  },
  {
    title: "Pelayanan Ramah",
    description: "Tim kami siap memberikan pengalaman terbaik dari saat Anda masuk hingga selesai.",
    icon: "Heart",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rina Wijaya",
    rating: 5,
    text: "Kopi susu senjanya juara! Suasana cafe juga nyaman banget buat kerja remote. Recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Andi Pratama",
    rating: 5,
    text: "Nasi gorengnya beda dari yang lain, bumbunya pas dan porsinya mengenyangkan. Pasti balik lagi.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Sarah Putri",
    rating: 4,
    text: "Tempat favorit buat brunch weekend. Matcha latte-nya creamy banget, dessert juga enak.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

export const branches = [
  {
    id: 1,
    name: "Senja Kitchen Kemang",
    slug: "kemang",
    address: "Jl. Kemang Raya No. 12, Jakarta Selatan 12730",
    city: "Jakarta Selatan",
    phone: "+62 812-3456-7890",
    whatsapp: "6281234567890",
    hours: "08:00 - 22:00",
    isOpen: true,
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.81!3d-6.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMzYuMCJTIDEwNsKwNDgnMzYuMCJF!5e0!3m2!1sen!2sid!4v1234567890",
  },
  {
    id: 2,
    name: "Senja Kitchen Menteng",
    slug: "menteng",
    address: "Jl. Menteng Raya No. 45, Jakarta Pusat 10310",
    city: "Jakarta Pusat",
    phone: "+62 812-9876-5432",
    whatsapp: "6281298765432",
    hours: "09:00 - 21:00",
    isOpen: true,
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.83!3d-6.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTEnMjQuMCJTIDEwNsKwNDknNDguMCJF!5e0!3m2!1sen!2sid!4v1234567891",
  },
];

export const articles = [
  {
    id: 1,
    title: "5 Tips Memilih Kopi Susu yang Sempurna",
    slug: "tips-kopi-susu-sempurna",
    excerpt: "Temukan rahasia di balik kopi susu yang creamy dan seimbang. Dari pemilihan biji hingga teknik steaming susu.",
    thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
    category: "Tips",
    publishedAt: "2026-08-15",
    readTime: "4 menit",
  },
  {
    id: 2,
    title: "Kenapa Bahan Segar Begitu Penting di Dapur Kami",
    slug: "pentingnya-bahan-segar",
    excerpt: "Filosofi Senja Kitchen dalam memilih bahan baku harian dan dampaknya pada cita rasa setiap hidangan.",
    thumbnail: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop",
    category: "Behind the Scene",
    publishedAt: "2026-08-01",
    readTime: "5 menit",
  },
  {
    id: 3,
    title: "Resep Sambal Matah yang Bisa Dibuat di Rumah",
    slug: "resep-sambal-matah",
    excerpt: "Bawa rasa Senja Kitchen ke dapur Anda. Resep sambal matah autentik yang mudah dipraktikkan.",
    thumbnail: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=400&fit=crop",
    category: "Resep",
    publishedAt: "2026-07-20",
    readTime: "6 menit",
  },
];

export const galleryImages = [
  {
    id: 1,
    title: "Interior Senja Kitchen",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
    category: "outlet",
    alt: "Interior cafe Senja Kitchen dengan desain minimalis modern",
  },
  {
    id: 2,
    title: "Nasi Goreng Signature",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop",
    category: "produk",
    alt: "Nasi goreng spesial Senja Kitchen",
  },
  {
    id: 3,
    title: "Barista Preparing Coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    category: "event",
    alt: "Barista menyiapkan kopi susu senja",
  },
  {
    id: 4,
    title: "Dessert Showcase",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop",
    category: "produk",
    alt: "Panna cotta buah lokal Senja Kitchen",
  },
  {
    id: 5,
    title: "Suasana Outdoor",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    category: "outlet",
    alt: "Area outdoor seating Senja Kitchen",
  },
  {
    id: 6,
    title: "Kopi Susu Close Up",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop",
    category: "produk",
    alt: "Close up kopi susu senja dengan latte art",
  },
];
