/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Link from 'next/link';
import type { ReactElement } from 'react';
import { ArrowRight, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function Home(): ReactElement {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">

      {/* 1. Sleek Hero Section */}
      <section className="relative w-full bg-neutral-50 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-100 to-neutral-200 blur-3xl" />
        </div>

        <div className="mx-auto w-full px-6 sm:px-10 lg:px-16 pt-8 pb-12 lg:pt-12 lg:pb-16 flex flex-col lg:flex-row items-center lg:items-end gap-10 relative z-10">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pb-4">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-800 shadow-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              New Collection 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.15] mb-4">
              Designed For The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-neutral-400">Modern Professional.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-500 leading-relaxed mb-8 max-w-lg">
              Premium quality essentials curated with purpose and built for your everyday life. Elevate your standard with our hand-picked selections.
            </p>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
              <Link
                href="/collections/all"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-all shadow-md"
              >
                Shop Now
              </Link>
              <Link
                href="/collections/trending"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-neutral-900 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-all"
              >
                View Trending
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center gap-3 text-xs font-medium text-neutral-500">
              <div className="flex -space-x-1.5">
                {[1, 2, 3].map((i) => (
                  <img key={i} className="w-6 h-6 rounded-full border border-white" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" />
                ))}
              </div>
              <p>Trusted by <span className="text-neutral-900 font-bold">10k+</span> professionals</p>
            </div>
          </div>

          {/* Right Content / Image Grid */}
          <div className="w-full lg:w-1/2 relative h-full flex items-end">
            <div className="grid grid-cols-2 gap-3 w-full items-end pb-2">
              <div className="flex flex-col gap-3">
                <img
                  src="https://images.unsplash.com/photo-1593998066526-65fcab3021a2?q=80&w=600&auto=format&fit=crop"
                  alt="Style"
                  className="rounded-2xl object-cover h-[280px] w-full shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-3">
                <img
                  src="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop"
                  alt="Detail"
                  className="rounded-2xl object-cover h-[180px] w-full shadow-lg object-bottom"
                />
                <div className="bg-neutral-900 rounded-2xl p-5 text-white shadow-xl h-[140px] flex flex-col justify-between">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Limited Offer</h3>
                  <div>
                    <p className="text-2xl font-black mb-1">Up to 40%</p>
                    <Link href="/sale" className="text-xs border-b border-white pb-0.5 font-semibold hover:text-neutral-300">Shop Sale <ArrowRight className="inline w-3 h-3 ml-1" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Premium Features Strip */}
      <section className="w-full border-y border-neutral-100 bg-white">
        <div className="mx-auto w-full px-6 sm:px-10 lg:px-16 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6 lg:gap-8">
            {[
              { icon: ShieldCheck, title: "Secure Checkout", desc: "100% Protected" },
              { icon: Truck, title: "Free Shipping", desc: "Orders over $100" },
              { icon: RotateCcw, title: "Easy Returns", desc: "30-Day Policy" },
              { icon: Star, title: "Top Rated", desc: "4.9/5 Average" }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 flex-1 min-w-[180px]">
                <feature.icon className="w-6 h-6 text-neutral-400" />
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">{feature.title}</h4>
                  <p className="text-xs text-neutral-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Real Product Catalog */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto w-full px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Featured Products</h2>
              <p className="mt-2 text-neutral-500 text-sm">Professional grade items for everyday excellence.</p>
            </div>
            <Link href="/collections/all" className="mt-4 md:mt-0 font-semibold text-sm text-neutral-900 hover:text-neutral-600 transition-colors flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {[
              { id: '1', title: 'The Essential White Tee', price: '$35.00', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop' },
              { id: '2', title: 'Classic Leather Watch', price: '$120.00', img: 'https://images.unsplash.com/photo-1524592090614-000c6ed9611f?q=80&w=500&auto=format&fit=crop' },
              { id: '3', title: 'Minimalist Canvas Tote', price: '$45.00', img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=500&auto=format&fit=crop' },
              { id: '4', title: 'Premium Wool Beanie', price: '$28.00', img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=500&auto=format&fit=crop' },
              { id: '5', title: 'Everyday Oxford Shirt', price: '$65.00', img: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=500&auto=format&fit=crop' },
              { id: '6', title: 'Signature Denim Jacket', price: '$95.00', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500&auto=format&fit=crop' },
              { id: '7', title: 'Sleek Aviator Sunglasses', price: '$85.00', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500&auto=format&fit=crop' },
              { id: '8', title: 'Handcrafted Leather Belt', price: '$50.00', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500&auto=format&fit=crop' }
            ].map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group flex flex-col w-full text-left">
                <div className="relative w-full aspect-[4/5] bg-neutral-100 mb-4 overflow-hidden rounded-xl">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  {/* Hover Overlay */}
                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button type="button" className="w-full py-2.5 bg-white/95 backdrop-blur-sm text-neutral-900 text-sm font-semibold rounded-lg shadow-sm hover:bg-neutral-900 hover:text-white transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>
                <h3 className="text-sm font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors truncate">{product.title}</h3>
                <span className="text-sm font-medium text-neutral-500">{product.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Brand Story Split Section */}
      <section className="w-full bg-neutral-900 text-white overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row items-center">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative h-[40vh] lg:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
              alt="Craftsmanship"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-70"
            />
          </div>
          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-20">
            <div className="max-w-md">
              <span className="text-neutral-400 font-bold tracking-widest uppercase text-xs mb-3 block">Our Commitment</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">Engineered for Perfection.</h2>
              <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                Every material is precision-selected. Every stitch is meticulously placed. We do not just create products; we engineer experiences that stand the ultimate test of time. Quality is our absolute obsession.
              </p>
              <Link href="/about" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-black bg-white rounded-lg hover:bg-neutral-200 transition-all">
                Discover Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Clean Categories */}
      <section className="w-full bg-neutral-50 py-16 lg:py-24 border-y border-neutral-200">
        <div className="mx-auto w-full px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-2">Shop by Category</h2>
            <p className="text-sm text-neutral-500">Find exactly what you are looking for.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[
              { title: 'Apparel', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop' },
              { title: 'Footwear', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=600&auto=format&fit=crop' },
              { title: 'Accessories', img: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=600&auto=format&fit=crop' },
              { title: 'Travel', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop' }
            ].map((cat, i) => (
              <Link key={i} href={`/collections/${cat.title.toLowerCase()}`} className="group block w-full relative h-[250px] lg:h-[350px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/40 transition-colors duration-500 z-10" />
                <img src={cat.img} alt={cat.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <span className="bg-white/95 backdrop-blur-sm px-6 py-2.5 rounded-full text-sm font-bold text-neutral-900 shadow-sm border border-neutral-100 transition-transform group-hover:scale-105">
                    {cat.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Professional Newsletter & Value Proposition */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-2xl px-6 sm:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Join The Master Club</h2>
          <p className="text-sm text-neutral-500 mb-8 max-w-md mx-auto">Subscribe for exclusive early access to drops, archive sales, and sophisticated style insights.</p>

          <form className="flex flex-col sm:flex-row gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address..."
              required
              className="flex-1 px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 text-sm transition-all"
            />
            <button type="submit" className="px-6 py-3 bg-neutral-900 text-white text-sm font-bold rounded-lg hover:bg-neutral-800 transition-colors shadow-sm whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[11px] text-neutral-400 font-medium mt-4">By subscribing you agree to our Terms &amp; Privacy Policy.</p>
        </div>
      </section>

    </div>
  );
}
