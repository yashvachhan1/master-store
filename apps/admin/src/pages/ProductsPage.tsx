import { useEffect, useState } from 'react';
import { ProductService } from '../services/apiCore';
import { Plus, Search } from 'lucide-react';

export const ProductsPage = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ProductService.getAll()
            .then(setProducts)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-white">Products</h2>
                <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors">
                    <Plus className="h-4 w-4" />
                    Add Product
                </button>
            </div>

            <div className="flex items-center gap-4 bg-neutral-800 p-4 rounded-xl border border-neutral-700">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full rounded-md border border-neutral-700 bg-neutral-900 py-2 pl-10 pr-4 text-sm text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 shadow">
                <table className="min-w-full divide-y divide-neutral-700">
                    <thead className="bg-neutral-900/50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">Stock</th>
                            <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-neutral-400">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-700 bg-neutral-800">
                        {loading ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-4 text-center text-sm text-neutral-400">Loading products...</td>
                            </tr>
                        ) : products.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-4 text-center text-sm text-neutral-400">No products found. Add your first product!</td>
                            </tr>
                        ) : (
                            products.map((product) => (
                                <tr key={product.id} className="hover:bg-neutral-700/50 transition-colors">
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0 rounded-md bg-neutral-700 overflow-hidden">
                                                {product.images?.[0] ? (
                                                    <img src={product.images[0]} alt="" className="h-full w-full object-cover" />
                                                ) : (
                                                    <div className="h-full w-full flex items-center justify-center text-neutral-500 text-xs">No img</div>
                                                )}
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-white">{product.name}</div>
                                                <div className="text-sm text-neutral-400">{product.slug}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-neutral-300">
                                        <span className="inline-flex items-center rounded-full bg-neutral-700 px-2.5 py-0.5 text-xs font-medium text-neutral-200">
                                            {product.category?.name || 'Uncategorized'}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-white font-medium">
                                        ₹{product.price}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-neutral-300">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${product.stock > 10 ? 'bg-green-500/10 text-green-400' : product.stock > 0 ? 'bg-yellow-500/10 text-yellow-400' : 'bg-red-500/10 text-red-400'}`}>
                                            {product.stock} in stock
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                        <button className="text-blue-400 hover:text-blue-300">Edit</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
