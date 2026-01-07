"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductLibraryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Analytics', 'Cloud & Infrastructure', 'Industry Solutions', 'Sustainability'];

  const products = [
    { name: 'AI Insights Engine', category: 'AI & Analytics', badge: 'NEW', price: 'Enterprise', rating: 4.9 },
    { name: 'Supply Chain Optimizer', category: 'Industry Solutions', badge: 'POPULAR', price: 'Custom', rating: 4.8 },
    { name: 'Customer 360 Platform', category: 'AI & Analytics', badge: '', price: 'Enterprise', rating: 4.7 },
    { name: 'Carbon Tracker Pro', category: 'Sustainability', badge: 'NEW', price: 'Standard', rating: 4.9 },
    { name: 'Cloud Migration Suite', category: 'Cloud & Infrastructure', badge: '', price: 'Custom', rating: 4.6 },
    { name: 'Retail AI Assistant', category: 'Industry Solutions', badge: 'POPULAR', price: 'Enterprise', rating: 4.8 },
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-12">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <div className="text-4xl font-black text-purple-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Products</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <div className="text-4xl font-black text-pink-600 mb-2">200+</div>
            <div className="text-sm text-gray-600">Implementations</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <div className="text-4xl font-black text-red-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <div className="text-4xl font-black text-orange-600 mb-2">$5B+</div>
            <div className="text-sm text-gray-600">Value Created</div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((product, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Product Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative">
                <div className="text-7xl">🚀</div>
                {product.badge && (
                  <div className={`absolute top-4 right-4 px-4 py-1 rounded-full text-xs font-bold ${
                    product.badge === 'NEW' ? 'bg-green-500 text-white' : 'bg-yellow-400 text-gray-900'
                  }`}>
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-xs font-semibold text-purple-600 mb-2">{product.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Transform your business with cutting-edge AI technology and proven frameworks.
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-gray-500">Starting at</div>
                    <div className="text-lg font-black text-gray-900">{product.price}</div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-purple-600 text-white py-3 rounded-full font-bold hover:bg-purple-700 transition-all">
                    Learn More
                  </button>
                  <button className="px-4 py-3 border-2 border-gray-300 rounded-full hover:border-purple-600 transition-all">
                    🔖
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 rounded-3xl p-12 text-white mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold mb-4">
                FEATURED SOLUTION
              </div>
              <h2 className="text-4xl font-black mb-4">AI Transformation Suite</h2>
              <p className="text-lg mb-6 opacity-90">
                Complete end-to-end AI implementation platform with 10+ integrated tools, professional services, and ongoing support.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Full-stack AI capabilities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> 24/7 expert support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Custom integration
                </li>
              </ul>
              <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg">
                Request Demo
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-8xl">🎯</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductLibraryPage;
