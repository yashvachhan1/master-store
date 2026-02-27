import { ExternalLink, Package } from 'lucide-react';
import Link from 'next/link';

const MOCK_ORDERS = [
    {
        id: 'ORD-592815',
        date: 'Oct 24, 2026',
        total: 155.00,
        status: 'Delivered',
        statusColor: 'bg-green-50 text-green-700',
        items: [
            { name: 'Classic Cotton T-Shirt', qty: 2, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=150&auto=format&fit=crop' },
            { name: 'Essential Denim Jacket', qty: 1, image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=150&auto=format&fit=crop' }
        ]
    },
    {
        id: 'ORD-104928',
        date: 'Sep 12, 2026',
        total: 89.99,
        status: 'Shipped',
        statusColor: 'bg-blue-50 text-blue-700',
        items: [
            { name: 'Minimalist Leather Wallet', qty: 1, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=150&auto=format&fit=crop' }
        ]
    }
];

export default function OrderHistoryPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-6 sm:p-8">
                <h2 className="text-2xl font-extrabold text-neutral-900 mb-6 flex items-center gap-3">
                    <Package className="w-6 h-6 text-neutral-400" />
                    Order History
                </h2>

                {MOCK_ORDERS.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-neutral-500 mb-4">You haven't placed any orders yet.</p>
                        <Link href="/collections/all" className="font-bold text-black border-b border-black pb-0.5 hover:text-neutral-600 hover:border-neutral-600 transition-colors">Start Shopping</Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {MOCK_ORDERS.map((order) => (
                            <div key={order.id} className="border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-300 transition-colors shadow-sm hover:shadow-md">
                                {/* Order Header */}
                                <div className="bg-neutral-50 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200">
                                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                                        <div>
                                            <p className="text-neutral-500 font-medium text-xs mb-0.5 uppercase tracking-wider">Order Placed</p>
                                            <p className="font-bold text-neutral-900">{order.date}</p>
                                        </div>
                                        <div>
                                            <p className="text-neutral-500 font-medium text-xs mb-0.5 uppercase tracking-wider">Total</p>
                                            <p className="font-bold text-neutral-900">${order.total.toFixed(2)}</p>
                                        </div>
                                        <div>
                                            <p className="text-neutral-500 font-medium text-xs mb-0.5 uppercase tracking-wider">Order #</p>
                                            <p className="font-bold text-neutral-900">{order.id}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                                        <span className={`inline-block px-3 py-1 font-bold text-[11px] uppercase tracking-wider rounded-full ${order.statusColor}`}>
                                            {order.status}
                                        </span>
                                        <button className="text-sm font-bold text-neutral-600 hover:text-black transition-colors flex items-center gap-1.5">
                                            View Invoice <ExternalLink className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div className="p-6 bg-white flex flex-col gap-6">
                                    {order.items.map((item, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="w-16 h-20 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0 border border-neutral-200">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-sm text-neutral-900">{item.name}</h4>
                                                <p className="text-sm text-neutral-500 mt-1">Qty: {item.qty}</p>
                                                <div className="mt-3 flex gap-3">
                                                    <button className="text-xs font-bold text-white bg-black hover:bg-neutral-800 px-4 py-2 rounded shadow-sm transition-colors">Buy Again</button>
                                                    <button className="text-xs font-bold text-neutral-600 bg-white border border-neutral-200 hover:bg-neutral-50 px-4 py-2 rounded transition-colors">Review</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
