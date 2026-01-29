import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogResizeTips from './pages/BlogResizeTips';
import BlogDocumentGuide from './pages/BlogDocumentGuide';
import BlogBestPractices from './pages/BlogBestPractices';
import Blogs from './pages/Blogs';
import BlogPanEssentialInfo from './pages/BlogPanEssentialInfo';
import BlogPanApplyUpdate from './pages/BlogPanApplyUpdate';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/resize-tips" element={<BlogResizeTips />} />
            <Route path="/blog/document-guide" element={<BlogDocumentGuide />} />
            <Route path="/blog/best-practices" element={<BlogBestPractices />} />
            <Route path="/blog/pan-essential-info" element={<BlogPanEssentialInfo />} />
            <Route path="/blog/pan-apply-update" element={<BlogPanApplyUpdate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
