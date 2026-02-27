import Link from 'next/link';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import type { ReactElement } from 'react';

export function Navbar(): ReactElement {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-xl transition-all duration-300">
            <div className="mx-auto w-full flex h-20 items-center justify-between px-6 sm:px-10 lg:px-16">

                {/* Left Section (Mobile Menu & Search) */}
                <div className="flex flex-1 items-center gap-6 md:hidden">
                    <button type="button" aria-label="Open menu" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                        <Menu className="h-6 w-6" />
                    </button>
                    <button type="button" aria-label="Search" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                        <Search className="h-6 w-6" />
                    </button>
                </div>

                {/* Center Section (Logo) */}
                <div className="flex justify-center md:flex-1 md:justify-start">
                    <Link href="/" className="text-2xl font-black tracking-widest text-neutral-900 uppercase select-none hover:opacity-80 transition-opacity">
                        MASTER STORE
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex flex-[2] items-center justify-center space-x-12">
                    {['Shop', 'New Arrivals', 'Collections', 'Editorial'].map((item) => (
                        <Link
                            key={item}
                            href={`/collections/${item.toLowerCase().replace(' ', '-')}`}
                            className="text-sm font-semibold tracking-wide text-neutral-500 uppercase hover:text-neutral-900 transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-neutral-900 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Right Section (Icons) */}
                <div className="flex flex-1 items-center justify-end space-x-8">
                    <button type="button" aria-label="Search" className="hidden md:block text-neutral-500 hover:text-neutral-900 transition-colors">
                        <Search className="h-5 w-5" />
                    </button>
                    <Link href="/account" aria-label="User Account" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                        <User className="h-5 w-5" />
                    </Link>
                    <Link href="/cart" aria-label="Shopping Cart" className="relative text-neutral-500 hover:text-neutral-900 transition-colors group">
                        <ShoppingBag className="h-5 w-5 transition-transform group-hover:scale-110" />
                        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white leading-none">
                            0
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
