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

// --- Product Data ---
const allProductsData = [
  { id: 'translucent-powder', name: 'Translucent Powder', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7034241712213640132.png', isSale: false, originalPrice: null, category: 'Kecantikan', subCategory: 'Make Up Wajah', subSubCategory: 'Bedak Wajah', collection: 'BENING\'S', transaction_count: 50, created_at: '2024-03-01T10:00:00Z', seen: 150 },
  { id: 'pay-day-sale-paket-5in1-skinmology-lightening-booster-series', name: 'Paket 5in1 Skinmology Lightening Booster Series', price: 'Rp 300.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1469471712219903864.png', isSale: true, originalPrice: 'Rp 385.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'PAY DAY SALE!!', transaction_count: 120, created_at: '2024-03-10T11:00:00Z', seen: 300 },
  { id: 'paket-skinmology-3in1-morning-routine', name: 'Paket 3in1 Morning Routine Lightening Booster Series', price: 'Rp 185.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3423261712220667423.png', isSale: true, originalPrice: 'Rp 300.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 90, created_at: '2024-03-15T12:00:00Z', seen: 250 },
  { id: 'facial-wash-exclusive', name: 'Facial Wash Exclusive', price: 'Rp 65.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3291431734495789951.png', isSale: true, originalPrice: 'Rp 79.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'BENING\'S', transaction_count: 150, created_at: '2024-03-20T13:00:00Z', seen: 400 },
  { id: 'day-cream-exclusive', name: 'Day Cream Exclusive', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3075641742961761603.png', isSale: true, originalPrice: 'Rp 100.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'BENING\'S', transaction_count: 110, created_at: '2024-03-25T14:00:00Z', seen: 320 },
  { id: 'night-cream-flex', name: 'Night Cream Flex', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3954491713166006865.png', isSale: true, originalPrice: 'Rp 145.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'BENING\'S', transaction_count: 80, created_at: '2024-03-30T15:00:00Z', seen: 280 },
  { id: 'skinmology', name: 'Skinmology Lightening Facial Wash (60ml)', price: 'Rp 65.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7629621716791641756.png', isSale: true, originalPrice: 'Rp 65.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'SKINMOLOGY', transaction_count: 130, created_at: '2024-04-01T16:00:00Z', seen: 350 },
  { id: 'skinmology-lightening-toner-essence-60ml', name: 'Skinmology Lightening Toner Essence (60ml)', price: 'Rp 61.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5717501716791918119.png', isSale: true, originalPrice: 'Rp 75.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Toner', collection: 'SKINMOLOGY', transaction_count: 100, created_at: '2024-04-05T17:00:00Z', seen: 290 },
  { id: 'bundling-2x-sunscreen-skinmology-lightening', name: 'Bundling 2x Sunscreen Skinmology Lightening', price: 'Rp 150.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4564911722331573722.png', isSale: true, originalPrice: 'Rp 230.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'PROMO BUNDLING', transaction_count: 70, created_at: '2024-04-10T18:00:00Z', seen: 200 },
  { id: 'bundling-2x-night-cream-skinmology-lightening', name: 'Bundling 2x Night Cream Skinmology Lightening', price: 'Rp 160.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3627911722331510423.png', isSale: true, originalPrice: 'Rp 250.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'PROMO BUNDLING', transaction_count: 60, created_at: '2024-04-15T19:00:00Z', seen: 180 },
  { id: 'skinmology-acne-prone-facial-wash-60-ml', name: 'Skinmology Acne Prone Facial Wash (60 ml)', price: 'Rp 61.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9366171717639702193.png', isSale: true, originalPrice: 'Rp 65.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'SKINMOLOGY', transaction_count: 95, created_at: '2024-04-20T20:00:00Z', seen: 270 },
  { id: 'skinmology-acne-prone-toner-essence-60ml', name: 'Skinmology Acne Prone Toner Essence (60ml)', price: 'Rp 61.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3412421717639733392.png', isSale: true, originalPrice: 'Rp 75.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Toner', collection: 'SKINMOLOGY', transaction_count: 85, created_at: '2024-04-25T21:00:00Z', seen: 240 },
  { id: 'skinmology-acne-prone-sunscreen-125-g', name: 'Skinmology Acne Prone Sunscreen (12,5 g)', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_8914681717639843592.png', isSale: true, originalPrice: 'Rp 115.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'SKINMOLOGY', transaction_count: 75, created_at: '2024-04-30T22:00:00Z', seen: 210 },
  { id: 'skinmology-acne-prone-night-cream-125g', name: 'Skinmology Acne Prone Night Cream (12,5g)', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2467701717639878872.png', isSale: true, originalPrice: 'Rp 125.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'SKINMOLOGY', transaction_count: 65, created_at: '2024-05-01T09:00:00Z', seen: 190 },
  { id: 'skinmology-5in1-acne-expert-series-free-moderma-elixir-hair-repair', name: 'Skinmology 5in1 Acne Expert Series', price: 'Rp 300.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3273591734512463495.png', isSale: true, originalPrice: 'Rp 749.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 180, created_at: '2024-05-05T10:00:00Z', seen: 450 },
  { id: 'bundling-2x-facial-wash-skinmology-lightening', name: 'Bundling 2x Facial Wash Skinmology Lightening', price: 'Rp 111.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5790921722331354585.png', isSale: true, originalPrice: 'Rp 130.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'PROMO BUNDLING', transaction_count: 140, created_at: '2024-05-10T11:00:00Z', seen: 380 },
  { id: 'bundling-2x-toner-essence-skinmology-lightening', name: 'Bundling 2x Toner Essence Skinmology Lightening', price: 'Rp 115.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4273761722331681740.png', isSale: true, originalPrice: 'Rp 150.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Toner', collection: 'PROMO BUNDLING', transaction_count: 105, created_at: '2024-05-15T12:00:00Z', seen: 310 },
  { id: 'bundling-skinmology-lightening-facial-wash-night-cream', name: 'Bundling Skinmology Lightening Facial Wash + Night Cream', price: 'Rp 135.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3378751718865606705.png', isSale: true, originalPrice: 'Rp 190.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'PROMO BUNDLING', transaction_count: 90, created_at: '2024-05-20T13:00:00Z', seen: 260 },
  { id: 'bundling-skinmology-lightening-toner-sunscreen', name: 'Bundling Skinmology Lightening Toner + Sunscreen', price: 'Rp 130.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2147001718865963529.png', isSale: true, originalPrice: 'Rp 190.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'PROMO BUNDLING', transaction_count: 80, created_at: '2024-05-25T14:00:00Z', seen: 230 },
  { id: 'pay-day-sale-skinmology-double-cleansing-balm', name: 'Skinmology Double Cleansing Balm', price: 'Rp 65.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1836321731554166284.png', isSale: true, originalPrice: 'Rp 125.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Pembersih Make Up', collection: 'PAY DAY SALE!!', transaction_count: 160, created_at: '2024-05-30T15:00:00Z', seen: 420 },
  { id: 'skinmology-jeju-volcanic-mud-mask', name: 'Skinmology Jeju Volcanic Mud Mask', price: 'Rp 75.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5072051731554193143.png', isSale: true, originalPrice: 'Rp 95.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Masker Wajah', collection: 'SKINMOLOGY', transaction_count: 115, created_at: '2024-06-01T16:00:00Z', seen: 340 },
  { id: 'klaim-voucher-free-product-skinmology-double-cleansing-balm', name: 'KLAIM VOUCHER FREE PRODUCT SKINMOLOGY DOUBLE CLEANSING BALM', price: 'Rp 0', imageUrl: 'https://cdn.orderonline.id/uploads/images_3059521747967573439.jpg', isSale: false, originalPrice: null, category: 'Produk Lainnya', collection: 'PROMO BUNDLING', transaction_count: 5, created_at: '2024-06-20T08:00:00Z', seen: 20 },
  { id: 'acne-spot', name: 'Skinmology Acne Spot', price: 'Rp 50.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5564591722919869801.png', isSale: true, originalPrice: 'Rp 65.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 210, created_at: '2024-06-21T09:00:00Z', seen: 550 },
  { id: 'bundling-benings-night-cream-flex-skinmology-jeju-volcanic-mud-mask', name: 'Bundling Benings Night Cream Flex + Skinmology Jeju Volcanic Mud Mask', price: 'Rp 175.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5789651723540089781.png', isSale: true, originalPrice: 'Rp 250.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 190, created_at: '2024-06-22T10:00:00Z', seen: 480 },
  { id: 'bundling-skinmology-facial-wash-acne-skinmology-double-cleansing-balm', name: 'Bundling Skinmology Facial Wash Acne + Skinmology Double Cleansing Balm', price: 'Rp 129.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_8951151723540126843.png', isSale: true, originalPrice: 'Rp 190.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 170, created_at: '2024-06-23T11:00:00Z', seen: 430 },
  { id: 'bundling-skinmology-facial-wash-lightening-skinmology-double-cleansing-balm', name: 'Bundling Skinmology Facial wash Lightening + Skinmology Double Cleansing Balm', price: 'Rp 129.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7232621725248334443.png', isSale: true, originalPrice: 'Rp 190.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 165, created_at: '2024-06-24T12:00:00Z', seen: 410 },
  { id: 'bundling-skinmology-jeju-volcanic-mud-mask-skinmology-night-cream-acne-prone', name: 'Bundling Skinmology Jeju Volcanic Mud Mask + Skinmology Night Cream Acne Prone', price: 'Rp 145.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1622551723540151680.png', isSale: true, originalPrice: 'Rp 250.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 155, created_at: '2024-06-25T13:00:00Z', seen: 390 },
  { id: 'bundling-skinmology-jeju-volcanic-mud-mask-skinmology-night-cream-lightening', name: 'Bundling Skinmology Jeju Volcanic Mud Mask + Skinmology Night Cream Lightening', price: 'Rp 145.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3037371725248375865.png', isSale: true, originalPrice: 'Rp 250.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 150, created_at: '2024-06-26T14:00:00Z', seen: 380 },
  { id: 'skinmology-lightening-sunscreen', name: 'Skinmology Lightening Sunscreen', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7503331724126953586.png', isSale: true, originalPrice: 'Rp 115.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'SKINMOLOGY', transaction_count: 145, created_at: '2024-06-27T15:00:00Z', seen: 370 },
  { id: 'skinmology-lightening-night-cream', name: 'Skinmology Lightening Night Cream', price: 'Rp 82.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3633881724127273834.png', isSale: true, originalPrice: 'Rp 125.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'SKINMOLOGY', transaction_count: 140, created_at: '2024-06-28T16:00:00Z', seen: 360 },
  { id: 'bundling-benings-day-cream-exclusive', name: 'Bundling Bening\'s Day Cream Exclusive', price: 'Rp 165.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9224851734513107568.png', isSale: true, originalPrice: 'Rp 200.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'PROMO BUNDLING', transaction_count: 135, created_at: '2024-06-29T17:00:00Z', seen: 350 },
  { id: 'Bundling2xBeningsNightCreamFlex', name: 'Bundling 2x Bening\'s Night Cream Flex', price: 'Rp 149.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1745021725247801262.png', isSale: true, originalPrice: 'Rp 290.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'PROMO BUNDLING', transaction_count: 130, created_at: '2024-06-30T18:00:00Z', seen: 340 },
  { id: 'bundling-2x-facial-wash-exclusive', name: 'Bundling 2x Facial Wash Exclusive', price: 'Rp 99.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2919951734512964778.png', isSale: true, originalPrice: 'Rp 150.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Cleanser', collection: 'PROMO BUNDLING', transaction_count: 125, created_at: '2024-07-01T19:00:00Z', seen: 330 },
  { id: 'skinmology-serum-brightening', name: 'Skinmology Serum Brightening', price: 'Rp 130.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_8468711733977782949.jpg', isSale: true, originalPrice: 'Rp 170.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Serum & Minyak Wajah', collection: 'SKINMOLOGY', transaction_count: 120, created_at: '2024-07-02T20:00:00Z', seen: 320 },
  { id: 'skinmology-serum-acne-glow', name: 'Skinmology Serum Acne & Glow', price: 'Rp 129.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_6868581733977674840.jpg', isSale: true, originalPrice: 'Rp 150.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Serum & Minyak Wajah', collection: 'SKINMOLOGY', transaction_count: 115, created_at: '2024-07-03T21:00:00Z', seen: 310 },
  { id: 'skinmology-4in1-acne-treatment-series', name: 'Skinmology 4in1 Acne Treatment Series', price: 'Rp 390.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5553131733892149447.png', isSale: true, originalPrice: 'Rp 455.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 110, created_at: '2024-07-04T22:00:00Z', seen: 300 },
  { id: 'skinmology-4in1-brightening-series', name: 'Skinmology 4in1 Brightening Series', price: 'Rp 345.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5735531733899063420.png', isSale: true, originalPrice: 'Rp 365.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 105, created_at: '2024-07-05T09:00:00Z', seen: 290 },
  { id: 'benings-3in1-flex', name: 'Bening\'s 3in1 Flex', price: 'Rp 200.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5798411735010146838.png', isSale: true, originalPrice: 'Rp 260.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'BENING\'S', transaction_count: 100, created_at: '2024-07-06T10:00:00Z', seen: 280 },
  { id: 'skinmology-5in1-lightening-for-oily-skin', name: 'Skinmology 5in1 Lightening for Oily Skin', price: 'Rp 335.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_6814141735010630859.png', isSale: true, originalPrice: 'Rp 450.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 95, created_at: '2024-07-07T11:00:00Z', seen: 270 },
  { id: 'skinmology-5in1-acne-solution-for-dry-skin', name: 'Skinmology 5in1 Acne Solution for Dry Skin', price: 'Rp 300.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7845901735011047530.png', isSale: true, originalPrice: 'Rp 450.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 90, created_at: '2024-07-08T12:00:00Z', seen: 260 },
  { id: 'paket-bright-glow-treatment', name: 'Paket Bright & Glow Treatment', price: 'Rp 415.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4678071737447724141.png', isSale: true, originalPrice: 'Rp 620.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Paket Perawatan Wajah', collection: 'PROMO BUNDLING', transaction_count: 85, created_at: '2024-07-09T13:00:00Z', seen: 250 },
  { id: 'skinmology-uv-protection-daily-sunscreen', name: 'Skinmology UV Protection Daily Sunscreen', price: 'Rp 129.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9979301742523986008.png', isSale: true, originalPrice: 'Rp 150.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Sunblock Wajah', collection: 'SKINMOLOGY', transaction_count: 80, created_at: '2024-07-10T14:00:00Z', seen: 240 },
];

const collections = [
    { name: 'Semua Koleksi', path: '/produk/all' },
    { name: 'PAY DAY SALE!!', path: '/produk/pay-day-sale' },
    { name: 'NEW LAUNCHING!!!', path: '/produk/new-launching' },
    { name: 'SKINMOLOGY', path: '/produk/skinmology' },
    { name: 'PROMO BUNDLING', path: '/produk/promo-bundling' },
];

const categories = [];

// Individual Product Card Component
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
