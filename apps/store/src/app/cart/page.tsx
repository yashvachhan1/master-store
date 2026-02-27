'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Minus, Plus, Trash2, ArrowRight, ShieldCheck, Truck, Lock } from 'lucide-react';
import type { ReactElement } from 'react';

// --- Mock Cart Data ---
const INITIAL_CART = [
    {
        id: 'cart_1',
        productId: '1',
        title: 'The Essential White Tee',
        price: 35.00,
        color: 'White',
        size: 'M',
        quantity: 2,
        img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=300&auto=format&fit=crop'
    },
    {
        id: 'cart_2',
        productId: '2',
        title: 'Classic Leather Watch',
        price: 120.00,
        color: 'Brown',
        size: 'One Size',
        quantity: 1,
        img: 'https://images.unsplash.com/photo-1524592090614-000c6ed9611f?q=80&w=300&auto=format&fit=crop'
    }
];

export default function CartPage(): ReactElement {
    const [cartItems, setCartItems] = useState(INITIAL_CART);

    const updateQuantity = (id: string, newQuantity: number) => {
        if (newQuantity < 1) return;
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeItem = (id: string) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Calculations
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 15; // Free shipping over $100
    const total = subtotal + shipping;

    if (cartItems.length === 0) {
        return (
            <div className="bg-white min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 text-center">
                <div className="w-24 h-24 bg-neutral-50 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </div>
                <h1 className="text-3xl font-extrabold text-neutral-900 mb-4">Your bag is empty</h1>
                <p className="text-neutral-500 max-w-sm mb-8">Sign in to see if you have any saved items, or continue shopping.</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link href="/collections/all" className="px-8 py-4 bg-neutral-900 text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors shadow-lg">
                        Continue Shopping
                    </Link>
                    <Link href="/login" className="px-8 py-4 bg-white text-neutral-900 font-bold rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
                        Sign In
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-neutral-50 min-h-screen py-12 lg:py-20">
            <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">

                <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mb-2">Shopping Bag</h1>
                <p className="text-neutral-500 font-medium mb-10">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your bag</p>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Bag Items List */}
                    <div className="w-full lg:w-[65%] flex flex-col gap-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6 sm:p-8">
                            <div className="flex flex-col gap-8">
                                {cartItems.map((item, index) => (
                                    <div key={item.id}>
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            {/* Item Image */}
                                            <Link href={`/products/${item.productId}`} className="w-full sm:w-32 h-40 bg-neutral-100 rounded-xl overflow-hidden flex-shrink-0">
                                                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
                                            </Link>

                                            {/* Item Details */}
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div className="flex justify-between items-start gap-4">
                                                    <div>
                                                        <Link href={`/products/${item.productId}`} className="text-lg font-bold text-neutral-900 hover:text-neutral-600 transition-colors">
                                                            {item.title}
                                                        </Link>
                                                        <p className="text-sm font-medium text-neutral-500 mt-1">
                                                            Color: {item.color} <span className="mx-2 text-neutral-300">|</span> Size: {item.size}
                                                        </p>
                                                    </div>
                                                    <p className="text-lg font-bold text-neutral-900 text-right">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </p>
                                                </div>

                                                {/* Actions / Quantity */}
                                                <div className="flex items-center justify-between mt-6">
                                                    <div className="flex items-center bg-neutral-50 border border-neutral-200 rounded-lg p-1">
                                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors">
                                                            <Minus className="w-4 h-4" />
                                                        </button>
                                                        <span className="w-8 text-center font-bold text-sm text-neutral-900">{item.quantity}</span>
                                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors">
                                                            <Plus className="w-4 h-4" />
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-sm font-bold text-neutral-400 hover:text-red-500 transition-colors flex items-center gap-1.5"
                                                    >
                                                        <Trash2 className="w-4 h-4" /> <span className="hidden sm:inline">Remove</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Divider if not last item */}
                                        {index !== cartItems.length - 1 && <hr className="border-neutral-100 mt-8" />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Trust/Info Badges below cart */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-5 rounded-xl border border-neutral-100 flex items-start gap-4 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                                    <Truck className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-neutral-900 mb-1">Free Shipping Qualified</h4>
                                    <p className="text-xs text-neutral-500">Your order qualifies for free standard shipping. Delivers in 3-5 days.</p>
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-neutral-100 flex items-start gap-4 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-neutral-900 mb-1">Secure Checkout</h4>
                                    <p className="text-xs text-neutral-500">Your payment information is processed securely with 256-bit encryption.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary Right Rail */}
                    <div className="w-full lg:w-[35%] lg:sticky lg:top-32">
                        <div className="bg-neutral-900 rounded-2xl shadow-xl p-8 text-white">
                            <h2 className="text-xl font-extrabold mb-6">Order Summary</h2>

                            <div className="flex flex-col gap-4 text-sm font-medium mb-6">
                                <div className="flex justify-between">
                                    <span className="text-neutral-400">Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-400">Shipping</span>
                                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                                </div>
                                <div className="flex justify-between items-center text-neutral-400">
                                    <span>Taxes</span>
                                    <span className="text-xs">Calculated at checkout</span>
                                </div>
                            </div>

                            <hr className="border-neutral-700 mb-6" />

                            <div className="flex justify-between items-end mb-8">
                                <span className="text-lg font-bold">Total</span>
                                <span className="text-3xl font-black">${total.toFixed(2)}</span>
                            </div>

                            <button className="w-full py-4 bg-white text-neutral-900 font-bold rounded-xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 relative group overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    <Lock className="w-4 h-4" /> Secure Checkout
                                </span>
                                <div className="absolute inset-0 bg-neutral-100 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                            </button>

                            {/* Payment Icons Mock */}
                            <div className="mt-6 flex items-center justify-center gap-2 opacity-60">
                                <div className="h-6 w-10 bg-white/20 rounded"></div>
                                <div className="h-6 w-10 bg-white/20 rounded"></div>
                                <div className="h-6 w-10 bg-white/20 rounded"></div>
                                <div className="h-6 w-10 bg-white/20 rounded"></div>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <Link href="/collections/all" className="text-sm font-bold text-neutral-500 flex items-center justify-center hover:text-neutral-900 transition-colors">
                                <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Continue Shopping
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
