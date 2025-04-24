
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import earphoneData from "@/data/earphones.json";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Experience Wireless Freedom
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of wireless earphones designed for exceptional sound quality and comfort.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {earphoneData.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Premium Sound</h3>
              <p className="text-gray-600">Experience crystal clear audio with deep, rich bass.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Long Battery Life</h3>
              <p className="text-gray-600">Enjoy up to 30 hours of playback time.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Comfort First</h3>
              <p className="text-gray-600">Ergonomically designed for all-day wear.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
