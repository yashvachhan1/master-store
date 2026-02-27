/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Truck, ChevronLeft, CreditCard, Lock, ChevronRight, CheckCircle2 } from 'lucide-react';

const MOCK_CART = [
    {
        id: 1,
        title: "Classic Cotton T-Shirt",
        price: 35.00,
        quantity: 2,
        color: "White",
        size: "M",
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Essential Denim Jacket",
        price: 120.00,
        quantity: 1,
        color: "Indigo",
        size: "L",
        img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop"
    }
];

export default function CheckoutPage() {
    const [shippingMethod, setShippingMethod] = useState('standard');
    const [paymentMethod, setPaymentMethod] = useState('credit_card');

    const subtotal = MOCK_CART.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shippingCost = shippingMethod === 'express' ? 15.00 : (subtotal > 100 ? 0 : 10.00);
    const taxes = subtotal * 0.08; // 8% tax rate
    const total = subtotal + shippingCost + taxes;

    return (
        <div className="bg-neutral-50 min-h-screen pb-20">
            {/* Super Simple Checkout Header */}
            <header className="bg-white border-b border-neutral-200 sticky top-0 z-40">
                <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
                    <Link href="/cart" className="flex items-center text-sm font-medium text-neutral-500 hover:text-black transition-colors">
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Return to Bag
                    </Link>
                    <div className="font-extrabold tracking-widest text-xl uppercase">Store.</div>
                    <div className="flex items-center text-sm font-medium text-neutral-500">
                        <Lock className="w-4 h-4 mr-1.5" />
                        Secure Checkout
                    </div>
                </div>
            </header>

            <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 mt-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Left Column: Checkout Forms */}
                    <div className="w-full lg:w-[55%] xl:w-[60%] space-y-10">

                        {/* 1. Contact Info */}
                        <section>
                            <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">1</span>
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                                    <input type="email" placeholder="you@example.com" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="newsletter" className="w-4 h-4 text-black border-neutral-300 rounded focus:ring-black cursor-pointer" />
                                    <label htmlFor="newsletter" className="text-sm text-neutral-600 cursor-pointer">Email me with news and offers</label>
                                </div>
                            </div>
                        </section>

                        {/* 2. Shipping Address */}
                        <section>
                            <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">2</span>
                                Shipping Address
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">First Name</label>
                                    <input type="text" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Last Name</label>
                                    <input type="text" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Address</label>
                                    <input type="text" placeholder="Street address or P.O. Box" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Apartment, suite, etc. (optional)</label>
                                    <input type="text" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">City</label>
                                    <input type="text" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">State</label>
                                        <select className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow bg-white pb-[14px]">
                                            <option>Select</option>
                                            <option>CA</option>
                                            <option>NY</option>
                                            <option>TX</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">ZIP Code</label>
                                        <input type="text" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
                                    <input type="tel" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
                                </div>
                            </div>
                        </section>

                        {/* 3. Shipping Method */}
                        <section>
                            <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">3</span>
                                Shipping Method
                            </h2>
                            <div className="space-y-3">
                                <label className={`block border rounded-xl p-4 cursor-pointer transition-all ${shippingMethod === 'standard' ? 'border-black ring-1 ring-black bg-neutral-50' : 'border-neutral-200 hover:border-neutral-300 bg-white'}`}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <input type="radio" name="shipping" checked={shippingMethod === 'standard'} onChange={() => setShippingMethod('standard')} className="w-4 h-4 text-black focus:ring-black cursor-pointer" />
                                            <div>
                                                <div className="font-bold text-sm text-neutral-900">Standard Shipping</div>
                                                <div className="text-xs text-neutral-500 mt-0.5">3-5 business days</div>
                                            </div>
                                        </div>
                                        <div className="font-bold text-sm text-neutral-900">{subtotal > 100 ? 'Free' : '$10.00'}</div>
                                    </div>
                                </label>

                                <label className={`block border rounded-xl p-4 cursor-pointer transition-all ${shippingMethod === 'express' ? 'border-black ring-1 ring-black bg-neutral-50' : 'border-neutral-200 hover:border-neutral-300 bg-white'}`}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <input type="radio" name="shipping" checked={shippingMethod === 'express'} onChange={() => setShippingMethod('express')} className="w-4 h-4 text-black focus:ring-black cursor-pointer" />
                                            <div>
                                                <div className="font-bold text-sm text-neutral-900">Express Shipping</div>
                                                <div className="text-xs text-neutral-500 mt-0.5">1-2 business days</div>
                                            </div>
                                        </div>
                                        <div className="font-bold text-sm text-neutral-900">$15.00</div>
                                    </div>
                                </label>
                            </div>
                        </section>

                        {/* 4. Payment */}
                        <section>
                            <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">4</span>
                                Payment
                            </h2>
                            <p className="text-sm text-neutral-500 mb-4">All transactions are secure and encrypted.</p>

                            <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
                                {/* Credit Card Option */}
                                <div className={`p-4 border-b border-neutral-200 transition-colors ${paymentMethod === 'credit_card' ? 'bg-neutral-50' : ''}`}>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input type="radio" name="payment" checked={paymentMethod === 'credit_card'} onChange={() => setPaymentMethod('credit_card')} className="w-4 h-4 text-black focus:ring-black cursor-pointer mt-0.5" />
                                        <div className="flex-1 flex items-center justify-between">
                                            <span className="font-bold text-sm text-neutral-900">Credit Card</span>
                                            <div className="flex gap-1">
                                                <div className="h-6 w-10 bg-neutral-200 rounded border border-neutral-300 flex items-center justify-center text-[10px] font-bold text-neutral-500">VISA</div>
                                                <div className="h-6 w-10 bg-neutral-200 rounded border border-neutral-300 flex items-center justify-center text-[10px] font-bold text-neutral-500">MC</div>
                                                <div className="h-6 w-10 bg-neutral-200 rounded border border-neutral-300 flex items-center justify-center text-[10px] font-bold text-neutral-500">AMEX</div>
                                            </div>
                                        </div>
                                    </label>

                                    {paymentMethod === 'credit_card' && (
                                        <div className="mt-4 space-y-4 pl-7 pb-2 animate-in fade-in slide-in-from-top-2 duration-300">
                                            <div>
                                                <input type="text" placeholder="Card number" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Name on card" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <input type="text" placeholder="Expiration date (MM/YY)" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
                                                <input type="text" placeholder="Security code (CVV)" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* PayPal Option */}
                                <div className={`p-4 transition-colors ${paymentMethod === 'paypal' ? 'bg-neutral-50' : 'bg-white'}`}>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input type="radio" name="payment" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="w-4 h-4 text-black focus:ring-black cursor-pointer" />
                                        <div className="flex-1 flex items-center justify-between">
                                            <span className="font-bold text-sm text-neutral-900">PayPal</span>
                                            <div className="h-6 w-14 bg-[#FFC439] rounded border border-[#F5B82E] flex items-center justify-center text-[10px] font-bold italic text-[#003087]">PayPal</div>
                                        </div>
                                    </label>
                                    {paymentMethod === 'paypal' && (
                                        <div className="mt-4 pl-7 text-sm text-neutral-600 animate-in fade-in slide-in-from-top-2 duration-300">
                                            After clicking "Complete Order", you will be redirected to PayPal to complete your purchase securely.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Call to Action Mobile (Visible only on mobile below summary) */}
                        <div className="block lg:hidden mt-8">
                            <button className="w-full bg-black text-white hover:bg-neutral-800 transition-colors h-14 rounded-full font-bold text-base flex items-center justify-center group shadow-xl shadow-black/10">
                                <Lock className="w-4 h-4 mr-2 text-neutral-300 group-hover:text-white transition-colors" />
                                Complete Order
                            </button>
                        </div>

                    </div>

                    {/* Right Column: Sticky Order Summary */}
                    <div className="w-full lg:w-[45%] xl:w-[40%] lg:sticky lg:top-28">
                        <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
                            <h2 className="text-xl font-bold text-neutral-900 mb-6">Order Summary</h2>

                            {/* Items */}
                            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                                {MOCK_CART.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-16 h-20 rounded-lg bg-neutral-100 overflow-hidden flex-shrink-0 border border-neutral-200 relative">
                                            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                            <div className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-[10px] font-bold z-10 border-2 border-white">
                                                {item.quantity}
                                            </div>
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center">
                                            <h4 className="text-sm font-bold text-neutral-900">{item.title}</h4>
                                            <p className="text-xs text-neutral-500 mt-1">{item.color} / {item.size}</p>
                                        </div>
                                        <div className="text-sm font-bold text-neutral-900 flex items-center">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Discount Code */}
                            <div className="mb-6 pt-6 border-t border-neutral-100 flex gap-2">
                                <input type="text" placeholder="Discount code or gift card" className="flex-1 border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-shadow" />
                                <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold px-6 rounded-lg text-sm transition-colors border border-neutral-200">
                                    Apply
                                </button>
                            </div>

                            {/* Calculations */}
                            <div className="space-y-3 pt-6 border-t border-neutral-100 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-600">Subtotal</span>
                                    <span className="font-medium text-neutral-900">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-600">Shipping</span>
                                    <span className="font-medium text-neutral-900">{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-600">Estimated Tax</span>
                                    <span className="font-medium text-neutral-900">${taxes.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between items-center pt-6 border-t border-neutral-200 mb-8">
                                <span className="text-base font-bold text-neutral-900">Total</span>
                                <div className="text-right">
                                    <span className="text-xs text-neutral-500 font-normal mr-2">USD</span>
                                    <span className="text-2xl font-extrabold text-neutral-900">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Call to Action Desktop */}
                            <div className="hidden lg:block">
                                <button className="w-full bg-black text-white hover:bg-neutral-800 transition-colors h-14 rounded-full font-bold text-base flex items-center justify-center group shadow-xl shadow-black/10">
                                    <Lock className="w-4 h-4 mr-2 text-neutral-300 group-hover:text-white transition-colors" />
                                    Complete Order
                                </button>
                                <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-neutral-500 font-medium">
                                    <ShieldCheck className="w-4 h-4 text-green-600" />
                                    Secure & Encrypted Checkout
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
