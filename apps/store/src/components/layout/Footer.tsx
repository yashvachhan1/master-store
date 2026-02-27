import Link from 'next/link';
import type { ReactElement } from 'react';

export function Footer(): ReactElement {
    return (
        <footer className="w-full bg-neutral-50 border-t border-neutral-200 pt-24 pb-12">
            <div className="mx-auto w-full px-6 sm:px-10 lg:px-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-12">

                    {/* Brand Info */}
                    <div className="space-y-8 xl:col-span-1">
                        <span className="text-3xl font-black tracking-widest text-neutral-900 uppercase select-none">
                            MASTER STORE
                        </span>
                        <p className="text-sm text-neutral-500 leading-relaxed max-w-sm font-light">
                            Premium quality essentials designed with absolute purpose and built for the exceptional everyday life. Elevate your standard.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-6">Explore</h3>
                                <ul role="list" className="space-y-4">
                                    {['All Masterpieces', 'New Arrivals', 'The Archives', 'Exclusive Range'].map((item) => (
                                        <li key={item}>
                                            <Link href="#" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-6">Maison</h3>
                                <ul role="list" className="space-y-4">
                                    {['Our Story', 'Atelier', 'Careers', 'Press & Media'].map((item) => (
                                        <li key={item}>
                                            <Link href="#" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-6">Concierge</h3>
                                <ul role="list" className="space-y-4">
                                    {['Client Services', 'Shipping & Delivery', 'Returns', 'Contact Us'].map((item) => (
                                        <li key={item}>
                                            <Link href="#" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="mt-20 border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-neutral-500 font-medium">
                        &copy; {new Date().getFullYear()} Master Store, Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
