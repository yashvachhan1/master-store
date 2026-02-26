import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-neutral-50 border-t border-neutral-200">
            <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <span className="text-xl font-bold tracking-tighter text-black">MASTER STORE</span>
                        <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
                            Premium quality essentials designed with purpose and built for everyday life. Elevate your standard.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-black uppercase tracking-wider">Shop</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {['All Products', 'New Arrivals', 'Bestsellers', 'Sale'].map((item) => (
                                        <li key={item}>
                                            <Link href="#" className="text-sm text-neutral-500 hover:text-black transition-colors">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold text-black uppercase tracking-wider">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {['About Us', 'Sustainability', 'Careers', 'Press'].map((item) => (
                                        <li key={item}>
                                            <Link href="#" className="text-sm text-neutral-500 hover:text-black transition-colors">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-black uppercase tracking-wider">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {['Help Center', 'Shipping', 'Returns', 'Contact Us'].map((item) => (
                                        <li key={item}>
                                            <Link href="#" className="text-sm text-neutral-500 hover:text-black transition-colors">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-neutral-200 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-sm text-neutral-400">
                        &copy; {new Date().getFullYear()} Master Store, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
