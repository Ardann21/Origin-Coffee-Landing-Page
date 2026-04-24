/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Philosophy = lazy(() => import('./pages/Philosophy'));
const Catalogue = lazy(() => import('./pages/Catalogue'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Locations = lazy(() => import('./pages/Locations'));
const Contact = lazy(() => import('./pages/Contact'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0B0807]">
    <div className="w-12 h-12 border-4 border-[#F3E5D8]/10 border-t-[#F3E5D8] rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/catalogue/:slug" element={<ProductDetail />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home for unfinished pages */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
