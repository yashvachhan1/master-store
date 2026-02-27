'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Package, Settings, LogOut, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

const NAV_ITEMS = [
    { href: '/account', label: 'Overview', icon: User },
    { href: '/account/orders', label: 'Order History', icon: Package },
    { href: '/account/settings', label: 'Account Settings', icon: Settings },
];

export default function AccountLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="bg-neutral-50 min-h-[calc(100vh-80px)] pt-10 pb-20">
            <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-16">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight">My Account</h1>
                    <p className="text-neutral-500 mt-2">Manage your orders, profile, and preferences.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">

                    {/* Sidebar Navigation */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <nav className="flex flex-col gap-2">
                            {NAV_ITEMS.map((item) => {
                                const isActive = pathname === item.href;
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all font-medium ${isActive
                                                ? 'bg-black text-white shadow-md'
                                                : 'bg-white text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 border border-neutral-200 shadow-sm'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className="w-5 h-5" />
                                            {item.label}
                                        </div>
                                        {isActive && <ChevronRight className="w-4 h-4 opacity-50" />}
                                    </Link>
                                );
                            })}

                            <button className="flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-medium bg-white text-red-600 hover:bg-red-50 border border-neutral-200 mt-6 shadow-sm text-left">
                                <LogOut className="w-5 h-5" />
                                Sign Out
                            </button>
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 w-full min-w-0">
                        {children}
                    </main>

                </div>
            </div>
        </div>
    );
}
