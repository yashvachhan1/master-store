import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[80vh] items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="h-full w-full object-cover opacity-40 mix-blend-overlay grayscale"
          />
        </div>
        <div className="relative z-10 flex max-w-4xl flex-col items-center px-4 text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-neutral-700 bg-neutral-800/50 px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur-sm">
            Fall / Winter 2026 Collection
          </span>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
            ELEVATE <br /> YOUR EVERYDAY
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-neutral-300 sm:text-xl">
            Premium essentials designed without compromise. Discover our latest collection crafted for the modern lifestyle.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/collections/all"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3.5 font-bold text-black transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative">Shop Collection</span>
            </Link>
            <Link
              href="/collections/about"
              className="inline-flex items-center justify-center rounded-full border border-neutral-600 bg-transparent px-8 py-3.5 font-bold text-white transition-all hover:bg-neutral-800"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Featured Collections</h2>
            <Link href="/collections" className="text-sm font-semibold text-neutral-600 hover:text-black">
              View all collections <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {/* Category Cards (Placeholders) */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative">
                <div className="h-80 w-full overflow-hidden rounded-xl bg-neutral-200 group-hover:opacity-75 sm:h-96">
                  <img
                    src={`https://images.unsplash.com/photo-1${500000000000 + item}?auto=format&fit=crop&w=800&q=80`}
                    alt="Category"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-lg font-bold text-black">
                  <Link href="#">
                    <span className="absolute inset-0" />
                    ESSENTIALS PACK {item}
                  </Link>
                </h3>
                <p className="text-sm text-neutral-500">Shop now</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
