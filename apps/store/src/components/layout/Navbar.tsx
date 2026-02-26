import Link from 'next/link';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Left Section (Mobile Menu & Search) */}
                <div className="flex flex-1 items-center gap-4 md:hidden">
                    <button className="text-neutral-500 hover:text-black transition-colors">
                        <Menu className="h-5 w-5" />
                    </button>
                    <button className="text-neutral-500 hover:text-black transition-colors">
                        <Search className="h-5 w-5" />
                    </button>
                </div>

                {/* Center Section (Logo) */}
                <div className="flex justify-center md:flex-1 md:justify-start">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-black">
                        MASTER STORE
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex flex-[2] items-center justify-center space-x-8">
                    <Link href="/collections/all" className="text-sm font-medium text-neutral-500 hover:text-black transition-colors">
                        Shop
                    </Link>
                    <Link href="/collections/new" className="text-sm font-medium text-neutral-500 hover:text-black transition-colors">
                        New Arrivals
                    </Link>
                    <Link href="/collections/sale" className="text-sm font-medium text-neutral-500 hover:text-black transition-colors">
                        Sale
                    </Link>
                </div>

                {/* Right Section (Icons) */}
                <div className="flex flex-1 items-center justify-end space-x-6">
                    <button className="hidden md:block text-neutral-500 hover:text-black transition-colors">
                        <Search className="h-5 w-5" />
                    </button>
                    <Link href="/account" className="text-neutral-500 hover:text-black transition-colors">
                        <User className="h-5 w-5" />
                    </Link>
                    <Link href="/cart" className="relative text-neutral-500 hover:text-black transition-colors">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                            0
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
