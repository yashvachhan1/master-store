/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { Star, ChevronRight, Heart, ShieldCheck, Truck, RefreshCcw, Plus, Minus } from 'lucide-react';
import type { ReactElement } from 'react';

// --- Mock Database for Single Product ---
const PRODUCT_DATA = {
    id: '1',
    title: 'The Essential White Tee',
    price: '$35.00',
    description: 'Crafted from 100% premium organic cotton, this t-shirt offers unparalleled comfort and a flawless fit. Engineered for durability, it gets softer with every wash while maintaining its structured silhouette. An absolute foundation for any modern wardrobe.',
    category: 'Apparel',
    rating: 4.8,
    reviews: 124,
    colors: ['White', 'Black', 'Grey', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1200&auto=format&fit=crop'
    ],
    details: [
        { title: 'Materials & Care', content: '100% Organic Cotton. Machine wash cold with like colors. Tumble dry low or hang to dry to preserve fibers. Do not bleach.' },
        { title: 'Shipping & Returns', content: 'Free standard shipping on orders over $100. Deliveries usually take 3-5 business days. You have 30 days to return your item in original condition.' },
        { title: 'Sustainability', content: 'Produced in a Fair Trade Certified™ facility. We use 80% less water in the dyeing process compared to industry standards.' }
    ]
};

// Mock related products
const RELATED_PRODUCTS = [
    { id: '5', title: 'Everyday Oxford Shirt', price: '$65.00', img: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=500&auto=format&fit=crop' },
    { id: '6', title: 'Signature Denim Jacket', price: '$95.00', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500&auto=format&fit=crop' },
    { id: '12', title: 'Tailored Chino Pants', price: '$80.00', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=500&auto=format&fit=crop' },
    { id: '4', title: 'Premium Wool Beanie', price: '$28.00', img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=500&auto=format&fit=crop' },
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }): ReactElement {
    const unwrappedParams = use(params);
    const id = unwrappedParams.id;

    const [selectedColor, setSelectedColor] = useState(PRODUCT_DATA.colors[0]);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [expandedDetail, setExpandedDetail] = useState<number | null>(0);

    // In a real app we'd fetch the product by ID here. We just use the mock for now.
    const product = PRODUCT_DATA;

    // Basic color styles
    const colorStyles: Record<string, string> = {
        White: 'bg-white border border-neutral-300',
        Black: 'bg-black',
        Grey: 'bg-neutral-500',
        Navy: 'bg-blue-900',
    };

    return (
        <div className="bg-white min-h-screen">

            {/* 1. Main Product Section */}
            <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 py-8 lg:py-12">

                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-8 uppercase tracking-widest">
                    <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href={`/collections/${product.category.toLowerCase()}`} className="hover:text-neutral-900 transition-colors">{product.category}</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-neutral-900 truncate max-w-[200px]">{product.title}</span>
                </nav>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Left Hand: Image Gallery (Premium 2-column grid on desktop) */}
                    <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.images.map((img, idx) => (
                            <div key={idx} className={`relative bg-neutral-100 rounded-xl overflow-hidden ${idx === 0 ? 'md:col-span-2 aspect-[4/3]' : 'aspect-[3/4]'}`}>
                                <img src={img} alt={`${product.title} view ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    {/* Right Hand: Sticky Product Info */}
                    <div className="w-full lg:w-[40%] flex flex-col lg:sticky lg:top-32 pb-12">

                        {/* Headings */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">{product.title}</h1>
                            <p className="text-2xl font-light text-neutral-900">{product.price}</p>
                        </div>

                        {/* Reviews */}
                        <div className="flex items-center gap-2 mb-8">
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className={`w-4 h-4 ${star <= Math.floor(product.rating) ? 'fill-neutral-900 text-neutral-900' : 'fill-neutral-200 text-neutral-200'}`} />
                                ))}
                            </div>
                            <a href="#reviews" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 underline underline-offset-2">
                                ({product.reviews} reviews)
                            </a>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-neutral-500 leading-relaxed mb-8">
                            {product.description}
                        </p>

                        <hr className="border-neutral-200 mb-8" />

                        {/* Variants - Color */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-bold text-neutral-900">Color</span>
                                <span className="text-sm font-medium text-neutral-500">{selectedColor}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                {product.colors.map(color => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        title={color}
                                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${colorStyles[color]} ${selectedColor === color ? 'ring-2 ring-offset-2 ring-neutral-900 scale-110' : 'hover:scale-110 shadow-sm'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Variants - Size */}
                        <div className="mb-10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-bold text-neutral-900">Size</span>
                                <button className="text-xs font-bold text-neutral-500 hover:text-neutral-900 underline underline-offset-2">Size Guide</button>
                            </div>
                            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6 gap-2">
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-3 text-sm font-bold rounded-lg transition-all border ${selectedSize === size
                                            ? 'border-neutral-900 bg-neutral-900 text-white'
                                            : 'border-neutral-200 bg-white text-neutral-900 hover:border-neutral-400'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            {!selectedSize && <p className="text-red-500 text-xs font-medium mt-2 hidden" id="size-error">Please select a size.</p>}
                        </div>

                        {/* Actions: Quantity & Add to Cart */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex items-center justify-between border border-neutral-200 rounded-lg w-32 bg-neutral-50">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-neutral-500 hover:text-neutral-900 transition-colors"><Minus className="w-4 h-4" /></button>
                                <span className="font-bold text-sm">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="p-3 text-neutral-500 hover:text-neutral-900 transition-colors"><Plus className="w-4 h-4" /></button>
                            </div>
                            <button className="flex-1 py-4 bg-neutral-900 text-white font-bold rounded-lg hover:bg-neutral-800 transition-all shadow-md flex justify-center items-center gap-2">
                                Add to Bag <span className="text-neutral-400 font-normal">| {product.price}</span>
                            </button>
                            <button className="p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors text-neutral-900">
                                <Heart className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Mini Trust Badges */}
                        <div className="bg-neutral-50 rounded-xl p-5 flex flex-col gap-4 mb-8 border border-neutral-100">
                            <div className="flex items-center gap-3 text-sm">
                                <Truck className="w-5 h-5 text-neutral-700" />
                                <div>
                                    <p className="font-bold text-neutral-900">Free Standard Delivery</p>
                                    <p className="text-xs text-neutral-500 mt-0.5">Dispatches within 24 hours.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <RefreshCcw className="w-5 h-5 text-neutral-700" />
                                <div>
                                    <p className="font-bold text-neutral-900">30-Day Free Returns</p>
                                    <p className="text-xs text-neutral-500 mt-0.5">Shop with confidence.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <ShieldCheck className="w-5 h-5 text-neutral-700" />
                                <div>
                                    <p className="font-bold text-neutral-900">Lifetime Guarantee</p>
                                    <p className="text-xs text-neutral-500 mt-0.5">We stand behind our craftsmanship.</p>
                                </div>
                            </div>
                        </div>

                        {/* Details Accordion */}
                        <div className="border-t border-neutral-200">
                            {product.details.map((detail, idx) => (
                                <div key={idx} className="border-b border-neutral-200">
                                    <button
                                        onClick={() => setExpandedDetail(expandedDetail === idx ? null : idx)}
                                        className="w-full flex items-center justify-between py-5 text-left font-bold text-sm text-neutral-900 hover:text-neutral-600 transition-colors"
                                    >
                                        {detail.title}
                                        {expandedDetail === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${expandedDetail === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-sm text-neutral-500 leading-relaxed">{detail.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* 2. You Might Also Like Section */}
            <section className="w-full bg-neutral-50 py-16 lg:py-24 border-t border-neutral-200">
                <div className="mx-auto w-full px-6 sm:px-10 lg:px-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-10">You Might Also Like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                        {RELATED_PRODUCTS.map((relProduct) => (
                            <Link key={relProduct.id} href={`/products/${relProduct.id}`} className="group flex flex-col w-full text-left">
                                <div className="relative w-full aspect-[4/5] bg-neutral-100 mb-4 overflow-hidden rounded-xl">
                                    <img src={relProduct.img} alt={relProduct.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button type="button" className="w-full py-2.5 bg-white/95 backdrop-blur-sm text-neutral-900 text-sm font-bold rounded-lg shadow-sm hover:bg-neutral-900 hover:text-white transition-colors">
                                            Quick Add
                                        </button>
                                    </div>
                                </div>
                                <h3 className="text-sm font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors truncate">{relProduct.title}</h3>
                                <span className="text-sm font-medium text-neutral-500 mt-1">{relProduct.price}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
