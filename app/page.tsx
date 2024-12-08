import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <section className="hero bg-gray-100 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900">Welcome to Our Laptop Brand</h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover the latest in high-performance laptops designed for work and play.
        </p>
        <div className="mt-6 space-x-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
            Call to Action
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300 transition">
            See More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-16 px-8 bg-white grid md:grid-cols-3 gap-8">
        <div className="feature text-center">
          <h2 className="text-2xl font-semibold text-gray-900">High Performance</h2>
          <p className="mt-2 text-gray-600">
            Experience powerful processors and high-end graphics for seamless multitasking, gaming, and content creation.
          </p>
          <div className="mt-4">
            <Image
              src="/images/f1.jpg"
              alt="High performance laptop"
              width={400}
              height={300}
              loading="lazy"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            See More
          </button>
        </div>
        <div className="feature text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Sleek Design</h2>
          <p className="mt-2 text-gray-600">
            Our laptops are designed to be slim, lightweight, and stylish, making them perfect for both work and play.
          </p>
          <div className="mt-4">
            <Image
              src="/images/f2.jpg"
              alt="Sleek design laptop"
              width={400}
              height={300}
              loading="lazy"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            See More
          </button>
        </div>
        <div className="feature text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Long Battery Life</h2>
          <p className="mt-2 text-gray-600">
            Stay productive on the go with our laptops, offering up to 12 hours of battery life on a single charge.
          </p>
          <div className="mt-4">
            <Image
              src="/images/f3.jpg"
              alt="Long battery life laptop"
              width={400}
              height={300}
              loading="lazy"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            See More
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
