'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { Filter, X, ChevronDown, ChevronRight, SlidersHorizontal } from 'lucide-react';
import type { ReactElement } from 'react';

// --- Mock Data ---
const PRODUCTS = [
    { id: '1', title: 'The Essential White Tee', price: '$35.00', category: 'Apparel', color: 'White', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop' },
    { id: '2', title: 'Classic Leather Watch', price: '$120.00', category: 'Accessories', color: 'Brown', img: 'https://images.unsplash.com/photo-1524592090614-000c6ed9611f?q=80&w=500&auto=format&fit=crop' },
    { id: '3', title: 'Minimalist Canvas Tote', price: '$45.00', category: 'Accessories', color: 'Beige', img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=500&auto=format&fit=crop' },
    { id: '4', title: 'Premium Wool Beanie', price: '$28.00', category: 'Apparel', color: 'Grey', img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=500&auto=format&fit=crop' },
    { id: '5', title: 'Everyday Oxford Shirt', price: '$65.00', category: 'Apparel', color: 'Blue', img: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=500&auto=format&fit=crop' },
    { id: '6', title: 'Signature Denim Jacket', price: '$95.00', category: 'Apparel', color: 'Blue', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500&auto=format&fit=crop' },
    { id: '7', title: 'Sleek Aviator Sunglasses', price: '$85.00', category: 'Accessories', color: 'Black', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500&auto=format&fit=crop' },
    { id: '8', title: 'Handcrafted Leather Belt', price: '$50.00', category: 'Accessories', color: 'Brown', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500&auto=format&fit=crop' },
    { id: '9', title: 'Urban Edge Sneakers', price: '$110.00', category: 'Footwear', color: 'White', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500&auto=format&fit=crop' },
    { id: '10', title: 'Weekend Duffle Bag', price: '$150.00', category: 'Travel', color: 'Green', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500&auto=format&fit=crop' },
    { id: '11', title: 'Cashmere Blend Scarf', price: '$75.00', category: 'Accessories', color: 'Grey', img: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=500&auto=format&fit=crop' },
    { id: '12', title: 'Tailored Chino Pants', price: '$80.00', category: 'Apparel', color: 'Khaki', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=500&auto=format&fit=crop' },
];

const CATEGORIES = ['All', 'Apparel', 'Accessories', 'Footwear', 'Travel'];
const COLORS = ['Black', 'White', 'Blue', 'Brown', 'Grey', 'Beige', 'Green', 'Khaki'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'One Size'];

export default function CollectionPage({ params }: { params: Promise<{ slug: string }> }): ReactElement {
    const unwrappedParams = use(params);
    const slug = unwrappedParams.slug;
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    // Format the slug for display if needed
    const collectionName = slug === 'all' ? 'All Products' : slug.charAt(0).toUpperCase() + slug.slice(1);

    // Filter Logic
    const filteredProducts = PRODUCTS.filter((product) => {
        // Category Filter
        if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
        // Color Filter (if any colors selected)
        if (selectedColors.length > 0 && !selectedColors.includes(product.color)) return false;
        // Size filter is visual only for this mock
        return true;
    });

    const toggleColor = (color: string) => {
        setSelectedColors(prev =>
            prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
        );
    };

    const toggleSize = (size: string) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    const clearFilters = () => {
        setSelectedCategory('All');
        setSelectedColors([]);
        setSelectedSizes([]);
    };

    // The Sidebar Filter Component
    const FilterSidebar = () => (
        <div className="flex flex-col gap-8">
            {/* Categories */}
            <div>
                <h3 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Categories</h3>
                <ul className="space-y-3">
                    {CATEGORIES.map((cat) => (
                        <li key={cat}>
                            <button
                                onClick={() => setSelectedCategory(cat)}
                                className={`text-sm tracking-wide transition-colors hover:text-neutral-900 ${selectedCategory === cat ? 'text-neutral-900 font-bold' : 'text-neutral-500'}`}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Colors */}
            <div className="border-t border-neutral-200 pt-8">
                <h3 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Colors</h3>
                <div className="grid grid-cols-5 gap-3">
                    {COLORS.map((color) => {
                        // Basic styling mapping for color swatches
                        const colorStyles: Record<string, string> = {
                            Black: 'bg-black', White: 'bg-white border border-neutral-300',
                            Blue: 'bg-blue-600', Brown: 'bg-[#8B4513]', Grey: 'bg-neutral-500',
                            Beige: 'bg-[#F5F5DC] border border-neutral-200', Green: 'bg-green-700', Khaki: 'bg-[#C3B091]'
                        };
                        const isSelected = selectedColors.includes(color);
                        return (
                            <button
                                key={color}
                                onClick={() => toggleColor(color)}
                                title={color}
                                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${colorStyles[color]} ${isSelected ? 'ring-2 ring-offset-2 ring-neutral-900 scale-110' : 'hover:scale-110 shadow-sm'}`}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Sizes */}
            <div className="border-t border-neutral-200 pt-8">
                <h3 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Sizes</h3>
                <div className="flex flex-wrap gap-2">
                    {SIZES.map((size) => {
                        const isSelected = selectedSizes.includes(size);
                        return (
                            <button
                                key={size}
                                onClick={() => toggleSize(size)}
                                className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-all ${isSelected ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-900'
                                    }`}
                            >
                                {size}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-white min-h-screen">

            {/* Page Header */}
            <div className="w-full bg-neutral-50 border-b border-neutral-200">
                <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
                    <nav className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-4 uppercase tracking-widest">
                        <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/collections/all" className="hover:text-neutral-900 transition-colors">Collections</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-neutral-900">{collectionName}</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">{collectionName}</h1>
                    <p className="mt-4 text-neutral-500 max-w-xl text-base leading-relaxed">
                        Explore our curated selection of premium products. Designed with precision, crafted for longevity, and tailored for your everyday excellence.
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 py-12 flex flex-col lg:flex-row gap-12">

                {/* Desktop Sidebar */}
                <div className="hidden lg:block w-64 flex-shrink-0">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
                        <span className="font-bold text-neutral-900 flex items-center gap-2"><Filter className="w-4 h-4" /> Filters</span>
                        {(selectedColors.length > 0 || selectedSizes.length > 0 || selectedCategory !== 'All') && (
                            <button onClick={clearFilters} className="text-xs font-bold text-neutral-500 hover:text-neutral-900 underline underline-offset-2">Clear all</button>
                        )}
                    </div>
                    <FilterSidebar />
                </div>

                {/* Product Grid Area */}
                <div className="flex-1">
                    {/* Toolbar (Mobile Filters Toggle & Sorting) */}
                    <div className="flex items-center justify-between lg:justify-end mb-8">
                        <button
                            className="lg:hidden flex items-center gap-2 font-bold text-sm bg-neutral-100 px-4 py-2 rounded-lg text-neutral-900 hover:bg-neutral-200 transition-colors"
                            onClick={() => setIsMobileFiltersOpen(true)}
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            Filter & Sort
                        </button>

                        <div className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                            <span className="text-neutral-500 hidden sm:inline">{filteredProducts.length} Products</span>
                            <div className="flex items-center gap-1 cursor-pointer hover:bg-neutral-50 px-3 py-2 rounded-lg transition-colors ml-4 border border-neutral-200">
                                Sort by: <span className="text-neutral-500">Featured</span> <ChevronDown className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                            {filteredProducts.map((product) => (
                                <Link key={product.id} href={`/products/${product.id}`} className="group flex flex-col w-full text-left">
                                    <div className="relative w-full aspect-[4/5] bg-neutral-100 mb-4 overflow-hidden rounded-xl">
                                        <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button type="button" className="w-full py-2.5 bg-white/95 backdrop-blur-sm text-neutral-900 text-sm font-bold rounded-lg shadow-sm hover:bg-neutral-900 hover:text-white transition-colors">
                                                Quick Add +
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="text-sm font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors truncate">{product.title}</h3>
                                    <div className="flex items-center justify-between mt-1">
                                        <span className="text-sm font-medium text-neutral-500">{product.price}</span>
                                        <span className="w-3 h-3 rounded-full border border-neutral-200 shadow-sm" style={{ backgroundColor: product.color.toLowerCase() === 'khaki' ? '#C3B091' : product.color.toLowerCase() === 'beige' ? '#F5F5DC' : product.color }} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="w-full py-32 flex flex-col items-center justify-center text-center bg-neutral-50 rounded-2xl border border-dashed border-neutral-300">
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">No products found</h3>
                            <p className="text-neutral-500 max-w-sm">We couldn't find anything matching your current filters. Try changing your selections or clear them to see all items.</p>
                            <button onClick={clearFilters} className="mt-6 px-6 py-3 bg-neutral-900 text-white font-bold text-sm rounded-lg hover:bg-neutral-800 transition-colors">
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>

            </div>

            {/* Mobile Filters Slide-Over */}
            {isMobileFiltersOpen && (
                <div className="fixed inset-0 z-50 flex lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsMobileFiltersOpen(false)}
                    />

                    {/* Drawer */}
                    <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-6 pb-24 shadow-2xl z-10 animate-in slide-in-from-right">
                        <div className="flex items-center justify-between px-6 mb-6">
                            <h2 className="text-lg font-extrabold text-neutral-900">Filters</h2>
                            <button
                                type="button"
                                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-neutral-400 hover:bg-neutral-50 hover:text-neutral-500"
                                onClick={() => setIsMobileFiltersOpen(false)}
                            >
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="px-6">
                            <FilterSidebar />
                        </div>

                        {/* Mobile Sticky Footer */}
                        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-neutral-200 flex items-center justify-between gap-4">
                            <button onClick={clearFilters} className="px-6 py-3 font-bold text-sm text-neutral-900 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors">
                                Clear All
                            </button>
                            <button onClick={() => setIsMobileFiltersOpen(false)} className="flex-1 px-6 py-3 bg-neutral-900 text-white font-bold text-sm rounded-xl hover:bg-neutral-800 transition-colors text-center shadow-lg">
                                Show {filteredProducts.length} Items
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
