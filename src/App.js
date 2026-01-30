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
import PanResizer from './pages/PanResizer';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Disclaimer from './pages/Disclaimer';
import BlogPanResizerGuide from './pages/BlogPanResizerGuide';
import BlogNSDLvsUTIComparison from './pages/BlogNSDLvsUTIComparison';
import BlogImageOptimizationForPAN from './pages/BlogImageOptimizationForPAN';

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
            <Route path="/tools/pan-resizer" element={<PanResizer />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/blog/pan-resizer-guide" element={<BlogPanResizerGuide />} />
            <Route path="/blog/nsdl-vs-uti" element={<BlogNSDLvsUTIComparison />} />
            <Route path="/blog/image-optimization" element={<BlogImageOptimizationForPAN />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
