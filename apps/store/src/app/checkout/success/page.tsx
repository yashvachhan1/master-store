import Link from 'next/link';
import { CheckCircle2, Package, ArrowRight, Home } from 'lucide-react';

export default function CheckoutSuccessPage() {
    // Generate a random order number for the mockup
    const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

    return (
        <div className="bg-neutral-50 min-h-screen py-20 px-6 sm:px-10 lg:px-16 flex items-center justify-center">
            <div className="max-w-2xl w-full bg-white rounded-3xl p-10 sm:p-14 shadow-xl border border-neutral-100 text-center animate-in zoom-in-95 duration-500">

                {/* Success Icon */}
                <div className="mx-auto w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-12 h-12" />
                </div>

                {/* Title & Message */}
                <h1 className="text-4xl font-extrabold text-neutral-900 mb-4 tracking-tight">Order Confirmed!</h1>
                <p className="text-lg text-neutral-500 mb-8 max-w-md mx-auto">
                    Thank you for shopping with us. We have received your order and are getting it ready to ship.
                </p>

                {/* Order Details Card */}
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8 mb-10 text-left">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-neutral-200">
                        <div>
                            <p className="text-sm font-medium text-neutral-500">Order Number</p>
                            <p className="text-xl font-bold text-neutral-900">{orderNumber}</p>
                        </div>
                        <div className="sm:text-right">
                            <p className="text-sm font-medium text-neutral-500">Date</p>
                            <p className="text-base font-bold text-neutral-900">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                            <Package className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                            <h3 className="font-bold text-neutral-900">What happens next?</h3>
                            <p className="text-sm text-neutral-500 mt-1">
                                You will receive an email confirmation with your receipt and tracking information once your order has shipped.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/collections/all" className="w-full sm:w-auto px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-colors rounded-xl font-bold text-base flex items-center justify-center group shadow-md shadow-black/10">
                        Continue Shopping <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/" className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50 transition-colors rounded-xl font-bold text-base flex items-center justify-center">
                        <Home className="w-4 h-4 mr-2 text-neutral-500" /> Back to Home
                    </Link>
                </div>

            </div>
        </div>
    );
}
