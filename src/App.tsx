import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import AuthorizedDealers from './components/AuthorizedDealers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppToggle from './components/WhatsAppToggle';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <About />
      <AuthorizedDealers />
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsAppToggle />
    </div>
  );
}

export default App;