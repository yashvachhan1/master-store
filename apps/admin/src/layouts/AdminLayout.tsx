import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Users, Tags, Settings } from 'lucide-react';

export const AdminLayout = () => {
    const location = useLocation();

    const navigation = [
        { name: 'Dashboard', href: '/', icon: LayoutDashboard },
        { name: 'Products', href: '/products', icon: ShoppingBag },
        { name: 'Categories', href: '/categories', icon: Tags },
        { name: 'Customers & Roles', href: '/customers', icon: Users },
        { name: 'Settings', href: '/settings', icon: Settings },
    ];

    return (
        <div className="flex h-screen bg-neutral-900 text-white font-sans">
            {/* Sidebar */}
            <div className="w-64 flex flex-col bg-neutral-950 border-r border-neutral-800">
                <div className="flex h-16 shrink-0 items-center px-6">
                    <span className="text-xl font-bold tracking-tight text-white">Master Admin</span>
                </div>
                <nav className="flex-1 space-y-1 px-3 py-4">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                                        ? 'bg-blue-600 text-white'
                                        : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                                    }`}
                            >
                                <item.icon
                                    className={`mr-3 h-5 w-5 shrink-0 ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-white'
                                        }`}
                                    aria-hidden="true"
                                />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Main content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                <header className="flex h-16 shrink-0 items-center justify-between border-b border-neutral-800 bg-neutral-950 px-8">
                    <h1 className="text-lg font-semibold text-white">
                        {navigation.find((n) => n.href === location.pathname)?.name || 'Dashboard'}
                    </h1>
                    <div className="flex items-center gap-4">
                        {/* Admin Profile simple icon */}
                        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                            A
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-8 bg-neutral-900">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
