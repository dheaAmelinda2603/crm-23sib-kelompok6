// src/ProductDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Eye, Heart } from 'lucide-react';

// IMPORTANT: Use the exact allProductsData array that you provided.
// In a real application, you might centralize this data or fetch it.
const allProductsData = [
    { id: 'translucent-powder', name: 'Translucent Powder', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7034241712213640132.png', isSale: false, originalPrice: null, category: 'Kecantikan', subCategory: 'Make Up Wajah', subSubCategory: 'Bedak Wajah', collection: 'BENING\'S', transaction_count: 50, created_at: '2024-03-01T10:00:00Z', seen: 150, description: 'Bedak tabur ringan yang menyatu sempurna dengan kulit, memberikan hasil akhir matte dan tahan lama sepanjang hari. Ideal untuk semua jenis kulit.' },
    { id: 'pay-day-sale-paket-5in1-skinmology-lightening-booster-series', name: 'Paket 5in1 Skinmology Lightening Booster Series', price: 'Rp 300.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1469471712219903864.png', isSale: true, originalPrice: 'Rp 385.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'PAY DAY SALE!!', transaction_count: 120, created_at: '2024-03-10T11:00:00Z', seen: 300, description: 'Paket perawatan wajah lengkap 5in1 untuk mencerahkan kulit secara maksimal dan meratakan warna kulit. Mengandung bahan aktif pencerah kulit terbaik.' },
    { id: 'paket-skinmology-3in1-morning-routine', name: 'Paket 3in1 Morning Routine Lightening Booster Series', price: 'Rp 185.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3423261712220667423.png', isSale: true, originalPrice: 'Rp 300.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 90, created_at: '2024-03-15T12:00:00Z', seen: 250, description: 'Rutinitas pagi 3in1 dari Skinmology untuk kulit cerah dan terlindungi sepanjang hari. Membantu menjaga kelembaban dan kesegaran kulit.' },
    { id: 'facial-wash-exclusive', name: 'Facial Wash Exclusive', price: 'Rp 65.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3291431734495789951.png', isSale: true, originalPrice: 'Rp 79.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'BENING\'S', transaction_count: 150, created_at: '2024-03-20T13:00:00Z', seen: 400, description: 'Sabun pembersih wajah eksklusif yang membersihkan secara mendalam tanpa membuat kulit kering. Cocok untuk semua jenis kulit.' },
    { id: 'day-cream-exclusive', name: 'Day Cream Exclusive', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3075641742961761603.png', isSale: true, originalPrice: 'Rp 100.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'BENING\'S', transaction_count: 110, created_at: '2024-03-25T14:00:00Z', seen: 320, description: 'Krim pagi eksklusif yang melindungi kulit dari sinar UV dan polusi. Formula ringan cepat meresap dan menjaga kulit tetap lembab.' },
    { id: 'night-cream-flex', name: 'Night Cream Flex', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3954491713166006865.png', isSale: true, originalPrice: 'Rp 145.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'BENING\'S', transaction_count: 80, created_at: '2024-03-30T15:00:00Z', seen: 280, description: 'Krim malam yang bekerja saat Anda tidur, meregenerasi sel kulit dan memberikan hidrasi mendalam. Bangun dengan kulit lebih segar dan kenyal.' },
    { id: 'skinmology', name: 'Skinmology Lightening Facial Wash (60ml)', price: 'Rp 65.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7629621716791641756.png', isSale: true, originalPrice: 'Rp 65.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'SKINMOLOGY', transaction_count: 130, created_at: '2024-04-01T16:00:00Z', seen: 350, description: 'Pembersih wajah pencerah dari Skinmology, membersihkan kotoran dan mencerahkan kulit dengan formula lembut.' },
    { id: 'skinmology-lightening-toner-essence-60ml', name: 'Skinmology Lightening Toner Essence (60ml)', price: 'Rp 61.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5717501716791918119.png', isSale: true, originalPrice: 'Rp 75.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Toner', collection: 'SKINMOLOGY', transaction_count: 100, created_at: '2024-04-05T17:00:00Z', seen: 290, description: 'Toner essence yang menyegarkan dan mempersiapkan kulit untuk menerima nutrisi selanjutnya. Membantu meratakan warna kulit.' },
    { id: 'bundling-2x-sunscreen-skinmology-lightening', name: 'Bundling 2x Sunscreen Skinmology Lightening', price: 'Rp 150.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4564911722331573722.png', isSale: true, originalPrice: 'Rp 230.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'PROMO BUNDLING', transaction_count: 70, created_at: '2024-04-10T18:00:00Z', seen: 200, description: 'Paket bundling dua tabung sunscreen pencerah dari Skinmology untuk perlindungan ganda dari sinar UV.' },
    { id: 'bundling-2x-night-cream-skinmology-lightening', name: 'Bundling 2x Night Cream Skinmology Lightening', price: 'Rp 160.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3627911722331510423.png', isSale: true, originalPrice: 'Rp 250.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'PROMO BUNDLING', transaction_count: 60, created_at: '2024-04-15T19:00:00Z', seen: 180, description: 'Dua krim malam pencerah Skinmology dalam satu paket, memaksimalkan regenerasi kulit saat tidur.' },
    { id: 'skinmology-acne-prone-facial-wash-60-ml', name: 'Skinmology Acne Prone Facial Wash (60 ml)', price: 'Rp 61.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9366171717639702193.png', isSale: true, originalPrice: 'Rp 65.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'SKINMOLOGY', transaction_count: 95, created_at: '2024-04-20T20:00:00Z', seen: 270, description: 'Pembersih wajah khusus kulit berjerawat, membersihkan pori-pori dan mengurangi minyak berlebih.' },
    { id: 'skinmology-acne-prone-toner-essence-60ml', name: 'Skinmology Acne Prone Toner Essence (60ml)', price: 'Rp 61.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3412421717639733392.png', isSale: true, originalPrice: 'Rp 75.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Toner', collection: 'SKINMOLOGY', transaction_count: 85, created_at: '2024-04-25T21:00:00Z', seen: 240, description: 'Toner essence untuk kulit berjerawat, membantu menenangkan dan menyeimbangkan pH kulit.' },
    { id: 'skinmology-acne-prone-sunscreen-125-g', name: 'Skinmology Acne Prone Sunscreen (12,5 g)', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_8914681717639843592.png', isSale: true, originalPrice: 'Rp 115.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'SKINMOLOGY', transaction_count: 75, created_at: '2024-04-30T22:00:00Z', seen: 210, description: 'Sunscreen ringan untuk kulit berjerawat, memberikan perlindungan UV tanpa menyumbat pori-pori.' },
    { id: 'skinmology-acne-prone-night-cream-125g', name: 'Skinmology Acne Prone Night Cream (12,5g)', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2467701717639878872.png', isSale: true, originalPrice: 'Rp 125.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'SKINMOLOGY', transaction_count: 65, created_at: '2024-05-01T09:00:00Z', seen: 190, description: 'Krim malam untuk kulit berjerawat, membantu mengurangi peradangan dan memperbaiki tekstur kulit.' },
    { id: 'skinmology-5in1-acne-expert-series-free-moderma-elixir-hair-repair', name: 'Skinmology 5in1 Acne Expert Series', price: 'Rp 300.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3273591734512463495.png', isSale: true, originalPrice: 'Rp 749.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 180, created_at: '2024-05-05T10:00:00Z', seen: 450, description: 'Paket lengkap 5in1 untuk mengatasi masalah jerawat secara menyeluruh, termasuk Elixir Hair Repair gratis.' },
    { id: 'bundling-2x-facial-wash-skinmology-lightening', name: 'Bundling 2x Facial Wash Skinmology Lightening', price: 'Rp 111.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5790921722331354585.png', isSale: true, originalPrice: 'Rp 130.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'PROMO BUNDLING', transaction_count: 140, created_at: '2024-05-10T11:00:00Z', seen: 380, description: 'Dua pembersih wajah Skinmology Lightening dalam satu paket bundling, lebih hemat untuk rutinitas harian.' },
    { id: 'bundling-2x-toner-essence-skinmology-lightening', name: 'Bundling 2x Toner Essence Skinmology Lightening', price: 'Rp 115.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4273761722331681740.png', isSale: true, originalPrice: 'Rp 150.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Toner', collection: 'PROMO BUNDLING', transaction_count: 105, created_at: '2024-05-15T12:00:00Z', seen: 310, description: 'Paket bundling dua toner essence pencerah Skinmology untuk hidrasi dan persiapan kulit yang optimal.' },
    { id: 'bundling-skinmology-lightening-facial-wash-night-cream', name: 'Bundling Skinmology Lightening Facial Wash + Night Cream', price: 'Rp 135.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3378751718865606705.png', isSale: true, originalPrice: 'Rp 190.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'PROMO BUNDLING', transaction_count: 90, created_at: '2024-05-20T13:00:00Z', seen: 260, description: 'Kombinasi sempurna pembersih wajah dan krim malam Skinmology Lightening untuk kulit bersih dan cerah.' },
    { id: 'bundling-skinmology-lightening-toner-sunscreen', name: 'Bundling Skinmology Lightening Toner + Sunscreen', price: 'Rp 130.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2147001718865963529.png', isSale: true, originalPrice: 'Rp 190.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'PROMO BUNDLING', transaction_count: 80, created_at: '2024-05-25T14:00:00Z', seen: 230, description: 'Paket hemat toner dan sunscreen Skinmology Lightening untuk melindungi dan mencerahkan kulit dari pagi hingga sore.' },
    { id: 'pay-day-sale-skinmology-double-cleansing-balm', name: 'Skinmology Double Cleansing Balm', price: 'Rp 65.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1836321731554166284.png', isSale: true, originalPrice: 'Rp 125.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Pembersih Make Up', collection: 'PAY DAY SALE!!', transaction_count: 160, created_at: '2024-05-30T15:00:00Z', seen: 420, description: 'Balm pembersih ganda yang efektif mengangkat makeup dan kotoran tanpa meninggalkan residu minyak.' },
    { id: 'skinmology-jeju-volcanic-mud-mask', name: 'Skinmology Jeju Volcanic Mud Mask', price: 'Rp 75.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5072051731554193143.png', isSale: true, originalPrice: 'Rp 95.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Masker Wajah', collection: 'SKINMOLOGY', transaction_count: 115, created_at: '2024-06-01T16:00:00Z', seen: 340, description: 'Masker lumpur vulkanik Jeju yang membersihkan pori-pori secara mendalam dan mengontrol minyak berlebih.' },
    { id: 'klaim-voucher-free-product-skinmology-double-cleansing-balm', name: 'KLAIM VOUCHER FREE PRODUCT SKINMOLOGY DOUBLE CLEANSING BALM', price: 'Rp 0', imageUrl: 'https://cdn.orderonline.id/uploads/images_3059521747967573439.jpg', isSale: false, originalPrice: null, category: 'Produk Lainnya', collection: 'PROMO BUNDLING', transaction_count: 5, created_at: '2024-06-20T08:00:00Z', seen: 20, description: 'Voucher untuk klaim gratis produk Skinmology Double Cleansing Balm dengan pembelian tertentu.' },
    { id: 'acne-spot', name: 'Skinmology Acne Spot', price: 'Rp 50.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5564591722919869801.png', isSale: true, originalPrice: 'Rp 65.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 210, created_at: '2024-06-21T09:00:00Z', seen: 550, description: 'Perawatan spot jerawat yang ampuh mengurangi kemerahan dan ukuran jerawat dengan cepat.' },
    { id: 'bundling-benings-night-cream-flex-skinmology-jeju-volcanic-mud-mask', name: 'Bundling Benings Night Cream Flex + Skinmology Jeju Volcanic Mud Mask', price: 'Rp 175.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5789651723540089781.png', isSale: true, originalPrice: 'Rp 250.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 190, created_at: '2024-06-22T10:00:00Z', seen: 480, description: 'Paket bundling krim malam Bening\'s Flex dan masker lumpur vulkanik Jeju untuk perawatan lengkap.' },
    { id: 'bundling-skinmology-facial-wash-acne-skinmology-double-cleansing-balm', name: 'Bundling Skinmology Facial Wash Acne + Skinmology Double Cleansing Balm', price: 'Rp 129.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_8951151723540126843.png', isSale: true, originalPrice: 'Rp 190.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 170, created_at: '2024-06-23T11:00:00Z', seen: 430, description: 'Bundling pembersih wajah acne dan cleansing balm Skinmology untuk rutinitas double cleansing yang efektif.' },
    { id: 'bundling-skinmology-facial-wash-lightening-skinmology-double-cleansing-balm', name: 'Bundling Skinmology Facial wash Lightening + Skinmology Double Cleansing Balm', price: 'Rp 129.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7232621725248334443.png', isSale: true, originalPrice: 'Rp 190.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 165, created_at: '2024-06-24T12:00:00Z', seen: 410, description: 'Pembersih wajah pencerah dan cleansing balm Skinmology dalam satu paket untuk kulit bersih dan cerah.' },
    { id: 'bundling-skinmology-jeju-volcanic-mud-mask-skinmology-night-cream-acne-prone', name: 'Bundling Skinmology Jeju Volcanic Mud Mask + Skinmology Night Cream Acne Prone', price: 'Rp 145.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1622551723540151680.png', isSale: true, originalPrice: 'Rp 250.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 155, created_at: '2024-06-25T13:00:00Z', seen: 390, description: 'Bundling masker lumpur dan krim malam acne-prone Skinmology untuk perawatan lengkap jerawat.' },
    { id: 'bundling-skinmology-jeju-volcanic-mud-mask-skinmology-night-cream-lightening', name: 'Bundling Skinmology Jeju Volcanic Mud Mask + Skinmology Night Cream Lightening', price: 'Rp 145.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3037371725248375865.png', isSale: true, originalPrice: 'Rp 250.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 150, created_at: '2024-06-26T14:00:00Z', seen: 380, description: 'Masker lumpur dan krim malam pencerah Skinmology dalam satu bundling untuk kulit bersih dan cerah optimal.' },
    { id: 'skinmology-lightening-sunscreen', name: 'Skinmology Lightening Sunscreen', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7503331724126953586.png', isSale: true, originalPrice: 'Rp 115.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'SKINMOLOGY', transaction_count: 145, created_at: '2024-06-27T15:00:00Z', seen: 370, description: 'Sunscreen pencerah dari Skinmology, memberikan perlindungan UV sekaligus membantu mencerahkan kulit.' },
    { id: 'skinmology-lightening-night-cream', name: 'Skinmology Lightening Night Cream', price: 'Rp 82.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3633881724127273834.png', isSale: true, originalPrice: 'Rp 125.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'SKINMOLOGY', transaction_count: 140, created_at: '2024-06-28T16:00:00Z', seen: 360, description: 'Krim malam pencerah Skinmology yang bekerja aktif saat tidur untuk kulit lebih cerah dan sehat di pagi hari.' },
    { id: 'bundling-benings-day-cream-exclusive', name: 'Bundling Bening\'s Day Cream Exclusive', price: 'Rp 165.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9224851734513107568.png', isSale: true, originalPrice: 'Rp 200.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'PROMO BUNDLING', transaction_count: 135, created_at: '2024-06-29T17:00:00Z', seen: 350, description: 'Dua krim pagi eksklusif Bening\'s dalam satu paket, untuk perlindungan dan hidrasi sepanjang hari.' },
    { id: 'Bundling2xBeningsNightCreamFlex', name: 'Bundling 2x Bening\'s Night Cream Flex', price: 'Rp 149.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1745021725247801262.png', isSale: true, originalPrice: 'Rp 290.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'PROMO BUNDLING', transaction_count: 130, created_at: '2024-06-30T18:00:00Z', seen: 340, description: 'Bundling dua krim malam Bening\'s Flex, memaksimalkan regenerasi kulit di malam hari dengan lebih hemat.' },
    { id: 'bundling-2x-facial-wash-exclusive', name: 'Bundling 2x Facial Wash Exclusive', price: 'Rp 99.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2919951734512964778.png', isSale: true, originalPrice: 'Rp 150.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'PROMO BUNDLING', transaction_count: 125, created_at: '2024-07-01T19:00:00Z', seen: 330, description: 'Dua pembersih wajah eksklusif Bening\'s dalam satu paket, untuk membersihkan kulit secara menyeluruh.' },
    { id: 'skinmology-serum-brightening', name: 'Skinmology Serum Brightening', price: 'Rp 130.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_8468711733977782949.jpg', isSale: true, originalPrice: 'Rp 170.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Serum & Minyak Wajah', collection: 'SKINMOLOGY', transaction_count: 120, created_at: '2024-07-02T20:00:00Z', seen: 320, description: 'Serum pencerah dari Skinmology, dengan konsentrasi tinggi untuk kulit lebih cerah dan noda tersamarkan.' },
    { id: 'skinmology-serum-acne-glow', name: 'Skinmology Serum Acne & Glow', price: 'Rp 129.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_6868581733977674840.jpg', isSale: true, originalPrice: 'Rp 150.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Serum & Minyak Wajah', collection: 'SKINMOLOGY', transaction_count: 115, created_at: '2024-07-03T21:00:00Z', seen: 310, description: 'Serum multifungsi untuk mengatasi jerawat sekaligus memberikan efek glowing pada kulit.' },
    { id: 'skinmology-4in1-acne-treatment-series', name: 'Skinmology 4in1 Acne Treatment Series', price: 'Rp 390.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5553131733892149447.png', isSale: true, originalPrice: 'Rp 455.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 110, created_at: '2024-07-04T22:00:00Z', seen: 300, description: 'Paket perawatan jerawat 4in1 dari Skinmology, solusi lengkap untuk kulit bersih bebas jerawat.' },
    { id: 'skinmology-4in1-brightening-series', name: 'Skinmology 4in1 Brightening Series', price: 'Rp 345.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5735531733899063420.png', isSale: true, originalPrice: 'Rp 365.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 105, created_at: '2024-07-05T09:00:00Z', seen: 290, description: 'Paket pencerah 4in1 dari Skinmology, untuk kulit tampak lebih cerah, merata, dan bercahaya.' },
    { id: 'benings-3in1-flex', name: 'Bening\'s 3in1 Flex', price: 'Rp 200.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5798411735010146838.png', isSale: true, originalPrice: 'Rp 260.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'BENING\'S', transaction_count: 100, created_at: '2024-07-06T10:00:00Z', seen: 280, description: 'Paket 3in1 Flex dari Bening\'s, solusi praktis untuk perawatan wajah harian dengan hasil maksimal.' },
    { id: 'skinmology-5in1-lightening-for-oily-skin', name: 'Skinmology 5in1 Lightening for Oily Skin', price: 'Rp 335.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_6814141735010630859.png', isSale: true, originalPrice: 'Rp 450.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 95, created_at: '2024-07-07T11:00:00Z', seen: 270, description: 'Paket pencerah 5in1 Skinmology khusus untuk kulit berminyak, membantu mengontrol sebum dan mencerahkan.' },
    { id: 'skinmology-5in1-acne-solution-for-dry-skin', name: 'Skinmology 5in1 Acne Solution for Dry Skin', price: 'Rp 300.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7845901735011047530.png', isSale: true, originalPrice: 'Rp 450.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 90, created_at: '2024-07-08T12:00:00Z', seen: 260, description: 'Solusi jerawat 5in1 Skinmology yang diformulasikan khusus untuk kulit kering, merawat jerawat tanpa membuat kulit semakin kering.' },
    { id: 'paket-bright-glow-treatment', name: 'Paket Bright & Glow Treatment', price: 'Rp 415.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4678071737447724141.png', isSale: true, originalPrice: 'Rp 620.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 85, created_at: '2024-07-09T13:00:00Z', seen: 250, description: 'Paket perawatan Bright & Glow untuk hasil kulit cerah bercahaya dan sehat terawat.' },
    { id: 'skinmology-uv-protection-daily-sunscreen', name: 'Skinmology UV Protection Daily Sunscreen', price: 'Rp 129.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9979301742523986008.png', isSale: true, originalPrice: 'Rp 150.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'SKINMOLOGY', transaction_count: 80, created_at: '2024-07-10T14:00:00Z', seen: 240, description: 'Sunscreen harian dengan perlindungan UV tinggi dari Skinmology, cocok untuk penggunaan setiap hari.' },
];


const ProductDetail = () => {
  const { productId } = useParams(); // Get the productId (e.g., 'translucent-powder') from the URL
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Find the product based on the ID from the URL
  // IMPORTANT: No parseInt needed, as IDs are strings.
  const product = allProductsData.find(p => p.id === productId);

  if (!product) {
    // Handle case where product is not found (e.g., redirect to 404 or product list)
    return (
      <div className="p-6 bg-white rounded-lg shadow-md font-judson text-center max-w-xl mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4 text-red-500">Produk Tidak Ditemukan</h2>
        <p className="text-gray-700 mb-6">Maaf, produk yang Anda cari tidak ada.</p>
        <button
          onClick={() => navigate('/produk')} // Navigate back to the main product listing
          className="inline-flex items-center px-4 py-2 bg-[#DEA05B] text-white rounded-md hover:bg-amber-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Daftar Produk
        </button>
      </div>
    );
  }

  // Helper function to safely get sub-category path (for display)
  const getSubCategoryPath = (product) => {
    let path = product.category;
    if (product.subCategory) {
      path += ` / ${product.subCategory}`;
    }
    if (product.subSubCategory) {
      path += ` / ${product.subSubCategory}`;
    }
    return path;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md font-judson max-w-5xl mx-auto my-8">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        .text-[#DEA05B] { color: #DEA05B; }
        .bg-[#DEA05B] { background-color: #DEA05B; }
        .hover\\:bg-amber-600:hover { background-color: #D48C3C; } /* A slightly darker amber */
        `}
      </style>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // Go back to the previous page in history
        className="inline-flex items-center px-4 py-2 mb-6 text-gray-700 rounded-md hover:bg-gray-100 transition-colors text-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Kembali
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-w-full h-auto max-h-[400px] object-contain rounded-lg shadow-md"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/CCCCCC/333333?text=Image+Not+Found"; }}
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-gray-800 font-judson">{product.name}</h1>
          <p className="text-sm text-gray-500 mb-4 font-judson">
            {getSubCategoryPath(product)}
            {product.collection && ` | Koleksi: ${product.collection}`}
          </p>

          <div className="flex items-baseline mb-6">
            <p className="text-3xl lg:text-4xl font-bold text-[#DEA05B] mr-3 font-judson">
              {product.price}
            </p>
            {product.isSale && product.originalPrice && (
              <p className="text-xl lg:text-2xl text-gray-400 line-through font-judson">
                {product.originalPrice}
              </p>
            )}
          </div>

          <p className="text-base text-gray-700 mb-6 leading-relaxed font-judson">
            {product.description || 'Deskripsi produk ini belum tersedia.'}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6 text-gray-600 font-judson">
            <div className="flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2 text-gray-500" />
              <span className="font-semibold">{product.transaction_count}</span> Terjual
            </div>
            <div className="flex items-center">
              <Eye className="w-5 h-5 mr-2 text-gray-500" />
              <span className="font-semibold">{product.seen}</span> Dilihat
            </div>
            {/* You can add more details like created_at if desired */}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="flex-1 px-6 py-3 bg-[#DEA05B] text-white font-semibold rounded-md shadow-md hover:bg-amber-600 transition-colors text-lg">
              Tambahkan ke Keranjang
            </button>
            <button className="flex-1 px-6 py-3 border-2 border-[#DEA05B] text-[#DEA05B] font-semibold rounded-md shadow-sm hover:bg-amber-50 transition-colors text-lg">
              Beli Sekarang
            </button>
            <button className="p-3 border-2 border-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;