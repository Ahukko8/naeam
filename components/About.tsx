/* eslint-disable @next/next/no-img-element */
// components/About.tsx
export function About() {
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Learn more about our story and mission.
            </p>
          </div>
  
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img
                src="/api/placeholder/600/400"
                alt="About Us"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Our Story
              </h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }