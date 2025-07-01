import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowDownWideNarrow, ChevronDown, ChevronRight, ShoppingCart, Heart, Eye } from 'lucide-react';

const formatNumberWithThousandsSeparator = (value) => {
    const cleanValue = String(value).replace(/\D/g, '');
    if (!cleanValue) return ''; 
    const numberValue = parseInt(cleanValue, 10);
    if (isNaN(numberValue)) return ''; 
    return numberValue.toLocaleString('id-ID');
};

const allProductsData = [
  { id: 1, title: 'Translucent Powder', name: 'Translucent Powder', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7034241712213640132.png', isSale: false, originalPrice: null, category: 'Kecantikan', subCategory: 'Make Up Wajah', subSubCategory: 'Bedak Wajah', collection: 'BENING\'S', transaction_count: 50, created_at: '2024-03-01T10:00:00Z', seen: 150, description: "<p>Loose Powder Bening's Indonesia Nomor Bpom NA18220400242</p><p>Kelebihan Produk: </p><p>Mengandung UV Filter, squalane dan vitamin E yang dapat menutrisi kulit.</p><p>Dengan tekstur yang lembut dan mewah dapat menyerap kelebihan minyak pada kulit sehingga tampilan riasan menjadi lebih halus dan lebih tahan lama.</p><p>Gunakan setiap hari untuk hasil riasan akhir yang lembut.</p><p>UV FILTER Melindungi dari kerusakan kulit yang diakibatkan paparan buruk sinar matahari.</p><p>SQUALENE Melembabkan dan mencegah kerusakan kulit dari radikal bebas , Antioksidan, Menghaluskan kulit , Membantu menutrisi kulit.</p><p>VITAMIN E Menjaga kelembaban kulit, Mengandung antioksidan yang membantu, melawan radikal bebasAntiaging yang dapat mencegah penuaan dini. </p><p>Klaim Product: </p><p>- Tahan lama seharian (+/- 8 JAM) </p><p>- Teksturnya halus,lembut dan memiliki partikel yang kecil sehingga cepat menyatu/ ngebland di wajah. </p><p>- Ukurannya kecil, ringan, mudah dibawa, memudahkan touch up dan bisa sebagai setting make up dan tidak </p><p>- Menempel/meninggalkan noda/(transferproof) ke pakaian. </p><p>- Mengurangi tampilan pori diwajah,memberikan efek blur/menyamarkan noda diwajah, tidak menyumbat pori. </p><p>- Aman digunakan untuk kulit yang berjerawat sekalipun. </p><p>- Memberikan sentuhan akhir kulit smooth, flawless. </p><p>- Membantu mengontrol dan menyerap minyak berlebih diwajah tapi gak bikin kulit kering (dryness) dan kusam.</p><p> Cara penggunaan : Aplikasikan Translucent Loose Setting Powder dengan menggunakan puff secara lembut dan merata setelah menggunakan day cream atau riasan wajah </p><p>#skincarebeningsindonesia #loosepowder</p>" },
  { id: 2, title: 'Paket 5in1 Skinmology Lightening Booster Series', name: 'Paket 5in1 Skinmology Lightening Booster Series', price: 'Rp 300.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1469471712219903864.png', isSale: true, originalPrice: 'Rp 385.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'PAY DAY SALE!!', transaction_count: 120, created_at: '2024-03-10T11:00:00Z', seen: 300, description: "<p>A comprehensive 5-in-1 lightening booster series for radiant skin. Includes facial wash, toner, serum, day cream, and night cream.</p><p><strong>Benefits:</strong> Brightens skin, reduces dark spots, evens skin tone, provides intense hydration.</p><p><strong>Directions:</strong> Use daily as part of your morning and evening skincare routine for best results.</p>" },
  { id: 3, title: 'Paket 3in1 Morning Routine Lightening Booster Series', name: 'Paket 3in1 Morning Routine Lightening Booster Series', price: 'Rp 185.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3423261712220667423.png', isSale: true, originalPrice: 'Rp 300.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 90, created_at: '2024-03-15T12:00:00Z', seen: 250, description: "<p>Start your day with this 3-in-1 morning routine for brighter skin. Includes facial wash, toner, and day cream.</p><p><strong>Benefits:</strong> Cleanses, tones, and protects your skin throughout the day, leaving it fresh and glowing.</p><p><strong>Directions:</strong> Apply facial wash, followed by toner, and finish with day cream every morning.</p>" },
  { id: 4, title: 'Facial Wash Exclusive', name: 'Facial Wash Exclusive', price: 'Rp 65.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3291431734495789951.png', isSale: true, originalPrice: 'Rp 79.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'BENING\'S', transaction_count: 150, created_at: '2024-03-20T13:00:00Z', seen: 400, description: "<p>An exclusive facial wash for deep cleansing. Effectively removes dirt, oil, and impurities without stripping natural moisture.</p><p><strong>Benefits:</strong> Leaves skin feeling fresh, clean, and soft. Suitable for all skin types.</p><p><strong>Directions:</strong> Lather a small amount with water, massage onto face, then rinse thoroughly.</p>" },
  { id: 5, title: 'Day Cream Exclusive', name: 'Day Cream Exclusive', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3075641742961761603.png', isSale: true, originalPrice: 'Rp 100.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'BENING\'S', transaction_count: 110, created_at: '2024-03-25T14:00:00Z', seen: 320, description: "<p>This exclusive day cream provides hydration and protection against environmental stressors. Formulated to keep your skin moisturized and radiant throughout the day.</p><p><strong>Benefits:</strong> Hydrates, protects, and brightens skin, reducing the appearance of fine lines.</p><p><strong>Directions:</strong> Apply a small amount to face and neck every morning after cleansing.</p>" },
  { id: 6, title: 'Night Cream Flex', name: 'Night Cream Flex', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3954491713166006865.png', isSale: true, originalPrice: 'Rp 145.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'BENING\'S', transaction_count: 80, created_at: '2024-03-30T15:00:00Z', seen: 280, description: "<p>A nourishing night cream that works while you sleep to repair and rejuvenate your skin. Its rich formula ensures deep hydration and a refreshed look by morning.</p><p><strong>Benefits:</strong> Repairs skin overnight, deeply moisturizes, improves skin texture and elasticity.</p><p><strong>Directions:</strong> Apply evenly to face and neck every evening before sleep.</p>" },
  { id: 7, title: 'Skinmology Lightening Facial Wash (60ml)', name: 'Skinmology Lightening Facial Wash (60ml)', price: 'Rp 65.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7629621716791641756.png', isSale: true, originalPrice: 'Rp 65.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'SKINMOLOGY', transaction_count: 130, created_at: '2024-04-01T16:00:00Z', seen: 350, description: "<p>A gentle yet effective facial wash designed to lighten and brighten your complexion. This 60ml bottle is perfect for daily use.</p><p><strong>Benefits:</strong> Cleanses pores, removes impurities, and promotes a brighter skin tone.</p><p><strong>Directions:</strong> Use twice daily, morning and night, for best lightening results.</p>" },
  { id: 8, title: 'Skinmology Lightening Toner Essence (60ml)', name: 'Skinmology Lightening Toner Essence (60ml)', price: 'Rp 61.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5717501716791918119.png', isSale: true, originalPrice: 'Rp 75.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Toner', collection: 'SKINMOLOGY', transaction_count: 100, created_at: '2024-04-05T17:00:00Z', seen: 290, description: "<p>This lightening toner essence helps to prepare your skin for better absorption of subsequent skincare products. It refines pores and enhances skin clarity.</p><p><strong>Benefits:</strong> Balances skin pH, minimizes pores, and boosts radiance.</p><p><strong>Directions:</strong> After cleansing, apply with a cotton pad or pat directly onto face until absorbed.</p>" },
  { id: 9, title: 'Bundling 2x Sunscreen Skinmology Lightening', name: 'Bundling 2x Sunscreen Skinmology Lightening', price: 'Rp 150.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4564911722331573722.png', isSale: true, originalPrice: 'Rp 230.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'PROMO BUNDLING', transaction_count: 70, created_at: '2024-04-10T18:00:00Z', seen: 200, description: "<p>Get double the protection with this bundling of two Skinmology Lightening Sunscreens. Essential for daily defense against harmful UV rays.</p><p><strong>Benefits:</strong> High SPF protection, prevents sun damage, and maintains skin fairness.</p><p><strong>Directions:</strong> Apply generously 15 minutes before sun exposure. Reapply every 2 hours.</p>" },
  { id: 10, title: 'Bundling 2x Night Cream Skinmology Lightening', name: 'Bundling 2x Night Cream Skinmology Lightening', price: 'Rp 160.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3627911722331510423.png', isSale: true, originalPrice: 'Rp 250.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'PROMO BUNDLING', transaction_count: 60, created_at: '2024-04-15T19:00:00Z', seen: 180, description: "<p>This bundle includes two Skinmology Lightening Night Creams, ensuring continuous skin repair and brightening while you sleep.</p><p><strong>Benefits:</strong> Intensive brightening, reduces dark spots, and promotes skin regeneration overnight.</p><p><strong>Directions:</strong> Apply a generous amount to face and neck every night for optimal results.</p>" },
  { id: 11, title: 'Skinmology Acne Prone Facial Wash (60 ml)', name: 'Skinmology Acne Prone Facial Wash (60 ml)', price: 'Rp 61.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9366171717639702193.png', isSale: true, originalPrice: 'Rp 65.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'SKINMOLOGY', transaction_count: 95, created_at: '2024-04-20T20:00:00Z', seen: 270, description: "<p>Specially formulated facial wash for acne-prone skin. This 60ml cleanser gently purifies and helps control breakouts.</p><p><strong>Benefits:</strong> Cleanses deeply, reduces acne-causing bacteria, and soothes irritated skin.</p><p><strong>Directions:</strong> Lather with water, massage onto damp face, and rinse thoroughly. Use twice daily.</p>" },
  { id: 12, title: 'Skinmology Acne Prone Toner Essence (60ml)', name: 'Skinmology Acne Prone Toner Essence (60ml)', price: 'Rp 61.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3412421717639733392.png', isSale: true, originalPrice: 'Rp 75.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Toner', collection: 'SKINMOLOGY', transaction_count: 85, created_at: '2024-04-25T21:00:00Z', seen: 240, description: "<p>A refreshing toner essence for acne-prone skin. It helps to clarify and calm blemishes while balancing skin's oil production.</p><p><strong>Benefits:</strong> Reduces redness, controls oil, and prepares skin for treatment.</p><p><strong>Directions:</strong> After cleansing, apply to face with a cotton pad, focusing on problem areas.</p>" },
  { id: 13, title: 'Skinmology Acne Prone Sunscreen (12,5 g)', name: 'Skinmology Acne Prone Sunscreen (12,5 g)', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_8914681717639843592.png', isSale: true, originalPrice: 'Rp 115.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'SKINMOLOGY', transaction_count: 75, created_at: '2024-04-30T22:00:00Z', seen: 210, description: "<p>Lightweight sunscreen designed for acne-prone skin. Provides broad-spectrum UV protection without clogging pores.</p><p><strong>Benefits:</strong> Non-comedogenic, protects against sun damage, and helps prevent post-acne dark spots.</p><p><strong>Directions:</strong> Apply evenly to face as the last step of your morning skincare routine.</p>" },
  { id: 14, title: 'Skinmology Acne Prone Night Cream (12,5g)', name: 'Skinmology Acne Prone Night Cream (12,5g)', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2467701717639878872.png', isSale: true, originalPrice: 'Rp 125.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'SKINMOLOGY', transaction_count: 65, created_at: '2024-05-01T09:00:00Z', seen: 190, description: "<p>A targeted night cream for acne-prone skin. Works overnight to reduce blemishes and improve skin texture.</p><p><strong>Benefits:</strong> Calms inflammation, reduces breakouts, and promotes healing for clearer skin.</p><p><strong>Directions:</strong> Apply a thin layer to affected areas every night after cleansing and toning.</p>" },
  { id: 15, title: 'Skinmology 5in1 Acne Expert Series', name: 'Skinmology 5in1 Acne Expert Series', price: 'Rp 300.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3273591734512463495.png', isSale: true, originalPrice: 'Rp 749.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 180, created_at: '2024-05-05T10:00:00Z', seen: 450, description: "<p>The ultimate 5-in-1 series for expert acne treatment. This comprehensive set targets breakouts, reduces redness, and promotes clear, healthy skin.</p><p><strong>Benefits:</strong> Controls oil, fights acne, soothes irritation, and minimizes scarring for a clearer complexion.</p><p><strong>Directions:</strong> Follow the step-by-step routine provided with the kit for optimal acne management.</p>" },
  { id: 16, title: 'Bundling 2x Facial Wash Skinmology Lightening', name: 'Bundling 2x Facial Wash Skinmology Lightening', price: 'Rp 111.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5790921722331354585.png', isSale: true, originalPrice: 'Rp 130.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'PROMO BUNDLING', transaction_count: 140, created_at: '2024-05-10T11:00:00Z', seen: 380, description: "<p>Double pack of Skinmology Lightening Facial Wash. Perfect for ensuring you always have your favorite cleanser on hand.</p><p><strong>Benefits:</strong> Consistent brightening and cleansing for a radiant glow.</p><p><strong>Directions:</strong> Use as your daily facial cleanser, twice a day, for continuous benefits.</p>" },
  { id: 17, title: 'Bundling 2x Toner Essence Skinmology Lightening', name: 'Bundling 2x Toner Essence Skinmology Lightening', price: 'Rp 115.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4273761722331681740.png', isSale: true, originalPrice: 'Rp 150.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Toner', collection: 'PROMO BUNDLING', transaction_count: 105, created_at: '2024-05-15T12:00:00Z', seen: 310, description: "<p>A twin pack of Skinmology Lightening Toner Essence for extended use and enhanced skin preparation.</p><p><strong>Benefits:</strong> Prolonged use for sustained skin balancing and brightening effects.</p><p><strong>Directions:</strong> Apply daily after cleansing, before serums and moisturizers.</p>" },
  { id: 18, title: 'Bundling Skinmology Lightening Facial Wash + Night Cream', name: 'Bundling Skinmology Lightening Facial Wash + Night Cream', price: 'Rp 135.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3378751718865606705.png', isSale: true, originalPrice: 'Rp 190.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'PROMO BUNDLING', transaction_count: 90, created_at: '2024-05-20T13:00:00Z', seen: 260, description: "<p>This bundle combines the Skinmology Lightening Facial Wash and Night Cream for an effective evening skincare routine.</p><p><strong>Benefits:</strong> Cleanses and brightens while you sleep, promoting an even and radiant complexion.</p><p><strong>Directions:</strong> Use facial wash in the evening, followed by the night cream.</p>" },
  { id: 19, title: 'Bundling Skinmology Lightening Toner + Sunscreen', name: 'Bundling Skinmology Lightening Toner + Sunscreen', price: 'Rp 130.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2147001718865963529.png', isSale: true, originalPrice: 'Rp 190.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'PROMO BUNDLING', transaction_count: 80, created_at: '2024-05-25T14:00:00Z', seen: 230, description: "<p>Get your daily dose of protection and preparation with this bundle of Skinmology Lightening Toner and Sunscreen.</p><p><strong>Benefits:</strong> Refines and brightens skin while providing essential sun protection for day.</p><p><strong>Directions:</strong> Apply toner essence after cleansing, then follow with sunscreen before sun exposure.</p>" },
  { id: 20, title: 'Skinmology Double Cleansing Balm', name: 'Skinmology Double Cleansing Balm', price: 'Rp 65.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1836321731554166284.png', isSale: true, originalPrice: 'Rp 125.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Pembersih Make Up', collection: 'PAY DAY SALE!!', transaction_count: 160, created_at: '2024-05-30T15:00:00Z', seen: 420, description: "<p>An effective cleansing balm for a thorough double cleanse. Melts away makeup, dirt, and impurities, leaving skin soft and hydrated.</p><p><strong>Benefits:</strong> Deeply cleanses, nourishes skin, and prevents clogged pores.</p><p><strong>Directions:</strong> Massage onto dry face, then rinse with water. Follow with a water-based cleanser.</p>" },
  { id: 21, title: 'Skinmology Jeju Volcanic Mud Mask', name: 'Skinmology Jeju Volcanic Mud Mask', price: 'Rp 75.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5072051731554193143.png', isSale: true, originalPrice: 'Rp 95.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Masker Wajah', collection: 'SKINMOLOGY', transaction_count: 115, created_at: '2024-06-01T16:00:00Z', seen: 340, description: "<p>Experience the power of Jeju volcanic mud with this purifying face mask. Deeply cleanses pores and absorbs excess sebum.</p><p><strong>Benefits:</strong> Detoxifies, minimizes pores, and leaves skin smooth and refreshed.</p><p><strong>Directions:</strong> Apply an even layer to clean, dry face. Leave for 10-15 minutes, then rinse with warm water.</p>" },
  { id: 22, title: 'KLAIM VOUCHER FREE PRODUCT SKINMOLOGY DOUBLE CLEANSING BALM', name: 'KLAIM VOUCHER FREE PRODUCT SKINMOLOGY DOUBLE CLEANSING BALM', price: 'Rp 0', imageUrl: 'https://cdn.orderonline.id/uploads/images_3059521747967573439.jpg', isSale: false, originalPrice: null, category: 'Produk Lainnya', collection: 'PROMO BUNDLING', transaction_count: 5, created_at: '2024-06-20T08:00:00Z', seen: 20, description: "<p>Claim your free Skinmology Double Cleansing Balm with this special voucher. Limited time offer!</p><p><strong>Note:</strong> This is a voucher, not a physical product for purchase.</p>" },
  { id: 23, title: 'Skinmology Acne Spot', name: 'Skinmology Acne Spot', price: 'Rp 50.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5564591722919869801.png', isSale: true, originalPrice: 'Rp 65.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 210, created_at: '2024-06-21T09:00:00Z', seen: 550, description: "<p>Target stubborn breakouts with Skinmology Acne Spot treatment. Formulated to quickly reduce inflammation and speed up healing.</p><p><strong>Benefits:</strong> Rapid acne reduction, soothes redness, and prevents scarring.</p><p><strong>Directions:</strong> Apply a small amount directly to blemishes after cleansing and toning.</p>" },
  { id: 24, title: 'Bundling Benings Night Cream Flex + Skinmology Jeju Volcanic Mud Mask', name: 'Bundling Benings Night Cream Flex + Skinmology Jeju Volcanic Mud Mask', price: 'Rp 175.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5789651723540089781.png', isSale: true, originalPrice: 'Rp 250.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 190, created_at: '2024-06-22T10:00:00Z', seen: 480, description: "<p>A perfect pairing for overnight skin rejuvenation and deep cleansing. This bundle includes Bening's Night Cream Flex and Skinmology Jeju Volcanic Mud Mask.</p><p><strong>Benefits:</strong> Restores skin while you sleep and purifies pores for a fresh complexion.</p><p><strong>Directions:</strong> Use the mask 2-3 times a week, and the night cream every evening.</p>" },
  { id: 25, title: 'Bundling Skinmology Facial Wash Acne + Skinmology Double Cleansing Balm', name: 'Bundling Skinmology Facial Wash Acne + Skinmology Double Cleansing Balm', price: 'Rp 129.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_8951151723540126843.png', isSale: true, originalPrice: 'Rp 190.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 170, created_at: '2024-06-23T11:00:00Z', seen: 430, description: "<p>Combat acne effectively with this duo: Skinmology Facial Wash Acne and Double Cleansing Balm. Ensures a thorough cleanse for breakout-prone skin.</p><p><strong>Benefits:</strong> Deep cleansing, removes impurities, and helps prevent acne formation.</p><p><strong>Directions:</strong> Start with the cleansing balm to remove makeup, then follow with the facial wash.</p>" },
  { id: 26, title: 'Bundling Skinmology Facial wash Lightening + Skinmology Double Cleansing Balm', name: 'Bundling Skinmology Facial wash Lightening + Skinmology Double Cleansing Balm', price: 'Rp 129.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7232621725248334443.png', isSale: true, originalPrice: 'Rp 190.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 165, created_at: '2024-06-24T12:00:00Z', seen: 410, description: "<p>Achieve a brighter and cleaner complexion with this bundle: Skinmology Facial Wash Lightening and Double Cleansing Balm.</p><p><strong>Benefits:</strong> Effectively removes impurities and makeup while promoting a lighter, more even skin tone.</p><p><strong>Directions:</strong> Use the cleansing balm first, then follow with the lightening facial wash.</p>" },
  { id: 27, title: 'Bundling Skinmology Jeju Volcanic Mud Mask + Skinmology Night Cream Acne Prone', name: 'Bundling Skinmology Jeju Volcanic Mud Mask + Skinmology Night Cream Acne Prone', price: 'Rp 145.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1622551723540151680.png', isSale: true, originalPrice: 'Rp 250.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 155, created_at: '2024-06-25T13:00:00Z', seen: 390, description: "<p>A powerful combo for managing acne and purifying skin. This bundle includes Skinmology Jeju Volcanic Mud Mask and Night Cream Acne Prone.</p><p><strong>Benefits:</strong> Detoxifies pores, reduces acne inflammation, and aids skin recovery overnight.</p><p><strong>Directions:</strong> Use the mask 2-3 times a week, and apply the night cream every evening.</p>" },
  { id: 28, title: 'Bundling Skinmology Jeju Volcanic Mud Mask + Skinmology Night Cream Lightening', name: 'Bundling Skinmology Jeju Volcanic Mud Mask + Skinmology Night Cream Lightening', price: 'Rp 145.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3037371725248375865.png', isSale: true, originalPrice: 'Rp 250.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 150, created_at: '2024-06-26T14:00:00Z', seen: 380, description: "<p>Achieve brighter, purified skin with this bundle: Skinmology Jeju Volcanic Mud Mask and Lightening Night Cream.</p><p><strong>Benefits:</strong> Deeply cleanses and brightens skin, reducing the appearance of dark spots and promoting a radiant glow.</p><p><strong>Directions:</strong> Use the mask weekly, and apply the night cream every evening.</p>" },
  { id: 29, title: 'Skinmology Lightening Sunscreen', name: 'Skinmology Lightening Sunscreen', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7503331724126953586.png', isSale: true, originalPrice: 'Rp 115.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'SKINMOLOGY', transaction_count: 145, created_at: '2024-06-27T15:00:00Z', seen: 370, description: "<p>Daily broad-spectrum protection with Skinmology Lightening Sunscreen. Lightweight and non-greasy, it keeps your skin safe from UV damage.</p><p><strong>Benefits:</strong> Protects from sun, prevents darkening, and maintains skin elasticity.</p><p><strong>Directions:</strong> Apply evenly as the last step of your morning skincare routine.</p>" },
  { id: 30, title: 'Skinmology Lightening Night Cream', name: 'Skinmology Lightening Night Cream', price: 'Rp 82.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3633881724127273834.png', isSale: true, originalPrice: 'Rp 125.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'SKINMOLOGY', transaction_count: 140, created_at: '2024-06-28T16:00:00Z', seen: 360, description: "<p>Wake up to brighter skin with Skinmology Lightening Night Cream. This rich formula works overnight to reduce hyperpigmentation and promote a luminous complexion.</p><p><strong>Benefits:</strong> Reduces dark spots, evens skin tone, and deeply moisturizes for a radiant morning glow.</p><p><strong>Directions:</strong> Apply a small amount to face and neck every evening.</p>" },
  { id: 31, title: 'Bundling Bening\'s Day Cream Exclusive', name: 'Bundling Bening\'s Day Cream Exclusive', price: 'Rp 165.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9224851734513107568.png', isSale: true, originalPrice: 'Rp 200.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'PROMO BUNDLING', transaction_count: 135, created_at: '2024-06-29T17:00:00Z', seen: 350, description: "<p>This bundle includes Bening's Day Cream Exclusive, providing essential daily hydration and protection for a healthy glow.</p><p><strong>Benefits:</strong> Keeps skin moisturized, protected from environmental damage, and looking fresh throughout the day.</p><p><strong>Directions:</strong> Apply every morning after cleansing and toning.</p>" },
  { id: 32, title: 'Bundling 2x Bening\'s Night Cream Flex', name: 'Bundling 2x Bening\'s Night Cream Flex', price: 'Rp 149.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1745021725247801262.png', isSale: true, originalPrice: 'Rp 290.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'PROMO BUNDLING', transaction_count: 130, created_at: '2024-06-30T18:00:00Z', seen: 340, description: "<p>Stock up on your favorite Bening's Night Cream Flex with this convenient double bundle. Ensure continuous overnight repair and rejuvenation.</p><p><strong>Benefits:</strong> Sustained skin renewal, intense hydration, and improved skin elasticity for longer periods.</p><p><strong>Directions:</strong> Use nightly for optimal results.</p>" },
  { id: 33, title: 'Bundling 2x Facial Wash Exclusive', name: 'Bundling 2x Facial Wash Exclusive', price: 'Rp 99.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2919951734512964778.png', isSale: true, originalPrice: 'Rp 150.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'PROMO BUNDLING', transaction_count: 125, created_at: '2024-07-01T19:00:00Z', seen: 330, description: "<p>This bundle provides two Bening's Facial Wash Exclusive bottles for consistent cleansing and a fresh feel.</p><p><strong>Benefits:</strong> Double the cleansing power for a prolonged fresh and clear complexion.</p><p><strong>Directions:</strong> Use twice daily for best results.</p>" },
  { id: 34, title: 'Skinmology Serum Brightening', name: 'Skinmology Serum Brightening', price: 'Rp 130.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_8468711733977782949.jpg', isSale: true, originalPrice: 'Rp 170.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Serum & Minyak Wajah', collection: 'SKINMOLOGY', transaction_count: 120, created_at: '2024-07-02T20:00:00Z', seen: 320, description: "<p>Achieve a luminous glow with Skinmology Serum Brightening. This concentrated serum targets dullness and uneven skin tone for a brighter complexion.</p><p><strong>Benefits:</strong> Reduces hyperpigmentation, boosts radiance, and improves skin clarity.</p><p><strong>Directions:</strong> Apply a few drops to clean face before moisturizing, morning and night.</p>" },
  { id: 35, title: 'Skinmology Serum Acne & Glow', name: 'Skinmology Serum Acne & Glow', price: 'Rp 129.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_6868581733977674840.jpg', isSale: true, originalPrice: 'Rp 150.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Serum & Minyak Wajah', collection: 'SKINMOLOGY', transaction_count: 115, created_at: '2024-07-03T21:00:00Z', seen: 310, description: "<p>Dual-action serum for acne and glow. Skinmology Serum Acne & Glow helps clear blemishes while promoting a healthy, radiant complexion.</p><p><strong>Benefits:</strong> Treats acne, reduces inflammation, and enhances skin's natural glow.</p><p><strong>Directions:</strong> Apply a small amount to affected areas or all over face after toning.</p>" },
  { id: 36, title: 'Skinmology 4in1 Acne Treatment Series', name: 'Skinmology 4in1 Acne Treatment Series', price: 'Rp 390.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5553131733892149447.png', isSale: true, originalPrice: 'Rp 455.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 110, created_at: '2024-07-04T22:00:00Z', seen: 300, description: "<p>A comprehensive 4-in-1 solution for acne treatment. This series works to cleanse, treat, and protect acne-prone skin.</p><p><strong>Benefits:</strong> Targets various aspects of acne, from breakouts to scarring, for clearer skin.</p><p><strong>Directions:</strong> Follow the routine provided with the kit for a complete acne treatment.</p>" },
  { id: 37, title: 'Skinmology 4in1 Brightening Series', name: 'Skinmology 4in1 Brightening Series', price: 'Rp 345.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5735531733899063420.png', isSale: true, originalPrice: 'Rp 365.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 105, created_at: '2024-07-05T09:00:00Z', seen: 290, description: "<p>Unveil radiant skin with Skinmology 4in1 Brightening Series. This set is designed to diminish dullness and enhance your natural glow.</p><p><strong>Benefits:</strong> Brightens skin, reduces dark spots, and improves overall skin luminosity for a more even complexion.</p><p><strong>Directions:</strong> Integrate into your daily routine for noticeable brightening results.</p>" },
  { id: 38, title: 'Bening\'s 3in1 Flex', name: 'Bening\'s 3in1 Flex', price: 'Rp 200.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5798411735010146838.png', isSale: true, originalPrice: 'Rp 260.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'BENING\'S', transaction_count: 100, created_at: '2024-07-06T10:00:00Z', seen: 280, description: "<p>A flexible 3-in-1 solution from Bening's for daily skincare needs. This versatile set simplifies your routine without compromising effectiveness.</p><p><strong>Benefits:</strong> Offers core skincare benefits in a compact set, adaptable for various skin concerns.</p><p><strong>Directions:</strong> Use as directed for a complete and easy daily skincare regimen.</p>" },
  { id: 39, title: 'Skinmology 5in1 Lightening for Oily Skin', name: 'Skinmology 5in1 Lightening for Oily Skin', price: 'Rp 335.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_6814141735010630859.png', isSale: true, originalPrice: 'Rp 450.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 95, created_at: '2024-07-07T11:00:00Z', seen: 270, description: "<p>Specifically formulated 5-in-1 lightening series for oily skin. Addresses both brightness and oil control for a balanced complexion.</p><p><strong>Benefits:</strong> Brightens skin, controls excess oil, and minimizes shine for a fresh look.</p><p><strong>Directions:</strong> Follow the regimen designed for oily skin to achieve optimal brightening and oil control.</p>" },
  { id: 40, title: 'Skinmology 5in1 Acne Solution for Dry Skin', name: 'Skinmology 5in1 Acne Solution for Dry Skin', price: 'Rp 300.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7845901735011047530.png', isSale: true, originalPrice: 'Rp 450.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 90, created_at: '2024-07-08T12:00:00Z', seen: 260, description: "<p>A specialized 5-in-1 acne solution for dry skin types. This series treats breakouts without causing further dryness or irritation.</p><p><strong>Benefits:</strong> Combats acne while providing essential hydration, preventing dryness and flakiness.</p><p><strong>Directions:</strong> Use consistently as directed for clearer skin that feels comfortable and moisturized.</p>" },
  { id: 41, title: 'Paket Bright & Glow Treatment', name: 'Paket Bright & Glow Treatment', price: 'Rp 415.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4678071737447724141.png', isSale: true, originalPrice: 'Rp 620.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 85, created_at: '2024-07-09T13:00:00Z', seen: 250, description: "<p>Unleash your skin's inner radiance with the Paket Bright & Glow Treatment. This comprehensive set targets dullness and promotes a luminous, even-toned complexion.</p><p><strong>Benefits:</strong> Deeply nourishes, brightens, and revitalizes skin, resulting in a healthy, youthful glow.</p><p><strong>Directions:</strong> Follow the step-by-step regimen included to maximize brightening and glowing effects.</p>" },
  { id: 42, title: 'Skinmology UV Protection Daily Sunscreen', name: 'Skinmology UV Protection Daily Sunscreen', price: 'Rp 129.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9979301742523986008.png', isSale: true, originalPrice: 'Rp 150.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'SKINMOLOGY', transaction_count: 80, created_at: '2024-07-10T14:00:00Z', seen: 240, description: "<p>Your daily shield against harmful UV rays, Skinmology UV Protection Daily Sunscreen is lightweight and provides broad-spectrum protection.</p><p><strong>Benefits:</strong> Prevents sun damage, reduces the risk of premature aging, and keeps skin healthy.</p><p><strong>Directions:</strong> Apply generously to face and exposed skin 15 minutes before sun exposure. Reapply as needed.</p>" },
];

const collections = [
    { name: 'Semua Koleksi', path: '/produk/all' },
    { name: 'PAY DAY SALE!!', path: '/produk/pay-day-sale' },
    { name: 'NEW LAUNCHING!!!', path: '/produk/new-launching' },
    { name: 'SKINMOLOGY', path: '/produk/skinmology' },
    { name: 'PROMO BUNDLING', path: '/produk/promo-bundling' },
];

const categories = [];

const ProductCard = ({ product }) => (
    <div className="product-item orientation-square group">
        <Link to={`/produk/${product.id}`} className="clearfix block">
            <div className="product-item-top list-product-item relative overflow-hidden">
                {product.isSale && (
                    <span className="product-label sale absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10 font-judson">sale</span>
                )}
                <img src={product.imageUrl}  loading="lazy" alt={product.name}
                    className="w-full h-48 object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/CCCCCC/333333?text=Image+Error"; }}
                />
            </div>
            <div className="product-item-bottom p-2">
                <div className="product-item-detail">
                    <div title={product.name} className="product-item-title text-base sm:text-lg font-semibold text-gray-900 mb-1 line-clamp-2 font-judson">
                        {product.name}
                    </div>
                    <div className="product-item-price flex items-baseline">
                        {product.originalPrice && (
                            <span className="text-gray-500 text-sm line-through mr-1 font-judson">{product.originalPrice}</span>
                        )}
                        <span className="text-lg font-bold text-[#DEA05B] font-judson">{product.price}</span>
                    </div>
                </div>
            </div>
        </Link>
        {/* Hover Actions (buttons also link to product detail) */}
        <div className="product-item-hover absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="product-item-hover-action flex space-x-2">
                <Link to={`/produk/${product.id}`} title="Add to Cart" className="btn btn-outline-default p-2 rounded-full bg-white text-gray-700 hover:bg-[#DEA05B] hover:text-white transition-colors duration-200">
                    <ShoppingCart size={20} />
                </Link>
                <button title="Wishlist" className="btn btn-outline-default p-2 rounded-full bg-white text-gray-700 hover:bg-red-500 hover:text-white transition-colors duration-200">
                    <Heart size={20} />
                </button>
                <Link to={`/produk/${product.id}`} title="Quick View" className="btn btn-outline-default p-2 rounded-full bg-white text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-200">
                    <Eye size={20} />
                </Link>
            </div>
        </div>
    </div>
);

// Product Sidebar Filters Component
const ProductSidebar = ({
    minPrice, maxPrice, onMinPriceChange, onMaxPriceChange, onFilterPrice,
    activeCollectionPath, setActiveCollectionPath
}) => {

    const handleMinChange = (e) => {
        onMinPriceChange(formatNumberWithThousandsSeparator(e.target.value));
    };

    const handleMaxChange = (e) => {
        onMaxPriceChange(formatNumberWithThousandsSeparator(e.target.value));
    };

    return (
        <div className="product-sidebar-wrapper space-y-4">
            {/* Koleksi */}
            <div className="bg-white rounded-xl shadow-md p-4 hidden lg:block">
                <div className="product-sidebar-header text-xl font-bold text-gray-800 mb-3 font-judson">Koleksi</div>
                <div className="body mt-2">
                    <ul className="product-categories-menu space-y-2">
                        {collections.map(collection => (
                             <li key={collection.path} className="accordion">
                                <Link to={collection.path}
                                    className={`block py-1 font-judson ${activeCollectionPath === collection.path ? 'font-bold text-[#DEA05B]' : 'text-gray-700 hover:text-[#DEA05B] font-medium'}`}
                                    onClick={() => setActiveCollectionPath(collection.path)} >
                                    {collection.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Harga */}
            <div className="bg-white rounded-xl shadow-md p-4 hidden lg:block">
                <div className="product-sidebar-header text-xl font-bold text-gray-800 mb-3 font-judson">Harga</div>
                <div className="body mt-2 pt-3">
                    <div className="product-filter-price">
                        <div className="product-filter-price-wrapper flex flex-col space-y-4">
                            <div className="control-price w-full">
                                <label htmlFor="minPrice" className="block text-gray-700 text-sm mb-1 font-judson">Minimum</label>
                                <div className="flex w-full">
                                    <span className="bg-gray-100 text-gray-600 px-3 py-2 rounded-l-lg border border-gray-300 font-judson shrink-0">Rp.</span>
                                    <input type="text" id="minPrice" placeholder="25.000"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#DEA05B] font-judson"
                                        value={minPrice} onChange={handleMinChange} />
                                </div>
                            </div>
                            <div className="control-price w-full">
                                <label htmlFor="maxPrice" className="block text-gray-700 text-sm mb-1 font-judson">Maximum</label>
                                <div className="flex w-full">
                                    <span className="bg-gray-100 text-gray-600 px-3 py-2 rounded-l-lg border border-gray-300 font-judson shrink-0">Rp.</span>
                                    <input type="text" id="maxPrice" placeholder="25.000"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#DEA05B] font-judson"
                                        value={maxPrice} onChange={handleMaxChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer mt-4 text-right">
                    <button onClick={onFilterPrice} className="bg-[#DEA05B] text-white px-5 py-2 rounded-lg hover:bg-[#C98A46] transition-colors duration-300 font-semibold shadow-md font-judson">
                        Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

// Product Widget Component (for Terbaru, Terlaris, Popular)
const ProductWidget = ({ title, products, link, sortType }) => (
    <div className="bg-white rounded-xl shadow-md p-4">
        <div className="widget-header flex justify-between items-center mb-4">
            <div className="widget-title text-xl font-bold text-gray-800 font-judson">{title}</div>
            <div className="widget-icon"></div>
        </div>
        <div className="widget-body space-y-4">
            {products.map(product => (
                <Link to={`/produk/${product.id}`} key={product.id} className="block group">
                    <div className="flex items-center space-x-3">
                        <div className="w-1/4 flex-shrink-0">
                            <img src={product.imageUrl} alt={product.name}
                                className="w-full h-auto rounded-lg object-cover border border-gray-100 group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/CCCCCC/333333?text=Error"; }}
                            />
                        </div>
                        <div className="flex-1 pt-1">
                            <div title={product.name} className="product-item-title text-gray-800 text-base font-medium line-clamp-2 group-hover:text-[#DEA05B] transition-colors font-judson">
                                {product.name}
                            </div>
                            <div className="product-item-price mt-1 text-[#DEA05B] text-lg font-bold font-judson">
                                {product.price}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        <div className="widget-action mt-6 text-right">
            <Link to={link} className="inline-flex items-center text-[#DEA05B] hover:text-[#C98A46] font-semibold font-judson">
                <ChevronRight size={18} className="mr-1" /> Lihat Semua
            </Link>
        </div>
    </div>
);

// --- Main ProductPage Component ---
const ProductPage = () => {
  const productsPerPage = 21;
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { collectionName } = useParams(); 

  const initialPage = parseInt(searchParams.get('page')) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [activeCollectionPath, setActiveCollectionPath] = useState('');

  useEffect(() => {
    const basePath = collectionName ? `/produk/${collectionName}` : `/produk/all`;
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('page', currentPage.toString());
    navigate(`${basePath}?${newSearchParams.toString()}`, { replace: true });
  }, [currentPage, collectionName, searchParams, navigate]);

  useEffect(() => {
      const pageFromUrl = parseInt(searchParams.get('page'));
      if (pageFromUrl && pageFromUrl !== currentPage) {
          setCurrentPage(pageFromUrl);
      }

      const currentCollectionPath = collectionName ? `/produk/${collectionName}` : '/produk/all';
      setActiveCollectionPath(currentCollectionPath);

  }, [searchParams, collectionName]); 

  const parsePrice = (priceStr) => {
    const cleaned = String(priceStr).replace(/Rp\.|\.|\s/g, '').trim();
    return parseInt(cleaned) || 0;
  };

  const getFilteredAndSortedProducts = () => {
    let filteredProducts = allProductsData.filter(product => {
      const productNameMatches = searchKeyword === '' || product.name.toLowerCase().includes(searchKeyword.toLowerCase());

      const productPriceValue = parsePrice(product.price);
      const min = minPrice ? parsePrice(minPrice) : 0; 
      const max = maxPrice ? parsePrice(maxPrice) : Infinity; 
      const priceMatches = productPriceValue >= min && productPriceValue <= max;

      let collectionMatches = true;
      if (collectionName) { 
          const targetCollection = collections.find(c => c.path.endsWith(`/${collectionName}`));
          if (targetCollection) {
              collectionMatches = product.collection === targetCollection.name;
          } else if (collectionName === 'all') {
              collectionMatches = true; 
          } else {
              collectionMatches = false; 
          }
      } else { 
          collectionMatches = true;
      }

      const categoryMatches = true;

      return productNameMatches && priceMatches && collectionMatches && categoryMatches;
    });

    filteredProducts.sort((a, b) => {
      if (sortOrder === 'transaction_count') {
        return b.transaction_count - a.transaction_count;
      } else if (sortOrder === 'created_at') {
        return new Date(b.created_at) - new Date(a.created_at);
      } else if (sortOrder === 'low_price') {
        return parsePrice(a.price) - parsePrice(b.price);
      } else if (sortOrder === 'high_price') {
        return parsePrice(b.price) - parsePrice(a.price);
      }
      return 0;
    });

    return filteredProducts;
  };

  const currentProducts = getFilteredAndSortedProducts();
  const totalPages = Math.ceil(currentProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = currentProducts.slice(startIndex, endIndex);

  const latestProducts = allProductsData.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 3);
  const bestSellingProducts = allProductsData.slice().sort((a, b) => b.transaction_count - a.transaction_count).slice(0, 3);
  const popularProducts = allProductsData.slice().sort((a, b) => b.seen - a.seen).slice(0, 3);

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
    setCurrentPage(1);
  };

  const handleMinPriceChange = (value) => {
    setMinPrice(value);
  };

  const handleMaxPriceChange = (value) => {
    setMaxPrice(value);
  };

  const handleFilterPrice = () => {
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }
    return pages;
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen">
      {/* Inline CSS for animations and custom font */}
      <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');

          .font-judson { font-family: 'Judson', serif; }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .product-label.sale {
              background-color: #f87171; /* A shade of red for sale */
              color: white;
              font-size: 0.75rem; /* text-xs */
              font-weight: 700; /* font-bold */
              padding: 0.25rem 0.5rem; /* px-2 py-1 */
              border-radius: 0.375rem; /* rounded-md */
          }
          .product-item-hover {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }
          .product-item:hover .product-item-hover {
            opacity: 1;
          }
          .product-item {
            position: relative;
            overflow: hidden;
          }
          `}
      </style>

      <main className="container-fluid mx-auto px-4 py-8 pt-8">
        <div className="row grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-sm-3 px-0 lg:col-span-3 mt-2">
            <ProductSidebar
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinPriceChange={handleMinPriceChange}
                onMaxPriceChange={handleMaxPriceChange}
                onFilterPrice={handleFilterPrice}
                activeCollectionPath={activeCollectionPath}
                setActiveCollectionPath={setActiveCollectionPath}
            />
          </div>

          {/* Main Product List */}
          <div className="col-sm-9 px-0 lg:col-span-9 mt-2">
            <div className="bg-white rounded-xl shadow-md p-4 mb-3">
              <div className="block-header flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-4">
                <div className="block-header-left flex-1 pt-1">
                  <div className="info-records text-gray-600 font-judson">Daftar Produk <strong>{startIndex + 1} - {Math.min(endIndex, currentProducts.length)}</strong> dari <strong>{currentProducts.length}</strong></div>
                </div>
                <div className="block-header-right flex flex-col md:flex-row items-end md:items-center mt-3 md:mt-0 space-y-3 md:space-y-0 md:space-x-4">
                  {/* Sorting Control */}
                  <div className="filter-sort flex items-center ml-3">
                    <span className="text-gray-700 mr-2 font-judson">Urutkan: </span>
                    <select
                      className="form-control px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DEA05B] font-judson"
                      value={sortOrder} onChange={handleSortChange} >
                      <option value="">Paling Sesuai</option>
                      <option value="transaction_count">Penjualan</option>
                      <option value="created_at">Terbaru</option>
                      <option value="low_price">Termurah</option>
                      <option value="high_price">Termahal</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* TOP Pagination */}
              {totalPages > 1 && (
                <div className="block-footer mb-6 flex justify-end">
                  <nav aria-label="Page navigation top">
                    <ul className="pagination flex space-x-1">
                      <li className={`page-item ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 font-judson"
                          disabled={currentPage === 1}>
                          &laquo;
                        </button>
                      </li>
                      {getPaginationNumbers().map((page) => (
                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                          <button onClick={() => handlePageChange(page)}
                            className={`px-3 py-2 rounded-lg ${currentPage === page ? 'bg-[#DEA05B] text-white' : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100'} font-semibold font-judson`} >
                            {page}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <button  onClick={() => handlePageChange(currentPage + 1)}
                          className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 font-judson"
                          disabled={currentPage === totalPages}>
                          &raquo;
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}

              <div className="block-list grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {displayedProducts.length > 0 ? (
                    displayedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-600 py-10 font-judson">Tidak ada produk yang ditemukan.</div>
                )}
              </div>

              {/* BOTTOM Pagination */}
              {totalPages > 1 && (
                <div className="block-footer mt-8 flex justify-end">
                  <nav aria-label="Page navigation bottom">
                    <ul className="pagination flex space-x-1">
                      <li className={`page-item ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <button onClick={() => handlePageChange(currentPage - 1)}
                          className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 font-judson"
                          disabled={currentPage === 1}>
                          &laquo;
                        </button>
                      </li>
                      {getPaginationNumbers().map((page) => (
                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                          <button onClick={() => handlePageChange(page)}
                            className={`px-3 py-2 rounded-lg ${currentPage === page ? 'bg-[#DEA05B] text-white' : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100'} font-semibold font-judson`}>
                            {page}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <button onClick={() => handlePageChange(currentPage + 1)}
                          className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 font-judson"
                          disabled={currentPage === totalPages} >
                          &raquo;
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Floating Filter Buttons (for mobile) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden p-4 z-40 rounded-t-xl border-t border-gray-200">
            <div className="flex justify-around items-center">
                <button className="flex-1 flex flex-col items-center justify-center p-2 text-gray-700 hover:text-[#DEA05B] font-medium font-judson">
                    <SlidersHorizontal size={24} className="mb-1" />
                    <span>Filter</span>
                </button>
                <button className="flex-1 flex flex-col items-center justify-center p-2 text-gray-700 hover:text-[#DEA05B] font-medium font-judson">
                    <ArrowDownWideNarrow size={24} className="mb-1" />
                    <span>Urutkan</span>
                </button>
            </div>
        </div>

        {/* Widgets Section (main-widget) */}
        <div className="main-widget container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductWidget
                title="Produk Terbaru"
                products={latestProducts}
                link="/products?sort=created_at"
                sortType="created_at"
            />
            <ProductWidget
                title="Produk Terlaris"
                products={bestSellingProducts}
                link="/products?sort=transaction_count"
                sortType="transaction_count"
            />
            <ProductWidget
                title="Popular"
                products={popularProducts}
                link="/products?sort=seen"
                sortType="seen"
            />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
