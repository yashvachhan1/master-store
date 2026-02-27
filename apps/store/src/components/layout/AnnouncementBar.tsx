'use client';

import { useState } from 'react';
import type { ReactElement } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export function AnnouncementBar(): ReactElement | null {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="bg-neutral-900 text-white px-4 py-2.5 flex items-center justify-center relative w-full z-50">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-center pr-8 sm:pr-0">
                <span className="opacity-80">Elevate your everyday. Enjoy free global shipping on all orders over $100.</span>{' '}
                <Link href="/collections/all" className="font-bold underline underline-offset-2 hover:text-neutral-300 transition-colors ml-1">
                    Shop Now
                </Link>
            </p>
            <button
                type="button"
                onClick={() => setIsVisible(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
                aria-label="Dismiss announcement"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
}
