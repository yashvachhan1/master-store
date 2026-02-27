import Link from 'next/link';
import { Package, MapPin, CreditCard, ChevronRight } from 'lucide-react';

export default function AccountOverviewPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Welcome Banner */}
            <div className="bg-neutral-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
                <div className="relative z-10">
                    <h2 className="text-2xl font-extrabold mb-2">Welcome back, John!</h2>
                    <p className="text-neutral-400 max-w-md">Access your latest orders, manage your shipping addresses, and update your profile details.</p>
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <Link href="/account/orders" className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-black transition-all group flex flex-col justify-between h-40">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                        <Package className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-bold text-neutral-900 flex items-center gap-2">Orders <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" /></h3>
                        <p className="text-sm text-neutral-500 mt-1">Track and manage purchases</p>
                    </div>
                </Link>

                <Link href="/account/settings" className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-black transition-all group flex flex-col justify-between h-40">
                    <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-bold text-neutral-900 flex items-center gap-2">Addresses <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" /></h3>
                        <p className="text-sm text-neutral-500 mt-1">Manage shipping locations</p>
                    </div>
                </Link>

                <Link href="/account/settings" className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-black transition-all group flex flex-col justify-between h-40">
                    <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                        <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-bold text-neutral-900 flex items-center gap-2">Payment <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" /></h3>
                        <p className="text-sm text-neutral-500 mt-1">Saved methods & billing</p>
                    </div>
                </Link>

            </div>

            {/* Recent Orders Snippet */}
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 border-b border-neutral-100 flex items-center justify-between bg-neutral-50">
                    <h3 className="font-bold text-neutral-900">Recent Orders</h3>
                    <Link href="/account/orders" className="text-sm font-bold text-neutral-600 hover:text-black transition-colors flex items-center gap-1">
                        View All <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between py-4 border-b border-neutral-100 last:border-0 last:pb-0">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-16 bg-neutral-100 rounded overflow-hidden flex-shrink-0">
                                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=150&auto=format&fit=crop" alt="Item" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-sm text-neutral-900">ORD-592815</p>
                                <p className="text-xs text-neutral-500 mt-0.5">Oct 24, 2026 • 2 Items</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-sm text-neutral-900">$155.00</p>
                            <span className="inline-block mt-1 px-2.5 py-1 bg-green-50 text-green-700 font-bold text-[10px] uppercase tracking-wider rounded-md">Delivered</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
