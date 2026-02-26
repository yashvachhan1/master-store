export const DashboardPage = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Metric Cards placeholders */}
                {['Total Revenue', 'Total Orders', 'Active Customers', 'Products in Stock'].map((metric) => (
                    <div key={metric} className="overflow-hidden rounded-xl bg-neutral-800 p-6 shadow-md border border-neutral-700">
                        <dt className="truncate text-sm font-medium text-neutral-400">{metric}</dt>
                        <dd className="mt-2 text-3xl font-bold tracking-tight text-white">---</dd>
                    </div>
                ))}
            </div>

            <div className="mt-8 rounded-xl bg-neutral-800 p-8 shadow-md border border-neutral-700 h-96 flex items-center justify-center">
                <p className="text-neutral-500">Sales Chart Placeholder</p>
            </div>
        </div>
    );
};
